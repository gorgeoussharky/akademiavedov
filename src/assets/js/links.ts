document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a')

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            if (link.hash) {
                e.preventDefault()
                const target = document.querySelector(link.hash) as HTMLElement | undefined

                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    })
                }
            }
        })
    })
})