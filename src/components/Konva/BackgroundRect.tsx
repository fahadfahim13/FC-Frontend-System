import React from 'react';
import {Rect} from "react-konva";


interface IBackgroundPosition{
    width: number;
    height: number;
    absolutePosition?: {
        x: number;
        y: number;
    }
}


function BackgroundRect(props: IBackgroundPosition) {
    return (
        <Rect
            x={0}
            y={0}
            width={props.width}
            height={props.height}
            draggable={false}
            listening={false}
            fill={'white'}
        />
    );
}

export default BackgroundRect;