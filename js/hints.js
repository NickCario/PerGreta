document.addEventListener('DOMContentLoaded', function() {
    const hintCards = document.querySelectorAll('.hint-card');

    hintCards.forEach(card => {
        const toggle = card.querySelector('.hint-toggle');
        const content = card.querySelector('.hint-content');

        toggle.addEventListener('click', function() {
            // Mostra il contenuto come un messaggio modale
            showModal(content.innerHTML);
        });
    });

    function showModal(message) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <div class="modal-body">${message}</div>
            </div>
        `;
        document.body.appendChild(modal);

        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', function() {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
}); 