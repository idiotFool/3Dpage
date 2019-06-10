define([
    "controllers/modules",
    "jquery"
], function(controllers){
    controllers.controller("navController", function($scope){
        $scope.navItems = [{
            id: 0,
            title: "三位图层",
            subtitle: ["白模", "精模", "体渲染"]
        }, {
            id: 1,
            title: "3D工具",
            subtitle: ["图例修改", "popUp弹框"]
        },{
            id: 2,
            title: "3D常用功能",
            subtitle: ["测量", "绘制"]
        }];
        $scope.slideLevel2 = function($event){
            $($event.target).next('.nav-item-inner').toggle()
        }

    });
});