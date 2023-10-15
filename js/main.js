let a = 1;
$('.header_left__menu').click(function () {
    if (a == 1) {
        $('.header_left__menu').append(`
            <div class="header_left__menu___drop">
                <a href="/">Главная</a>
                <a href="news.html">Новости</a>
                <a href="supports.html">Меры поддержки</a>
                <a href="service.html">Услуги</a>
                <a href="about.html">О нас</a>
                <a href="contacts.html">Контакты</a>
                <a href="#">База знаний</a>
                <a href="#">Витрина предпринимателей</a>
            </div>
        `)

        $('.header_left__menu___drop').css('display', 'flex');

        a = 0
    } else
    if (a == 0) {
        $('.header_left__menu___drop').remove();
        a = 1
    }
})

function showObl(obl, img) {
    $(`.${obl}`).attr('src', `img/map/${img}`);
}

$('.pr').click(function () {
    showObl('pr', 'прикубанский район.png')
    $('.pr').attr('src', 'img/map/прикубанский район.png');
})

$(".regButton").click(function () {
    $(".activeButton").css("transform", "translate(243px)");
    $(".activeButton").css("background", "linear-gradient(67deg, #B967C9 2.17%, rgba(0, 0, 0, 0.00) 114.97%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #402C9B");
    
    $(".support_top__right___gerbs img").eq(0).css("opacity", "0.3");
    $(".support_top__right___gerbs img").eq(1).css("opacity", "1");

    setTimeout(() => {
        $(".regButton").css("color", "#fff");
        $(".fedButton").css("color", "#000");
    }, "100");

    $(".support_top").css("background", "linear-gradient(67deg, #B967C9 2.17%, rgba(0, 0, 0, 0.00) 114.97%), #402C9B");

    $(".support_top__left img").eq(0).attr("src", "img/mainImgSupport2_circle1.png")
    $(".support_top__left img").eq(1).attr("src", "img/mainImgSupport2_circle2.png")
    $(".rightCircle").attr("src", "img/mainImgSupport2_circle3.png")

    $(".showSupport1").css("display", "none")
    $(".showSupport2").css("display", "flex")
    
    $(".support_popular__blocks___item____tag").css("background", "#C88DC5")
    $(".support_all__blocks___item____text_____date").css("color", "#733897")
    $(".support_all__blocks___item____text_____button").css("background", "#733897")
})

$(".fedButton").click(function () {
    $(".activeButton").css("transform", "translate(0px)");
    $(".activeButton").css("background", "linear-gradient(249deg, #32AEDB -28.54%, rgba(0, 0, 0, 0.00) 93.07%), #402C9B");

    $(".support_top__right___gerbs img").eq(0).css("opacity", "1");
    $(".support_top__right___gerbs img").eq(1).css("opacity", "0.3");
    setTimeout(() => {
        $(".fedButton").css("color", "#fff");
        $(".regButton").css("color", "#000");
    }, "100");

    $(".support_top").css("background", "linear-gradient(73deg, #2E78E7 2.36%, rgba(0, 0, 0, 0.00) 103.33%), #402C9B");

    $(".support_top__left img").eq(0).attr("src", "img/mainImgSupport1_circle1.png")
    $(".support_top__left img").eq(1).attr("src", "img/mainImgSupport1_circle2.png")
    $(".rightCircle").attr("src", "img/mainImgSupport1_circle3.png")
    
    $(".showSupport1").css("display", "flex")
    $(".showSupport2").css("display", "none")
    
    $(".support_popular__blocks___item____tag").css("background", "#8692C3")
    
    $(".support_all__blocks___item____text_____date").css("color", "#3D2A92")
    $(".support_all__blocks___item____text_____button").css("background", "#3D2A92")
})


function showObl(classObject, img) {
    let allObl = document.querySelectorAll(".map");
  
    for (let i = 0; i <= 13; i++) {
      $(`.${allObl[i].classList[1]}`).attr("showAttr", `hide`);
  
      if (allObl[i].classList[1] != classObject) {
        $(`.${allObl[i].classList[1]}`).attr(
          "src",
          `img/map/bg/${allObl[i].attributes["thisImg"].nodeValue}.png`
        );
      } else {
        $(`.${allObl[i].classList[1]}`).attr("src", `img/map/${img}`);
      }
    }
  
    $(`.${classObject}`).attr("showAttr", `show`);
  }
  
  $(".pr").click(function () {
    showObl("pr", "прикубанский.png");
    $(`.pr1`).attr("src", `img/map/прикубанский1.png`);
  });
  
  $(".pr1").click(function () {
    showObl("pr1", "прикубанский1.png");
    $(`.pr`).attr("src", `img/map/прикубанский.png`);
  });
  
  $(".ar").click(function () {
    showObl("ar", "абазинский.png");
    $(`.ar1`).attr("src", `img/map/абазинский1.png`);
  });
  
  $(".ar1").click(function () {
    showObl("ar1", "абазинский1.png");
    $(`.ar`).attr("src", `img/map/абазинский.png`);
  });
  
  $(".ahr1").click(function () {
    showObl("ahr1", "адыгехабльский1.png");
    $(`.ahr`).attr("src", `img/map/адыгехабльский.png`);
  });
  
  $(".ahr").click(function () {
    showObl("ahr", "адыгехабльский.png");
    $(`.ahr1`).attr("src", `img/map/адыгехабльский1.png`);
  });
  
  $(".hr").click(function () {
    showObl("hr", "Хабезский.png");
  });
  
  $(".udr").click(function () {
    showObl("udr", "усть-джегутинский.png");
  });
  
  $(".nr").click(function () {
    showObl("nr", "ногайский.png");
  });
  
  $(".mr").click(function () {
    showObl("mr", "малокарачаевский.png");
  });
  
  $(".kr").click(function () {
    showObl("kr", "карачаевский.png");
  });
  
  $(".zr").click(function () {
    showObl("zr", "зеленчукский.png");
  });
  
  $(".ur").click(function () {
    showObl("ur", "урупский.png");
  });
  
  $(".cher").click(function () {
    showObl("cher", "черкесск.png");
  });