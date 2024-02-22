/* eslint-disable no-new */
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

const initReviewsCarousel = () => {
    const list = document.querySelector('.reviews__list-wrap') as
        | HTMLElement
        | undefined

    const pagination = list?.querySelector('.reviews__pagination') as
        | HTMLElement
        | undefined

    if (!list) return

    new Swiper(list, {
        slidesPerView: 1.5,
        loop: true,
        spaceBetween: 30,
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            700: {
                slidesPerView: 3,
            },
        },
        pagination: {
            el: pagination,
        },
        modules: [Pagination],
    })
}

const initVideosCarousel = () => {
    const list = document.querySelector('.videos__list-wrap') as
        | HTMLElement
        | undefined

    const pagination = list?.querySelector('.videos__pagination') as
        | HTMLElement
        | undefined

    if (!list) return

    new Swiper(list, {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        breakpoints: {
            900: {
                slidesPerView: 3,
            },
            700: {
                slidesPerView: 2,
            },
        },
        pagination: {
            el: pagination,
        },
        modules: [Pagination],
    })
}

document.addEventListener('DOMContentLoaded', () => {
    initReviewsCarousel()
    initVideosCarousel()
})
