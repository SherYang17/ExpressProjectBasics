class User {

    constructor(firstName, lastName, dob) {
        this.id = ''; 
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }

    toJSON() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            dob: this.dob,
        };
    }
}

export default User;
