document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.header__menu-toggle') as HTMLButtonElement | undefined
    const headerMenu = document.querySelector('.header-menu') as HTMLElement | undefined

    const menuLinks = headerMenu?.querySelectorAll('.header-menu__link')

    menuLinks?.forEach((el) => {
        el.addEventListener('click', () => {
            menuToggle?.classList.remove('header__menu-toggle--active')
            headerMenu?.classList.remove('header__header-menu--active')
            document.documentElement.classList.remove('locked')
        })
    })

    menuToggle?.addEventListener('click', () => {
        menuToggle.classList.toggle('header__menu-toggle--active')
        headerMenu?.classList.toggle('header__header-menu--active')
        document.documentElement.classList.toggle('locked')
    })
})