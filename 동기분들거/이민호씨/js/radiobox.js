const radioForm = document.getElementById('radiobox');
const contactNodeList = document.getElementsByName('contact');
const result = document.getElementById('result');

radioForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  
});

function getContact() {
  // getElementsByName()를 사용, 라디오 버튼 node 모두 출력
  //forEach 반복문으로 순회하면서 checked값 true인지 확인
  //true이면 node의 value값을 출력
  contactNodeList.forEach((node) => {
    if(node.checked)  {
      //선택한 밸류 출력
      result.innerText = `선택한 방법은 : ${node.value}`;
        console.log(node);
    }
  });
  
}
