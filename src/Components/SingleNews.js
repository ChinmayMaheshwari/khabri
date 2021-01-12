import React from "react";

function SingleNews() {
  return (
    <div>
      <div style={{ marginLeft: "1rem" }}>
        <p>
          <a href="">Home</a> &gt; <a href="">Sports</a> &gt;{" "}
          <a href="">current</a>
        </p>
      </div>
      <div className="news-main">
        <img
          className="news-image"
          src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
          alt=""
        />
        <h2>Aaj Tiwari ko kutta kata</h2>
        <div style={{ background: "navy", textAlign: "left" }}>
          <p style={{ color: "red" }}>First Paragraph</p>
        </div>
        {["paragraph 2", "paragraph 3"].map((para) => {
          return (
            <div>
              <p>{para}</p>
              <br />
            </div>
          );
        })}
        <iframe
          title="youtube-video"
          style={{ width: "60vw" }}
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
    </div>
  );
}

export default SingleNews;
