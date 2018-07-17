$(function() {
	$('a').focus(function(){this.blur();});
});

$(function(){
	$('#shop-list').children('dt').hover(
	function(){
		$(this).css({
			cursor:"pointer",
			filter:"alpha(opacity=70)",
			opacity:"0.70"
		});
	},
	function(){
		$(this).css({
			cursor:"auto",
			filter:"alpha(opacity=100)",
			opacity:"1"
		});
	});
});

/* $(function(){
	$('#shop-list').children('dt').click(function(){
		$(this).siblings('dd').slideToggle(200);
	});
});

$(function(){
	$('#shop-list').children('dt').click(function(){
		$(this).siblings('dd').css({'display':'block'});
	});
});

$(function(){
	var cl = $('#shop-list dd').css('display');
	if(cl == 'block') {
		$('#shop-list dd a').click(function(){
			$('#shop-list dd').css({'display':'none'});
			return false;
		});
	}
});;*/

$(function(){
	$.ajaxSetup({
		cache: false
	});

	$("body").append("<div id='glayLayer'></div>");

	$("#glayLayer,#cls").click(function(){
		$("#glayLayer").hide();
		$("#shop-list dd").fadeOut("fast");
		return false;
	});

	$("#glayLayer").click(function(){
		$(this).hide();
	})

	$("#shop-list dt").click(function(){
		$("#glayLayer").show();
		$("#shop-list dd").fadeIn("slow");
		return false;
	})

	if($.browser.msie && $.browser.version<8){
		$(window).scroll(function(){
			$("#glayLayer").css({'top':$(document).scrollTop(),'height':$(document).height()});
		});
		//alert($(document).height());
	}

});

