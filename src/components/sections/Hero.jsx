import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiMapPin } from '../../utils/icons.jsx';
import { config } from '../../data/config';
import { staggerContainer, staggerItem } from '../../utils/animations';

function GradientBlob({ className }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
    />
  );
}

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden px-4"
      aria-label="Introduction"
    >
     

      <div className="container-max w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.h1 variants={staggerItem} className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">{config.name}</span>
            </motion.h1>

            <motion.p variants={staggerItem} className="text-xl md:text-2xl font-medium text-slate-400 mb-4">
              {config.title}
            </motion.p>

            <motion.p variants={staggerItem} className="text-base text-slate-400 leading-relaxed max-w-lg mb-2">
              {config.bio}
            </motion.p>

            <motion.div variants={staggerItem} className="flex items-center gap-1.5 text-sm text-slate-500 mb-8">
              <FiMapPin size={14} aria-hidden="true" />
              <span>{config.location}</span>
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-3">
              <a href="#projects" onClick={scrollToProjects} className="btn-primary">
                View Projects
                <FiArrowRight size={16} aria-hidden="true" />
              </a>
              <a href={config.resumeUrl} download className="btn-outline">
                <FiDownload size={16} aria-hidden="true" />
                Resume
              </a>
              <a href="#contact" onClick={scrollToContact} className="btn-outline">
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div
                aria-hidden="true"
                className="absolute inset-[-12px] rounded-full border border-primary/20 animate-pulse-slow"
              />
              <div
                aria-hidden="true"
                className="absolute inset-[-24px] rounded-full border border-accent/10"
              />

              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                              border-2 border-surface-border shadow-2xl shadow-primary/10 relative z-10">
                <img
                  src={config.profileImage}
                  alt={`Portrait of ${config.name}`}
                  width={320}
                  height={320}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-xs text-slate-600 tracking-widest uppercase">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
