// function regs() {
//     let Uname = document.getElementById("Rname").value;
//     let Upass = document.getElementById("Rpass").value;

//     let userObject =[
//         {Username: Uname},
//         {password: Upass}
//     ]

//     localStorage.setItem("regName",JSON.stringify(userObject))
//     showAccountCreatedNotification();
//     log();
// }

// function showAccountCreatedNotification() {

// alert(
//          'Account created successfully!',
//          );
// }

// function log() {
//     let lna = document.getElementById("lname").value;
//     let lpa = document.getElementById("lpass").value;

//     let regObj =[{
//         ln: lna,
//         lp: lpa
//     }]
//     let lnas = localStorage.setItem("logName",JSON.stringify(regObj))

//    let localName = localStorage.getItem("regName",JSON.stringify(userObject))

//    if (localName[0] == lnas[0] && localName[1] == lnas[1]  ) {
//         window.location.href="home.html";
//    }
// }

// function regs() {
//     let Uname = document.getElementById("Rname").value;
//     let Upass = document.getElementById("Rpass").value;

//     let userObject = [
//         { Username: Uname },
//         { password: Upass }
//     ];

//     localStorage.setItem("regName", JSON.stringify(userObject));
//     window.location.href = "login.html";
//     showAccountCreatedNotification();
//     // log(); // You might not want to automatically log in after registration
// }

// function showAccountCreatedNotification() {
//     alert('Account created successfully!');
// }

// function log() {
//     let lna = document.getElementById("lname").value;
//     let lpa = document.getElementById("lpass").value;

//     let regObj = JSON.parse(localStorage.getItem("regName"));

 
//         if (regObj[0].Username === lna && regObj[1].password === lpa) {
//             window.location.href = "home.html";
//         } else {
//             alert('Invalid username or password');
//         }
     

// }


function regs() {
    let Uname = document.getElementById("Rname").value;
    let Upass = document.getElementById("Rpass").value;

    let userObject = {
        Username: Uname,
        password: Upass
    };

    localStorage.setItem("regName", JSON.stringify(userObject));
    showAccountCreatedNotification();
    window.location.href = "login.html";
    
}

function showAccountCreatedNotification() {
    alert('Account created successfully!');
}

function log() {
    let Username = document.getElementById("lname").value;
    let password = document.getElementById("lpass").value;

    try {
        let regObj = JSON.parse(localStorage.getItem("regName"));

        if (regObj && regObj.Username === Username && regObj.password === password) {
            window.location.href = "home.html";
        } else {
            alert('Invalid username or password');
        }
    } catch (error) {
        console.error("Error parsing user information:", error);
        alert('Error during login. Please try again.');
    }
}

