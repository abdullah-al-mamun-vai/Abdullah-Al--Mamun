$(document).ready(function(){
	$(".name").typing({
	 	strings: ['abdullah al mamun'],
	 	eraseDelay: 5,
	 	color:'#fff',
	 	typingColor:'black',
	 	typingOpacity:'0.1',
		cursorBlink:true,
		fade:false,
		loopCount:1000,
	});
	$('#pie1').pieChart({
		barColor: '#2c3e50',
		trackColor: '#f9f9f9',
		lineWidth: 8,
		size: 170,
		rotate: 0,
		animate: {
		  duration: 2000,
		  enabled: true
		},
	});
	$('#pie2').pieChart({
		barColor: '#abad0f',
		trackColor: '#f9f9f9',
		lineWidth: 8,
		size: 170,
		rotate: 0,
		animate: {
		  duration: 2000,
		  enabled: true
		},
	});
	$('#pie3').pieChart({
		barColor: '#e67e22',
		trackColor: '#f9f9f9',
		lineWidth: 8,
		size: 170,
		rotate: 0,
		animate: {
		  duration: 2000,
		  enabled: true
		},
	});
	$('#pie4').pieChart({
		barColor: '#27ae60',
		trackColor: '#f9f9f9',
		lineWidth: 8,
		size: 170,
		rotate: 0,
		animate: {
		  duration: 2000,
		  enabled: true
		},
	});
	$('.linepr1').LineProgressbar({
  percentage: 95,
  fillBackgroundColor: '#3498db',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  width: '100%'
});
	$('.linepr2').LineProgressbar({
  percentage: 90,
  fillBackgroundColor: '#23555c',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  width: '100%'
});
	$('.linepr3').LineProgressbar({
  percentage: 50,
  fillBackgroundColor: '#c43cdd',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  width: '100%'
});
	$('.linepr4').LineProgressbar({
  percentage: 60,
  fillBackgroundColor: '#4ac322',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  width: '100%'
});
	$('.linepr5').LineProgressbar({
  percentage: 70,
  fillBackgroundColor: '#df1b1b',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  width: '100%'
});
	$("body").prognroll({
		  	height:4,        
  			color:"#2ac46f"
	});
	$('nav').smoothMenu({
  stickyMenu: true,
  slidingLine: true,
    menuSpeedAnimate:             2000,
});
  $('body').materialScrollTop();
  new WOW().init();

$(window).scroll(function() {
	if ($(window).scrollTop() > 500) {
		$('.fixed-icon').addClass('extra-menu');
	}else {
		$('.fixed-icon').removeClass('extra-menu');
	}
});

    $(function(){
        $('nav ul').slicknav();
    });

});