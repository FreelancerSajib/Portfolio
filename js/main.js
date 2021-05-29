// Wow JS-----------------------------------
new WOW().init();

//-------------Header JS Start--------------------
let navToggle = document.querySelector(".nav_toggle");
let navWrapper = document.querySelector(".nav_wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
    searchForm.classList.remove("active");
  }
});

let searchToggle = document.querySelector(".search_toggle");
let searchForm = document.querySelector(".search_form");

searchToggle.addEventListener("click", showSearch);

function showSearch() {
  searchForm.classList.toggle("active");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "menu");
  navWrapper.classList.remove("active");
}

//-------------Header JS End-------------------------------

//-------------My Services Section Start---------------------

$(document).ready(function() {
  $("#d_toggle_btn_one").click(function() {
    $(".d_toggle_text_one").toggle("slow");
    $(".div_one_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#d_toggle_btn_two").click(function() {
    $(".d_toggle_text_two").toggle("slow");
    $(".div_two_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#d_toggle_btn_three").click(function() {
    $(".d_toggle_text_three").toggle("slow");
    $(".div_three_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#w_toggle_btn_one").click(function() {
    $(".w_toggle_text_one").toggle("slow");
    $(".div_four_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#w_toggle_btn_two").click(function() {
    $(".w_toggle_text_two").toggle("slow");
    $(".div_five_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#w_toggle_btn_three").click(function() {
    $(".w_toggle_text_three").toggle("slow");
    $(".div_six_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
});

//-------------My Services Section End------------------------


//-------------My Process Section Start-------------------------

//-------------My Process Section End---------------------------

//-------------My Futured Work Section Start----------------

//-------------My Futured Work Section End----------------

//-----------Testimonials Section Start---------------------
$(document).ready(function () {

  $('.client-single').on('click', function (event) {
     event.preventDefault();

     var active = $(this).hasClass('active');

     var parent = $(this).parents('.testimonial_wrapper');

     if (!active) {
         var activeBlock = parent.find('.client-single.active');

         var currentPos = $(this).attr('data-position');

         var newPos = activeBlock.attr('data-position');

         activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
         activeBlock.attr('data-position', currentPos);

         $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
         $(this).attr('data-position', newPos);

     }
 });

}
(jQuery));

//-----------Testimonials Section End---------------------


//-------------ScrollTop Start------------------------
let scrollTop_btn = document.querySelector("#scrollTop_btn");

$(window).scroll(function() {
  if($(this).scrollTop()>200){
    $('#scrollTop_btn').fadeIn();
  }else{
    $('#scrollTop_btn').fadeOut();
  };

});

$(document).ready(function(){
  $('#scrollTop_btn').click(function() {
    $('html , body').animate({scrollTop:0}, 1500);
  });
});

//-------------ScrollTop End------------------------


//-----------------------------------------------------ABOUT PAGE START------------------------------

//------------About Me Section Strat-----------------
$(document).ready(function(){
  
  $('.progress_bar').each(function() {
    $(this).find('.progress-content').animate({
      width:jQuery(this).attr('data-percentage')
    },2000);
    
    $(this).find('.progress-number-mark').animate(
      {left:jQuery(this).attr('data-percentage')},
      {
       duration: 2000,
       step: function(now, fx) {
         var data = Math.round(now);
         $(this).find('.percent').html(data + '%');
       }
    });  
  });
});
//------------About Me Section End-----------------


//-------------------------------------------------------------ABOUT PAGE END-----------------------------
//-------------------------------------------------------------SERVICE PAGE START-----------------------------
//-----Package Section Start---------
$(document).ready(function() {
  $("#package_one").click(function() {
    $(".package_one").toggle("slow");
    $(".p_one_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#package_two").click(function() {
    $(".package_two").toggle("slow");
    $(".p_two_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#package_three").click(function() {
    $(".package_three").toggle("slow");
    $(".p_three_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#package_four").click(function() {
    $(".package_four").toggle("slow");
    $(".p_four_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#package_five").click(function() {
    $(".package_five").toggle("slow");
    $(".p_five_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#package_six").click(function() {
    $(".package_six").toggle("slow");
    $(".p_six_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#package_seven").click(function() {
    $(".package_seven").toggle("slow");
    $(".p_seven_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#package_eight").click(function() {
    $(".package_eight").toggle("slow");
    $(".p_eight_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#package_nine").click(function() {
    $(".package_nine").toggle("slow");
    $(".p_nine_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#package_ten").click(function() {
    $(".package_ten").toggle("slow");
    $(".p_ten_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });


});
//-----Package Section End---------
//-------------------------------------------------------------SERVICE PAGE END-----------------------------
//-------------------------------------------------------------CONTACT PAGE START-----------------------------
// Question Section Start
$(document).ready(function() {
  $("#q_toggle_btn_one").click(function() {
    $(".q_toggle_text_one").toggle("slow");
    $(".q_one_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#q_toggle_btn_two").click(function() {
    $(".q_toggle_text_two").toggle("slow");
    $(".q_two_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#q_toggle_btn_three").click(function() {
    $(".q_toggle_text_three").toggle("slow");
    $(".q_three_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#q_toggle_btn_four").click(function() {
    $(".q_toggle_text_four").toggle("slow");
    $(".q_four_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#q_toggle_btn_five").click(function() {
    $(".q_toggle_text_five").toggle("slow");
    $(".q_five_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#q_toggle_btn_six").click(function() {
    $(".q_toggle_text_six").toggle("slow");
    $(".q_six_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#q_toggle_btn_seven").click(function() {
    $(".q_toggle_text_seven").toggle("slow");
    $(".q_seven_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#q_toggle_btn_eight").click(function() {
    $(".q_toggle_text_eight").toggle("slow");
    $(".q_eight_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#q_toggle_btn_nine").click(function() {
    $(".q_toggle_text_nine").toggle("slow");
    $(".q_nine_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });
  $("#q_toggle_btn_ten").click(function() {
    $(".q_toggle_text_ten").toggle("slow");
    $(".q_ten_icon").find('i').toggleClass('flaticon-add flaticon-minus');
  });


});
// Question Section End
//-------------------------------------------------------------CONTACT PAGE END-----------------------------



// Extra
$(document).ready(function(){
	$("#banner_section").ripples({
  resolution: 1000,
  perturbance: 5,
});
})























//Extra------------------------
