module.exports = function(grunt) {

	grunt.file.mkdir('dist');
	grunt.file.mkdir('build');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: {
				src: ['dist/*', 'build/*']
			}
		},
		browserify: {
			dist: {
				files: {
					'dist/<%= pkg.name %>_<%= pkg.version %>.js': ['src/js/*.js'],
				}
			}
		},
		'string-replace': {
			dev: {
				files: {
					'dist/index.html': 'src/html/index.html'
				},
				options: {
					replacements: [
					{
						pattern: /%%MIDI_SKETCH%%/g,
						replacement: './<%= pkg.name %>_<%= pkg.version %>.js'
					},
					{
						pattern: /%%MIDI_JS_LIB%%/g,
						replacement: './MIDI.js'
					},
					{
						pattern: /%%BASE_64_LIB%%/g,
						replacement: './base64binary.js'
					}
					]
				}
			}
		},
		copy: {
			libs: {
				src: ['lib/base64binary.js', 'lib/MIDI.js/*.js'],
				dest: 'dist/',
				cwd: './',
			    expand: true,				
				flatten: true,
			    filter: 'isFile',
			},
			soundfonts: {
				src: 'soundfonts/*',
				dest: 'dist/',
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['clean', 'string-replace:dev', 'browserify', 'copy:libs', 'copy:soundfonts']);
};