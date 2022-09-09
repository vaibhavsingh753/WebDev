function a() {
  var b = 23;
  // console.log(b);
  c();
  function c() {
    // var b =45;
    console.log(b);
  }
}

// a(); //undefined
var b = 10;
a(); //10


