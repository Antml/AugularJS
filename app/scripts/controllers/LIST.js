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

        new Item('水果类','苹果',5.50,'斤'),
        new Item('零食类','方便面',4.50,'袋'),
        new Item('其他类','电池',2.00,'个'),
        new Item('其他类','洗发露',20.00,'瓶')
        ];

    $scope.BuyNow  = '立即购买';

    // $scope.count = Localstorage.getLocalstorage('cartItems').length;
    //
    $scope.getItem = function (item){
    var cartItems = Localstorage.getLocalstorage('cartItems');
    if (cartItems === null) {
        cartItems = [];
    }
    var cartItem = getUser(cartItems, item.name);
    if (cartItem) {
        cartItem.quantity++;
    }
    else {
        cartItems.push(new CartItem(item,1));
    }

    Localstorage.setLocalstorage('cartItems', cartItems);
    $scope.$parent.quantity = generateQuantity();
    };

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

function getUser(cartItems, code) {

    for (var i = 0; i < cartItems.length; i++) {
        if (code === cartItems[i].item.name) {
            //cartitem = cartItems[i];
            return cartItems[i];
        }
    }
    return false;
}
