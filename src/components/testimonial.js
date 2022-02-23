import React from "react";
import TestimonialCard from "./testiimonialCard";

const Testimonial = () => {
  return (
    <div className="testimonialcontainer">
      <h1>Client Testimonials</h1>
      <div className="testimonials">
        <TestimonialCard
          imgUrl={"/images/client1.jpeg"}
          note={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
          name='Emily R'
          occupation={'Web designer'}
        />
        <TestimonialCard
          imgUrl={"/images/client1.jpeg"}
          note={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
          name='Emily R'
          occupation={'Web designer'}
        />
        <TestimonialCard
          imgUrl={"/images/client1.jpeg"}
          note={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
          name='Emily R'
          occupation={'Web designer'}
        />
      </div>
    </div>
  );
};

export default Testimonial;
