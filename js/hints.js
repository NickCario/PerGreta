document.addEventListener('DOMContentLoaded', function() {
    const hintCards = document.querySelectorAll('.hint-card');

    hintCards.forEach(card => {
        card.addEventListener('click', function() {
            const content = card.querySelector('.hint-content');
            
            // Crea una letter-box
            const letterBox = document.createElement('div');
            letterBox.classList.add('letter-box');
            
            letterBox.innerHTML = `
                <div class="letter-content">
                    <button class="close-button">&times;</button>
                    <h2>Indizio ${card.getAttribute('data-hint')}</h2>
                    <div class="letter-text">
                        ${content.innerHTML}
                    </div>
                </div>
            `;

            document.body.appendChild(letterBox);
            
            // Mostra la letter-box con un piccolo delay per l'animazione
            requestAnimationFrame(() => {
                letterBox.classList.add('show');
            });

            // Gestisci la chiusura
            const closeButton = letterBox.querySelector('.close-button');
            closeButton.addEventListener('click', () => {
                letterBox.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(letterBox);
                }, 300);
            });

            // Chiudi anche cliccando fuori dalla lettera
            letterBox.addEventListener('click', (e) => {
                if (e.target === letterBox) {
                    letterBox.classList.remove('show');
                    setTimeout(() => {
                        document.body.removeChild(letterBox);
                    }, 300);
                }
            });
        });
    });
}); 