var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      compass: {
        files: ['src/styles/**'],
        tasks: ['compass']
      },
      pages: {
        files: ['src/pages/**', 'posts/**', 'src/layouts/**'],
        tasks: ['pages']
      },
      copy: {
        files: ['src/images/**', 'src/styles/**.css', 'src/styles/fonts/**', 'src/scripts/**'],
        tasks: ['copy']
      }
    },
    pages: {
      options: {
        pageSrc: 'src/pages'
      },
      posts: {
        src: 'posts',
        dest: 'dist',
        layout: 'src/layouts/post.jade',
        url: function (post, options) {
          return 'blog/posts/' + options.formatPostUrl(post.title) + '.html';
        },
        options: {
          templateEngine: 'jade',
          pagination: {
            postsPerPage: 3,
            listPage: 'src/pages/index.jade'
          },
          // Test using a different post url format
          formatPostUrl: function (urlSegment) {
            return urlSegment.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-');
          }
        }
      }
    },
    connect: {
      dist: {
        options: {
          port: 9000,
          hostname: '0.0.0.0',
          base: ['dist', 'src'],
        }
      }
    },
    open: {
      dist: {
        path: 'http://localhost:9000'
      }
    },
    clean: {
      dist: 'dist'
    },
    compass: {
      options: {
        sassDir: 'src/styles',
        cssDir: 'dist/styles'
      },
      dist: {}
    },
    // Move files not handled by other tasks
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src',
          dest: 'dist',
          src: [
            'images/**',
            'styles/**.css',
            'styles/fonts/**',
            'scripts/**',
            'googleb770c1ae2228297c.html'
          ]
        }]
      }
    },
    // Minify the css files
    cssmin: {
        dist: {
          expand: true,
          cwd: 'dist/styles/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/styles/',
          ext: '.css'
        }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'compass',
    'pages',
    'copy',
    'cssmin'
  ]);

  grunt.registerTask('server', [
    'build',
    'connect',
    'open',
    'watch'
  ]);

  grunt.registerTask('default', 'server');
};
