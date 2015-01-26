$doc.ready(function() {
	gform_placeholder();
});

// code to trigger on AJAX form render
jQuery(document).bind('gform_post_render', function(){
	gform_placeholder();
});

function gform_placeholder() {
	$('.gform_wrapper .gfield').each( function() {
		var $gfield = $(this);
		var placeholder = $gfield.find('> .gfield_label').ignore('span').text();
		$gfield.find('.ginput_container > input, .ginput_container > textarea').attr('placeholder', placeholder);
	});
};

$.fn.ignore = function(sel){
	return this.clone().find(sel).remove().end();
};