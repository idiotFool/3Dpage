define([
    "controllers/modules",
    "jquery"
], function(controllers){
    controllers.controller("navController", function($scope){
        $scope.navItems = [{
            id: 0,
            title: "三位图层",
            isSubtitleShow: false,
            subtitle: ["白模", "精模", "体渲染"]
        }, {
            id: 1,
            title: "3D工具",
            isSubtitleShow: true,
            subtitle: ["图例修改", "popUp弹框"]
        },{
            id: 2,
            title: "3D常用功能",
            isSubtitleShow: false,
            subtitle: ["测量", "绘制"]
        }];

        $scope.slideLevel2 = function($event, itemId){
            const targetItem = $scope.navItems.find((item) => {
                return item.id === itemId;
            });

            //让高亮的元素去除高亮
            !targetItem.isSubtitleShow && ($scope.navItems.find(item => item.isSubtitleShow).isSubtitleShow = false);
            targetItem.isSubtitleShow = !targetItem.isSubtitleShow;
        }
    });
});