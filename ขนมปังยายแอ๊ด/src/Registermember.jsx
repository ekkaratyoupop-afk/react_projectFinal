import { useState } from "react"
import axios from "axios"
import Navbar from "./components/Navbar"
import iconlogo from "./assets/ยายแอ๊ด.png"

function Registermember() {
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [sentOtp, setSentOtp] = useState("")
  const [step, setStep] = useState("phone")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const validatePhone = (value) => {
    const normalized = value.replace(/[^0-9]/g, "")
    return /^0\\d{9}$/.test(normalized)
  }

  const handleRequestOtp = () => {
    if (!validatePhone(phone)) {
      setError("กรุณากรอกเบอร์โทรศัพท์ 10 หลัก เช่น 0891234567")
      setMessage("")
      return
    }

    const generatedOtp = String(Math.floor(100000 + Math.random() * 900000))
    // ส่ง OTP ไปยัง backend เพื่อให้ backend ส่ง SMS จริง (เช่น Twilio)
    axios
      .post("http://localhost:4000/send-otp", { phone, otp: generatedOtp })
      .then(() => {
        setSentOtp(generatedOtp)
        setStep("otp")
        setMessage(`ส่งรหัส OTP ไปยัง ${phone} แล้ว กรุณากรอกรหัสภายในไม่กี่นาที`)
        setError("")
        setOtp("")
      })
      .catch((err) => {
        setError("ไม่สามารถส่งรหัส OTP ได้ กรุณาลองใหม่ภายหลัง")
        setMessage("")
        console.error(err)
      })
  }

  const handleVerifyOtp = () => {
    if (otp.trim() === "") {
      setError("กรุณากรอกรหัส OTP")
      return
    }

    if (otp === sentOtp) {
      setStep("success")
      setMessage("สมัครสมาชิกสำเร็จแล้ว! ยินดีต้อนรับสู่ร้านขนมปังยายแอ๊ด")
      setError("")
      return
    }

    setError("รหัส OTP ไม่ถูกต้อง กรุณาลองใหม่")
  }

  const handleReset = () => {
    setPhone("")
    setOtp("")
    setSentOtp("")
    setStep("phone")
    setMessage("")
    setError("")
  }

  return (
    <div style={{ width: "100%", minHeight: "100vh", overflowX: "hidden", boxSizing: "border-box" }}>
      <Navbar />

      <div
        style={{
          minHeight: "calc(100vh - 96px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#F88452",
          padding: "20px 10px"
        }}
      >
        <div style={{ width: "100%", maxWidth: "1350px", display: "flex", gap: "32px", flexWrap: "nowrap", justifyContent: "center", alignItems: "center" }}>
          <div style={{ flex: 1, minWidth: "350px", maxWidth: "550px", display: "flex", justifyContent: "center" }}>
            <div style={{ background: "white", borderRadius: 24, padding: 24, boxShadow: "0 20px 60px rgba(0,0,0,0.12)", }}>
              <img
                src={iconlogo}
                alt="iconlogo"
                style={{ width: "100%", borderRadius: "20px", maxWidth: "480px" }}
              />
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              marginRight: 20,
              padding: "32px",
              borderRadius: "16px",
              flex: 1,
              minWidth: "350px",
              maxWidth: "450px",
              boxShadow: "0 0 16px rgba(0,0,0,0.12)",
              color: "#1f2937"
            }}
          >
            <h1 style={{ textAlign: "center", marginBottom: "18px", fontSize: "24px" }}>
              สมัครสมาชิกด้วยเบอร์โทร
            </h1>

            <p style={{ marginBottom: "16px", lineHeight: "1.5", fontSize: "14px" }}>
              กรอกเบอร์โทรศัพท์ แล้วขอรหัส OTP เพื่อยืนยันตัวตน
            </p>

            {message && (
              <div
                style={{
                  marginBottom: "20px",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  backgroundColor: "#ecfdf5",
                  
                  color: "#166534",
                  border: "1px solid #a7f3d0"
                }}
              >
                {message}
              </div>
            )}

            {error && (
              <div
                style={{
                  marginBottom: "20px",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  backgroundColor: "#fee2e2",
                  color: "#991b1b",
                  border: "1px solid #fecaca"
                }}
              >
                {error}
              </div>
            )}

            <label style={{ display: "block", marginBottom: "10px", fontWeight: "600" }}>
              เบอร์โทรศัพท์
            </label>
            <input
              type="tel"
              placeholder="0xx-xxx-xxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "20px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                
              }}
            />

            {step === "otp" && (
              <>
                <label style={{ display: "block", marginBottom: "10px", fontWeight: "600" }}>
                  รหัส OTP
                </label>
                <input
                  type="text"
                  placeholder="กรอกรหัส OTP 6 หลัก"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px",
                    marginBottom: "20px",
                    borderRadius: "10px",
                    border: "1px solid #d1d5db"
                  }}
                />
              </>
            )}

            {step !== "success" ? (
              <button
                onClick={step === "phone" ? handleRequestOtp : handleVerifyOtp}
                style={{
                  width: "100%",
                  padding: "14px",
                  backgroundColor: "#f97316",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "16px"
                }}
              >
                {step === "phone" ? "ขอรหัส OTP" : "ยืนยัน OTP"}
              </button>
            ) : (
              <button
                onClick={handleReset}
                style={{
                  width: "100%",
                  padding: "14px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "16px"
                }}
              >
                สมัครใหม่
              </button>
            )}

            {step === "otp" && (
              <button
                onClick={handleReset}
                style={{
                  width: "100%",
                  padding: "14px",
                  marginTop: "12px",
                  backgroundColor: "#e5e7eb",
                  color: "#374151",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "16px"
                }}
              >
                เปลี่ยนเบอร์โทร
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registermember