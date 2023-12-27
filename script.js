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
