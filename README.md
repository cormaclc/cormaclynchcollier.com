# cormaclynchcollier.com

Source code for cormaclynchcollier.com.

## Local Development

* To run the app locally execute `npm run dev` in the console.
* To run lint checks execute `npm run lint` in the console.
* Test support is "configured" although none exist. To run the tests execute `npm run test` in the console.

## Deploying Changes

1. Build the application: `npm run build`. This will generate the built application under `dist/`.
2. Upload the contents of `dist/` to the S3 bucket hosting the site.

## Folder Structure

* `/src` contains all source code, styling, content, etc
  * `/src/pages` contains the page components
  * `/src/components/` contains additional components
    * note: any components requiring their own `scss` should be given their own folder (i.e. `src/components/footer` contains the `Footer.tsx` and `Footer.scss` files)
  * `src/content` contains the raw content displayed on the site in the form of ts constaints
    * note: not all content is maintained here, just content that may require frequent updates
  * `/src/types` contains any shared types  
* `/public` contains all assets (pdf, images, etc)
  * `/public/images/` contains any images used on the site
  * `/public/documents/` contains any documents accessible via the site (e.g. resume)