// Closure: Giving function the ability to access to the context in which it was created.
var closurePlayGround = function() {
	"use strict";
  
  var show_good_practise = true;
	var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var button3 = document.getElementById("button3");
  var buttons = [button1, button2, button3];

	// bad_practise will always print out 3 because the click handler will refer to the same closure where i has become 3.
  var bad_practise = function() {
    var i;
    for (i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        alert("bad practise: " + i);
      });
    }
  }

	// good_practise will print out 0 when clicking button1, 1 when clicking button2 and 2 when clicking button3.
  // Each click handler refer to different closures where i is 0, 1, 2 respectively.
  var good_practise = function() {
    var helper = function(i) {
      return function(event) {
        alert("good practise: " + i);
      }
    }

    var i;
    for (i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", helper(i));
    }
  }
  
  return show_good_practise ? good_practise : bad_practise;
}()();