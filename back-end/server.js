import express, { urlencoded } from 'express';
import cors from 'cors';
import router from './routes/productRoutes.js';
import path from 'path';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const __dirname = path.resolve();
app.use('/images', express.static(path.join(__dirname, '/public/images')));





app.use('/api/products', router);

app.get("/", (req, res) => {
    res.send("API is running...")
});


app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})