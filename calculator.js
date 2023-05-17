document.addEventListener("DOMContentLoaded", (e) =>{
    const d = document;
    const screenDOM = d.querySelector('.calculator-display');
    const btns = document.querySelectorAll('button');
    
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

    function insertBasicOperator(operator){
        if(lastIsNumber){
            screenDOM.innerHTML = screenDOM.innerHTML + operator;
        }else{
            screenDOM.innerHTML = screenDOM.innerHTML.slice(0 ,screenDOM.innerHTML.length-1);
            screenDOM.innerHTML = screenDOM.innerHTML + operator;
        }
        lastIsNumber = false;
    }

    let lastIsNumber = true;
    let i = 0;
    
    for (i of btns) {
        i.addEventListener('click', function() {
            if (isNumber(this.innerHTML)){ /* if a number is pressed*/ 
                lastIsNumber = true;
                if(screenDOM.innerHTML === '0'){ /* if is the first number pressed*/
                    screenDOM.innerHTML = this.innerHTML;
                }else{/*otherwise its not the first number pressed */
                    screenDOM.innerHTML = screenDOM.innerHTML + this.innerHTML;
                }
            }else{ /*a function key was pressed */
                if(this.innerHTML === '='){ 
                    screenDOM.innerHTML = math.evaluate(screenDOM.innerHTML);
                }
                if((this.innerHTML === '◄')){
                    if(screenDOM.innerHTML.length === 1){//i check if its one on screen
                        screenDOM.innerHTML = '0';   //put cero ifi its one on screen
                    }else{
                        screenDOM.innerHTML = screenDOM.innerHTML.slice(0 ,screenDOM.innerHTML.length-1)// delete the element
                        if(isNumber(screenDOM.innerHTML.charAt(screenDOM.innerHTML.length-1))){ //i check the new last element and set the value
                            lastIsNumber = true;
                        }else{
                            lastIsNumber = false;
                        }
                    }
                }
                if(this.innerHTML === 'AC'){
                    screenDOM.innerHTML = '0';/* Delete all the inpputed data */
                }

                if(this.innerHTML === '.'){ 
                    if(screenDOM.innerHTML === '0'){
                        screenDOM.innerHTML = '0.';
                    }else if(lastIsNumber){
                        screenDOM.innerHTML = screenDOM.innerHTML + '.';
                    }else{
                        screenDOM.innerHTML = screenDOM.innerHTML.slice(0 ,screenDOM.innerHTML.length-1);
                        screenDOM.innerHTML = screenDOM.innerHTML + this.innerHTML;
                    }
                    lastIsNumber = false;
                }
                if(this.innerHTML === '%'){
                    let result = math.evaluate(screenDOM.innerHTML + '%');
                    screenDOM.innerHTML = result;
                }
                if(this.innerHTML === '/' 
                    || this.innerHTML === '*'
                    || this.innerHTML === '-' 
                    || this.innerHTML === '+'){ 
                        insertBasicOperator(this.innerHTML);
                }


            }
        });
    }

});





