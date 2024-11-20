document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.puzzle-board');
    
    let pieces = [];
    let selectedPiece = null;
    const size = 3;
    
    // Calcola le dimensioni in base al container
    const boardRect = board.getBoundingClientRect();
    const boardWidth = boardRect.width;
    const boardHeight = boardWidth / 1.5; // Mantiene l'aspect ratio dell'immagine
    
    // Imposta le dimensioni del board
    board.style.height = `${boardHeight}px`;
    
    // Calcola le dimensioni dei pezzi
    const pieceWidth = boardWidth / size;
    const pieceHeight = boardHeight / size;
    
    function createPuzzle() {
        pieces = Array.from({ length: size * size }, (_, i) => i);
        
        // Mescola i pezzi
        for (let i = pieces.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
        }
        
        board.innerHTML = '';
        
        pieces.forEach((pos, index) => {
            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.dataset.currentPos = index;
            piece.dataset.correctPos = pos;
            
            const row = Math.floor(pos / size);
            const col = pos % size;
            
            piece.style.backgroundImage = 'url("images/lubiana.jpg")';
            piece.style.backgroundPosition = `${-col * 100}% ${-row * 100}%`;
            
            piece.addEventListener('click', () => selectPiece(piece));
            board.appendChild(piece);
        });
    }
    
    function checkPuzzle() {
        const pieces = document.querySelectorAll('.puzzle-piece');
        let isCorrect = true;
        
        pieces.forEach(piece => {
            if (piece.dataset.currentPos !== piece.dataset.correctPos) {
                isCorrect = false;
            }
        });
        
        return isCorrect;
    }
    
    function showCompleteImage() {
        // Rimuovi tutti i pezzi
        board.innerHTML = '';
        
        // Crea un'immagine completa
        const completeImage = document.createElement('div');
        completeImage.style.width = `${boardWidth}px`;
        completeImage.style.height = `${boardHeight}px`;
        completeImage.style.backgroundImage = 'url("images/lubiana.jpg")';
        completeImage.style.backgroundSize = `${boardWidth}px ${boardHeight}px`;
        completeImage.style.transition = 'opacity 0.5s ease';
        
        board.appendChild(completeImage);
    }
    
    function selectPiece(piece) {
        if (selectedPiece === null) {
            selectedPiece = piece;
            piece.classList.add('selected');
        } else {
            const pos1 = selectedPiece.dataset.currentPos;
            const pos2 = piece.dataset.currentPos;
            
            selectedPiece.dataset.currentPos = pos2;
            piece.dataset.currentPos = pos1;
            
            const parent = board;
            const sibling = piece.nextSibling;
            parent.insertBefore(piece, selectedPiece);
            parent.insertBefore(selectedPiece, sibling);
            
            selectedPiece.classList.remove('selected');
            selectedPiece = null;
            
            // Controlla se il puzzle è completo dopo ogni mossa
            if (checkPuzzle()) {
                setTimeout(() => {
                    showCompleteImage();
                }, 500); // Piccolo ritardo per vedere l'ultima mossa
            }
        }
    }
    
    // Inizializza il puzzle
    createPuzzle();
    
    // Gestione degli indizi
    const hintCards = document.querySelectorAll('.hint-card');
    hintCards.forEach(card => {
        card.addEventListener('click', function() {
            const hintContent = this.querySelector('.hint-content');
            if (hintContent) {
                if (hintContent.classList.contains('hidden')) {
                    document.querySelectorAll('.hint-content').forEach(h => {
                        h.classList.add('hidden');
                    });
                    hintContent.classList.remove('hidden');
                } else {
                    hintContent.classList.add('hidden');
                }
            }
        });
    });
}); 