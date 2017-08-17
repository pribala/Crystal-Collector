
var crystals = [{name: "Crystal-1", src: "assets/images/crystal1.jpg", power: 0},
{name: "Crystal-2", src: "assets/images/crystal2.jpg", power: 0},
{name: "Crystal-3", src: "assets/images/crystal3.jpg", power: 0},
{name: "Crystal-4", src: "assets/images/crystal4.jpg", power: 0}]
 
function generateNumber(min, max) {
	return Math.floor(Math.random() * max) + min;
}
var target = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;

$(document).ready(function() {
	crystals.forEach(function(obj) {
	 	obj.power = generateNumber(1, 12);
	 	var newDiv = $("<div>");
	 	newDiv.addClass("col-sm-3");
	 	//var newImg = $("<img>");
		// newImg.attr("src", obj.src);
		// newDiv.append(newImg);
		// newImg.addClass("img img-responsive");
		// newImg.attr("data-attribute", obj.power);
		var newBtn = $("<button>");
		newBtn.css({"width": "250px", "height": "202px"});
		newBtn.css({"background-image": "url("+obj.src+")"});
		newBtn.attr("data-attribute", obj.power);
		newDiv.append(newBtn);
		$("#image-container").append(newDiv);
	});
	target = generateNumber(19,120);
	$("#targetNum").text(target);
	
	$("#wins").text(wins);
	$("#losses").text(losses);
	$("#totalScore").text(totalScore);

	$("button").on("click", function(){
		totalScore += parseInt($(this).attr("data-attribute"));
		$("#totalScore").text(totalScore);
		if(totalScore === target) {
			wins++;
			$("#wins").text(wins);
			resetGame();
		} else if(totalScore > target) {
			losses++;
			$("#losses").text(losses);
			resetGame();
		}
	});

	function resetGame() {
		target = generateNumber(19,120);
		$("#targetNum").text(target);
		totalScore = 0;
		$("#totalScore").text(totalScore);
	}
});