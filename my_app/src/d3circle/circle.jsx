var D3js = require('d3');

module.exports = {
	circle: function() {
			D3js.select("#circle_container").append("circle")
									.attr("cx", 250)
									.attr("cy", 250)
									.attr("r", 1 * (Math.floor(Math.random() * (100 - 50 + 1)) + 50))
									.attr("fill", "purple")
									.on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
									.on("mouseout", function(){d3.select(this).style("fill", "purple");})
									.on("mousedown", animateFirstStep);

			function animateFirstStep(){
				d3.select(this)
				  .transition()            
					.delay(0)            
					.duration(1000)
					.attr("r", 10)
					.attr("cx", Math.floor(Math.random() * (450 - 50 + 1)) + 50)
					.attr("cy", Math.floor(Math.random() * (450 - 50 + 1)) + 50)
					.each("end", animateSecondStep);
			};

			function animateSecondStep(){
				d3.select(this)
				  .transition()
					.duration(1000)
					.attr("r", 1 * (Math.floor(Math.random() * (100 - 50 + 1)) + 50));
					//uncomment next line for countiniously circle changes
					//.each("end", animateFirstStep);
			};
		}
}