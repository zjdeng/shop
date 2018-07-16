var detailsDate =  {
    toggleFun: function () {
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

        // 图片切换
        $('.details-main .dm-left .dm-picList img').click(function () {
            var src = $(this).attr('src');
            $(this).attr('class', 'active');
            $(this).siblings().removeClass('active');
            $('.details-main .dm-left .dm-pic').attr('src', src);
        });

        $('.dn-addToCart').click(function () {
            alert('添加成功！');
        })
    }
};
$(function () {
    detailsDate.toggleFun();
});