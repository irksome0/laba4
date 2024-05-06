const express = require("express")
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test',
})

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to the database");
});

app.get('/test', (re,res) =>{
    return res.json(
        [{
            title: "helo",
            author: "wassup"
        },
        {
            title: "helo",
            author: "wassup"
        }]
    );
})
app.get('/books', (re,res) =>{
    const sql = "SELECT * FROM books"
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.post('/books',async (re,res) =>{
    const reqBody = {
        title: re.body.title,
        author: re.body.author,
    }
    const sql = `INSERT INTO books (title, author) VALUES (?,?)`;
    db.query(sql, [reqBody.title, reqBody.author]);
    res.sendStatus(200);
})

app.listen(8081, () => {
    console.log("Listening on 8081...");
})