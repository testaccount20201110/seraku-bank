function kobaisu(){
  var a,b,ac,bc,large,max,ax,bx;
  a = prompt("1つ目の数値を入力してください","");
  b = prompt("2つ目の数値を入力してください","");
  ac = a % 1;
  bc = b % 1;
  if (a<0 || b<0 || ac!=0 || bc!=0){
     alert("1以上の整数を半角文字で入力してください！");
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
      alert("最小公倍数は" + i + "です");
      break;
    }
  }
}
