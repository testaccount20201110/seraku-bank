function fname(fn){
  var n = fn.lastIndexOf("/");
  var m = fn.lastIndexOf(".");
  var fnm = fn.substring(n+1,m);
  var ext = fn.substring(m+1,fn.length);
  alert("�t�@�C�����́u" + fnm + "�v�A�g���q�́u" + ext + "�v�ł��B");
}
