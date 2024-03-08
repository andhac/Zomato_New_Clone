import React from 'react';

export const NextArrow = (props) => {

    return(
        <div className={props.className} style={{...props.style ,backgroundColor: "rgb(142 142 142)", borderRadius:"50%"  }} onClick={props.onClick} />

    )
}

export const PrevArrow = (props) => {
    if(props.currentSlide === 0){
        return null;
    }
    return(
        <div className={props.className} style={{...props.style ,backgroundColor: "rgb(142 142 142)", borderRadius:"50%"  }} onClick={props.onClick} />

    )
}