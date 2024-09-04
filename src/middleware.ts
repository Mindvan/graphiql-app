import createMiddleware from 'next-intl/middleware';
import { routing } from '@/features/localeSwitcher/config/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
