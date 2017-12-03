$( document ).ready(function() {
	$(".fa-bars").click(function(){
		$("main-menu--wrapper").toggleClass(".browser-height");
		$("main-menu--wrapper").toggleClass(".expanded");
	});
});