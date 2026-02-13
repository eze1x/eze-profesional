document.addEventListener("DOMContentLoaded", () => {
    const projectsBtn = document.getElementById("projectsBtn");
    const programsBtn = document.getElementById("programsBtn");

    const projectsMenu = document.getElementById("projectsMenu");
    const programsMenu = document.getElementById("programsMenu");

    projectsBtn.addEventListener("click", () => {
        projectsMenu.classList.toggle("active");
        programsMenu.classList.remove("active");
    });

    programsBtn.addEventListener("click", () => {
        programsMenu.classList.toggle("active");
        projectsMenu.classList.remove("active");
    });

    // Formulario de contacto
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("¡Mensaje enviado! Te contactaré pronto.");
        contactForm.reset();
    });
});
