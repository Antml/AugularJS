'use strict';

/**
 * @ngdoc function
 * @name zhangxiaoyunApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zhangxiaoyunApp
 */
angular.module('zhangxiaoyunApp')
  .controller('cartCtrl', function ($scope, $location) {

  $scope.cartItems = Localstorage.getLocalstorage('cartItems');
  $scope.price= caculateTotal();

  $scope.downCart_Num = function (cartItem){
    var cartItems = Localstorage.getLocalstorage("cartItems");
  if (!cartItems){
    cartItems = [];
  }
        for(var i=0; i<cartItems.length; i++){
            if(cartItems[i].item.name === cartItem.item.name){
              if (cartItems[i].quantity > 0){
                cartItems[i].quantity--;
              }

            }
        }

    Localstorage.setLocalstorage("cartItems", cartItems);
    $scope.cartItems = Localstorage.getLocalstorage('cartItems');
    $scope.$parent.quantity = generateQuantity();
    $scope.price= caculateTotal();

  };

  $scope.upCart_Num = function (cartItem){
    var cartItems = Localstorage.getLocalstorage("cartItems");
if (!cartItems){
  cartItems = [];
}
        for(var i=0; i<cartItems.length; i++){
            if(cartItems[i].item.name === cartItem.item.name){
                cartItems[i].quantity++;
            }
        }

    Localstorage.setLocalstorage("cartItems", cartItems);
    $scope.cartItems = Localstorage.getLocalstorage('cartItems');
    $scope.$parent.quantity = generateQuantity();
    $scope.price= caculateTotal();

  };
  $scope.changetopay = function(){
    $location.path('pay');

  };

});

function caculateTotal(){
  var total = 0;
  var cartItems =Localstorage.getLocalstorage('cartItems');
  if (!cartItems){
    cartItems = [];
  }

  for (var i=0;i<cartItems.length;i++){
    total += cartItems[i].quantity*cartItems[i].item.price;
  }
  return total;
}
