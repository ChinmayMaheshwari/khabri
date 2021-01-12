import React from "react";
import logo from "../logo.svg";

function SecondaryNavbar() {
  return (
    <div
      style={{
        background: "grey",
        marginTop: "0px",
        marginBottom: "10px",
      }}
    >
      <img src={logo} alt="" style={{ height: "80px", marginLeft: "10vw" }} />
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
