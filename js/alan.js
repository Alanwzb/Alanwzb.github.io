/**
* Author: 吴壮博
* Date: 2018/01/01
**/
$(document).ready(function(){
	//点击导航栏
	$(".box > .nav > ul.navbar li").click(function(){
		//alert($(this).index());
		var i = $(this).index();
		$(".box > .nav > ul.navbar li").eq(i).addClass("nav_bg").siblings().removeClass("nav_bg");
		$(".box > div.main > .main_box > .main_box_ul > .main_box_ul_li").eq(i)
			.fadeIn().siblings().fadeOut();
	});

	//
	$("li.h_tab_ul-li").click(function(){
	  	var i = $(this).index();
	  	//alert(i);
	  	$("li.h_tab_ul-li").eq(i).addClass("h_tab_about").siblings().removeClass("h_tab_about");
	   $(".box > div.main > .main_box > .main_box_ul > .main_box_ul_li > .h_tab > .h_tab_two_ul > li").eq(i).show().siblings().hide();
	});

});
