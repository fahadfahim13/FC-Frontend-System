import React, { CSSProperties } from 'react';
import { AnimateKeyframes } from 'react-simple-animate';
import { animated, useSpring } from 'react-spring';
import { useCurrentFrame, Video } from 'remotion';

import video from '../../static/1.mp4';
import FlowImage from '../../static/flow 1.png';

function VideoComponent(props: { playVideo: boolean }) {
  const frame = useCurrentFrame();
  console.log(frame);

  const { playVideo } = props;

  const videoStyle = {
    position: 'absolute',
    transition: '0.2s',
    top: 0,
    right: 0,
    zIndex: -1,
    width: frame > 56 && frame < 185 ? '75%' : '100%',
  } as CSSProperties;

  const boxStyle = useSpring({
    loop: playVideo,
    // loop: false,
    from: { rotateY: 0 },
    to: { rotateY: 180 },
  });

  const ctaStyle = useSpring({
    // loop: { reverse: playVideo },
    from: { x: -600 },
    to: { x: 0 },
    config: { duration: 500, delay: 2000 },
  });

  return (
    // <AnimateKeyframes
    //     play={playVideo}
    //     pause={!playVideo}
    //     iterationCount="infinite"
    //     // direction="alternate-reverse"
    //     direction="alternate"
    //     // duration={30 * 5}
    //     keyframes={[]}
    // >
    <>
      <Video
        src={video}
        startFrom={0} // if video is 30fps, then it will start at 2s
        endAt={30 * 10} // if video is 30fps, then it will end at 4s
        style={videoStyle}
        // style={{...style, width: '100%'}}
        disableRemotePlayback
      />
      {/* <animated.div
                style={{
                    ...boxStyle,
                }}
            >
                <img src={FlowImage} style={{width: 200, height: 200, left: 0, top: 0}} alt="flowcode" />
            </animated.div> */}
    </>
    // </AnimateKeyframes>
  );
}

export default VideoComponent;
