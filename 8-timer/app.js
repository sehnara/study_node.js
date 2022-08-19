// call stack과 task queue를 넘나들 수 있는 Timer
let num = 1;

const interval = setInterval(() => {
  console.log(num++);
}, 1000);

setTimeout(() => {
  console.log("TimeOut!");
  clearTimeout(interval);
}, 6000);

