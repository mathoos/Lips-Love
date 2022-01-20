let burger = document.getElementById("burger");
let dropdown = document.getElementById("dropdown");

burger.addEventListener("click", () => {
    dropdown.classList.toggle("dropdown-active");
    console.log("cliquer")
})