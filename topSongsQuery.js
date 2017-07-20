
// A query which returns all data for songs sung by a specific artist
var mysql = require('mysql');

var inquirer = require("inquirer");

var connection = mysql.createConnection({
 	host: 'localhost',
 	port: 3306,
 	user: 'root',
 	password: 'norsekey#1',
 	database: 'top_songsDB'
});

connection.connect(function(err) {
	if (err) throw err;
	
		   console.log("------------------------------------------------------------------------------------------------------\n");
	readArtist("The Beatles");
	
});

function end() {
	connection.end();
}


function readArtist(artist) {
	connection.query('SELECT * FROM top5000', function(err,results) {
	 	if (err) throw err;
	 	
	 	for (var i = 0; i < results.length; i++) {
	 		
	 		if(results[i].artist === artist){
	 			console.log(results[i].position+" "+results[i].artist+" "+ results[i].song);
	 		}
	 		

	 		
	 	}
	 	console.log("------------------------------------------------------------------------------------------------------\n");
	 	
	 	

	 })
	
}


// A query which returns all artists who appear within the top 5000 more than once


// A query which returns all data contained within a specific range


// A query which searches for a specific song in the top 5000 and returns the data for it


// HINT: There are some MySQL queries which could make some of these tasks even easier to accomplish. 
// Feel free to look at MySQL's documentation to find some of them.


