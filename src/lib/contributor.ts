import { octokit } from "./octokit";

type RawContributor = {
  login?: string;
  avatar_url?: string;
  html_url?: string;
};

export type Contributor = {
  handle: string;
  avatar: string;
  url: string;
};

export const get_contributors = async (): Promise<Contributor[]> => {
  const response = await octokit.rest.repos.listContributors({
    owner: "zed-industries",
    repo: "zed",
  });

  return response.data.filter(isValidContributor).map(toContributor);
};

const isValidContributor = (contributor: RawContributor): boolean => {
  return (
    !!contributor.login && !!contributor.avatar_url && !!contributor.html_url
  );
};

const toContributor = (contributor: RawContributor): Contributor => ({
  handle: contributor.login!,
  avatar: contributor.avatar_url!,
  url: contributor.html_url!,
});
