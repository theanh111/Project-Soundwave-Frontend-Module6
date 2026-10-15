const { spawnSync } = require('child_process');

const args = [];
if (Number(process.versions.node.split('.')[0]) >= 17) {
  args.push('--openssl-legacy-provider');
}

args.push(require.resolve('@angular/cli/bin/ng'), ...process.argv.slice(2));

const result = spawnSync(process.execPath, args, { stdio: 'inherit' });

if (result.error) {
  throw result.error;
}

process.exit(result.status === null ? 1 : result.status);
