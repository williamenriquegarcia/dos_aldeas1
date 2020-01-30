// JavaScript Document

//PRECARGA
//$(window).load(function() {
//$(document).ready(function(){	
//	"use strict";
//	$(".contenedor-precarga").animate({opacity: 1}, 1500);
//	$(".contenedor-texto-precarga").animate({opacity: 1}, 1500);
//});
$(document).ready(function(){
	"use strict";
	$(".bloque-color-precarga").delay(100).animate({opacity: 0}, 500);
});
$(document).ready(function(){
/*$(window).load(function() {*/
	"use strict";
	$(".precarga").delay(2000).fadeOut("1000");
});

//home
//$(document).ready(function(){
$(window).load(function() {
	"use strict";
	$(".elemento-titulo-home-1").delay(500).animate({opacity: 1 }, 1300);
	$(".elemento-titulo-home-2").delay(500).animate({opacity: 1 }, 1300);
	
	$(".boton-seccion-home-activo").delay(6550).fadeIn();
	
	$(".panel-boton-home-cap-1").delay(4000).animate({ 'marginTop': '0px', opacity: 1 }, 1000);
	$(".panel-boton-home-cap-2").delay(4500).animate({ 'marginTop': '0px', opacity: 1 }, 1000);
	$(".panel-boton-home-cap-3").delay(5000).animate({ 'marginTop': '0px', opacity: 1 }, 1000);
	$(".panel-boton-home-cap-4").delay(5500).animate({ 'marginTop': '0px', opacity: 1 }, 1000);
	$(".panel-boton-home-cap-5").delay(6000).animate({ 'marginTop': '0px', opacity: 1 }, 1000);
	$(".panel-boton-home-cap-6").delay(6500).animate({ 'marginTop': '0px', opacity: 1 }, 1000);
	
	$(".caja-titulo-home").delay(4100).animate({ 'bottom': '40px', opacity: 1 }, 4000);
	//$(".contenedor-botones-secciones-home").delay(4000).animate({opacity: 1}, 2400);
	$(".caja-texto-home").delay(1500).animate({ 'marginTop': '40px', opacity: 1 }, 3000);
});

$(document).ready(function(){
	"use strict";
	$(".boton-home-cap-1").hover(function(){
		$('.fondo-cap-1').stop(true).fadeIn();
	});
	$(".boton-home-cap-1").mouseleave(function(){
		$('.fondo-cap-1').stop(true).fadeOut();
	});
	
	$(".boton-home-cap-2").hover(function(){
		$('.fondo-cap-2').stop(true).fadeIn();
	});
	$(".boton-home-cap-2").mouseleave(function(){
		$('.fondo-cap-2').stop(true).fadeOut();
	});
	
	$(".boton-home-cap-3").hover(function(){
		$('.fondo-cap-3').stop(true).fadeIn();
	});
	$(".boton-home-cap-3").mouseleave(function(){
		$('.fondo-cap-3').stop(true).fadeOut();
	});
	
	$(".boton-home-cap-4").hover(function(){
		$('.fondo-cap-4').stop(true).fadeIn();
	});
	$(".boton-home-cap-4").mouseleave(function(){
		$('.fondo-cap-4').stop(true).fadeOut();
	});
	
	$(".boton-home-cap-5").hover(function(){
		$('.fondo-cap-5').stop(true).fadeIn();
	});
	$(".boton-home-cap-5").mouseleave(function(){
		$('.fondo-cap-5').stop(true).fadeOut();
	});
	
	$(".boton-home-cap-6").hover(function(){
		$('.fondo-cap-6').stop(true).fadeIn();
	});
	$(".boton-home-cap-6").mouseleave(function(){
		$('.fondo-cap-6').stop(true).fadeOut();
	});
});

