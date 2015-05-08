module.exports = function LetterIndexStrategy(isCaps) {
	var symbolCount = 25;
	this.isCaps = isCaps;
	this.base = symbolCount + 1;
	this.startChar = 'a';

	var createIndex = function (count) {
		var index = '';
		var div = count / base;
		var remainder = count % base;

		index = getCharacterValue(remainder);
		if(div > 0) {
			index = createIndex(div).concat(index);
		}

	};

	var getCharacterValue = function(val) {
		return  String.fromCharCode(val + startChar);
	};

	this.getIndexString = function(count) {
		var index;
		if( 0 <= count && count <= symbolCount) {
			index = getCharacterValue(count);
		} else {
			index = createIndex(count);
		}
		return index;

	};

}