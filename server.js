const express = require('express');
const urlencoded = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRouter = require('./routers/productRouter.js');
const userRouter = require('./routers/userRouter.js');


dotenv.config();

const app = express();
app.use(express.json()); 
app.use(urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://iCode:admin1234@lban.zxm04.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}); 

app.get('/', (req, res) => {
    res.send('Server is ready');
});


// app.get('/api/products/:id', (req, res) => {
//     const product = data.products.find( x => x._id === req.params.id)
//     if(product){
//         res.send(product);
//     } else{ 
//         res.status(404).send({message: 'Product Not Found' });
//     }
   
// })


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});

const port =  process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});