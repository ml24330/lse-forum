const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8000;

const middleWare = (req, res, next) => {
    if (!req.secure) {
        res.redirect('https://' + req.get('Host') + req.url);
    } else
        next();
    };

app.use(express.static(path.resolve(__dirname, "build")));

app.get("*", middleWare, (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(PORT, console.log(`Started listening on port ${PORT}`));