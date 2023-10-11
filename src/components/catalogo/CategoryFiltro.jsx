import { useEffect, useState } from "react"
import { getCategory } from "../../helpers/getCategory";

export const CategoryFiltro = ({setFiltroCategoria}) => {
    const [category, setCategory] = useState([])
    useEffect(() => {        
        getCategory().then(res => setCategory(res))
    }, [])

    return (
        <div className="grid grid-cols-5 items-center py-10">
            <button className="shadow-md rounded-md p-2 font-bold capitalize hover:bg-gray-500 hover:text-white" onClick={()=>setFiltroCategoria("")}>
                Todos               
            </button>
            {
                category.length !== 0 ? (
                    category.map((cate) => (
                        <button
                        className="shadow-md rounded-md p-2 font-bold capitalize
                        hover:bg-gray-500 hover:text-white"
                        onClick={()=>setFiltroCategoria(cate)}
                        >{cate}</button>
                    ))
                ) : (
                    <div>
                        <p>Cargando categorias.......</p>
                    </div>
                )
            }

        </div>
    )
}
