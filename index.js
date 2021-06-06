let menu = document.querySelector('.toggle')
let close = document.querySelector('.toggle-close')
let nav = document.querySelector('.nav')
let toggleNav = document.querySelector('.toggle-item')
let toggleStatus = false

let toggle = ()=>{
    if(toggleStatus==false){
        nav.style.display = 'none'
        toggleNav.style.display = 'flex'
        toggleStatus = true
    }else{
        nav.style.display = ''
        toggleNav.style.display = 'none'
        toggleStatus = false
    }
}
