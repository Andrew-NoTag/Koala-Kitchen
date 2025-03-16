import React from "react";

function App() {
  return (
    <div>
      {/* Nav Bar Start*/}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            left: 120,
            top: 63,
            position: "absolute",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            color: "black",
            fontSize: 20,
            fontFamily: "Libre Franklin",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Contact
        </div>
        <div
          style={{
            width: 117,
            left: 1203,
            top: 63,
            position: "absolute",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            color: "black",
            fontSize: 20,
            fontFamily: "Libre Franklin",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Reservation
        </div>
        <div
          style={{
            width: 65,
            left: 967,
            top: 63,
            position: "absolute",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            color: "black",
            fontSize: 20,
            fontFamily: "Libre Franklin",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Menu
        </div>
        <div
          style={{
            width: 105,
            left: 359,
            top: 63,
            position: "absolute",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            color: "black",
            fontSize: 20,
            fontFamily: "Libre Franklin",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          About us
        </div>
        <div
          style={{
            width: 492,
            height: 71,
            left: 474,
            top: 39,
            position: "absolute",
            textAlign: "center",
            color: "black",
            fontSize: 64,
            fontFamily: "Rancho",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          KoalaKitchen
        </div>
      </div>
      {/* Nav Bar End*/}
    </div>
  );
}

export default App;
