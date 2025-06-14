import { format, formatDistance, formatRelative, subDays } from "date-fns";

import type { getOctokit } from "@actions/github";
import type { context as ContextType } from "@actions/github";
import type * as Core from "@actions/core";

// 型を定義しておくと開発が楽になります
type GitHub = ReturnType<typeof getOctokit>;
type Context = typeof ContextType;

export default async ({
  github,
  context,
  core,
}: {
  github: GitHub;
  context: Context;
  core: typeof Core;
}) => {
  core.info("✨ This script is written in TypeScript!");

  // lodashを使った例
  const dateDistance = formatDistance(subDays(new Date(), 3), new Date(), {
    addSuffix: true,
  });
  //=> "3 days ago"
  core.info(`Date distance: ${dateDistance}`);

  // contextオブジェクトの利用例
  const { owner, repo } = context.repo;
  core.info(`Running on repository: ${owner}/${repo}`);

  // 必要であればGitHub APIを呼び出す
  // const issue = await github.rest.issues.get({ ... });
};
