/** INCREASE PRODUCT QUANTITY:-
1. Get event handler for plus button.
2. Get current product quantity.
3. Convert quantity into number.
4. Add 1 with old quantity and update new quantity.
*/

// step: 1
document.getElementById('case-plus-btn').addEventListener('click', function () {
    // step: 2
    const caseNumberField = document.getElementById('case-number-field');
    // step:3
    const caseNumber = parseInt(caseNumberField.value);
    // step: 4
    const newCaseNumber = caseNumber + 1;
    caseNumberField.value = newCaseNumber;
})


/** DECREASE PRODUCT QUANTITY

*/

// step: 1
document.getElementById('case-min-btn').addEventListener('click', function () {
    // step: 2
    const caseNumberField = document.getElementById('case-number-field');
    // step:3
    const caseNumber = parseInt(caseNumberField.value); 
    // step: 4
    const newCaseNumber = caseNumber - 1;
    caseNumberField.value = newCaseNumber;

    if (newCaseNumber <= 0) {
        document.getElementById('case-min-btn').
    }
})