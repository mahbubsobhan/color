let wrapper = document.querySelector(`.wrapper`);
let btnn = document.querySelector(`.btnn`);

let redd = document.querySelector(`.redd`);
let bluee = document.querySelector(`.bluee`);
let white = document.querySelector(`.white`)

btnn.addEventListener(`click`,function(){
  let red = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  let white = Math.round(Math.random() * 255);

  wrapper.style.background = `rgb(${red},${white},${blue})`;
  
redd.innerHTML = red;
bluee.innerHTML = blue;
white.innerHTML = white;
})