import React, {Fragment, useState} from 'react';
import {Rect} from "react-konva";
import Konva from 'konva';

function ColorRect() {
    const [color, setColor] = useState('green')

    const handleClick = () => {
        setColor(Konva.Util.getRandomColor())
    }


    return (
        <Fragment>
            <Rect draggable={true} fill={color} width={50} height={50} shadowBlur={5} onDblClick={handleClick} />
        </Fragment>
    );
}

export default ColorRect;