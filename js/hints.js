document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.querySelector('.reveal-button');
    
    revealButton.addEventListener('click', () => {
        // Crea il modal per la rivelazione
        const revealModal = document.createElement('div');
        revealModal.className = 'reveal-modal';
        
        revealModal.innerHTML = `
            <div class="reveal-content">
                <div class="reveal-text">
                    <h2 class="reveal-title">Lubiana!</h2>
                    <p class="reveal-subtitle">La vostra prossima avventura insieme 💙</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(revealModal);
        
        // Aggiungi la classe per l'animazione dopo un breve delay
        setTimeout(() => {
            revealModal.classList.add('show');
        }, 50);
        
        // Chiudi il modal quando si clicca fuori
        revealModal.addEventListener('click', (e) => {
            if (e.target === revealModal) {
                revealModal.classList.remove('show');
                setTimeout(() => {
                    revealModal.remove();
                }, 500);
            }
        });
    });
}); 