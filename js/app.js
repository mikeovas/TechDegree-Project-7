// /==============Alert Banner======================/

const alertBanner = document.getElementById("alert");
//create HTML for the banner
alertBanner.innerHTML = `<div class = "alert-banner">
                        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
                        <p class = "alert-banner-close">x</p>
                        </div>`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});

// ==============Bell Icon & Notifications ================/

//--------Set Timer for Notification Light to come on -----//
setTimeout(() => {
    const dot = document.querySelector(".notification-dot");
    dot.style.opacity = 1;
}, 2000)

// ----------- Variables for Pop Up Notifications ---------/
const bellIcon = document.querySelector('.bell-icon');
const remarks = document.querySelectorAll('.remarks');
const modal = document.querySelector(".modal");
const newRemarks = document.querySelector('.notification-content');
const close = document.querySelector(".close");

//---------Generate Random Notifications from a List -------//
function randomNumber() {
    //purpose is to produce a random number from 0 to 4
    return Math.floor(Math.random() * 3) + 1;
}

// ----------Generate Random Notifications ------------//
bellIcon.addEventListener('click', (e) => {
    let number1;
    let number2;

    do {
        number1 = randomNumber();
        number2 = randomNumber();
    } while (number1 === number2);

    let text1 = remarks.item(number1).innerText;
    let text2 = remarks.item(number2).innerText;

    newRemarks.innerHTML = `<p>${text1}</p> 
            <p>${text2}</p>
            `;
    modal.style.display = "block";
    newRemarks.style.display = "block";
});

close.addEventListener('click', (e) => {
    modal.style.display = "none";
});

// /==================Send Message Form & Confirm Message Sent==========/
const button = document.getElementById("send");
button.addEventListener("click", (e) => {
    e.preventDefault();
    let user = document.getElementById("userField").value;
    let message = document.getElementById("messageField").value;
    if (user === "") {
        console.log("user" + user);
        alert("Please input a user name.");
    } else if (message === "") {
        console.log("message" + message);
        alert("Please input a message to the user");
    } else {
        alert("Your message has been submitted to the user!");
    }
});