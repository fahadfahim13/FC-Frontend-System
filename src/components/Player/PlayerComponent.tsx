import { Player, PlayerRef } from '@remotion/player';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Sequence } from 'remotion';

import BottomBox from '../Components/BottomBox';
import SideRail from '../Components/sideRail';
import { Transition } from '../Components/Transition';
import VideoComponent from '../Components/VideoComponent';
import LottieAnimation from '../LottieAnimation';

const MyComposition = (props: { play: boolean }) => {
  return (
    <Fragment>
      <Sequence from={0} durationInFrames={350}>
        <VideoComponent playVideo={props.play} />
      </Sequence>
      <Sequence from={55} durationInFrames={126}>
        <Transition type="in">
          <Transition type="out">
            <LottieAnimation play={props.play} />
          </Transition>
        </Transition>
      </Sequence>
      <Sequence from={65} durationInFrames={127}>
        <Transition type="in">
          <Transition type="out">
            <BottomBox />
          </Transition>
        </Transition>
      </Sequence>
      <Sequence from={45} durationInFrames={125}>
        <Transition type="in">
          <Transition type="out">
            <SideRail />
          </Transition>
        </Transition>
      </Sequence>
      {/*<AnimatedImage playVideo={props.play} />*/}
    </Fragment>
  );
};

function PlayerComponent() {
  const playerRef = useRef<PlayerRef>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.addEventListener('play', () => {
        setPlay(true);
      });

      playerRef.current.addEventListener('pause', () => {
        setPlay(false);
      });

      playerRef.current.addEventListener('seeked', (e) => {
        console.log('seeked to ' + e.detail.frame);
      });
      playerRef.current.addEventListener('timeupdate', (e) => {
        console.log('time has updated to ' + e.detail.frame);
      });
    }
  }, []);

  return (
    <Player
      ref={playerRef}
      durationInFrames={30 * 10}
      compositionWidth={800}
      compositionHeight={450}
      fps={30}
      component={() => MyComposition({ play })}
      controls={true}
      showVolumeControls={true}
      allowFullscreen={true}
      clickToPlay={true}
      loop
      spaceKeyToPlayOrPause={true}
      style={{ backgroundColor: '#46e891' }}
      // Many other optional props are available.
    />
  );
}

export default PlayerComponent;
