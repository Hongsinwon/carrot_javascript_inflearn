//구구단 만들기

//반복문
function 구구단() {
  for (let x = 2; x <= 9; x++) {
    for (let y = 1; y <= 9; y++) {
      console.log(`${x} X ${y} = ${x * y}`);
    }
  }
}

구구단();

function 구식구구단계산(a) {
  console.log(a * 1);
  console.log(a * 2);
  console.log(a * 3);
  console.log(a * 4);
  console.log(a * 5);
  console.log(a * 6);
  console.log(a * 7);
  console.log(a * 8);
  console.log(a * 9);
}

function 구구단계산(a) {
  for (let y = 1; y <= 9; y++) {
    console.log(`${a} X ${y} = ${a * y}`);
  }
}

구구단계산(2);
