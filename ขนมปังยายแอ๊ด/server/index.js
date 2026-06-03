import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000

app.post("/send-otp", async (req, res) => {
  const { phone, otp, mock } = req.body
  if (!phone || !otp) return res.status(400).json({ error: "missing phone or otp" })

  // Mock mode: ถ้าตั้ง env MOCK_SMS=true หรือส่ง body.mock=true จะไม่ส่ง SMS จริง
  if (process.env.MOCK_SMS === "true" || mock === true) {
    console.log(`MOCK SMS: would send OTP ${otp} to ${phone}`)
    return res.json({ success: true, mock: true })
  }

  // ใช้ Twilio ส่ง SMS
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const from = process.env.TWILIO_FROM

    if (!accountSid || !authToken || !from) {
      return res.status(500).json({ error: "Twilio credentials not configured" })
    }

    const Twilio = await import("twilio")
    const client = Twilio.default(accountSid, authToken)

    const body = `รหัส OTP ของคุณคือ ${otp} จากร้านขนมปังยายแอ๊ด`;
    await client.messages.create({ body, from, to: phone })

    return res.json({ success: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: "failed to send SMS" })
  }
})

app.listen(PORT, () => {
  console.log(`SMS server listening on ${PORT}`)
})
