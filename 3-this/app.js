// this는 어디에 쓰느냐에 따라 달라진다.

// 1. 함수 내에서 쓰일 때는 global
function hello() {
  // 함수 내에서 this 호출하면 global이다.
  console.log(this);
}
hello();

// 2. class 내에서는 class 자체
class A {
  constructor(num) {
    this.num = num;
  }

  memberFunction() {
    console.log(this);
  }
}
const a = new A(2);
a.memberFunction();

// 3. 아예 밖으로 나가면 아무것도 아님
// this는 module exports이다.
