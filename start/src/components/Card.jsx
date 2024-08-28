export default function Card({ product }) {
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={product.imgUrl}
                        alt="product" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                </div>
            </div>
        </>
    )
}