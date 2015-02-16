// Animations of streetfighter app

$(document).ready(function(){
    //Move Ryu into his ready position
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function(){
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    }).mousedown(function(){
        //play sound
        playHadouken();
        //show ryu throwing
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        //show hadouken and animate it to the right
        $('.hadouken').finish().show().animate(
            {'left': '300px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '-200px');
            }
        );
    }).mouseup(function(){
        //ryu goes back to his ready position
        $('.ryu-ready').show();
        $('.ryu-throwing').hide();
    });    
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}