document.addEventListener("DOMContentLoaded", () => {
    const projectsBtn = document.getElementById('projectsBtn');
    const programsBtn = document.getElementById('programsBtn');

    const projectsMenu = document.getElementById('projectsMenu');
    const programsMenu = document.getElementById('programsMenu');

    // Inicialmente cerrados
    projectsMenu.style.maxHeight = "0";
    programsMenu.style.maxHeight = "0";

    function toggleMenu(menu) {
        if (menu.style.maxHeight === "0px" || menu.style.maxHeight === "") {
            menu.style.maxHeight = menu.scrollHeight + "px"; // toma el tamaño real del contenido
        } else {
            menu.style.maxHeight = "0";
        }
    }

    projectsBtn.addEventListener('click', () => {
        toggleMenu(projectsMenu);
        programsMenu.style.maxHeight = "0"; // cerrar el otro menú
    });

    programsBtn.addEventListener('click', () => {
        toggleMenu(programsMenu);
        projectsMenu.style.maxHeight = "0"; // cerrar el otro menú
    });
});
