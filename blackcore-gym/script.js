const btn = document.getElementById("verPlanesBtn");
const plans = document.getElementById("planes");

btn.addEventListener("click", () => {
    plans.classList.add("show");
    plans.scrollIntoView({ behavior: "smooth" });
});
