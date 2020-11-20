var n = document.cookie;
if (n == ""){
  document.write("‰‚ß‚Ä‚Ì‚²–K–â‚ ‚è‚ª‚Æ‚¤‚²‚´‚¢‚Ü‚·B");
  setKaisu(1);
  n = 1;
} else {
  n++;
  document.write(n + "‰ñ–Ú‚Ì‚²–K–â‚ ‚è‚ª‚Æ‚¤‚²‚´‚¢‚Ü‚·B");
  setKaisu(n);
}
function setKaisu(s){
  var now = new Date();
  var yy = now.getFullYear();
  yy++;
  now.setFullYear(yy);
  var extime = now.toGMTString();
  document.cookie = s + ";expires=" + extime;
}
