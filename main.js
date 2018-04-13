var axios = require('axios');

axios.get('http://localhost:3000/users')
    .then(function(response){
        console.log(response.data);
    })
    .catch(function(error){
        console.log(error);
    })

axios.post('http://localhost:3000/users' , {
      firstName: "Pranav",
      lastName: "pranav@gmail.com",
      age: 34,
      companyId: "1"
}).then(function(response){
    console.log(response.data);
}).catch(function(error){
    console.log(error);
})
