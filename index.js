const app = require('express')(),
  request = require('request'),
  port = 3000,
  apiRoot = 'http://40.118.190.177:3000'

const proxy = (req, res) => {
  var newurl = `${apiRoot}${req.url}`;
  request(newurl).form({...req}).pipe(res);
}

app.post(/.*/, proxy);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))