const express = require("express")
const app = express()
app.use('/', express.static('views'));
app.use('/images', express.static('images'));

const port = 3000

// function conor() {
//     return "conor is gay"
// }

app.get('/', (req, res) =>{
    res.sendFile('Hello World!')
})

// app.get('/:id', (req, res) => {
//     console.log(req);
//     res.sendFile('./index.html');
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})