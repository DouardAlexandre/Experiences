




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
  











$('#pointer').velocity({
  translateX: "10px"
}, {
  loop: true
}).velocity("reverse");

var offCanvasIn = [{
  e: $("#offcanvas"),
  p: {
    translateX: [0, "-100%"]
  },
  o: {
    duration: 300
  }
}, {
  e: $("#about"),
  p: {
    translateX: [0, "-10px"],
    opacity: [1, 0]
  },
  o: {
    duration: 300
  }
}, {
  e: $("#images"),
  p: {
    translateX: [0, "-10px"],
    opacity: [1, 0]
  },
  o: {
    duration: 300
  }
}, {
  e: $("#follow"),
  p: {
    translateX: [0, "-10px"],
    opacity: [1, 0]
  },
  o: {
    duration: 300
  }
}, {
  e: $("#close"),
  p: {
    translateY: [0, "-100%"],
    rotateZ: ["180deg", 0]
  },
  o: {
    duration: 300
  }
}];

var offCanvasOut = [{
  e: $("#close"),
  p: {
    translateY: "-100%",
    rotateZ: "180deg"
  },
  o: {
    duration: 300
  }
}, {
  e: $("#about"),
  p: {
    translateX: "-10px",
    opacity: 0
  },
  o: {
    duration: 300
  }
}, {
  e: $("#images"),
  p: {
    translateX: "-10px",
    opacity: 0
  },
  o: {
    duration: 300
  }
}, {
  e: $("#follow"),
  p: {
    translateX: "-10px",
    opacity: 0
  },
  o: {
    duration: 300
  }
}, {
  e: $("#offcanvas"),
  p: {
    translateX: "-100%"
  },
  o: {
    duration: 300
  }
}, ];

// run the sequence on click
$("#open").on('click', function(event) {
  event.preventDefault();
  $.Velocity.RunSequence(offCanvasIn);
});
$("#close").on('click', function(event) {
  event.preventDefault();
  $.Velocity.RunSequence(offCanvasOut);
});

});

