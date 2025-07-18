// 1. FORM VALIDATION FOR EMAIL
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = form?.querySelector('input[type="email"]');

    if (form && emailInput) {
        form.addEventListener("submit", function (e) {
            const email = emailInput.value.trim();
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if (!email || !emailPattern.test(email)) {
                e.preventDefault();
                alert("Please enter a valid email address.");
            }
        });
    }
});
