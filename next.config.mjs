/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Change the output directory `out` -> `dist`
  distDir: 'dist',

  // necessary for static site generation (for s3 hosting)
  images: {
    unoptimized: true,
  },
};
 
export default nextConfig;