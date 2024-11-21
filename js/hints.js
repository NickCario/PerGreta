document.addEventListener('DOMContentLoaded', () => {
    // Gestione degli indizi
    const hintCards = document.querySelectorAll('.hint-card');
    
    hintCards.forEach(card => {
        const title = card.querySelector('h3');
        const content = card.querySelector('.hint-content');
        
        title.addEventListener('click', () => {
            // Chiudi tutti gli altri indizi
            hintCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.querySelector('.hint-content').classList.remove('show');
                }
            });
            
            // Apri/chiudi l'indizio corrente
            content.classList.toggle('show');
            card.classList.toggle('active');
        });
    });

    // Gestione del pulsante "Rivela il luogo"
    const revealButton = document.querySelector('.reveal-button');
    if (revealButton) {
        revealButton.addEventListener('click', () => {
            // Crea e mostra il modal di rivelazione
            const modal = document.createElement('div');
            modal.className = 'reveal-modal';
            modal.innerHTML = `
                <div class="reveal-content">
                    <h2 class="reveal-title">Ljubljana</h2>
                    <p class="reveal-subtitle">La capitale della Slovenia!</p>
                    <p class="reveal-message">Preparati per un weekend romantico in questa bellissima città!</p>
                </div>
            `;
            
            document.body.appendChild(modal);
            setTimeout(() => modal.classList.add('show'), 100);
            
            // Chiudi il modal cliccando fuori
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('show');
                    setTimeout(() => modal.remove(), 500);
                }
            });
        });
    }
}); 