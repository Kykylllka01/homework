(function () {
    const body = document.body
    const header = document.querySelector(`.header__inner`)
    const categories = document.querySelector(`.sales__categories`)

    // Бургер

    header.addEventListener(`click`, event => {
        const target = event.target
        if (window.innerWidth > 1250) return
        if (target && target.classList.contains(`nav__link`) && body.classList.contains(`body--opened-menu`)) {
            body.classList.remove(`body--opened-menu`)
        } else if (target && target.closest(`.header__burger-icon`)) {
            body.classList.toggle(`body--opened-menu`)
        }
    })

    // Категории товаров

    categories.addEventListener(`click`, event => {
        event.preventDefault()
        const target = event.target
        if (target && target.classList.contains(`sales__show-more`) && categories.classList.contains(`sales__categories--all-opened`)) {
            categories.classList.remove(`sales__categories--all-opened`)
        } else if (target && target.closest(`.sales__show-more`)) {
            categories.classList.add(`sales__categories--all-opened`)
        }
    })

    //Селект

    const select = document.querySelector(`.sales__select`)
    const selectButton = select.querySelector(`.sales__select-toggle`)

    select.addEventListener(`click`, event => {
        const target = event.target
        event.preventDefault()


        if (target && target.closest(`.sales__select-toggle`)) {
            target.nextElementSibling.classList.toggle(`sales__select-list--opened`)
            target.classList.toggle(`sales__select-toggle--active`)
        } else if (target && target.closest(`.sales__option`)) {
            if (target.classList.contains(`sales__option--active`)) {
                target.parentElement.classList.remove(`sales__select-list--opened`)
                selectButton.classList.remove(`sales__select-toggle--active`)
            } else {
                event.currentTarget.querySelector(`.sales__option--active`).classList.remove(`sales__option--active`)
                target.classList.add(`sales__option--active`)
                selectButton.classList.remove(`sales__select-toggle--active`)
                target.parentElement.classList.remove(`sales__select-list--opened`)
                let selectButtonNode = selectButton.innerHTML;
                selectButtonNode = selectButtonNode.replace(selectButton.innerText, target.innerText)
                selectButton.innerHTML = selectButtonNode
                const slideIndex = parseInt(target.getAttribute('data-slide'));
                swiper.slideTo(slideIndex);
            }

        }
    })


    const swiper = new Swiper('.sales__swiper', {
        slidesPerView: 0.669,
        spaceBetween: 10,
        pagination: {
            el: '.sales__pagination',
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' из ' +
                    '<span class="' + totalClass + '"></span>';
            }
        },
        navigation: {
            nextEl: '.sales__next',
            prevEl: '.sales__prev',
        },

        breakpoints: {
            768: {
                spaceBetween: null,
                slidesPerView: 1,
            },
        }
    })

    // + - у товаров

    const sumList = document.querySelectorAll(`.sales__sum`)

    sumList.forEach(el => {
        el.addEventListener(`click`, event => {
            event.preventDefault()
            const target = event.target
            const total = event.currentTarget.querySelector(`.sales__count`)
            const minus = event.currentTarget.querySelector(`.sales__minus`)

            if (target && target.closest(`.sales__plus`)) {
                total.innerText = parseInt(total.innerText) + 1
                if (parseInt(total.innerText) == 1)
                    minus.classList.remove(`sales__minus--inactive`)
            } else if (target && target.closest(`.sales__minus`) && parseInt(total.innerText) > 0) {
                total.innerText = parseInt(total.innerText) - 1
                if (parseInt(total.innerText) == 0)
                    minus.classList.add(`sales__minus--inactive`)
            }
        })
    })

    // нет в наличии
    const notSale = document.querySelectorAll(`.sales__in-stock--end`)
    console.log(notSale)
    notSale.forEach(el => {
        let inner = el.innerHTML;
        inner = inner.replace("В наличии", "Нет в наличии")
        el.innerHTML = inner
    })


    // отзывы
    const testimonialsContent = document.querySelectorAll(`.testimonials__content`)

    testimonialsContent.forEach(el => {
        el.addEventListener(`click`, event => {
            event.preventDefault()
            const target = event.target


            if (!target.closest(`.testimonials__show-photo`)) return
            if (target && target.classList.contains(`testimonials__show-photo`) && target.previousElementSibling.classList.contains(`testimonials__pictures--all-opened`)) {
                target.previousElementSibling.classList.remove(`testimonials__pictures--all-opened`)
            } else if (target && target.closest(`.testimonials__show-photo`)) {
                target.previousElementSibling.classList.add(`testimonials__pictures--all-opened`)
            }
        })
    })

    const testimonialsShow = document.querySelector(`.testimonials__show-more`)

    testimonialsShow.addEventListener(`click`, event => {
        event.preventDefault()
        const target = event.target
        const itemHidden = document.querySelector(`.testimonials__item--hidden`)

        if (!target.closest(`.testimonials__show-more`)) return
        if (target && target.classList.contains(`testimonials__show-more`) && target.previousElementSibling.classList.contains(`testimonials__list--all-opened`)) {
            itemHidden.style.maxHeight = null
            target.previousElementSibling.classList.remove(`testimonials__list--all-opened`)
        } else if (target && target.closest(`.testimonials__show-more`)) {
            target.previousElementSibling.classList.add(`testimonials__list--all-opened`)
            if (window.innerWidth > 900) {
                itemHidden.style.maxHeight = itemHidden.scrollHeight + 80 + `px`
            } else {
                itemHidden.style.maxHeight = itemHidden.scrollHeight + 40 + `px`
            }
        }
    })

    // faq

    const accordionList = document.querySelector(`.faq__list`)

    accordionList.addEventListener(`click`, (e) => {
        e.preventDefault()
        //Переменные для закрытия открытых аккордеонов
        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector(`.faq__item--opened`)
        const accordionOpenedContent = document.querySelector(`.faq__item--opened .faq__content`)

        const accordionControl = e.target.closest(`.faq__button`)
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement
        const accordionContent = accordionControl.nextElementSibling

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove(`faq__item--opened`)
            accordionOpenedContent.style.maxHeight = null
        }

        accordionItem.classList.toggle(`faq__item--opened`)

        if (accordionItem.classList.contains(`faq__item--opened`)) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 50 + `px`
        } else {
            accordionContent.style.maxHeight = null
        }
    })


    // Новости

    const newsShow = document.querySelector(`.news__show-more`)

    newsShow.addEventListener(`click`, event => {
        event.preventDefault()
        const target = event.target
        const itemHidden = document.querySelectorAll(`.news__item--hidden`)

        if (!target.closest(`.news__show-more`)) return
        if (target && target.classList.contains(`news__show-more`) && target.previousElementSibling.classList.contains(`news__list--all-opened`)) {
            itemHidden.forEach(el => {
                el.style.maxHeight = null
            })
            target.previousElementSibling.classList.remove(`news__list--all-opened`)
        } else if (target && target.closest(`.news__show-more`)) {
            target.previousElementSibling.classList.add(`news__list--all-opened`)
            if (window.innerWidth > 900) {
                itemHidden.forEach(el => {
                    el.style.maxHeight = el.scrollHeight + 80 + `px`
                })
            } else {
                itemHidden.forEach(el => {
                    el.style.maxHeight = el.scrollHeight + 40 + `px`
                })
            }
        }
    })

    let elements = document.querySelectorAll(`.news__item`);

    if (window.innerWidth <= 600) {
        elements[2].classList.add(`news__item--hidden`)
    } else {
        elements[2].classList.remove(`news__item--hidden`)
    }

    window.addEventListener('resize', () => {
        let elements = document.querySelectorAll(`.news__item`);
        elements[2].classList.add(`news__item--hidden`)

        if (window.innerWidth <= 600) {
            elements[2].classList.add(`news__item--hidden`)
        } else {
            elements[2].classList.remove(`news__item--hidden`)
        }
    });

})()    