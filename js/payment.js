var paymentDate =  {
    toggleFun: function () {
        $('.payment-content > div').click(function () {
            $(this).children('i.icon-radio').addClass('icon-radio-selected');
            $(this).siblings().children('i.icon-radio').removeClass('icon-radio-selected');
        });
    }
};
$(function () {
    paymentDate.toggleFun();
});