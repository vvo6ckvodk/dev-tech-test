import routes from './app/routes';

const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser');

app.use(bodyParser.json());

routes(app);

app.listen(port);
