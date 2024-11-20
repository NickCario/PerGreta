document.addEventListener('DOMContentLoaded', () => {
    const hintCards = document.querySelectorAll('.hint-card');
    
    hintCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Card clicked'); // Per debug
            const hintContent = this.querySelector('.hint-content');
            if (hintContent.classList.contains('hidden')) {
                // Nascondi tutti gli indizi prima
                document.querySelectorAll('.hint-content').forEach(h => {
                    h.classList.add('hidden');
                });
                // Mostra questo indizio
                hintContent.classList.remove('hidden');
            } else {
                // Nascondi questo indizio
                hintContent.classList.add('hidden');
            }
        });
    });
}); 