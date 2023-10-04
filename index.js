// Add your code here
  function submitData(name, email) {
    let url = 'http://localhost:3000/users';

   return fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({name:`${name}`, email:`${email}`})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let p = document.createElement('p');
        p.textContent = `New ID: ${data.id}`;
        document.body.appendChild(p);
    })
    .catch(error => {
        console.error('Error:', error);
        let errorMsg = document.createElement('p');
        errorMsg.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMsg);
    });
}

submitData('sean','seanmotanya@gmail.com')
submitData('andre','andre2002@gmail.com')
