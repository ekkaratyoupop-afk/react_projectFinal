import logo from "../assets/ร้านขนมปังยายแอ๊ด-removebg-preview.png"
import icon from  "../assets/ยายแอ๊ด_no_bg-removebg-preview.png"
function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#FFFFFF",
        padding: "5px 15px",
        display: "flex",
        alignItems: "center",
        gap: "5px"
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{
          width: "200px",
          height: "60px",
          borderRadius: "100%",
          display: "flex",
        alignItems: "center",
        }}
      />
      
<h1
          style={{
            color: "black",
           
    fontSize: "16px"
 
          }}
        >
          เข้าสู่ระบบ
        </h1>
      <img
        src={icon}
        alt="icon"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
        marginLeft: "auto"
        }}
      />
    </nav>
    
  )
}

export default Navbar