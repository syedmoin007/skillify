import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function TiltCard({ children }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="#ffffff"
      glarePosition="all"
      scale={1.05}
      transitionSpeed={1500}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="rounded-xl"
    >
      {children}
    </Tilt>
  );
}
