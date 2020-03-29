const path = require('path')
const express = require('express')

const app = express()
const publicPath = path.join(__dirname, '..', 'public')

app.use(express.static(publicPath))
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

const PORT = 1369
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`)
})