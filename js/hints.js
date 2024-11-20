document.addEventListener('DOMContentLoaded', () => {
    const hintCards = document.querySelectorAll('.hint-card');
    
    hintCards.forEach(card => {
        card.addEventListener('click', function() {
            const hintContent = this.querySelector('.hint-content');
            const wasHidden = hintContent.classList.contains('hidden');
            
            // Chiudi tutti gli indizi
            document.querySelectorAll('.hint-content').forEach(content => {
                content.classList.add('hidden');
            });
            document.querySelectorAll('.hint-card').forEach(c => {
                c.classList.remove('active');
            });
            
            // Apri questo indizio se era chiuso
            if (wasHidden) {
                hintContent.classList.remove('hidden');
                this.classList.add('active');
            }
        });
    });
}); 