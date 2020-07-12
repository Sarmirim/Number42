const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();

const Users = require('./routes/Users')


const app = express()

const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.use('/users', Users)
app.get('/', (req, res)=>
res.send("hello"))

app.listen(port, function() {
    console.log('Server is running on port: ' + port)
})
