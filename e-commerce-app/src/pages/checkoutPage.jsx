



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
                                <img src={item.image} alt={item.image} />
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <p className="font-semibold mb-1">Quantity: {item.quantity}</p>
                            </div>
                            ))}
            </div>
            

            
           </div>
        </div>
    )
}

export default CheckOutPage;