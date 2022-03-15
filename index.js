import { t_dust_ecobuy_strat1, t_dust_highbuy_strat1 } from "./data";

const express = require("express")
const app = express()
app.use('/', express.static('views'));
app.use('/images', express.static('images'));

const port = process.env.PORT || 5000

app.post('/api/money', (req, res) =>{
  console.log(req);
  const userInput = req.body.dick
  const fixedUserInput = userInput.lower()

  if (fixedUserInput === 'ecobuy') {

    res.send(t_dust_ecobuy_strat1)

  } else if (fixedUserInput === 'highbuy') {

    res.send(t_dust_highbuy_strat1)

  } else if (fixedUserInput === 'midbuy') {

    res.send('Midbuy strats unavailable.')

  } else if (fixedUserInput === 'forcebuy') {

    res.send('Forcebuy strats unavailable.')

  } else {

    res.send('Please enter ecobuy, forcebuy, midbuy, or highbuy!')

  }

  res.send('Dan is fucking retard!!! 8====D');
})

app.get('/', (req, res) =>{
    res.sendFile('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})