module.exports = {
    img: {
        expand: true,
        cwd: 'src/<%= project %>/img/',
        src: '**',
        dest: 'dist/<%= project %>/img/',
        flatten: true,
        filter: 'isFile'
    },
    js: {
        files: {
            'dist/<%= project %>/js/app.js': 'src/<%= project %>/tmp/app.js'
        }
    }
};
