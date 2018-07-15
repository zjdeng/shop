var cartDate =  {
    toggleFun: function () {
        // 判断是否全部选中
        var isSelectAll = function () {
            var allNum = $('.selectSingle').length;
            var selectNum = $('.selectSingle > input[type="checkbox"][checked]').length;
            if (allNum == selectNum) {
                $('.selectAll').children('i').show();
                $('.selectAll').children('input[type="checkbox"]').attr("checked", true);
            } else {
                $('.selectAll').children('i').hide();
                $('.selectAll').children('input[type="checkbox"]').attr("checked", false);
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

            if ($(this).hasClass('selectSingle')) {
                isSelectAll();
            }
            
        });
        // 全选
        $('.selectAll').click(function () {
            var checkboxObj = $('.orderTable-checkbox');
            if ($(this).children('i').is(":hidden")) {
                checkboxObj.find('i').hide();
                checkboxObj.find('input[type="checkbox"]').attr("checked", false);
            } else {
                checkboxObj.find('i').show();
                checkboxObj.find(' input[type="checkbox"]').attr("checked", true);
            }
        });

        // 商品数量加减
        $('.goodsNumOperation > span:first-child').click(function () {
            var numObj = $(this).parent().children('input');
            if (+numObj.val() > 1) {
                numObj.val(+numObj.val() - 1);
            }
        });
        $('.goodsNumOperation > span:last-child').click(function () {
            var numObj = $(this).parent().children('input');
            numObj.val(+numObj.val() + 1);
        });
        $('.goodsNumOperation > input').blur(function () {
            if ($(this).val() == '') {
                $(this).val(1);
            }
        });
    }
};
$(function () {
    cartDate.toggleFun();
});