function kaitou(){
  var kai = new Array(3);
  var s;
  var i = 0;
  for (x=1 ; x<=1000 ; x++){
    s = x*x*x - 53*x*x + 620*x - 1036;
    if (s==0){
      kai[i] = x;
      i++;
    }
    if (i==3){
      break;
    }
  }
  alert("答えは"+ kai[0] + "、" + kai[1] + "、" + kai[2] + "です")
}
