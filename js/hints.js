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
                    <h2 class="reveal-title">Andiamo a...</h2>
                    <p class="reveal-subtitle">LUBIANA!</p>
                </div>
            `;
            
            document.body.appendChild(modal);
            // Aggiungi la classe show dopo un breve delay per attivare l'animazione
            requestAnimationFrame(() => {
                modal.classList.add('show');
            });
            
            // Chiudi il modal cliccando ovunque
            modal.addEventListener('click', () => {
                modal.classList.remove('show');
                setTimeout(() => modal.remove(), 500);
            });
        });
    }
}); 