let 광어 = 100;

console.log(광어); // 100
광어; // 100

function 가격측정(광어) {
  console.log(광어);
}

가격측정(광어); //100

function 뉴가격측정(물고기) {
  console.log(물고기 * 10);
}

뉴가격측정(광어); //1000

// 배열 : 동일한 특성을 가지며 일정한 규칙에 따라 여러 요소가 나열되는 데이터의 집합

let 광어들 = [100, 150, 200, 50];
광어들; // (4) [100, 150, 200, 50]

광어들[0]; // 100
광어들[3]; // 50

뉴가격측정(광어들[0]); //1000
뉴가격측정(광어들[2]); //2000

function 배열가격측정(물고기) {
  for (let p = 0; p < 물고기.lenght; p++) {
    console.log(물고기[p]);
  }
}

배열가격측정(광어들);
