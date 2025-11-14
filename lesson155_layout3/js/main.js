(function () {
    const body = document.body
    const headerTop = document.querySelector(`.header__top-inner`)
    const aboutSchool = document.querySelector(`.about-school`)
    const modal = document.querySelector(`.modal`)

    // Бургер

    headerTop.addEventListener(`click`, event => {
        const target = event.target
        if (target && target.classList.contains(`nav__link`) && body.classList.contains(`body--opened-menu`)) {
            body.classList.remove(`body--opened-menu`)
        } else if (target && target.closest(`.burger-icon`)) {
            body.classList.toggle(`body--opened-menu`)
        }
    })

    // Модалка

    aboutSchool.addEventListener(`click`, event => {
        const target = event.target
        if (target && target.closest(`.about-school__button`)) {
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

    // Табы

    const tabControls = document.querySelector(`.tab-controls`)
    const tabs = document.querySelectorAll(`.tab-content`)
    const tabLinks = document.querySelectorAll(`.tab-controls__link`)

    tabControls.addEventListener(`click`, event => {
        event.preventDefault()
        const target = event.target
        if (target.classList.contains(`tab-controls__link--opened`) || !target.closest(`.tab-controls__link`)) return

        document.querySelector(`.tab-controls__link--opened`).classList.remove(`tab-controls__link--opened`)

        target.classList.add(`tab-controls__link--opened`)

        document.querySelector(`.tab-content--opened`).classList.remove(`tab-content--opened`)
        document.querySelector(target.getAttribute('href')).classList.add(`tab-content--opened`)

        // Закрытие всех аккордеонов
        const accordionsOpened = document.querySelectorAll(`.accordion-list__item--opened`)
        if (accordionsOpened) {
            accordionsOpened.forEach(el => {
                el.classList.remove(`accordion-list__item--opened`)
                el.querySelector(`.accordion-list__content`).style.maxHeight = null
            })
        }
    })

    // Аккордеон

    const accordionLists = document.querySelectorAll(`.accordion-list`)

    accordionLists.forEach(el => {

        el.addEventListener(`click`, (e) => {

            //Переменные для закрытия открытых аккордеонов
            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector(`.accordion-list__item--opened`)
            const accordionOpenedContent = document.querySelector(`.accordion-list__item--opened .accordion-list__content`)

            const accordionControl = e.target.closest(`.accordion-list__control`)
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove(`accordion-list__item--opened`)
                accordionOpenedContent.style.maxHeight = null
            }

            accordionItem.classList.toggle(`accordion-list__item--opened`)

            if (accordionItem.classList.contains(`accordion-list__item--opened`)) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + `px`
            } else {
                accordionContent.style.maxHeight = null
            }
        })
    })

    //Слайдер-галерея

    const swiper = new Swiper('.gallery__slider', {
        spaceBetween: 10,
        slidesPerView: 1.3,
        pagination: {
            el: '.gallery__pagination',
            type: "fraction",
        },
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },
        breakpoints: {
            450: {
                spaceBetween: 10,
                slidesPerView: 2,
            },
            700: {
                spaceBetween: 10,
                slidesPerView: 3,
            },
            1101: {
                spaceBetween: 32,
                slidesPerView: 4,
            },


        },
    })

    //Слайдер отзывы
    new Swiper('.testimonials__slider', {

        spaceBetween: 66,
        slidesPerView: 1.1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.testimonials__scrollbar',
            draggable: true,
        },

        breakpoints: {
            701: {
                spaceBetween: 66,
                slidesPerView: 1.2,
            },
            851: {
                spaceBetween: 66,
                slidesPerView: 1.5,
            },
            1101: {
                spaceBetween: 66,
                slidesPerView: 2.1,
            },


        },
    })

    //Маска для телефона
    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999 99-99')
    im.mask(telInputs)
})()