//set saved wallpaper on load
document.documentElement.id =
  'b' + sessionStorage.getItem('wallpaper');

function toggleInfo() {
  let panel = document.getElementById('info-panel-container');
  panel.style.visibility === 'hidden'
    ? (panel.style.visibility = 'visible')
    : (panel.style.visibility = 'hidden');
}

function changeIframe(src) {
  let panel = document.getElementById('info-panel-container');
  panel.style.visibility = 'hidden';
  document.getElementById('frame').src = src;
}

function setWallpaper() {
  const currentWallpaper = sessionStorage.getItem('wallpaper');
  let num = parseInt(currentWallpaper) || 0;
  num += 1;
  if (num > 12) num = 0;
  document.documentElement.id = 'b' + num.toString();
  sessionStorage.setItem('wallpaper', num.toString());
}
