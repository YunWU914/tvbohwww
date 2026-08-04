// Generate gear teeth
(function() {
  var bigTeeth = document.getElementById('bigTeeth');
  var smallTeeth = document.getElementById('smallTeeth');
  if (!bigTeeth || !smallTeeth) return;

  var svgNS = 'http://www.w3.org/2000/svg';

  function makeTeeth(cx, cy, bodyR, toothH, toothW, count, target) {
    for (var i = 0; i < count; i++) {
      var deg = i * 360 / count;
      var rad = deg * Math.PI / 180;
      var midR = bodyR + toothH / 2;
      var tx = cx + midR * Math.cos(rad);
      var ty = cy + midR * Math.sin(rad);

      var rect = document.createElementNS(svgNS, 'rect');
      rect.setAttribute('x', (tx - toothW / 2).toFixed(2));
      rect.setAttribute('y', (ty - toothH / 2).toFixed(2));
      rect.setAttribute('width', toothW);
      rect.setAttribute('height', toothH);
      rect.setAttribute('rx', 1);
      rect.setAttribute('fill', 'url(#gearGrad)');
      rect.setAttribute('stroke', '#1a252f');
      rect.setAttribute('stroke-width', '1.2');
      rect.setAttribute('transform', 'rotate(' + deg.toFixed(2) + ', ' + tx.toFixed(2) + ', ' + ty.toFixed(2) + ')');
      target.appendChild(rect);
    }
  }

  // Big gear: 12 teeth, center (75, 138), body radius 48
  makeTeeth(75, 138, 48, 10, 8, 12, bigTeeth);

  // Small gear: 8 teeth, center (135, 88), body radius 30
  makeTeeth(135, 88, 30, 7, 6, 8, smallTeeth);
})();

// Smooth scroll for anchor links only
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    var id = link.getAttribute('href');
    if (!id || id === '#') return;
    var target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});