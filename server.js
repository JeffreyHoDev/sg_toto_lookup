const express = require('express')
const cors = require('cors')
const app = express()
const port = 9999
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : 'Reunion94!',
      database : 'sg_toto'
    }
});

app.get('/data', (req, res) => {
    knex.select().table('individual_result')
    .then(response => res.json(response))
    .catch(console.log)
    
})

app.post('/update', (req, res) => {
    
    console.log(req.body)
    req.body.forEach(item => {
        knex('individual_result')
        .where('number', '=', item)
        .increment({
            occurence: 1
        })
        .catch(console.log)
    })
    res.json("Success")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})