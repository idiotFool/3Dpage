define([
    "controllers/modules",
    "jquery"
], function(controllers){
    controllers.controller("navController", function($scope){
        $scope.navItems = [{
            id: 0,
            title: "三位图层",
            isSubtitleShow: false,
            subtitle: [{
                titleName: "白模",
                link: "bm"
            }, {
                titleName: "精模",
                link: "JM"
            }, {
                titleName: "体渲染",
                link: "VOL"
            }]
        }, {
            id: 1,
            title: "3D工具",
            isSubtitleShow: true,
            subtitle: [{
                titleName: "图例修改",
                link: "legend"
            }, {
                titleName: "popUp弹框",
                link: "pop"
            }]
        },{
            id: 2,
            title: "3D常用功能",
            isSubtitleShow: false,
            subtitle: [{
                titleName: "测量",
                link: "measure"
            }, {
                titleName: "绘制",
                link: "drawing"
            }]
        }];

        $scope.slideLevel2 = function($event, itemId){
            const targetItem = $scope.navItems.find((item) => {
                return item.id === itemId;
            });
            //让高亮的元素去除高亮
            const extendItem = $scope.navItems.find(item => item.isSubtitleShow);

            !targetItem.isSubtitleShow && extendItem && (extendItem.isSubtitleShow = false)
            targetItem.isSubtitleShow = !targetItem.isSubtitleShow;
        }
    });
});