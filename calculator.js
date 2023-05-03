document.addEventListener("DOMContentLoaded", (e) =>{
    
    const d = document;
    const screenDOM = d.querySelector('.calculator-display');
    const btns = document.querySelectorAll('button');
    const basicMath = ['/', '*', '-', '+'];

    
    function calculate(){
        console.log('calculo');
    }

    function isNumber(char){
        /*This function returns true
        if the supplied string is a number
        and false otherwise*/
        if(typeof char !== 'string'){
            return false;
        }
        if (char.trim() === ''){
            return false;
        }
        return !isNaN(char);
    }

    function calculate(mathExpression){
        //TO-DO
    }

    let lastIsNumber = true;

    for (i of btns) {
        i.addEventListener('click', function() {
            
            

            if (isNumber(this.innerHTML)){ /* if a number is pressed*/ /* or a dot maybe, TO-DO */
                if(screenDOM.innerHTML === '0'){ /* if is the first number pressed*/
                    screenDOM.innerHTML = this.innerHTML;
                    lastIsNumber = true;
                }else{/*otherwise its not the first number pressed */
                    screenDOM.innerHTML = screenDOM.innerHTML + this.innerHTML;
                    lastIsNumber = true;
                }
            }else{ /*a function key was pressed */
                if((lastIsNumber) && (this.innerHTML != '◄')){
                    screenDOM.innerHTML = screenDOM.innerHTML + this.innerHTML;
                    lastIsNumber = false;
                }else{
                    lastIsNumber = false;
                    screenDOM.innerHTML = screenDOM.innerHTML.slice(0 ,screenDOM.innerHTML.length-1);
                    screenDOM.innerHTML = screenDOM.innerHTML + this.innerHTML;
                }
                if(this.innerHTML === '='){ 
                    let result = calculate(screenDOM.innerHTML);
                    screenDOM.innerHTML = result;
                }
                if(this.innerHTML === '◄'){
                    /*Delete the last number inputed */
                    screenDOM.innerHTML = screenDOM.innerHTML.slice(0 ,screenDOM.innerHTML.length-1)
                }
                if(this.innerHTML === 'AC'){
                    /* Delete all the inpputed data */
                    screenDOM.innerHTML = '0';
                }
            }
        });
    }

});



// if(screenDOM.innerHTML.charAt(screenDOM.length-1).includes(basicMath) && this.innerHTML.includes(basicMath)){
//     /*if the key pressed is   / - * +     */
//     console.log(screenDOM.innerHTML.slice(0 ,screenDOM.innerHTML.length-1))
//     screenDOM.innerHTML = screenDOM.innerHTML.slice(0 ,screenDOM.innerHTML.length-1)
//     screenDOM.innerHTML = screenDOM.innerHTML + this.innerHTML;
//     console.log('skere')
// }else{
    
// }




