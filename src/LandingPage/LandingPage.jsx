import React from "react";
import { Link  } from "react-router-dom";
const LandingPage = () => {

  return (
    <div style={{ width: "100%", height: "812px", backgroundColor:"black" , color:"white" }}>
      <nav
        style={{
          padding: "32px",
          width: "100%",
          height: "75px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "16px",
          fontFamily: "gilroy",
        }}
      >
        <div className="logo">TEMPLATE <br/> DSGN</div>
        <div
          className="links"
          style={{
            width: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>About</span>
          <span>Downloads </span>
          <span>Prices</span>
          <span>Features</span>
          <span>Conteact</span>
          <Link 
             to="/sign"
            style={{
              padding: "12px 32px",
              borderRadius: "25PX",
              border: "none",
              backgroundColor: "blue",
              color: "white",
              textDecoration:"none"
            }}
          >
            Sign Up
          </Link>
          <span>logo</span>
        </div>
      </nav>
     <div        className="Container"
        style={{
          width: "100%",
          height: "556px",
          marginTop: "62px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "38px",
        }}
      >
        <div className="Inputbox" style={{ width: "40%", height: "346px" }}>
          <h1 style={{ fontSize: "122px", fontFamily: "gilroy" }}>Welocome.</h1>
          <input
            style={{
              padding: "16px 128px",
              borderRadius: "25px",
              marginTop: "16px",
              backgroundColor:"transparent",
              color:"white",
              border:"2px solid grey"
            }}

            type="text"
          />
          <div
            className="button"
            style={{ display: "flex", gap: "18px", marginTop: "46px" }}
          >
            <Link
              to="/game"
              style={{
                padding: "16px 28px",
                borderRadius: "25px",
                backgroundColor: "skyblue",
                border: "none",
                color: "white",
                textDecoration:"none",
                fontFamily:"gilroy",
                fontWeight:"bold"
              }}
            >
             GAME
            </Link>
            <Link
             to="/background"
              style={{
                textDecoration:"none",
                fontFamily:"gilroy",
                fontWeight:"bold",
                padding: "16px 28px",
                borderRadius: "25px",
                borderColor: "grey",
                backgroundColor:"transparent",
                color:"white",
                border:"1px solid grey"
              }}
            >
             BackGround Changer
            </Link>
          </div>
        </div>
        <div
          className="Data"
          style={{
            width: "30%",
            height: "316px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <h4 style={{fontSize:"44px",fontFamily: "gilroy"}}>Landing Page</h4>
          <p style={{textAlign:"center" ,  fontFamily: "gilroy" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            molestias repellat quia enim officia, inventore illum rerum
            voluptate veniam deserunt quaerat tempore accusamus officiis,
            voluptates maxime nulla similique laboriosam atque minus reiciendis.
            Accusantium nulla laudantium dicta tenetur blanditiis doloribus
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
