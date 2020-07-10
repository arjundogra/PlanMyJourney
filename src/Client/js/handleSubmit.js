async function handleSubmit(event){
    const destination = document.getElementById('destination').value;
    console.log(destination);

    const response = await fetch('/api', {
        method:'POST' ,
        credentials: 'same-origin',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({destination})
    })
    const json = await response.json();
    console.log(json);

    const hey = await fetch('/a')
    const j = await hey.json();
    console.log(j)

}

export { handleSubmit }