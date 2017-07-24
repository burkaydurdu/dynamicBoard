$(document).ready(function(){
    $('#object').dynamic({
        backgroundColor : "#33F0FF",
        color : "#000000",
        left : 100,
        top : 0,
        borderRadius: 20
    });
    $('#open').click(function(){
        event.stopPropagation();
        console.log('open');
        $('#dynamic_area').popup("open");
    });
    $('#close').click(function(){
        event.stopPropagation();
        console.log('close');
        $('#dynamic_area').popup("close");
    })
});