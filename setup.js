$(document).ready(function(){
	
	$('#btniduser').click(function() {
		var iduserimg = $('#idusuari').val();
		$().pam(iduserimg);
	});
	
	$('#cleanImg').click(function() {
		$('#cbox').empty();
	});
	
	//Si no pot realitzar el get... pos mal.
	
	$.fn.pam = function(iduserimg) {
		$('#cbox').jflickrfeed({
			limit: 20,
			qstrings: {
				//id: '37304598@N02'
				//id:12403504@N02'
				id: iduserimg
			},
			itemTemplate: '<li>'+
							'<a rel="colorbox" href="{{image}}" title="{{title}}">' +
								'<img src="{{image_s}}" alt="{{title}}" />' +
							'</a>' +
						  '</li>'
		}, function(data) {
			$('#cbox a').colorbox();
		});
	};
});