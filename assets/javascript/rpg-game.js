// JavaScript function that wraps everything

	var characters = [{	name: "Darth Vader", thumbnail: "assets/images/darth-vader.jpg", strength: 150, attackPower: 20},
					  { name: "Luke Skywalker", thumbnail: "assets/images/Luke_Skywalker.png", strength: 120, attackPower: 5},
					  { name: "Obi-Wan-Kanobi", thumbnail: "assets/images/obi-wan-kanobi.jpeg", strength: 160, attackPower: 8},
					  { name: "Orson Krennic", thumbnail: "assets/images/orson-krennic.jpg", strength: 170, attackPower: 25}					
					];
	var chose = false;				
$(document).ready(function() {
	 var mainCharacter;
	 var opponentCharacter;
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
		 newH5.attr("id", obj.name+"power");

		 $("#characters").append(newDiv);$(this).addClass("enemy-container");
	 });

	 
	$(".image-container").on("click", function(){
	 	$("#characters").hide();
	 	 if(!chose) {
	 		$(".myCharacter").append($(this));
	 		mainCharacter = $(this).attr("id");
	 		chose = true;
	 		
		 	$(".image-container").each(function(i){
		 		if(mainCharacter !== $(this).attr("id")) {
		 			$(".enemy").append($(this));
		 			$(this).css({"background-color":"red", "border-color":"black"});
		 		}
		 	});	
	 	} else {
	 		opponentCharacter = $(this).attr("id");
	 		$(".defenderCharacter").append($(this));
	 		$(this).addClass("defender");
	 	}	
	});

	$(".actionButton").on("click", function() {
		console.log(mainCharacter);
		console.log(opponentCharacter);
		console.log(characters.name[mainCharacter]);
		//characters.name[mainCharacter].strength -= characters.opponentCharacter.attackPower;
		// var h5Id = mainCharacter+"power";
		// console.log(h5Id);
		// $('"#'+h5Id+'"').text("h5");
		
	});


});	

// Game logic : strength <= 0 lose game, restart button, 
// attack points = each opponent has a set attack points
// main attacker attack point increases after each attack  by multiples of 8
// var main character, opponent
// if no opponent in defender area message no one to fight