document.addEventListener('DOMContentLoaded', () =>{
    const selects = document.querySelectorAll('.select')

    selects.forEach((el) => {
        const toggler = el.querySelector('.select__control--lg') as HTMLButtonElement | undefined
        const dropdown = el.querySelector('.select__dropdown') as HTMLDivElement | undefined
        const select = el.querySelector('.select__control--sm') as HTMLSelectElement | undefined

        const btns = dropdown?.querySelectorAll('.select__btn')

        btns?.forEach((btn) => {
            btn.addEventListener('click', () => {
                const { value } = (btn as HTMLButtonElement).dataset

                if (!value || !toggler || !select) return
                
                // sync with select and toggler
                toggler.innerHTML = value
                select.value = value

                dropdown?.classList.remove('select__dropdown--active')
            })
        })

        toggler?.addEventListener('click', () => {
            dropdown?.classList.toggle('select__dropdown--active')
        })
    })
})