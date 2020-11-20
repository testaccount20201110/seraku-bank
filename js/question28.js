var now = new Date();
var hh = now.getHours();
var mm = now.getMinutes();
document.write("‚½‚¾‚¢‚Ü" + hh + "" +mm + "•ª‚Å‚·B");
if (hh < 7 || hh>=20){
  document.bgColor = "#0000CC";
  document.fgColor = "#FFFF33";
} else if (hh < 17){
  document.bgColor = "#FFFFFF";
  document.fgColor = "#000000";
} else {
  document.bgColor = "#FFCC66";
  document.fgColor = "#666666";
}
