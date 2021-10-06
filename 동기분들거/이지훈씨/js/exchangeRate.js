const KEY = 'JMT6c7iBFEqBhzjHeu5MNMGj431pIsjg';
const date = new Date();
const today = String(date.getFullYear()) + String(date.getMonth()+1).padStart(2,"0") + String(date.getDate()).padStart(2,"0");
const url = `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${KEY}&searchdate=${today}&data=AP01`;
//const url = `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${KEY}&searchdate=20211001&data=AP01`;
const ration = document.querySelector('#rate');

const body = document.querySelector('body');

exchangeRate();

async function exchangeRate() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        const yen = data[12].bkpr;
        const dollar = data[22].bkpr;
        
        ration.innerHTML = `<strong>100￥ = ${yen}원 / 1$ = ${dollar}원</strong> (${today} 기준)`;

        // 정규표현식 사용하여 콤마 잘라낸 후, number로 바꿈
        const parseIntYen = parseInt(yen.replace(/,/g,""));
       
        if (parseIntYen>1050) {
            console.log("오늘은 한국으로 송금해도 좋아요!");
            body.style.backgroundColor = '#83DCB7';
            
        } else{
            console.log("오늘은 한국으로 송금하기엔 좀 그래");
            body.style.backgroundColor = 'orange';
        }
        
    } catch(e) {
        console.log(`오류 : ${e}`);
    }
    
}

