let mix = require('laravel-mix');

mix.setPublicPath('project');
mix.setResourceRoot('../');
mix
    .js('src/js/Boot.js', 'project/js/boot.js')
    .js('src/js/main.js', 'project/js/main.js')
    .sass('src/scss/public/public.scss', 'project/css/public.css');