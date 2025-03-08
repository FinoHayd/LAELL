document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#top-nav ul li a");
    const themeContents = document.querySelectorAll(".theme-content");

    function showSelectedTheme(event) {
        event.preventDefault(); // Evita la recarga de la página

        // Ocultar todos los contenidos
        themeContents.forEach(content => {
            content.classList.remove("active");
        });

        // Remover la clase 'active' de todos los enlaces
        navLinks.forEach(link => {
            link.classList.remove("active");
        });

        // Obtener el ID del contenido a mostrar
        const targetId = event.currentTarget.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.classList.add("active");
        }

        // Agregar la clase 'active' al enlace seleccionado
        event.currentTarget.classList.add("active");
    }

    // Asignar evento a cada enlace del menú
    navLinks.forEach(link => {
        link.addEventListener("click", showSelectedTheme);
    });

    // Mostrar el contenido inicial (Inicio)
    document.querySelector("#welcome-message").classList.add("active");
});