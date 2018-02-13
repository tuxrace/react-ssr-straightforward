import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import App from '../shared/App'

const app = express()

app.use(express.static('public'))

app.get('/', function(req, res){
  res.send(`<!DOCTYPE html>
    <html>
      <head>
      <title>My Page</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <script src="/bundle.js" defer></script>
      </head>
      <body>
        <div id="root">
          ${renderToString(<App />)}
        </div>        
      </body>
    </html>`)
  
})

app.listen(3004, function(){
  console.log('running at port 3004')
})
