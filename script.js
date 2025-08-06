const bill = document.getElementById('bill')
const tipPercentage = document.getElementById('tip')
const numberOfPeople = document.getElementById('people')
const calculateButton = document.getElementById('calculate')
const totalAmount = document.getElementById('totalAmount')
const perPerson = document.getElementById('perPerson')
const tipammount = document.getElementById('tipAmount')
calculateButton.addEventListener('click', function() {
    const billValue = parseFloat(bill.value);
    const tipValue = parseFloat(tipPercentage.value) / 100;
    const peopleValue = parseInt(numberOfPeople.value);

    if (isNaN(billValue) || isNaN(tipValue) || isNaN(peopleValue) || peopleValue <= 0) {
        alert('Please enter valid values');
        return;
    }

    const totalTip = billValue * tipValue;
    const totalAmountValue = billValue + totalTip;
    const perPersonValue = totalAmountValue / peopleValue;
    tipammount.textContent= `Tip Amount: $${totalTip.toFixed(2)}`;
    totalAmount.textContent = `Total Amount: $${totalAmountValue.toFixed(2)}`;
    perPerson.textContent = `Per Person: $${perPersonValue.toFixed(2)}`;
});