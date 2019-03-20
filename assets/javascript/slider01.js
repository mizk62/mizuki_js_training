var pics_src = new Array("../assets/images/img_slid_01.jpg","../assets/images/img_slid_02.jpg","../assets/images/img_slid_03.jpg");
var num = -1;

// slideshow_timer();

function slideshow_timer(){
  if (num == 2){
      num = 0;
  }
  else {
      num ++;
  }
  document.getElementById("mypic").src=pics_src[num];
  setTimeout("slideshow_timer()",1000);
}
