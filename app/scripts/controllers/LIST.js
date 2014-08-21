'use strict';

/**
 * @ngdoc function
 * @name zhangxiaoyunApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zhangxiaoyunApp
 */

angular.module('zhangxiaoyunApp')
   .controller('MyCtrl',function ($scope){


    $scope.items = [
        new Item('饮料类','雪碧',3.00,'罐'),
        new Item('水果类','荔枝',15.00,'斤'),
        new Item('其他类','电池',2.00,'个'),
        new Item('水果类','苹果',5.50,'斤'),
        new Item('零食类','方便面',4.50,'袋'),
        new Item('其他类','洗发露',20.00,'瓶')
        ];
   });

// angular.module('zhangxiaoyunApp')
//   .controller('MyFirstCrtl', function ($scope) {
//
//   $scope.items = [{new Item(饮料类,雪碧,3.00,罐)},{new Item(水果类,荔枝,15.00,斤)},{new Item(其他类,电池,2.00,个)},{new Item(水果类,苹果,5.50,斤)},{new Item(零食类,方便面,4.50,袋)},{new Item(其他类,洗发露,20.00,瓶)}];
// });
function Item(category,name,price,unit) {
    this.category = category;
    this.name = name;
    this.price = price;
    this.unit = unit;
}
