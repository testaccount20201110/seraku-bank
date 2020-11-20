function check(){
  var eigo = document.forms[0].elements[0].checked;
  var kotae = document.forms[0].elements[1].value;
  switch(eigo){
    case true:
      if (kotae=="apple" || kotae=="Apple" || kotae=="APPLE"){
        alert("正解です！");
      } else {
        alert("間違いです！");
      }
      break;
    default:
      if (kotae=="りんご" || kotae=="リンゴ" || kotae=="林檎"){
        alert("正解です！");
      } else {
        alert("間違いです！");
      }
  }
}
