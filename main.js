console.log('main.js is connected!');

// /* <script type="text/javascript"> */
// (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="https://www.staticw2.yotpo.com/2SeuSMZdYkOryRWb9a6jqB28SkPmeC8xHeDFVweL/widget.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();
// // </script>

// $(function(){
//     $("#home-button").on({
//      mouseenter: function(){
//       $(this).attr('src','http://www.clker.com/cliparts/d/3/R/P/q/e/hot-pink-home-icon-md.png');
//     },
//     mouseleave: function(){
//       $(this).attr('src','https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=121db2298c113c690bb49153824e54eb&auto=format&fit=crop&w=500&q=60');
//     }
//     });
    
//   });

$(document).ready(function(){
	$("#home-button").hover(function() {
		$(this).attr("src","images/ripple.jpeg");
			}, function() {
		$(this).attr("src","images/ribbons.jpeg");
	});
});
