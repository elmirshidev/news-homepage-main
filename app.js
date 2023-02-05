const sidebar = document.querySelector('.sidebar')
const hamburger = document.querySelector('.ham_img')
const close1 = document.querySelector('.close_img')

hamburger.addEventListener('click' , e=>{
    sidebar.classList.add('sidebar_new')
})



close1.addEventListener('click' , e=>{
    sidebar.classList.remove('sidebar_new')
})