document.addEventListener('DOMContentLoaded', function () {
console.log('main.js is connected!');


$(document).ready(function(){
	$(".switch1").hover(function() {
		$(this).attr("src","https://yt3.ggpht.com/a-/ACSszfEwLo6GOd9xjajsiIuVd0vDvzh5XhqQzC_j0w=s900-mo-c-c0xffffffff-rj-k-no");
			}, function() {
		$(this).attr("src","https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ba300ef73bb96dcb578114cc4ce8759&auto=format&fit=crop&w=800&q=60");
	});
});

$(document).ready(function(){
	$(".switch2").hover(function() {
		$(this).attr("src","https://yt3.ggpht.com/a-/ACSszfEwLo6GOd9xjajsiIuVd0vDvzh5XhqQzC_j0w=s900-mo-c-c0xffffffff-rj-k-no");
			}, function() {
		$(this).attr("src","https://images.unsplash.com/photo-1530467212787-ae644315e6bb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ae1add6b0380256a1926d80b21ff380&auto=format&fit=crop&w=800&q=80");
	});
});

$(document).ready(function(){
	$(".switch3").hover(function() {
		$(this).attr("src","https://yt3.ggpht.com/a-/ACSszfEwLo6GOd9xjajsiIuVd0vDvzh5XhqQzC_j0w=s900-mo-c-c0xffffffff-rj-k-no");
			}, function() {
		$(this).attr("src","https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76ba3dc274cc7026595de36ee1d63da4&auto=format&fit=crop&w=1349&q=80");
	});
});

$(document).ready(function() {	
	$('.button2').click(function(e) {
		console.warn('clicking button 2')
		
		//prevent default action (hyperlink)
		e.preventDefault();
		
		//Get clicked link href
		var image_href = "https://financesonline.com/uploads/2018/02/vp7d65776eca9163ed93117cfb810f4b91.png"
		
		/* 	
		If the lightbox window HTML already exists in document, 
		change the img src to to match the href of whatever link was clicked
		
		If the lightbox window HTML doesn't exists, create it and insert it.
		(This will only happen the first time around)
		*/
		
		if ($('#lightbox').length > 0) { // #lightbox exists
			
			//place href as img src value
			$('#content').html('<img src="' + image_href + '" />');
		   	
			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox').show();
		}
		
		else { //#lightbox does not exist - create and insert (runs 1st time only)
			
			//create HTML markup for lightbox window
			var lightbox = 
			
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img id="lightboximg" src=https://financesonline.com/uploads/2018/02/vp5cf181174ba31a2d394c0005d5009aae.png>' +
				'</div>' +	
			'</div>';
				
			//insert lightbox HTML into page
			$('body').append(lightbox);
		}
		
	});
	
	//Click anywhere on the page to get rid of lightbox window
	$('#lightbox').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').hide();
		console.log('close')
	});

});

$(".center").mouseover(function(){
	 $(".leftimage").css("opacity", ".2");
	 $(".rightimage").css("opacity", ".2");
    });
    $(".center").mouseout(function(){
		$(".leftimage").css("opacity", "1");
		$(".rightimage").css("opacity", "1");
    });
/////scroll top//
$("#testimonial_4").click(function(e) {
	console.log('button')
	e.preventDefault();
	$("html, body").animate({scrollTop: 0}, "slow");
	return false;
		});
////nav scroll 		

$('a[href*=#]').click(function(e) {
	console.log('href')
	e.preventDefault(); // prevent hard jump, the default behavior
	var target = $(this).attr("href"); // Set the target as variable
	// perform animated scrolling by getting top-position of target-element and set it as scroll target
	$('html, body').stop().animate({
	scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
//////
$(function() {
	var changeNav = $('nav')
	var changeLink = $('.navigation-link');  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 500) {
			changeNav.addClass("scrolled");
			changeLink.addClass("link-scroll");
        } else {
			changeNav.removeClass("scrolled");
			changeLink.removeClass("link-scroll");
        }
    });
  
});

})