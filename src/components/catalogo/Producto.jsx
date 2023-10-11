import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { VentaContext } from "../../context/AppContext"
import { BiCartAdd } from "react-icons/bi"

export const Producto = ({id,title,price,description,category,image,quantity})=>{    

  

    const{cart, setCart} = useContext(VentaContext)

    const navigate = useNavigate()
      const irCarrito = () => {
          navigate("/carrito")
      }

    const addToCart = () => {
        setCart((currItems) => {
          const isItemsFound = currItems.find((item) => item.id === id);
          if (isItemsFound) {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1,subTotal: (item.quantity+ 1) * item.price };
              } else {
                return item;
              }
            });
          } else {
            return [...currItems, {id,title,price,description,category,image, quantity: 1,subTotal:price }];
          }
        });

        console.log(cart);

        irCarrito();
      }

      

      


    return(
        <>
        
        
        <div className="item-box">
        
          

            <div className="item-name-product">{title}</div>
            <img src={image} alt="" className="imagen-product" />            
            <div>${price}</div>
            <div><button onClick={() => addToCart()} className="item-add-button" >Agregar Productos <BiCartAdd/> </button></div>
        </div>
        

        </>
    )
}