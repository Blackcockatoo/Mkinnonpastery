'use client';

import { FormEvent, useState } from 'react';

type Status = { type: 'idle' | 'error' | 'success'; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: 'idle', message: '' });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
      setStatus({ type: 'error', message: 'Please complete the required fields.' });
      return;
    }

    setSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      if (!response.ok) {
        const json = (await response.json()) as { error?: string };
        throw new Error(json.error ?? 'Unable to submit enquiry.');
      }

      setStatus({ type: 'success', message: 'Thanks — Mark will get back to you soon.' });
      form.reset();
      window.dispatchEvent(new CustomEvent('analytics', { detail: { event: 'contact_submit_success' } }));
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Submission failed.' });
      window.dispatchEvent(new CustomEvent('analytics', { detail: { event: 'contact_submit_failure' } }));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" hidden />
      <input
        name="name"
        type="text"
        placeholder="Your name"
        required
        onFocus={() => window.dispatchEvent(new CustomEvent('analytics', { detail: { event: 'contact_form_started' } }))}
      />
      <input name="email" type="email" placeholder="Email" required />
      <input name="business" type="text" placeholder="Business / Bakery" />
      <textarea name="message" placeholder="How can Mark help?" required />
      <button className="button button-primary" type="submit" disabled={submitting}>
        {submitting ? 'Sending...' : 'Send enquiry'}
      </button>
      <p className="form-status" aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}
