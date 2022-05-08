//가장 큰 수 찾기
let 숫자들 = [1, 5, -10, 200, 40];

function 가장큰수(숫자들) {
  let 숫자 = 0;

  for (let i = 0; i < 숫자들.length; i++) {
    if (숫자 < 숫자들[i]) {
      숫자 = 숫자들[i];
    }
  }
  return console.log(숫자);
}

가장큰수(숫자들);
