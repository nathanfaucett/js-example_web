var vfs = require("vinyl-fs"),
    webpack = require("webpack-stream"),
    sourcemaps = require("gulp-sourcemaps")
    path = require("@nathanfaucett/file_path"),
    named = require("vinyl-named"),
    fileUtils = require("@nathanfaucett/file_utils");


module.exports = function(config) {
    return function compile() {
        return vfs.src(config.paths.js_src)
            .pipe(named())
            .pipe(webpack())
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(vfs.dest(path.dir(config.paths.js_out)));
    }
};
