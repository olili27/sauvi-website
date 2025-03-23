"use strict"

window.addEventListener("DOMContentLoaded", function() {
    let navElement = this.document.querySelector("nav");
    let menuIcon = this.document.querySelector("#menu img");

    menuIcon.onclick = function() {
        navElement.classList.toggle("mobile-nav")
        
        if(navElement.classList.contains("mobile-nav")) {
            menuIcon.src = "./images/close.png";
            return
        }

         menuIcon.src = "./images/menu.png";
    }
})