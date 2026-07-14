import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from '../../utils/icons.jsx';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
import { projects } from '../../data/projects';
import { staggerContainer, staggerItem, viewport } from '../../utils/animations';

const ALL = 'All';

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      variants={staggerItem}
      className="card-glass overflow-hidden group flex flex-col hover:border-primary/30 transition-colors duration-300"
    >
      {/* Screenshot */}
      <div className="relative overflow-hidden aspect-video bg-surface-raised">
        <img
          src={project.screenshot}
          alt={`${project.title} screenshot`}
          loading="lazy"
          width={800}
          height={450}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur
                       text-white hover:bg-primary/60 transition-colors border border-white/20"
          >
            <FiGithub size={16} />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur
                         text-white hover:bg-primary/60 transition-colors border border-white/20"
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-white text-base mb-2">{project.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-3 border-t border-surface-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-primary transition-colors"
          >
            <FiGithub size={14} aria-hidden="true" />
            Source
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-primary transition-colors"
            >
              <FiExternalLink size={14} aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState(ALL);

  // Derive unique filter tags from all projects
  const allTags = useMemo(() => {
    const tags = new Set(projects.flatMap((p) => p.tags));
    return [ALL, ...Array.from(tags)];
  }, []);

  const filtered = useMemo(
    () => (activeTag === ALL ? projects : projects.filter((p) => p.tags.includes(activeTag))),
    [activeTag]
  );

  const handleFilter = useCallback((tag) => setActiveTag(tag), []);

  return (
    <SectionWrapper id="projects" className="border-t border-surface-border">
      <SectionHeader eyebrow="Projects" heading="Things I've built" />

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects by technology">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleFilter(tag)}
            aria-pressed={activeTag === tag}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              activeTag === tag
                ? 'bg-primary text-white'
                : 'bg-surface-raised text-slate-400 hover:text-white hover:bg-surface-border border border-surface-border'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTag}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewport}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
