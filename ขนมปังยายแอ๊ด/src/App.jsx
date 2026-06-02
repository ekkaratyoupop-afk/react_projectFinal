import Navbar from "./components/Navbar"
import iconlogo from "./assets/ยายแอ๊ด.png"

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "right",
          alignItems: "right",
          backgroundColor: "#F88452",
          
        }}
      >
       <div>
          <img
            src={iconlogo}
            alt="iconlogo"
            style={{
              width: "400px",
              borderRadius: "20px",
               
              marginRight: "150px",
              marginTop: "50px"
                
            }}
          />
        </div>
        {/* กล่อง Login */}
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "15px",
             height: "300px",
            width: "350px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
             marginRight: "50px",
             marginTop: "50px"
          }}
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: "20px"
             
            ,color: "black",
            }}
          >
            เข้าสู่ระบบ
        
          </h1>

          {/* Username */}
          <input
            type="text"
            placeholder="ชื่อผู้ใช้"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="รหัสผ่าน"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />

          {/* ปุ่ม Login */}
          <button
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
    </div>
  )
}

export default App