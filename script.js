document.addEventListener("DOMContentLoaded", () => {
    const projectsBtn = document.getElementById('projectsBtn');
    const programsBtn = document.getElementById('programsBtn');

    const projectsMenu = document.getElementById('projectsMenu');
    const programsMenu = document.getElementById('programsMenu');

    // Inicialmente cerrados
    projectsMenu.style.maxHeight = "0";
    projectsMenu.style.paddingTop = "0";
    projectsMenu.style.paddingBottom = "0";
    programsMenu.style.maxHeight = "0";
    programsMenu.style.paddingTop = "0";
    programsMenu.style.paddingBottom = "0";

    function openMenu(menu) {
        menu.style.maxHeight = menu.scrollHeight + 40 + "px"; // scrollHeight + padding extra
        menu.style.paddingTop = "20px";
        menu.style.paddingBottom = "20px";
    }

    function closeMenu(menu) {
        menu.style.maxHeight = "0";
        menu.style.paddingTop = "0";
        menu.style.paddingBottom = "0";
    }

    projectsBtn.addEventListener('click', () => {
        if (projectsMenu.style.maxHeight === "0px") {
            openMenu(projectsMenu);
            closeMenu(programsMenu);
        } else {
            closeMenu(projectsMenu);
        }
    });

    programsBtn.addEventListener('click', () => {
        if (programsMenu.style.maxHeight === "0px") {
            openMenu(programsMenu);
            closeMenu(projectsMenu);
        } else {
            closeMenu(programsMenu);
        }
    });
});
