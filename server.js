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
// .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use(express.json());

app.use('/api/products', productRoutes)

app.get('/', (req, res)=>{
    res.send('Hello World');
});

// 에러 처리기. 미들웨어의 가장 마지막에 있어야한다.
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message })
})

app.listen(PORT);
console.log(`Running on port ${PORT}`);

module.exports = app;