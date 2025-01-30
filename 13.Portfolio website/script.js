var typed = new Typed(".text", {
    strings: ["Programming" ,"Web Development"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

var link = document.createElement('link');
link.rel = 'icon';
link.href = 'images/programmer-working-with-c/2801405.jpg';
document.head.appendChild(link);
