
var LetterIndexStrategy = require('./letterIndexStrategy.js');
var NumberIndexStrategy = require('./numberIndexStrategy.js')

module.exports = function CategoryType(typeId) {

	this.typeId = typeId;
	var categoryTypeDef = [
		{
			 id : 1,
			 name : "Subject", 
			 indexer : function() { return new NumberIndexStrategy(); }
		},
		{
			id : 2,
			 name : "Topic",
			 indexer : new LetterIndexStrategy(true)
		},
		{id :3, name : "Sub Topic", indexer : new NumberIndexStrategy()},
		{id :4, name: "Sub Sub Topic", indexer : new LetterIndexStrategy(false)}
	];

	this.getName = function() {
		for (var i = 0; i < categoryTypeDef.length; i++) {
			if(categoryTypeDef[i].id == this.typeId) {
				return categoryTypeDef[i].name;
			}
		};
	};
}