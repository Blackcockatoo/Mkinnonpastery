'use client';

import { FormEvent, useEffect, useState } from 'react';

type Status = { type: 'idle' | 'error' | 'success'; message: string };

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>({ type: 'idle', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [startedAt, setStartedAt] = useState('');

  useEffect(() => {
    setStartedAt(new Date().toISOString());
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!formData.get('email') || !formData.get('baker_type') || !formData.get('experience_level') || !formData.get('top_challenge')) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    if (!formData.get('consent')) {
      setStatus({ type: 'error', message: 'Please confirm consent to receive launch updates.' });
      return;
    }

    setSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      if (!response.ok) {
        const json = (await response.json()) as { error?: string };
        throw new Error(json.error ?? 'Unable to join waitlist.');
      }

      setStatus({ type: 'success', message: 'You are on the list — we will email your early-access invite details soon.' });
      form.reset();
      setStartedAt(new Date().toISOString());
      window.dispatchEvent(new CustomEvent('analytics', { detail: { event: 'waitlist_submit_success' } }));
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Waitlist signup failed.' });
      window.dispatchEvent(new CustomEvent('analytics', { detail: { event: 'waitlist_submit_failure' } }));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form waitlist-form" onSubmit={onSubmit}>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" hidden />
      <input type="text" name="first_name" tabIndex={-1} autoComplete="off" aria-hidden="true" hidden />
      <input type="hidden" name="form_started_at" value={startedAt} />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        onFocus={() => window.dispatchEvent(new CustomEvent('analytics', { detail: { event: 'waitlist_form_started' } }))}
      />

      <select name="baker_type" required defaultValue="">
        <option value="" disabled>What type of baker are you?</option>
        <option value="home_baker">Home baker</option>
        <option value="micro_bakery_owner">Micro bakery owner</option>
        <option value="pastry_professional">Pastry professional</option>
        <option value="bakery_team_lead">Bakery team lead</option>
        <option value="culinary_student">Culinary student</option>
      </select>

      <select name="experience_level" required defaultValue="">
        <option value="" disabled>Experience level</option>
        <option value="0_2_years">0-2 years</option>
        <option value="3_5_years">3-5 years</option>
        <option value="6_10_years">6-10 years</option>
        <option value="10_plus_years">10+ years</option>
      </select>

      <textarea
        name="top_challenge"
        placeholder="Top launch challenge (e.g. product consistency, prep scheduling, margin control)"
        required
      />

      <label className="consent-check">
        <input name="consent" type="checkbox" value="yes" required />
        <span>I agree to receive early-access launch updates and monthly bakery planning emails from Mark McKinnon. I can unsubscribe anytime.</span>
      </label>

      <button className="button button-primary" type="submit" disabled={submitting}>
        {submitting ? 'Joining...' : 'Join launch waitlist'}
      </button>
      <p className="form-status" aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}
