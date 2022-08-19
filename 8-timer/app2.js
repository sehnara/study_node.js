console.log("code 1");
console.time("timeout 0");
setTimeout(() => {
  console.timeEnd("timeout 0");
  console.log("setTimeout 0");
}, 0);
for (let i = 0; i < 100; i++) {
  console.log(i);
}
// console.log('code 2');
// setImmediate(()=>{
// console.log('setImmediate');
// })

// console.log('code 3');
// process.nextTick(()=>{
//     console.log('next tick')
// })