//NAV
//ocultar-mostrar flecha bajar
$(window).scroll(function(){
	"use strict";
	if ($(this).scrollTop() > 500) {
		$('.grupo-titulo').fadeOut();
		} else {
	$('.grupo-titulo').fadeIn();
	}
});
/*$(window).scroll(function(){
	"use strict";
	if ($(this).scrollTop() > 100) {
		$('.caja-flecha-bajar-apertura-instruccion').fadeOut();
		} else {
	$('.caja-flecha-bajar-apertura-instruccion').fadeIn();
	}
});*/

$(document).scroll(function () {
"use strict";	
var bodyRect = document.body.getBoundingClientRect(),
    elemRect = document.getElementById("break").getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top - window.innerHeight;
    var y = $(this).scrollTop();
    if (y > 100 && y < offset) {
        $('.flecha-bajar').fadeIn();
    } else {
        $('.flecha-bajar').fadeOut();
    }
});

//ocultar-mostrar flecha bajar
$(window).scroll(function(){
	"use strict";
	if ($(this).scrollTop() > 100) {
		$('.flecha-bajar-home').fadeOut();
		} else {
	$('.flecha-bajar-home').fadeIn();
	}
});

$(document).ready(function(){
	"use strict";	
	$(".boton-capitulos-chiribiquete").hover(function(){
		$(".fondo-menu-chiribiquete").stop(true).fadeIn(200);
	});
	$(".boton-capitulos-chiribiquete").mouseleave(function(){
		$(".fondo-menu-chiribiquete").stop(true).fadeOut(200);
	});
	$(".boton-capitulos-boyaca").hover(function(){
		$(".fondo-menu-boyaca").stop(true).fadeIn(200);
	});
	$(".boton-capitulos-boyaca").mouseleave(function(){
		$(".fondo-menu-boyaca").stop(true).fadeOut(200);
	});
	$(".boton-capitulos-caqueta").hover(function(){
		$(".fondo-menu-caqueta").stop(true).fadeIn(200);
	});
	$(".boton-capitulos-caqueta").mouseleave(function(){
		$(".fondo-menu-caqueta").stop(true).fadeOut(200);
	});
	$(".boton-capitulos-guaviare").hover(function(){
		$(".fondo-menu-guaviare").stop(true).fadeIn(200);
	});
	$(".boton-capitulos-guaviare").mouseleave(function(){
		$(".fondo-menu-guaviare").stop(true).fadeOut(200);
	});
	$(".boton-capitulos-sierra").hover(function(){
		$(".fondo-menu-sierra").stop(true).fadeIn(200);
	});
	$(".boton-capitulos-sierra").mouseleave(function(){
		$(".fondo-menu-sierra").stop(true).fadeOut(200);
	});
	$(".boton-capitulos-tumaco").hover(function(){
		$(".fondo-menu-tumaco").stop(true).fadeIn(200);
	});
	$(".boton-capitulos-tumaco").mouseleave(function(){
		$(".fondo-menu-tumaco").stop(true).fadeOut(200);
	});
});

//ver - ocultar menu
$(document).ready(function(){
	"use strict";
	$(".boton-toggle-menu").on("click", function () {
		$('.contenedor-menu').toggleClass('contenedor-menu-visible');
		/*$('.boton-cap1').toggleClass('boton-menu-capitulos-visible-1');
		$('.boton-ver-menu-header').toggleClass('icono-cerrar-menu');*/
	});
});

$(document).ready(function () {
"use strict";	
   $(".boton-toggle-menu").click(function () {
      $("#titulo-menu").text(function(i, text){
          return text === "Capítulos" ? "Ocultar menú" : "Capítulos";
      });
   });
});

//apertura cap
$(document).ready(function(){
//$(window).load(function() {
	"use strict";
	$(".elemento-titulo-apertura-cap").delay(2100).animate({ width: '250px', opacity: 1 }, 3000);
	$(".titulo-capitulo-1").delay(2500).animate({ 'marginBottom': '10px', opacity: 1 }, 2500);
	$(".titulo-capitulo-2").delay(2500).animate({ 'marginTop': '10px', opacity: 1 }, 2500);
	$(".caja-flecha-bajar-apertura").delay(3100).animate({ opacity: 1 }, 2500);
});


