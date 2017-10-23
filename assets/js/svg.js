document.addEventListener('DOMContentLoaded', function() {
  var svgAttributes = anime({
  targets: '#svgAttributes polygon',
  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
  easing: 'easeInOutExpo'
});

  var svg = new Walkway('#triangle');
  svg.draw(function() {
    console.log('Finished triangle!');
  });

  var svg2 = new Walkway('#polyline');
  svg2.draw(function() {
    console.log('Finished polyline!');
  });
  
});