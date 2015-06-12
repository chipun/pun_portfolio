var App = function () {

	var handlerparallax = function () {


		$('#intro').parallax("100%", 0.5);

		$('#resume').parallax("100%", 0.5);


	};

	var handlerHoverElementNav = function (main_id) {

		/* Every time the window is scrolled ... */
		$(window).scroll(function () {

			var bottom_of_window = $(window).scrollTop() + $(window).height();

			var adjustHover = function (id) {

				$(main_id + " li a").css({
					"color": "white"
				});

				var color;
				color = $(id).css('color');
				if (color !== "rgb(76, 154, 189)") {
					$(id).css({
						"color": "rgb(76, 154, 189)"
					});
				}

			};


			//When scroll down enters and leaves the elements, the hover can select and style a link at the navigation bar
			$(main_id).find('li').each(function () {

				var current = $(this).find('a');
				var href = current.attr('href');
				var ID = current.context.id;

				var obj_position_top = $(href).position().top + $(window).height();

				if (obj_position_top <= bottom_of_window) {

					adjustHover("#" + ID + " a");
				} else {
					current.css({
						"color": "white"
					});

				}


			});
		});


	};

	var hanlderBanner = function () {

		$.ajax({
			url: "../ajax/banner.html",
			success: function (result) {
				$("#ajax_banner").html(result);
				handlerPhotoSlide();
			}
		})

		$.ajax({
			url: "../ajax/download.json",
			dataType: "json",
			success: function (test) {

				var lop = test.string;
				var arry = test.array[1];


			}


		})


	};

	var handlerPhotoSlide = function () {
		$(function () {
			$("#banner").slidesjs({
				width: 940,
				height: 200,
				active: true,
				start: 3

			});
		});

	};

	var handlerLoading = function () {

		var body = $("body");
		var timeout;

		$(document).ajaxStart(function () {
			body.addClass("loading");
		});

		$(document).ajaxStop(function () {
			body.removeClass("loading");
		});

	};

	var adjust_marginSection = function () {

		var win_height = $(window).height();
		var div_height = $(".section").height();
		var center_margin = (win_height - div_height) / 2;

		$(".section").css('margin-top', function () {
			return center_margin;
		});

		$(".section").css('margin-bottom', function () {
			return center_margin;
		});
	};

	var handleScroll = function () {
		// Scroll the whole document
		var sectionlist = ['#header', '#intro'];

		var i;
		for (i = 0; i < sectionlist.length; i++) {
			$(sectionlist[i]).localScroll({
				target: 'body',
				queue: true,
				duration: 3000,
				hash: true
			});


		}


		/* Every time the window is scrolled ... */
		$(window).scroll(function () {

			var win = $(window);
			var bottom_of_window = win.scrollTop() + win.height();
			var object = $("#about");
			var bottom_object = object.scrollTop() + object.height();

			//			$(".test_header").append("<p> bottom of window - " + bottom_of_window.toString() + " scrolltop - " + $(window).scrollTop().toString() + "  height - " + $(window).height().toString() + "</p>")
			//			var sum = object.position().top + object.outerHeight();
			//			$(".test_header").append("<p> total of postion top and outheight - " + sum.toString() + " postion top - " + object.position().top.toString() + "  outheight - " + object.outerHeight().toString() + " bottom of window " + bottom_of_window + "</p>")
			/* Check the location of each desired element */

			$('.hide').each(function (i) {

				var bottom_of_object = $(this).position().top + $(this).outerHeight();
				var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* If the object is completely visible in the window, fade it it */
				if (bottom_of_window > bottom_of_object) {

					$(this).animate({
						'opacity': '1'
					}, 500);
				}

			});

		});
	};

	return {

		init_ajax: function () {

			handlerLoading();
		},

		init: function () {


			hanlderBanner();
			handleScroll();
			handlerPhotoSlide();
			handlerHoverElementNav("#nav");
			handlerparallax();

		},

		init_css: function () {
			adjust_marginSection();
		}
	};

}();