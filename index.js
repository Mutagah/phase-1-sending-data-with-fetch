// Add your code here
function submitData(name, email){

    const configurationObject = {
    method: "POST",
    headers : {
        "Content-Type": "application/json",
        Accept : "application/json",
    },
    body : JSON.stringify({
        name: "Steve" ,
        email: "steve@steve.com",
    }), 
    
    };
return fetch("http://localhost:3000/users", configurationObject)
        .then(resp => resp.json())
        .then(data => document.body.innerHTML = data.id )
            .catch(error => document.body.innerHTML = error.message)
}