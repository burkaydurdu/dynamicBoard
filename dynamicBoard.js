
$.fn.popup = function(action){
    if(action == "open"){
        $(this).slideDown(500);
    } else if(action ==  "close"){
        $(this).slideUp(500);
    }
}

$.fn.dynamic = function(options){
    var settings = $.extend({
        backgroundColor: '#000000',
        color: '#FFFFFF',
        left: 100,
        top: 100,
        position: 'absolute',
        marginLeft: 5,
        marginBottom: 5,
        padding: 20,
        speed: 500,
        width: 400,
        height: 150,
        borderStyle:'solid',
        borderSize: 5,
        borderColor: '#FDDDDD',
        borderRadius: 0,
        targetTagId: 'page',
        dynamicTagId: 'dynamic_area'
    }, options);
    var screen_width = $(window).width();
    var screen_height = $(window).height();
    var text = $('#' + settings.targetTagId).text();
    $('#' + settings.dynamicTagId)
        .css({
            "display": "none",
            "color": settings.color,
            "backgroundColor": settings.backgroundColor,
            "position": settings.position,
            "width": settings.width,
            "height": settings.height,
            "padding": settings.padding,
            "border-style": settings.borderStyle,
            "border-size": settings.borderSize,
            "borderColor": settings.borderColor,
            "border-radius": settings.borderRadius,
            "left": (screen_width - (settings.width + settings.marginLeft + 40)) * settings.left / 100,
            "top" : (screen_height - (settings.height + settings.marginBottom + 40)) * settings.top/ 100
            });
        return this.each(function(){
            $(this).click(function(event){
                event.stopPropagation(); // windows or document click not permission
                $('#' + settings.dynamicTagId).slideDown(settings.speed);
                if($('#' + settings.dynamicTagId + ' div').hasClass('body')){          
                   $('#' + settings.dynamicTagId + " .body").text(text);
                } else{
                   $('#' + settings.dynamicTagId).append(text);
                }
            });
            $(document).click(function(){
                $('#' + settings.dynamicTagId).slideUp(settings.speed);
            });
    })
}