//reproducir camaras trampa movil
$(".video-container").each(function () {
	"use strict";
    var video = $(this).find("video");
    var plainVideo = video.get(0);/*DOM video object, unwrapped from jQuery*/
    var playBtn = $(this).find(".boton-play-camara-trampa-movil");

    playBtn.click(function () {
        video.get(0).addEventListener('ended',myHandler,false);
        plainVideo.play();
        //playBtn.css("visibility", "hidden");

        function myHandler(e) {
            playBtn.css("visibility", "visible");
        }
    });
});

$(".video-container").each(function () {
	"use strict";
    var video = $(this).find("video");
    var plainVideo = video.get(0);/*DOM video object, unwrapped from jQuery*/
    var playBtn = $(this).find(".boton-pausa-camara-trampa-movil");

    playBtn.click(function () {
        video.get(0).addEventListener('ended',myHandler,false);
        plainVideo.pause();
        //playBtn.css("visibility", "hidden");

        function myHandler(e) {
            playBtn.css("visibility", "visible");
        }
    });
});

//galerias info boton
$(document).ready(function(){
	"use strict";
    $(".boton-ver-mapa-1").click(function(){
		$(".contenedor-galeria-mapa-1").stop(true).animate({opacity: 1}, 100);
		$(".contenedor-galeria-mapa-2").stop(true).fadeOut("0").css("z-index", "9");
		$(".boton-ver-mapa-1").stop(true).animate({opacity: 1}, 0);
		$(".boton-ver-mapa-2").stop(true).animate({opacity: 0.4}, 0);
		$(".flecha-info-mapa-1").stop(true).fadeIn("100");
		$(".flecha-info-mapa-2").stop(true).fadeOut("100");
    });
	$(".boton-ver-mapa-2").click(function(){
		$(".contenedor-galeria-mapa-1").animate({opacity: 0}, 100);
		$(".contenedor-galeria-mapa-2").stop(true).fadeIn("100").css("z-index", "11");
		$(".boton-ver-mapa-2").stop(true).animate({opacity: 1}, 0);
		$(".boton-ver-mapa-1").stop(true).animate({opacity: 0.4}, 0);
		$(".flecha-info-mapa-1").stop(true).fadeOut("100");
		$(".flecha-info-mapa-2").stop(true).fadeIn("100");
    });
});

//pies galerias movil
$(document).ready(function(){
	"use strict";
    $(".boton-ver-pie-foto-movil-gal1-01").click(function(){
		$('.pie-gal1-01').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal1-01').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal1-01").click(function(){
		$('.pie-gal1-01').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal1-01').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal1-02").click(function(){
		$('.pie-gal1-02').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal1-02').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal1-02").click(function(){
		$('.pie-gal1-02').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal1-02').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal1-03").click(function(){
		$('.pie-gal1-03').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal1-03').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal1-03").click(function(){
		$('.pie-gal1-03').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal1-03').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal1-04").click(function(){
		$('.pie-gal1-04').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal1-04').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal1-04").click(function(){
		$('.pie-gal1-04').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal1-04').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal1-05").click(function(){
		$('.pie-gal1-05').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal1-05').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal1-05").click(function(){
		$('.pie-gal1-05').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal1-05').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal1-06").click(function(){
		$('.pie-gal1-06').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal1-06').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal1-06").click(function(){
		$('.pie-gal1-06').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal1-06').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal1-07").click(function(){
		$('.pie-gal1-07').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal1-07').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal1-07").click(function(){
		$('.pie-gal1-07').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal1-07').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal1-08").click(function(){
		$('.pie-gal1-08').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal1-08').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal1-08").click(function(){
		$('.pie-gal1-08').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal1-08').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal1-09").click(function(){
		$('.pie-gal1-09').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal1-09').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal1-09").click(function(){
		$('.pie-gal1-09').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal1-09').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal1-10").click(function(){
		$('.pie-gal1-10').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal1-10').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal1-10").click(function(){
		$('.pie-gal1-10').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal1-10').stop(true).fadeIn(500);
    });
});

