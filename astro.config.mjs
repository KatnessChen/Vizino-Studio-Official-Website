import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://vizino-studio.vercel.app',
  output: 'static',
  integrations: [react()],
});
