import React from "react";
import { Card } from "./card";

const SectionTwo = () => {
  return (
    <div className="sectiontwo">
      <Card
        style={{
          backgroundImage: 'url("/images/image-gallery-milkbottles.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "bottom center",
          height:'30rem'
        }}
      />
      <Card
        style={{
          backgroundImage: 'url("/images/image-gallery-orange.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "bottom center",
          height:'30rem'
        }}
      />
      <Card
        style={{
          backgroundImage: 'url("/images/image-gallery-sugarcubes.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "bottom center",
          height:'30rem'
        }}
      />
      <Card
        style={{
          backgroundImage: 'url("/images/image-gallery-cone.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "bottom center",
          height:'30rem'
        }}
      />
    </div>
  );
};

export default SectionTwo;
