const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config();


const app = express()
const port = process.env.DB_PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_DO_PORT,
      user : process.env.DB_USERNAME,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DO,
      ssl: {
        ca: fs.readFileSync('./ca-certificate.crt').toString()
      }
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

