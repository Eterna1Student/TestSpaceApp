const cards = document.querySelectorAll('.hero__block');

cards.forEach(card => {
    card.addEventListener('click', e => {
        if ( e.currentTarget.classList.contains('hero__block-active')) {
            return 
        }
        else{
            const activeCard = document.querySelector('.hero__block-active')
            if (activeCard) {
                activeCard.classList.remove('hero__block-active')
            }
            e.currentTarget.classList.add('hero__block-active')
        } 
    })
} )