/*
var a = new Array("00","33","66","99","CC","FF");
var c,tda,tdb,tdc;
for (i=0 ; i<=5 ; i++){
  document.write("<TR>");
  for (j=0 ; j<=5 ; j++){
    for (k=0 ; k<=5 ; k++){
      c = "#" + a[i] + a[j] + a[k];
      tda = "background-color:" + c + ";";
      tdb = "document.bgColor='" + c + "';";
      tdc = "alert('" + c + "');";
      document.write('<TD style="' + tda + '" ' +
                         'onmouseover="' + tdb + '" ' +
                         'onclick="' + tdc + '"></TD>');
    }
  }
  document.write("</TR>");
}
*/
var a = new Array("00","33","66","99","CC","FF");
var c,tda,tdb,tdc;
for (i=0 ; i<=5 ; i++){
  document.write("<TR>");
  for (j=0 ; j<=5 ; j++){
    for (k=0 ; k<=5 ; k++){
      c = "#" + a[i] + a[j] + a[k];
      tda = "background-color:" + c + ";";
      tdb = "document.bgColor='" + c + "';";
      tdc = "alert('" + c + "');";
      document.write('<TD style="' + tda + '" ' + 'onmouseover="' + tdb + '" ' + 'onclick="' + tdc + '"></TD>');
    }
  }
  document.write("</TR>");
}
