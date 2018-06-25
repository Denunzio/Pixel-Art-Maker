$(document).ready(function() {
    $('#submitCanvas').click(function () {
        makeGrid();
    });

});
// Select size input
function makeGrid() {
$('#pixelCanvas').empty(); //** clears to make new grid
//**
//** creates grid by user input
    var rows = $('#inputHeight').val(); //** Get the value of the height input
    var cols = $('#inputWidth').val(); //** Get the value of width input

	if(rows > 100 || cols > 100){
		alert('Try another number less than 100 and more than one!'); //** no number greater than 100
		return;
	}
    for (var i=1; i<=rows; i++) {  //** makes the rows and cols
    	console.log($('#pixelCanvas'));
        $('#pixelCanvas').append('<tr></tr>');
        for (var y = 1; y <= cols; y++) {
            $('#pixelCanvas').find('tr:last').append('<td class="colorSquare"></td>');
        }
    }

    $('.colorSquare').click(function (event) {
        colorAssigner($(event.target));
    });
};

function colorAssigner(square) { //** assigns a color to the square
    square.css('background-color', $('#colorPicker').val());
};