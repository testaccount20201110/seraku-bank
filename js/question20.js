function kobaisu(){
  var a,b,ac,bc,large,max,ax,bx;
  a = prompt("1‚Â–Ú‚Ì”’l‚ğ“ü—Í‚µ‚Ä‚­‚¾‚³‚¢","");
  b = prompt("2‚Â–Ú‚Ì”’l‚ğ“ü—Í‚µ‚Ä‚­‚¾‚³‚¢","");
  ac = a % 1;
  bc = b % 1;
  if (a<0 || b<0 || ac!=0 || bc!=0){
     alert("1ˆÈã‚Ì®”‚ğ”¼Šp•¶š‚Å“ü—Í‚µ‚Ä‚­‚¾‚³‚¢I");
  }
  if (a >= b){
    large = a;
  } else {
    large = b;
  }
  max = a * b;
  for (i=large ; i<=max ; i++){
    ax = i % a;
    bx = i % b;
    if (ax==0 && bx==0){
      alert("Å¬Œö”{”‚Í" + i + "‚Å‚·");
      break;
    }
  }
}
