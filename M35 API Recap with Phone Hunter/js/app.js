// Load phones from API
const loadPhone = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}


// Display Phone on search result
const displayPhones = (phones, dataLimit) => {
    const phonesContainer = document.getElementById('phones_container');
    phonesContainer.innerHTML = "";
    // Display first 12 result and show all button
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 12) {
        phones = phones.slice(0, 12);
        showAll.classList.remove('d-none');
    } else {
        showAll.classList.add('d-none');
    }

    // Display warning messages
    const noFound = document.getElementById('no-found-text');
    if (phones.length === 0) {
        noFound.classList.remove('d-none');
    } else {
        noFound.classList.add('d-none');
    }
    phones.forEach(phone => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add("col");
        cardDiv.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="card-img-top p-5" alt="">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetails">Show Details</button>
            </div>
        </div>
    `;
        phonesContainer.appendChild(cardDiv);
    });

    // stop loader
    toggleSpinner(false);
}


// Processing search result on user search
const processSearch = (dataLimit) => {
    toggleSpinner(true)
    const searchText = document.getElementById('phone-search');
    loadPhone(searchText.value, dataLimit);
    searchText.value = "";
}


// Show phone search list on search button handler
document.getElementById('search-btn').addEventListener('click', function () {
    // start loader
    processSearch(12);
})


const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById("loader");
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    } else {
        loaderSection.classList.add('d-none');
    }
}


// Show all phones user search
document.getElementById('show-all-btn').addEventListener('click', function () {
    processSearch()
})


// Load Phone Details from API with button onclick
const loadPhoneDetails = async(id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}


// Display Each Phone Details
const displayPhoneDetails = (phone) => {
    const modalDetailsLabel = document.getElementById("phoneDetailsLabel");
    modalDetailsLabel.innerText = phone.name;
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
    <blockquote>
        <img src="${phone.image}"> <br>
        <strong>Brand:</strong> ${phone.brand} <br>
        <strong>Release Date:</strong> ${phone.releaseDate ? phone.releaseDate : "No data Found"} <br>
        <strong>Body:</strong> 164.1x74.8x7.4mm, 182g; glass front, glass back, plastic frame. <br>
        <strong>Display:</strong> ${phone.mainFeatures.displaySize} <br>
        <strong>ChipSet:</strong> ${phone.mainFeatures.chipSet} <br>
        <strong>Memory:</strong> ${phone.mainFeatures.memory} <br>
    </blockquote>
    `
}


// Show search list on Enter kay handler
document.getElementById('phone-search').addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        processSearch(12)
    }
})