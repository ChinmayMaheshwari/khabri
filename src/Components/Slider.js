import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "../data";

function Slider() {
  const people = data;
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(1);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
    if (index2 < 0) {
      setIndex2(lastIndex);
    }
    if (index2 > lastIndex) {
      setIndex2(0);
    }
  }, [index, people, index2]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
      setIndex2(index2 + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, index2]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>ख़बरिया</span> ख़बर
        </h2>
      </div>
      <div style={{ display: "flex", width: "90vw", margin: "auto" }}>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, quote } = person;

            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article
                className={position}
                key={id}
                onClick={() => console.log("clicked")}
              >
                <img src={image} alt={name} className="person-img" />
                <h4>{quote}</h4>
                {/* <p className="title">{title}</p>
                <p className="text">{quote}</p> */}
                {/* <FaQuoteRight className="icon" /> */}
              </article>
            );
          })}
          <button
            className="prev"
            onClick={() => {
              setIndex(index - 1);
              setIndex2(index2 - 1);
            }}
          >
            <FiChevronLeft />
          </button>
        </div>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, quote } = person;

            let position = "nextSlide";
            if (personIndex === index2) {
              position = "activeSlide";
            }
            if (
              personIndex === index2 - 1 ||
              (index2 === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{quote}</h4>
                {/* <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" /> */}
              </article>
            );
          })}
          <button
            className="next"
            onClick={() => {
              setIndex(index + 1);
              setIndex2(index2 + 1);
            }}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Slider;
