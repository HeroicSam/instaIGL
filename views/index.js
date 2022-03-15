const moneyDiv = document.getElementById("money_value")
const sendDiv = document.getElementById("send")
const messageDiv = document.getElementById("message")


sendDiv.addEventListener("click", () => {
    // send whats in the input field to our /api/money
    let currentMoney = moneyDiv.value
    console.log("Current Money")
    console.log(currentMoney)
    // make post request to backend with input value
    fetch("https://instaigl.herokuapp.com/api/money", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify({
            dick: currentMoney
        })
    }).then((res) => {
        // log response obj
        let body = res.json()

        console.log(body)
        // render to the screen :D
        return body
    }).then((data) => {
        messageDiv.append(data)
    })
})