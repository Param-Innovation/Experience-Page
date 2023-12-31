import React, { useState, useEffect, useRef } from "react";
import { animated } from "@react-spring/web";
import { useTransition } from "@react-spring/core";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import "../../pages/EquationGallery/EquationGallery.css";
import image01 from "./public/desmosgraph.png";
import image2 from "./public/harmono-Graph.png";
import image3 from "./public/Lorenz_Attractor.PNG";
import image4 from "./public/Weight_on_Planets.PNG";

import Section from "./Section";

export default function Content() {
  const [bgImage, setBgImage] = useState("");
  const [text, setText] = useState("");

  const sections = [
    { image: image01, text: "Desmos", position: "left", link: "/desmos" },
    {
      image: image2,
      text: "Harmonograph",
      position: "right",
      link: "/harmonograph",
    },
    {
      image: image3,
      text: "Attractors",
      position: "right",
      link: "/attractors",
    },
    {
      image: image4,
      text: "Weights On Other Planets",
      position: "left",
      link: "/weights-on-planets",
    },
  ];
  const sectionRefs = sections.map(() => React.createRef());
  const transitions = useTransition(text, {
    from: { opacity: 0, transform: "translate3d(0, -1005%, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -500%, 0)" },
    config: { duration: 0 },
  });

  const sectionStyle = {
    height: "100vh",
  };

  return (
    <>
      {transitions((style, item) => (
        <animated.div
          className="fixed"
          style={{
            height: "100vh",
            width: "100%",
            position: "fixed",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            ...style,
          }}
        />
      ))}
      <div className="fullPageSection">
        {sections.map((section, index) => (
          <Section
            key={index}
            className="fullPageSections"
            setImage={setBgImage}
            image={section.image}
            index={index}
            text={section.text}
            setText={setText}
            link={section.link}
            id={`section${index}`}
            ref={sectionRefs[index]}
          />
        ))}
      </div>
    </>
  );
}
