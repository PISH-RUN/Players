import React from "react";
import './styles/Title.less'

export enum Type {
    THIN = 'thin',
    P = 'paragraph',
    BOLD = 'bold',
    BLACK = 'black',
    MEDIUM = 'medium',
}

export const Title = (props:{className?:string ,children:React.ReactNode,type:Type ,style?:React.CSSProperties}):JSX.Element =>{

    const {className,children,type} = props
   
    return(
        <p className={className ? type + " " + className : type} style={props.style}>{props.children}</p>
    )
}