// rotating navbar animation

var openbt=document.querySelector('#open')
var closebt=document.querySelector('#close')
var container=document.querySelector('.cover-container')

openbt.addEventListener('click',()=>{
    container.classList.add('rotate') ;
})

closebt.addEventListener('click',()=>{
    container.classList.remove('rotate') ;
})

// counter animation
const nums=document.querySelectorAll('.nums span')
const counter=document.querySelector('.counter')
const final=document.querySelector('.final')
const replay=document.querySelector('#replay')
const cover=document.querySelector('.cover-container')
runAnimation()

function runAnimation(){
    nums.forEach((ele,idx)=>{
        ele.addEventListener('animationend',e=>{
            if(e.animationName=== 'goIn'){
                ele.classList.remove('in')
                ele.classList.add('out')
            }
            else if(e.animationName=='goOut' && idx!==nums.length-1){
                ele.nextElementSibling.classList.add('in')
            }
            else {
                counter.classList.add('hide')
                setTimeout(()=> cover.style.opacity='1',1000)
               
            }
        })
    })
}

