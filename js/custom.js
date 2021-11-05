$(document).ready(function() {
	$('body').ripples({
			dropRadius: 12, 
			perturbance: 0.0001,
			resolution: 500,
			interactive: true,
		});
$('body').ripples('drop',10,10,15,1);
$('body').ripples('drop',100,130,15,1);
$('body').ripples('drop',10,70,15,1);
$('body').ripples('drop',10,130,15,1);
});