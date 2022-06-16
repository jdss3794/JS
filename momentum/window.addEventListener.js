const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
  console.log('title was clicked');
  h1.innerText = 'mouse is clicked!';
  h1.style.color = 'blue';
} /* 클릭했을때 어떤행동을 취할지 위에 함수로 정해줘야함 */

function handleMouseEnter() {
  h1.innerText = 'mouse is here!';
  h1.style.color = 'red';
} /* 클릭했을때 어떤행동을 취할지 위에 함수로 정해줘야함 */

function handleMouseLeave() {
  h1.innerText = 'mouse is gone';
  h1.style.color = 'green';
} /* 클릭했을때 어떤행동을 취할지 위에 함수로 정해줘야함 */

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato';
}
function handleWindowCopy() {
  alert('copier!');
}

function handleWindowPaste() {
  alert('paste!');
}

function handleWindowOffline() {
  alert('SOS no WIFI');
}

function handleWindowOnline() {
  alert('Connected GOOOOD!');
}
h1.addEventListener('click', handleTitleClick);
/* title을 click했을때 handleTitleClick 함수가 작동해야함*/
h1.addEventListener('mouseenter', handleMouseEnter);
h1.addEventListener('mouseleave', handleMouseLeave);

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('paste', handleWindowPaste);

window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
