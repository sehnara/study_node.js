const http = require("http");

const courses = [{ name: "sehoon" }, { name: "ellie" }];

const server = http.createServer((req, res) => {
  const url = req.url; // what
  const method = req.method; // how? aciton?

  if (url === "/") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(courses));
    } else if (method === "POST") {
      const body = [];
      req.on("data", (chunck) => {
        console.log(chunck);
        bpdy.push(chunck)
      })
      req.on('end', () => {
        const course = JSON.parse(Buffer.concat(body).toString())
        
      });
    }
  }
});

// 2. server를 port에 등록
server.listen(8080);
