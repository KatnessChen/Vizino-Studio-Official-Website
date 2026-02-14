import { next } from '@vercel/edge';

export default function middleware(request: Request) {
  const url = new URL(request.url);

  // Only redirect root path '/'
  if (url.pathname === '/') {
    // Check for country in headers (Vercel specific)
    const country = request.headers.get('x-vercel-ip-country');
    
    // Default to 'en'
    let locale = 'en';
    
    // Redirect to 'zh-tw' if country is Taiwan
    if (country === 'TW') {
      locale = 'zh-tw';
    }

    // Redirect to the locale path
    url.pathname = `/${locale}`;
    return Response.redirect(url, 307);
  }

  return next();
}
