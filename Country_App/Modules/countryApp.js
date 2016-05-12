var filesystem = require ('fs')
var countryname = process.argv[2]

function countryInfo () {
    filesystem.readFile ('./modules/countries.json', function (error, filedata){
    if (error) {
        console.log("An error occured: "+ error)
        throw error
    }
    var jsondata = JSON.parse(filedata)

    jsondata.forEach (function(country){
    	if (country.name == countryname){
    		console.log('Country: '+country.name)
    		console.log('Top level domain: '+country.topLevelDomain)
    	}
    })
})}

module.exports.getCountry = countryInfo