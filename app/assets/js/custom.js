$(document).ready(function() {
    // $(".home-view").load("home.html", function() {
    //     console.log("Home view was loaded.");
    // });

    // $(".child-view").load("child.html", function() {
    //     $(".child-view").hide();
    //     console.log("Child view was loaded.");
    // });

    // $('a.child-link').on('click', function(e) {
    //     $(".child-view").show();
    //     $(".home-view").hide();
    // });
    $(".reminder-complete").hide();
    $("#checkAll").click(function() {
        var michael = "<div class='todo'><input type='checkbox' id='demo-copy' name='demo-copy'><label for='demo-copy'>Get <a href='#'>Michael</a>'s medical documents from Doctor Lowe</label></div>";
       $(".reminders").append(michael);
       $(".reminder-complete").fadeIn().delay(2000).fadeOut();
    });
});
