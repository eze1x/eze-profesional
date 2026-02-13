const plans = document.querySelector(".plans");

window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight * 0.8;
    const plansTop = plans.getBoundingClientRect().top;

    if (plansTop < triggerPoint) {
        plans.classList.add("show");
    }
});
