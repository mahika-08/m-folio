import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import { resolveIcon, FiMail, FiMapPin } from '../../utils/icons.jsx';
import { config } from '../../data/config';
import { socials } from '../../data/socials';
import { staggerContainer, staggerItem, viewport } from '../../utils/animations';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

function InputField({ label, id, type = 'text', required, value, onChange, placeholder, multiline }) {
  const sharedClass =
    'w-full bg-surface-raised border border-surface-border rounded-xl px-4 py-3 text-sm text-slate-200 ' +
    'placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 ' +
    'transition-colors duration-200';

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1.5">
        {label} {required && <span className="text-primary" aria-hidden="true">*</span>}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          required={required}
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${sharedClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={sharedClass}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setStatus('sending');
      // Replace this with your actual form submission logic (e.g. Formspree, Netlify Forms, custom API)
      await new Promise((res) => setTimeout(res, 1200));
      setStatus('success');
      setForm(INITIAL_FORM);
    },
    []
  );

  const contactInfo = [
    { icon: 'FiMail', label: 'Email', value: config.email, href: `mailto:${config.email}` },
    { icon: 'FiMapPin', label: 'Location', value: config.location, href: null },
  ];

  return (
    <SectionWrapper id="contact" className="border-t border-surface-border">
      <SectionHeader eyebrow="Contact" heading="Let's work together" />

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Left: info + socials */}
        <motion.div
          className="lg:col-span-2 space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p variants={staggerItem} className="text-slate-400 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision. 
          </motion.p>

          <motion.div variants={staggerItem} className="space-y-3">
            {contactInfo.map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-3 text-slate-400">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {resolveIcon(icon, { size: 16 })}
                </div>
                <div>
                  <p className="text-xs text-slate-600 uppercase tracking-wide">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={staggerItem}>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Find me online
            </p>
            <div className="flex gap-3">
              {socials.map(({ id, label, href, icon }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-raised
                             border border-surface-border text-slate-400 hover:text-primary
                             hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  {resolveIcon(icon, { size: 17 })}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={viewport}
        >
          {status === 'success' ? (
            <div className="card-glass p-10 text-center">
              <div className="text-5xl mb-4" aria-hidden="true">✅</div>
              <h3 className="text-xl font-semibold text-white mb-2">Message sent!</h3>
              <p className="text-slate-400 text-sm">
                Thanks for reaching out.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 btn-outline text-sm py-2"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card-glass p-6 md:p-8 space-y-5"
              aria-label="Contact form"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField
                  label="Name"
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                />
                <InputField
                  label="Email"
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                />
              </div>
              <InputField
                label="Subject"
                id="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project inquiry, collaboration, etc."
              />
              <InputField
                label="Message"
                id="message"
                required
                multiline
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <span
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                      aria-hidden="true"
                    />
                    Sending…
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="text-xs text-slate-600 text-center">
                I'll get back to you within 24 hours. Prefer email?{' '}
                <a href={`mailto:${config.email}`} className="text-primary hover:underline">
                  {config.email}
                </a>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
