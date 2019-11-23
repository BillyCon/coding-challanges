let ms = 0;
let s = 0;
let m = 0;
let h = 0;

let timer = setInterval(() => {
  ms++;
  if (ms == 10){
    ms = 0;
    s++;
  }
  if (s == 60){
    s = 0;
    m++;
  }
  if (m == 60){
    m = 0;
    h++;
  }
  s = s < 10 && s[0] != 0 ? '0' + s : s; 
  m = m < 10 && m[0] != 0 ? '0' + m : m; 
  console.log(h + ':' + m + ':' + s + '.' + ms);
}, 100)

console.log(timer);