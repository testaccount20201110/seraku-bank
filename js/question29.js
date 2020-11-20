function count(){
  var bm = prompt("’a¶“ú‚ÌŒ‚ğ1`12‚Å“ü—Í‚µ‚Ä‚­‚¾‚³‚¢B","");
  var bd = prompt("’a¶“ú‚Ì“ú‚ğ1`31‚Å“ü—Í‚µ‚Ä‚­‚¾‚³‚¢B","");
  var birthday = new Date();
  var now = new Date();
  birthday.setMonth(bm-1);
  birthday.setDate(bd);
  var ms = birthday.getTime() - now.getTime();
  if (ms <= 0){
    var by = birthday.getFullYear();
    birthday.setFullYear(by+1);
    ms = birthday.getTime() - now.getTime();
  }
  var days = ms / (24 * 60 * 60 * 1000);
  days = Math.ceil(days);
  alert("Ÿ‚Ì’a¶“ú‚Ü‚ÅA‚ ‚Æ" + days + "“ú‚Å‚·")
}
