const btn = document.getElementById("verPlanesBtn");
const plans = document.getElementById("planes");
const planBtns = document.querySelectorAll(".plan-btn");
const infoMsg = document.getElementById("infoMsg");

btn.addEventListener("click", () => {
    plans.classList.add("show");
    plans.scrollIntoView({ behavior: "smooth" });
});

planBtns.forEach(button => {
    button.addEventListener("click", () => {
        infoMsg.textContent = "✅ Gracias por tu interés. Este es un proyecto demostrativo.";
    });
});
