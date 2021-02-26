const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
        return res.redirect('https://' + req.get('Host'));
    } else
        return next();
});

app.use(express.static(path.resolve(__dirname, "build")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
});





app.listen(PORT, console.log(`Started listening on port ${PORT}`));