//Global Variables

var users = [];
var userNum = 0;

//SIGN UP CODE

var submitNewUserButton = document.getElementById("submitNewUser");
submitNewUserButton.onclick = AddNewAccount;

var successfulSignInButton = document.getElementById("SuccessfulSignInButton");

function AddNewAccount()
{
    var newUser = [];

    var newUsernameInput = document.getElementById("newUsername");
    var NUusername = newUsernameInput;

    var newPasswordInput = document.getElementById("newPassword");
    var NUpassword = newPasswordInput;

    var newRepasswordInput = document.getElementById("newRepassword");
    var NUrepassword = newRepasswordInput;

    var newFirstNameInput = document.getElementById("newFirstName");
    var NUfirstName = newFirstNameInput;

    var newLastNameInput = document.getElementById("newLastName");
    var NULastName = newLastNameInput;

    var newBirthdayInput = document.getElementById("newBirthday");
    var NUBirthday = newBirthdayInput;

    var newEmailInput = document.getElementById("newEmail");
    var NUEmail = newEmailInput;

    if (NUusername == "" || NUpassword == "" && NUrepassword == "" || NUfirstName == "" || NULastName == "" || NUBirthday == "" || NUEmail == ""){
        window.alert("Please make sure all input is filled out.")
    }
    else if (NUpassword.value !== NUrepassword.value){
            window.alert("Passwords do not match");
    }
    else {
        
        submitNewUserButton.setAttribute("hidden", true);
        SuccessfulSignInButton.removeAttribute("hidden");
        var newUser = [NUusername, NUpassword, NUfirstName, NULastName, NUBirthday, NUEmail];
        window.alert("User successfully created " + NUusername + " " + NUpassword + " "  + NUfirstName + " "  + NULastName + " "  + NUBirthday + " "  + NUEmail);
        
        //user[userNum + 1] = newUser;
    }
    
}