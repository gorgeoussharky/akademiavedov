document.addEventListener('DOMContentLoaded', () => {
    const menuToggles = document.querySelectorAll('.header__menu-toggle')
    const mobileMenu =  document.querySelector('.header-menu')
    menuToggles.forEach( (togglerEl) => {
        togglerEl?.addEventListener('click', () => {
            togglerEl.classList.toggle('header__menu-toggle--active')
            mobileMenu?.classList.toggle('header__header-menu--active')
            document.documentElement.classList.toggle('locked')
        })
    })
})