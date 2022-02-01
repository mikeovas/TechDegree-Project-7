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

//---------Generate Random Notifications from a List -------//

function randomNumber() {
    //purpose is to produce a random number from 0 to 4
    return Math.floor(Math.random() * 3) + 1;
}

const bellIcon = document.querySelector('.bell-icon');
bellIcon.addEventListener('click', (e) => {
    let click = e.target;

    const remark = document.querySelectorAll('.remarks');
    let number1 = randomNumber();
    let number2 = randomNumber();
    if (number1 === number2) {
        number2 = randomNumber();
    }

    let text1 = remark.item(number1).innerText;
    let text2 = remark.item(number2).innerText;

    const modal = document.querySelector(".modal");
    const newRemarks = document.querySelector('.modal-content');
    const close = document.querySelector(".close").innerHTML;

    newRemarks.innerHTML = `<p> ${text1}</p> 
            <p>${text2}</p>  
            ${close}`;

    modal.style.display = "block";
    newRemarks.style.display = "block";
});