var axios = require('axios');

axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Create an instance using the config defaults provided by the library 
// At this point the timeout config value is `0` as is the default for the library 
var instance = axios.create();
 
// Override timeout default for the library 
// Now all requests will wait 2.5 seconds before timing out 
instance.defaults.timeout = 2500;
 
// Override timeout for this request as it's known to take a long time 
instance.get('/users', {
  timeout: 5000
}).then(function(response){
    console.log(response.data);
})
.catch(function(error){
    console.log(error);
})