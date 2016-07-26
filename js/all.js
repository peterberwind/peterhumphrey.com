$(function() {
  // Custom JS goes here

  // Navigation JS - http://refills.bourbon.io/
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function() {
      if ($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });

});
// END: Doc on Ready


$ = jQuery;
var scrollTop = 0;

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

// $('.Random #video-wrap').first().css('padding', '0');

if (isMobile) {
	$('.video-overlay').css('display', 'block');
	$('.video').css('display', 'none');
	$('.video-wrap').addClass('padding-fam');
}

console.log('Hello ☺');

$(window).scroll(function(e) {
	var newScrollTop = $(document).scrollTop();
	if (newScrollTop > scrollTop) {
		// scrolling downwards, hide the navbar.
		$("#navbar").addClass("hideNavbar");
	} else {
		// scrolling upwards, show the navbar.
		$("#navbar").removeClass("hideNavbar");
	}

	scrollTop = newScrollTop;

	if (scrollTop <= 0) {
		$("#navbar").addClass("hideNavbar");
	}
});

$('.navlink2').click(function(e){
	e.preventDefault;
	var thisman = $(this);
	$('html, body').animate({
		scrollTop: $(thisman.find('a').data('scroll')).offset().top - 50
	}, 1000);
});

(function ($, window, undefined) {
	$.fn.marqueeify = function (options) {
		var settings = $.extend({
			horizontal: true,
			vertical: true,
			speed: 100, // In pixels per second
			container: $(this).parent(),
			bumpEdge: function () {}
		}, options);

		return this.each(function () {
			var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
				$el = $(this);

			getSizes = function () {
				containerWidth = settings.container.outerWidth();
				containerHeight = settings.container.outerHeight();
				elWidth = $el.outerWidth();
				elHeight = $el.outerHeight();
			};

			move = {
				right: function () {
					$el.animate({left: (containerWidth - elWidth)}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.left();
					}});
				},
				left: function () {
					$el.animate({left: 0}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.right();
					}});
				},
				down: function () {
					$el.animate({top: (containerHeight - elHeight)}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.up();
					}});
				},
				up: function () {
					$el.animate({top: 0}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.down();
					}});
				}
			};

			getSizes();

			if (settings.horizontal) {
				move.right();
			}
			if (settings.vertical) {
				move.down();
			}

      // Make that shit responsive!
      $(window).resize( function() {
        getSizes();
      });
		});
	};
})(jQuery, window);

$(document).ready( function() {

var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 500); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });

    $(this).on('touchstart', function (e) {
        idleTime = 0;
    });
});

$('#marquee-wrap').css('opacity', '0');

function timerIncrement() {
// console.log(idleTime);
    idleTime = idleTime + 1;
    if (idleTime >= 90) { /// 120 = 1 minute
    		$('#marquee-wrap').css('opacity', '1');
    		$('#marquee-container').css('z-index', '999');
    		$('#marquee-wrap').css('z-index', '999');
    		document.title = '☺☺ You Still There? ☺☺';
    }

    if (idleTime == 1) {
    		$('#marquee-wrap').css('opacity', '0');
    		$('#marquee-container').css('z-index', '-10');
    		$('#marquee-wrap').css('z-index', '-10');
    		document.title = 'Peter Humphrey';

    }
}

$('.marquee').marqueeify({
  speed: 300,
    bumpEdge: function () {
      var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
      $('.marquee .logo').css('fill', newColor);
    }
  });

});

var overlay = $('.iframe-overlay');

if (overlay.length > 0) {
	overlay.click(function(){
		$(this).hide();
		$('.iframe-video')[0].src += "?autoplay=1";
	});
}

$('#navbar').hide().delay(800).show();

if ($('.video').length > 0) {
	for (i = 0; i <= $('.video').length - 1; i++) {
	  $('.video').get(i).play();
	}
}


'use strict';

var marquee1 = $('.full-img .image-holder .marquee1'),
    marqueeHalf = $('.marqueehalf'),
    holder = $('.image-holder');

