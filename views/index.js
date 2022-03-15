const moneyDiv = document.getElementById("money_value")
const sendDiv = document.getElementById("send")
const messageDiv = document.getElementById("message")


sendDiv.addEventListener("click", () => {
    // send whats in the input field to our /api/money
    let currentMoney = moneyDiv.value
    console.log("Current Money")
    console.log(currentMoney)

    axios.post("/api/money", {
        "dick": currentMoney
    }).then((res) => {
        messageDiv.append(res)
    })
})