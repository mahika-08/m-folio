import { resolveIcon } from '../../utils/icons.jsx';
import { config } from '../../data/config';
import { socials } from '../../data/socials';
import { NAV_ITEMS } from '../../constants/nav';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface-card" role="contentinfo">
      <div className="container-max px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Connect
            </p>
            <ul className="flex gap-3" role="list">
              {socials.map(({ id, label, href, icon }) => (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-raised
                               border border-surface-border text-slate-400 hover:text-primary
                               hover:border-primary/40 transition-colors"
                  >
                    {resolveIcon(icon, { size: 16 })}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-border pt-6 text-center text-xs text-slate-600">
          <p>
            ©  Build by {config.name}. .
          </p>
        </div>
      </div>
    </footer>
  );
}
