import { useEffect, useRef, useState } from "react"
import { Producto } from "./Producto"
import { CategoryFiltro } from "./CategoryFiltro"
import { getApiProductos } from "../../helpers/getApiProductos";

export const CardProducto  = () =>{

    
    const [productos, setProductos] = useState([]);      
  
    const [filtroCategoria, setFiltroCategoria] = useState("");

    

    const inputRef = useRef();
    

    useEffect(() => {        
        getApiProductos().then(res => {setProductos(res)})
      }, []);

    const nuevaCategoria = (()=> (
        filtroCategoria === "" ? productos : productos.filter((prod) => prod.category === filtroCategoria)
    ))();

    const bucarValor = () => {
        console.log(inputRef.current.value);                
      };


    return(                
        <div>            
                  
        <div className="cart-container">
        <div>
            <div>Productos de Catálogo</div>                                
        </div>
        </div>

        <div >
            <input type="text" placeholder="Ingrese el producto" ref={inputRef}/><span>  </span> <button onClick={bucarValor} className="btn btn-success">Buscar</button>
        </div>

        <CategoryFiltro setFiltroCategoria={setFiltroCategoria} />   

        <div className="items-list">
            {
                
                nuevaCategoria.map((producto, idx)  => {
                    return <Producto key ={producto.id} {...producto} />
                })
            
            }

  

        </div>
        </div>
        
    )

}