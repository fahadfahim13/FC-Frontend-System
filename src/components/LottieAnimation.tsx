import React from 'react';
import Lottie from 'react-lottie-player';
import { animated, useTransition } from 'react-spring';
import { useCurrentFrame } from 'remotion';

import animationData from '../lotties/doctorLab.json';

export default function App(Props: { play: boolean }) {
  const frame = useCurrentFrame();

  return (
    <animated.div>
      <Lottie
        animationData={animationData}
        play={frame > 10 && frame < 90 ? true : false}
        style={{
          width: 300,
          height: 300,
          position: 'absolute',
          bottom: -20,
          left: 20,
        }}
      />
    </animated.div>
  );
}
