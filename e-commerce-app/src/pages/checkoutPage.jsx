import { Products } from "../mockdata/data";



const CheckOutPage = ({ cartItems }) => {

    

    return(
        <div>
           <h2>Checkout</h2>

           <div>
            <form action="submit">
                <h3>Name:</h3>
                <h3>Address:</h3>
            </form>

            <div>
              <h3>Items to Checkout</h3>  
                    {cartItems.map(item => (
                            <div key={item.id}>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                
                            </div>
                            ))}
            </div>
            

            
           </div>
        </div>
    )
}

export default CheckOutPage;