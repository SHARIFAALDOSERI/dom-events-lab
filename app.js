/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
let number1
let number2
let operator


// const buttons = document.querySelectorAll('.button');
// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       // This log is for testing purposes to verify we're getting the correct value
//       console.log(event.target.innerText);
//       console.log(Number(event.target.innerText))
//       // Future logic to capture the button's value would go here...
//     });
//   });

  const calculator = document.querySelector('#calculator');
  

  calculator.addEventListener('click', (event) => 
    {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
    const reultDisplayEl = document.querySelector(`.display`)
    if (event.target.innerText !== "=")
    {
      reultDisplayEl.textContent=event.target.innerText
    }
   
    // Example
    if (event.target.classList.contains('number'))
    {
      if (number1 === undefined)
      {
        number1=event.target.innerText
        reultDisplayEl.textContent=event.target.innerText
       } 
       
       else if (number1 !== undefined)
        {
        number1 += event.target.innerText
        reultDisplayEl.textContent = number1
        }
      }
      else
       {
        number2=event.target.innerText
       }
     
    
  
    if (event.target.innerText === '*')
     {
      operator= event.target.innerText   
     }
    else if (event.target.innerText === '-')
      {
        operator= event.target.innerText   
      }
      else if (event.target.innerText === '+')
        {
          operator= event.target.innerText   
        }
        else if (event.target.innerText === '/')
      {
        operator= event.target.innerText  
      }
      else if (event.target.innerText==='C')
        {
         reultDisplayEl.textContent= " "
        }
       else if (event.target.innerText=== '=')
       {
      
     if (number2 != undefined ) 
     {
      if (operator === '*')
        {
          console.log(number1*number2)
          reultDisplayEl.textContent=Number(number1)*Number(number2)
          number1=undefined 
          number2=undefined
          operator=""
        }
        else if (operator=== '-')
          {
            console.log(number1-number2)
            reultDisplayEl.textContent=Number (number1) -Number(number2)
            number1=undefined 
            number2=undefined
            operator=""

          }
          else if (operator === '+')
            {
              console.log(Number (number1) + Number (number2))
              reultDisplayEl.textContent=Number (number1) + Number (number2)
              number1=undefined 
              number2=undefined 
              operator=""

            }
            else if (operator === '/')
          {
            console.log(number1/number2)
            reultDisplayEl.textContent=(number1/number2)
            number1=undefined 
            number2=undefined
            operator=""

          }
     }
    }
     
  });
    
