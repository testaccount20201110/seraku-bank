var n = document.cookie;
if (n == ""){
  document.write("初めてのご訪問ありがとうございます。");
  setKaisu(1);
  n = 1;
} else {
  n++;
  document.write(n + "回目のご訪問ありがとうございます。");
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
