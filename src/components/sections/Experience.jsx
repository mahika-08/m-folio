import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
import { FiMapPin, FiCalendar } from '../../utils/icons.jsx';
import { experience } from '../../data/experience';
import { staggerContainer, staggerItem, slideInLeft, viewport } from '../../utils/animations';

function TimelineItem({ job, isLast }) {
  return (
    <motion.div
      variants={staggerItem}
      className="relative pl-8 md:pl-12"
    >
      {/* Vertical line */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="absolute left-[7px] md:left-[11px] top-6 bottom-0 w-px bg-surface-border"
        />
      )}

      {/* Dot */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-surface z-10"
      />

      {/* Card */}
      <article className="card-glass p-5 md:p-6 mb-6 hover:border-primary/30 transition-colors duration-300">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-semibold text-white text-base">{job.position}</h3>
            <p className="text-primary font-medium text-sm mt-0.5">{job.company}</p>
          </div>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-surface-raised border border-surface-border text-slate-400 whitespace-nowrap">
            {job.type}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4">
          <span className="flex items-center gap-1.5">
            <FiCalendar size={12} aria-hidden="true" />
            {job.startDate} — {job.endDate}
          </span>
          <span className="flex items-center gap-1.5">
            <FiMapPin size={12} aria-hidden="true" />
            {job.location}
          </span>
        </div>

        <ul className="space-y-1.5 mb-4" role="list">
          {job.description.map((point, i) => (
            <li key={i} className="text-sm text-slate-400 leading-relaxed flex gap-2">
              <span className="text-primary mt-1.5 shrink-0" aria-hidden="true">▸</span>
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {job.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </article>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="border-t border-surface-border">
      <SectionHeader eyebrow="Experience" heading="Where I've worked" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {experience.map((job, i) => (
          <TimelineItem key={job.id} job={job} isLast={i === experience.length - 1} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
