import React from "react";


export interface ImageBoxProps {
    src: any
    className?: string
    style?: React.CSSProperties
    width?: string
    height?: string
}

export const ImageBox = (props: ImageBoxProps):JSX.Element =>{
    
    return(
        <img src={props.src} style={props.style} className={props.className} width={props.width} height={props.height}/>
    )
}
