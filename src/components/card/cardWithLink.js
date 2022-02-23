import React from "react";

const CardWithLink = ({
    title='card title',
    bodytext='paragraph',
    btnText='learn more'
}) => {
    return (
        <div className="cardwithlink">
            <h2>{title}</h2>
            <p>{bodytext}</p>
            <img src="https://i.ibb.co/TB2DVgK/learnmore.png" />
        </div>
    )
}

export default CardWithLink