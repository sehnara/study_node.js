const fs = require("fs");
const data = [];

// highWaterMark : 읽어올 buffer size를 결정
// default : 64kbytes
// 조금씩 읽어오기 때문에 event base이다. 그래서 조금씩 다 읽으면 event를 던져서 우리한테 알려준다.

fs.createReadStream("./file.txt", {
  highWaterMark: 8, // 64kbytes(default)
  encoding: "utf-8",
}).on("data", (chunk) => { // once쓰면 딱 한 번만 작동한다.
  data.push(chunk);
}).on("error", (error) => {
  console.log(error);
}).on('end', ()=>{
    console.log(data.join(''))
})