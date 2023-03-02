/*
1. Get Button's click event handler,
2. Get deposit form field's value, and convert it string to floating point number,
3. Get current deposit amount and convert it string to floating number,
4. Add Current amount and new amount,
5. Display new/updated deposit amount,
6. Get Current Balance Amount and convert it into Floating Point number,
7. Add current total balance and new deposit amount,
8. Display/show updated Balance amount,
9. Clear deposit input field.
*/

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositField.value);

    const totalDepositElement = document.getElementById('total-deposit');
    const totalDeposit = parseFloat(totalDepositElement.innerText);

    const newTotalDeposit = totalDeposit + depositAmount;

    totalDepositElement.innerText = newTotalDeposit;

    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat(totalBalanceElement.innerText);

    const newTotalBalance = totalBalanceAmount + depositAmount;
    totalBalanceElement.innerText = newTotalBalance;

    depositField.value = '';
})
