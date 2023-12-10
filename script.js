 const display = document.getElementById('display');
$btn = document.querySelectorAll('.btn');
let arr_input = [];



function calculate(btnValue) {
    let value = btnValue.innerText;
   
    if (value === "AC"){
        arr_input = [];
        display.value = "";
    } else if(value === '\u2190'){
        arr_input.pop();
      display.value = arr_input.join("");
    } else {
        arr_input.push(value);
        display.value = arr_input.join("");
    
           if(value === "=")
           {
            try{
            display.value = "";
            arr_input.pop();
            let result = eval(arr_input.join(""))
            arr_input = [];
            display.value = result;
            } catch{
                arr_input = [];
                display.value = "";
                display.value = "Ошибка!";
            }
            }
       }
  }
  
  $btn.forEach(item => item.addEventListener( 'click', (event) => {
                        btnValue = event.target;
                        calculate(btnValue);
                             }));
 