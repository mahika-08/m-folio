import {
  FiGithub, FiLinkedin, FiTwitter, FiMail,
  FiExternalLink, FiMonitor, FiServer, FiDatabase,
  FiCloud, FiTool, FiCode, FiMenu, FiX, FiDownload,
  FiArrowRight, FiMapPin, FiCalendar, FiBriefcase,
  FiAward, FiBookOpen,
} from 'react-icons/fi';

const iconMap = {
  FiGithub, FiLinkedin, FiTwitter, FiMail,
  FiExternalLink, FiMonitor, FiServer, FiDatabase,
  FiCloud, FiTool, FiCode, FiMenu, FiX, FiDownload,
  FiArrowRight, FiMapPin, FiCalendar, FiBriefcase,
  FiAward, FiBookOpen,
  // Cert icon aliases (fallback to FiAward)
  SiAmazonaws: FiAward,
  SiKubernetes: FiAward,
  SiGooglecloud: FiAward,
};

/**
 * Resolves an icon name string to a React component.
 * Falls back to a neutral placeholder if the icon isn't found.
 */
export function resolveIcon(name, props = {}) {
  const Icon = iconMap[name];
  if (!Icon) return <span aria-hidden="true" className="w-5 h-5 inline-block" />;
  return <Icon {...props} />;
}

// Named re-exports for direct import convenience
export {
  FiGithub, FiLinkedin, FiTwitter, FiMail,
  FiExternalLink, FiMenu, FiX, FiDownload,
  FiArrowRight, FiMapPin, FiCalendar, FiBriefcase,
  FiAward, FiBookOpen,
};
