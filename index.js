const express = require("express");
var request = require('request');
const app = express();
const port = 3000;

app.all(/.*/, (req, res) => {
    var newurl = '';
    request(newurl).pipe(res);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))