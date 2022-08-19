// buffer = Fixed-size chunk of memory
// array of integers, byte of data

const buf = Buffer.from("HI");
console.log(buf);
// buffer내에 유니코드가 배열형식으로 나옴
console.log(buf.length);
console.log(buf[0]); // ASCII 형식으로 나옴
console.log(buf[1]); // ASCII 형식으로 나옴
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // 초기화하지 않아 fast
buf2[0] = 72
buf2[1] = 105
console.log(buf2);
console.log(buf2.toString());
buf2.copy(buf3)
console.log(buf3);

// concat : 여러가지 buffer를 모을 수 있다.
const buff = Buffer.concat([buf, buf2, buf3])
console.log(buff.toString())