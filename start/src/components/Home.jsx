import Card from "../components/Card";
import { useState } from "react";
import gearLoad from "./assets/Gear-0.2s-264px.svg"

export default function Home({ setPage }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const url = 'https://phase2-aio.vercel.app'

    return (
        <>
            <div id="PAGE-HOME" className="p-3">

                {/* search */}
                <form action="" method="get" className="flex justify-center items-center">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="input input-bordered input-accent w-24 md:w-auto mx-1 input-sm"
                    />
                </form>

                {loading ? (
                    <div className="mt-32 flex justify-center items-center">
                        <img src={gearLoad} />
                    </div>
                ) : (
                    <main className="grid grid-cols-2 gap-5 my-8 bg-white">
                        {products.map(product => {
                            return <Card key={product.id} product={product} />
                        })}
                    </main>
                )}
            </div >
        </>
    )
}