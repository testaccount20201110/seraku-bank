var n = document.cookie;
if (n == ""){
  document.write("���߂Ă̂��K�₠�肪�Ƃ��������܂��B");
  setKaisu(1);
  n = 1;
} else {
  n++;
  document.write(n + "��ڂ̂��K�₠�肪�Ƃ��������܂��B");
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
