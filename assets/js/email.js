document.getElementById('emailForm').addEventListener('submit', function (event) {
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Einfache Regex für Email-Validierung

    if (!emailPattern.test(emailValue)) {
        alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        event.preventDefault(); // Verhindert das Absenden des Formulars
    }
});
