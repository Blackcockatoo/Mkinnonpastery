import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { MEMBER_SESSION_COOKIE, isMemberAuthenticated } from '@/lib/auth';

async function login(formData: FormData) {
  'use server';

  const secret = formData.get('secret');
  const nextPath = (formData.get('next') as string) || '/dashboard';

  if (typeof secret !== 'string' || secret !== process.env.MEMBERS_ACCESS_CODE) {
    redirect('/login?error=invalid');
  }

  const cookieStore = await cookies();
  cookieStore.set(MEMBER_SESSION_COOKIE, 'active', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect(nextPath);
}

export default async function LoginPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  if (await isMemberAuthenticated()) {
    redirect('/dashboard');
  }

  const params = await searchParams;
  const nextPath = typeof params.next === 'string' ? params.next : '/dashboard';
  const error = params.error === 'invalid';

  return (
    <main className="member-shell">
      <section className="member-card">
        <p className="member-eyebrow">Members</p>
        <h1>Sign in</h1>
        <p>Use your member access code to unlock the dashboard and protected pages.</p>
        {error ? <p className="member-warning">Invalid access code. Please try again.</p> : null}
        <form action={login} className="member-form">
          <label htmlFor="secret">Access code</label>
          <input id="secret" name="secret" type="password" required />
          <input type="hidden" name="next" value={nextPath} />
          <button className="button button-primary" type="submit">Sign in</button>
        </form>
      </section>
    </main>
  );
}
