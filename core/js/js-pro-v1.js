
  (function( $ ) {

    $(".t-tab").click(function () { 
      $(this).next(".description").toggleClass("item-activo");
      $("i", this).toggleClass("rotate-icon");
    });
    
    // ------------ Share redes sociales -----------------
    
    var urlPaht = window.location.href;
    var  namePaht = window.location.pathname
    var urlOrigin = window.location.origin
    $("#manual-ajax").on("click", function(){
      var url_course = `https://www.facebook.com/sharer/sharer.php?u=${urlPaht}`;
      var url_course_ln = `https://www.linkedin.com/sharing/share-offsite/?url=${urlPaht}`;
      var url_course_tw = `https://twitter.com/intent/tweet?text=EPGCourse&url=${urlPaht}&hashtags=EPGCourse`;
      var url_course_wsp = `https://api.whatsapp.com/send?text=${urlPaht}`;
      $("#share-face").attr("href",url_course);
      $("#share-ln").attr("href",url_course_ln);
      $("#share-twitter").attr("href",url_course_tw);
      $("#share-whatsap").attr("href",url_course_wsp);
      console.log($("#share-whatsap").attr("href",url_course_wsp))
    }) 
   
    // Redirect Gracias
    function redirectUrl(){
       if(urlPaht.substr(-4) == "html"){
         window.location = '/gracias'
       }
    }
    redirectUrl()
    
    // border login 

    if($('#menu-item-2838 a').text() != 'Iniciar sesión'){
      $('#menu-item-3753').addClass('border-login')
    }
    
    //-------- delete parrafs vacios -----------
    // $('p:empty').remove();
    
    $('.number-item').each((index, element) => {
      $(element).append('Módulo ' + (index + 1))
    });
    

    function scalerCss(){
      urlPaht
      console.log(urlPaht)
      if($('.archive').length > 0){
        $('#layout-card .view-detalls').addClass('scaler')
      }
    }
    scalerCss()

    if ($("#news-slider").length > 0){

      $("#news-slider").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:['<img src="/wp-content/uploads/2020/07/left-1.svg" /> ','<img src="/wp-content/uploads/2020/07/right.svg" />'],
        autoPlay:true,
        dots: true,
      });
  
      $("#news-slider-upc").owlCarousel({
        items : 4,
        // itemsDesktop:[1199,3],
        // itemsDesktopSmall:[980,2],
        // itemsMobile : [600,1],
        navigation:false,
        navigationText:["",""],
        autoPlay:true,
        dots: true,
        responsive: {
            0: {
                items:2
            },
            1000: {
                items:4
            }
        }
      });
    }

    if($("#slider-certifiacdos").length > 0){
      $("#slider-certifiacdos").owlCarousel({
          navigation:true,
          navigationText:['<img src="/wp-content/uploads/2020/07/left-1.svg" /> ','<img src="/wp-content/uploads/2020/07/right.svg" />'],
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
          autoPlay:true,
      });
    }

    if($("#slider-tienda").length > 0){
      $("#slider-tienda").owlCarousel({
          navigation : false, 
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
          autoPlay:true,
      });
    }
    if($("#slider-courses1home .woocommerce .products").length > 0){
      $("#slider-courses1home .woocommerce .products").owlCarousel({

          items : 4,
          navigation:false,
          navigationText:["",""],
          autoPlay:true,
          dots: true,
         
          responsive: {
              0: {
                  items:2,
                  stagePadding: 20,
              },
              1000: {
                  items:4
                  
              }
          }
      });
    }

    if($("#slider-courses2home .woocommerce .products").length > 0){
      $("#slider-courses2home .woocommerce .products").owlCarousel({
          items : 4,
          navigation:false,
          navigationText:["",""],
          autoPlay:true,
          dots: true,
          responsive: {
              0: {
                  items:2,
                  stagePadding: 20,
              },
              1000: {
                  items:4
                  
              }
          }
      });
    }

    var obj = $('.ajax_add_to_cart')
    $.each( obj, function( key, element ) {
      if($(element).text() == 'Curso agregado'){
        $(element).css('color','white')
        $(element).css('border','1px solid #4CAF50')
        $(element).css('background','#4CAF50')
      }
    });

     if($('.single_add_to_cart_button').text() == 'Curso agregado' || $('.ajax_add_to_cart').text() == 'Curso agregado'){
       $('.single_add_to_cart_button').css('color','white')
       $('.single_add_to_cart_button').css('border','1px solid #4CAF50')
       $('.single_add_to_cart_button').css('background','#4CAF50')
       $('.btn-comprar').attr('href','/cart')
     }


  
      $(window).scroll(function(){
        if ($(window).scrollTop() >= 300) {
            $('.site-header').addClass('site-header-fixed');
        }
        else {
            $('.site-header').removeClass('site-header-fixed');
        }
      });

      $('.btn-widget').click(function () {
        $thisTab = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $($thisTab).offset().top - 90
        }, 1000);
      })
      $('.btn-widget2').click(function () {
        $thisTab = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $($thisTab).offset().top + 300
        }, 1000);
      })

      //--------- mobile scroll -------- 

      

      if ($('.sidebar-course').length > 0){
        $(window).scroll(function () {

          var posicion = $('#course-interna').position();
          var posicion2 = $('.content-card-sidebar').position();
          var postionBottom = $('.section-question').position();
          var positionBotomMobile = $('.section-diploma').position();

            if ($(window).scrollTop() <= postionBottom.top) {
              $('.content-card-sidebar').removeClass('fixed-card')
            }
            if ($(window).scrollTop() > posicion2.top) {
              $('.content-card-sidebar').addClass('fixed-card')
            }
            if ($(window).scrollTop() > postionBottom.top - 50) {
              $('.content-card-sidebar').removeClass('fixed-card')
            }
          // } else {
            if ($(window).scrollTop() <= positionBotomMobile.top) {
              $('#course-interna').removeClass('mobile-fixed')
              $('.content-card-detalls').removeClass('mobile-hidden')
              $('#course-interna').addClass('space-section-mobile')
              $('.content-share-and-inf').removeClass('scroll-share-inf')
              $('.cart-add-btn .entry-summary .price').removeClass('mobile-hidden')
              $('.sidebar-course').addClass('content-card-sidebar-space')
            }
            if ($(this).scrollTop() > 100 && $(this).scrollTop() < 3300) {
              $('#course-interna').addClass('mobile-fixed');
              $('.content-card-detalls').addClass('mobile-hidden')
              $('#course-interna').removeClass('space-section-mobile')
              $('.content-share-and-inf').addClass('scroll-share-inf')
              $('.cart-add-btn .entry-summary .price').addClass('mobile-hidden')
              $('.sidebar-course').removeClass('content-card-sidebar-space')
            }
            if ($(window).scrollTop() > positionBotomMobile.top - 50) {
              $('#course-interna').removeClass('mobile-fixed')
              $('.content-card-detalls').removeClass('mobile-hidden')
              $('#course-interna').addClass('space-section-mobile')
              $('.content-share-and-inf').removeClass('scroll-share-inf')
              $('.sidebar-course').addClass('content-card-sidebar-space')
              $('.cart-add-btn .entry-summary .price').removeClass('mobile-hidden')
            }
  
        });
      }

      $('.count').each((index, element) => {
        if($(element).text() == "(0)"){
          $('.children .count').addClass('hidden')
          $(element).siblings('a').addClass('hidden')
        }

      });

      $('.cat-parent .count').each((index, element) => {
        $('.cat-parent > .count ').html('<i class="fa fa-angle-down" aria-hidden="true"></i>')
      });
     

      $('.cat-parent .count').click(function () { 
        $(this).next("ul").toggleClass("item-activo");
        
        $(this).siblings("a").toggleClass("tab-activo")

        $("i", this).toggleClass("rotate-icon");

        if($(this).next("ul").hasClass("item-activo")){
          $(this).next('ul').slideDown("slow");
        }else {
          $(this).next("ul").removeClass("item-activo")
        }
        
      });


      function areaInteresFocusx(){
     
        var filterArea2 = document.querySelectorAll('.product-categories > .cat-item > a')
        var filtersubArea = document.querySelectorAll('.children > .cat-item > a')
        var title;
        var image;
        for(var i = 0; i < filterArea2.length; i++ ){
          title = filterArea2[i].innerHTML
          if(filterArea2[i].getAttribute("href") === (urlOrigin + namePaht)){
            filterArea2[i].setAttribute("id", "filter-activo") 
  
            $('html, body').animate({
              scrollTop: $('.ast-woocommerce-container').offset().top - 150
            }, 1000);
          }
        }
        console.log(window.location.origin)
        for (let index = 0; index < filtersubArea.length; index++) {
          const element = filtersubArea[index];
          if(element.getAttribute("href") === (urlOrigin + namePaht)){
            
            element.setAttribute("id", "filter-subarea")
            $("#filter-subarea").closest('.children').addClass('item-activo')
            $('.item-activo').siblings('.count').find('i').addClass('rotate-icon')
            $("#filter-subarea").closest('.children').siblings('a').addClass('tab-activo')
            $('html, body').animate({
              scrollTop: $('.ast-woocommerce-container').offset().top - 150
            }, 1000);
          }
        }

        if($('.post-type-archive-product').length > 0 ){
          $('.woocommerce-result-count').css('display','none')
          $('.cursos-title').html("Todos los cursos")
        } 

      }

      areaInteresFocusx()
    
  })( jQuery );
    