// 모든 숫자 합
let 수 = [1, 5, -10, 200, 40];

function 모든숫자합(숫자들) {
  return 숫자들.reduer((a, b) => a + b);
}

function 합(숫자들) {
  let 숫자 = 0;

  for (let i = 0; i < 숫자들.length; i++) {
    if (숫자 < 숫자들[i]) {
      숫자 = 숫자 + 숫자들[i];
    }
  }
  return console.log(숫자);
}

모든숫자합(수);
합(수);
