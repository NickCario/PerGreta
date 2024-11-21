document.addEventListener('DOMContentLoaded', () => {
    // Gestione del pulsante "Rivela"
    const revealButton = document.querySelector('.reveal-button');
    
    if (revealButton) {
        revealButton.addEventListener('click', () => {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'reveal-message';
            messageDiv.textContent = 'Andiamo a Lubiana! 💙';
            
            revealButton.parentNode.appendChild(messageDiv);
            revealButton.style.display = 'none';
        });
    }

    // Gestione dei click sugli indizi
    const hintCards = document.querySelectorAll('.hint-card');
    
    hintCards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggle della classe active
            card.classList.toggle('active');
            
            // Trova il contenuto dell'indizio
            const hintContent = card.querySelector('.hint-content');
            
            // Se il contenuto è visibile, lo nascondiamo, altrimenti lo mostriamo
            if (hintContent.style.maxHeight) {
                hintContent.style.maxHeight = null;
            } else {
                hintContent.style.maxHeight = hintContent.scrollHeight + "px";
            }
        });
    });
}); 