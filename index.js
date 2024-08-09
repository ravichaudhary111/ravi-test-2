const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const path=require('path')
const staticRouter=require('./router/staticRouter')

const dotenv = require('dotenv')
dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use('/',staticRouter)


const PORT = process.env.PORT || 8080

app.listen(PORT, (err) => {
    if (err) {
        console.log("error in port")
    } else {
        console.log("Server is running on port")
    }
})
