
// search for forms on the basis of names
var search=document.querySelector('.search')
var btn=document.querySelector('#searchBtn')
var input=document.querySelector('#searchInput') ;
btn.addEventListener('click',()=>{
    search.classList.toggle('active');
    if(search.classList.contains('active')) input.focus()
})

// var query = { address: "Park Lane 38" };
// dbo.collection("customers").find(query).toArray(function(err, result) {
//   if (err) throw err;
//   console.log(result);

input.addEventListener('change',e=>{
    console.log(e.target.value) ;
})