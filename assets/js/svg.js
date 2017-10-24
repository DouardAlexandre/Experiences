document.addEventListener('DOMContentLoaded', function() {
  //eye------------------------------
  var svgAttributes = anime({
    targets: '#svgAttributes .eye',
    points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
    easing: 'easeInOutExpo'
  });

  document.querySelector('#svgAttributes').onclick = function() {
    svgAttributes.play();
    svgAttributes.reverse();
  };//eye------------------------------
  

  //triangle------------------------------
  var lineDrawing = anime({
    targets: '#triangle path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });




  /*var svg = new Walkway('#triangle');

  svg.draw(function() {
    console.log('Finished triangle!');
  });
  */
  //typo------------------------------
  var svg2 = new Walkway({
    selector: '#hello',
    duration: 3000
  });
<<<<<<< Updated upstream
  
});
=======

  svg2.draw(function() {
    console.log('Finished hello!');
  });



//anime js morphing---------------------------------------------
var morphing = anime({
  targets: '#morphing .polymorph',
  points: [
    { value: '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369' },
    { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
    { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
    { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
  ],
  easing: 'easeOutQuad',
  duration: 2000,
  loop: true
});






});






>>>>>>> Stashed changes
