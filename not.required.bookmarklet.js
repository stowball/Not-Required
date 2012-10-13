/*
 * Not Required Bookmarklet v0.2
 *
 * Removes all required field attributes to test form submissions
 * 
 * Copyright (c) 2012 Matt Stow
 * http://mattstow.com
 * Licensed under the MIT license
*/
(function() {
	var form = document.forms,
		forms = form.length,
		elems;
	for (var i = 0; i < forms; i++) {
		elems = form[i].elements.length;
		for (var x = 0; x < elems; x++) {
			form[i].elements[x].required = false;
		}
	}
})();