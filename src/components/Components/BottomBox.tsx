import { AnimateKeyframes } from 'react-simple-animate';
import { animated, useSpring } from 'react-spring';

function BottomBox() {
  const ctaStyle = useSpring({
    // loop: { reverse: playVideo },
    from: { x: -600 },
    to: { x: 0 },
    config: { duration: 500, delay: 2000 },
  });

  return (
    <AnimateKeyframes
      iterationCount="infinite"
      // direction="alternate-reverse"
      direction="alternate"
      // duration={30 * 5}
      keyframes={[]}
    >
      <animated.div
        style={{
          width: 600,
          height: 50,
          bottom: 50,
          left: 100,
          position: 'absolute',
          backgroundColor: 'transparent',
          borderRadius: 0,
          ...ctaStyle,
        }}
      >
        <h1>Click to edit action</h1>
      </animated.div>
    </AnimateKeyframes>
  );
}

export default BottomBox;
