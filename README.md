This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Dev Journal

### May 31, 2025

- Add storage of reflections and ai generated insight for lectio divina feature
- TODO: have BiblePassage correctly cache one scripture passage a day, to be used consistently across all pages. Dark mode toggle, responsive navbar. Add tests
- QUESTIONS: Is there a way to have the user select the words in the passage by clicking on them in the Lectio step?

### May 29, 2025

- Added tests
- TIL: Jest does not support async Server Components

### May 28, 2025

- Adding more pages for Lectio Divina feature

### May 27, 2025

- Continuing to experiment with caching. Initial work for lectio divina feature. Move BiblePassage into components folder

### May 26, 2025

- Still fiddling with caching. May need to set something up with redis?

### May 24, 2025

- Trying to figure out caching in server components for MVP

### May 20, 2025

- Set up gpt api keys and tested sample response
- TODO: Use gpt-4.1-mini to pick scripture verse and reflection of the day
- QUESTIONS: Can you shape the response of the api? e.g. verse, text, reflection

### May 19, 2025

- Use react-icons
- Deployed to Vercel
- Implemented initial version of Scripture page

### May 15, 2025

- Turn FeatureCards into components

### May 14, 2025

- Modifications to navbar
- Added initial version of landing page
- Added additional routes

### May 13, 2025

- Added footer and navigation
- Added routing
- Added shadcn/ui

### April 11, 2025

- Project initialization
