function goukei(){
  var kai = 0;
  var bunbo = 2;
  var a;
  for (i=1 ; i<=10 ; i++){
    a = 1 / bunbo;
    kai = kai + a;
    bunbo = bunbo * 2;
  }
  alert("合計は" + kai+ "です");
}
