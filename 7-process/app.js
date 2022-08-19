const process = require("process");

console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env); // 환경 변수
console.log(process.uptime());
console.log(process.cpuUsage());

// 스크립트에 포함된 모든 코드가 수행된 이후에, 0초후에 바로 발동
setTimeout(()=>{
console.log("setTimeOut")
},0)
// 지금은 아닌데, 현재 수행중인 코드 완료되면, 해당 callback을 taskqueue에 넣어달라
// 이 때, task queue 내 우선순위 가장 먼저
process.nextTick(() => {
  console.log("nextTick");
});

for (let i = 0; i < 100; i++) {
    console.log('for loop > ', i)
}