document.getElementById("submitButton").addEventListener("click", function() {
    const password = document.getElementById("password").value;
    const correctPassword = "18"; // Set your password here

    if (password === correctPassword) {
        window.location.href = "https://app.sane.fyi/s/c774a95e-3df5-11f0-a8ad-c38dcc84cfc3?t=FZfaWppTbK5zBQiPqh37&utm_source=share-menu&utm_medium=web"; // Redirect URL
    } else {
        alert("Oh nooooo. Please try again.");
    }
});