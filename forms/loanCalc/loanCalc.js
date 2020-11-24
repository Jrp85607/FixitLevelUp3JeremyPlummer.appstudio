//Testing

function carLoanPayment(principle, interest, n) {
  carLoan = principle * (interest * ((1 + interest)**n)) / (((1 + interest)**n) - 1)
  carLoan = carLoan.toFixed(2)
  return carLoan
}


function homeLoanPayment(principle, interest, n) {
  homeLoan = principle * (interest * ((1 + interest)**n)) / (((1 + interest)**n) - 1)
  homeLoan = homeLoan.toFixed(2)
  return homeLoan
}

loanCalc.onshow=function(){
  
  console.log(choice)
  
  if (choice == 0) { 
  inptMonths.hidden = True
  console.log("home")
} else if (choice == 1) { 
  rbYears.hidden = True
  console.log("car")
  }
  
}


btnSubmit.onclick=function(){
  
  let mortgageYears = ""
  if (rbYears.value == 0) { 
  mortgageYears = 15
} else if (rbYears.value == 1) { 
  mortgageYears = 30
  }
  
  loanAmount = inptAmount.value
  interestRate = (inptRate.value / 100) / 12
  carMonths = inptMonths.value * 12
  homeMonths = mortgageYears * 12
  
  if (choice == 0) { 
  homeLoanAmount = homeLoanPayment(loanAmount, interestRate, homeMonths)
  lblResponse.value = `A home loan for $${loanAmount} over ${mortgageYears} years at ${inptRate.value}% interest would have a monthly payment of $${homeLoanAmount}.`
 
} else if (choice == 1) { 
  carLoanAmount = carLoanPayment(loanAmount, interestRate, carMonths)
  lblResponse.value = lblResponse.value = `A car loan for $${loanAmount} over ${inptMonths.value} months at ${inptRate.value}% interest would have a monthly payment of $${carLoanAmount}.`
  }

}


btnNewLoan.onclick=function(){
  rbLoanType.value = ""
  inptAmount.value = ""
  inptRate.value = ""
  inptMonths.value = ""
  lblResponse.value = ""
  rbYears.hidden = False
  inptMonths.hidden = False
  ChangeForm(loanType)
}


/*
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
  
  //choice = prompt("Would you like to calculate a home loan or a car loan?")

   if (choice =='Car' || choice == 'car') {

      carAmount = parseInt(prompt(" Enter the amount of the car loan, please no dollar signs or commas: "))
      carInterest = parseFloat(prompt("Enter the interest rate in decimal formatting: "))
      carMonth = parseInt(prompt("Enter the amount of months to pay off the loan: "))
      carFinalInterest = carInterest / 1200

      carLoanAmount = carLoanPayment(carAmount, carFinalInterest, carMonth)
      carLoanDecimal = carLoanAmount.toFixed(2)
      //alert(`A car loan for $${carAmount} over ${carMonth} months at ${carInterest}% interest would have a monthly payment of $${carLoanDecimal}.`) 


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
                  //alert("I do not what you want to calculate")
 
        //newLoan = prompt('Do you want to calculate a loan? Either Yes or No. ')
      */  
        

