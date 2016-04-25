// for...in: Enumerate *Keys* in the given structure.
var forinPlayGround = function() {
	"use strict";
  
  var show_good_practise = true;
  var array = [1,2,3];

  // bad_practise will use "for...in" to enumerate array. Keys are index string and values are 1,2,3.
  var bad_practise = function() {
    var sum = 0;
    for (var i in array) {
      sum += i; // Here the 'i' will be '0', '1', '2'.
    }
    print(sum / array.length);
  }

  // good_practise will use "for" to enumerate array.
  var good_practise = function() {
    var sum = 0;
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++) {
      sum += array[i];
    }
    print(sum / array.length);
  }
  
  return show_good_practise ? good_practise : bad_practise;
}()();
