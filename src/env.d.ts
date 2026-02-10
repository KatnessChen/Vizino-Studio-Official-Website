/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_FORMSPREE_ID?: string;
  // add other public env vars here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}