import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth: process.env.GIHUB_PERSONAL_ACCESS_TOKEN,
});
