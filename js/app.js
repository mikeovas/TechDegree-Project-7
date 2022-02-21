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

// /===================Create Autocomnplete for User Input Field ==================/

const user = document.getElementById("user-field");
const message = document.getElementById("message-field");
const send = document.getElementById("send");

const user_names = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];

autocomplete(user, user_names);

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}
























// document.getElementById('userField').addEventListener('input', (e) => {
//     let suggestArray = [];

//     if (e.target.value) {
//         suggestArray = suggestions.filter(sugg =>
//             sugg.toLocaleLowerCase().startsWith(e.target.value));
//         suggestArray = suggestArray.map(sugg => `<li class="suggestion">${sugg}</li>`)
//         suggestArray = suggestArray.join(" ");
//     }

//     let autocom = document.querySelector('.autocom-box');
//     autocom.innerHTML = suggestArray;
//     console.log(autocom);

//     autocom.addEventListener('click', (e) => {
//         console.log(e.target);
//     })

// });


// const suggest = document.querySelectorAll(".suggestion li").values;
// console.log(suggest);
// const suggestList = suggest.parentElement;
// console.log(suggestList);
// suggestList.addEventListener("click", (e) => {
//     console.log("you clicked on" + e.target);
// })

// suggest.forEach((e) => {
//         e.addEventListener('click', (e) => {
//             target = e.target;
//             console.log(target);
//         });

//     }


























// /==================Send Message Form & Confirm Message Sent==========/
// const user = document.getElementById("userField");
// const message = document.getElementById("messageField");
// const button = document.getElementById("send");
button.addEventListener("click", (e) => {
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