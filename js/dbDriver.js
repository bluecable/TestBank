var dbDriver = angular.module("dbDriver", []);
dbDriver.value("databaseName", "testbank2");

dbDriver.factory("pouchdb", function(databaseName) {
	PouchDB.enableAllDbs = true;
	return new PouchDB(databaseName);

});

dbDriver.factory("QuestionService", function($q, pouchdb) {
	var save = function(question) {
		if (!question._id) {
			// quesiton already exists in the db
			question._id = Date.now() + '';
		}
		console.log(question);
		pouchdb.put(question, function(error, response) {
			if (error) {
				console.log(error);
				return;
			} else if (response && response.ok) {
				console.log('received ok response' + response);
			}
		});
	};

	var getAll = function() {
		var questions = [];
		var deferred = $q.defer();
		pouchdb.allDocs({
			include_docs: true,
			attachments: true
		}).then(function(response) {
			var row;
			var rows = response.rows;
			for (row in rows) {
				questions.push(rows[row]);
			}
			deferred.resolve(questions);
		}).catch(function(error) {
			console.log(error);
			deferred.reject(error);
		});
		return deferred.promise;
	};

	var deleteDb = function() {
		pouchdb.destroy(function(error, response) {
			if (error) {
				console.log('error in deleting database');
			}
		});
	};

	return {
		save: save,
		getAll: getAll
	};
});
// var db = new PouchDB('testbank');
// var category = {
// 	type : "subject",
// 	name : "subject 1"
// };
// db.put(category, "1", function(err, response) {
// 	if(err) {
// 		console.log("error in adding to db");
// 	} else {
// 		console.log(response);
// 	}
// });
// var category2 = {
// 	_id : "2",
// 	type : "subject",
// 	name : "subject 2"
// };
// db.put(category2);
// // console.log(category);
// // console.log(category2);

// db.get("2").then(function(doc) {
// 	console.log(doc);
// });