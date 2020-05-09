var coins = 0;

$(document).ready(function() {

  $(".scene").hide();
  $("#s1").show();

  $("#option1").click(function(){
    $("#s1").hide();
    $("#s2").show();
    coins = coins + 1;
    //coins++; (same thing)
    $("#bling").html(coins);
  });

  $("#option2").click(function(){
    $("#s1").hide();
    $("#s3").show();
  });


  $("#option3").click(function(){
    coins = coins + 1;
    //coins++; (same thing)
    $("#bling").html(coins);
    if(coins>5){
      $("body").css("background", "red");
    }
  });



});
