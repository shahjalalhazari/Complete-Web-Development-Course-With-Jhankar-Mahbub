const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))

}

loadUser()

const displayUser = user => {
    // Get user object.
    const userName = user.results[0];
    // Get user name title, 1st name and last name
    const userTitle = userName.name.title;
    const userFirstName = userName.name.first;
    const userLastName = userName.name.last;
    // make full name
    const fullName = `${userTitle} ${userFirstName} ${userLastName}`

    // get user gender
    const gender = userName.gender;

    // get user location
    const location = userName.location;
    const streetName = location.street.name;
    const streetNum = location.street.number;
    const city = location.city;
    const state = location.state;
    const zipCode = location.postcode;
    const country = location.country;
    
    const fullLocation = `${streetNum} ${streetName}, ${city}, ${state} ${zipCode}, ${country}`

    // Get user photo
    const photo = userName.picture.large;
    console.log(photo);

    
    /* Display elements */
    // user name
    const nameTag = document.getElementById('name');
    nameTag.innerHTML = fullName;
    // gender
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = gender;
    // location
    const locationTag = document.getElementById('location');
    locationTag.innerHTML = fullLocation;
    // photo
    const photoTag = document.getElementById('photo');
    photoTag.setAttribute('src', photo)




    console.log(userName);
    console.log(location);
}