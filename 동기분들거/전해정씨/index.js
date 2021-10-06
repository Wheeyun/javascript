let date = new Date();

//console.log(date); Mon Oct 04 2021 19:46:18 GMT+0900 (한국 표준시)

const renderCalendar = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  //console.log(viewYear); //제일위에 보여지는 년도 2021년
  //console.log(viewMonth); // header 부분의 월

  /*
innerText랑 textContent의 차이 
innerText는 사용자에게 보여지는 텍스트를 가져온다
textcontent는 공백과 숨은 문자열을 다 보여준다
*/
  const year_month = document.querySelector(".year-month");
  year_month.innerText = `${viewYear}년 ${viewMonth + 1}월`;

  const preLast = new Date(viewYear, viewMonth, 0); //저번달의 마지막 날
  const thisLast = new Date(viewYear, viewMonth + 1, 0); // 이번달의 마지막 날

  /*
Date 객체를 생성할 때, 파라미터 date에 해당하는 부분에 0을 넣으면 지난달의 마지막 날의 Date객체가 생성됨 파라미터안의 순서는 상관없음
*/

  const PLDate = preLast.getDate(); //지난 달 마지막날
  const PLDay = preLast.getDay(); // 지난 달 마지막날의 요일

  const TLDate = thisLast.getDate(); //이번 달의 마지막날
  const TLDay = thisLast.getDay(); // 마지막날의 요일

  const prevDates = []; //지난 달 배열
  const thisDates = [...Array(TLDate + 1).keys()].slice(1); //--> 전개를 하는 이유를 모르겠다
  /*
  1. Array(n)  n만큼의 배열을 만들어 낸다 ex) n이 3이면 [undefined, undefined, undefined]가 만들어진다.
     지금은 TLDate + 1이기 때문에 ex) 10월은 31일 32개가 생긴다. 
  2. .keys()메서드를 사용하면 0부터 31까지 번호가 매겨진다. [0, 1, 2, 3, ....,30 ,31]
  3. 제일 앞의 0을 없애기 위해서 slice 메서드를 이용해서 1~31까지 배열을 반환   
*/
  const nextDates = []; //다음 달 배열

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);

  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);
  dates.forEach((date, i) => {
    const condition =
      i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";

    dates[
      i
    ] = `<div class="date"><span class="${condition}">${date}</span></div>`;
  });

  const perfectDates = document.querySelector(".dates");

  perfectDates.innerHTML = dates.join("");

  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll(".this")) {
      if (+date.innerText === today.getDate()) {
        date.classList.add("today");
        break;
      }
    }
  }
};

renderCalendar();

const prevButton = document.querySelector(".go-prev");
const todayButton = document.querySelector(".go-today");
const nextButton = document.querySelector(".go-next");

function prevMonthClick() {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

function goTodayClick() {
  date = new Date();
  renderCalendar();
}

function nextMonthClick() {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}

prevButton.addEventListener("click", prevMonthClick);
todayButton.addEventListener("click", goTodayClick);
nextButton.addEventListener("click", nextMonthClick);
