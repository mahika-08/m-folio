import { motion } from 'framer-motion';
import { fadeInUp, viewport } from '../../utils/animations';

/**
 * Wraps each portfolio section with consistent padding, max-width, and entrance animation.
 */
export default function SectionWrapper({ id, className = '', children }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <motion.div
        className="container-max"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {children}
      </motion.div>
    </section>
  );
}
