function showSection(id) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}


window.onload = function () {
    document.getElementById("cookie-popup").classList.remove("hidden");
};

document.getElementById("cookie-accept").onclick = function () {
    localStorage.setItem("cookie_choice", "accepted");
    closeCookiePopup();
};

document.getElementById("cookie-decline").onclick = function () {
    localStorage.setItem("cookie_choice", "declined");
    closeCookiePopup();
};

function closeCookiePopup() {
    const popup = document.getElementById("cookie-popup");
    popup.classList.add("fadeout");
    setTimeout(() => popup.remove(), 500);
}



        $(document).ready(function(){
        
        $("#myCarousel").carousel({interval: 4000, pause: "hover", keyboard:true});
                        
        
        $(".item1").click(function(){
            $("#myCarousel").carousel(0);
        });
        $(".item2").click(function(){
            $("#myCarousel").carousel(1);
        });
        $(".item3").click(function(){
            $("#myCarousel").carousel(2);
        });
        $(".item4").click(function(){
            $("#myCarousel").carousel(3);
        });
        $(".item5").click(function(){
            $("#myCarousel").carousel(4);
        });
        $(".item6").click(function(){
            $("#myCarousel").carousel(5);
        });
        $(".item7").click(function(){
            $("#myCarousel").carousel(6);
        });
        $(".item8").click(function(){
            $("#myCarousel").carousel(7);
        });
        $(".item9").click(function(){
            $("#myCarousel").carousel(8);
        });
        $(".item10").click(function(){
            $("#myCarousel").carousel(9);
        });
                
        
        $(".carousel-control-prev").click(function(){
            $("#myCarousel").carousel("prev");
        });
        $(".carousel-control-next").click(function(){
            $("#myCarousel").carousel("next");
        });
        });


const DEMO = true;

document.getElementById("bookingForm").addEventListener("submit", function (event) {

    event.preventDefault();

    const data = {
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        treatment: document.getElementById("treatment").value,
        email: document.getElementById("email").value
    };

    if (DEMO) {
        document.getElementById("message").innerText =
            "Booking saved!";
        return;
    }
});


const formNewsletter = document.querySelector('.newsletter-form');
const thankYouMessage = document.querySelector('.thank-you-message');

formNewsletter.addEventListener('submit', function (event) {
    event.preventDefault();

    thankYouMessage.style.display = 'block';

    formNewsletter.querySelector('input[type="email"]').value = '';
});



const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav_link_barra');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});