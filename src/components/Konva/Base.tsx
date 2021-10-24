import React, {useEffect, useState} from 'react';
import {Stage, Layer, Text} from 'react-konva';
// import ColorRect from "./ColorRect";
import BackgroundRect from "./BackgroundRect";
import VideoImage from "./MediaPlay/VideoImage";


function Base() {
    const [size, setSize] = useState({ width: 2500, height: 2500 })

    useEffect(() => {
        setSize({ width: 1000, height: 1500 })
    })

    return (
        <div style={{ background: 'red', border: '2px solid red' }}>
        <Stage width={size.height} height={size.height} id={'container'} >
            <Layer>
                <BackgroundRect width={size.width} height={size.height} absolutePosition={{x: 0, y: 0}} />
            </Layer>
            <Layer>
                <VideoImage />
            </Layer>
            <Layer style={{border: '2px solid green'}} >
                <Text text={"Try click on react"} draggable={true} style={{border: '2px solid blue'}} />
            </Layer>
            {/*<Layer>*/}
            {/*    <ColorRect />*/}
            {/*</Layer>*/}
        </Stage>
        </div>
    );
}

export default Base;