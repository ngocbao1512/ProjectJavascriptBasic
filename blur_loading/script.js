const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 50);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = load+'%';
  loadText.style.opacity = 1 - load/100;
  bg.style.filter = `blur(${scale(load, 100, 30)}px)`;
}

const scale = (num, in_max, out_min) => {
  return (num * (-out_min)) /in_max + out_min;
}
