var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].oncllick = function() {
  MainImg.src = smallimg[0].src;
};
smallimg[1].oncllick = function() {
  MainImg.src = smallimg[1].src;
};
smallimg[2].oncllick = function() {
  MainImg.src = smallimg[2].src;
};
smallimg[3].oncllick = function() {
  MainImg.src = smallimg[3].src;
};
