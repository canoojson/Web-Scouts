// Función para establecer el modo oscuro
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    const body = document.body;

    // Función para activar/desactivar el modo oscuro
    function setDarkMode(isDark) {
        if (isDark) {
            body.classList.add("dark-mode");
            document.querySelectorAll("*").forEach((el) => {
                el.style.transition = "background-color 0.4s, color 0.4s";
            });
        } else {
            body.classList.remove("dark-mode");
        }
    }

    // Leer cookies
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    };

    // Guardar cookies
    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    };

    // Verificar cookie y activar modo oscuro si existe
    const isDarkMode = getCookie("darkMode") === "true";
    toggle.checked = isDarkMode;
    setDarkMode(isDarkMode);

    // Evento para cambiar el estado del switch
    toggle.addEventListener("change", () => {
        const isChecked = toggle.checked;
        setDarkMode(isChecked);
        setCookie("darkMode", isChecked, 30); // Guarda estado durante 30 días
    });
});