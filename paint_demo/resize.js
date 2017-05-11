const maxSize = window.innerWidth;
const resize = document.querySelector('.to-resize');

window.addEventListener('brush-change', (e) => {
  resize.style.width = Math.max(maxSize * e.detail.brushSize, 10) + 'px';
});
