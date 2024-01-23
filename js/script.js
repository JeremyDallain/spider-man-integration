document.addEventListener('mousemove', function (e) {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.body.style.backgroundPosition = (50 + x * 10) + '%' + (50 + y * 10) + '%';
});