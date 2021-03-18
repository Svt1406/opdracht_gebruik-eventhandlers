// opdracht 1: Een click event vast maken aan een button

const eventButton = document.getElementById("mybutton");
    eventButton.addEventListener("click", function () {
        alert("button clicked");
    });

// opdracht 2: een click event toevoegen waardoor achtergrond kleur veranderd 

const changeBackground = document.querySelector(".blue-background");
const changeButton = document.querySelector("#mybutton2");

const changeBackgroundColor = () => {
        changeBackground.classList.add("red-background");
};
changeButton.addEventListener("click", changeBackgroundColor);

// opdracht 3: van kleur togglen

const changeBackground = document.querySelector(".blue-background");
const changeButton = document.querySelector("#mybutton2");

const toggleBackgroundColor = () => {
        changeBackground.classList.toggle("red-background");
};
changeButton.addEventListener("click", toggleBackgroundColor);
