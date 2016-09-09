/*function changeImage() {
        var shownImage = $("#slideshow.visibleImage");
        var nextInLine = shownImage.next();
        nextInLine.addClass("visibleImage");
        shownImage.removeClass("visibleImage");
    };


$(function () {
    console.log("hello, we're inside jQuery")
    
    console.log(changeImage);

    setInterval("changeImage()", 3000);

});*/
$(function () {

    /* SET PARAMETERS */
    var change_img_time     = 5000; 
    var transition_speed    = 100;

    var simple_slideshow    = $("#slideshow"),
        listItems           = simple_slideshow.children('img'),
        listLen             = listItems.length,
        i                   = 0,

        changeList = function () {

            listItems.eq(i).fadeOut(transition_speed, function () {
                i += 1;
                if (i === listLen) {
                    i = 0;
                }
                listItems.eq(i).fadeIn(transition_speed);
            });

        };

    listItems.not(':first').hide();
    setInterval(changeList, change_img_time);

});