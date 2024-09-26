let asyncData = async() =>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    console.log(data);
    let view =document.getElementById('text-for-body');
    setInterval(() => {
        view.innerHTML = data[Math.floor(Math.random()= 100)].body;
        console.log(random);
        let randomData = datarandam;
        view.innerHTML=randomData.body;
    }, 1000);
}

  
