var gulp = require('gulp');
var exec = require('child_process').exec;
var dtsGenerator = require('dts-generator');
var gulpSequence = require('gulp-sequence');

var appName = (function (p) {
  return p.name;
})(require('./package.json'));

gulp.task('build', gulpSequence('compile', 'definition'));

gulp.task('compile', function (cb) {
  exec('tsc --version', function (err, stdout, stderr) {
    console.log('TypeScript ', stdout);
    if (stderr) {
      console.log(stderr);
    }
  });

  return exec('tsc', function (err, stdout, stderr) {
    console.log(stdout);
    if (stderr) {
      console.log(stderr);
    }
    cb(err);
  });
});

gulp.task('definition', function(cb) {
    return dtsGenerator.default({
        name: appName,
        project: '.',
        out: './lib/index.d.ts',
        exclude: ['node_modules/**/*.d.ts', 'typings/**/*.d.ts']
    });
});
