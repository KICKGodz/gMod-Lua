const express = require('express')
var subdomain = require('express-subdomain');
const app = express()
const port = 3000

app.use(express.static('public'))

var router = express.Router();
 
router.get('/lua', function(req, res) {
    res.send('Welcome to our API!');
});

app.use(subdomain('api', router));

app.listen(port, () => {
  console.table({
      Status: "Ready",
     "─────────": "─────────",
     Port: port
    })
})