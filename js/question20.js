function kobaisu(){
  var a,b,ac,bc,large,max,ax,bx;
  a = prompt("1�ڂ̐��l����͂��Ă�������","");
  b = prompt("2�ڂ̐��l����͂��Ă�������","");
  ac = a % 1;
  bc = b % 1;
  if (a<0 || b<0 || ac!=0 || bc!=0){
     alert("1�ȏ�̐����𔼊p�����œ��͂��Ă��������I");
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
      alert("�ŏ����{����" + i + "�ł�");
      break;
    }
  }
}
