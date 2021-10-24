import React, {useEffect, useState} from 'react';
import {Image} from "react-konva";
import Video from "./Video";
import videoMp4 from '../../../static/1.mp4'
import Konva from "konva";

function VideoImage() {
    let imageRef: React.MutableRefObject<any>
    imageRef = React.useRef(null);
    const [size, setSize] = React.useState({ width: 200, height: 150 });
    const [play, setPlay] = useState(false)

    const playVideo = () => {
        setPlay(true)
        videoElement.play()
        const layer = imageRef.current.getLayer();

        const anim = new Konva.Animation(() => {}, layer);
        anim.start();
    }

    const stopVideo = () => {
        setPlay(false)
        videoElement.pause()
        const layer = imageRef.current.getLayer();

        const anim = new Konva.Animation(() => {}, layer);
        anim.stop();
    }

    // we need to use "useMemo" here, so we don't create new video element on any render
    const videoElement = React.useMemo(() => {
        const element = document.createElement("video");
        element.src = videoMp4
        return element;
    }, []);
// when video is loaded, we should read it size
    useEffect(() => {
        const onload = function() {
            setSize({
                width: videoElement.videoWidth,
                height: videoElement.videoHeight
            });
        };
        videoElement.addEventListener("loadedmetadata", onload);
        return () => {
            videoElement.removeEventListener("loadedmetadata", onload);
        };
    }, [videoElement]);

    // use Konva.Animation to redraw a layer
    useEffect(() => {
        videoElement.play();
        const layer = imageRef.current.getLayer();

        const anim = new Konva.Animation(() => {}, layer);
        anim.start();

        return () => {
             anim.stop()
        }
    }, [videoElement]);
    return (
        <Image
            ref={imageRef}
            image={videoElement}
            x={20}
            y={20}
            stroke="red"
            width={size.width}
            height={size.height}
            draggable
            onClick={play?stopVideo:playVideo}
            onKeyPress={play?stopVideo:playVideo}
        />
    );
}

export default VideoImage;