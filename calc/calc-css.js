let display = document.getElementById('display-2');
let displaytemp = document.getElementById("temp-result"); 
let display2 = document.getElementById('display-1');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                display2.innerText = ''
                break;
            case '=':
                try{
                    display2.innerText = eval(display.innerText);
                    display.innerText =''
                    displaytemp.innerText=""
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'CE':

                   display.innerText = display.innerText.slice(0, -1);
                
                break;
            default:
                if(display.innerText == "0" || display.innerText=="Error")display.innerText= '';
                display.innerText += e.target.innerText;
                try{
                    if(display.innerText==""){
                        displaytemp.innerText = '0'
                    }else{  displaytemp.innerText = eval(display.innerText);}
                  
                    
                } catch {
                   
                }
        }
    });
});