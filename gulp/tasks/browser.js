var gulp = require("gulp");
var browserSync = require("browser-sync");
var config = require("../config").browser;
gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: config.dir, //対象ディレクトリ
      index: "index.html" //インデックスファイル
    },
    notify: false
  });
});

gulp.task("bs-reload", function() {
  browserSync.reload();
});
