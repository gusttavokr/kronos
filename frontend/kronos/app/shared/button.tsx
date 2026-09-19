export enum buttonType{
    PRIMARY,
    SECUNDARY
}
interface buttonProps{
    title: string,
    type: buttonType,
}   

export function typeButton(props:buttonProps): string{
    if (props.type == buttonType.PRIMARY){
        return "bg-red-400 rounded-3xl px-5 h-12 w-64 cursor-pointer"
    } 

    return "border border-red-400 rounded-3xl px-5 h-12 w-64 cursor-pointer"
}

export default function ButtonPrimary( props:buttonProps ) {
    
    const result = typeButton(props);

    return (
        <button className={result}>
            <a>{props.title}</a>
        </button>
    )
}
