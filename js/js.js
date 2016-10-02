$(document).ready(function(){
    //menu
	$('.button').click(function(){
		$('.nav').toggleClass('active');
		$('.button').toggleClass('active');
	});
    //slider
  $('.slider').slick({
      dots:true,
      arrows:false,
  })
  //tabs
  $( "#tabs" ).tabs();
// Hover states on the static widgets
    $( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);
    //select
    (function($) {
		$(function() {
			$('input, select').styler({
				selectSearch: true
			});
		});
		})(jQuery);
});

