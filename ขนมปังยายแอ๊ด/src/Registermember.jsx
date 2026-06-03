import { useState } from "react"
import Navbar from "./components/Navbar"
import iconlogo from "./assets/ยายแอ๊ด.png"

function Registermember() {
  const [step, setStep] = useState(1)
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [sentOtp, setSentOtp] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const validatePhone = (value) => {
    const normalized = value.replace(/[^0-9]/g, "")
    return /^0\d{9}$/.test(normalized)
  }

  const handleSendOtp = () => {
    if (!validatePhone(phone)) {
      setError("กรุณากรอกเบอร์โทรศัพท์ 10 หลัก เช่น 0891234567")
      setMessage("")
      return
    }

    const generatedOtp = String(Math.floor(100000 + Math.random() * 900000))
    setSentOtp(generatedOtp)
    setStep(1)
    setMessage(`ส่งรหัส OTP ไปยัง ${phone} แล้ว กรุณากรอกรหัสภายในไม่กี่นาที`)
    setError("")
    setOtp("")
  }

  const handleVerifyOtp = () => {
    if (otp.trim() === "") {
      setError("กรุณากรอกรหัส OTP")
      setMessage("")
      return
    }

    if (otp !== sentOtp) {
      setError("รหัส OTP ไม่ถูกต้อง กรุณาลองใหม่")
      setMessage("")
      return
    }

    setStep(2)
    setMessage("")
    setError("")
  }

  const handleRegister = () => {
    if (username.trim().length < 8 || username.trim().length > 16) {
      setError("ชื่อผู้ใช้ต้องมีความยาว 8-16 ตัวอักษร")
      setMessage("")
      return
    }

    if (password.trim().length < 8 || password.trim().length > 16) {
      setError("รหัสผ่านต้องมีความยาว 8-16 ตัวอักษร")
      setMessage("")
      return
    }

    setStep(3)
    setError("")
    setMessage("สมัครสมาชิกสำเร็จแล้ว! ยินดีต้อนรับสู่ร้านขนมปังยายแอ๊ด")
  }

  const handleReset = () => {
    setStep(1)
    setPhone("")
    setOtp("")
    setSentOtp("")
    setUsername("")
    setPassword("")
    setMessage("")
    setError("")
  }

  return (
    <div style={{ width: "100%", minHeight: "100vh", backgroundColor: "#F88452", overflowX: "hidden" }}>
      <Navbar />

      <div style={{ maxWidth: 1380, margin: "0 auto", padding: "20px 16px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 32,
            alignItems: "start"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap"
            }}
          >
            <div>
              <h1 style={{ margin: 0, fontSize: 42, lineHeight: 1.05, color: "#DC2626", fontFamily: "sans-serif" }}>
                ร้านขนมปังยายแอ๊ด
              </h1>
              <p style={{ margin: "8px 0 0", fontSize: 18, color: "#111827", fontWeight: 700 }}>
                สมัครสมาชิก
              </p>
            </div>
            <img
              src={iconlogo}
              alt="ยายแอ๊ด"
              style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover", backgroundColor: "white", padding: 8 }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(320px, 1fr) minmax(420px, 1.1fr)",
              gap: 28,
              alignItems: "center"
            }}
          >
            <div
              style={{
                backgroundColor: "#fff3e0",
                borderRadius: 28,
                padding: 24,
                boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 520
              }}
            >
              <div
                style={{
                  width: 370,
                  height: 370,
                  borderRadius: "50%",
                  backgroundColor: "#FFE4C7",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.14)"
                }}
              >
                <img
                  src={iconlogo}
                  alt="ยายแอ๊ด"
                  style={{ width: 240, height: 240, borderRadius: "50%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#e5e7eb",
                borderRadius: 24,
                padding: 28,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                color: "#111827"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
                <div>
                  <p style={{ margin: 0, color: "#374151", fontWeight: 700 }}>สมัครสมาชิก</p>
                  <h2 style={{ margin: "8px 0 0", fontSize: 24 }}>เริ่มต้นด้วย 2 ขั้นตอนง่าย ๆ</h2>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {[1, 2, 3].map((index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          display: "grid",
                          placeItems: "center",
                          backgroundColor: step === index ? "#166534" : index < step ? "#16a34a" : "#d1d5db",
                          color: "white",
                          fontWeight: 700
                        }}
                      >
                        {index}
                      </div>
                      {index < 3 && (
                        <div style={{ width: 28, height: 2, backgroundColor: index < step ? "#16a34a" : "#d1d5db" }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 24, padding: 20, borderRadius: 18, backgroundColor: "white", border: "1px solid #d1d5db" }}>
                <p style={{ margin: 0, fontWeight: 700, color: "#111827" }}>
                  {step === 1 && "ยืนยันหมายเลขโทรศัพท์"}
                  {step === 2 && "ตั้งค่าชื่อผู้ใช้และรหัสผ่าน"}
                  {step === 3 && "ยืนยันการสมัคร"}
                </p>
                <p style={{ margin: "8px 0 0", color: "#4b5563", lineHeight: 1.7 }}>
                  {step === 1 && "รหัสยืนยันตัวตนจะถูกส่งไปทาง SMS ที่เบอร์โทรศัพท์ของคุณ"}
                  {step === 2 && "ตั้งชื่อผู้ใช้และรหัสผ่านสำหรับเข้าสู่ระบบ ใช้ 8-16 ตัวอักษร พร้อมตัวพิมพ์ใหญ่และเล็ก"}
                  {step === 3 && "สมัครสมาชิกสำเร็จแล้ว สามารถใช้งานระบบจัดการร้านขนมปังยายแอ๊ดได้ทันที"}
                </p>
              </div>

              {message && (
                <div style={{ marginBottom: 20, padding: 16, borderRadius: 16, backgroundColor: "#dcfce7", color: "#14532d", border: "1px solid #86efac" }}>
                  {message}
                </div>
              )}
              {error && (
                <div style={{ marginBottom: 20, padding: 16, borderRadius: 16, backgroundColor: "#fee2e2", color: "#991b1b", border: "1px solid #fecaca" }}>
                  {error}
                </div>
              )}
              {step === 1 && sentOtp && (
                <div style={{ marginBottom: 20, padding: 16, borderRadius: 16, backgroundColor: "#fff7ed", color: "#b45309", border: "1px solid #fcd34d" }}>
                  <p style={{ margin: 0, fontWeight: 700 }}>รหัส OTP ที่ส่ง</p>
                  <p style={{ margin: "8px 0 0", fontSize: 18, letterSpacing: "0.18em" }}>{sentOtp}</p>
                </div>
              )}

              {step === 1 && (
                <>
                  <label style={{ display: "block", marginBottom: 10, fontWeight: 700, color: "#111827" }}>
                    เบอร์โทรศัพท์
                  </label>
                  <input
                    type="tel"
                    placeholder="0xx-xxx-xxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ width: "100%", padding: 16, marginBottom: 18, borderRadius: 14, border: "1px solid #d1d5db", fontSize: 16 }}
                  />

                  {sentOtp && (
                    <>
                      <label style={{ display: "block", marginBottom: 10, fontWeight: 700, color: "#111827" }}>
                        หมายเลข OTP
                      </label>
                      <input
                        type="text"
                        placeholder="กรอกรหัส OTP 6 หลัก"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        style={{ width: "100%", padding: 16, marginBottom: 18, borderRadius: 14, border: "1px solid #d1d5db", fontSize: 16 }}
                      />
                    </>
                  )}

                  <button
                    onClick={sentOtp ? handleVerifyOtp : handleSendOtp}
                    style={{ width: "100%", padding: 16, borderRadius: 14, border: "none", backgroundColor: "#ef4444", color: "white", fontWeight: 700, fontSize: 16, cursor: "pointer" }}
                  >
                    {sentOtp ? "ถัดไป" : "ส่งรหัส OTP"}
                  </button>

                  {sentOtp && (
                    <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                      <button
                        onClick={() => {
                          setSentOtp("")
                          setOtp("")
                          setMessage("")
                          setError("")
                        }}
                        style={{ flex: 1, padding: 14, borderRadius: 14, border: "1px solid #d1d5db", backgroundColor: "white", color: "#374151", cursor: "pointer" }}
                      >
                        ส่งอีกครั้ง
                      </button>
                      <button
                        onClick={handleReset}
                        style={{ flex: 1, padding: 14, borderRadius: 14, border: "1px solid #d1d5db", backgroundColor: "white", color: "#374151", cursor: "pointer" }}
                      >
                        ลองใช้วิธีอื่น
                      </button>
                    </div>
                  )}
                </>
              )}

              {step === 2 && (
                <>
                  <label style={{ display: "block", marginBottom: 10, fontWeight: 700, color: "#111827" }}>
                    User Name
                  </label>
                  <input
                    type="text"
                    placeholder="ชื่อผู้ใช้"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ width: "100%", padding: 16, marginBottom: 12, borderRadius: 14, border: "1px solid #d1d5db", fontSize: 16 }}
                  />
                  <p style={{ margin: "0 0 18px", color: "#6b7280", lineHeight: 1.6, fontSize: 14 }}>
                    ชื่อผู้ใช้อยู่ระหว่าง 8 - 16 ตัวและต้องประกอบไปด้วยภาษาอังกฤษ ตัวพิมพ์ใหญ่ และตัวพิมพ์เล็ก.
                  </p>

                  <label style={{ display: "block", marginBottom: 10, fontWeight: 700, color: "#111827" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="รหัสผ่าน"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "100%", padding: 16, marginBottom: 12, borderRadius: 14, border: "1px solid #d1d5db", fontSize: 16 }}
                  />
                  <p style={{ margin: "0 0 24px", color: "#6b7280", lineHeight: 1.6, fontSize: 14 }}>
                    รหัสผ่านอยู่ระหว่าง 8 - 16 ตัวและต้องประกอบไปด้วยภาษาอังกฤษ ตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก.
                  </p>

                  <button
                    onClick={handleRegister}
                    style={{ width: "100%", padding: 16, borderRadius: 14, border: "none", backgroundColor: "#ef4444", color: "white", fontWeight: 700, fontSize: 16, cursor: "pointer" }}
                  >
                    ลงทะเบียน
                  </button>
                </>
              )}

              {step === 3 && (
                <div style={{ textAlign: "center", padding: 32, backgroundColor: "white", borderRadius: 18, border: "1px solid #d1d5db" }}>
                  <p style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#15803d" }}>สมัครเรียบร้อยแล้ว!</p>
                  <p style={{ margin: "14px 0 0", color: "#4b5563", lineHeight: 1.7 }}>
                    ยินดีต้อนรับสู่ระบบร้านขนมปังยายแอ๊ด คุณสามารถเริ่มใช้งานได้ทันที
                  </p>
                  <button
                    onClick={handleReset}
                    style={{ marginTop: 24, padding: 16, width: "100%", borderRadius: 14, border: "none", backgroundColor: "#2563eb", color: "white", fontWeight: 700, fontSize: 16, cursor: "pointer" }}
                  >
                    สมัครสมาชิกใหม่
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registermember
