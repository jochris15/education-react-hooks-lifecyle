export default function Card({ product }) {
    return (<>
        <div className="card bg-gray-100 shadow-2xl flex flex-row">
            <div className="flex justify-center flex-1">
                <img
                    src={product.imgUrl}
                    alt="product image"
                />
            </div>
            <div className="flex flex-col flex-1 ml-10">
                <b className="mb-5">{product.name}</b>
                {product.description}
            </div>
        </div >
    </>)
}