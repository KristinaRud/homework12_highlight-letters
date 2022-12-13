"use strict";

const btnAll = Array.from(document.querySelectorAll(".btn"));

document.addEventListener('keydown', (e) => {
    btnAll.filter((item) => {
        item.dataset.key === e.code 
        ? item.classList.add("active") 
        : item.classList.remove("active");
    });
});