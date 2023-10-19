function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


gsap.to("#nav", {
  backgroundColor: "#000",
  // height: "70px",
  opacity:1,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page2", // Adjust this trigger to the appropriate one
    scroller: "#main",
    start: "top -10%",
    end: "top -11%",
    scrub: 1
  }
});

// Add this code after your existing JavaScript code
// const mobileMenu = document.getElementById('mobile-menu');
// const hamburgerIcon = document.getElementById('hamburger-icon');

// hamburgerIcon.addEventListener('click', () => {
//   mobileMenu.classList.toggle('active');
// });

// // Close the mobile menu when a link is clicked
// mobileMenu.querySelectorAll('a').forEach((link) => {
//   link.addEventListener('click', () => {
//     mobileMenu.classList.remove('active');
//   });
// });





gsap.to('#page>video',{
scrollTrigger:{
  trigger:'#page>video',
  start: '2% top',
  end: 'bottom top',
  // markers:true,
  scroller:'#main',
},
onStart: ()=>{
  document.querySelector('#page>video').play()
}
})
gsap.to('#page',{
scrollTrigger:{
  trigger:'#page',
  start:'top top',
  end:'bottom top',
  scroller:'#main',
  pin:true,
}
})

gsap.to("#first", {
  opacity:1,
  scrollTrigger: {
    trigger: "#page2", // Adjust this trigger to the appropriate one
    scroller: "#main",
    start: "top 55%",
    end: "top 45%",
    scrub: 3
  }
});
gsap.to("#second", {
  opacity:1,
  scrollTrigger: {
    trigger: "#page2", // Adjust this trigger to the appropriate one
    scroller: "#main",
    start: "top 55%",
    end: "top 45%",
    scrub: 3
  }
});
gsap.to("#page2Image", {
  opacity:1,
  scrollTrigger: {
    trigger: "#page2", // Adjust this trigger to the appropriate one
    scroller: "#main",
    start: "top 55%",
    end: "top 45%",
    scrub: 2,
  }
});
// gsap.to("#page3>img", {
//   opacity:1,
//   scrollTrigger: {
//     trigger: "#page3", // Adjust this trigger to the appropriate one
//     scroller: "#main",
//     start: "top 55%",
//     end: "top 45%",
//     scrub: 3
//   }
// });


gsap.to('#page5>video',{
  scrollTrigger:{
    trigger:'#page5>video',
    start: '2% top',
    end: 'bottom top',
    // markers:true,
    scroller:'#main',
  },
  // delay:2,
  onStart: ()=>{
    document.querySelector('#page5>video').play()
  }
  })
  gsap.to('#page5',{
  scrollTrigger:{
    trigger:'#page5',
    start:'top top',
    end:'bottom top',
    scroller:'#main',
    pin:true,
  }
  })
  
  // // Pause the video when it's out of the viewport
  // gsap.to(video, {
  //   scrollTrigger: {
  //     trigger: '#page5', // Change this to your trigger element ID
  //     start: 'top top',
  //     end: 'bottom top',
  //     onEnterBack: () => video.play(),
  //     onLeave: () => video.pause(),
  //     onLeaveBack: () => video.pause(),
  //   },
  // });

  gsap.to("#page6>img", {
    opacity:1,
    scrollTrigger: {
      trigger: "#page6", // Adjust this trigger to the appropriate one
      scroller: "#main",
      start: "top 55%",
      end: "top 45%",
      scrub: 5
    }
  });


