// The technique of binding a function to a subset of its arguments is known as currying.
// Curry can be a succinct way to implement function delegation with less boilerplate than explicit wrapper function.
var curryPlayGround = function() {
  "use strict";

  var path = ["video", "map", "search"];

  function simpleURL(protocol, domain, path) {
    return protocol + "://" + domain + "/" + path;
  }

  var good_practise = function() {
    var urls = path.map(simpleURL.bind(null, "http", "www.google.com"));
    var urlLength = urls.length;
    for (var i = 0; i < urlLength; i++) {
      print(urls[i]);
    }
  }
  
  return good_practise;
}()();
