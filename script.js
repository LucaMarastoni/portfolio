document.addEventListener("DOMContentLoaded", function () {
    const privacyBtn = document.getElementById('privacyBtn');
    const privacyCard = document.getElementById('privacyCard');
    const overlay = document.getElementById('overlay');
    const closePrivacyCard = document.getElementById('closePrivacyCard');

    // Apre la card della Privacy Policy
    privacyBtn.addEventListener('click', function(event) {
        event.preventDefault();
        privacyCard.classList.add('show-card');
        overlay.style.display = 'block';
    });

    // Chiude la card della Privacy Policy cliccando su "Chiudi"
    closePrivacyCard.addEventListener('click', function() {
        privacyCard.classList.remove('show-card');
        privacyCard.classList.add('hide-card');
        setTimeout(function() {
            overlay.style.display = 'none';
            privacyCard.classList.remove('hide-card');
        }, 300);
    });

    // Chiude la card della Privacy Policy cliccando fuori dalla card (overlay)
    overlay.addEventListener('click', function() {
        privacyCard.classList.remove('show-card');
        privacyCard.classList.add('hide-card');
        setTimeout(function() {
            overlay.style.display = 'none';
            privacyCard.classList.remove('hide-card');
        }, 300);
    });
});
