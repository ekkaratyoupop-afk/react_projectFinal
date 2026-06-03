import { Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import iconlogo from "./assets/ยายแอ๊ด.png"

export default function Home() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", overflowX: "hidden", boxSizing: "border-box" }}>
      <Navbar />
      <main
        style={{
          minHeight: "calc(100vh - 96px)",
          width: "100%",
          backgroundColor: "#F88452",
          padding: "24px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1350,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: 32,
            alignItems: "center"
          }}
        >
          <section style={{ color: "#111827" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#fff",
             
                color: "#fb923c",
                padding: "6px 14px",
                borderRadius: 999,
                fontWeight: 700,
                marginBottom: 20,
                 
                
              }}
            >
              ขายดีทุกวัน
            </span>
            <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: 0, marginBottom: 20 }}>
              ระบบร้านขนมปังยายแอ๊ด
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.8, marginBottom: 32, maxWidth: 560 }}>
              สมัครสมาชิกด้วยเบอร์โทรและรับรหัส OTP เพื่อยืนยันตัวตนอย่างรวดเร็ว พร้อมใช้งานระบบจัดการขาย ขนมปัง และโปรโมชั่นได้ทันที
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                to="/register"
                style={{
                  backgroundColor: "#f97316",
                  color: "white",
                  padding: "14px 24px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 700
                }}
              >
                สมัครสมาชิก
              </Link>
              <a
                href="#features"
                style={{
                  backgroundColor: "rgba(255,255,255,0.16)",
                  color: "white",
                  padding: "14px 24px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 700
                }}
              >
                ดูฟีเจอร์
              </a>
            </div>
          </section>

          <section style={{ textAlign: "center" }}>
            <div style={{ background: "white", borderRadius: 24, padding: 24, boxShadow: "0 20px 60px rgba(0,0,0,0.12)",  marginRight: 50 }}>
              <img src={iconlogo} alt="ยายแอ๊ด" style={{ width: "100%", borderRadius: 20, maxWidth: 420 }} />
            </div>
          </section>
        </div>
      </main>

   
    </div>
  )
}
