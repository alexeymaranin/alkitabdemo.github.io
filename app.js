$(function() {


//    Fixed header

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let description = $("#description")
    let content = $("#content")
    let contentContent = $("#contentContent")
    let descriptionContent = $("#descriptionContent")



//    Nav Toggle


    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    content.on("click", function(event) {
        event.preventDefault();

        descriptionContent.addClass("hide");
        contentContent.addClass("show");
        content.addClass("extra__active");
        description.removeClass("extra__active");


    });

    description.on("click", function(event) {
        event.preventDefault();

        contentContent.removeClass("show");
        descriptionContent.removeClass("hide");
        content.removeClass("extra__active");
        description.addClass("extra__active");
    });



})








