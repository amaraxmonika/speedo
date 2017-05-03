
const packager = require('electron-packager');

const platforms = ['osx', 'win32', 'linux', 'darwin']
var build_platform = 'darwin'

// get build platform from command line
if (process.argv.length > 1) {
  if (platforms.indexOf( process.argv[2] )) {
    build_platform = process.argv[2]
  }
}

// make sure if shorthand osx was used
// we convert it to darwin for library call
if (build_platform === 'osx')
  build_platform = 'darwin';

console.log(`building for platform ${build_platform}`)

var opts = {
  'name': 'Speedometer',
  'version': '1.4.3',
  'arch': 'x64',
  'dir': '.',
  'platform': build_platform,
  'app-version': '1.0.0',
  'icon': '',
  'ignore': 'test|build',
  'out': 'build',
  'overwrite': true,
  'asar': false,
  'prune': true
};

packager(opts, function done(err, appPath) {
  if (err) return console.error(err);
  console.log('done');
  console.log(appPath);
});
