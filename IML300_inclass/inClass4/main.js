$(document).ready(function(){

    var allPs = $("p");
    console.log(allPs);

    var classp = $(".paragraph1");
    console.log(classp);

    var idp = $("#ptag");
    console.log(idp);

    allPs.html("Hi this is my new text");

    var div = $("empty");
    div.html("<h2>HI</h2>");

    // $("img").attr("src", "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=300&quality=85&auto=format&fit=max&s=80a280664b70fa77e4bcb4cde3caf273");

    idp.click(function(){
        $("img").attr("src", "https://images-na.ssl-images-amazon.com/images/I/81%2BZqtzkhsL._SL1500_.jpg");


    });

    $(".paragraph1").click(imgOpacity);
    $("p").click(function(){

      $("body").css("background", "red");
    });

  


});


    function imgOpacity(){
      $("img").css("opacity", "0.5");
    }
