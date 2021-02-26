const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use((req, res, next) => {
    if (!req.secure && process.env.NODE_ENV === 'production') {
        res.redirect('https://' + req.get('Host') + req.url);
    } else
        next();
});

app.use(express.static(path.resolve(__dirname, "build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
});





app.listen(PORT, console.log(`Started listening on port ${PORT}`));