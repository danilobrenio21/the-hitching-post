document.addEventListener("DOMContentLoaded", function () {
    // 1. Automatic Active Navigation Highlighter
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // 2. Mobile Menu Toggle Logic
    const header = document.querySelector(".site-header .nav-container");
    if (header && !document.querySelector(".menu-toggle")) {
        const toggleBtn = document.createElement("button");
        toggleBtn.className = "menu-toggle";
        toggleBtn.innerHTML = "&#9776;"; // Hamburger icon
        toggleBtn.setAttribute("aria-label", "Toggle navigation menu");
        
        toggleBtn.addEventListener("click", () => {
            const links = document.querySelector(".nav-links");
            if (links) links.classList.toggle("active");
        });

        header.insertBefore(toggleBtn, document.querySelector(".nav-links"));
    }

    // 3. Insert Google Translate Widget container at bottom left if not present
    if (!document.getElementById("google_translate_element")) {
        const translateDiv = document.createElement("div");
        translateDiv.id = "google_translate_element";
        document.body.appendChild(translateDiv);
    }
});

// 4. Google Translate Initialization Callback (English, Spanish, Chinese)
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,zh-CN',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}
