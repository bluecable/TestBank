var testBank = angular.module('testBank', ['dbDriver']);

function createPreviewText(text) {

}

testBank.controller("QuestionController", function($scope, QuestionService) {
	$scope.saveQuestion = function() {
		var question = {
			problem: $scope.editorValue
		};
		//question.problem = $scope.editorValue;
		QuestionService.save(question);
	};

	QuestionService.getAll().then(
		function onSuccess(questions) {
			for (var i = questions.length - 1; i >= 0; i--) {
				questions[i].shortString = angular.element(questions[i].doc.problem).text();
			};
			$scope.questions = questions;
		},
		function onError(error) {
			$scope.questions = null;
			console.log('error occurs in getAll ' + error);
		});

	$scope.displayQuestion = function(question) {
		$scope.selectedQuestion = question;
	}
});

testBank.directive("textEditor", function() {
	return {
		restrict: 'A',
		require: '?ngModel',
		link: function(scope, element, attrs, ngModel) {
			var editor = CKEDITOR.replace(element[0]);

			if (!ngModel) {
				return;
			}

			editor.on('pasteState', function() {
				scope.editorValue = editor.getData();
				scope.$apply(function() {
					ngModel.$setViewValue(editor.getData());
				});
			});

			ngModel.$render = function(value) {
				editor.setData(ngModel.$viewValue);
			}

		}
	};
});