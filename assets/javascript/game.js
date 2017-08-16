// JavaScript function that wraps everything

	var characters = [{	name: "Darth Vader", thumbnail: "assets/images/darth-vader.jpg", strength: 150},
					  { name: "Luke Skywalker", thumbnail: "assets/images/Luke_Skywalker.png", strength: 120},
					  { name: "Obi-Wan-Kanobi", thumbnail: "assets/images/obi-wan-kanobi.jpeg", strength: 160},
					  { name: "Orson Krennic", thumbnail: "assets/images/orson-krennic.jpg", strength: 170}					
					];
	var chose = false;				
$(document).ready(function() {
	 characters.forEach(function(obj){
	 	 var newDiv = $("<div>");
	 	 newDiv.addClass("image-container");
	 	 
	 	 var newElem = $("<h4>");
	 	 newElem.text(obj.name);
	 	 newDiv.append(newElem);
	 	 
	 	 var newImg = $("<img>");
		 newImg.attr("src", obj.thumbnail);
		 newImg.css({"height": "100px", "width" : "140px"});
		 newDiv.append(newImg);
		 newDiv.attr("id", obj.name);
		 
		 var newH5 = $("<h5>");
		 newH5.text(obj.strength);
		 newDiv.append(newH5);

		 $("#characters").append(newDiv);$(this).addClass("enemy-container");
	 });

	 
	$(".image-container").on("click", function(){
	 	var currentObj = $(this).attr("id");
	 	$("#characters").hide();
	 	 if(!chose) {
	 		$(".myCharacter").append($(this));
	 		chose = true;
	 		
		 	$(".image-container").each(function(i){
		 		if(currentObj !== $(this).attr("id")) {
		 			$(".enemy").append($(this));
		 			$(this).css({"background-color":"red", "border-color":"black"});
		 		}
		 	});	
	 	} else {
	 		$(".defenderCharacter").append($(this));
	 		$(this).addClass("defender");
	 	}	
	});

	$(".actionButton").on("click", function() {
		console.log($(".defender").attr("id"));
	});


});	