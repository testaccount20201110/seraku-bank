function fname(fn){
  var n = fn.lastIndexOf("/");
  var m = fn.lastIndexOf(".");
  var fnm = fn.substring(n+1,m);
  var ext = fn.substring(m+1,fn.length);
  alert("ファイル名は「" + fnm + "」、拡張子は「" + ext + "」です。");
}
