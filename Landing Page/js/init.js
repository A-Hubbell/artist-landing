if($(window).width() < 990) {
    $('#userEmail').attr("placeholder", "Enter email here...");
}



$('#emailSubmit').jrumble({
    speed:75,
    x:5,
    y:5
});

setInterval(function() {
    $('#emailSubmit').trigger('startRumble');
    setTimeout(function(){
        $('#emailSubmit').trigger('stopRumble');
    },700);
}, 4000);

