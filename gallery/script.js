// lightBox functionality 
const lightBox = document.querySelector(".lightbox");
const lbCloseBtn = document.querySelector(".close");
const lbImg = document.getElementById("lbImg");

lbCloseBtn.addEventListener("click", ()=>{
  lightBox.style.display = "none";
})

lightBox.addEventListener("click", ()=>{
  if(lightBox.style.display != "none"){
    lightBox.style.display = "none";
  }
})

const gallery = document.querySelectorAll(".gallery_img");

for(let i = 0; i < gallery.length; i++){
  gallery[i].addEventListener("click", ()=>{
    lightBox.style.display = "block";
    lbImg.src = gallery[i].src;
  })
}