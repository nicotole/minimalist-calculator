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
                lastIsNumber = true;
                if(screenDOM.innerHTML === '0'){ /* if is the first number pressed*/
                    screenDOM.innerHTML = this.innerHTML;
                }else{/*otherwise its not the first number pressed */
                    screenDOM.innerHTML = screenDOM.innerHTML + this.innerHTML;
                }
            }else{ /*a function key was pressed */
                if(this.innerHTML === '='){ 
                    let result = calculate(screenDOM.innerHTML);
                    screenDOM.innerHTML = result;
                }
                if((this.innerHTML === '◄')){
                    
                    if(screenDOM.innerHTML.length === 1){
                        screenDOM.innerHTML = "0";
                    }else{
                        screenDOM.innerHTML = screenDOM.innerHTML.slice(0 ,screenDOM.innerHTML.length-1)
                    }
                    lastIsNumber = true;
                }
                if(this.innerHTML === 'AC'){
                    /* Delete all the inpputed data */
                    screenDOM.innerHTML = '0';
                }

                if(this.innerHTML === '.'){ 
                    if(screenDOM.innerHTML === '0'){
                        screenDOM.innerHTML = '0.';
                    }else if(lastIsNumber){
                        screenDOM.innerHTML = screenDOM.innerHTML + '.' 
                    }else{
                        screenDOM.innerHTML = screenDOM.innerHTML.slice(0 ,screenDOM.innerHTML.length-1)
                        screenDOM.innerHTML = screenDOM.innerHTML + this.innerHTML;
                    }
                    lastIsNumber = false;
                }

                /**Unir todos los de abajo */
                if(this.innerHTML === '/'){ 
                    if(lastIsNumber){
                        screenDOM.innerHTML = screenDOM.innerHTML + '/' 
                    }else{
                        screenDOM.innerHTML = screenDOM.innerHTML.slice(0 ,screenDOM.innerHTML.length-1)
                        screenDOM.innerHTML = screenDOM.innerHTML + this.innerHTML;
                    }
                    lastIsNumber = false;
                }
                if(this.innerHTML === '*'){
                    if(lastIsNumber){
                        screenDOM.innerHTML = screenDOM.innerHTML + '*'
                        // lastIsNumber = false;
                    }else{
                        screenDOM.innerHTML = screenDOM.innerHTML.slice(0 ,screenDOM.innerHTML.length-1)
                        screenDOM.innerHTML = screenDOM.innerHTML + this.innerHTML;
                    }
                    lastIsNumber = false;
                }
                if(this.innerHTML === '-'){
                    if(screenDOM.innerHTML === '0'){
                        screenDOM.innerHTML = '-'
                    }else if(lastIsNumber){
                        screenDOM.innerHTML = screenDOM.innerHTML + '-';
                    }else{
                        screenDOM.innerHTML = screenDOM.innerHTML.slice(0 ,screenDOM.innerHTML.length-1)
                        screenDOM.innerHTML = screenDOM.innerHTML + this.innerHTML;
                    }
                    lastIsNumber = false;
                }
                if(this.innerHTML === '+'){
                    if(screenDOM.innerHTML === '0'){
                        screenDOM.innerHTML = '+'
                    }else if(lastIsNumber){
                        screenDOM.innerHTML = screenDOM.innerHTML + '+';
                    }else{
                        screenDOM.innerHTML = screenDOM.innerHTML.slice(0 ,screenDOM.innerHTML.length-1)
                        screenDOM.innerHTML = screenDOM.innerHTML + this.innerHTML;
                    }
                    lastIsNumber = false;
                }

            }
        });
    }

});





