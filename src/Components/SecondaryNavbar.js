import React from "react";
import logo from "../khabariya_logo.png";

function SecondaryNavbar() {
  return (
    <div
      style={{
        background: "white",
        marginTop: "0px",
        marginBottom: "10px",
      }}
    >
      <img src={logo} alt="" style={{ height: "15vh", marginLeft: "3vw" }} />
      <form className="nav-search">
        <input
          type="text"
          placeholder="Search News"
          className="nav-search-input"
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default SecondaryNavbar;
