const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! This is Pawels first pipeline implementation vs.4'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
