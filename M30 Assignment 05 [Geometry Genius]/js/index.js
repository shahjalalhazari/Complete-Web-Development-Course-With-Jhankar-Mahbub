// Table Serial Number
let serialNo = 0;


/* Triangle Area Measurement */
document.getElementById('triangle-btn').addEventListener('click', function () {
    // Get data from HTML input fields
    const baseInput = getElementById('triangle-base-input');
    const heightInput = getElementById('triangle-height-input');

    // Get shape name
    const shapeName = getName('triangle');

    // Get first and second number inner text
    const firstInnerText = getElementById('triangle-base');
    const lastInnerText = getElementById('triangle-height');

    // Set input values in formula
    setFormulaText(firstInnerText, baseInput);
    setFormulaText(lastInnerText, heightInput);

    // Calculate Shape area
    const area = 0.5 * multiplyInputs(baseInput.value, heightInput.value);

    // Display data
    displayData(shapeName, area);

    // Clear input fields
    clearInputs(baseInput, heightInput);
});



/** Rectangle Area Measurement */
document.getElementById('rectangle-btn').addEventListener('click', function () {
    // Get data from HTML input fields
    const widthInput = getElementById('rectangle-width-input');
    const lengthInput = getElementById('rectangle-length-input');

    // Get shape name
    const shapeName = getName('rectangle');

    // Get first and second number inner text
    const firstInnerText = getElementById('rectangle-width');
    const lastInnerText = getElementById('rectangle-length');

    // Set input values in formula
    setFormulaText(firstInnerText, widthInput);
    setFormulaText(lastInnerText, lengthInput);

    // Calculate Shape area
    const area = multiplyInputs(widthInput.value, lengthInput.value);

    // Display data
    displayData(shapeName, area);

    // Clear input fields
    clearInputs(widthInput, lengthInput);
});



/** Parallelogram Area Measurement */
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    // Get data from HTML input fields
    const baseInput = getElementById('parallelogram-base-input');
    const heightInput = getElementById('parallelogram-height-input');

    // Get shape name
    const shapeName = getName('parallelogram');

    // Get first and second number inner text
    const firstInnerText = getElementById('parallelogram-base');
    const lastInnerText = getElementById('parallelogram-height');

    // Set input values in formula
    setFormulaText(firstInnerText, baseInput);
    setFormulaText(lastInnerText, heightInput);

    // Calculate Shape area
    const area = multiplyInputs(baseInput.value, heightInput.value);

    // Display data
    displayData(shapeName, area);

    // Clear input fields
    clearInputs(baseInput, heightInput);
});



/** Rhombus Area Measurement */
document.getElementById('rhombus-btn').addEventListener('click', function () {
    // Get data from HTML input fields
    const rhombusInput1 = getElementById('rhombus-input1');
    const rhombusInput2 = getElementById('rhombus-input2');

    // Get shape name
    const shapeName = getName('rhombus');

    // Get first and second number inner text
    const firstInnerText = getElementById('rhombus-text1');
    const lastInnerText = getElementById('rhombus-text2');

    // Set input values in formula
    setFormulaText(firstInnerText, rhombusInput1);
    setFormulaText(lastInnerText, rhombusInput2);

    // Calculate Shape area
    const area = 0.5 * multiplyInputs(rhombusInput1.value, rhombusInput2.value);

    // Display data
    displayData(shapeName, area);

    // Clear input fields
    clearInputs(rhombusInput1, rhombusInput2);
});



/** Pentagon Area Measurement */
document.getElementById('pentagon-btn').addEventListener('click', function () {
    // Get data from HTML input fields
    const perimeterInput = getElementById('pentagon-perimeter-input');
    const apothemInput = getElementById('pentagon-apothem-input');

    // Get shape name
    const shapeName = getName('pentagon');

    // Get first and second number inner text
    const firstInnerText = getElementById('pentagon-perimeter');
    const lastInnerText = getElementById('pentagon-apothem');

    // Set input values in formula
    setFormulaText(firstInnerText, perimeterInput);
    setFormulaText(lastInnerText, apothemInput);

    // Calculate Shape area
    const area = 0.5 * multiplyInputs(perimeterInput.value, apothemInput.value);

    // Display data
    displayData(shapeName, area);

    // Clear input fields
    clearInputs(perimeterInput, apothemInput);
});



/** Ellipse Area Measurement */
// Add event handler on edit button to show input fields
document.getElementById('ellipse-edit').addEventListener('click', function () {
    // show input fields after click on edit button
    showInputs()
});


