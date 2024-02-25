/* eslint-disable @typescript-eslint/no-var-requires */
import { parse } from 'path'

const video = (
    src: string,
    block: {
        fn: (arg: { url: string }) => () => void
    },
) => {
    const srcName = src
    const { name, dir, ext } = parse(srcName)

    let url = ''

    switch (ext) {
        case '.mp4':
            url = require(`../../assets/${dir ? `${dir}/${name}` : `${name}`}.mp4`) as string
            break
        case '.mov':
            url = require(`../../assets/${dir ? `${dir}/${name}` : `${name}`}.mov`) as string
            break
        default:
            url = src
            break
    }

    return block.fn({ url })
}

export default video
