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
        // 判断是否全部选中
        var isSelectAll = function (selectBoxName) {
            var allNum = $('.selectSingle-' + selectBoxName).length;
            var selectNum = $('.selectSingle-' + selectBoxName + ' > input[type="checkbox"][checked]').length;
            console.log(allNum + '===' + selectNum);
            if (allNum == selectNum) {
                $('.orderList-' + selectBoxName + ' .selectAll').children('i').show();
                $('.orderList-' + selectBoxName + ' .selectAll').children('input[type="checkbox"]').attr("checked", true);
            } else {
                $('.orderList-' + selectBoxName + ' .selectAll').children('i').hide();
                $('.orderList-' + selectBoxName + ' .selectAll').children('input[type="checkbox"]').attr("checked", false);
            }
        }
        // 多选框点击效果
        $('.orderTable-checkbox').click(function () {
            if ($(this).children('i').is(":hidden")) {
                $(this).children('i').show();
                $(this).children('input[type="checkbox"]').attr("checked", true);
            } else {
                $(this).children('i').hide();
                $(this).children('input[type="checkbox"]').attr("checked", false);
            }
            if ($(this).hasClass('selectSingle-noPay')) {
                isSelectAll('noPay');
            } else if ($(this).hasClass('selectSingle-receive')) {
                isSelectAll('receive');
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