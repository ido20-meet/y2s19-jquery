// Write all your JavaScript and JQuery code in this file! :)



function updateSize(newSize) {
  // FINISH ME! Set the width of the MEET logo to be newSize in pixels.
  $("#logo").css("width", newSize);
} 


function updateLeftPosition(newX) {
	$("#logo").css("transform", "rotateX("+newX+"deg)");
}

function updateTopPosition(newY) {
	$("#logo").css("transform", "rotateY("+newY+"deg)");
}

function updateDownPosition(newZ) {
	$("#logo").css("transform", "rotateZ("+newZ+"deg)");
}
