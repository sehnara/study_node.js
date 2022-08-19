const fs = require("fs").promises;

// read a file
fs.readFile("./text.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch(console.error);

fs.writeFile("./file.txt", "Hello, Sehoon").catch();

fs.appendFile("./file.txt", "Yo, Sehoon")
.then(()=>{
    fs.copyFile("./file.txt", './file2.txt')
}).catch();

// folder
fs.mkdir('sub-folder').catch(console.error)
fs.readdir('./').then(console.log).catch(console.error)

// api를 쓸 때는 인자는 뭐가 있고, 옵션은 뭐있는지, 리턴은 뭐하는지, promise라면 catch하는 거 있는지