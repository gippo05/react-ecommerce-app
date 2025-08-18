import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    customer:{
    name: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true}
    },
    paymentMethod: {type: String, required: true},

    items: [{
        productId: {type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
        quantity: {type: Number, required: true},
        name: {type: String, required: true},
        price: {type: Number, required: true},
        image: {type: String, required: true}
    }
],
total: {type: Number, required: true},
status: { type: String, default: "pending" }
    
}, {timestamps: true})


const Order = mongoose.model("Order", orderSchema);
export default Order;