document.addEventListener('DOMContentLoaded', () => {
    const lazyVideos = document.querySelectorAll(
        '[data-lazy-video]',
    ) as unknown as NodeListOf<HTMLDivElement>

    lazyVideos.forEach((videoBlock) => {
        const videoEl = videoBlock.querySelector('video') as
            | HTMLVideoElement
            | undefined

        videoBlock.addEventListener('click', () => {
            if (!videoEl) return

            if (videoEl.src) {
                if (!videoEl.paused) {
                    videoBlock.classList.remove('active')
                    setTimeout(() => {
                        videoEl.pause()
                    })
                    return
                }

                videoBlock.classList.add('active')
                void videoEl.play()
                return
            }

            const { src } = videoEl.dataset
            if (!src) return

            videoEl.src = src

            videoEl.addEventListener(
                'canplay',
                () => {
                    void videoEl.play()
                    videoBlock.classList.add('active')
                },
                false,
            )
        })
    })
})
