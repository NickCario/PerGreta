document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.typewriter');
    const buttonContainer = document.querySelector('.button-container');
    const typewriterContainer = document.querySelector('.typewriter-container');
    
    // Nascondi inizialmente sia il testo che i pulsanti
    typewriterContainer.style.opacity = '0';
    buttonContainer.style.display = 'none';
    
    function createHeartShape() {
        const heartContainer = document.querySelector('.heart-animation');
        const numberOfPoints = 45;
        const scale = 40; 
        
        // Pulisci il container
        heartContainer.innerHTML = '';
        
        // Calcola il tempo totale dell'animazione del cuore
        const totalHeartAnimationTime = (numberOfPoints * 0.08) + 2; // tempo per l'ultimo cuore + tempo animazione appearHeart
        
        for (let i = 0; i < numberOfPoints; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '💙';
            
            const angle = (i / numberOfPoints) * 2 * Math.PI;
            
            const x = 16 * Math.pow(Math.sin(angle), 3);
            const y = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
            
            const normalizedX = (x * scale / 16) + 50;
            const normalizedY = (y * scale / 16) + 40;
            
            heart.style.left = `${normalizedX}%`;
            heart.style.top = `${normalizedY}%`;
            heart.style.animationDelay = `${i * 0.08}s`;
            
            heartContainer.appendChild(heart);
        }

        // Mostra il testo dopo che il cuore è formato
        setTimeout(() => {
            // Mostra il contenitore del testo con fade in
            typewriterContainer.style.transition = 'opacity 0.5s ease-in-out';
            typewriterContainer.style.opacity = '1';
            
            // Avvia l'animazione della scritta
            texts.forEach((text) => {
                text.classList.add('typing');
            });

            // Mostra i pulsanti dopo che la scritta è apparsa (3 secondi)
            setTimeout(() => {
                buttonContainer.style.display = 'flex';
                setTimeout(() => {
                    buttonContainer.style.opacity = '1';
                }, 50);
            }, 3000); // Attendi che la scritta sia completamente visibile

        }, totalHeartAnimationTime * 1000); // Converti in millisecondi
    }

    // Crea il cuore una sola volta
    createHeartShape();
    
    // Gestione della finestra modale
    const modal = document.querySelector('.letter-modal');
    const closeModal = document.querySelector('.close-modal');
    
    // Aggiungi event listeners per i pulsanti
    const buttons = document.querySelectorAll('.continue-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === 'Per te') {
                modal.style.display = 'flex';
                setTimeout(() => {
                    modal.classList.add('show');
                }, 10);
            } else if (button.textContent === 'Regalo') {
                // Reindirizza alla pagina del regalo
                window.location.href = 'regalo.html';
            }
        });
    });

    // Chiudi la modale quando si clicca sul pulsante di chiusura
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });

    // Chiudi la modale quando si clicca fuori da essa
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });
});
