module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Remove built directory
    clean: {
      build: ['build/']
    },
// sve osim mojih js fajlova	
//PAZNJA MOTANJE SA site KOJI I TREBALO DA JE PROMENLJIVA cwd iz includes
//A JA JE KORISTIM KAO KONSTANTU SVUDA PO OVO FAJLU
	copyFiles: {
      options: {
        workingDirectory: 'build',
        manifest: [
          'site/bs/', 'site/js/', 'site/images/', 'site/myjs/', 'site/mycss/'
        ]
      }
    },

    // Built stylesheets with less
	
 //   less: {
   //   build: {
    //   src: 'assets/less/*',
    //    dest: 'build/css/app.css'
  //    }
    //},

    // Build the site using grunt-includes
    includes: {
      build: {
        cwd: 'site',
        src: [ '*.html', 'pages/*.html' ],
        dest: 'build/site',
        options: {
          flatten: true,
          includePath: 'include',
          banner: '<!-- Site built using grunt includes! -->\n'
        }
      }
    },	
	
	jshint: {
		//lint the project's Gruntfile as well as my JavaScript files 
		//using options given in .jshintrc file
		all: ['Gruntfile.js', 'site/myjs/*.js'],
		options: {
			jshintrc: '.jshintrc',
		}
	}
  });

    var recursiveCopy = function(source, destination){
		if(grunt.file.isDir(source)){

		  grunt.file.recurse(source, function(file){
			recursiveCopy(file, destination);
		  });

		}else{
		  grunt.log.writeln('Copying ' + source + ' to ' + destination);
		  grunt.file.copy(source, destination + '/' + source);  
		}
  };
  
  
  // Load plugins used by this task gruntfile-spajanje fragmenata html-a 
  grunt.loadNpmTasks('grunt-includes');
  //grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');//brise direktorijum build
 
 // task za proveru ispravnosti java script fajlova
 grunt.loadNpmTasks('grunt-contrib-jshint');

  
grunt.registerTask('copyFiles', function(){
    var files, workingDirectory;
    this.requiresConfig(this.name + '.options.manifest');
    this.requiresConfig(this.name + '.options.workingDirectory');    
    
    files = this.options().manifest;
    workingDirectory = this.options().workingDirectory;
    
    files.forEach(function(item) { 
      recursiveCopy(item, workingDirectory);
    });
});

  // Task definitions
  grunt.registerTask('build', ['jshint', 'clean', /*'less',*/ 'includes', 'copyFiles']);
	  
  grunt.registerTask('default', ['build']);
};