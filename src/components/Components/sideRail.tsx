import { AnimateKeyframes } from 'react-simple-animate';
import { animated, useSpring } from 'react-spring';

function SideRail() {
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
          top: 30,
          position: 'absolute',
          ...ctaStyle,
        }}
      >
        <img
          src="./siderailimage.png"
          style={{ width: 200, height: 200, left: 0, top: 0 }}
          alt="flowcode"
        />
      </animated.div>
    </AnimateKeyframes>
  );
}

export default SideRail;
