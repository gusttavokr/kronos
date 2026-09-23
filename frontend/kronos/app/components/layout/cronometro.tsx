export enum cronometroStatus{
    TRABALHANDO,
    PARADO,
    ZERADO
}

interface cronometroProps{
    milisegundo?: number,
    segundo: number,
    minuto?: number,
    hora?: number,
    type?: cronometroStatus
}

export default function Cronometro(props: cronometroProps) {
    return (
        <div className="flex gap-4">
            <div className="flex gap-4">
                <div className="text-[#171717] text-9xl content-center w-32 h-64 bg-gray-300 rounded-3xl">
                    0
                </div>
                <div className="text-[#171717] text-9xl content-center w-32 h-64 bg-gray-300 rounded-3xl">
                    0
                </div>
            </div>
            <div className="flex gap-4">
                <div className="text-[#171717] text-9xl content-center w-32 h-64 bg-gray-300 rounded-3xl">
                    0
                </div>
                <div className="text-[#171717] text-9xl content-center w-32 h-64 bg-gray-300 rounded-3xl">
                    0
                </div>
            </div>
            <div className="flex gap-4">
                <div className="text-[#171717] text-9xl content-center w-32 h-64 bg-gray-300 rounded-3xl">
                    0
                </div>
                <div className="text-[#171717] text-9xl content-center w-32 h-64 bg-gray-300 rounded-3xl">
                    {props.segundo}
                </div>
            </div>
            <div className="flex gap-4">
                <div className="text-[#171717] text-9xl content-center w-32 h-48 bg-gray-300 rounded-3xl">
                    0
                </div>
                <div className="text-[#171717] text-9xl content-center w-32 h-48 bg-gray-300 rounded-3xl">
                    0
                </div>
            </div>
        </div>
    )
}