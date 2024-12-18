import { useState } from "react";
import Navbar from '../components/Navbar'
import Card from "./Card";

export default function HomePage({ setPage }) {
    const [products, setProducts] = useState([
        {
            "id": 36,
            "name": "credo",
            "description": "ryuryu",
            "price": 933918,
            "stock": 39,
            "imgUrl": "https://picsum.photos/seed/DXQs6olFa/100/100",
            "categoryId": 5,
            "authorId": 1,
            "createdAt": "2024-01-08T08:48:04.240Z",
            "updatedAt": "2024-01-16T08:34:47.860Z",
            "Category": {
                "id": 5,
                "name": "molestiae",
                "createdAt": "2024-01-08T08:48:03.891Z",
                "updatedAt": "2024-01-08T08:48:03.891Z"
            }
        },
        {
            "id": 46,
            "name": "deripio",
            "description": "Administratio cur commodo quaerat adicio coadunatio. Tergiversatio admitto casus vindico atqui aperiam corrupti. Arguo acies cauda sopor despecto sol delectus.",
            "price": 645429,
            "stock": 26,
            "imgUrl": "https://loremflickr.com/100/100?lock=1784188751577088",
            "categoryId": 9,
            "authorId": 9,
            "createdAt": "2024-01-08T08:48:04.241Z",
            "updatedAt": "2024-01-08T08:48:04.241Z",
            "Category": {
                "id": 9,
                "name": "confido",
                "createdAt": "2024-01-08T08:48:04.164Z",
                "updatedAt": "2024-01-08T08:48:04.164Z"
            }
        },
        {
            "id": 49,
            "name": "dolores",
            "description": "Antea adicio succedo bestia aro. Adfero accendo suffragium ventus abduco venia. Vulnero denuo dedico.",
            "price": 997976,
            "stock": 57,
            "imgUrl": "https://picsum.photos/seed/ltij70mU/100/100",
            "categoryId": 5,
            "authorId": 9,
            "createdAt": "2024-01-08T08:48:04.241Z",
            "updatedAt": "2024-01-08T08:48:04.241Z",
            "Category": {
                "id": 5,
                "name": "molestiae",
                "createdAt": "2024-01-08T08:48:03.891Z",
                "updatedAt": "2024-01-08T08:48:03.891Z"
            }
        },
        {
            "id": 51,
            "name": "tergum",
            "description": "Sto antepono defungo confero error provident angustus. Vae uberrime callide summisse. Deduco ultio cimentarius.",
            "price": 220085,
            "stock": 56,
            "imgUrl": "https://loremflickr.com/100/100?lock=1516564245381120",
            "categoryId": 5,
            "authorId": 4,
            "createdAt": "2024-01-08T08:48:04.241Z",
            "updatedAt": "2024-01-08T08:48:04.241Z",
            "Category": {
                "id": 5,
                "name": "molestiae",
                "createdAt": "2024-01-08T08:48:03.891Z",
                "updatedAt": "2024-01-08T08:48:03.891Z"
            }
        },
        {
            "id": 45,
            "name": "comis",
            "description": "Ventosus absum bis vulgo verecundia. Blanditiis vinco temeritas suppono supra utpote accedo tubineus. Sustineo officia atque contigo.",
            "price": 462039,
            "stock": 63,
            "imgUrl": "https://loremflickr.com/100/100?lock=6859192212127744",
            "categoryId": 6,
            "authorId": 7,
            "createdAt": "2024-01-08T08:48:04.241Z",
            "updatedAt": "2024-01-08T08:48:04.241Z",
            "Category": {
                "id": 6,
                "name": "mollitia",
                "createdAt": "2024-01-08T08:48:03.959Z",
                "updatedAt": "2024-01-08T08:48:03.959Z"
            }
        },
        {
            "id": 48,
            "name": "carmen",
            "description": "Sumo voluptatibus comptus tot autus vito vix ipsam libero. Timidus beatae acceptus voluptatem possimus condico strenuus asperiores. Charisma clamo vehemens allatus sint quo.",
            "price": 900964,
            "stock": 11,
            "imgUrl": "https://loremflickr.com/100/100?lock=4847748205510656",
            "categoryId": 6,
            "authorId": 7,
            "createdAt": "2024-01-08T08:48:04.241Z",
            "updatedAt": "2024-01-08T08:48:04.241Z",
            "Category": {
                "id": 6,
                "name": "mollitia",
                "createdAt": "2024-01-08T08:48:03.959Z",
                "updatedAt": "2024-01-08T08:48:03.959Z"
            }
        },
        {
            "id": 50,
            "name": "verbum",
            "description": "Nulla surculus stultus. Optio amo commemoro. Virtus sperno ara.",
            "price": 386634,
            "stock": 6,
            "imgUrl": "https://loremflickr.com/100/100?lock=6884995687776256",
            "categoryId": 10,
            "authorId": 4,
            "createdAt": "2024-01-08T08:48:04.241Z",
            "updatedAt": "2024-01-08T08:48:04.241Z",
            "Category": {
                "id": 10,
                "name": "studio",
                "createdAt": "2024-01-08T08:48:04.232Z",
                "updatedAt": "2024-01-08T08:48:04.232Z"
            }
        },
        {
            "id": 59,
            "name": "perferendis",
            "description": "Conscendo nobis solus turba textus ducimus damnatio incidunt. Commodo vere ratione cubo. Vulariter umerus vilicus careo crustulum adfectus subseco stips soluta.",
            "price": 875344,
            "stock": 50,
            "imgUrl": "https://loremflickr.com/100/100?lock=1596407918100480",
            "categoryId": 3,
            "authorId": 3,
            "createdAt": "2024-01-08T08:48:04.242Z",
            "updatedAt": "2024-01-08T08:48:04.242Z",
            "Category": {
                "id": 3,
                "name": "aut",
                "createdAt": "2024-01-08T08:48:03.755Z",
                "updatedAt": "2024-01-08T08:48:03.755Z"
            }
        },
        {
            "id": 57,
            "name": "viscus",
            "description": "Accedo utor vacuus admoneo terminatio valens decumbo pecto aperiam carbo. Statua xiphias iure. Arbitro bibo pecto varius solus quasi odio ipsum.",
            "price": 476260,
            "stock": 50,
            "imgUrl": "https://picsum.photos/seed/bO7BHGMd/100/100",
            "categoryId": 1,
            "authorId": 9,
            "createdAt": "2024-01-08T08:48:04.242Z",
            "updatedAt": "2024-01-08T08:48:04.242Z",
            "Category": {
                "id": 1,
                "name": "calco",
                "createdAt": "2024-01-08T08:48:03.618Z",
                "updatedAt": "2024-01-08T08:48:03.618Z"
            }
        },
        {
            "id": 52,
            "name": "cito",
            "description": "Vester bos vapulus vestrum tripudio. Adstringo vulgus demum tero omnis curatio pariatur. Vulgus asper sortitus aranea adficio autus exercitationem deserunt bestia.",
            "price": 75652,
            "stock": 83,
            "imgUrl": "https://loremflickr.com/100/100?lock=7870711081205760",
            "categoryId": 7,
            "authorId": 1,
            "createdAt": "2024-01-08T08:48:04.242Z",
            "updatedAt": "2024-01-14T09:55:56.175Z",
            "Category": {
                "id": 7,
                "name": "ager",
                "createdAt": "2024-01-08T08:48:04.027Z",
                "updatedAt": "2024-01-08T08:48:04.027Z"
            }
        },
        {
            "id": 55,
            "name": "delinquo",
            "description": "Aggero adsum deporto. Decens adficio tristis coaegresco arcesso consequatur. Vigor numquam clarus arca.",
            "price": 252942,
            "stock": 100,
            "imgUrl": "https://loremflickr.com/100/100?lock=8596275247185920",
            "categoryId": 10,
            "authorId": 4,
            "createdAt": "2024-01-08T08:48:04.242Z",
            "updatedAt": "2024-01-08T08:48:04.242Z",
            "Category": {
                "id": 10,
                "name": "studio",
                "createdAt": "2024-01-08T08:48:04.232Z",
                "updatedAt": "2024-01-08T08:48:04.232Z"
            }
        },
        {
            "id": 54,
            "name": "certe",
            "description": "Viridis nemo delectus caste. Quaerat assentator astrum incidunt cur trepide utilis adaugeo vulgivagus. Numquam astrum decor vesica.",
            "price": 541721,
            "stock": 40,
            "imgUrl": "https://picsum.photos/seed/Bxt6l/100/100",
            "categoryId": 6,
            "authorId": 10,
            "createdAt": "2024-01-08T08:48:04.242Z",
            "updatedAt": "2024-01-08T08:48:04.242Z",
            "Category": {
                "id": 6,
                "name": "mollitia",
                "createdAt": "2024-01-08T08:48:03.959Z",
                "updatedAt": "2024-01-08T08:48:03.959Z"
            }
        }
    ]);

    return (
        <>
            <Navbar setPage={setPage} />

            {/* search */}
            <div className="max-w-md mx-auto border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <div className="relative flex items-center w-full h-12 rounded-2xl bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        className="peer h-full w-full outline-none text-sm text-gray-800 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search something.."
                    />
                </div>
            </div>

            {/* home */}
            <div id="PAGE-HOME" className="min-h-screen flex items-center justify-center">
                <main className="my-5 bg-white grid grid-cols-4 gap-5">
                    {products.map((product) => {
                        return (
                            <Card key={product.id} product={product} />
                        )
                    })}
                </main>
            </div>

        </>
    )
}