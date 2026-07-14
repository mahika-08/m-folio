/**
 * Renders the eyebrow label + heading for each portfolio section.
 */
export default function SectionHeader({ eyebrow, heading, className = '' }) {
  return (
    <header className={`mb-12 ${className}`}>
      <p className="section-label">{eyebrow}</p>
      <h2 className="section-heading">{heading}</h2>
    </header>
  );
}
