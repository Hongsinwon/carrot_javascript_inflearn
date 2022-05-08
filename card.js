//명함 만들기

function 명함() {
  let 이름 = "서스포PAR";
  let 나이 = 30;

  console.log("이름 : " + 이름);
  console.log("직업 : 개발자");
  console.log("나이 : " + 나이);
  console.log("슾님은 제 별명입니다.");
}

// 객체
let 명함객체 = {
  이름: "서스포PAR",
  나이: 30,
  직업: "개발자",
  출력() {
    console.log("이름 : " + 명함객체.이름);
    // 이름만 작성하면 변수에 접근하겠다라는 의미
    console.log("나이 : " + this.나이);
  },
};

console.log(명함객체);
//{이름: "서스포PAR", 나이: 30, 직업: "개발자", f 출력()};

console.log(명함객체.출력()); //이름: "서스포PAR" 나이: 30
