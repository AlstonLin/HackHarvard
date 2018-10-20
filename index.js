const express = require('express'),
  app = express(),
  PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
