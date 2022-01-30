import React, { useEffect, useRef, useState } from 'react';
import { Size, useWindowSize } from '../../hooks/window-size';
import createGlobe from 'lib/cobe';
import { AvatarPin } from './AvatarPin';
import { Position, shufflePosition } from './pin-position';
import './styles/Earth.less';
import { CircleBack } from '../earth/CircleBack';
import { TaskPin } from './TaskPin';

export interface EarthProps {
    scale: number
    // children?: React.ReactNode
    pins?: Array<React.ReactElement>
    status: 'persons' | 'tasks' | 'dashboard'
}


export const Earth = (props: EarthProps): JSX.Element => {

    const [canvasSize, setCanvasSize] = useState<number>(0)
    const [positions, setPositions] = useState<Array<Position>>([])

    const canvasRef = useRef<any>();

    const windowSize: Size = useWindowSize()

    const statusAttributes = {
        "persons": {
            largeCircle: canvasSize + 200,
            mediumCircle: canvasSize + 150,
            smallCircle: canvasSize,
            scale: 1.15,
            marginRight: 0,
        },
        "tasks": {
            largeCircle: 0,
            mediumCircle: 0,
            smallCircle: canvasSize - 100,
            scale: 1.7,
            marginRight: `calc(50% - ${canvasSize / 4}px)`
        },
        "dashboard": {
            largeCircle: canvasSize + 300,
            mediumCircle: canvasSize + 220,
            smallCircle: canvasSize + 50,
            scale: 1,
            marginRight: 150
        }
    }

    useEffect(() => {
        if (windowSize.width && windowSize.height) {

            setCanvasSize((windowSize.width < windowSize.height ? windowSize.width * statusAttributes[props.status].scale : windowSize.height * statusAttributes[props.status].scale))
            let phi = 4;
            const globe = createGlobe(canvasRef.current, {
                devicePixelRatio: 2,
                width: canvasSize * 2,
                height: canvasSize * 2,
                phi: phi,
                theta: 0,
                dark: 0,
                diffuse: 1.2,
                mapSamples: 30000,
                mapBrightness: 12,
                baseColor: [0.36, 0.57, 0.90],
                markerColor: [0.1, 0.8, 1],
                glowColor: [0.36, 0.57, 0.90],
                markers: [],
                onRender: (state: any) => {
                    // Called on every animation frame.
                    // `state` will be an empty object, return updated params.
                    state.phi = phi
                    phi += 0.002
                },
            });

            return () => {
                globe.destroy();
            };
        }

    }, [windowSize, canvasSize]);

    useEffect(() => {
        if (canvasSize != 0 && props.pins) {
            const pinSize = props.pins[0].type == TaskPin ? { w: 220, h: 90 } : props.pins[0].type == AvatarPin ? { w: 60, h: 76 } : { w: 150, h: 70 };
            setPositions(shufflePosition(props.pins.length, canvasSize, canvasSize, pinSize.w, pinSize.h, props.status == 'persons'));
        }
    }, [canvasSize, props.pins])

    return (
        <>{(windowSize.width) &&
            <div style={{ overflow: 'hidden',position: 'relative', height: '100%', width: windowSize.width - 100, marginRight: statusAttributes[props.status].marginRight }}>
                <CircleBack earthWidth={canvasSize} circleSizes={statusAttributes[props.status]} />
                <div
                    style={{
                        position: 'absolute',
                        width: canvasSize,
                        height: canvasSize,
                        right: `calc( 50% - ${canvasSize / 2}px )`,
                        top: `calc( 50% - ${canvasSize / 2}px )`,
                    }}
                >
                    <canvas
                        ref={canvasRef}
                        style={{
                            width: canvasSize,
                            height: canvasSize,
                        }}
                    />
                    {props.pins?.map((pin, index) => {
                        return React.cloneElement(pin, { position: positions[index] })
                    })}
                </div>

            </div>
        }</>)
}

Earth.defaultProps = {
    scale: 1.1,
    center: false,
}