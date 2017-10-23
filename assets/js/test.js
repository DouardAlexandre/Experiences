




$( document ).ready(function() {

	window.jQuery = window.$ ;

	
var svg = new Walkway({
    selector: '#test',
    duration: '2000',
  // can pass in a function or a string like 'easeOutQuint'
  /*easing: function (t) {
    return t * t;
  }*/
});

  svg.draw();



	$(".e").velocity("fadeIn", { duration: 1500 });




  //modal
  $('#open').click(function() {
   $('.overlay').velocity({translateY: ['0%','-100%'] },
    {display:"block"}); 
 });    
  $('#close').click(function() { 
   $('.overlay').velocity({translateY: '100%' },
    {display:"none"});
 }); 



  //Flip card
  var $guts = false;
  $('.card').hover( function() {
  	if (!$guts) {
  		$guts = $(this).find('.card-guts');
  	}
  	$guts.velocity('stop').velocity({rotateY: '180deg'});
  }, function() {
  	$guts.velocity('stop').velocity({rotateY: '0deg'});
  });
  var $guts2 = false;
  $('.card2').hover( function() {
  	if (!$guts2) {
  		$guts2 = $(this).find('.card-guts2');
  	}
  	$guts2.velocity('stop').velocity({rotateY: '180deg'});
  }, function() {
  	$guts2.velocity('stop').velocity({rotateY: '0deg'});
  });
  













});

