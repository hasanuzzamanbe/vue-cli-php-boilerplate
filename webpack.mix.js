let mix = require('laravel-mix');

mix.setPublicPath('project');
mix.setResourceRoot('../');
mix
    .js('src/js/Boot.js', 'project/builds/js/boot.js')
    .js('src/js/main.js', 'project/builds/js/main.js')
    .sass('src/scss/public/public.scss', 'project/builds/css/public.css');