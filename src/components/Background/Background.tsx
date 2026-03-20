import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./Background.css";

const Cube = ({ className }: { className: string }) => (
  <div className={`cube-wrapper ${className}`}>
    <div className="cube">
      <div className="face front"></div>
      <div className="face back"></div>
      <div className="face left"></div>
      <div className="face right"></div>
      <div className="face top"></div>
      <div className="face bottom"></div>
    </div>
  </div>
);

const Background: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 20,
    restDelta: 0.0001,
  });

  // Parallax offsets - REDUCED for "slower" and longer-lasting effect
  const y1 = useTransform(smoothProgress, [0, 1], [0, -1000]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, 600]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, -400]);
  const y4 = useTransform(smoothProgress, [0, 1], [0, -800]);
  const y5 = useTransform(smoothProgress, [0, 1], [0, 500]);

  // Deeper cubes offsets
  const y8 = useTransform(smoothProgress, [0, 1], [0, -1500]);
  const y10 = useTransform(smoothProgress, [0, 1], [0, -1300]);
  const y12 = useTransform(smoothProgress, [0, 1], [0, -1400]);

  return (
    <div className="bg-container">
      <div className="data-grid"></div>
      <div className="data-points"></div>

      {/* Hero & Mid Section Cubes */}
      <motion.div
        style={{
          y: y1,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Cube className="c1 focus-near" />
      </motion.div>
      <motion.div
        style={{
          y: y2,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Cube className="c2 focus-mid" />
      </motion.div>
      <motion.div
        style={{
          y: y3,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Cube className="c3 focus-mid" />
      </motion.div>
      <motion.div
        style={{
          y: y4,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {/*<Cube className="c4 focus-near" />*/}
      </motion.div>
      <motion.div
        style={{
          y: y5,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Cube className="c5 focus-mid" />
      </motion.div>

      {/* Deep Page Cubes - SPREAD ACROSS PAGE */}
      <motion.div
        style={{
          y: y8,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Cube className="c8 focus-near" />
      </motion.div>
      <motion.div
        style={{
          y: y10,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Cube className="c10 focus-far" />
      </motion.div>
      <motion.div
        style={{
          y: y12,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Cube className="c12 focus-far" />
      </motion.div>

      <div className="parallax-glows">
        <div className="glow glow-gold"></div>
        <div className="glow glow-cyan"></div>
      </div>

      <div className="noise-overlay"></div>
    </div>
  );
};

export default Background;
