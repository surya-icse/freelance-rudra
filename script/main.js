// JavaScript Document
$("document").ready(function () {
	

	$("#mobile_menu").click(function() {
		$("#menu_bar").fadeToggle();
	});	
	
	
	$(".press_cov_date").click(function() {
		$(".right h3 ol").slideToggle();
	});	

	
	$("a").click(function() {
		/*
		thisClassName = $(".fa",this).attr("class");

		if(thisClassName == "fa fa-angle-down"){
			$(".fa-angle-up").attr("class", "fa fa-angle-down");
			$(".fa-angle-down",this).attr("class", "fa fa-angle-up");
		} else if(thisClassName == "fa fa-angle-up"){
			$(".fa-angle-up").attr("class", "fa fa-angle-down");
			$(".fa-angle-up",this).attr("class", "fa fa-angle-down");
		}
		*/
	});
	
	
	
	
	


	project_img_width = $(".project_img").width();
	project_img_height = $(".project_img").height();
	
	$(".back_knowledge").width(project_img_width)
	$(".back_knowledge").height(project_img_height)
	
	
	var w = window.innerWidth;
	if(w <= 600){
		$(".project_overview_bg").attr("src","images/images_bg/project-overview.jpg");
		$(".gallery_bg").attr("src","images/images_bg/gallery.jpg");
		$(".loan_assistance_bg").attr("src","images/images_bg/loan-assistance.jpg");
		$(".layout_plans_bg").attr("src","images/images_bg/plans.jpg");
		$(".amenities_bg").attr("src","images/images_bg/amenities.jpg");
		$(".location_advantage_bg").attr("src","images/images_bg/location-advantage.jpg");
		$(".contact_us_bg").attr("src","images/images_bg/contact-us.jpg");
	} else {
		$(".project_overview_bg").attr("src","images/project-overview-bg.jpg");
		$(".gallery_bg").attr("src","images/gallery-bg.jpg");
		$(".loan_assistance_bg").attr("src","images/loan-assistance-bg.jpg");
		$(".layout_plans_bg").attr("src","images/plans-bg.jpg");
		$(".amenities_bg").attr("src","images/amenities-bg.jpg");
		$(".location_advantage_bg").attr("src","images/location-advantage-bg.jpg");
		$(".contact_us_bg").attr("src","images/contact-us-bg.jpg");
	}
	
	if(w <= 780){
		$(".main_menu_list").fadeIn();
		
		$(".drop_about_us").click(function() {
			$(".sub_menu").not( ".sub_menu_aboutus" ).hide();
			$(".sub_menu_aboutus").fadeToggle();
		});	
		$(".back_aboutus").click(function() {
			$(".sub_menu_aboutus").fadeToggle();
			$(".fa-angle-up").attr("class", "fa fa-angle-down");
		});
		
		$(".drop_projects").click(function() {
			$(".sub_menu").not( ".sub_menu_projects" ).hide();
			$(".sub_menu_projects").fadeToggle();
			
			$(".main_menu_list").fadeToggle();
		});	
		$(".back_projects").click(function() {
			$(".sub_menu_projects").fadeToggle();
			$(".fa-angle-up").attr("class", "fa fa-angle-down");
			
			$(".main_menu_list").fadeToggle();
		});
		
		$(".drop_media").click(function() {
			$(".sub_menu").not( ".sub_menu_media" ).hide();
			$(".sub_menu_media").fadeToggle();
			
			$(".main_menu_list").fadeToggle();
		});	
		$(".back_media").click(function() {
			$(".sub_menu_media").fadeToggle();
			$(".fa-angle-up").attr("class", "fa fa-angle-down");
			
			$(".main_menu_list").fadeToggle();
		});
		
		$(".drop_knowledge").click(function() {
			$(".sub_menu").not( ".sub_menu_knowledge" ).hide();
			$(".sub_menu_knowledge").fadeToggle();
		});	
		$(".back_knowledge").click(function() {
			$(".sub_menu_knowledge").fadeToggle();
			$(".fa-angle-up").attr("class", "fa fa-angle-down");
		});
	
	
	    $("#img0").attr("src","images/banner/420x780/00.jpg");
		$("#img1").attr("src","images/banner/420x780/01.jpg");
		$("#img2").attr("src","images/banner/420x780/02.jpg");
		$("#img3").attr("src","images/banner/420x780/03.jpg");
		$("#img4").attr("src","images/banner/420x780/04.jpg");
		$("#img5").attr("src","images/banner/420x780/05.jpg");
		$("#img6").attr("src","images/banner/420x780/06.jpg");
		
		var slide_size_2 = -300;
		$(".menu_icon").click(function() {
			$("#menu_bar_list").animate({left: slide_size_2+'px'});
			if(slide_size_2 != 0) {
				slide_size_2 = 0;
				$(".menu_icon").html("<i class='fa fa-close'></i>");
				$("#menu_bar_list").animate({left: 0+'px'});
			} else {
				slide_size_2 = -300;
				$(".menu_icon").html("<i class='fa fa-bars'></i>");
				$("#menu_bar_list").animate({left: -300+'px'});
			}
		});	
		
		var ext_found = $(".header_banner img");
		if(ext_found.length > 0){
			var ext = $(".header_banner img").attr('src').split('.').pop();
			if(ext == "jpg"){
				banner_img = $(".header_banner img").attr('src').replace(/\.jpg/, '');
				banner_img = $(".header_banner img").attr('src', banner_img+'-m.jpg');
			}
		}
		
	} else if(w > 780){
		var ext_found = $(".header_banner img");
		if(ext_found.length > 0){
			var ext = $(".header_banner img").attr('src').split('.').pop();
			if(ext == "jpg"){
				banner_img = $(".header_banner img").attr('src').replace(/\-m.jpg/, '');
				banner_img = $(".header_banner img").attr('src', banner_img+'');
			}
		}
		
		$(".main_menu_list").fadeIn();
		
		$(".drop_about_us").hover(function() {
			$(".sub_menu").not( ".sub_menu_aboutus" ).hide();
			$(".sub_menu_aboutus").fadeIn();
			
			thisClassName = $(".fa",this).attr("class");

			if(thisClassName == "fa fa-angle-down"){
				$(".fa-angle-up").attr("class", "fa fa-angle-down");
				$(".fa-angle-down",this).attr("class", "fa fa-angle-up");
			} else if(thisClassName == "fa fa-angle-up"){
				$(".fa-angle-up").attr("class", "fa fa-angle-down");
				$(".fa-angle-up",this).attr("class", "fa fa-angle-down");
			}
		});	
				
		$(".drop_about_us").click(function() {
			$(".sub_menu").not( ".sub_menu_aboutus" ).hide();
			$(".sub_menu_aboutus").fadeToggle();
		});	
		
		$(".back_aboutus").click(function() {
			$(".sub_menu_aboutus").fadeToggle();
			$(".fa-angle-up").attr("class", "fa fa-angle-down");
		});
		
		$(".drop_projects").hover(function() {
			$(".sub_menu").not( ".sub_menu_projects" ).hide();
			$(".sub_menu_projects").fadeIn();
			
			thisClassName = $(".fa",this).attr("class");

			if(thisClassName == "fa fa-angle-down"){
				$(".fa-angle-up").attr("class", "fa fa-angle-down");
				$(".fa-angle-down",this).attr("class", "fa fa-angle-up");
			} else if(thisClassName == "fa fa-angle-up"){
				$(".fa-angle-up").attr("class", "fa fa-angle-down");
				$(".fa-angle-up",this).attr("class", "fa fa-angle-down");
			}
		});	
		$(".back_projects").click(function() {
			$(".sub_menu_projects").fadeToggle();
			$(".fa-angle-up").attr("class", "fa fa-angle-down");
		});
		
		$(".drop_media").hover(function() {
			$(".sub_menu").not( ".sub_menu_media" ).hide();
			$(".sub_menu_media").fadeIn();
			
			thisClassName = $(".fa",this).attr("class");

			if(thisClassName == "fa fa-angle-down"){
				$(".fa-angle-up").attr("class", "fa fa-angle-down");
				$(".fa-angle-down",this).attr("class", "fa fa-angle-up");
			} else if(thisClassName == "fa fa-angle-up"){
				$(".fa-angle-up").attr("class", "fa fa-angle-down");
				$(".fa-angle-up",this).attr("class", "fa fa-angle-down");
			}
		});	
		$(".back_media").click(function() {
			$(".sub_menu_media").fadeToggle();
			$(".fa-angle-up").attr("class", "fa fa-angle-down");
		});
		
		$(".drop_knowledge").hover(function() {
			$(".sub_menu").not( ".sub_menu_knowledge" ).hide();
			$(".sub_menu_knowledge").fadeIn();
			
			thisClassName = $(".fa",this).attr("class");

			if(thisClassName == "fa fa-angle-down"){
				$(".fa-angle-up").attr("class", "fa fa-angle-down");
				$(".fa-angle-down",this).attr("class", "fa fa-angle-up");
			} else if(thisClassName == "fa fa-angle-up"){
				$(".fa-angle-up").attr("class", "fa fa-angle-down");
				$(".fa-angle-up",this).attr("class", "fa fa-angle-down");
			}
		});	
		$(".back_knowledge").click(function() {
			$(".sub_menu_knowledge").fadeToggle();
			$(".fa-angle-up").attr("class", "fa fa-angle-down");
		});
		
		$('.header_banner, .rslides, .content_box').hover(function(){    
			 $(".sub_menu_aboutus").fadeOut();
			 $(".sub_menu_projects").fadeOut();
			 $(".sub_menu_media").fadeOut();
			 $(".sub_menu_knowledge").fadeOut();
		});
		
		
		$("#img1").attr("src","images/banner/1366x768/01.jpg");
		$("#img2").attr("src","images/banner/1366x768/02.jpg");
		$("#img3").attr("src","images/banner/1366x768/03.jpg");
		$("#img4").attr("src","images/banner/1366x768/04.jpg");
		$("#img5").attr("src","images/banner/1366x768/05.jpg");
	} 
	
	 
	
	$(window).resize(function(){
		var w = window.innerWidth;
		if(w <= 780){
			$("#img1").attr("src","images/banner/420x780/01.jpg");
			$("#img2").attr("src","images/banner/420x780/02.jpg");
			$("#img3").attr("src","images/banner/420x780/03.jpg");
			$("#img4").attr("src","images/banner/420x780/04.jpg");
			$("#img5").attr("src","images/banner/420x780/05.jpg");
			
			var slide_size_2 = -300;
			$(".menu_icon").click(function() {
				$("#menu_bar_list").animate({left: slide_size_2+'px'});
				if(slide_size_2 != 0) {
					slide_size_2 = 0;
					$(".menu_icon").html("<i class='fa fa-close'></i>");
					$("#menu_bar_list").animate({left: 0+'px'});
				} else {
					slide_size_2 = -300;
					$(".menu_icon").html("<i class='fa fa-bars'></i>");
					$("#menu_bar_list").animate({left: -300+'px'});
				}
			});
			
			
		} else if(w > 780){
			$("#img1").attr("src","images/banner/1366x768/01.jpg");
			$("#img2").attr("src","images/banner/1366x768/02.jpg");
			$("#img3").attr("src","images/banner/1366x768/03.jpg");
			$("#img4").attr("src","images/banner/1366x768/04.jpg");
			$("#img5").attr("src","images/banner/1366x768/05.jpg");
		} 
	});
	
	
	
	
	$(window).scroll(function(){
		
		//.press_coverage_box .right
		
		scroll_body = $(this).scrollTop();	
			
		//right_top = $(".press_coverage_box .right").position();
		//$(".press_coverage_box .right h3").html(right_top.top +" - "+ scroll_body);
		
		
		if(scroll_body >= 500){
			$(".press_coverage_box .right").css("position","fixed");
			$(".press_coverage_box .right").css("top","0");
			$(".press_coverage_box .right").css("height","100%");
			$(".press_coverage_box .right").css("right","5%");
			$(".press_coverage_box .right").css("width","22.5%");
		} else if(scroll_body < 500){
			$(".press_coverage_box .right").css("position","relative");
			$(".press_coverage_box .right").css("top","0");
			$(".press_coverage_box .right").css("right","0%");
			$(".press_coverage_box .right").css("width","25%");
			$(".press_coverage_box .right").css("height","800px");
		}

		if(scroll_body >= 1300){
			$('.back_top').fadeIn();
		} else {
			$('.back_top').fadeOut();
		}
	});
	
});	