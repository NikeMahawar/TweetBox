gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray("#panel");

let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", 
    pin: true, 
    pinSpacing: false 
  });
});



gsap.from("#fourth_img",{
  scale:0.5,
  opacity:0,
  duration:1,
  scrollTrigger:{
      trigger:".page1",
      scoller:"body",
      start:'top 70%',
      end:'top 65%',
      scrub:4
  }
})


gsap.from("#first",{
  scale:0.5,
  opacity:0,
  duration:1,
  scrollTrigger:{
      trigger:"#first",
      scoller:"body",
      start:'top 70%',
      end:'top 65%',
      scrub:4
  }
})
gsap.from("#second",{
  scale:0.5,
  opacity:0,
  duration:1,
  scrollTrigger:{
      trigger:"#first",
      scoller:"body",
      start:'top 70%',
      end:'top 65%',
      scrub:4
  }
})

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}