var n = getCookie("kaisu");
if (n == ""){
  n = 1;
}
document.write(n +"âÒñ⁄ÇÃÇ≤ñKñ‚Ç†ÇËÇ™Ç∆Ç§Ç≤Ç¥Ç¢Ç‹Ç∑ÅB<BR>");
n++;
setCookie("kaisu",n);
var b = getCookie("blood");
if (b == ""){
  b = "ÅH"
}
document.write("Ç†Ç»ÇΩÇÃååâtå^ÇÕ" + b +"å^Ç≈Ç∑ÇÀÅI<BR>");
function setCookie(key,data){
  var outdata = key + "=" + escape(data);
  var now = new Date();
  var yy = now.getFullYear();
  yy++;
  now.setFullYear(yy);
  var extime = now.toGMTString();
  document.cookie = outdata + ";expires=" + extime;
}
function getCookie(key){
  var tmp = document.cookie + ";";
  var s = tmp.indexOf(key);
  if (s == -1){
    return("");
  } else {
    s = s + key.length + 1;
    var e = tmp.indexOf(";",s);
    var data0 = tmp.substring(s,e);
    var data = unescape(data0);
    return(data);
  }
}
function setBlood(s){
  setCookie("blood",s);
  alert(s + "å^Ç≈ìoò^ÇµÇ‹ÇµÇΩ");
  n--;
  setCookie("kaisu",n);
  location.reload();
}
