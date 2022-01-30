import React, { CSSProperties } from "react";


export const DashboardWrapper = (props:{children:JSX.Element,style?: CSSProperties}):JSX.Element =>{

    const {children,style} = props
   
    return(
        <div className="absolute" style={style}>
            {children}
        </div>
    )
}