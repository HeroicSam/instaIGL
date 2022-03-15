const moneyDiv = document.getElementById("money_value")
const sendDiv = document.getElementById("send")
const messageDiv = document.getElementById("message")


sendDiv.addEventListener("click", () => {
    // send whats in the input field to our /api/money
    let currentMoney = moneyDiv.value
    console.log("Current Money")
    console.log(currentMoney)
    // make post request to backend with input value
    fetch("/api/money", {
        method: "POST",
        body: {
            dick: currentMoney
        }
    }).then((res) => {
        // log response obj
        console.log(res)
        // render to the screen :D
    })
})