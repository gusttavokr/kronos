interface cronometroProps {
    milisegundo: number,
    segundo: number,
    minuto: number,
    hora: number,
}

function format(value: number){

    if (value < 10){
        return <div className="text-zinc-50 content-center rounded-3xl"> 0{value} </div>
    }
    
    return <div className="text-zinc-50 content-center rounded-3xl"> {value} </div>
}

export default function Cronometro(props: cronometroProps) {

    

    return (
        <div className="flex text-6xl md:text-8xl lg:text-9xl">

            <div>{format(props.hora)}</div>
            <div className="text-zinc-50 content-center rounded-3xl">
                :
            </div>
            <div>{format(props.minuto)}</div>
            <div className="text-zinc-50 content-center rounded-3xl">
                :
            </div>
            <div>{format(props.segundo)}</div>
            <div className="text-zinc-50 content-center rounded-3xl">
                :
            </div>
            <div>{format(props.milisegundo)}</div>
        </div>
    )
}