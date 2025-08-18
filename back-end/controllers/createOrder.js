import Order from '../models/orderSchema';
import Product from '../models/productSchema';


export const createOrder = async (req, res) =>{
    try{
    const {items, paymentMethod, customer} = req.body;

    //Validation first if items exist

    if(!Array.isArray(items) || items.length === 0){
        return res.status(400).json({message: "No items provided."});
    }

    // Extract item Ids from cart

    const productsFromCart = items.map(item => item.productId);


    // Get products from Database

    const products = await Product.find({ _id: {$in: productsFromCart} });


    // Match front end requested items to DB products
    const orderItems = [];

    for(const item of items){
        const matchingProduct = products.find(p => String(p._id) == String(item.productId));
        if(!matchingProduct){
            return res.status(400).json({message: "Invalid products in order."});

        }

        //build order snapshot part
        orderItems.push({
            productId: item.productId,
            name: matchingProduct.name,
            price: matchingProduct.price,
            quantity: item.quantity
        })
    }

    //Calculate total of items

    const totalPrice = orderItems.reduce(
        (accumulator, item) => accumulator + item.price * item.quantity,
  0)

  // save order in database
  if (!customer?.name || !customer?.email || !customer?.address) {
  return res.status(400).json({ message: "Customer details are required." });
}

  const newOrder = new Order({
    customer:{
        name: customer.name,
        email: customer.email,
        address: customer.address
    },
    paymentMethod,
    items: orderItems,
    totalPrice
  })
  await newOrder.save();
  res.status(201).json(newOrder);
}
catch(error){
    res.status(500).json({ message: "Server error", error });
}
}
