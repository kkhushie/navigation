const ul=document.querySelector("header ul");
const menuBarb=document.querySelector("header .icons i.fa-bars");
const menuBarx=document.querySelector("header .icons i.fa-x");
menuBarb.addEventListener("click",()=>{
   
    ul.style.display="block";
    menuBarx.style.display="block";
          menuBarb.style.visibility="hidden";
   
    gsap.from(ul,{
        x:0,
        duration:1
    })
    // alert("hello")
})
menuBarx.addEventListener("click",()=>{
    
        ul.style.display="none";

        menuBarb.style.visibility="visible";
        menuBarx.style.display="none";
        
  gsap.from(ul,{
    opacity:0,
    duration:2
  })
    // alert("hello")
})