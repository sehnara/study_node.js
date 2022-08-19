// node.js는 컴퓨터 위에서 동작하기 때문에 filesystem에 접근하기 좋다. 이 때 path씀

// 왜 path를 쓸까???
// window나 POSIX 계열에 따라 경로가 다르게 표현된다.
// 그래서 운영체제별로 경로 표기법을 해주어야 한다.

const path = require("path");

// Global 객체에 있는 directoryname과 filename
console.log(__dirname);
console.log(__filename);

console.log(path.sep); // 경로 구분자
console.log(path.delimiter); // 환경변수 구분자

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

// dirname
console.log(path.dirname(__filename));

// extension(확장자)
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);

// isAbsolute (절대경로? 상대경로?)
console.log("isAbsolute?", path.isAbsolute(__dirname));
console.log("isAbsolute?", path.isAbsolute("../"));

// normalize : 경로 틀린거 알아서 잡아줌
console.log(path.normalize('./folder/////////asd'));

//join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));