function animateFull() {
	marquee1.each(function () {
		var thisman = $(this);
		thisman.css('left', $(window).width());
		thisman.animate({
			left: -thisman.width() - $(window).width() / 5
		}, 10000, 'linear', function () {
			thisman.css('left', $(window).width());
			animateFull();
		});
	});
}

function animateHalf() {
	marqueeHalf.each(function () {
		var thisman = $(this);
		thisman.css('left', thisman.parent().width());
		thisman.animate({
			left: -thisman.width()
		}, 10000, 'linear', function () {
			thisman.css('left', thisman.parent().width());
			animateHalf();
		});
	});
}

$('.marquee-text');

if (!isMobile) {
	animateHalf();
	animateFull();
	$('.marquee-text').show();
}

$('#scrollTop').click(function () {
	$('html,body').animate({
		scrollTop: 0
	}, 1000);
});

findDataPlz();

function findDataPlz() {
	var atag = $('.indexText p a');
	var counter = {};
	var number = {};

	// $('.image-holder').hover(function(){

	// 	let thisman = $(this);

	// 	let linkMan = thisman.attr('class').split(' ')[1];

	// 	// $('a[data-projecttitle='+linkMan+']').trigger('mouseenter');
	// 	// console.log(thisman.data('projecttitle'));

	// 	number = 0;

	// 	counter = setInterval(function(){

	// 		number++;
	// 		if (number == 3) {
	// 			number = 0;
	// 		}

	// 		var marqueeImages = thisman.find('img')
	// 		var marqueeSelected = thisman.find('img').eq(number);

	// 		marqueeImages.css('z-index','1');
	// 		marqueeSelected.delay(100).css('z-index', '99');
	// 	},370);

	// }, function(){
	// 	clearInterval(counter);
	// 	// let linkMan = thisman.attr('class').split(' ')[1];
	// 	// $('a[data-projecttitle='+linkMan+']').trigger('mouseout');

	// });

	atag.hover(function () {

		var thisman = $(this),
		    marqueeData = thisman.data('projecttitle');
		// console.log(thisman.data('projecttitle'));

		number = 0;

		counter = setInterval(function () {

			number++;
			if (number == 3) {
				number = 0;
			}

			var marqueeImages = $('.' + marqueeData + ' img');
			var marqueeSelected = $('.' + marqueeData + ' img:eq(' + number + ')');

			marqueeImages.css('z-index', '1');
			marqueeSelected.delay(100).css('z-index', '99');
		}, 370);
	}, function () {
		clearInterval(counter);
	});
}

// var totalLength = document.querySelector('#svgMAN path').getTotalLength();
// let svgContent = $('#svg');

// $('.svgFillin').css({
//     'stroke-dashoffset': totalLength,
//     'stroke-dasharray': totalLength + ' ' + totalLength
// });

var svgContent = $('#sig');

$(window).scroll(function (e) {
	var offsetTop = svgContent.offset().top,
	    svgHeight = svgContent.height(),
	    svgBottom = offsetTop + svgHeight,
	    scrollPos = $(window).scrollTop() + $(window).height();

	// console.log($(window).scrollTop());
	// console.log(svgContent.offset().top - 300);
	// console.log($(window).scrollTop() + $(window).height());
	// console.log(svgContent.offset().top + svgContent.height())

	if ($(window).scrollTop() + $(window).height() >= svgContent.offset().top + svgContent.height()) {
		if ($('.sig-sig').attr('src') == null) {
			$('.sig-sig').attr('src', 'eckler2/../wp-content/themes/eckler/icons/sig.gif');
		}
	}
});

$('a[href*="internetarts"]').attr('target', '_blank');

$('a[href*="404"]').removeAttr('target');

$('#thanks-man').hover(function () {
	$('#look-at-me img').attr('src', 'eckler2/../wp-content/themes/eckler/icons/me.gif');
	$('#look-at-me').css('display', 'block');
}, function () {
	$('#look-at-me img').attr('src', ' ');
	$('#look-at-me').css('display', 'none');
});

$('body').on('touchstart', function () {
	$('#look-at-me img').attr('src', ' ');
	$('#look-at-me').css('display', 'none');
});
