function count(){
  var bm = prompt("�a�����̌���1�`12�œ��͂��Ă��������B","");
  var bd = prompt("�a�����̓���1�`31�œ��͂��Ă��������B","");
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
  alert("���̒a�����܂ŁA����" + days + "���ł�")
}
