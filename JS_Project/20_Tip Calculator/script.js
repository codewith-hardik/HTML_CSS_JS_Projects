
const calculateButton = document.querySelector('.calculate');
const resetButton = document.querySelector('.reset');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const billAmount = parseFloat(document.getElementById('billAmount').value);
  const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
  const numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);

  if (isNaN(billAmount) || isNaN(numberOfPeople) || billAmount <= 0 || numberOfPeople <= 0) {
    resultDiv.textContent = 'Please enter valid inputs.';
    return;
  }

  const tipAmount = billAmount * tipPercentage;
  const totalAmount = billAmount + tipAmount;
  const amountPerPerson = totalAmount / numberOfPeople;

  resultDiv.innerHTML = `
    <p>Tip Amount: $${tipAmount.toFixed(2)}</p>
    <p>Total Amount: $${totalAmount.toFixed(2)}</p>
    <p>Amount Per Person: $${amountPerPerson.toFixed(2)}</p>
  `;
});

resetButton.addEventListener('click', () => {
  document.getElementById('billAmount').value = '';
  document.getElementById('tipPercentage').value = '0.15';
  document.getElementById('numberOfPeople').value = '1';
  resultDiv.innerHTML = '';
});
