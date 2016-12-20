({
    baseUrl: '.',
    include: ['lib/almond', 'docson'],
    preserveLicenseComments: false,
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
