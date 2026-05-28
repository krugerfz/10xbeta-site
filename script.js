// ── Chevron pattern (drawn into any .chevfield SVG on the page) ──
function drawChevrons(svg) {
  let out = '';
  const size = 14, stepX = 22, stepY = 30;
  for (let y = 10; y < 600; y += stepY) {
    for (let x = 10; x < 400; x += stepX) {
      out += `<path d="M${x} ${y} l${size*0.5} ${size*0.5} l${-size*0.5} ${size*0.5}" stroke="#0387D1" stroke-width="1.5" fill="none" opacity="0.35"/>`;
    }
  }
  svg.innerHTML = out;
}
document.querySelectorAll('svg.chevfield').forEach(drawChevrons);

// ── Hero product cross-fade (home only) ──
// Skips cycling entirely if there's only one slide.
(function cycleHero() {
  const stage = document.getElementById('hero-stage');
  if (!stage) return;
  const slides = stage.querySelectorAll('.cyc');
  if (slides.length <= 1) return;
  const dotsWrap = document.getElementById('hero-dots');
  if (dotsWrap) {
    slides.forEach((_, i) => {
      const d = document.createElement('span');
      if (i === 0) d.classList.add('on');
      dotsWrap.appendChild(d);
    });
  }
  const dots = dotsWrap ? dotsWrap.querySelectorAll('span') : [];
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove('on');
    if (dots[idx]) dots[idx].classList.remove('on');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('on');
    if (dots[idx]) dots[idx].classList.add('on');
  }, 4000);
})();
