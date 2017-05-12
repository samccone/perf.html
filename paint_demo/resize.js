const resize = document.querySelector('.to-resize');

window.addEventListener('brush-change', (e) => {
  resize.style.transform = `scale(${e.detail.brushSize})`;
});
