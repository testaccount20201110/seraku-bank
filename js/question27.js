function resize(s){
  for (i=0 ; i<=5 ; i++){
    document.images[i].width = s;
  }
}
function ColorHyouji(){
  for (i=0 ; i<=5 ; i++){
    document.images[i].src = "images/nature0" + (i+1) + ".jpg";
  }
}
function MonoHyouji(){
  for (i=0 ; i<=5 ; i++){
    document.images[i].src = "images/m_nature0" + (i+1) + ".jpg";
  }
}
