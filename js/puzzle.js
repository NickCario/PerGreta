document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.puzzle-board');
    
    let pieces = [];
    let selectedPiece = null;
    const size = 3;
    
    // Calcola le dimensioni in base al container
    const boardRect = board.getBoundingClientRect();
    const boardWidth = boardRect.width;
    const boardHeight = boardWidth / 1.5;
    
    board.style.height = `${boardHeight}px`;
    
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
            
            piece.style.backgroundImage = 'url("/PerGreta/images/lubiana.jpg")';
            piece.style.backgroundPosition = `${-col * 100}% ${-row * 100}%`;
            
            piece.addEventListener('click', () => selectPiece(piece));
            board.appendChild(piece);
        });
    }
    
    function checkPuzzle() {
        const pieces = Array.from(document.querySelectorAll('.puzzle-piece'));
        return pieces.every((piece, index) => {
            // Confronta la posizione corrente con quella corretta
            return parseInt(piece.dataset.correctPos) === index;
        });
    }
    
    function showCompleteImage() {
        // Rimuovi tutti i pezzi
        board.innerHTML = '';
        
        // Crea un'immagine completa
        const completeImage = document.createElement('div');
        completeImage.style.width = '100%';
        completeImage.style.height = '100%';
        completeImage.style.backgroundImage = 'url("/PerGreta/images/lubiana.jpg")';
        completeImage.style.backgroundSize = 'cover';
        completeImage.style.backgroundPosition = 'center';
        completeImage.style.transition = 'opacity 0.5s ease';
        completeImage.style.borderRadius = '10px';
        
        board.appendChild(completeImage);
    }
    
    function selectPiece(piece) {
        if (selectedPiece === null) {
            selectedPiece = piece;
            piece.classList.add('selected');
        } else {
            // Scambia i pezzi
            const pos1 = selectedPiece.dataset.currentPos;
            const pos2 = piece.dataset.currentPos;
            
            selectedPiece.dataset.currentPos = pos2;
            piece.dataset.currentPos = pos1;
            
            // Scambia la posizione DOM
            const parent = board;
            const sibling = piece.nextSibling;
            parent.insertBefore(piece, selectedPiece);
            parent.insertBefore(selectedPiece, sibling);
            
            // Rimuovi la selezione
            selectedPiece.classList.remove('selected');
            selectedPiece = null;
            
            // Controlla se il puzzle è completo
            if (checkPuzzle()) {
                console.log("Puzzle completato!"); // Debug
                setTimeout(showCompleteImage, 500);
            }
        }
    }
    
    // Inizializza il puzzle
    createPuzzle();
}); 