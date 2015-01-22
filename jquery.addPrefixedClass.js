/*
$.addPrefixedClass
jQuery DOM helper for setting a mutually-exclusive prefixed classname on a node
e.g. $('.profile.type-foo').addPrefixedClass('type', 'bar') will become .profile.type-bar
*/
(function(root, factory) {
	// Set up appropriately for the environment. Start with AMD.
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], function($) {
			factory($);
		});

	// or, using global jquery
	} else {
		factory((root.jQuery || root.Zepto || root.ender || root.$));
	}

}(this, function($){
	'use strict';
	$.fn.addPrefixedClass = function(prefix, suffix) {
		var regex = new RegExp(prefix+'-.+'),
			classname = prefix+'-'+suffix;

		return this.each(function() {
			var $this = $(this);
			if ($this.hasClass(classname)) return; // don't apply if already applied

			var classes = $this.attr('class') || '';
			classes = $.map(classes.split(' '), function(c) {
				if (c && ! regex.test(c)) return c;
			});
			classes.push(classname);

			$this.attr('class', classes.join(' '));
		});
	};
	$.fn.removePrefixedClass = function(prefix) {
		var regex = new RegExp(prefix+'-.+');

		return this.each(function() {
			var $this = $(this);

			var classes = $this.attr('class') || '';
			classes = $.map(classes.split(' '), function(c) {
				if (c && ! regex.test(c)) return c;
			});

			$this.attr('class', classes.join(' '));
		});
	};

}));
