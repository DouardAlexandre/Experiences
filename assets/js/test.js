




$( document ).ready(function() {

	//window.jQuery = window.$ ;

	



	$(".e").velocity("fadeIn", { duration: 1500 });

  //modal
  $('#openm').click(function() {
   $('.overlaym').velocity({translateY: ['0%','-100%'] },
    {display:"block"}); 
 });    
  $('#closem').click(function() { 
   $('.overlaym').velocity({translateY: '100%' },
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

