//Testing

function carLoanPayment(principle, interest, n) {
  return principle * interest / (1 - (Math.pow(1/(1 + interest), n)));
  
  }
  
  
function homeLoanPayment(principle, interest, n) {
  return principle * interest / (1 - (Math.pow(1/(1 + interest), n)));
  }
  
let newLoan = "Yes"
let choice = " "

let carAmount = " "
let carInterest = " "
let carMonth = " "
let carFinalInterest = " "
let carLoanAmount = " "

let homeAmount = " "
let homeInterest = " "
let homeYear = " "
let homeFinalInterest = " "
let homeFinalYear = " "
let homeLoanAmount = " "
let finalLoop = " "


while (newLoan == "Yes") {
  
  choice = prompt("Would you like to calculate a home loan or a car loan?")

   if (choice =='Car' || choice == 'car') {

      carAmount = parseInt(prompt(" Enter the amount of the car loan, please no dollar signs or commas: "))
      carInterest = parseFloat(prompt("Enter the interest rate in decimal formatting: "))
      carMonth = parseInt(prompt("Enter the amount of months to pay off the loan: "))
      carFinalInterest = carInterest / 1200

      carLoanAmount = carLoanPayment(carAmount, carFinalInterest, carMonth)
      carLoanDecimal = carLoanAmount.toFixed(2)
      alert(`A car loan for $${carAmount} over ${carMonth} months at ${carInterest}% interest would have a monthly payment of $${carLoanDecimal}.`) 


    } else if (choice =='Home' || choice == 'home') {
  
          homeAmount = parseInt(prompt(" Enter the amount of the home loan, please no dollar signs or commas: "))
          homeInterest = parseFloat(prompt("Enter the interest rate in decimal formatting: "))
          homeYear = parseInt(prompt("Enter the amount of years to pay off the loan, either 15 or 30 years: "))
          homeFinalInterest = homeInterest / 1200
          homeFinalYear = homeYear * 12

          homeLoanAmount = homeLoanPayment(homeAmount, homeFinalInterest, homeFinalYear)
          homeLoanDecimal = homeLoanAmount.toFixed(2)
          alert(`A home loan for $${homeAmount} over ${homeYear} years at ${homeInterest}% interest would have a monthly payment of $${homeLoanDecimal}`) 

     } else 
                  alert("I do not what you want to calculate")
 
        newLoan = prompt('Do you want to calculate a loan? Either Yes or No. ')
        
        
}
alert("Have a good day")


/*
inptPlay.onclick=function()
{
  if (inptPlay.value == "Play")  
    {
    userName= inptName.value
    nounValue = nounArray[inptNoun.value] 
    verbValue = verbArray[inptVerb.value] 
    adjectiveValue = adjectiveArray[inptAdjective.value] 
    adverbValue = adverbArray[inptAdverb.value] 
    strDisplay0 = strMadLib.replace(/noun/g, nounValue)
    strDisplay1 = strDisplay0.replace(/verb/g, verbValue)
    strDisplay2 = strDisplay1.replace(/adjective/g, adjectiveValue)
    strDisplay = strDisplay2.replace(/adverb/g, adverbValue)
    lblName.textContent = `${userName}, here is your MadLib`
    lblName.hidden = false
    lblDisplay.textContent = strDisplay
    lblDisplay.hidden = false
    inptPlay.value = "Clear"
    console.log(strDisplay)
    }  else  
    {
    inptName.value = ""
    inptNoun.value = ""
    inptVerb.value = ""
    inptAdjective.value = ""
    inptAdverb.value = ""
    lblName.textContent = ""
    lblName.hidden = true
    lblDisplay.textContent = ""
    lblDisplay.hidden = true
    inptPlay.value = "Play" */
  /*  console.log(userName , nounValue, verbValue, adjectiveValue, adverbValue)*/
 /*   }
  
}
 */