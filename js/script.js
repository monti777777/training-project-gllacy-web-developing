var link = document.querySelector(".slide-btn-js");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-close-content");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=yourName]");
var email= popup.querySelector("[name=yourEmail]");
var comment = popup.querySelector("[name=yourText]");
var popupBasket = document.querySelector(".basket-form");
var basketForm = document.querySelector(".user-basket");
var popupLogin = document.querySelector(".login-form");
var loginForm = document.querySelector(".user-login");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event) {
    if ( !name.value || !email.value || !comment.value) {
        event.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");   
    }
});

basketForm.addEventListener("click",function(event) {
    event.preventDefault();
    popupBasket.classList.add("modal-content-show");
});

loginForm.addEventListener("click",function(event) {
    event.preventDefault();
    popupLogin.classList.add("modal-content-show");
});


window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
        }
    }
    if (event.keyCode === 27) {
        if (popupLogin.classList.contains("modal-content-show")) {
            popupLogin.classList.remove("modal-content-show");
        }
    }
     if (event.keyCode === 27) {
        if (popupBasket.classList.contains("modal-content-show")) {
            popupBasket.classList.remove("modal-content-show");
        }
    }
});



