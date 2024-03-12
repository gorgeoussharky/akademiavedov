const hideAllModals = () => {
    const modals = document.querySelectorAll('dialog')

    modals.forEach((modal) => {
        modal.close()
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('[data-form]')

    forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const formEl = form as HTMLFormElement

            const data = new FormData(formEl)

            void (async () => {
                form.classList.add('loading')
                try {                    
                    const req = await fetch('/process.php', {
                        method: 'POST',
                        body: data
                    })

                    const resp = await req.json() as { success: boolean }

                    if (resp.success) {
                        formEl.reset()
                        hideAllModals()
                        const successModal = document.querySelector('#modal-success') as HTMLDialogElement | undefined
                        successModal?.showModal()

                        return
                    }

                    const errorModal = document.querySelector('#modal-error') as HTMLDialogElement | undefined
                    errorModal?.showModal()
                } catch (err) {
                    const errorModal = document.querySelector('#modal-error') as HTMLDialogElement | undefined
                    errorModal?.showModal()
                }

                form.classList.remove('loading')


            })()

        })
    })

})