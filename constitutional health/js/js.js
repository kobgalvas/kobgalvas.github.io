jQuery("document").ready(function($){
				var h = $(window).height();
				var nav = $('.fixed-menu');
			 //alert(h);
				$(window).scroll(function () {
					if ($(this).scrollTop() > h) {
						nav.css('display','block');
					} else {
						nav.css('display','none');
					}
				});
			 
			});
