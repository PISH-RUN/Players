import React from "react";
import './styles/Wrapper.less'


export const Wrapper = (props:{children: JSX.Element}): JSX.Element =>{

    const {children} = props
   
    return(
        <div className="default-wrapper">
            {children}
        </div>
    )
}