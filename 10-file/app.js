const fs = require("fs");

// 모든 API '3'가지 형식으로 제공

// 1. rename(....., calback(error, data)) : 비동기

fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.log(error);
});
console.log("hello");


// 2. try {renameSync(....)} catch(e){} : 동기, try-catch 써야해서 별로 안 좋음
try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (e) {
  console.error(e);
}


// 3. promises.rename().then().catch(0)
fs.promises
  .rename("./text.txt", "/text-new.txt")
  .then(() => {
    console.log("DONE!");
  })
  .catch(console.error);
