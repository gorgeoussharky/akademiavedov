import IMask from 'imask'

document.addEventListener('DOMContentLoaded', () => {
    const telInputs = document.querySelectorAll('input[type="tel"]')

    telInputs.forEach((el) => {
        IMask(el as HTMLInputElement, {
            mask: '+{7} (000) 000-00-00',
        })
    })
})
