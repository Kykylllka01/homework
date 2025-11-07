(function() {
const body = document.body
const headerTop = document.querySelector(`.header__top-inner`)
const aboutSchool = document.querySelector(`.about-school`)
const modal = document.querySelector(`.modal`)

headerTop.addEventListener(`click`, event => {
    const target = event.target
    if (target && target.classList.contains(`nav__link`) && body.classList.contains(`body--opened-menu`)) {
        body.classList.remove(`body--opened-menu`)
    } else if (target && target.closest(`.burger-icon`)) {
        body.classList.toggle(`body--opened-menu`)
    }
})

aboutSchool.addEventListener(`click`, event => {
    const target = event.target
    if (target && target.closest(`.about-school__button`)){
        event.preventDefault()
        body.classList.add(`body--opened-modal`)
    }
})

modal.addEventListener(`click`, event => {
    const target = event.target
    if (target && target.closest(`.modal__btn-close`) || target.classList.contains(`modal`)) {
        event.preventDefault()
        body.classList.remove(`body--opened-modal`)
    }
})

document.addEventListener(`keydown`, event => {
    if (event.code === `Escape`) {
        body.classList.remove(`body--opened-modal`)
    }
})

})()