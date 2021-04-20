import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
  id: 'main',
  name: 'Main library',
  global: 'Guilded',
  repo: 'WilsontheWolf/guildscript-test',
  defaultTag: 'master',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
});
