



const fetch = require('node-fetch')

function apiCalls(lat,long){

    fetch('https://api.opencagedata.com/geocode/v1/json?q=' + lat + '+' + long + '&key=27f7a27433144a1baf0cc3e7f3c4b5f4')
    .then((response) => response.json())
    .then((json) => {
        console.log(json.results[0].components.country);
        console.log(json.results[0].components.city);
    });
}
 //call the function
 apiCalls(53.345995, -6.258893);

 


 

 function login(username,password){

    fetch('http://localhost:8080/login?username=' + username + '&password=' + password)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
     
    });
}
 //call the function
 login();