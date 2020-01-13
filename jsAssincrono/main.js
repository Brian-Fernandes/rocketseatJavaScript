axios.get('https://api.github.com/users/Brian-Fernandes')
.then(function(response) {
    console.log(response);
})
.catch(function(error) {
    console.warn(error);
})