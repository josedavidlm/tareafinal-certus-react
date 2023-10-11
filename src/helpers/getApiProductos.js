export const getApiProductos = async() =>{   
    try {

        let product =[
            {
                id: 1,
                title: "",
                price: 0.00,
                description: "",
                category: "",
                image: "",
                quantity:0,
                subTotal:0
            }
        ];

        const response = await fetch("https://fakestoreapi.com/products")
        product = await response.json()  
        return product  
      } catch (error) {
        console.error(error);        
        return product
      }            
}