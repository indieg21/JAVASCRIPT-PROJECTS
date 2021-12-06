var total = document.getElementById("totalBill");
total.style.color = "red";
var bill = document.getElementById("billInput");
var tip = document.getElementById("tipInput");
var btn = document.getElementById("btn");
btn.addEventListener("click", tipCalculator);

function tipCalculator() {
  let billAmount = parseFloat(bill.value);
  let tipPerecentage = parseFloat(tip.value);
  let tipAmount = (tipPerecentage / 100) * billAmount;
  let totalAmount = billAmount + tipAmount;
  //console.log(billAmount, tipPerecentage, tipAmount, totalAmount)
  total.innerHTML = `
          <h3>your total bill amount including tip: ${totalAmount}</h3>
          <h4>your tip amount is: ${tipAmount}</h4>

          `;
}
