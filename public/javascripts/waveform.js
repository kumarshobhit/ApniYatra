var labels=document.querySelectorAll('label') ;

labels.forEach(ele => {
    ele.innerHTML=ele.innerText
                  .split('')
                  .map((letter,idx)=>`<span style="transition-delay:${idx*50}ms">${letter}</span>`)
                  .join('')
});