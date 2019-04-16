(function ($) {
    "use strict";

    jQuery('.navigation').meanmenu({
        meanMenuContainer: '.mobile-nav',
        meanScreenWidth: "767",
        meanRevealPosition: "left"
    });


    var width = $(window).width();
    if ((width < 480)) {
        $("#datepicker").datepicker({
            minDate: 0,
            maxDate: "+6M",
            changeYear: true,
            changeMonth: true,
            numberOfMonths: 1,
            minDate: 3,
            format: 'mm/dd/yyyy',
            yearRange: "-100:+20"
        });

    } else {
        $("#datepicker").datepicker({
            minDate: 0,
            maxDate: "+6M",
            changeYear: true,
            changeMonth: true,
            numberOfMonths: 2,
            minDate: 3,
            format: 'mm/dd/yyyy',
            yearRange: "-100:+20"
        });

    }


    $(".zipBox").on('click', function (e) {

        $(".zippop").toggle();
        e.stopPropagation();
    });

    $(".closepopup").click(function (e) {
        $(".zippop").hide();
    });

    $(".zippop").click(function (e) {
        e.stopPropagation();
    });
    $(document).on('click', function (e) {
        $(".zippop").hide();
    })

    $(document).ready(function () {
        $('[id^=fromZip]').keypress(validateNumber);
    });

    $("#step1").click(function(){
        $(".stepOne").hide(500);
        $(".stepTwo").show(500);
    });
    $(".backToStep1").click(function () {
        $(".stepOne").show(500);
        $(".stepTwo").hide(500);
    });


    function validateNumber(event) {
        var key = window.event ? event.keyCode : event.which;
        if (event.keyCode === 8 || event.keyCode === 46) {
            return true;
        } else if (key < 48 || key > 57) {
            return false;
        } else {
            return true;
        }
    };


})(jQuery);	