import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedLine = ({ transitionProperties, width }) => {
  return (
    <motion.div
      initial={{ x: "calc(100vw)" }}
      animate={{ x: "-100%", width: ["100px", "200px", "100px"] }}
      transition={{
        duration: transitionProperties.duration,
        ease: "easeInOut",
      }}
      className={`h-2 ${transitionProperties.color} rounded-full absolute opacity-50`}
      style={{
        top: `${transitionProperties.height}%`,
        width: `${width}px`,
      }}
    />
  );
};

const colors = [
  "bg-rose-400",
  "bg-blue-400",
  "bg-emerald-400",
  "bg-fuchsia-400",
  "bg-indigo-400",
  "bg-yellow-400",
  "bg-teal-400",
  "bg-cyan-400",
  "bg-amber-400",
  "bg-orange-400",
  "bg-red-400",
];

const createLines = () => [
  {
    width: 200,
    transitionProperties: {
      height: Math.floor(Math.random() * 20),
      duration: Math.random() * 2.2 + 1.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    id: 1,
  },
  {
    width: 200,
    transitionProperties: {
      height: Math.floor(Math.random() * 20 + 20),
      duration: Math.random() * 2.4 + 1.4,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    id: 2,
  },
  {
    width: 200,
    transitionProperties: {
      height: Math.floor(Math.random() * 20 + 60),
      duration: Math.random() * 2.6 + 1.6,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    id: 3,
  },
  {
    width: 200,
    transitionProperties: {
      height: Math.floor(Math.random() * 20 + 80),
      duration: Math.random() * 2.8 + 1.8,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    id: 4,
  },
];

const AnimatedLines = () => {
  const [lines, setLines] = useState([]);
  useEffect(() => {
    setLines(createLines());
  }, []);

  return (
    <div className="absolute h-full w-full z-0">
      {lines.map(({ id, ...rest }) => (
        <AnimatedLine key={id} {...rest} />
      ))}
    </div>
  );
};

export default AnimatedLines;
