const axios = require("axios")
const express = require("express")

const CONFIG = {
  port: 3000,
  user_agent: "Mozilla/5.0 (X11; Linux x86_64)"
}

const app = express()

app.get('/', (req, res) => {
  var url = req.query.q
  axios.get(url, {headers:{'User-Agent':CONFIG.user_agent}}).then( response => {
      res.json({
        'url': response.request.res.responseUrl
      })
  }).catch( error => {
    console.log(error)
    res.json(`something went wrong`)
  })
})

app.listen(process.env.PORT || CONFIG.port)
