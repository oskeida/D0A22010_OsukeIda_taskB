document.addEventListener("DOMContentLoaded", () => {
    const page = document.getElementById("page-1");

    // Wait for 3 seconds before starting the fade-out
    setTimeout(() => {
        page.classList.add("hidden");

        // Wait for the fade-out to complete before navigating to the next page
        setTimeout(() => {
            window.location.href = "main.html"; // Replace with the next page's URL
        }, 1500); // Matches the fade-out transition time
    }, 3000); // Wait 3 seconds before starting the fade-out

    const textElement = document.querySelector(".fade-in-text");
    // Delay to simulate visibility after some time
    setTimeout(() => {
        textElement.style.opacity = "1";
        textElement.style.transform = "translateY(0)";
    }, 500);
});
