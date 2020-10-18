// -------=------------------------VARIABLES DEFINITION----------------------------//
let input = document.querySelector('input');
let button = document.querySelector('button');

// ----------------------STYLING OF THE PAGE WITH JS---------------------- //
document.querySelector('.wrapper').style.cssText = 'width: 70vw; margin: 0 auto; \
display: grid; grid-template-columns: repeat(9, 1fr)'
document.body.style.cssText = 'text-align: center; font-family: poppins';
document.getElementById('header').style.cssText = 'color: #46cb18; margin: 2px'
document.getElementsByTagName('h2')[0].style.cssText = 'margin: 5px'
document.getElementsByTagName('h3')[0].style.cssText = 'margin: 5px auto 20px'

/* ---------------------------LOGIC FOR THE INPUT FORM--------------------------- */
// create a function that determines the random length of random numbers to be displayed
button.addEventListener('click', ()=> {
    let inputValue = input.value;
    document.getElementById('alert').style.cssText = 'color: #ED2939; margin-bottom: 0; margin-right: 20px;'

    if(typeof (Number(inputValue)) === "number" && Number(inputValue)>0){  
        document.getElementById('alert').textContent = ''
        input.value="";
        for(let i=0; i<=inputValue; i++){
            let paragraph = document.createElement('p');
            paragraph.className = 'numbers'; 
            let wrapper = document.querySelector('.wrapper');
            paragraph.style.cssText = 'font-family: poppins; padding: 5px; font-size: 2em; margin: 5px;';
            
            let prime = 0;
            // looping through 2 to user input number
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    prime = 1;
                    break;
                }
            }
            // if number greater than 1 and not divisible by other numbers
            if (i > 1 && prime === 0) {
                paragraph.style.backgroundColor='#ED2939';
                paragraph.textContent = i;
                wrapper.appendChild(paragraph);
            }else if(i%2===0){
                paragraph.style.backgroundColor='#46cb18';
                paragraph.textContent = i;
                wrapper.appendChild(paragraph);
            }else if(i%2!==0){
                paragraph.style.backgroundColor = 'yellow'
                paragraph.textContent = i;
                wrapper.appendChild(paragraph);
            }
        }
    }else if(inputValue.length === 0){
        document.getElementById('alert').textContent = 'Enter number value on the input field to generate numbers'
    }
    else if(typeof inputValue === 'string'){
        document.getElementById('alert').textContent = 'Input value must be a number'
    };
});