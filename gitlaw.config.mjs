import all from 'git-law/configs/all';

/** @type {import('git-law').Configuration} */
const config = {
  github: {
    token: process.env.GITHUB_TOKEN,
  },
  configs: [...all],
};

export { config };

