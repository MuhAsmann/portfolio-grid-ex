let typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","Coba Coba Developer","Grapich Designer","Haha hihi"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// ========= navbar =======
// === window scrol =====
window.addEventListener("scroll", () => {
    //ketika user scrol dari atas kebawah 80px maka jalankan
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navbar").classList.add("scrol");
        // document.getElementById("logo").style.fontSize = "25px";
      } 
      else {
        document.querySelector(".navbar").classList.remove("scrol");
        document.querySelector(".navbar").style.transition = "0.5s";
        // document.getElementById("logo").style.fontSize = "35px";
      }
});

// ===== Navbar Active ======
const navbar = document.querySelector(".navbar");
const navList = navbar.querySelectorAll("li");
const allSection = document.querySelectorAll(".section");

for(let i=0;i<navList.length;i++){
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {

    for (let j = 0; j < navList.length; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
  })

}

const nav = document.querySelector(".list");

const toggle = document.querySelector(".fa-bars");

toggle.addEventListener("click",function () {
  nav.classList.toggle("on");
})
