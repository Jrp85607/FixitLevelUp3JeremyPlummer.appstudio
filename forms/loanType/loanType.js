
let choice = ""

rbLoanType.onchange=function(){

}

btnBegin.onclick=function(){
  choice = rbLoanType.value //0 for home and 1 for car
  console.log(choice)
  /*
  if (choice == 0) { 
  rbYears.hidden = False
} else if (choice == 1) { 
  inptMonths.hidden = False
  }
  */
  ChangeForm(loanCalc)
}
