const tbody= document.querySelector('tbody');
fetch('https://646bb5f17d3c1cae4ce43044.mockapi.io/exam').then(resp=>resp.json()).then(json=>{
    json.forEach(el => {
        tbody.innerHTML+=`<tr>
        <th>${el.id}</th>
        <td><img src="${el.image}" width="50px"></td>
        <td>${el.tittle}</td>
        <td>${el.date}</td>
        <td>${el.about}</td>
      </tr>`
    });
})