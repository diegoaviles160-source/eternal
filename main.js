const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-4-line");
});

navLinks.addEventListener("click", () => {


    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-4-line");
}


);

function openPopup(title, description, items, image) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-description").innerText = description;

    const list = document.getElementById("popup-list");
    list.innerHTML = "";

    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = " " + item;
        list.appendChild(li);
    });

    const img = document.getElementById("popup-img");
    img.src = image;
    img.alt = title;

    document.getElementById("service-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("service-popup").style.display = "none";
}



