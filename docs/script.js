document.getElementById("menu-toggle").addEventListener("click", function() {
    const nav = document.getElementById("collapsable-nav");
    nav.classList.toggle("navbar-collapse"); // Переключаем класс для скрытия/показ меню
    const expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
});

// Обработчик для пунктов меню
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", function(event) {
        event.preventDefault(); // Отменяем действие по умолчанию (переход по ссылке)

        const targetId = this.getAttribute("data-target"); // Получаем целевой элемент
        const targetElement = document.querySelector(targetId); // Находим элемент на странице

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" }); // Прокручиваем к элементу
        }
    });
});
