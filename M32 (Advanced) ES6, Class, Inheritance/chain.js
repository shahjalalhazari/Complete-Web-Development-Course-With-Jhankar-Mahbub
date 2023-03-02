// Get user's name.
const users = [
    {id: 1, name: 'Abul', job: 'Doctor'}
]

const name = users[0].name;
// console.log(name);



// ----------------------
// Get first user's job
const data = {
    count: 500,
    data: [
        { id: 1, name: 'babul', job: 'Plumber' },
        { id: 2, name: 'dabul', job: 'leader' },
    ]
}

const firstJob = data.data[0].job;
// console.log(firstJob);



// ----------------------------------
// Get the user's floor and unit no
const user = {
    id: 5001,
    name: "Thomas Alba Edison",
    address: {
        street: {
            first: '23/A, Pennai Hazari Bari',
            second: 'Hazari Villa',
            third: 'unit no 04, 3rd floor'
        },
        postOffice: 'Gouripur',
        thana: 'Daudkandi',
        zilla: 'Comilla',
        city: 'Comilla'
    }
}

// const floorNo = user.address.street.third;
const floorNo = user.address.street?.third;
/**This (?) question mark is use as "optional chain". This one is uses for, if the current stage(where puted the ?) has any data then go forward otherwise stop there. */
console.log(floorNo);