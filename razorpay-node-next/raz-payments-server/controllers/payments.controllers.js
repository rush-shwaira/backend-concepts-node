// raz-payments-server/controllers/payments.controllers.js
const { createRazorpayInstance } = require("../config/payments.config");
const crypto = require("crypto")

module.exports.createOrder = async (req, res) => {
    const { courseId, amount } = req.body; // Bad - Never accept price from client
    const razorPayInstance = createRazorpayInstance()

    const options = {
        amount: amount * 100,
        currency: "INR",
        receipt: "receipt_order_1"
    }

    try {
        razorPayInstance.orders.create(options, (err, orderData) => {
            if (err) {
                console.error(err)
                return res.status(500).json({
                    success: false,
                    message: "Failed to create razorpay order"
                })
            }
            return res.status(200).json(orderData)
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

module.exports.verifyPayment = async (req, res) => {
    const { order_id, payment_id, signature } = req.body

    const secret = process.env.RAZORPAY_KEY_SECRET
    const hmac = crypto.createHmac("sha256", secret)
    hmac.update(order_id + "|" + payment_id)
    const generatedSignature = hmac.digest("hex")

    if (generatedSignature === signature) {
        return res.status(200).json({ success: true, message: "Payment verified" })
    } else {
        return res.status(400).json({ success: false, message: "Payment not verified" })
    }
}