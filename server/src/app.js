const express = require('express');
const app = express();
const port = 3000;
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.get('/', (req, res) => {
  res.send('Hello World from server!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});