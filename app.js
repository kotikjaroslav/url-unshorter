const axios = require("axios")
const express = require("express")

const CONFIG = {
  port: 3000
}

const app = express()

app.get('/', (req, res) => {
  var url = req.query.q
  axios.get(url).then( response => {
      res.json({
        'url': response.request.res.responseUrl
      })
  }).catch( error => {
    console.log(error)
    res.json(`something went wrong`)
  })
})

app.listen(process.env.PORT || CONFIG.port)
