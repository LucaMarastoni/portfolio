document.addEventListener("DOMContentLoaded", function () {
    const privacyBtn = document.getElementById('privacyBtn');
    const privacyCard = document.getElementById('privacyCard');
    const overlay = document.getElementById('overlay');
    const closePrivacyCard = document.getElementById('closePrivacyCard');

    privacyBtn.addEventListener('click', function(event) {
        event.preventDefault();
        privacyCard.classList.add('show-card');
        overlay.style.display = 'block';
    });

    closePrivacyCard.addEventListener('click', function() {
        privacyCard.classList.remove('show-card');
        privacyCard.classList.add('hide-card');
        setTimeout(function() {
            overlay.style.display = 'none';
            privacyCard.classList.remove('hide-card');
        }, 300);
    });

    overlay.addEventListener('click', function() {
        privacyCard.classList.remove('show-card');
        privacyCard.classList.add('hide-card');
        setTimeout(function() {
            overlay.style.display = 'none';
            privacyCard.classList.remove('hide-card');
        }, 300);
    });
});
