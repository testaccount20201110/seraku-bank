var tanka= new Array(3);
tanka[0] = 300;
tanka[1] = 450;
tanka[2] = 520;
for (i=1 ; i<=10 ; i++){
  document.write("<TR><TH>" + i + "</TH>");
  for (j=0 ; j<=2 ; j++){
    document.write("<TD>" + tanka[j]*i + "‰~</TD>");
  }
  document.write("</TR>");
}
