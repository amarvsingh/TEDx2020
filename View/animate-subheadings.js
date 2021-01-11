
var textWrapper = document.getElementsByClassName('letters'); //gets array of elements with class name letters
for(let i=0;i<textWrapper.length;i++){
  textWrapper[i].innerHTML = textWrapper[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  //replaces each letter with a span class like so: "<span class="letter"> A </span>"
}

var elements = document.getElementsByClassName('subheading');//gets all subheadings

//add a property to determine if an element has been animated or not
for(let i=0;i<elements.length;i++){
  elements[i].hasBeenAnimated = "false"; //originally it is false
}

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
//this function is called when user scrolls
function animate() {

    for(let i=0;i<elements.length;i++){
    if (inView(elements[i]) && elements[i].hasBeenAnimated==="false") {
      //fire animation everytime the user scrolls, element is in the view and has not been animated before
      anime.timeline({loop: false})
        .add({
          targets: '.subheading .letter',
          scale: [0, 1],
          duration: 1500,
          elasticity: 600,
          delay: (_el, i) => 45 * (i+1)
        });
        elements[i].hasBeenAnimated = "true";
  }
  if(!inView(elements[i])){
    elements[i].hasBeenAnimated = "false";
    //if element is out of view change property so it is animated when it is next in view
  }
}


}