$(document).ready(function(){
	"use strict";
    $(".boton-ver-pie-foto-movil-gal2-01").click(function(){
		$('.pie-gal2-01').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal2-01').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal2-01").click(function(){
		$('.pie-gal2-01').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal2-01').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal2-02").click(function(){
		$('.pie-gal2-02').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal2-02').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal2-02").click(function(){
		$('.pie-gal2-02').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal2-02').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal2-03").click(function(){
		$('.pie-gal2-03').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal2-03').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal2-03").click(function(){
		$('.pie-gal2-03').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal2-03').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal2-04").click(function(){
		$('.pie-gal2-04').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal2-04').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal2-04").click(function(){
		$('.pie-gal2-04').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal2-04').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal2-05").click(function(){
		$('.pie-gal2-05').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal2-05').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal2-05").click(function(){
		$('.pie-gal2-05').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal2-05').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal2-06").click(function(){
		$('.pie-gal2-06').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal2-06').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal2-06").click(function(){
		$('.pie-gal2-06').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal2-06').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal2-07").click(function(){
		$('.pie-gal2-07').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal2-07').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal2-07").click(function(){
		$('.pie-gal2-07').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal2-07').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal2-08").click(function(){
		$('.pie-gal2-08').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal2-08').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal2-08").click(function(){
		$('.pie-gal2-08').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal2-08').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal2-09").click(function(){
		$('.pie-gal2-09').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal2-09').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal2-09").click(function(){
		$('.pie-gal2-09').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal2-09').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal2-10").click(function(){
		$('.pie-gal2-10').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal2-10').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal2-10").click(function(){
		$('.pie-gal2-10').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal2-10').stop(true).fadeIn(500);
    });
});

$(document).ready(function(){
	"use strict";
    $(".boton-ver-pie-foto-movil-gal3-01").click(function(){
		$('.pie-gal3-01').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal3-01').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal3-01").click(function(){
		$('.pie-gal3-01').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal3-01').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal3-02").click(function(){
		$('.pie-gal3-02').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal3-02').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal3-02").click(function(){
		$('.pie-gal3-02').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal3-02').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal3-03").click(function(){
		$('.pie-gal3-03').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal3-03').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal3-03").click(function(){
		$('.pie-gal3-03').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal3-03').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal3-04").click(function(){
		$('.pie-gal3-04').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal3-04').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal3-04").click(function(){
		$('.pie-gal3-04').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal3-04').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal3-05").click(function(){
		$('.pie-gal3-05').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal3-05').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal3-05").click(function(){
		$('.pie-gal3-05').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal3-05').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal3-06").click(function(){
		$('.pie-gal3-06').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal3-06').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal3-06").click(function(){
		$('.pie-gal3-06').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal3-06').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal3-07").click(function(){
		$('.pie-gal3-07').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal3-07').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal3-07").click(function(){
		$('.pie-gal3-07').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal3-07').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal3-08").click(function(){
		$('.pie-gal3-08').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal3-08').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal3-08").click(function(){
		$('.pie-gal3-08').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal3-08').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal3-09").click(function(){
		$('.pie-gal3-09').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal3-09').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal3-09").click(function(){
		$('.pie-gal3-09').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal3-09').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal3-10").click(function(){
		$('.pie-gal3-10').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal3-10').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal3-10").click(function(){
		$('.pie-gal3-10').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal3-10').stop(true).fadeIn(500);
    });
});


