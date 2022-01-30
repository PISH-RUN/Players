import React from "react";
import { BsSun } from 'react-icons/bs';
import { IoRocketOutline, IoAirplaneOutline } from 'react-icons/io5';
import './styles/SpeedGauge.less';


export const SpeedGauge = (): JSX.Element => {
    return (
        <>
            <div className="speed-icon-wrapper sun-icon">
                <div className="speed-icon-bg">
                    <BsSun style={{ color: "#FFC426" }} />
                </div>
                <p>
                    سرعت نور
                </p>
            </div>
            <div className="speed-icon-wrapper rocket-icon">
                <div className="speed-icon-bg">
                    <IoRocketOutline style={{ color: "#FF9065" }} />
                </div>
                <p>
                    سرعت موشک
                </p>
            </div>
            <div className="speed-icon-wrapper airplane-icon">
                <div className="speed-icon-bg">
                    <IoAirplaneOutline style={{ color: "#339AF0" }} />
                </div>
                <p>
                    سرعت جت
                </p>
            </div>
        </>
    )
}
