angular.module('zhangxiaoyunApp')
  .controller('payCtrl', function ($scope, $location) {

$scope.cartItems = Localstorage.getLocalstorage('cartItems');
$scope.price= caculateTotal();
  });
