let amountLoaning = document.getElementById("amountLoan");
let interest = document.getElementById("interestRate");
let duration = document.getElementById("durationInMonths");
let computedSum = document.getElementById("calculateTotal");
let appendedValue = document.getElementById("value");
let accumulatedAmount;
let totalAmount;

computedSum.addEventListener("click", dhafuYetu)

function dhafuYetu(){
    let toBePaid = amountLoaning.value
    let time = duration.value
    let interestPer = interest.value
    accumulatedAmount = (toBePaid * time * interestPer)/100;
    // console.log(parseInt(accumulatedAmount))
    totalAmount = parseInt(accumulatedAmount) + parseInt(toBePaid)
    console.log(totalAmount)
    // totalAmount.innerHTML = appendedValue
    appendedValue.append(totalAmount)
    appendedValue.textContent
}

