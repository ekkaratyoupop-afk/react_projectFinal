import { Link } from "react-router-dom"
import logo from "../assets/ร้านขนมปังยายแอ๊ด-removebg-preview.png"
import icon from "../assets/ยายแอ๊ด_no_bg-removebg-preview.png"

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#FFFFFF",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{
          width: "170px",
          height: "52px",
          borderRadius: "100%"
        }}
      />

      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "20px" }}>
        <Link
          to="/"
          style={{
            color: "#111827",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "16px"
          }}
        >
          หน้าแรก
        </Link>
        <Link
          to="/register"
          style={{
            color: "#f97316",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "16px"
          }}
        >
          สมัครสมาชิก
        </Link>
        <img
          src={icon}
          alt="icon"
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%"
          }}
        />
      </div>
    </nav>
    
  )
}

export default Navbar