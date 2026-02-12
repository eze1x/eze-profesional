document.addEventListener("DOMContentLoaded", () => {
    const projectsBtn = document.getElementById('projectsBtn');
    const programsBtn = document.getElementById('programsBtn');

    const projectsMenu = document.getElementById('projectsMenu');
    const programsMenu = document.getElementById('programsMenu');

    // Inicialmente ocultos
    projectsMenu.style.display = "none";
    programsMenu.style.display = "none";

    // Mostrar/ocultar
    projectsBtn.addEventListener('click', () => {
        projectsMenu.style.display = projectsMenu.style.display === "block" ? "none" : "block";
        programsMenu.style.display = "none";
    });

    programsBtn.addEventListener('click', () => {
        programsMenu.style.display = programsMenu.style.display === "block" ? "none" : "block";
        projectsMenu.style.display = "none";
    });
});
