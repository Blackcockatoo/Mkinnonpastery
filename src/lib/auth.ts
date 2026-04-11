import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const MEMBER_SESSION_COOKIE = 'mk_membership';

const TRUE_VALUES = new Set(['active', '1', 'true']);

export async function isMemberAuthenticated() {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get(MEMBER_SESSION_COOKIE)?.value?.toLowerCase() ?? '';
  return TRUE_VALUES.has(sessionValue);
}

export async function requireMember() {
  const authenticated = await isMemberAuthenticated();

  if (!authenticated) {
    redirect('/login?next=/dashboard');
  }
}
