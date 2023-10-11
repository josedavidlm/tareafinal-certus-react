import { useContext, useState } from "react"

import { useNavigate } from "react-router-dom";
import { BsTrash} from 'react-icons/bs';
import { VentaContext } from "../../context/AppContext";

export const Carrito = () =>{

  

    const {cart, setCart} = useContext(VentaContext)

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);
    
    const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
    );

    

    const removeItem = (id) => {
        setCart((currItems) => {
          if (currItems.find((item) => item.id === id)?.quantity === 1) {
            return currItems.filter((item) => item.id !== id);
          } else {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1,subTotal: (item.quantity- 1) * item.price };
              } else {
                return item;
              }
            });
          }
        });
      }

      const navigate = useNavigate()
      const irProductos = () => {
          navigate("/")
      }

    return(
        <>
        <div className="cart-container">
            <div>
                <div>Lista de Productos del Carrito</div>                                
            </div>
        </div>




        <section className="carrito">    
            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>PRODUCTO</th>
                        <th className='text-center'>IMAGEN</th>
                        <th className='text-center'>CANTIDAD</th>
                        <th className='text-end'>PRECIO</th>
                        <th className='text-end'>TOTAL</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >

                {

                    cart.length > 0 ?(
                        cart.map((item) => (   
                            <>
                            <tr>
                            <td>{item.title}</td>       
                            <td className='text-center'><img src={item.image} width={30} height={30} />  </td>       
                            <td className='text-center'>{item.quantity}</td>   
                            <td className='text-end'>S/ {item.price.toFixed(2)}</td>
                            <td className='text-end'>S/ {item.subTotal.toFixed(2)}</td>
                            <td><a href="#" class="delete" onClick={() => removeItem(item.id)} ><BsTrash /></a> </td>                                                                 
                            </tr>
                            </>                            
                        ))
                    ) : (<p>No Hay Productos</p>)


                }
    
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2">Total</td>                    
                    <td className='text-center'>{quantity}</td>
                    <td></td>
                    <td className='text-end'>S/ {totalPrice.toFixed(2)}</td>                    
                  </tr>
                </tfoot>
            </table>

            <div><button onClick={irProductos} className="item-add-button"> Retornar a Productos</button></div>

        </section>


        </>
    )


}