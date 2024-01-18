import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth:
    process.env.GITHUB_PERSONAL_ACCESS_TOKEN ||
    // Typoed version. We can remove if no one is relying on it.
    process.env.GIHUB_PERSONAL_ACCESS_TOKEN,
});
