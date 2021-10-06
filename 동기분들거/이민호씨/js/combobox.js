const comboForm = document.getElementById('combobox');
const result = document.getElementById('test');

comboForm.addEventListener('list', (e)=>{
    e.preventDefault();
    
  });

  function handleOnChange(e) { // index.html 47에서 error
    //콤보박스가 선택 되면 handleOnChange()를 호출
    //선택된 항목의 index 값을 가져오며, 다음 option의 요소를 가져옴
    const text = e.options[e.selectedIndex].text;
    
    console.log(e.options);
    
    // 선택한 텍스트 출력 (div id값으로 출력 error)
    result.innerText = text;
  }