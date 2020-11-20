function photoChange(){
  var n = document.f1.photo.selectedIndex;
  if (n != 0){
    document.BigPhoto.src = document.f1.photo.options[n].value;
  }
}
