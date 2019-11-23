/*
  getting hours and minutes from integer minutes
*/

let timeConvert = (num) => {
  time = '';
  m = 0;
  h = Math.floor(num / 60);
  for (let i = num; i > 0; i -= 60){
    if (i < 60){
      m = i < 10 ? '0' + i : i;
    }
  }
  time += h + ':' + m;
  return time; 

}
   
console.log(timeConvert(152));