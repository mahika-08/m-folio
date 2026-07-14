import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, staggerItem, viewport } from '../../utils/animations';
import { config } from '../../data/config';

const highlights = [
  
  {
    label: 'Projects ',
    value: '7+',
    description: 'At learning phase',
  },
  
];

const whatIDo = [
  ];

export default function About() {
  return (
    <SectionWrapper id="about" className="border-t border-surface-border">
      <SectionHeader eyebrow="About Me" heading="Turning ideas into reality" />

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Bio column */}
        <motion.div
          className="lg:col-span-3 space-y-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p variants={staggerItem} className="text-slate-300 leading-relaxed text-base">
            {config.bio}
          </motion.p>
          <motion.p variants={staggerItem} className="text-slate-400 leading-relaxed text-base">
            I care deeply about developer experience, clean APIs, and code that future maintainers
            will thank you for. I thrive in collaborative environments and enjoy bridging the gap
            between product requirements and technical implementation.
          </motion.p>
          <motion.p variants={staggerItem} className="text-slate-400 leading-relaxed text-base">
            My current focus is on edge computing, streaming architectures, and making AI tooling
            accessible to everyday engineering teams.
          </motion.p>
        </motion.div>

        {/* Stats column */}
        <motion.div
          className="lg:col-span-2 grid grid-cols-1 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {highlights.map(({ label, value, description }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="card-glass p-5 flex items-center gap-5"
            >
              <div className="text-3xl font-bold gradient-text leading-none">{value}</div>
              <div>
                <p className="text-sm font-semibold text-white">{label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* What I do cards */}
      <motion.div
        className="mt-16 grid md:grid-cols-3 gap-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {whatIDo.map(({ icon, title, body }) => (
          <motion.article
            key={title}
            variants={staggerItem}
            className="card-glass p-6 hover:border-primary/30 transition-colors duration-300"
          >
            <div className="text-3xl mb-4" aria-hidden="true">{icon}</div>
            <h3 className="font-semibold text-white text-base mb-2">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
