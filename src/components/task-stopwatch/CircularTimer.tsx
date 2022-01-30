import React from "react";
import "./styles/CircularTimer.less";


interface TimerElementType {
    key: number
    style: React.CSSProperties
}

export interface CircleProps {
    percentage: number
}

export const CircularTimer = (props: CircleProps): JSX.Element => {
  const circleCoordinates = (radius: number, steps: number, centerX: number, centerY: number) => {
    let xValues = [centerX]
    let yValues = [centerY]
    for (let i = 0; i < steps; i++) {
      xValues[i] = centerX + radius * Math.cos((2 * Math.PI * i) / steps)
      yValues[i] = centerY + radius * Math.sin((2 * Math.PI * i) / steps)
    }
    return { x: xValues, y: yValues }
  };

  const colors=['#00B928','#339AF0','#FFC426','#FF9065']
  const coordinates = circleCoordinates(40, 160, 50, 50)
  let array: Array<TimerElementType> = [];
  for (let i = 0; i < 160; i++) {
    let tmp = 80 - i
    if (tmp < 0) {
      tmp = 160 + tmp
    }
    const style: React.CSSProperties = {
        left: coordinates.y[i].toString() + "%",
        top: `calc(${coordinates.x[i].toString()}% - 15px)`,
        transform: "rotate(" + (360 - i * 2.25).toString() + "deg)",
        backgroundColor: (props.percentage >= 100) ? "#F5222D" : (props.percentage * 1.6 > tmp) ? colors[Math.floor(props.percentage / 25)] : "#B7B5CA",
        width:(props.percentage*1.6 > tmp) ? "2px" : "1px",
    }
    array.push(
      {
        key: i,
        style: style,
      }
    )
  }

  const Timer: JSX.Element = <div>
    {
      array.map((item) => {
        return <div style={item.style} className="react-stopwatch-timer__element" key={item.key} />
      })
    }
  </div>

  return Timer
}
