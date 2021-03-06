// /==============Alert Banner======================/

const alertBanner = document.getElementById("alert");
//create HTML for the banner
alertBanner.innerHTML = `<div class = "alert-banner">
                        <p><strong>Alert:</strong> You have unread messages</p>
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

// /===================Create Autocomnplete for User Input Field ==================/
const suggestions = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];

let userField = document.getElementById('userField');
userField.addEventListener('keyup', (e) => {
    let suggestArray = [];

    if (e.target.value) {
        suggestArray = suggestions.filter(sugg => {
            let searchTerm = e.target.value.toLowerCase().trim();
            if (searchTerm) {
                return sugg.toLowerCase().startsWith(searchTerm);
            }
        });
        suggestArray = suggestArray.map(sugg => `<li class="suggestion">${sugg}</li>`)
        suggestArray = suggestArray.join(" ");
    }

    let autocom = document.querySelector('.autocom-box');
    autocom.innerHTML = suggestArray;

    let suggestionElements = autocom.querySelectorAll('li');
    suggestionElements.forEach((li) => {
        li.addEventListener('click', (e) => {
            userField.value = e.target.innerText;
            autocom.innerHTML = "";
        });
    });
});

// /==================Send Message Form & Confirm Message Sent==========/
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
send.addEventListener("click", (e) => {
    e.preventDefault();

    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending.");
    } else if (user.value === "") {
        alert("Please input a user name in the user field before sending.");
    } else if (message.value === "") {
        alert("Please input a message to the user in the message field before sending.");
    } else {
        alert(`Your message has been successfully submitted to ${user.value}!`);
    }
});

// ===============Local Storage of Settings ======================//

const email = document.querySelector('#receiveEmail');
const public = document.querySelector('#setPublic');
const timezone = document.querySelector('#timezone')
const save = document.querySelector('#save');
const cancel = document.querySelector('#cancel');

recallStorage();

save.addEventListener('click', () => {
    localStorage.setItem("email", email.checked);
    localStorage.setItem("public", public.checked);
    localStorage.setItem("timezone", timezone.value);
    alert("Your settings have been saved!")
});

cancel.addEventListener("click", () => {
    localStorage.removeItem("email");
    localStorage.removeItem("public");
    localStorage.removeItem("timezone");
    email.checked = null;
    public.checked = null;
    timezone.value = "";
    dropdown = document.querySelector("#timezone.form-field")
    dropdown.value = "original"
});


function recallStorage() {
    if (localStorage.email === "true") {
        email.checked = true;
    } else {
        email.checked = false;
    }
    if (localStorage.public === "true") {
        public.checked = true;
    } else {
        public.checked = false;
    }
    if (localStorage.timezone) {
        timezone.value = localStorage.timezone;
    }
};