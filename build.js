({
    baseUrl: '.',
    include: ['lib/almond', 'docson'],
    // paths: {
    //     jquery: 'lib/jquery',
    // }
    out: 'docson-built.js',
    shim: {
        'lib/jquery': {
            exports: 'jQuery',
        },
        'lib/handlebars': {
            exports: 'Handlebars',
        },
    }
});
