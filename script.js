document.addEventListener("DOMContentLoaded", () => {
    const projectsBtn = document.getElementById('projectsBtn');
    const programsBtn = document.getElementById('programsBtn');

    const projectsMenu = document.getElementById('projectsMenu');
    const programsMenu = document.getElementById('programsMenu');

    // Ocultar menús al inicio
    projectsMenu.style.display = "none";
    programsMenu.style.display = "none";

    projectsBtn.addEventListener('click', () => {
        projectsMenu.style.display = "block";
        programsMenu.style.display = "none";
        console.log("Proyectos abierto"); // verificación en consola
    });

    programsBtn.addEventListener('click', () => {
        programsMenu.style.display = "block";
        projectsMenu.style.display = "none";
        console.log("Programas abierto"); // verificación en consola
    });
});
