$(function(){

  var demo_configs=
  [
    {config:{ fx:'fall', words:true, timing:200 }},
    {config:{ fx:'swirl'}},
    {config:{ fx:'wave', letter_end:'rewind', fx_duration:"300ms"}},
    {config:{ fx:'smear', letter_end:'rewind'}},
    {config:{ fx:'spin fade', pattern:/([aeiou])/ig, fx_duration:"3s" }, text:"{ fx:'spin fade', pattern:/([aeiou])/ig, , fx_duration:'3s' }"},
    {config:{ fx:'fly-right fly-bottom spin'} },
    {config:{ fx:'fly-right fly-bottom spin', backwards:true, letter_end:'stay'} }
  ];

  var i = 0;j=0;
  $(window).scroll(function (){
      //console.log($(window).scrollTop())
      if ( $(window).scrollTop()>=800 &&  $(window).scrollTop() < 1400 ) {
        if(i == 0){
          //$(".tagline").letterfx({fx:'fall', words:false, timing:100 });
            $(".tx-01").css({ animation:"leftToRight 2s ease 1"});
        } 
        i = i+1;
      }
      if ( $(window).scrollTop() >= 1300 &&  $(window).scrollTop() < 1600 ) {
        if(j == 0){
          $(".tagline1").letterfx({ fx:'wave', letter_end:'rewind', fx_duration:"200ms"}); 
        } 
        j = j+1;
      }
  });
  
  

  // $("[data-letterfx]").each(function(){
  //   var fx = $(this).data('letterfx');

  //   if(fx.match(/^custom\[(.+)\]$/) ){
  //     var data = demo_configs[ fx.replace(/^custom\[(.+)\]$/, '$1') ];
  //     fx = data.config;
  //     fx_string = data.text ? data.text : JSON.stringify(fx);
  //     var code = '$(".tagline").letterfx('+fx_string+');';
  //     $(this).click(function(){
  //       if (! $(".tagline").data('letterfx-obj') || $(".tagline").data('letterfx-obj').isDone() ){
  //         $(".tagline").letterfx(fx);
  //         $('.source-code').hide().html(code).fadeIn('slow');
  //       }
  //     });
  //   }
  // })

  $(".navbar-brand")
    .letterfx({ fx:'fly-top spin',  timing:150 } )
    .mouseover(function(){$(this).letterfx({fx:'spin'})} );

});