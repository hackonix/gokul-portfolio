import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { socialLinks } from '../data/achievements';

const FORM_INITIAL = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(FORM_INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [ref, inView] = useInView({ threshold: 0.1 });

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 10) errs.message = 'Message too short';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      setForm(FORM_INITIAL);
    } catch {
      setStatus('error');
    }
  };

  const contactChannels = [
    {
      icon: <MailIcon />,
      label: 'Email',
      value: socialLinks.email,
      href: socialLinks.email.includes('[ADD') ? '#' : `mailto:${socialLinks.email}`,
      color: '#f97316',
    },
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      value: socialLinks.github,
      href: socialLinks.github.includes('[ADD') ? '#' : socialLinks.github,
      color: '#3b82f6',
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      value: socialLinks.linkedin,
      href: socialLinks.linkedin.includes('[ADD') ? '#' : socialLinks.linkedin,
      color: '#22d3ee',
    },
  ];

  return (
    <section id="contact" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-label mb-3">Contact</p>
          <h2 className="section-heading text-[#f8fafc]">
            Let's Build Something <span className="text-gradient-blue">Intelligent.</span>
          </h2>
          <p className="mt-4 text-[#94a3b8] max-w-xl text-sm">
            Open to collaborations, project discussions, hackathons, and conversations about robotics and embedded systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — links */}
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-4 mb-8">
              {contactChannels.map(({ icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl card-surface hover:border-[#3b82f6]/30 hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-[#94a3b8] mb-0.5">{label}</div>
                    <div className="text-sm text-[#f8fafc] font-medium">{value}</div>
                  </div>
                  <svg className="w-4 h-4 text-[#1e2d45] group-hover:text-[#3b82f6] ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Note */}
            <div className="p-4 rounded-xl bg-[#0d1526]/60 border border-[#1e2d45]/60">
              <p className="text-xs text-[#94a3b8] font-mono leading-relaxed">
                // Response time typically within 48 hours.<br />
                // Open to: collaborations, mentorship, projects, robotics discussions.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs text-[#94a3b8] mb-1.5 font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-lg bg-[#0d1526] border text-[#f8fafc] text-sm placeholder-[#475569] focus:outline-none focus:border-[#3b82f6] transition-colors ${
                    errors.name ? 'border-red-500/60' : 'border-[#1e2d45]'
                  }`}
                  autoComplete="name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-[#94a3b8] mb-1.5 font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-lg bg-[#0d1526] border text-[#f8fafc] text-sm placeholder-[#475569] focus:outline-none focus:border-[#3b82f6] transition-colors ${
                    errors.email ? 'border-red-500/60' : 'border-[#1e2d45]'
                  }`}
                  autoComplete="email"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-[#94a3b8] mb-1.5 font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about what you'd like to discuss or collaborate on..."
                  className={`w-full px-4 py-3 rounded-lg bg-[#0d1526] border text-[#f8fafc] text-sm placeholder-[#475569] focus:outline-none focus:border-[#3b82f6] transition-colors resize-none ${
                    errors.message ? 'border-red-500/60' : 'border-[#1e2d45]'
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  status === 'sending'
                    ? 'bg-[#3b82f6]/50 text-[#93c5fd] cursor-not-allowed'
                    : 'bg-[#3b82f6] text-white hover:bg-[#2563eb] hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
                }`}
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#93c5fd]/40 border-t-[#93c5fd] rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>

              {/* Feedback */}
              {status === 'success' && (
                <div className="p-4 rounded-lg bg-[#34d399]/10 border border-[#34d399]/30 text-[#34d399] text-sm text-center">
                  ✓ Message sent! I'll reply within 48 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                  Failed to send. Please email me directly at [ADD_EMAIL].
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
