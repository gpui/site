import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth:
    import.meta.env.GITHUB_PERSONAL_ACCESS_TOKEN ||
    // Typoed version. We can remove if no one is relying on it.
    import.meta.env.GIHUB_PERSONAL_ACCESS_TOKEN,
});
