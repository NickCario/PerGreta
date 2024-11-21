document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.querySelector('.reveal-button');
    console.log('Reveal button:', revealButton);
    
    if (revealButton) {
        revealButton.addEventListener('click', () => {
            console.log('Button clicked!');
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
            
            // Forza un reflow prima di aggiungere la classe show
            revealModal.offsetHeight;
            
            // Mostra il modal e il suo contenuto
            revealModal.classList.add('show');
            
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
    }
}); 