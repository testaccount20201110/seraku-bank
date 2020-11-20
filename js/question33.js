function saikoro(){
  var a = Math.random() * 6;
  var b = Math.random() * 6;
  a = Math.ceil(a);
  b = Math.ceil(b);
  document.images[0].src = "images/sai_" + a + ".gif";
  document.images[1].src = "images/sai_" + b + ".gif";
}
