module.exports = function(grunt) {
	grunt.initConfig({
		
		concat: {
			// Concat all foundation files from bower components into one js file
			foundation_concat: {
				src: [
					'bower_components/foundation-sites/js/foundation.core.js',
					'bower_components/foundation-sites/js/foundation.util.mediaQuery.js',
					'bower_components/foundation-sites/js/foundation.util.box.js',
					'bower_components/foundation-sites/js/foundation.util.keyboard.js',
					'bower_components/foundation-sites/js/foundation.util.motion.js',
					'bower_components/foundation-sites/js/foundation.util.nest.js',
					'bower_components/foundation-sites/js/foundation.util.timerAndImageLoader.js',
					'bower_components/foundation-sites/js/foundation.util.touch.js',
					'bower_components/foundation-sites/js/foundation.util.triggers.js',
					'bower_components/foundation-sites/js/foundation.abide.js',
					'bower_components/foundation-sites/js/foundation.accordion.js',
					'bower_components/foundation-sites/js/foundation.accordionMenu.js',
					'bower_components/foundation-sites/js/foundation.drilldown.js',
					'bower_components/foundation-sites/js/foundation.dropdown.js',
					'bower_components/foundation-sites/js/foundation.dropdownMenu.js',
					'bower_components/foundation-sites/js/foundation.equalizer.js',
					'bower_components/foundation-sites/js/foundation.interchange.js',
					'bower_components/foundation-sites/js/foundation.magellan.js',
					'bower_components/foundation-sites/js/foundation.offcanvas.js',
					'bower_components/foundation-sites/js/foundation.orbit.js',
					'bower_components/foundation-sites/js/foundation.responsiveMenu.js',
					'bower_components/foundation-sites/js/foundation.responsiveToggle.js',
					'bower_components/foundation-sites/js/foundation.reveal.js',
					'bower_components/foundation-sites/js/foundation.slider.js',
					'bower_components/foundation-sites/js/foundation.sticky.js',
					'bower_components/foundation-sites/js/foundation.tabs.js',
					'bower_components/foundation-sites/js/foundation.toggler.js',
					'bower_components/foundation-sites/js/foundation.tooltip.js',
					'bower_components/foundation-sites/js/foundation.zf.responsiveAccordionTabs.js',
				],
				
				dest: 'build/babeljs/foundation_concat.js'
			}
		},
		babel: { 
			// Run concated foundation file through babel presets
			options: {
				sourceMap: true,
				presets: ['es2015']
			},
			dist: {
				files: {
					'build/babeljs/foundation_babel.js' : 'build/babeljs/foundation_concat.js',
				}
			}
		},
		
		uglify: {
			
			// minify foundation babel
			foundation_min: {
				files: {
					'Scripts/foundation.min.js' : ['build/babeljs/foundation_babel.js']
				}
			},
			
			// minify datatabes
			datatables_min: {
				files: {
					'Scripts/datatables.min.js' : ['bower_components/datatables.net/js/jquery.dataTables.js']
				}
			}
		},
		
		sass: {
			dist: {
				files: {
					'css/style.css' : 'scss/style.scss',
					'css/admin.css' : 'scss/admin.scss',
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	
	grunt.registerTask('default', ['concat:foundation_concat', 'babel', 'uglify', 'sass']);
};

