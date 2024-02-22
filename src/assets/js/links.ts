document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a')

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()

            if (link.hash) {
                const target = document.querySelector(link.hash)

                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' })
                }
            }
        })
    })
})