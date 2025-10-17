// header.js
document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
                <img src="logo/logo.png" alt="Business Logo" class="logo me-2">
            </a>
            <div class="ms-auto">
                <a href="https://wa.me/51981332889" target="_blank" class="btn btn-success">
                    <i class="bi bi-whatsapp"></i> +51 981 332 889
                </a>
            </div>
        </div>
    </nav>
    `;

    // Insert the header into the page
    const headerContainer = document.getElementById("header");
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
});
