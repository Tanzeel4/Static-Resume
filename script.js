"use strict";
const togglebutton = document.getElementById("toggle-skills");
const skills = document.getElementById("skills"); // Corrected to HTMLElement
togglebutton === null || togglebutton === void 0 ? void 0 : togglebutton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
