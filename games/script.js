const fullscreenButton = document.getElementById('fullscreen');
const iframe = document.getElementById('embedz');

fullscreenButton.addEventListener('click', () => {
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    /* Safari */
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) {
    /* IE11 */
    iframe.msRequestFullscreen();
  }
}); 