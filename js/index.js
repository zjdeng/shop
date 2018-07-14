/**
 * Created by dzj12 on 2018/7/12.
 */
var indexData = {
    pageParams: {
        "page_num": 1,   // 分页号
        "page_size": 10 // 分页大小
    },
    pageTurn: function (total) {
        var thisFun = this;
        $("#pageTurn").pageM({
            "pageNum": thisFun.pageParams.page_num,
            "total": total,
            "pageSize": thisFun.pageParams.page_size,
            "pagePosition": "CENTER",
            "pageEvent": function (option) {
                thisFun.pageParams.page_num = option.pageNum;
                //请求列表方法
                thisFun.getList();
                console.log(option.pageNum);
            }
        })
    },
    getList: function () {
        var total = 81;
        this.pageTurn(total);
    },
    
};
$(function () {
    indexData.getList();
});