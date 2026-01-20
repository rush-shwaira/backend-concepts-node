"use client"
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const loadScript = (src: string) => {
    return new Promise(resolve => {
      const script = document.createElement("script")
      script.src = src;
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }
  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js")
  }, [])

  const paymentHandler = async (price: number, itemName: string) => {
    try {
      const options = {
        courseId: 1,
        amount: price
      }

      const res = await axios.post("http://localhost:4000/api/createOrder", options)
      const data = res.data

      const paymentObject = new (window as any).Razorpay({
        key: "rzp_test_S610Pki4SSAhCw",
        order_id: data.id,
        ...data,
        handler: function (response: any) {
          const options2 = {
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature
          }
          axios.post("http://localhost:4000/api/verifyPayment", options2).then(res => {
            if (res.data.success) {
              alert("Payment successful")
            } else {
              alert("Payment failed")
            }
          }).catch(err => {
            console.error(err)
          })
        }
      })
      paymentObject.open()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <div>
        <div>
          <p>Name: A book</p>
          <p>Price: 100Rs</p>
          <p>id:1</p>
        </div>
        <button className="bg-white p-2 text-blue-500" onClick={() => { paymentHandler(100, "A book") }}>
          Buy me
        </button>
      </div>
    </main>
  );
}
