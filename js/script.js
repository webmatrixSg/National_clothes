(function(){

//   Script for slick

    $('.first_slider').slick({
        slidesToShow: 1,
        dots: true,
    });

    function showOrhideModalWindow() {
        $('#contact-form').fadeToggle();
        $('#shadow').fadeToggle();
        $('body').toggleClass('hidden');
    }

//    Обработчик события клик по кнопке "Заказать"
    $('.back_call').click(function (event) {
        event.preventDefault();
        showOrhideModalWindow();

    });

//    Закрыть форму
    $('#close-form').click(function (event) {
        event.preventDefault();
        showOrhideModalWindow();
    });




//    Оправка данных из формы обратной связи

    $('form').submit(function (event) {
        event.preventDefault();
        var name = $(this).children().eq(0).val();
        var phone = $(this).children().eq(1).val();
        $.ajax({
            url:'mail.php',
            method:'POST',
            data:{name:name, phone:phone},
            success:function (data) {
                ClearForms();
                swal("Форма успешно отправлена",'', "success");
            },
            error:function(data){
                console.log(data);
            }
        });
    });
//  Функция для очистки формы после отправки

    function  ClearForms() {
        console.log('очистка');
        for(var i=0; i<$('form').length; i++){
            $('form').eq(i).children().eq(0).val('');
            $('form').eq(i).children().eq(1).val('');
        }
    }

    //    Скрипт для плавного скролла

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });



}());

