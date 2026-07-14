import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import { resolveIcon } from '../../utils/icons.jsx';
import { skillCategories } from '../../data/skills';
import { staggerContainer, staggerItem, viewport } from '../../utils/animations';

function SkillBar({ level }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-all duration-500 ${
            i < level ? 'bg-gradient-primary' : 'bg-surface-border'
          }`}
        />
      ))}
    </div>
  );
}

function SkillCard({ category }) {
  return (
    <motion.article
      variants={staggerItem}
      className="card-glass p-6 hover:border-primary/30 transition-colors duration-300 group"
    >
      {/* Card header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.color}`}
          style={{ color: category.accent }}
          aria-hidden="true"
        >
          {resolveIcon(category.icon, { size: 18 })}
        </div>
        <h3 className="font-semibold text-white">{category.label}</h3>
      </div>

      {/* Skills list */}
      <ul className="space-y-3" role="list">
        {category.skills.map(({ name, level }) => (
          <li key={name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-slate-300">{name}</span>
              <span className="sr-only">{level} out of 5</span>
            </div>
            <SkillBar level={level} />
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="border-t border-surface-border">
      <SectionHeader eyebrow="Skills" heading="Technologies I work with" />

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {skillCategories.map((cat) => (
          <SkillCard key={cat.id} category={cat} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
