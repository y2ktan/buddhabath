/*
	Shine by TEMPLATE STOCK
	templatestock.co @templatestock
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

$( document ).ready(function() {


/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
DONT CHANGE ANY CODE UNDER THIS LINE - DONT CHANGE ANY CODE UNDER THIS LINE - DONT CHANGE ANY CODE UNDER THIS LINE
*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	


// PRELOADER	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
	
// SCROLL REVEAL
	window.sr = new scrollReveal();


// PARALLAX IMAGES 
	$('#subscribe').parallax("50%", 0.0);
	
// SMOOTH SCROLL
	smoothScroll.init({
		speed: 900, // Integer. How fast to complete the scroll in milliseconds
		easing: 'easeInOutCubic', // Easing pattern to use
		updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
		offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
		callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
		callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
	});
	

	
// CONTACT FORM
	$("input, textarea").focus(function() {
		$(this).prev("label").hide();
		$(this).prev().prev("label").hide();	 		 	
	});
	   
	$("#contact_form").submit(function() {
		var name = $("#name").val();
		var phone = $("#phone").val();		
		var email = $("#email").val();
		var comment = $("#comment").val();
		
			$('#contact_form').animate({opacity:'0.3'}, 500);
				
			var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone + '&comment=' + comment;
			//alert (dataString);return false;
			$.ajax({
				type: "POST",
				url: "/SubmitParticipant",
				data: dataString,
				success: function() {
					$("#contact_form").animate({opacity:'1'}, 500);
					$('#contact_form').slideUp(300);
					$('#success').delay(2000).css("display", "block");
				}
			});
			return false;
	});
	  
});