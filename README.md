# GPUI

A fast, productive UI framework for Rust from the creators of [Zed](https://zed.dev).

This site is built with [Astro](https://astro.build).

## Running locally

The list of contributors is fetched from the GitHub API at build time. Without a
token you may hit GitHub's unauthenticated rate limit (the build still succeeds,
but the contributors list may be empty).

- Provide a GitHub token via a `.env` file (or your environment):

  ```
  GITHUB_PERSONAL_ACCESS_TOKEN=your_token_here
  ```

  Alternatively, if you use Vercel, you can pull the env variables down:

  - Link the project with Vercel: `pnpm dlx vercel link`
  - Pull down env variables from Vercel: `pnpm dlx vercel env pull`

- Install dependencies: `pnpm install`
- Run the dev server: `pnpm dev`
- Build for production: `pnpm build`
- Preview the production build: `pnpm preview`
