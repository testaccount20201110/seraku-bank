function check(){
  var eigo = document.forms[0].elements[0].checked;
  var kotae = document.forms[0].elements[1].value;
  switch(eigo){
    case true:
      if (kotae=="apple" || kotae=="Apple" || kotae=="APPLE"){
        alert("�����ł��I");
      } else {
        alert("�ԈႢ�ł��I");
      }
      break;
    default:
      if (kotae=="���" || kotae=="�����S" || kotae=="�ь�"){
        alert("�����ł��I");
      } else {
        alert("�ԈႢ�ł��I");
      }
  }
}
