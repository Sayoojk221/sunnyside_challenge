import React from "react";

const TestimonialCard = ({imgUrl,note,name,occupation}) => {

    return (
        <div className="testiCard">
            <img src={imgUrl}/>
            <p>{note}</p>
            <h5>{name}</h5>
            <h6>{occupation}</h6>
        </div>
    )
}

export default TestimonialCard;