// Add event handler on cross button to hide input fields
document.getElementById('ellipse-cross').addEventListener('click', function () {
    // hide input fields after click on cross button
    hideInputs()
});


// Add event handler on check button to set input field values as element number inner text
document.getElementById('ellipse-check-mark').addEventListener('click', function () {
    // Get data from input fields
    const ellipseAAxisInput = getElementById('ellipse-a-input');
    const ellipseBAxisInput = getElementById('ellipse-b-input');

    // Get number elements
    const aAxisNum = getElementById('ellipse-a-num');
    const bAxisNum = getElementById('ellipse-b-num');

    // Add validation to set input values as inner text
    if (ellipseAAxisInput.value == "" || ellipseBAxisInput.value == "" || ellipseAAxisInput.value <= 0 || ellipseBAxisInput.value <= 0 || isNaN(ellipseAAxisInput.value) || isNaN(ellipseBAxisInput.value)) {
        // Clear input fields
        clearInputs(ellipseAAxisInput, ellipseBAxisInput)
        // Show alert   
        return alert("Please enter valid number");
    } else {
        // Set input values as inner text
        setFormulaText(aAxisNum, ellipseAAxisInput);
        setFormulaText(bAxisNum, ellipseBAxisInput);

        // Enable Calculate Button
        const button = document.getElementById('ellipse-btn');
        button.removeAttribute("disabled");
    }

    // Clear input fields
    clearInputs(ellipseAAxisInput, ellipseBAxisInput)

    // hide input fields after click on cross button
    hideInputs()
});


// Add event handler on ellipse button for calculate Ellipse  area
document.getElementById('ellipse-btn').addEventListener('click', function () {
    // Get data from HTML input fields
    const aAxisNum = getElementById('ellipse-a-num');
    const bAxisNum = getElementById('ellipse-b-num');

    // Get shape name
    const shapeName = getName('ellipse');

    // Calculate Shape area
    const area = 3.1415 * multiplyInputs(aAxisNum.innerText, bAxisNum.innerText);

    // Display data
    displayData(shapeName, area);

    // Set inner text
    aAxisNum.innerText = 0;
    bAxisNum.innerText = 0;
});




// <----- Common Functions ------->
/** Get Shape Name */
function getName(id) {
    const shapeName = document.getElementById(id).innerText;
    return shapeName
}


/** Show/Display data */
function displayData(shapeName, area) {
    // Increase Serial number
    serialNo += 1
    // Get table body
    const tableBody = document.getElementById("table-body");
    // Create Table row
    const tr = document.createElement('tr');
    // insert data in table row
    tr.innerHTML = `
    <td>${serialNo}</td>
    <td>${shapeName}</td>
    <td><span>${area.toFixed(2)}</span>cm<sup>2</sup></td>
    <td><button class="btn btn-primary btn-sm convert-btn">Convert to m<sup>2</sup></button></td>
    <td><button class="btn btn-danger btn-sm remove-btn">X</button></td>
    `
    // Append table row in table body as child
    tableBody.appendChild(tr);

    // Remove table row
    removeTableRow('remove-btn');
}


/** Get input fields and multiply them */
function multiplyInputs(input1, input2) {
    if (input1 == "" || input2 == "" || input1 <= 0 || input2 <= 0 || isNaN(input1) || isNaN(input2)) {
        return alert("Please enter valid number");
    } else {
        return parseFloat(input1) * parseFloat(input2);
    }
}


/** Change display property value */
function displayProperty(id, value) {
    const element = document.getElementById(id);
    element.style.display = value;
}


/** Show Input fields */
function showInputs() {
    // show input fields
    displayProperty('ellipse-inputs', 'flex');
    // show cross button
    displayProperty('ellipse-cross', 'block');
    // hide edit button
    displayProperty('ellipse-edit', 'none');
}


/**Hide input fields */
function hideInputs() {
    // hide input fields
    displayProperty('ellipse-inputs', 'none');
    // hide cross button
    displayProperty('ellipse-cross', 'none');
    // show edit button
    displayProperty('ellipse-edit', 'block');
}


/**Remove table row from Table on click X button */
function removeTableRow(className) {
    const allTableRow = document.getElementsByClassName(className);
    for (const tableRow of allTableRow) {
        tableRow.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode)
        })
    }
}


/**Clear Input fields */
function clearInputs(firstInput, secondInput) {
    firstInput.value = "";
    secondInput.value = "";
}


/**Get input by ID */
function getElementById(id) {
    return document.getElementById(id);
}


/**Set input values inside formula */
function setFormulaText(formulaText, inputValue) {
    formulaText.innerText = inputValue.value;
}