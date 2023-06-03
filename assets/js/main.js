document.getElementsByClassName('navbar-toggler')[0].addEventListener('click',()=>{
    if(document.getElementsByClassName('navbar-collapse')[0].style.display=='block'){
        document.getElementsByClassName('navbar-collapse')[0].style.display='none'
    }
    else{
    document.getElementsByClassName('navbar-collapse')[0].style.display='block'}
})