document.querySelector('button').addEventListener('click', function(){
    const fetched= fetch('https://646bb5f17d3c1cae4ce43044.mockapi.io/exam',  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
       
        },
      
        body: JSON.stringify({
            image: document.querySelector('#image').value,
            tittle: document.querySelector('#tittle').value,
            date: document.querySelector('#date').value,
            about: document.querySelector('#about').value
        })
      })
      fetched.then(resp=>console.log(resp)).catch(err=>console.log(err))
      fetched.then(resp=>{
        (resp.ok==true)
        {
            document.querySelector('#image').value='';
            document.querySelector('#tittle').value='';
            document.querySelector('#date').value='';
            document.querySelector('#about').value='';
        }
      }).catch(err=> console.log(err))
})