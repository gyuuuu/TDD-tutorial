const express = require('express');

const PORT = 5000;

const app = express();
const productRoutes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gyu:abc1234@cluster0.bdhih.mongodb.net/TDD?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.use('/api/products', productRoutes)

app.use(express.json);
app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);