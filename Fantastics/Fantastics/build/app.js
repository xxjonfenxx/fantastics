jQuery(document).ready(function () {
	jQuery('ul.admin-menu > li > a').click(function(){
		event.preventDefault();
		$(this).toggleClass('menu-opened');
		$(this).parent("li").toggleClass('active-li');
		jQuery(this).next('ul').slideToggle();
	});
	
}).foundation();