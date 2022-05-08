(function($) {
    "use strict";
    
	 document.addEventListener("DOMContentLoaded", function(){
		
		window.addEventListener('scroll', function() {
	       
			if (window.scrollY > 50) {
				document.getElementById('navbar_top').classList.add('fixed-top');
				// add padding top to show content behind navbar
				navbar_height = document.querySelector('.navbar').offsetHeight;
				document.body.style.paddingTop = navbar_height + 'px';
			} else {
			 	document.getElementById('navbar_top').classList.remove('fixed-top');
				 // remove padding top from body
				document.body.style.paddingTop = '0';
			} 
		});
	});
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 120) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });
    $(".others-option .search-icon i").on("click", function() {
        $(".search-overlay").toggleClass("search-overlay-active");
    });
    $(".search-overlay-close").on("click", function() {
        $(".search-overlay").removeClass("search-overlay-active");
    });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
  
    $('.services-slides').owlCarousel({
        nav: false,
        loop: true,
        margin: 30,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3,
				 nav: false,
        loop: false,
        margin: 30,
        dots: true,
        autoplay: false,
		  touchDrag: false,
        mouseDrag: false
            }
        }
    });
    $('.services-slides-two').owlCarousel({
        nav: false,
        loop: true,
        margin: 30,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
   
    $(function() {
        $('.shorting').mixItUp();
    });
    $('.showmore-box').showMoreItems({
        startNum: 9,
        afterNum: 3,
        moreText: 'Load More',
        noMoreText: 'No More'
    });
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    $('.testimonial-slides').owlCarousel({
        nav: false,
        loop: true,
        margin: 30,
        dots: true,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"]
    });
    $('.partner-slides').owlCarousel({
        nav: false,
        loop: true,
        margin: 30,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
    $('.blog-slides').owlCarousel({
        nav: false,
        loop: true,
        margin: 30,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
             992: {
                items: 2
            },
         
        }
    });
    $('.portfolio-details-image-slides').owlCarousel({
        nav: true,
        loop: true,
        margin: 30,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });

    function makeTimer() {
        var endTime = new Date("September 20, 2021 17:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() {
        makeTimer();
    }, 0);
    $(window).on('load', function() {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 20,
                mobile: true,
                live: true,
            });
            wow.init();
        }
    });
    $(".newsletter-form").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            event.preventDefault();
        }
    });

    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }

    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }

    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }

    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({
        url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
        callback: callbackFunction
    });
    $('.input-counter').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus-btn'),
            btnDown = spinner.find('.minus-btn'),
            min = input.attr('min'),
            max = input.attr('max');
        btnUp.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
    $(function() {
        $(window).on('scroll', function() {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });
        $('.go-top').on('click', function() {
            $("html, body").animate({
                scrollTop: "0"
            }, 500);
        });
    });
}(jQuery));