// 어떤 일이 발생하기 전과 후에 이벤트 발동
const EventEmitter = require("events");
class Logger extends EventEmitter {
  log(callback) {
    this.emit("log", "started...");
    callback();
    this.emit("log", "ended...");
  }
}

module.exports.Logger = Logger;
