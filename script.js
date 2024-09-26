const cube = document.getElementById('cube');
let isMouseDown = false;
let startX, startY;
let currentX = 0, currentY = 0;

document.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.clientX;
  startY = e.clientY;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

document.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;

  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  currentX += dx * 0.5;
  currentY -= dy * 0.5;
  
  cube.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;
  
  startX = e.clientX;
  startY = e.clientY;
});
