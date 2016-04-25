// Test that Javascript is a lexical scoped (static scoped) language.
var curryPlayGround = function() {
  "use strict";

  var myVar = 0;
  var addMe = 0;

  function runMe() {
    var myVar = 10; // Shadow the global myVar
    callMe();
  }

  function callMe() {
    addMe = myVar + 10; // If Javascript is static scoped, myVar will be 0 here.
                        // If Javascript is dynamic scoped, myVar will be 10 here.
			// Dynamic scope value is determined by calling context.
  }

  runMe();
  print(addMe);
  print(myVar);
  
}();
