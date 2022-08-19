// 쓸 때도 stream을 만들 수 있다.
const fs = require("fs");
const writeStream = fs.createWriteStream("./file3.txt");
writeStream.on("finish", () => {
  console.log("finished!");
});

writeStream.write("Hello");
writeStream.write("world!");
writeStream.end();
