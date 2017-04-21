import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', ['development']);
gulp.task('development', done => {
  runSequence(
    'clean',
    'css:watch',
    done
  );
});

gulp.task('production', done => {
  runSequence(
    'clean',
    'css:compress',
    done
  );
});