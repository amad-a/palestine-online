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

function setInitWallpaper() {
  console.log('cur wallpaper, ');
  const currentWallpaper = sessionStorage.getItem('wallpaper');
  console.log('cur wallpaper, ', sessionStorage.getItem('wallpaper'));
  document.body.id = 'b' + sessionStorage.getItem('wallpaper');
}

function setWallpaper() {
  console.log('hey');
  const currentWallpaper = sessionStorage.getItem('wallpaper');
  console.log('curr wall', currentWallpaper);
  let num = parseInt(currentWallpaper) || 0;
  num += 1;
  if (num > 12) num = 0;
  document.body.id = 'b' + num.toString();
  sessionStorage.setItem('wallpaper', num.toString());
}
