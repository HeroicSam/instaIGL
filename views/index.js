const moneyDiv = document.getElementById("money_value")
const sendDiv = document.getElementById("send")
const messageDiv = document.getElementById("message")


sendDiv.addEventListener("click", () => {
    // send whats in the input field to our /api/money
    let currentMoney = moneyDiv.value
    console.log("Current Money")
    console.log(currentMoney)

    axios.post("https://instaigl.herokuapp.com/api/money", {
        "dick": currentMoney
    }).then((res) => {
        console.log(res)
        messageDiv.append(JSON.stringify(res))
    })
})