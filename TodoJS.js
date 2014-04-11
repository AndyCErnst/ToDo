/**
 * Created by Andy on 4/3/2014.
 */
$(document).ready(function () {
    $("form").on("submit", function (event) {
        event.preventDefault();
        var entry = $("#entry").val();
        if (entry !== "") {
            $("#ToDoList").append("<div class='item'>" + entry + "</div>");
            $("div").addClass("item");
            $("#entry:text").val("");
        };
    });

    $(".item").on("click", "div", function () {
        $(this).text("done!");
        $(this).hide(500, function () {
            $(this).remove();
        });
    });

    $(".clear").on("click", function () {
        var item = $(".item div");
        item.text("done!");
        $(item).hide(500, function () {
            $(item).addClass("temp");
            $(item).show();
            $(item).removeClass("item");
            $(".temp").remove();
        });
    });
});