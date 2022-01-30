import React, { useState, useEffect } from 'react';
import { Size, useWindowSize } from '../../hooks/window-size';
import './styles/CircleBack.less'

export const CircleBack = (props: { earthWidth: number,children?:JSX.Element[], circleSizes:{largeCircle:number,mediumCircle:number,smallCircle:number,}}): JSX.Element => {

    const windowSize: Size = useWindowSize()
    return (
        <>
            {(windowSize.height) && <>
            <div className="circle" style={{ width:  props.circleSizes.largeCircle, height:  props.circleSizes.largeCircle, right: `calc( 50% - ${props.circleSizes.largeCircle / 2}px )`, top: `${(windowSize.height - props.circleSizes.largeCircle ) / 2}px` }}/>
            <div className="circle" style={{ backgroundColor:"#F2F5FA", width:  props.circleSizes.mediumCircle, height:  props.circleSizes.mediumCircle, right: `calc( 50% - ${( props.circleSizes.mediumCircle) / 2}px )`, top: `${(windowSize.height - props.circleSizes.mediumCircle ) / 2}px`}}/> 
            <div className="circle" style={{ width:  props.circleSizes.smallCircle, height:  props.circleSizes.smallCircle, right: `calc( 50% - ${( props.circleSizes.smallCircle) / 2}px )`, top: `${(windowSize.height - props.circleSizes.smallCircle ) / 2}px`}}/>
            {/* <div className="align-center">{props.children}</div> */}
            </>
        }
        </>
    )
}   
CircleBack.defaultProps = {
    largeCircle:400,
    mediumCircle:350,
    smallCircle:200
    }