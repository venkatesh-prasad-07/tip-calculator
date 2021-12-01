const billAmount = document.getElementById("billAmount");
const numberOfPeople = document.getElementById("totalPeople");
const customTipPercentage = document.getElementById("tipPercentageCustom");
const billTipAmount = document.getElementById("billTipAmount");
const billTotalPerPerson = document.getElementById("billTotalPerPerson");
const resetButton = document.getElementById("resetButton");
const buttons = document.querySelectorAll(".tipPercentage");

//Calculate Tip When Click On Tip Percentage Button
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipvalue = e.target.innerText;
    tipvalue = tipvalue.substr(0, tipvalue.length - 1);

    if (billAmount.value === "") return;
    if (numberOfPeople.value === "") numberOfPeople.value = 1;

    calculateTip(
      parseFloat(billAmount.value),
      parseInt(tipvalue),
      parseInt(numberOfPeople.value)
    );
  });
});

//Calculate Tip When User Give Custom Tip Percentage Input
customTipPercentage.addEventListener("blur", (e) => {
  if (billAmount.value === "") {
    alert("Please First Add Bill Amount");
    resetEverything();
    return;
  }
  if (numberOfPeople.value === "") numberOfPeople.value = 1;

  calculateTip(
    parseFloat(billAmount.value),
    parseFloat(e.target.value),
    parseInt(numberOfPeople.value)
  );
});

//Calculate Tip
function calculateTip(billAmount, tipPercentage, numberOfPeople) {
  let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);
  // console.log("this is tip", tip);

  let totalAmount = (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
  totalAmount = totalAmount.toFixed(2);
  // console.log("this is total amount", totalAmount);

  billTipAmount.innerHTML = `₹ ${tip}`;
  billTotalPerPerson.innerHTML = `₹ ${totalAmount}`;
}

//Reset Everything
resetButton.addEventListener("click", resetEverything);
function resetEverything() {
  billTipAmount.innerHTML = "0.00";
  billTotalPerPerson.innerHTML = "0.00";
  billAmount.value = "";
  numberOfPeople.value = "";
  customTipPercentage.value = "";
}