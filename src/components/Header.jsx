export default function Header(props) {

    return (
        <header className="flex items-center justify-center space-x-2 bg-red-500 py-4">
            <img src={`/assets/images/${props.icon}`} alt="" className="w-[24px]" />
            <span className="text-white text-sm font-medium">{props.title}</span>
        </header>
    )
}