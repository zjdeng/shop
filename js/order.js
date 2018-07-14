var orderDate =  {
    toggleFun: function () {
        // 导航切换
        $('.orderNav > ul > li').click(function () {
            var dataType = $(this).attr("data-type");
            $(this).attr('class', 'active')
                .siblings().removeClass('active');
            $('.orderList-content > .orderList[data-type="' + dataType +'"]').show();
            $('.orderList-content > .orderList[data-type="' + dataType +'"]').siblings().hide();
        });
        // 多选框点击效果
        $('.orderTable-checkbox').click(function () {
            if ($(this).children('i').is(":hidden")) {
                $(this).children('i').show();
                $(this).children('input[type="checkbox"]').attr("checked", true);
            } else {
                $(this).children('i').hide();
                $(this).children('input[type="checkbox"]').attr("checked", false);
            }
        });
        // 全选
        $('.selectAll').click(function () {
            var tableObj = $(this).parent().siblings('table');
            if ($(this).children('i').is(":hidden")) {
                tableObj.find('.orderTable-checkbox > i').hide();
                tableObj.find('.orderTable-checkbox > input[type="checkbox"]').attr("checked", false);
            } else {
                tableObj.find('.orderTable-checkbox > i').show();
                tableObj.find('.orderTable-checkbox > input[type="checkbox"]').attr("checked", true);
            }
        });
    }
};
$(function () {
    orderDate.toggleFun();
});