import { useState, useEffect, useRef } from 'react';

/**
 * Tracks which section is currently in view as the user scrolls.
 * @param {string[]} sectionIds - Array of section element IDs to observe
 * @param {number} rootMargin - IntersectionObserver root margin offset
 * @returns {string} - The ID of the currently active section
 */
export function useScrollSpy(sectionIds, rootMargin = '-40% 0px -55% 0px') {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const observerRef = useRef(null);

  useEffect(() => {
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}
