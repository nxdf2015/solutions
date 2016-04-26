
$(function(){


$("#btn-menu").click(function(){
	var attribut = 	$("#empty").css("display")
	
	var attributinit = attribut;
	if (attribut == "none") {
		attribut = "block";

	}
	else{
		attribut = "none";
	}

	$("#empty").css("display",attribut);
})

})
