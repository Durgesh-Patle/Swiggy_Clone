let express = require('express');
let mongoose = require('mongoose');
let app = express();
let Sign = require('./routers/SignUp')
let Login = require('./routers/Login')
require('dotenv').config();
let cors=require('cors');

app.use(cors());

// Middileware Used To get input Data...
app.use(express.json())

// DataBase Connnect.
mongoose.connect('mongodb://127.0.0.1:27017/swiggy_db').then((res) => {
    console.log("MongoDB Connecttttt");
}).catch((err) => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send("Home Page!!!");
})

// SignUp Pageee...
app.use('/api', Sign);

// Loginn Pageee...
app.use('/api', Login);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
