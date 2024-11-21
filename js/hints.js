document.addEventListener('DOMContentLoaded', function() {
    const hintCards = document.querySelectorAll('.hint-card');

    hintCards.forEach(card => {
        const toggle = card.querySelector('.hint-toggle');
        const content = card.querySelector('.hint-content');

        toggle.addEventListener('click', function() {
            content.classList.toggle('hidden');
            toggle.textContent = content.classList.contains('hidden') ? '▼' : '▲';
        });
    });
}); 