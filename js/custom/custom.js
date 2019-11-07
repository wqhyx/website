// JavaScript Document
$(document).ready(function() {
  
    'use strict';

    /************************************************************************************ CAROUSEL SLIDER STARTS */

    var owl = $('.home-our-services-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    var owl = $('.about-us-02-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });



    var owl = $('.what-we-offer-01-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    var owl = $('.testimonial-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    var owl = $('.testimonial-carousel-02');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    var owl = $('.our-team-carousel-01');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    var owl = $('.our-partners-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    var owl = $('.pricing-carousel');
    owl.owlCarousel({

        autoplay: false,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    var owl = $('.product-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    var owl = $('.vehicle-park-carousel');
    owl.owlCarousel({

        autoplay: false,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    var owl = $('.what-we-do-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    var owl = $('.blog-post-carousel');
    owl.owlCarousel({

        autoplay: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /************************************************************************************ CAROUSEL SLIDER ENDS */

    /************************************************************************************ ACCORDION STARTS */

    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator2")
            .toggleClass('fa-plus fa-minus');
    }

    $('.accordion_plusminus').on('hidden.bs.collapse', toggleChevron);
    $('.accordion_plusminus').on('shown.bs.collapse', toggleChevron);

    $('.panel-heading a').on("click", function() {
        $('.panel-heading').removeClass('actives');
        $(this).parents('.panel-heading').addClass('actives');

        $('.panel-title').removeClass('actives'); //just to make a visual sense
        $(this).parent().addClass('actives'); //just to make a visual sense


    });


    /************************************************************************************ ACCORDION ENDS */

    /************************************************************************************ TO TOP STARTS */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup-2').fadeIn();
        } else {
            $('.scrollup-2').fadeOut();
        }
    });

    $('.scrollup-2').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    /************************************************************************************ TO TOP ENDS */

    /************************************************************************************ SEARCH HOVER TOGGLE STARTS */

    var $searchlink = $('#searchlink');

    // hover effect
    $searchlink.on('mouseover', function() {
        $(this).addClass('open');
    }).on('mouseout', function() {
        $(this).removeClass('open');
    });

    /************************************************************************************ SEARCH HOVER TOGGLE ENDS */

    /************************************************************************************ PARALLAX STARTS */

    $('.parallax-1').parallax("50%", 0.5);
    $('.parallax-2').parallax("50%", 0.1);
    $('.parallax-3').parallax("50%", 0.5);
    $('.parallax-4').parallax("50%", 0.1);
    $('.parallax-5').parallax("50%", 0.1);
    $('.parallax-6').parallax("50%", 0.1);
    $('.b-img-01').parallax("50%", 0.1);
    $('.b-img-02').parallax("50%", 0.1);
    $('.b-img-03').parallax("50%", 0.1);
    $('.b-img-04').parallax("50%", 0.1);
    $('.b-img-05').parallax("50%", 0.1);
    $('.b-img-06').parallax("50%", 0.1);
    $('.b-img-07').parallax("50%", 0.1);
    $('.b-img-08').parallax("50%", 0.1);
    $('.b-img-09').parallax("50%", 0.1);
    $('.b-img-10').parallax("50%", 0.1);
    $('.b-img-11').parallax("50%", 0.1);
    $('.b-img-12').parallax("50%", 0.1);
    $('.b-img-13').parallax("50%", 0.1);
    $('.b-img-14').parallax("50%", 0.1);
    $('.b-img-15').parallax("50%", 0.1);


    /************************************************************************************ PARALLAX ENDS */

    /************************************************************************************ FITVID STARTS */

    $(".fitvid").fitVids();

    /************************************************************************************ FITVID ENDS */


   //新闻
    $('.new-title').eq(0).on('click',()=>{
        //alert('第一个');
        $(".new-title").eq(0).css({"color":"white","background-color":"#1B87F4"});
        $(".new-title").eq(1).css({"color":"black","background-color":"white"});
        $("#newsSecond").hide();$("#newsFirst").show();
    })
    $('.new-title').eq(1).on('click',()=>{
        $(".new-title").eq(0).css({"color":"black","background-color":"white"});
        $(".new-title").eq(1).css({"color":"white","background-color":"#1B87F4"});
        $("#newsSecond").show();$("#newsFirst").hide();
    })

    //关于我们
    $('.about-title').eq(0).on('click',()=>{
        //alert('第一个');
        $(".about-title").eq(0).css({"color":"white","background-color":"#1B87F4"});
        $(".about-title").eq(1).css({"color":"black","background-color":"transparent"});
        $(".about-title").eq(2).css({"color":"black","background-color":"transparent"});
        $("#aboutUsFirst").show();$("#aboutUsSecond").hide();$("#aboutUsThird").hide();
    })
    $('.about-title').eq(1).on('click',()=>{
        cilSecond();
    })
    $('.about-title').eq(2).on('click',()=>{
        cilThird();
    }) 

    ///////////////////////////////////////////////////////////////////
    $("#iconFirst-1").on('click',()=>{
        $("#iconFirst-1").hide();
        $("#iconFirst-2").show();
    });
    $("#iconFirst-2").on('click',()=>{
        $("#iconFirst-1").show();
        $("#iconFirst-2").hide();
    });

    $("#iconFirst-3").on('click',()=>{
        $("#iconFirst-3").hide();
        $("#iconFirst-4").show();
    });
    $("#iconFirst-4").on('click',()=>{
        $("#iconFirst-3").show();
        $("#iconFirst-4").hide();
    });

    $("#iconFirst-5").on('click',()=>{
        $("#iconFirst-5").hide();
        $("#iconFirst-6").show();
    });
    $("#iconFirst-6").on('click',()=>{
        $("#iconFirst-5").show();
        $("#iconFirst-6").hide();
    });

    $("#iconFirst-7").on('click',()=>{
        $("#iconFirst-7").hide();
        $("#iconFirst-8").show();
    });
    $("#iconFirst-8").on('click',()=>{
        $("#iconFirst-7").show();
        $("#iconFirst-8").hide();
    });

    $("#iconFirst-9").on('click',()=>{
        $("#iconFirst-9").hide();
        $("#iconFirst-10").show();
    });
    $("#iconFirst-10").on('click',()=>{
        $("#iconFirst-9").show();
        $("#iconFirst-10").hide();
    });

    $("#iconFirst-11").on('click',()=>{
        $("#iconFirst-11").hide();
        $("#iconFirst-12").show();
    });
    $("#iconFirst-12").on('click',()=>{
        $("#iconFirst-11").show();
        $("#iconFirst-12").hide();
    });

    $("#iconFirst-13").on('click',()=>{
        $("#iconFirst-13").hide();
        $("#iconFirst-14").show();
    });
    $("#iconFirst-14").on('click',()=>{
        $("#iconFirst-13").show();
        $("#iconFirst-14").hide();
    });
    $("#iconFirst-15").on('click',()=>{
        $("#iconFirst-15").hide();
        $("#iconFirst-16").show();
    });
    $("#iconFirst-16").on('click',()=>{
        $("#iconFirst-15").show();
        $("#iconFirst-16").hide();
    });
    $("#iconFirst-17").on('click',()=>{
        $("#iconFirst-17").hide();
        $("#iconFirst-18").show();
    });
    $("#iconFirst-18").on('click',()=>{
        $("#iconFirst-17").show();
        $("#iconFirst-18").hide();
    });
    $("#iconFirst-19").on('click',()=>{
        $("#iconFirst-19").hide();
        $("#iconFirst-20").show();
    });
    $("#iconFirst-20").on('click',()=>{
        $("#iconFirst-19").show();
        $("#iconFirst-20").hide();
    });

    $("#iconFirst-21").on('click',()=>{
        $("#iconFirst-21").hide();
        $("#iconFirst-22").show();
    });
    $("#iconFirst-22").on('click',()=>{
        $("#iconFirst-21").show();
        $("#iconFirst-22").hide();
    });

    $("#iconFirst-23").on('click',()=>{
        $("#iconFirst-23").hide();
        $("#iconFirst-24").show();
    });
    $("#iconFirst-24").on('click',()=>{
        $("#iconFirst-23").show();
        $("#iconFirst-24").hide();
    });
     ///////////////////////////////////////////////////////////////////
     //加载事件
     $("#ab-out-ul li").eq(0).find('img').attr("src","images/gs/ab-w1.png");
     ///////
    // $(document).ready(function(){
    //     console.log(['1','2','3'].includes('3'))
    //     for(var i = 0;i<$(".inThree")[0].classList.length;i++){
    //         if($(".inThree")[0].classList[i] == 'in'){
    //             $("#iconFirst-19").hide();
    //             $("#iconFirst-20").show();
    //         }else{
    //             $("#iconFirst-19").show();
    //             $("#iconFirst-20").hide();
    //         }
    //     }
    //     for(var i = 0;i<$(".inThree")[1].classList.length;i++){
    //         if($(".inThree")[1].classList[i] == 'in'){
    //             $("#iconFirst-21").hide();
    //             $("#iconFirst-22").show();
    //         }else{
    //             $("#iconFirst-21").show();
    //             $("#iconFirst-22").hide();
    //         }
    //     }
    // });
    
});

// 预存阀值  ------
var defaultNum = 1;

//点击效果1
var ttcil1 = ()=>{
    defaultNum = 1;
    $(".tav-new-1").show(); $(".tav-new-2").hide(); $(".tav-new-3").hide(); $(".tav-new-4").hide();
    $(".tav-new-1 li").eq(0).find('img').attr("src","images/gs/ab-w1.png");
    $(".tav-new-1 li").eq(1).find('img').attr("src","images/gs/ab2.png");
    $(".tav-new-1 li").eq(2).find('img').attr("src","images/gs/ab3.png");
    $(".tav-new-1 li").eq(3).find('img').attr("src","images/gs/ab5.png");
    $("#jobsFirst").show();$("#jobsSecond").hide();$("#jobsThird").hide();$("#jobsFourth").hide();
}
//点击效果2
var ttcil2 = ()=>{
   defaultNum = 2;
   $(".tav-new-2").show(); $(".tav-new-1").hide(); $(".tav-new-3").hide(); $(".tav-new-4").hide();
   $(".tav-new-2 li").eq(0).find('img').attr("src","images/gs/ab1.png");
   $(".tav-new-2 li").eq(1).find('img').attr("src","images/gs/ab-w-2.png");
   $(".tav-new-2 li").eq(2).find('img').attr("src","images/gs/ab3.png");
   $(".tav-new-2 li").eq(3).find('img').attr("src","images/gs/ab5.png");
   $("#jobsFirst").hide();$("#jobsSecond").show();$("#jobsThird").hide();$("#jobsFourth").hide();
}
//点击效果3
var ttcil3 = ()=>{
    defaultNum = 3; 
    $(".tav-new-3").show(); $(".tav-new-1").hide(); $(".tav-new-2").hide(); $(".tav-new-4").hide();
    $(".tav-new-3 li").eq(2).find('img').attr("src","images/gs/ab-w3.png");
    $(".tav-new-3 li").eq(0).find('img').attr("src","images/gs/ab1.png");
    $(".tav-new-3 li").eq(1).find('img').attr("src","images/gs/ab2.png");
    $(".tav-new-3 li").eq(3).find('img').attr("src","images/gs/ab5.png");
    $("#jobsFirst").hide();$("#jobsSecond").hide();$("#jobsThird").show();$("#jobsFourth").hide();
}
//点击效果4
var ttcil4 = ()=>{
    defaultNum = 4;
    $(".tav-new-4").show(); $(".tav-new-1").hide(); $(".tav-new-2").hide(); $(".tav-new-3").hide();
    $(".tav-new-4 li").eq(0).find('img').attr("src","images/gs/ab1.png");
    $(".tav-new-4 li").eq(1).find('img').attr("src","images/gs/ab2.png");
    $(".tav-new-4 li").eq(2).find('img').attr("src","images/gs/ab3.png");
    $(".tav-new-4 li").eq(3).find('img').attr("src","images/gs/ab-w4.png");
    $("#jobsFirst").hide();$("#jobsSecond").hide();$("#jobsThird").hide();$("#jobsFourth").show();
} 

//事件
var ttab1 = () =>{
    if(defaultNum == 1){ $(".tav-new-1 li").eq(0).find('img').attr("src","images/gs/ab-w1.png"); }
    if(defaultNum == 2){ $(".tav-new-2 li").eq(0).find('img').attr("src","images/gs/ab-w1.png"); }
    if(defaultNum == 3){ $(".tav-new-3 li").eq(0).find('img').attr("src","images/gs/ab-w1.png"); }
    if(defaultNum == 4){ $(".tav-new-4 li").eq(0).find('img').attr("src","images/gs/ab-w1.png"); }
}
var ttout1 = () =>{
    //if(defaultNum == 1){ $(".tav-new-1 li").eq(0).find('img').attr("src","images/gs/ab1.png"); }
    if(defaultNum == 2){ $(".tav-new-2 li").eq(0).find('img').attr("src","images/gs/ab1.png"); }
    if(defaultNum == 3){ $(".tav-new-3 li").eq(0).find('img').attr("src","images/gs/ab1.png"); }
    if(defaultNum == 4){ $(".tav-new-4 li").eq(0).find('img').attr("src","images/gs/ab1.png"); }
}

var ttab2 = () =>{
    if(defaultNum == 1){ $(".tav-new-1 li").eq(1).find('img').attr("src","images/gs/ab-w-2.png"); }
    if(defaultNum == 2){ $(".tav-new-2 li").eq(1).find('img').attr("src","images/gs/ab-w-2.png"); }
    if(defaultNum == 3){ $(".tav-new-3 li").eq(1).find('img').attr("src","images/gs/ab-w-2.png"); }
    if(defaultNum == 4){ $(".tav-new-4 li").eq(1).find('img').attr("src","images/gs/ab-w-2.png"); }
}
var ttout2 = () =>{
    if(defaultNum == 1){ $(".tav-new-1 li").eq(1).find('img').attr("src","images/gs/ab2.png"); }
   // if(defaultNum == 2){ $(".tav-new-2 li").eq(1).find('img').attr("src","images/gs/ab2.png"); }
    if(defaultNum == 3){ $(".tav-new-3 li").eq(1).find('img').attr("src","images/gs/ab2.png"); }
    if(defaultNum == 4){ $(".tav-new-4 li").eq(1).find('img').attr("src","images/gs/ab2.png"); }
}

var ttab3 = () =>{
    if(defaultNum == 1){ $(".tav-new-1 li").eq(2).find('img').attr("src","images/gs/ab-w3.png"); }
    if(defaultNum == 2){ $(".tav-new-2 li").eq(2).find('img').attr("src","images/gs/ab-w3.png"); }
    if(defaultNum == 3){ $(".tav-new-3 li").eq(2).find('img').attr("src","images/gs/ab-w3.png"); }
    if(defaultNum == 4){ $(".tav-new-4 li").eq(2).find('img').attr("src","images/gs/ab-w3.png"); }
}
var ttout3 = () =>{
    if(defaultNum == 1){ $(".tav-new-1 li").eq(2).find('img').attr("src","images/gs/ab3.png"); }
    if(defaultNum == 2){ $(".tav-new-2 li").eq(2).find('img').attr("src","images/gs/ab3.png"); }
    //if(defaultNum == 3){ $(".tav-new-3 li").eq(2).find('img').attr("src","images/gs/ab3.png"); }
    if(defaultNum == 4){ $(".tav-new-4 li").eq(2).find('img').attr("src","images/gs/ab3.png"); }
}

var ttab4 = () =>{
    if(defaultNum == 1){ $(".tav-new-1 li").eq(3).find('img').attr("src","images/gs/ab-w4.png"); }
    if(defaultNum == 2){ $(".tav-new-2 li").eq(3).find('img').attr("src","images/gs/ab-w4.png"); }
    if(defaultNum == 3){ $(".tav-new-3 li").eq(3).find('img').attr("src","images/gs/ab-w4.png"); }
    if(defaultNum == 4){ $(".tav-new-4 li").eq(3).find('img').attr("src","images/gs/ab-w4.png"); }
}
var ttout4 = () =>{
    if(defaultNum == 1){ $(".tav-new-1 li").eq(3).find('img').attr("src","images/gs/ab5.png"); }
    if(defaultNum == 2){ $(".tav-new-2 li").eq(3).find('img').attr("src","images/gs/ab5.png"); }
    if(defaultNum == 3){ $(".tav-new-3 li").eq(3).find('img').attr("src","images/gs/ab5.png"); }
    //if(defaultNum == 4){ $(".tav-new-4 li").eq(3).find('img').attr("src","images/gs/ab5.png"); }
}


var list = [0,1,2];
var list = ['大数据 "数据综合治理" 平台','智慧信访应用平台','大数据存储解决方案'];

// 1
var previous = (e)=>{
    var _thos = e.src;
    if(_thos.includes(1)){
        window.location.href = "solution-list-01.html";
    }
}

// 2
var next = (e)=>{
    var _thos = e.src;
    if(_thos.includes(1)){
        window.location.href = "solution-list-01.html";
    }
}

// 3
var mid = (e) =>{
    var _thos = e.src;
    if(_thos.includes(1)){
        window.location.href = "solution-list-01.html";
    }
}

//上一个(傻瓜式)
var first = (e) => {
    var _thos = e.src;
    if(_thos.includes(0)){
        $("#lb-ul li").eq(0).find('img').attr("src","images/gs/lb1.png");
        $("#lb-ul li").eq(1).find('img').attr("src","images/gs/lb2.png");
        $("#lb-ul li").eq(2).find('img').attr("src","images/gs/lb0.png");
        $("#fspans").text(list[1]);$("#sspans").text(list[2]);$("#tspans").text(list[0]);
    }
    if(_thos.includes(1)){  
        $("#lb-ul li").eq(0).find('img').attr("src","images/gs/lb2.png");
        $("#lb-ul li").eq(1).find('img').attr("src","images/gs/lb0.png");
        $("#lb-ul li").eq(2).find('img').attr("src","images/gs/lb1.png");
        $("#fspans").text(list[2]);$("#sspans").text(list[0]);$("#tspans").text(list[1]);
    }
    if(_thos.includes(2)){  
        $("#lb-ul li").eq(0).find('img').attr("src","images/gs/lb0.png");
        $("#lb-ul li").eq(1).find('img').attr("src","images/gs/lb1.png");
        $("#lb-ul li").eq(2).find('img').attr("src","images/gs/lb2.png");
        $("#fspans").text(list[0]);$("#sspans").text(list[1]);$("#tspans").text(list[2]);
    }
}

// 下一个 (傻瓜式)
var second = (e) =>{
    var _thos = e.src;
    if(_thos.includes(2)){   
        $("#lb-ul li").eq(0).find('img').attr("src","images/gs/lb2.png");
        $("#lb-ul li").eq(1).find('img').attr("src","images/gs/lb0.png");
        $("#lb-ul li").eq(2).find('img').attr("src","images/gs/lb1.png");
        $("#fspans").text(list[2]);$("#sspans").text(list[0]);$("#tspans").text(list[1]);
    }
    if(_thos.includes(1)){  
        $("#lb-ul li").eq(0).find('img').attr("src","images/gs/lb1.png");
        $("#lb-ul li").eq(1).find('img').attr("src","images/gs/lb2.png");
        $("#lb-ul li").eq(2).find('img').attr("src","images/gs/lb0.png");
        $("#fspans").text(list[1]);$("#sspans").text(list[2]);$("#tspans").text(list[0]);
    }
    if(_thos.includes(0)){   
        $("#lb-ul li").eq(0).find('img').attr("src","images/gs/lb0.png");
        $("#lb-ul li").eq(1).find('img').attr("src","images/gs/lb1.png");
        $("#lb-ul li").eq(2).find('img').attr("src","images/gs/lb2.png");
        $("#fspans").text(list[0]);$("#sspans").text(list[1]);$("#tspans").text(list[2]);
    }
}

//走上一步
var previousImg = (e) =>{
    var info = $("#lb-ul li").eq(0).find('img')[0].src;
    //console.log(info)
    first($("#lb-ul li").eq(0).find('img')[0]);
}

//下一步 调用
var nextImg = (e) =>{
    var info = $("#lb-ul li").eq(2).find('img')[0].src;
    //console.log(info)
    second($("#lb-ul li").eq(2).find('img')[0]);
}

//滑动  左往右
var moveprevious = (e) =>{
    var _thos = e.src;
    if(_thos.includes(0)){   
        $("#lb-ul li").eq(0).find('img').attr("src","images/gs/lb2.png");
        $("#lb-ul li").eq(1).find('img').attr("src","images/gs/lb0.png");
        $("#lb-ul li").eq(2).find('img').attr("src","images/gs/lb1.png");
        $("#fspans").text(list[2]);$("#sspans").text(list[0]);$("#tspans").text(list[1]);
    }
    if(_thos.includes(1)){  
        $("#lb-ul li").eq(0).find('img').attr("src","images/gs/lb0.png");
        $("#lb-ul li").eq(1).find('img').attr("src","images/gs/lb1.png");
        $("#lb-ul li").eq(2).find('img').attr("src","images/gs/lb2.png");
        $("#fspans").text(list[0]);$("#sspans").text(list[1]);$("#tspans").text(list[2]);
    }
    if(_thos.includes(2)){  
        $("#lb-ul li").eq(0).find('img').attr("src","images/gs/lb1.png");
        $("#lb-ul li").eq(1).find('img').attr("src","images/gs/lb2.png");
        $("#lb-ul li").eq(2).find('img').attr("src","images/gs/lb0.png");
        $("#fspans").text(list[1]);$("#sspans").text(list[2]);$("#tspans").text(list[0]);
    }
}

// 右往左
var movenext = (e) =>{
    var _thos = e.src;
    if(_thos.includes(0)){   
        $("#lb-ul li").eq(0).find('img').attr("src","images/gs/lb2.png");
        $("#lb-ul li").eq(1).find('img').attr("src","images/gs/lb0.png");
        $("#lb-ul li").eq(2).find('img').attr("src","images/gs/lb1.png");
        $("#fspans").text(list[2]);$("#sspans").text(list[0]);$("#tspans").text(list[1]);
    }
    if(_thos.includes(1)){  
        $("#lb-ul li").eq(0).find('img').attr("src","images/gs/lb0.png");
        $("#lb-ul li").eq(1).find('img').attr("src","images/gs/lb1.png");
        $("#lb-ul li").eq(2).find('img').attr("src","images/gs/lb2.png");
        $("#fspans").text(list[0]);$("#sspans").text(list[1]);$("#tspans").text(list[2]);
    }
    if(_thos.includes(2)){  
        $("#lb-ul li").eq(0).find('img').attr("src","images/gs/lb1.png");
        $("#lb-ul li").eq(1).find('img').attr("src","images/gs/lb2.png");
        $("#lb-ul li").eq(2).find('img').attr("src","images/gs/lb0.png");
        $("#fspans").text(list[1]);$("#sspans").text(list[2]);$("#tspans").text(list[0]);
    }
}

var getQueryString = (name) => {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

var cilSecond = ()=>{
    $(".about-title").eq(0).css({"color":"black","background-color":"transparent"});
    $(".about-title").eq(1).css({"color":"white","background-color":"#1B87F4"});
    $(".about-title").eq(2).css({"color":"black","background-color":"transparent"});
    $("#aboutUsFirst").hide();$("#aboutUsSecond").show();$("#aboutUsThird").hide();
}

var cilThird = () =>{
    $(".about-title").eq(0).css({"color":"black","background-color":"transparent"});
    $(".about-title").eq(1).css({"color":"black","background-color":"transparent"});
    $(".about-title").eq(2).css({"color":"white","background-color":"#1B87F4"});
    $("#aboutUsFirst").hide();$("#aboutUsSecond").hide();$("#aboutUsThird").show();
}


//////////////////////////////////////////////////////////////////////

//动画
$('#block1').mouseenter(function(){
    //console.log('进入')
    $(".otherdescriptions1").css({ animation:"rightEaseInAnimate 1s ease 1"});
    $("#otherdescription1 div").eq(0).stop().animate({"margin-top":'25%'});
    $("#otherdescription1").stop().animate({"height":'97%',"font-weight":"600"});
    $("#otherdescription1").css({"text-align":"center"});
    // $(".otherdescriptions1").css({position: "relative",  "animation-name":"rightEaseInAnimate, rightEaseInAnimate1",
    //     "animation-duration":"5s","animation-iteration-count":"infinite"});
});

$('#block1').mouseleave(function(){
    //console.log('离开')
    $("#otherdescription1 div").eq(0).stop().animate({"margin-top":'0'});
    $("#otherdescription1").stop().animate({"height":"17%"})
    $("#otherdescription1").css({"text-align":"left"});
    $(".otherdescriptions1").css({ animation:"none"})
});
////
$('#block2').mouseenter(function(){
    //console.log('进入')
    $(".otherdescriptions2").css({ animation:"rightEaseInAnimate 1s ease 1"});
    $("#otherdescription2 div").eq(0).stop().animate({"margin-top":'25%'});
    $("#otherdescription2").stop().animate({"height":'97%',"font-weight":"600"});
    $("#otherdescription2").css({"text-align":"center"});
});

$('#block2').mouseleave(function(){
    //console.log('离开')
    $("#otherdescription2 div").eq(0).stop().animate({"margin-top":'0'});
    $("#otherdescription2").stop().animate({"height":"17%"})
    $("#otherdescription2").css({"text-align":"left"});
    $(".otherdescriptions2").css({ animation:"none"})
});
////
$('#block3').mouseenter(function(){
    //console.log('进入')
    $(".otherdescriptions3").css({ animation:"rightEaseInAnimate 1s ease 1"});
    $("#otherdescription3 div").eq(0).stop().animate({"margin-top":'25%'});
    $("#otherdescription3").stop().animate({"height":'97%',"font-weight":"600"});
    $("#otherdescription3").css({"text-align":"center"});
});

$('#block3').mouseleave(function(){
    //console.log('离开')
    $("#otherdescription3 div").eq(0).stop().animate({"margin-top":'0'});
    $("#otherdescription3").stop().animate({"height":"17%"})
    $("#otherdescription3").css({"text-align":"left"});
    $(".otherdescriptions3").css({ animation:"none"})
});
////
$('#block4').mouseenter(function(){
    //console.log('进入')
    $(".otherdescriptions4").css({ animation:"rightEaseInAnimate 1s ease 1"});
    $("#otherdescription4 div").eq(0).stop().animate({"margin-top":'25%'});
    $("#otherdescription4").stop().animate({"height":'97%',"font-weight":"600"});
    $("#otherdescription4").css({"text-align":"center"});
});

$('#block4').mouseleave(function(){
    //console.log('离开')
    $("#otherdescription4 div").eq(0).stop().animate({"margin-top":'0'});
    $("#otherdescription4").stop().animate({"height":"17%"})
    $("#otherdescription4").css({"text-align":"left"});
    $(".otherdescriptions4").css({ animation:"none"})
});


//////////////////////////////////////////////////////////////////////
//悬浮
var over = (x)=>{ 
    $("#news-look").css({"height":"96%","opacity":"0.65"});
    $("#news-look div").eq(0).css({"margin-top":"25%","text-align":"center"});
    $("#news-look div").eq(1).css({"text-align":"center"});
}
//离开
var leave = (x)=>{
    $("#news-look").css({"height":"auto"});
    $("#news-look div").eq(0).css({"margin-top":"0","text-align":"left","margin-left":"1rem"});
    $("#news-look div").eq(1).css({"text-align":"left","margin-left":"1rem"});
}

var over2 = (x) => { 
    $("#news-look2").css({"height":"96%","opacity":"0.65"});
    $("#news-look2 div").eq(0).css({"margin-top":"25%","text-align":"center"});
    $("#news-look2 div").eq(1).css({"text-align":"center"});
}
//离开
var leave2 = (x)=>{
    $("#news-look2").css({"height":"auto"});
    $("#news-look2 div").eq(0).css({"margin-top":"0","text-align":"left","margin-left":"1rem"});
    $("#news-look2 div").eq(1).css({"text-align":"left","margin-left":"1rem"});
}

var over3 = (x) => { 
    $("#news-look3").css({"height":"96%","opacity":"0.65"});
    $("#news-look3 div").eq(0).css({"margin-top":"25%","text-align":"center"});
    $("#news-look3 div").eq(1).css({"text-align":"center"});
}
//离开
var leave3 = (x)=>{
    $("#news-look3").css({"height":"auto"});
    $("#news-look3 div").eq(0).css({"margin-top":"0","text-align":"left","margin-left":"1rem"});
    $("#news-look3 div").eq(1).css({"text-align":"left","margin-left":"1rem"});
}

var over4 = (x) => { 
    $("#news-look4").css({"height":"96%","opacity":"0.65"});
    $("#news-look4 div").eq(0).css({"margin-top":"25%","text-align":"center"});
    $("#news-look4 div").eq(1).css({"text-align":"center"});
}
//离开
var leave4 = (x)=>{
    $("#news-look4").css({"height":"auto"});
    $("#news-look4 div").eq(0).css({"margin-top":"0","text-align":"left","margin-left":"1rem"});
    $("#news-look4 div").eq(1).css({"text-align":"left","margin-left":"1rem"});
}

/************************************************************************************ STICKY NAV STARTS */

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('nav.fill-black').addClass("sticky");
        $('nav.fill-black').removeClass("normal");
    } else {
        $('nav.fill-black').removeClass("sticky");
        $('nav.fill-black').addClass("normal");
    }
});

/************************************************************************************ STICKY NAV ENDS */

/************************************************************************************ COUNTER UP STARTS */
$(window).load(function() {

    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
});
/************************************************************************************ COUNTER UP ENDS */

/************************************************************************************ PRELOADER STARTS */

$(window).load(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
});

/************************************************************************************ PRELOADER ENDS */

/************************************************************************************ MAGNIFIC POPUP STARTS */

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    /*disableOn: 700,*/
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

$('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
        verticalFit: true
    }

});

/************************************************************************************ MAGNIFIC POPUP ENDS */