class User {
    constructor(username, password) {
        this.username=username;
        this.password=password;
    }


    getPassword()
    {
       return this.password.replace(/./g,'*');
    }

    setPassword(newPassword)
    {
        this.password=newPassword;
        try {
        if (! ((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm).test(this.password)))
        throw new Error ("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
    }
    catch(error) {
    console.log(error.message);
    }
    }

   
}

const u1 = new User("kiran","Welcome@123");
console.log(u1.getPassword());
u1.setPassword("myPassword"); 

u1.setPassword("MyPassword"); 

u1.setPassword("Mypassword123");
console.log(u1.getPassword()); 

// Ouput:
// ***********
// Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.
// Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.
// *************