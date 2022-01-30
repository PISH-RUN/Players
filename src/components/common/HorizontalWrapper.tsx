import React from "react";


export const HorizontalWrapper = (props:{children: Array<JSX.Element>}): JSX.Element =>{

    const {children} = props
   
    return(
        <div className="flex">
            {children}
        </div>
    )
}