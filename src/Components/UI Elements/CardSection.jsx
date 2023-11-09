export default function CardSection({ dataArray, imageUrl, linkUrl }) {

    return (
        <section>
            <div className="container">
                {dataArray && dataArray.map((oneThing, index) => (
                    
                    <a href={`${linkUrl}/${oneThing.id}`}><div className="card" key={index}>
                    <img src={imageUrl} alt="rando" style={{borderRadius: "1rem"}}></img>
                        <p>Name:  {oneThing.name}</p>
                        <p>Description: {oneThing.description}</p>
                    </div></a>
                ))}
            </div>
        </section>
    )

}