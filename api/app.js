let express = require('express');
let app = express();
let route = require('./routers/petshopRouter')
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extented: false}))
app.use(bodyParser.json())
app.use(route)
app.listen(3090);
console.log('Server started----------------');