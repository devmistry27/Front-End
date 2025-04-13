const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = Modal = () => {
    console.log("Modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}