const person = {
    found: 2,
    message: "Found 2 persons",
    result: [{
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};


console.log(person.result);


const loadPerson = (users) => {
    const cardContainer = document.getElementById('card-container');

    users.result.forEach(user => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="card">
            <h5 class="card-header">${user.name.fullName[0]}</h5>
            <div class="card-body">
                <p class="card-text">Age: ${user.age}</p>
                <p class="card-text">Street: ${user.address.street}. House No: ${user.address.house}</p>
            </div>
        </div>`
        cardContainer.appendChild(cardDiv);
    });
    const title = document.getElementById('title');
    title.innerText = `
        ${users.message}
        `
}


loadPerson(person)