$(document).ready(function(){
	"use strict";
    $(".boton-ver-pie-foto-movil-gal4-01").click(function(){
		$('.pie-gal4-01').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal4-01').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal4-01").click(function(){
		$('.pie-gal4-01').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal4-01').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal4-02").click(function(){
		$('.pie-gal4-02').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal4-02').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal4-02").click(function(){
		$('.pie-gal4-02').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal4-02').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal4-03").click(function(){
		$('.pie-gal4-03').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal4-03').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal4-03").click(function(){
		$('.pie-gal4-03').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal4-03').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal4-04").click(function(){
		$('.pie-gal4-04').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal4-04').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal4-04").click(function(){
		$('.pie-gal4-04').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal4-04').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal4-05").click(function(){
		$('.pie-gal4-05').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal4-05').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal4-05").click(function(){
		$('.pie-gal4-05').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal4-05').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal4-06").click(function(){
		$('.pie-gal4-06').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal4-06').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal4-06").click(function(){
		$('.pie-gal4-06').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal4-06').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal4-07").click(function(){
		$('.pie-gal4-07').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal4-07').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal4-07").click(function(){
		$('.pie-gal4-07').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal4-07').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal4-08").click(function(){
		$('.pie-gal4-08').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal4-08').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal4-08").click(function(){
		$('.pie-gal4-08').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal4-08').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal4-09").click(function(){
		$('.pie-gal4-09').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal4-09').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal4-09").click(function(){
		$('.pie-gal4-09').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal4-09').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal4-10").click(function(){
		$('.pie-gal4-10').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal4-10').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal4-10").click(function(){
		$('.pie-gal4-10').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal4-10').stop(true).fadeIn(500);
    });
});


$(document).ready(function(){
	"use strict";
    $(".boton-ver-pie-foto-movil-gal5-01").click(function(){
		$('.pie-gal5-01').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal5-01').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal5-01").click(function(){
		$('.pie-gal5-01').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal5-01').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal5-02").click(function(){
		$('.pie-gal5-02').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal5-02').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal5-02").click(function(){
		$('.pie-gal5-02').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal5-02').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal5-03").click(function(){
		$('.pie-gal5-03').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal5-03').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal5-03").click(function(){
		$('.pie-gal5-03').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal5-03').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal5-04").click(function(){
		$('.pie-gal5-04').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal5-04').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal5-04").click(function(){
		$('.pie-gal5-04').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal5-04').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal5-05").click(function(){
		$('.pie-gal5-05').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal5-05').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal5-05").click(function(){
		$('.pie-gal5-05').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal5-05').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal5-06").click(function(){
		$('.pie-gal5-06').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal5-06').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal5-06").click(function(){
		$('.pie-gal5-06').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal5-06').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal5-07").click(function(){
		$('.pie-gal5-07').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal5-07').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal5-07").click(function(){
		$('.pie-gal5-07').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal5-07').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal5-08").click(function(){
		$('.pie-gal5-08').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal5-08').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal5-08").click(function(){
		$('.pie-gal5-08').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal5-08').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal5-09").click(function(){
		$('.pie-gal5-09').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal5-09').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal5-09").click(function(){
		$('.pie-gal5-09').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal5-09').stop(true).fadeIn(500);
    });
	
	$(".boton-ver-pie-foto-movil-gal5-10").click(function(){
		$('.pie-gal5-10').stop(true).fadeIn(500);
		$('.boton-ver-pie-foto-movil-gal5-10').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-pie-foto-movil-gal5-10").click(function(){
		$('.pie-gal5-10').stop(true).fadeOut(500);
		$('.boton-ver-pie-foto-movil-gal5-10').stop(true).fadeIn(500);
    });
});


