// raz-payments-server/server.js
const express = require("express")
const cors = require("cors")
const paymentRoutes = require("./routes/payments.routes")
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Payment service working")
})

app.use("/api", paymentRoutes)

app.listen(4000, () => {
    console.log("Server listening on PORT 3000")
})
