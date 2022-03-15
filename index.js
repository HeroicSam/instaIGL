const express = require("express")
const app = express()
app.use('/', express.static('views'));
app.use('/images', express.static('images'));

const port = 5000

app.get('/', (req, res) =>{
    res.sendFile('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})