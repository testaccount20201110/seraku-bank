var a;
function kotae(){
  a = prompt("答えを入力してください","");
  switch (a){
    case "岩手県":
      alert("正解です");
      break;
    case "北海道":
      alert("北海道は県ではありませんよ");
      break;
    default:
      alert("間違いです");
  }
}
