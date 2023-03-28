
// Go into app.js and select all the elements with the class of 'navItem'
// On each of the navItem elements change the color to white.
$(".navItem").css("color", "white");

// Now select the element with the ID of 'nav'
// Give that element a background color of #145
$("#nav").css("background-color", "#145");

// Select all the even list items
// Change the background color to #ccc
$("li:even").css("background-color", "#ccc");

// Select all the odd list items ) Change the background color to aaaa
$("li:odd").css("background-color", "#aaa");

// Select the input tag
// Change the value to be your first name
$("input").val("Jared Malan");