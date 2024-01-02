/* dropdown menu */
let dropdowns = document.querySelectorAll(".dropdown");

for (let i = 0; i < dropdowns.length; i++) {
    let dropdown = dropdowns[i];
    let mainButton = dropdown.querySelector(".click");
    let content = dropdown.querySelector(".dropdown-content");

    mainButton.addEventListener("click", function () {
        if (!content.classList.contains("visible")) {
            content.classList.add("visible");
        } else {
            content.classList.remove("visible");
        }
    })
}

let images = document.querySelectorAll("img");
let imgCircles = document.querySelectorAll(".image-circle");
let currentImgIndex = 0;
images[0].style.display = "inline-block";
imgCircles[currentImgIndex].style.backgroundColor = "red";
let imgBackButton = document.querySelector(".back-button");
let imgNextButton = document.querySelector(".next-button");

imgBackButton.addEventListener("click", backButtonHandler);

imgNextButton.addEventListener("click", nextButtonHandler)

for (let i = 0; i < imgCircles.length; i++) {
    imgCircles[i].addEventListener("click", function () {
        hideAllImages();
        displayImage(i);
        currentImgIndex = i;
    });
}

setInterval(() => {
    nextButtonHandler();
}, 5000);

function backButtonHandler() {
    hideAllImages();
    currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
    displayImage(currentImgIndex);
}

function nextButtonHandler() {
    hideAllImages();
    currentImgIndex = (currentImgIndex + 1 + images.length) % images.length;
    displayImage(currentImgIndex);
}

function displayImage(index) {
    images[index].style.display = "inline-block";
    imgCircles[index].style.backgroundColor = "red";
}

function hideAllImages() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    for (let i = 0; i < imgCircles.length; i++) {
        imgCircles[i].style.backgroundColor = "";
    }
}