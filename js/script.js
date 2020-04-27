// const maxAllowedChecks = 2;

// function trackChecks() {
//   let checkCount = $("input[type=checkbox]:checked").length;
// $("input[type=checkbox]:not(:checked)").prop("disabled", checkCount >= maxAllowedChecks);
// }

// function trackRadios() {
//   $("input[type=radio]").prop("disabled", true);
// }

var current_progress = 0;

function incrPrgsBar(incr) {
	const pgsbar = $(".progress-bar");

	current_progress += incr;

	if(current_progress > 100) { current_progress = 100 };

	$(".progress-bar")
     	.css("width", current_progress + "%")
     	.attr("aria-valuenow", current_progress)
     	.text(current_progress + "%");
}

function handleButton(data) {
	data.target.classList.forEach(function(clsname) {
		if (clsname == "incr1") { incrPrgsBar(1) };
		if (clsname == "incr3") { incrPrgsBar(3) };
		if (clsname == "incr7") { incrPrgsBar(7) };
	});
}

function init() {
	$(".incr1").click(handleButton);
	$(".incr3").click(handleButton);
	$(".incr7").click(handleButton);
}

$(document).ready(init);