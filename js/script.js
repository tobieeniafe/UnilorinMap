var link_address = window.location.href;

if (link_address.search('#/findme') != -1 ){ 
	page = 'findme';
}
else if (link_address.search('#/getaround') != -1 ){ 
	page = 'getaround';
}
else if (link_address.search('#/settings') != -1 ){ 
	page = 'settings';
}
else {
	page = 'dashboard';
}

//console.log(page);


$(document).ready(function(){
	$('#' + page).addClass('active');

	$('#dashboard').click(function() {
		$('#dashboard , #findme , #getaround , #settings').removeClass('active');
		$(this).addClass('active');
	});

	$('#findme').click(function() {
		$('#dashboard , #findme , #getaround , #settings').removeClass('active');
		$(this).addClass('active');
	});

	$('#getaround').click(function() {
		$('#dashboard , #findme , #getaround , #settings').removeClass('active');
		$(this).addClass('active');
	});

	$('#settings').click(function() {
		$('#dashboard , #findme , #getaround , #settings').removeClass('active');
		$(this).addClass('active');
	});
});

