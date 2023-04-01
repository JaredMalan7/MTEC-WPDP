var container = $('#container');
for (var i = 0; i < 16; i++) {
    var newDiv = $('<div></div>');
    newDiv.addClass('divBox');
    container.append(newDiv);
}

$('.divBox').on('click', function(){
    $(this).toggleClass('switch');
});