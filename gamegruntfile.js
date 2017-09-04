module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
		stripBanners: true
      },
      production: {
        src: ['jsdev/*.js'],
		dest: 'js/main.js'        
      }
    },
	uglify: {
		build: {
			src: 'js/main.js',
			dest: 'js/main.min.js'
		}
	},
	
	imagemin: {
		dynamic: {
			files: [{
				expand: true,
				src: ['assetsdev/image/*.{png,jpg,gif}'],
				dest: 'assets/image/'
			}]
		}
	},
			  
	clean: {
		fatjs: ['js/*.js', '!js/*.min.js']
	},
	sprite:{
      all: {
        src: 'assetsdev/image/*.png',
        dest: 'assets/image/spritesheet.png',
        destCss: 'assets/image/spritesheet.css'
      }
	},
	
	copy: {
	  jsfrombower: {
		src: ['bower_components/create-js/EaselJS/lib/easeljs-0.8.2.combined.js', 'bower_components/create-js/PreloadJS/lib/preloadjs-0.6.2.combined.js', 'bower_components/create-js/SoundJS/lib/soundjs-0.6.2.combined.js',
			  'bower_components/keypress/keypress-2.1.4.min.js'],
		dest: 'jsdev/',
		flatten: true,
		expand: true,
		filter: 'isFile'
	  }
	}
  }); // The end of grunt.initConfig
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-spritesmith');
  
  
  // Register our own custom task alias.
  grunt.registerTask('buildproduction', ['imagemin', 'concat:production', 'uglify', 'clean:fatjs']);
  grunt.registerTask('builddevelopment',  'concat');
  grunt.registerTask('pullfrombower', ['copy:jsfrombower']);
};