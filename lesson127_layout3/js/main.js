(function() {
const body = document.body
const headerTop = document.querySelector(`.header__top-inner`)

headerTop.addEventListener(`click`, event => {
    const target = event.target
    if (target && target.classList.contains(`nav__link`) && body.classList.contains(`body--opened-menu`)) {
        body.classList.remove(`body--opened-menu`)
    }
    if (target && target.closest(`.burger-icon`)) {
        body.classList.toggle(`body--opened-menu`)
    }
})
})()