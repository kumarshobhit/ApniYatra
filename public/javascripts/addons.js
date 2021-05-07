

// search for forms on the basis of names
var search=document.querySelector('.search')
var btn=document.querySelector('#searchBtn')
var input=document.querySelector('#searchInput') ;
btn.addEventListener('click',()=>{
    search.classList.toggle('active');
    if(search.classList.contains('active')) input.focus()
})
const camps=campgrounds.features ;
showCamps(camps)

input.addEventListener('input',e=>{
    const searchTerm=(e.target.value) ;
    if(searchTerm===''){
        showCamps(camps)
    }
    else {
        // const arr=camps.filter(e=>e.title===searchTerm)
        const arr=camps.filter(e=>e.title.toLowerCase().includes(searchTerm.toLowerCase()))
        if(arr.length==0) showCamps(camps)
       else  showCamps(arr)
    }

})

function showCamps(camp){
    const hold=document.querySelector('.hold')
    hold.innerHTML='' ;
        for(c of camp){
        const div=document.createElement('div') ;
        div.classList.add('container')
        div.classList.add('mb-5')
        div.innerHTML=` <div class="row">
        <div class="col-md-4">
                <img class="img-thumbnail" src="${c.images[0].url}" alt="camp image">
        </div>
        <div class="col-md-8">
            <h5>
                ${c.title}
            </h5>
            <p>
                ${c.description}
            </p>
            <p>
                <small class="text-muted">
                    ${c.location}
                </small>
            </p>
            <a class="btn btn-primary" href="/campgrounds/${c._id}">
                click here
            </a>
        </div>
    </div>`
    hold.append(div) ;
            }
}