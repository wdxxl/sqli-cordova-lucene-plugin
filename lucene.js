var exec = require('cordova/exec');
function LucenePlugin() {
	console.log("LucenePlugin is created");
}

LucenePlugin.prototype.init = function(indexFolder, field, maxResult) {
	this.indexFolder = indexFolder;
	this.field = field;
	this.maxResult = maxResult;
}

LucenePlugin.prototype.search = function(token, success, error) {
	if (this.indexFolder) {
		console.log("LucenePlugin.js: search");
		var execPromise = exec(function(result) {
			if (success) {
				success(result);
			}
		}, function(result) {
			if (error) {
				error(result);
			}
		}, "LucenePlugin", "searchIndex", [ {
			"token" : token,
			"indexFolder" : this.indexFolder,
			"maxResult" : this.maxResult,
			"field" : this.field
		} ]);
	}
};

LucenePlugin.prototype.searchFuzzy = function(token, success, error) {
	if (this.indexFolder) {
		console.log("LucenePlugin.js: searchFuzzyIndex");
		var execPromise = exec(function(result) {
			if (success) {
				success(result);
			}
		}, function(result) {
			if (error) {
				error(result);
			}
		}, "LucenePlugin", "searchFuzzyIndex", [ {
			"token" : token,
			"indexFolder" : this.indexFolder,
			"maxResult" : this.maxResult,
			"field" : this.field
		} ]);
	}
};

LucenePlugin.prototype.searchWildcard = function(token, success, error) {
	if (this.indexFolder) {
		console.log("LucenePlugin.js: searchWildcardIndex");
		var execPromise = exec(function(result) {
			if (success) {
				success(result);
			}
		}, function(result) {
			if (error) {
				error(result);
			}
		}, "LucenePlugin", "searchWildcardIndex", [ {
			"token" : token,
			"indexFolder" : this.indexFolder,
			"maxResult" : this.maxResult,
			"field" : this.field
		} ]);
	}
};

LucenePlugin.prototype.searchPrefix = function(token, success, error) {
	if (this.indexFolder) {
		console.log("LucenePlugin.js: searchPrefixIndex");
		var execPromise = exec(function(result) {
			if (success) {
				success(result);
			}
		}, function(result) {
			if (error) {
				error(result);
			}
		}, "LucenePlugin", "searchPrefixIndex", [ {
			"token" : token,
			"indexFolder" : this.indexFolder,
			"maxResult" : this.maxResult,
			"field" : this.field
		} ]);
	}
};

var lucenePlugin = new LucenePlugin();
module.exports = lucenePlugin;