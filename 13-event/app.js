const EventEmitter = require("events");
const emitter = new EventEmitter();

// 이밴트 등록 : 원하는 만큼 여러 콜백함수를 등록할 수 있다.
const callback1 = (args) => {
  console.log("first callback -", args);
};
emitter.on("ellie", callback1);
emitter.on("ellie", (args) => {
  console.log("second callback -", args);
});

emitter.emit("ellie", [{ message: 1 }]);
emitter.emit("ellie", [{ message: 2 }]);
emitter.removeListener("ellie", callback1);
emitter.emit("ellie", [{ message: 3 }]);


// RESULT 
// on(등록), emit(발동), removeListner(지우기), removeAllListers(다 지우기)