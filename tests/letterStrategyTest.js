var LetterIndexStrategy = require('../model/letterIndexStrategy.js');
exports.testLetterIndexStrategy = function(test) {
	var strat = new LetterIndexStrategy(false);
	var index = start.getIndexString(1);

	test.ok(index == 'a', "1 should become a");

}