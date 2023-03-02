document.getElementById('add-btn').addEventListener('click', function () {
    const inputField = document.getElementById('text-input').value;
    const parentContainer = document.getElementById('parent-container');

    const li = document.createElement('li');
    li.innerText = inputField;
    li.classList.add('new-li'); //Adding class name on all li element.
    parentContainer.appendChild(li);
    
    const allLi = document.getElementsByClassName('new-li');
    for (const item of allLi) {
        item.addEventListener('click', function (event) {
            console.log(event.target.parentNode.removeChild(event.target))
        })
    }
})