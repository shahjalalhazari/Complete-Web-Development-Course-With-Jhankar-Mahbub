/*
1. Get Button's click event handler,
2. Get withdraw form field's value, and convert it string to floating point number,
3. Get current Withdraw amount and convert it string to floating number,
4. Add Current amount and new amount,
5. Display new/updated withdraw amount,
6. Clear withdraw input field.
*/

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);

    const totalWithdrawElement = document.getElementById('total-withdraw');
    const totalWithdrawAmount = parseFloat(totalWithdrawElement.innerText);

    const newWithdrawAmount = withdrawAmount + totalWithdrawAmount;
    totalWithdrawElement.innerText = newWithdrawAmount;

    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat(totalBalanceElement.innerText);

    const newTotalBalance = totalBalanceAmount - withdrawAmount;
    totalBalanceElement.innerText = newTotalBalance;

    withdrawField.value = '';
})