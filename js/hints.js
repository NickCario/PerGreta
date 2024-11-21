document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.querySelector('.reveal-button');
    
    if (revealButton) {
        revealButton.addEventListener('click', () => {
            // Crea un semplice div per il messaggio
            const messageDiv = document.createElement('div');
            messageDiv.className = 'reveal-message';
            messageDiv.textContent = 'Andiamo a Lubiana! 💙';
            
            // Inserisci il messaggio dopo il pulsante
            revealButton.parentNode.appendChild(messageDiv);
            
            // Nascondi il pulsante
            revealButton.style.display = 'none';
        });
    }
}); 