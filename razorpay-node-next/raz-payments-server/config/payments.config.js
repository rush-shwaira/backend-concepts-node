// raz-payments-server/config/payments.config.js
const dotenv = require("dotenv")
dotenv.config()
const razorpay = require("razorpay")

module.exports.createRazorpayInstance = () => {
    return new razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
    })
}