//camaras trampa
$(document).ready(function(){
	"use strict";
    $(".boton-ver-parrafo-camara-trampa-1").click(function(){
		$('.camara-trampa-parrafo-1').stop(true).fadeIn(500);
		$('.camara-trampa-parrafo-2').stop(true).fadeOut(500);
		$('.camara-trampa-parrafo-3').stop(true).fadeOut(500);
		$('.camara-trampa-parrafo-4').stop(true).fadeOut(500);
		$('.boton-ver-parrafo-camara-trampa-1').stop(true).fadeOut(500);
		$('.boton-ver-parrafo-camara-trampa-2').stop(true).fadeIn(500);
		$('.boton-ver-parrafo-camara-trampa-3').stop(true).fadeIn(500);
		$('.boton-ver-parrafo-camara-trampa-4').stop(true).fadeIn(500);
    });
	$(".boton-ocultar-parrafo-camara-trampa-1").click(function(){
		$('.camara-trampa-parrafo-1').stop(true).fadeOut(500);
		$('.boton-ver-parrafo-camara-trampa-1').stop(true).fadeIn(500);
    });
	$(".boton-ver-parrafo-camara-trampa-2").click(function(){
		$('.camara-trampa-parrafo-1').stop(true).fadeOut(500);
		$('.camara-trampa-parrafo-2').stop(true).fadeIn(500);
		$('.camara-trampa-parrafo-3').stop(true).fadeOut(500);
		$('.camara-trampa-parrafo-4').stop(true).fadeOut(500);
		$('.boton-ver-parrafo-camara-trampa-1').stop(true).fadeIn(500);
		$('.boton-ver-parrafo-camara-trampa-2').stop(true).fadeOut(500);
		$('.boton-ver-parrafo-camara-trampa-3').stop(true).fadeIn(500);
		$('.boton-ver-parrafo-camara-trampa-4').stop(true).fadeIn(500);
    });
	$(".boton-ocultar-parrafo-camara-trampa-2").click(function(){
		$('.camara-trampa-parrafo-2').stop(true).fadeOut(500);
		$('.boton-ver-parrafo-camara-trampa-2').stop(true).fadeIn(500);
    });
	$(".boton-ver-parrafo-camara-trampa-3").click(function(){
		$('.camara-trampa-parrafo-1').stop(true).fadeOut(500);
		$('.camara-trampa-parrafo-2').stop(true).fadeOut(500);
		$('.camara-trampa-parrafo-3').stop(true).fadeIn(500);
		$('.camara-trampa-parrafo-4').stop(true).fadeOut(500);
		$('.boton-ver-parrafo-camara-trampa-1').stop(true).fadeIn(500);
		$('.boton-ver-parrafo-camara-trampa-2').stop(true).fadeIn(500);
		$('.boton-ver-parrafo-camara-trampa-3').stop(true).fadeOut(500);
		$('.boton-ver-parrafo-camara-trampa-4').stop(true).fadeIn(500);
    });
	$(".boton-ocultar-parrafo-camara-trampa-3").click(function(){
		$('.camara-trampa-parrafo-3').stop(true).fadeOut(500);
		$('.boton-ver-parrafo-camara-trampa-3').stop(true).fadeIn(500);
    });
	$(".boton-ver-parrafo-camara-trampa-4").click(function(){
		$('.camara-trampa-parrafo-1').stop(true).fadeOut(500);
		$('.camara-trampa-parrafo-2').stop(true).fadeOut(500);
		$('.camara-trampa-parrafo-3').stop(true).fadeOut(500);
		$('.camara-trampa-parrafo-4').stop(true).fadeIn(500);
		$('.boton-ver-parrafo-camara-trampa-1').stop(true).fadeIn(500);
		$('.boton-ver-parrafo-camara-trampa-2').stop(true).fadeIn(500);
		$('.boton-ver-parrafo-camara-trampa-3').stop(true).fadeIn(500);
		$('.boton-ver-parrafo-camara-trampa-4').stop(true).fadeOut(500);
    });
	$(".boton-ocultar-parrafo-camara-trampa-4").click(function(){
		$('.camara-trampa-parrafo-4').stop(true).fadeOut(500);
		$('.boton-ver-parrafo-camara-trampa-4').stop(true).fadeIn(500);
    });
});

