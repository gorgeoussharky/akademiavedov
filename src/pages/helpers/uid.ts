import { nanoid } from 'nanoid/non-secure'

const uid = (
    label: string,
    placeholder: string,
    name: string | undefined,
    type: string | undefined,
    options: string | undefined,
    block: {
        fn: (arg: {
            id: string
            label: string
            placeholder: string
            name: string | undefined
            type: string
            options: string[] | undefined
        }) => void
    }
) => {
    const id = nanoid(8)

    const optionsArr = options ? options.split(',') : undefined

    return block.fn({ id, label, placeholder, name, type: type || 'text', options: optionsArr })
}

export default uid