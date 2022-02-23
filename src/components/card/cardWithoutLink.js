import React from "react";

const CardWithoutLink = ({title,paragraph}) => {
    return (
        <div className="cardwithoutlink">
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
    )
}

export default CardWithoutLink;