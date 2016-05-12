var countryname = process.argv[2]
var fs = require('fs')

fs.readFile( './modules/countries.json', function (error, filedata){
    if (error) {
        console.log("Something is up! Details: "+ error)
        throw error
    }
    var jsondata = JSON.parse(filedata)

    jsondata.forEach (function(country){
    	if (country.name == countryname){
    		console.log('Country: '+country.name)
    		console.log('Top level domain: '+country.topLevelDomain)
    	}
    })
})