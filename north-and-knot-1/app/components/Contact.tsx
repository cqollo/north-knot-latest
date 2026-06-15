'use client';
import { useState, FormEvent } from 'react';

const enquiryTypes = ['New commission', 'Repair / restoration', 'General enquiry', 'Press / collaboration'];
const budgets = ['Under KES 50,000', 'KES 50,000 – 150,000', 'KES 150,000 – 400,000', 'KES 400,000+'];

const contactDetails = [
  { label: 'Email', value: 'hello@northandknot.co.ke', href: 'mailto:hello@northandknot.co.ke' },
  { label: 'Phone / WhatsApp', value: '+254 700 123 456', href: 'tel:+254700123456' },
  { label: 'Workshop', value: 'Industrial Area, Nairobi\nVisits by appointment only', href: null },
];

const socialLinks = [
  { label: 'Instagram', short: 'IG', href: '#' },
  { label: 'Pinterest', short: 'PT', href: '#' },
  { label: 'Facebook', short: 'FB', href: '#' },
  { label: 'LinkedIn', short: 'LI', href: '#' },
];

type Status = 'idle' | 'sending' | 'success' | 'error';

const fieldStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--ink)',
  border: '1px solid var(--rule)',
  color: 'var(--parch)',
  fontFamily: "'Jost', sans-serif",
  fontWeight: 300,
  fontSize: '0.9rem',
  padding: '0.9rem 1.1rem',
  outline: 'none',
  transition: 'border-color 0.25s ease',
  appearance: 'none' as const,
};

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    enquiryType: '', budget: '', message: '',
  });

  const set = (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }));

  const focus = (e: React.FocusEvent<HTMLElement>) =>
    ((e.target as HTMLElement).style.borderColor = 'var(--gold)');
  const blur = (e: React.FocusEvent<HTMLElement>) =>
    ((e.target as HTMLElement).style.borderColor = 'var(--rule)');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error((await res.json()).error || 'Something went wrong');
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" style={{ padding: '7rem 3rem', borderTop: '1px solid var(--rule)' }}>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '7rem', alignItems: 'start' }}>

        {/* Left — info */}
        <div>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Contact</p>
          <h2 className="section-title" style={{ marginBottom: '1.75rem' }}>
            Start a<br />conversation
          </h2>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--parch-2)', fontWeight: 300, marginBottom: '3.5rem', maxWidth: '38ch' }}>
            Tell us about your space and what you have in mind. We respond to all enquiries within 48 hours.
          </p>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            {contactDetails.map(c => (
              <div key={c.label}>
                <div className="eyebrow" style={{ color: 'var(--parch-3)', marginBottom: '0.5rem' }}>{c.label}</div>
                {c.href ? (
                  <a
                    href={c.href}
                    className="hover-gold"
                    style={{ fontSize: '0.9rem', color: 'var(--parch-2)', textDecoration: 'none', fontWeight: 300 }}
                  >
                    {c.value}
                  </a>
                ) : (
                  <p style={{ fontSize: '0.9rem', color: 'var(--parch-2)', fontWeight: 300, whiteSpace: 'pre-line', lineHeight: 1.65 }}>
                    {c.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Social row */}
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="hover-gold"
                style={{
                  width: '38px', height: '38px',
                  border: '1px solid var(--rule)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.05em',
                  color: 'var(--parch-3)', textDecoration: 'none',
                  transition: 'border-color 0.25s ease, color 0.25s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--rule)')}
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div>
          {status === 'success' ? (
            <div style={{ padding: '3rem', border: '1px solid var(--rule)', background: 'var(--ink-2)' }}>
              <h3 className="serif" style={{ fontSize: '1.75rem', fontWeight: 400, color: 'var(--white)', marginBottom: '1rem' }}>
                Thank you.
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--parch-2)', lineHeight: 1.8, fontWeight: 300 }}>
                Your enquiry has been received. We&apos;ll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {/* Name row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {(['firstName', 'lastName'] as const).map((field, i) => (
                  <div key={field}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }} className="eyebrow">
                      {i === 0 ? 'First name' : 'Last name'}
                    </label>
                    <input
                      required
                      style={fieldStyle}
                      placeholder={i === 0 ? 'Aisha' : 'Mutua'}
                      value={form[field]}
                      onChange={set(field)}
                      onFocus={focus}
                      onBlur={blur}
                    />
                  </div>
                ))}
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }} className="eyebrow">Email address</label>
                <input
                  type="email" required
                  style={fieldStyle}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set('email')}
                  onFocus={focus} onBlur={blur}
                />
              </div>

              {/* Selects */}
              {[
                { field: 'enquiryType', label: 'Enquiry type', options: enquiryTypes, placeholder: 'Select one' },
                { field: 'budget', label: 'Approximate budget', options: budgets, placeholder: 'Select a range' },
              ].map(({ field, label, options, placeholder }) => (
                <div key={field}>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }} className="eyebrow">{label}</label>
                  <select
                    style={{ ...fieldStyle, cursor: 'pointer' }}
                    value={form[field as keyof typeof form]}
                    onChange={set(field)}
                    onFocus={focus} onBlur={blur}
                  >
                    <option value="">{placeholder}</option>
                    {options.map(o => <option key={o} value={o} style={{ background: 'var(--ink-2)' }}>{o}</option>)}
                  </select>
                </div>
              ))}

              {/* Message */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }} className="eyebrow">Tell us about your project</label>
                <textarea
                  rows={5}
                  style={{ ...fieldStyle, resize: 'vertical', minHeight: '130px', lineHeight: 1.7 }}
                  placeholder="Describe the piece, the space, any references you have in mind…"
                  value={form.message}
                  onChange={set('message')}
                  onFocus={focus} onBlur={blur}
                />
              </div>

              {status === 'error' && (
                <p style={{ fontSize: '0.825rem', color: '#d97070', fontWeight: 300 }}>{errorMsg}</p>
              )}

              <div style={{ paddingTop: '0.5rem' }}>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-solid"
                  style={{ border: '1px solid var(--gold)', cursor: status === 'sending' ? 'not-allowed' : 'pointer', opacity: status === 'sending' ? 0.6 : 1, fontFamily: "'Jost', sans-serif" }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact > div { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
        @media (max-width: 480px) {
          #contact { padding: 5rem 1.5rem !important; }
          #contact > div > div:last-child > form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
