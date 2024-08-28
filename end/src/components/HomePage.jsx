
import { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import axios from 'axios'

export default function HomePage({ setPage }) {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true)

            const { data } = await axios.get(`https://h8-phase2-gc.vercel.app/apis/pub/branded-things/products?q=${search}`)

            setProducts(data.data.query)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        // 1. Lifecyle re-render
        // akan jalan ketika ada perubahan di komponen ini
        console.log('lifecyle re-render');
    })

    useEffect(() => {
        // 2. Lifecyle mounted
        // jalan sekali aja sebelum nge-render pertama kali halamn home (mounted)
        console.log('lifecyle mounted')
        fetchProducts()
    }, [])

    useEffect(() => {
        // 3. Lifecyle watchers
        // jalan sekali aja sebelum nge-render pertama kali halamn home (mounted) & akan jalan setiap state yang kita watch berubah / yang kita taro di dependencies (array kosong)
        console.log('lifecyle watchers')
        fetchProducts()
    }, [search])

    useEffect(() => {
        return () => {
            // 4. Lifecyle unmounted
            // akan jalan sebelum proses pencopotan / meninggalkan komponen home 

            console.log('lifecyle unmounted');
        }
    }, [])



    return (
        <>
            <Navbar setPage={setPage} />
            {/* Home */}
            <div id="PAGE-HOME" className="p-5">
                {/* search */}
                <form action="" method="get" className="flex justify-center items-center">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="input input-bordered input-accent w-24 md:w-auto mx-1 input-sm"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>


                {loading ? (
                    <>
                        <div className="flex justify-center items-center h-screen">
                            <b className="text-4xl">Loading....</b>
                        </div>
                    </>
                ) : (
                    <>
                        <main className="grid grid-cols-3 gap-5 p-10">
                            {products.map(product => {
                                return (
                                    <Card product={product} key={product.id} />
                                )
                            })}
                        </main>
                    </>
                )}
            </div >
        </>
    )
}