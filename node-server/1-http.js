const http = require("http");
const http2 = require("http2"); // https
const fs = require("fs");
// 개발 단계에서 https를 쓰는 건 복잡하니,
// 배포할 때 http2로 바꾸고 개발할 때는 http로 하는 게 좋다.

console.log(http.STATUS_CODES);
console.log(http.METHODS);

// 1. server 만들기
const server = http.createServer((req, res) => {
  console.log("incoming...");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    fs.createReadStream(`./html/welcome.html`).pipe(res);
  } else if (url === "/courses") {
    fs.createReadStream(`./html/courses.html`).pipe(res);
  } else {
    fs.createReadStream(`./html/notfound.html`).pipe(res);
  }
});

// 2. server를 port에 등록
server.listen(8080);
