

// get the element to animate

var textWrapper4 = document.querySelector('.ml4 .letters');
textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var element = document.getElementById('about-subheading');
var elementHeight = element.clientHeight;

let pc = 0;
// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView(elem) {
  var $elem = $(elem);

  // Get the scroll position of the page.
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // Get the position of the element on the page.
  var elemTop = Math.round( $elem.offset().top );
  var elemBottom = elemTop + $elem.height();

  return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// animate element when it is in view
function animate() {
  if (inView(element)) {
      //fire animation everytime the user scrolls and the element is in the view
      if(pc == 0){
      anime.timeline({loop: false})
        .add({
          targets: '.ml4 .letter',
          scale: [0, 1],
          duration: 1500,
          elasticity: 600,
          delay: (_el, i) => 45 * (i+1)
        });
        pc++;
      }
  }

  if(!inView(element)){
    pc = 0;
  }
}