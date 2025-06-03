// selectors
const fadeBox = document.querySelectorAll('.anibox')


// hide boxs
fadeBox.forEach(item=>{
    const hideState = item.getAttribute('data-hideState')
    item.classList.add(hideState)
})
window.addEventListener('scroll',function(){
    fadeBox.forEach(item=>{
        if(window.scrollY>item.offsetTop - 500){
            item.classList.remove(item.getAttribute('data-hideState'))
        }
        else{
            item.classList.add(item.getAttribute('data-hideState'))
        }
    })
})