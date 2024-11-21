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
            const buttonContainer = revealButton.parentElement;
            const revealText = document.createElement('div');
            revealText.className = 'reveal-text';
            revealText.textContent = 'Andiamo a Lubiana!';
            
            // Rimuovi il bottone e aggiungi il testo
            buttonContainer.innerHTML = '';
            buttonContainer.appendChild(revealText);
            
            // Forza un reflow prima di aggiungere la classe show
            revealText.offsetHeight;
            
            // Aggiungi la classe show per attivare la transizione
            setTimeout(() => {
                revealText.classList.add('show');
            }, 50);
        });
    }
}); 