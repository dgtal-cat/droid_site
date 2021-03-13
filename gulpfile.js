function defaultTask(cb) {
    let gutil = require("gulp-util");
    let webpack = require("webpack");
    cb();
}

exports.default = defaultTask