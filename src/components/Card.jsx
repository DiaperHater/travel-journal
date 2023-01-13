export default function Card(props) {

    return (
        <div className="card flex items-center space-x-5">
            <img src={`/assets/images/${props.item.image}`} alt="" className="w-[125px] h-[168px]" />
            <div className="">
                <div className="flex items-center">
                    <img src="/assets/images/icon-location.svg" alt="" className="w-[7px] mr-1" />
                    <span className="text-[10.24px] mr-3">{props.item.country}</span>
                    <a href="#" className="text-[10.24px] text-gray-500 underline">View on Google Maps</a>
                </div>
                <h2 className="text-2xl font-bold mb-3">
                    {props.item.title}
                </h2>
                <span className="block text-[10.24px] font-bold mb-2">
                    {props.item.date}
                </span>
                <p className="text-[10.24px]">
                    {props.item.text}
                </p>
            </div>
        </div>
    )
}