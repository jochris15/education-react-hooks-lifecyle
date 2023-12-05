export default function Card({ product }) {
    return (<>
        <div className="card bg-gray-100 shadow-2xl flex flex-row">
            <figure>
                <img
                    src={product.imgUrl}
                    alt="product image"
                />
            </figure>
            <div className="card-body">
                <b>{product.name}</b>
            </div>
        </div>
    </>)
}