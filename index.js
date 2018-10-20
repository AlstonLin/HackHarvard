const app = require('express')(),
  request = require('request'),
  port = 3000,
  apiRoot = 'http://40.118.190.177:3000'

const proxy = (req, res) => {
  var newurl = `${apiRoot}${req.url}`;
  request(newurl).form({...req}).pipe(res);
}

/**
 * User
 */
app.post('/api/user', proxy);

/**
 * File
 */
app.post('/api/file', proxy);
app.post('/api/file/:id/cost', proxy);
app.post('/api/file/:id/buy', proxy);
app.post('/api/file/:id/download', proxy);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))