const express = require('express')
const bodyParser = require('body-parser')
const mongojs = require('./lib/db')
const db = mongojs.connect
const app = express()

app.use(bodyParser())

app.get('/api/books', (req, res) => {
    db.Book.find((err, docs) => {
        console.log(docs)
    })
})

app.post('/api/books', (req, res) => {
    let { title, author, summary, isbn, genre, url } = req.body
    let json = {
        title,
        author,
        summary,
        isbn,
        genre,
        url
    }
    db.Book.insert(json)
})

app.get('/api/books/:bookid', (req, res) => {
    db.Book.find({ id: parseInt(req.params.bookid) }, (err, docs) => {
        res.json(docs)
    })
})

app.listen(3000, () => console.log(`listening on port 3000`))
