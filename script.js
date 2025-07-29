document.querySelector(".navigation").addEventListener("click", function(e) {
    const href = e.target.getAttribute("href");

    if (href === "#home") {
        e.preventDefault();
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    }

    if (href === "#projects") {
        e.preventDefault();
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    }

    if (href === "#skills") {
        e.preventDefault();
        document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
    }

    if (href === "#contact") {
        e.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }
});