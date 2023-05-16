const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect express js server and mysql DB
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'redux_login-auth'
});

// initial server test
app.get('/', (req, res) => {
    res.send('Login auth server is running');
});

app.listen(port, (req, res) => {
    console.log(`Login server is running on ${port}`)
});

