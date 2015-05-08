angular.module('mainApp',[])
.controller("mainController", function($scope, $interpolate) {
	var category = {};
	$scope.category = category;
	category.name = "Category name";
	
	var cats = [
		{name:"cat1" , num : 2},
		{name:"cat2", num : 3}
	];
	$scope.cats = cats;
	console.log($scope.cats);

	$scope.$watch('emailBody', function(body){
		if(body) {
			var template = $interpolate(body);
			$scope.previewText = template({to: $scope.to})
		}
	})
})
.service("dbDriver", function() {
	this.getVal = function() {
		return 'test';
	}
})
.directive("tbCategoryList", function() {

	console.log('called from directive');
	return {
		controller: function($scope, dbDriver) {
			$scope.item1 = dbDriver.getVal();
		},
		template: '<li>{{item1}}</li>',
	};

});