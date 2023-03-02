// Task 2: Get all heading 2 and change their color into 'lightblue'.
const headings = document.querySelectorAll('h2');
for (const heading of headings) {
    heading.style.color = "lightblue";
}

// Task 3: Change Backpack section's background color.
const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = 'tomato';

// Task 4: Get all the card classes and their border redius of 30px.
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px'
}

// Task 5: Write a function and it will print something. Add this function in a button and it will work as click handler.
const printSomething = document.getElementById('buy_now-btn').addEventListener('click', function () {
    console.log('Hello, from Script File function.')
});

// Task 6: Add a Event Handler into all Buy Now button. After click on button remove that button card.
// const removeBtns = document.getElementsByClassName('remove-btn').addEventListener('click', function () {
//     for (const removeBtn of removeBtns) {
//         console.log("Button for remove card.")
//     }
// })

// Task 7:
const emailInput = document.getElementById('email-input').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const submitBtn = document.getElementById('submit-btn');
    if (text === 'email') {
        submitBtn.removeAttribute('disabled');
        
    }
})