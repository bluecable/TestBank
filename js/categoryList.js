var Category = require('./model/category.js');

var categoryList = angular.module("categoryList", []);

categoryList.factory("categoryFactory", function() {

	return {
		getCategory: function() {
			var cat = new Category();
			// var cat = {};
			cat.name = "test";
			return cat;
		}
	}
});


categoryList.controller("CategoryController", ['$scope', 'categoryFactory', function($scope, categoryFactory) {
	var cat = categoryFactory.getCategory();
	// var cat = {};
	console.log(cat.getIndexName());
	$scope.cat = cat;
}]);