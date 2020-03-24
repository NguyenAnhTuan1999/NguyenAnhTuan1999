$(document).ready(function(){
	var obj = document.getElementById("button");
	obj.onclick = changeImage;
	
	$("#btn1").click(function(){
		$("#image1").width(($("#image1").width()) + 10);
		$("#image1").height(($("#image1").height()) + 6);
	});
	
		$("#btn2").click(function(){
		$("#image1").width(($("#image1").width()) - 10);
		$("#image1").height(($("#image1").height()) - 6);
	});
});
onmouseover

var imageID = 0;
function changeImage(){
	if(imageID == 0){
		$("#image1").attr("src", "./dawn-dusk-hd-wallpaper-36717.jpg");
		imageID = 1;
	}else{
		$("#image1").attr("src", "./abstract-art-artistic-327509.jpg");
		imageID = 0;
	}
}
