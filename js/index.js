jQuery(document).ready(function(){

  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  var today = year + "-" + month + "-" + day;
  document.getElementById('datepicker').min = today;

  $('a[href*=#]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    event.preventDefault();
  });


  setTimeout(changeBanner2, 8000);
  function changeBanner1(){
    $("#foto-banner").fadeTo(500,0.1, function() {
      $("#foto-banner").attr("src",'fotos/banner-hacienda/1.jpg');
    }).fadeTo(1000,1);
    setTimeout(changeBanner2, 8000);
  }

  function changeBanner2(){
    $("#foto-banner").fadeTo(500,0.1, function() {
      $("#foto-banner").attr("src",'fotos/banner-hacienda/2.jpg');
    }).fadeTo(1000,1);
    setTimeout(changeBanner3, 8000);
  }

  function changeBanner3(){
    $("#foto-banner").fadeTo(500,0.1, function() {
      $("#foto-banner").attr("src",'fotos/banner-hacienda/3.jpg');
    }).fadeTo(1000,1);
    setTimeout(changeBanner4, 8000);
  }

  function changeBanner4(){
    $("#foto-banner").fadeTo(500,0.1, function() {
      $("#foto-banner").attr("src",'fotos/banner-hacienda/4.jpg');
    }).fadeTo(1000,1);
    setTimeout(changeBanner1, 8000);
  }

  $("#titulo-camerino").hover(
    function(){
      $("#camerino").css("transform", "scale(1.1,1.1)");
    },
    function(){
      $("#camerino").css("transform", "scale(1,1)");
    }
  );

  $("#titulo-munecas").hover(
    function(){
      $("#munecas").css("transform", "scale(1.1,1.1)");
    },
    function(){
      $("#munecas").css("transform", "scale(1,1)");
    }
  );

  $("#titulo-boda").hover(
    function(){
      $("#boda").css("transform", "scale(1.1,1.1)");
    },
    function(){
      $("#boda").css("transform", "scale(1,1)");
    }

  );

  $("#titulo-capilla").hover(
    function(){
      $("#capilla").css("transform", "scale(1.1,1.1)");
    },
    function(){
      $("#capilla").css("transform", "scale(1,1)");
    }
  );

  $("#titulo-salon").hover(
    function(){
      $("#salon").css("transform", "scale(1.1,1.1)");
    },
    function(){
      $("#salon").css("transform", "scale(1,1)");
    }
  );


  setTimeout(changeCamerino, 2000);
  function changeCamerino(){
    $("#camerino").fadeTo(500,0.1, function() {
      $("#camerino").attr("src",'fotos/servicios-hacienda/7.jpg');
    }).fadeTo(1000,1);
    // $("#descripcion-camerino h3").text("Hola");
    setTimeout(changeMuneca, 2000);
    return false;
  }

  function changeMuneca(){
    $("#munecas").fadeTo(500,0.1, function() {
      $("#munecas").attr("src",'fotos/servicios-hacienda/12.jpg');
    }).fadeTo(1000,1);
    setTimeout(changeBoda, 2000);
    return false;
  }

  function changeBoda(){
    $("#boda").fadeTo(500,0.1, function() {
      $("#boda").attr("src",'fotos/servicios-hacienda/15.jpg');
    }).fadeTo(1000,1);
    setTimeout(changeSalon, 2000);
    return false;
  }

  function changeSalon(){
    $("#salon").fadeTo(500,0.1, function() {
      $("#salon").attr("src",'fotos/servicios-hacienda/4.jpg');
    }).fadeTo(1000,1);
    setTimeout(changeCapilla, 2000);
    return false;
  }

  function changeCapilla(){
    $("#capilla").fadeTo(500,0.1, function() {
      $("#capilla").attr("src",'fotos/servicios-hacienda/10.jpg');
    }).fadeTo(1000,1);
    setTimeout(changeCamerino1, 2000);
    return false;
  }

  function changeCamerino1(){
    $("#camerino").fadeTo(500,0.1, function() {
      $("#camerino").attr("src",'fotos/servicios-hacienda/6.jpg');
    }).fadeTo(1000,1);
    setTimeout(changeMuneca1, 2000);
    return false;
  }

  function changeMuneca1(){
    $("#munecas").fadeTo(500,0.1, function() {
      $("#munecas").attr("src",'fotos/servicios-hacienda/11.jpg');
    }).fadeTo(1000,1);
    setTimeout(changeBoda1, 2000);
    return false;
  }

  function changeBoda1(){
    $("#boda").fadeTo(500,0.1, function() {
      $("#boda").attr("src",'fotos/servicios-hacienda/1.jpg');
    }).fadeTo(1000,1);
    setTimeout(changeSalon1, 2000);
    return false;
  }

  function changeSalon1(){
    $("#salon").fadeTo(500,0.1, function() {
      $("#salon").attr("src",'fotos/servicios-hacienda/14.jpg');
    }).fadeTo(1000,1);
    setTimeout(changeCapilla1, 2000);
    return false;
  }

  function changeCapilla1(){
    $("#capilla").fadeTo(500,0.1, function() {
      $("#capilla").attr("src",'fotos/servicios-hacienda/9.jpg');
    }).fadeTo(1000,1);
    setTimeout(changeCamerino, 2000);
    return false;
  }



});
