var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js";
script.onreadystatechange = handler;
script.onload = handler;
head.appendChild(script);
function handler(){
       console.log('jquery added :)');
}

function findPathOfElement() {
jQuery.fn.extend({
	getPath: function( path ) {
					// The first time this function is called, path won't be defined.
		if ( typeof path == 'undefined' ) path = '';
					// If this element is <html> we've reached the end of the path.
		if ( this.is('html') )
			return 'html' + path;
					// Add the element name.
		var cur = this.get(0).nodeName.toLowerCase();
					// Determine the IDs and path.
		var id  = this.attr('id'),
			class1 = this.attr('class');
					// Add the #id if there is one.
		if ( typeof id != 'undefined' )
			cur += ' #' + id;
					// Add any classes.
		if ( typeof class1 != 'undefined' )
			cur += ' .' + class1.split(/[\s\n]+/).join('.');
					// Recurse up the DOM.
		return this.parent().getPath( ' > ' + ' ' + cur + ' ' + path);

		}
	});
  	$("*").hover(function() {//shows the path of element currently being hovered.
  		var path = $(this).getPath();
  		console.log(path);
  				// console.log("Just hovered on element having above path.. ");
  	});
  	$("*").click(function() { //shows the path of element currently being clicked.
  		var path = $(this).getPath();
  		console.log(path);
  				// console.log("Just clicked element having above path.. ");
  	});
 }	