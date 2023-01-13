import Card from "./Card"

export default function Cards(props) {

    const cards = props.data.map(item => {
        return (
            <div className="py-[20px] border-b-[1px] last:border-b-0">
                <Card 
                    key={item.id}
                    item={item} 
                />
            </div>
        )
    })

    return (
        <section className="">
            <div className="wrapper flex flex-col items-start">
                {cards}
            </div>
        </section>
    )
}