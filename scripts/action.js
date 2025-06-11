let heroCTABtn = document.querySelector("#heroCTABtn");

heroCTABtn.addEventListener("click", () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
});