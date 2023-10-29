const cards = document.querySelectorAll('.hero__block')

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



const btnBurger = document.querySelector('.btn-burger')
const menuBurger = document.querySelector('.header__wrap-mobile')

btnBurger.addEventListener('click', function() {
    btnBurger.classList.toggle('btn-burger_active')
    menuBurger.classList.toggle('header__wrap-mobile_active')
})