import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import { FiBookOpen, FiAward, FiCalendar, FiExternalLink } from '../../utils/icons.jsx';
import { resolveIcon } from '../../utils/icons.jsx';
import { education, certifications } from '../../data/education';
import { staggerContainer, staggerItem, viewport } from '../../utils/animations';

function EducationCard({ edu }) {
  return (
    <motion.article variants={staggerItem} className="card-glass p-6 hover:border-primary/30 transition-colors duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10 text-primary shrink-0">
          <FiBookOpen size={18} aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-semibold text-white">{edu.institution}</h3>
          <p className="text-primary text-sm font-medium">{edu.degree}</p>
          <p className="text-slate-500 text-xs mt-0.5">{edu.field}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4">
        <span className="flex items-center gap-1.5">
          <FiCalendar size={12} aria-hidden="true" />
          {edu.startDate} — {edu.endDate}
        </span>
        {edu.gpa && (
          <span className="text-emerald-400 font-medium">GPA: {edu.gpa}</span>
        )}
      </div>

      {edu.highlights?.length > 0 && (
        <ul className="space-y-1.5" role="list">
          {edu.highlights.map((h, i) => (
            <li key={i} className="text-sm text-slate-400 flex gap-2">
              <span className="text-primary mt-1.5 shrink-0" aria-hidden="true">▸</span>
              {h}
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}

function CertCard({ cert }) {
  return (
    <motion.article variants={staggerItem} className="card-glass p-5 flex items-start gap-4 hover:border-primary/30 transition-colors duration-300">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-accent/10 text-accent shrink-0">
        <FiAward size={16} aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-white text-sm leading-snug">{cert.name}</h3>
        <p className="text-slate-500 text-xs mt-1">{cert.issuer}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-slate-600">{cert.date}</span>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-primary hover:text-primary-light transition-colors"
            aria-label={`View credential for ${cert.name}`}
          >
            <FiExternalLink size={11} aria-hidden="true" />
            Credential
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Education() {
  return (
    <SectionWrapper id="education" className="border-t border-surface-border">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <SectionHeader eyebrow="Education" heading="Academic background" />
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {education.map((edu) => (
              <EducationCard key={edu.id} edu={edu} />
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div>
          <SectionHeader eyebrow="Certifications" heading="Verified credentials" />
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {certifications.map((cert) => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
