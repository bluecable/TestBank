var CategoryType = require('./categoryType.js');

module.exports = function Category() {

	Category.prototype.getIndexName = function(first_argument) {

	};
	this.name = "";
	this.id = "1";
	this.categoryType = new CategoryType(2);

	this.getIndexName = function() {
		console.log(indexName);
		var indexName = this.categoryType.getName();
		return indexName;
	}

	this.getFullIndex = function() {

	}

	this.indexName = this.getIndexName();

}