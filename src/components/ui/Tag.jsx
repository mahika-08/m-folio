/**
 * Small pill badge used for technology tags on project and experience cards.
 */
export default function Tag({ children, className = '' }) {
  return (
    <span className={`tag-pill ${className}`}>
      {children}
    </span>
  );
}
