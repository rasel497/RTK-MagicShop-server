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

//set users
app.get('/users/', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
        if (err)
            return res.send({ Message: 'Error inside the server' });
        return res.send(result)
    });
});

//set users
// app.get('/user/:id', (req, res) => {
//     const id = req.params.id
//     console.log(id)
//     const sql = `SELECT * FROM users WHERE id=${id}`;
//     db.query(sql, (err, result) => {
//         if (err)
//             return res.send({ Message: 'Error inside the server' });
//         return res.send(result)
//     });
// });


// successfully create/registration user
app.post('/userRegistration/', (req, res) => {
    const sql = "INSERT INTO users (`username`, `age`, `email`, `password`) VALUES(?, ?, ?, ?)";
    const userValues = {
        username: req.body.username,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password,
    };
    const userRegData = [userValues.username, userValues.age, userValues.email, userValues.password];
    db.query(sql, userRegData, (err, result) => {
        if (err)
            return res.send({ Message: 'Error inside the server user reg' });
        return res.send(result);
    });
});

// successfully login user with email and password
app.post('/userLogin/', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    const email = req.body.email;
    const password = req.body.password;

    db.query(sql, [email, password], (err, result) => {
        if (err) {
            req.setEncoding({ err: err });
        } else {
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ Message: "Wrong Email OR Password" });
            }
        }
    });
});

// initial server test
app.get('/', (req, res) => {
    res.send('Login auth server is running');
});
app.listen(port, () => {
    console.log(`Auth server is running on ${port}`)
});

