// $(document).ready(function() {
//   $(".btn").click(function() {
//     $("body").removeClass();
//     $("body").addClass("red-text");
//   $("btn").click(function();
//     $("body").removeClass();
//     $("body").addClass("dark-background");
//   });
// });

$(document).ready(function() {
  $("#background-button").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  $("#text-button").click(function() {
    $("body").removeClass();
    $("body").addClass("red-text");
  });
$("p").click(function() {
  $(".no-border").toggle();
  $(".border").toggle();
});
});
