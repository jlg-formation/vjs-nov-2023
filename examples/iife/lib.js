(function () {
  "use strict";
  var truc = 2;
  console.log("truc: ", truc);

  setTimeout(() => {
    console.log("truc: ", truc);
  }, 1000);
})();
