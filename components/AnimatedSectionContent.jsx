import { motion } from "framer-motion";

const AnimatedSectionContent = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ ease: "easeIn", duration: 0.5 }}
    className={`max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0 ${className}`}
  >
    {children}
  </motion.div>
);

export default AnimatedSectionContent;
