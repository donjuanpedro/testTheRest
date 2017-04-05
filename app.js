const request = require('request');
request('http://hydromet.lcra.org/hydrometmvc/api/GetDataForAllSites', function (error, res, body) {
    if (!error && res.statusCode == 200) {
        console.log(body)
     }
})
