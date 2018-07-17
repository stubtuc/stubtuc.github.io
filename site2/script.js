$(document).ready(function() {

	var mouseOver = false;
	var menuOpen = false;

	function start() {

		$('.hello').addClass('floating')
				   .delay(500)
				   .queue(function() {

				   		$(this).html('Привет.');
				   		$(this).removeClass('floating');
				   		$(this).addClass('closed').dequeue();

				   });

		$('.concept').delay(1000)
					 .queue(function() {

					 	$('#two').css({

				   			'opacity' : 1,
							'top' : '80%'

						});

						$('#one').css({

				   			'opacity' : 1,
							'top' : '90%'

						});

						$('#three').css({

				   			'opacity' : 1,
							'top' : '90%'

						});

						dequeue();

					 })

	}

	function move() {

		$(document).mousemove(function(e){

			if (mouseOver) {

				$('#circle').css({'left' : e.clientX - 50});
				$('#circle').css({'top' : e.clientY- 50});

			}

		});

	}

	function circleBack() {

		$('#circle').css({'left' : '101%'});
		$('#circle').css({'top' : '-100px'});

	}

	$('#menu-active-zone').mouseenter(function() {

		mouseOver = true;
		move();

	});

	$('#menu-active-zone').mouseleave(function() {

		circleBack();
		mouseOver = false;

	});

	$('#menu-active-zone').mouseup(function() {

		setTimeout(circleBack, 500);

		if (!menuOpen) {

			$('#up-menu').css({'transform' : 'rotate(45deg)'});
			$('#down-menu').css({'transform' : 'rotate(45deg)'});

			$('body').css({'background-color' : 'black'});
			$('#navbar').css({'color' : 'white'});

			$('#menu-elements').css({'display' : 'block',
									 'opacity' : 1});

			$('.concept').css({'display' : 'none'});

			menuOpen = !menuOpen;

		}

		else {

			$('#up-menu').css({'transform' : 'rotate(0deg)'});
			$('#down-menu').css({'transform' : 'rotate(0deg)'});

			$('body').css({'background-color' : 'white'});
			$('#navbar').css({'color' : 'black'});

			$('#menu-elements').css({'display' : 'none',
									 'opacity' : 0});

			$('.concept').css({'display' : 'block'});

			menuOpen = !menuOpen;

		}

	});

	$(window).scroll(function() {

		if ($(window).scrollTop() >= $(window).height()) {

		    $('#navbar').css({'color' : 'white'});

		}

		else if ($(window).scrollTop() < $(window).height()) {

			if (!menuOpen) {

				$('#navbar').css({'color' : 'black'});
			}

		}

	});

	setTimeout(start, 1000);

});