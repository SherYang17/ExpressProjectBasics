import { v4 as uuidv4 } from 'uuid';

let users = [
    {firstName: "Alex", lastName: "Dog", dob: "01/01/1970"},
    {firstName: "Alex", lastName: "Two", dob: "01/01/1970"},
    {firstName: "Alex", lastName: "Three", dob: "01/01/1970"},
    {firstName: "Bob", lastName: "Cat", dob: "01/01/1980"},
    {firstName: "Charlie", lastName: "Fox", dob: "01/01/2017"},
    {firstName: "Delta", lastName: "Mouse", dob: "01/01/2013"},
    {firstName: "Echo", lastName: "Hamster", dob: "01/01/2020"},
    {firstName: "Foxtrot", lastName: "Komodoh", dob: "01/01/2020"},
    {firstName: "Green", lastName: "Giraffe", dob: "01/01/2020"},
    {firstName: "Halo", lastName: "Whale", dob: "01/01/2020"},
];

// Get all users
export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
};

// Create a new user
export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the username ${user.firstName} added to the database!`);
};

// Get a user by firstName
export const getUserByFirstName = (req, res) => {
    const { firstName } = req.params;
    const foundUser = users.filter(user => user.firstName.toLowerCase() === firstName.toLowerCase());

    if (!foundUser.length) {
        res.status(400).send('User not found');
    } else {
        const text = 'I have found the user';
        res.json({ text, foundUser });
    }
};

// Get a user by lastName
export const getUserByLastName = (req, res) => {
    const { lastName } = req.params;
    const foundUser = users.filter(user => user.lastName.toLowerCase() === lastName.toLowerCase());

    if (!foundUser.length) {
        res.status(400).send('User not found');
    } else {
        const text = 'I have found the user';
        res.json({ text, foundUser });
    }
};

// Get users by age
export const getUsersByAge = (req, res) => {
    const requestedAge = parseInt(req.params.age);
    const currentDate = new Date();

    const matchingUsers = users.filter(user => {
        const dobParts = user.dob.split('/');
        const userBirthDate = new Date(`${dobParts[2]}-${dobParts[0]}-${dobParts[1]}`);
        const userAge = currentDate.getFullYear() - userBirthDate.getFullYear();
        return userAge === requestedAge;
    });

    res.json(matchingUsers);
};
