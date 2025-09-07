# cormaclynchcollier.com

Source code for cormaclynchcollier.com

## Scripts

* Run locally: `npm run dev`
* Linting: `npm run lint`
* Testing: `npm run test`

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

## Deploying updates to 