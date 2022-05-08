//체온계 만들기

// 조건문
if (37.0 < 40.0) {
  console.log("고온 입니다.");
}

if (34.0 < 35.0) {
  console.log("저온 입니다");
}

if (36.5 < 37.0 && 34.0 < 36.5) {
  console.log("정상입니다");
}


function 체온계 (a) {
  if(a < 34.0) {
    console.log("저온 입니다.")
  } else if (34.0 < a && a < 37.0) {
    console.log("정상 입니다.")
  } else {
    console.log("고열 입니다.")
  }
}

체온계(20) //저온
체온계(36.5) //정상
체온계(40) //고온