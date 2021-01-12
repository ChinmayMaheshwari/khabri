import React from "react";

const GridLayout = ({ headline }) => {
  return (
    <div
      style={{ margin: "5rem auto", width: "80vw", textAlign: "center" }}
      id={"#".concat(headline)}
    >
      <h1>{headline}</h1>
      <div
        id="mainContent"
        className="container"
        style={{
          margin: "1rem",
          width: "80vw",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "10px",
          gridAutoRows: "minMax(100px, auto)",
        }}
      >
        {[1, 2, 3, 4, 5].map((article) => (
          <div
            style={{
              textAlign: "center",
              width: "20vw",
              background: "blue",
              overflow: "hidden",
            }}
          >
            <img
              className="person-img"
              src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
              alt=""
            />
            <p style={{ color: "white", fontWeight: "bold" }}>
              {" "}
              रोड स्थित सीएमएस ऑडिटोरियम में मोहनलालगंज के सांसद कौशल किशोर के
              द्वारा चलाए जा
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLayout;
