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

const activeLi = document.getElementsByClassName('active');

document.querySelectorAll('.traffic-nav-link').forEach(item => {
    item.addEventListener('click', (e) => {
        for (i = 0; i < activeLi.length; i++) {
            activeLi[i].classList.remove('active');
        }
        e.target.classList.add('active');
    });
});