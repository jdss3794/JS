const title = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
  console.log('title was clicked');
  title.innerText = 'mouse is clicked!';
  title.style.color = 'blue';
} /* 클릭했을때 어떤행동을 취할지 위에 함수로 정해줘야함 */

function handleMouseEnter() {
  title.innerText = 'mouse is here!';
  title.style.color = 'red';
} /* 클릭했을때 어떤행동을 취할지 위에 함수로 정해줘야함 */

function handleMouseLeave() {
  title.innerText = 'mouse is gone';
  title.style.color = 'green';
} /* 클릭했을때 어떤행동을 취할지 위에 함수로 정해줘야함 */

title.addEventListener('click', handleTitleClick);
/* title을 click했을때 handleTitleClick 함수가 작동해야함*/
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);
