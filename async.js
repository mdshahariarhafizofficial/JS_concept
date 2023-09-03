
fetch('https://jsonplaceholder.typicode.com/users')
.then( res => res.json())
.then( data => loadData(data))

function loadData(data){
    for( let i = 0; i < data.length; i++ ){
        let user = data[i];
        const userWebsite = user.website;
        const ul = document.getElementById("dataLoad");

        const li = document.createElement("li");
        li.innerText = userWebsite;
        ul.appendChild(li);
    }
}