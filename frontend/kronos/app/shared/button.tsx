export default function ButtonPrimary( props:any ) {

    return (
        <button className="bg-red-400 rounded-3xl px-5 h-12 w-64 cursor-pointer">
            <a>{props.title}</a>
        </button>
    )
}
