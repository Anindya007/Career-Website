(function ($) {
	"use strict";

    jQuery(document).ready(function($){

	
	 $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#navigation').fadeIn();
            } else {
                $('#navigation').fadeOut();
            }
        });
        
        $(".home-page-slides").owlCarousel({
           items:1,
            loop:true,
            dots:false,
            autoplay:true,
            nav:true,
            navText:["<i class='fa fa-chevron-left'></i>" , "<i class='fa fa-chevron-right'></i>"],
            mouseDrag:false,
            touchDrag:false
			
        });
        
        $(".home-page-slides").on("translate.owl.carousel",function(){
            $(".single-slide-item p,.single-slide-item strong").removeClass("animated fadeInDown").css("opacity","0");
            $(".single-slide-item p.slide-alternative-color").removeClass("animated fadeInUp").css("opacity","0");
        });
        $(".home-page-slides").on("translated.owl.carousel",function(){
            $(".single-slide-item p,.single-slide-item strong").addClass("animated fadeInDown").css("opacity","1");
            $(".single-slide-item p.slide-alternative-color").addClass("animated fadeInUp").css("opacity","1");
        });
        
        
        $(".product-promotion").owlCarousel({
           items:1,
            loop:true,
            dots:true,
            autoplay:false,
            nav:false
        });
        
        
       /*  $("a.menu-trigger").on("click", function(){
            $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
            return false;
        });
        
        $(".menu-close, .off-canvas-overlay").on("click", function(){
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
        }); */
        
        
        $(".search-trigger").on("click", function(){
            $(".off-canvas-search, .off-canvas-overlay").addClass("active");
            return false;
        });
        
        $(".menu-close, .off-canvas-overlay").on("click", function(){
            $(".off-canvas-search, .off-canvas-overlay").removeClass("active");
        });
        
        $("#navigation").click(function(){
			$('html, body').animate({scrollTop: 0}, '2000ms');		
		})
        
		$(".big-menu > li").click(function(){
			$('html, body').animate( {scrollTop: $("#scr").offset().top}, '2000ms');		
		})
		
		$('#nal').click(function(){
			//debugger;
			$("owl-dot:nth-child(1)").removeClass("active");
			$("owl-dot:nth-child(3)").removeClass("active");
			$("owl-dot:nth-child(2)").addClass("active");
			$("owl-dot:nth-child(2)").focus();
		})
		
		  $("#tech").click(function(){
			
			var tech = $("#prod").offset().top;
			
			 $('html,body').animate({scrollTop:tech},'fast'); 
		} ) 
		
		$("#contact").on('click',function(){
			
			$('input[type="email"]').focus();
			
		})
		
		$('#first,#second,#third,#fourth,#fifth,#sixth,#seventh').each(function(){
			//debugger;
			var id= $(this).attr('id');
			switch(id){
				case 'first':
					progress('#' + id,'90',0.9);
					break;
				case 'second':
					progress('#' + id,'60',0.6);
					break;
				case 'third':
					progress('#' + id,'80',0.8);
					break;
				case 'fourth':
					progress('#' + id,'70',0.7);
					break;
				case 'fifth':
					progress('#' + id,'60',0.6);
					break;
				case 'sixth':
					progress('#' + id,'50',0.5);
					break;
				default:
					progress('#' + id,'60',0.6);
			}
			
		})
		
		function progress( container,value,animateValue){
					//debugger;
					var progressBar = new ProgressBar.Circle(container, {
								strokeWidth: 8,
								color: 'yellow',
								text: {
											// Initial value for text.
											// Default: null
											value: value,

											// Class name for text element.
											// Default: 'progressbar-text'
											className: 'progressbar__label',

											// Inline CSS styles for the text element.
											// If you want to modify all CSS your self, set null to disable
											// all default styles.
											// If the style option contains values, container is automatically
											// set to position: relative. You can disable behavior this with
											// autoStyleContainer: false
											// If you specify anything in this object, none of the default styles
											// apply
											// Default: object speficied below
											style: {
												// Text color.
												// Default: same as stroke color (options.color)
												color: 'darkgray',
												position: 'absolute',
												left: '50%',
												top: '50%',
												padding: 0,
												margin: 0,
												// You can specify styles which will be browser prefixed
												transform: {
													prefix: true,
													value: 'translate(-50%, -50%)'
												}
											},

											// Only effective if the text.style is not null
											// By default position: relative is applied to container if text
											// is set. Setting this to false disables that feature.
											autoStyleContainer: true,

											// Only effective if the shape is SemiCircle.
											// If true, baseline for text is aligned with bottom of
											// the SVG canvas. If false, bottom line of SVG canvas
											// is in the center of text.
											// Default: true
											alignToBottom: true
							}
							});
									progressBar.animate(animateValue, {
												duration: 800
											}, function() {
												console.log('Animation has finished');
											});
			}
		  
				
		
	
        $(".product-list").masonry();
        
    });


    


}(jQuery));	