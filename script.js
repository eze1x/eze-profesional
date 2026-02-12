document.addEventListener("DOMContentLoaded", () => {
    const projectsBtn = document.getElementById('projectsBtn');
    const programsBtn = document.getElementById('programsBtn');

    const projectsMenu = document.getElementById('projectsMenu');
    const programsMenu = document.getElementById('programsMenu');

    // Asegurarnos de que inicien ocultos
    projectsMenu.style.display = "none";
    programsMenu.style.display = "none";

    // Función para alternar visibilidad usando getComputedStyle
    function toggleMenu(menu) {
        const currentDisplay = window.getComputedStyle(menu).display;
        if (currentDisplay === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
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
});
