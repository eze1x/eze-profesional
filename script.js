document.addEventListener("DOMContentLoaded", () => {
const projectsBtn = document.getElementById('projectsBtn');
const programsBtn = document.getElementById('programsBtn');

const projectsMenu = document.getElementById('projectsMenu');
const programsMenu = document.getElementById('programsMenu');

// Asegurarnos de que inicien ocultos
projectsMenu.style.display = "none";
programsMenu.style.display = "none";

// Función para alternar visibilidad
function toggleMenu(menu) {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

projectsBtn.addEventListener('click', () => {
    toggleMenu(projectsMenu);
    programsMenu.style.display = "none"; // oculta el otro menú si estaba abierto
});

programsBtn.addEventListener('click', () => {
    toggleMenu(programsMenu);
    projectsMenu.style.display = "none"; // oculta el otro menú si estaba abierto
});
