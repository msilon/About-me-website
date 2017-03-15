$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
    $(".snake").snakeify({
  		speed: 200
	});
});