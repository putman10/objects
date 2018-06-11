$(document).ready(function(){
  $("form#inputPlaceOne").submit(function(event){
    event.preventDefault();
    var inputtedLocation = $("#project").val();
    var inputtedTime = $("#tasks1").val();
    var inputtedTransportation = $("#tasks2").val();
    var inputtedReason = $("#tasks3").val();
    var inputtedScale = $("#tasks4").val();

    var toDoList = new toDo(inputtedLocation,inputtedTime,inputtedTransportation,inputtedReason,inputtedScale)
    $("ul.taskHistory").append("<li><span class='travelHistory'>" + toDoList.location + "</span></li>")
    $(".taskResults").show();
    $("#project").val("");
    $("#tasks1").val("");
    $("#tasks2").val("");
    $("#tasks3").val("");
    $("#tasks4").val("");
    console.log(typeof toDoList + "item in todo list" + typeof toDoList.scale)

    $(".taskHistory li").last().click(function() {

    $(".moreinfo").html("<div class='tasks'>" + "</div>" + "<button type='submit' name='btn' id='clear-button'>Clear</button>");

    if (toDoList.location !== "") {
      $(".tasks").append("<h4>" + toDoList.location + "</h4>");
    }
    if (toDoList.timeOfYear !== "") {
      $(".tasks").append("<p>Task: " + toDoList.timeOfYear + "</p>");
    }
    if (toDoList.transportation !== "") {
      $(".tasks").append("<p>Task: " + toDoList.transportation + "</p>");
    }
    if (toDoList.reason !== "") {
      $(".tasks").append("<p>Task: " + toDoList.reason + "</p>");
    }
    if (toDoList.scale !== "") {
      $(".tasks").append("<p>Task: " + toDoList.scale + "</p>");
    }

    $(".moreinfo").show();
    $("#clear-button").click(function() {
      $(".tasks").remove();
      $(".moreinfo").toggle();

    });

  });
});




});
function toDo(location,time,transportation,reason,scale){
  this.location=location;
  this.timeOfYear=time;
  this.transportation=transportation
  this.reason=reason
  this.scale=scale
}
