import React from "react";

import { Card, CardWithLink, CardWithoutLink } from "./card";

const SectionOne = () => {
  return (
    <div className="section_one">
      <Card
        component={
          <CardWithLink
            title="Transform your brand"
            bodytext="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          />
        }
      />
      <Card
        style={{
          backgroundImage: 'url("https://i.ibb.co/D79rDCW/egg.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      />
      <Card
        style={{
          backgroundImage: 'url("/images/image-gallery-cone.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      />
      <Card
        component={
          <CardWithLink
            title="Stand out to the right audience"
            bodytext="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          />
        }
      />
      <Card
        style={{
          backgroundImage: 'url("/images/image-graphic-design.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "bottom center",
          alignItems:'end'
        }}
        component={
          <CardWithoutLink
            title="Graphic design"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
        }
      />
      <Card
        style={{
          backgroundImage: 'url("/images/image-photography.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "bottom center",
          alignItems:'end'
        }}
        component={
          <CardWithoutLink
            title="Photography"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
        }
      />
    </div>
  );
};

export default SectionOne;
