$(document).ready(function(){
  $("form#inputPlaceOne").submit(function(event){
    event.preventDefault();
    var inputtedLocation = $("#location").val();
    var inputtedTime = $("#timeOfYear").val();
    var inputtedTransportation = $("#transportation").val();
    var inputtedReason = $("#reasonForTravel").val();
    var inputtedScale = $("#scaleOfFun").val();

    var trip = new Travel(inputtedLocation,inputtedTime,inputtedTransportation,inputtedReason,inputtedScale)
    $("ul.travelHistory").append("<li><span class='travelHistory'>" + trip.location + "</span></li>")
    $(".travelResults").show();

    $(".travelHistory").last().click(function() {
    $(".travelResults h4").text(trip.location);
    $(".timeOfYear").text(trip.timeOfYear);
    $(".transportation").text(trip.transportation);
    $(".reason").text(trip.reason);
    $(".scale").text(trip.scale);
    $(".moreinfo").show();

    $("#location").val("");
    $("#timeOfYear").val("");
    $("#transportation").val("");
    $("#reasonForTravel").val("");
    $("#scaleOfFun").val("");
  });
});


});
function Travel(location,time,transportation,reason,scale){
  this.location=location;
  this.timeOfYear=time;
  this.transportation=transportation
  this.reason=reason
  this.scale=scale
}
