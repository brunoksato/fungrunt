module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        //compact format
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'

        //Files object Format
        // files:[
        //   { src: ['src/**/*.js'], dest: dest: 'dist/<%= pkg.name %>.js'}
        //   { src: ['src/*.js'], dest: dest: 'dist/<%= pkg.name %>.js'},
        //   { src: ['src/*.js', '!src/menu.js'], dest: dest: 'dist/<%= pkg.name %>.js'}
        // ]
        }
      }
    }
  });


  //Loading plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  //Task Lists
  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};