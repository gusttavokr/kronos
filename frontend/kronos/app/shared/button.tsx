export enum buttonType{
    PRIMARY,
    SECUNDARY,
    TERTIARY
}

interface buttonProps{
    title: string
    function?: any
    type: buttonType
}

export function typeButton(props:buttonProps): string{

    switch(props.type){
        case buttonType.PRIMARY:
            return "bg-red-400 rounded-3xl px-5 h-12 w-64 cursor-pointer"
        case buttonType.SECUNDARY:
            return "border border-red-400 rounded-3xl px-5 h-12 w-64 cursor-pointer"
            case buttonType.TERTIARY:
            return "border border-gray-600 text-gray-600 rounded-3xl px-5 h-12 w-64 cursor-pointer"
    }
}

export default function ButtonPrimary(props: buttonProps) {

    const result = typeButton(props)

    return (
        <button className={result} onClick={props.function}>
            {props.title}
        </button>
    )
}
