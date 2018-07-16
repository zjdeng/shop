var addressDate =  {
    // 关闭模态框
    closeModel: function () {
        $('.shoppingModel').hide();
        $('body').css('overflow', 'auto');
    },
    toggleFun: function () {
        var thisFun = this;
        // 多选框点击效果
        $('.orderTable-checkbox').click(function () {
            if ($(this).children('i').is(":hidden")) {
                $(this).children('i').show();
                //相应记录
            } else {
                $(this).children('i').hide();
                //相应记录
            }
        });

        // 修改地址
        $('.addressInfo-icon > input[type="button"]').click(function () {
            $('.addressInfo-default').hide();
            $('.addressInfo-modify').show();
        })

        //新增地址
        $('.addressInfo-default > .info-right > input').click(function () {
            $('.addressInfo-default').hide();
            $('.addressInfo-modify').show();
        });

        // 切换地址-开启模态框
        $('.addressInfo-default > .info-right > p').click(function () {
            $('.shoppingModel').show();
            $('body').css('overflow', 'hidden');
        });

        $('.icon-close').click(function () {
            thisFun.closeModel();
        });

        // 下拉框
        $('.selectBox').click(function ($event) {
            var selectboxList = $(this).children('ul');
            if (selectboxList.is(":hidden")) {
                selectboxList.show();
                $(this).siblings().children('ul').hide();
            } else {
                selectboxList.hide();
            }
            $event.stopPropagation();
        });

        // 选择地址
        $('.addressSelectModel > .addressList > .addressItem').click(function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });
    }
};
$(function () {
    addressDate.toggleFun();
});