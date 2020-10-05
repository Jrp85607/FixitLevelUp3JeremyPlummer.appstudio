
function carLoanPayment(principle, interest, n) {
  return principle * interest / (1 - (Math.pow(1/(1 + interest), n)));
  
  }
  
  
  function homeLoanPayment(principle, i, n) {
  return principle * interest / (1 - (Math.pow(1/(1 + interest), n)));
  }
  
  