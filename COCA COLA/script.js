function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco();

var timeout;
var circle= document.querySelector(".minicircle");
function circleChange(){
    clearTimeout(timeout);
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",function(dets){

    xscale= gsap.utils.clamp(0.8,1.2,dets.clientX-xprev);
    yscale= gsap.utils.clamp(0.8,1.2,dets.clientY-yprev);

    xprev=dets.clientX;
    yprev=dets.clientY;

    circlemove(xscale,yscale);
    timeout= setTimeout(function(){
   circle.style.transform= `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`
    },100)
})
}
function circlemove(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`
    })
}
circleChange();
circlemove();

function hoverAnim(){
    var compText=document.querySelector(".company-text")
    var compDiv= document.querySelector(".company-div")
    
    compText.addEventListener("mouseover",function(){
        compDiv.style.display="flex",
        compDiv.style.zIndex=1,
        brandsDiv.style.display="none",
        sustainDiv.style.display="none",
        socialDiv.style.display="none",
        careersDiv.style.display="none",
        mediaDiv.style.display="none",
        gsap.from(".company-div",{
            y:-30,
            ease:Power4,
        })
        
        compDiv.addEventListener("mouseleave",function(){
            compDiv.style.display="none",
            gsap.from(".company-div",{
                y:0,
            })
        })
    })
    
    var brandsText=document.querySelector(".brands-text")
    var brandsDiv= document.querySelector(".brands-div")
    
    brandsText.addEventListener("mouseover",function(){
        brandsDiv.style.display="flex",
        brandsDiv.style.zIndex=1,
        compDiv.style.display="none",
        sustainDiv.style.display="none",
        socialDiv.style.display="none",
        careersDiv.style.display="none",
        mediaDiv.style.display="none",
        gsap.from(".brands-div",{
            y:-30,
            ease:Power4,
        })
        brandsDiv.addEventListener("mouseleave",function(){
            brandsDiv.style.display="none",
            gsap.from(".brands-div",{
                y:0,
            })
        })
    })
    
    var sustainText=document.querySelector(".sustain-text")
    var sustainDiv= document.querySelector(".sustain-div")
    
    sustainText.addEventListener("mouseover",function(){
        sustainDiv.style.display="flex",
        sustainDiv.style.zIndex=1,
        compDiv.style.display="none",
        brandsDiv.style.display="none",
        socialDiv.style.display="none",
        careersDiv.style.display="none",
        mediaDiv.style.display="none",
        gsap.from(".sustain-div",{
            y:-30,
            ease:Power4,
        })
        sustainDiv.addEventListener("mouseleave",function(){
            sustainDiv.style.display="none",
            gsap.from(".sustain-div",{
                y:0,
            })
        })
    })
    
    var socialText=document.querySelector(".social-text")
    var socialDiv= document.querySelector(".social-div")
    
    socialText.addEventListener("mouseover",function(){
        socialDiv.style.display="flex",
        socialDiv.style.zIndex=1,
        compDiv.style.display="none",
        brandsDiv.style.display="none",
        sustainDiv.style.display="none",
        careersDiv.style.display="none",
        mediaDiv.style.display="none",
        gsap.from(".social-div",{
            y:-30,
            ease:Power4,
        })
        socialDiv.addEventListener("mouseleave",function(){
            socialDiv.style.display="none",
            gsap.from(".social-div",{
                y:0,
            })
        })
    })
    
    var careersText=document.querySelector(".careers-text")
    var careersDiv= document.querySelector(".careers-div")
    
    careersText.addEventListener("mouseover",function(){
        careersDiv.style.display="flex",
        careersDiv.style.zIndex=1,
        compDiv.style.display="none",
        brandsDiv.style.display="none",
        sustainDiv.style.display="none",
        socialDiv.style.display="none",
        mediaDiv.style.display="none",
        gsap.from(".careers-div",{
            y:-30,
            ease:Power4,
        })
        careersDiv.addEventListener("mouseleave",function(){
            careersDiv.style.display="none",
            gsap.from(".careers-div",{
                y:0,
            })
        })
    })
    
    var mediaText=document.querySelector(".center-text")
    var mediaDiv= document.querySelector(".media-div")
    
    mediaText.addEventListener("mouseover",function(){
        mediaDiv.style.display="flex",
        mediaDiv.style.zIndex=1,
        compDiv.style.display="none",
        brandsDiv.style.display="none",
        sustainDiv.style.display="none",
        socialDiv.style.display="none",
        careersDiv.style.display="none",
        gsap.from(".media-div",{
            y:-30,
            ease:Power4,
        })
        mediaDiv.addEventListener("mouseleave",function(){
            mediaDiv.style.display="none",
            gsap.from(".media-div",{
                y:0,
            })
        })
    })
    var investors= document.querySelector(".investors-text")
    investors.addEventListener("mouseover",function(){
        mediaDiv.style.display="none"
    })
}
hoverAnim();

function navanim(){
    gsap.from(".nav-text",{
        y:"35",
        ease:Expo.easeInOut,
        stagger:0.2,
        duration:"1.2"
    })
}
navanim();


var clutter="";
var cardText=document.querySelector(".card-info");
cardText.textContent.split("").forEach(function(dets)
{
    clutter += `<span>${dets}</span>`
    cardText.innerHTML=clutter;
})

gsap.to(".card-info",{
    scrollTrigger:{
    trigger:".card-info>span",
    scroller:`main`,
    start:`top 60%`,
    end:`bottom 25%`,
    scrub:.5,
    },
    stagger:.2,
    color:"#000",
})


var clutter="";
var newsText=document.querySelector(".news1-container h4");
newsText.textContent.split("").forEach(function(dets)
{
    clutter += `<span>${dets}</span>`
    newsText.innerHTML=clutter;
})

gsap.to(".news1-container h4",{
    scrollTrigger:{
    trigger:".news1-container h4>span",
    scroller:`main`,
    start:`top 60%`,
    end:`bottom 25%`,
    scrub:.5,
    },
    stagger:.2,
    color:"#000",
})

var clutter="";
var jobText=document.querySelector(".job-para");
jobText.textContent.split("").forEach(function(dets)
{
    clutter += `<span>${dets}</span>`
    jobText.innerHTML=clutter;
})

gsap.to(".job-para",{
    scrollTrigger:{
    trigger:".job-para>span",
    scroller:`main`,
    start:`top 60%`,
    end:`bottom 25%`,
    scrub:.5,
    },
    stagger:.2,
    color:"#000",
})

var clutter="";
var historyText=document.querySelector(".company-history-div h5");
historyText.textContent.split("").forEach(function(dets)
{
    clutter += `<span>${dets}</span>`
    historyText.innerHTML=clutter;
})

gsap.to(".company-history-div h5",{
    scrollTrigger:{
    trigger:".company-history-div h5>span",
    scroller:`main`,
    start:`top 60%`,
    end:`bottom 25%`,
    scrub:.5,
    },
    stagger:.2,
    color:"#000",
})

var images=[
    {
       img:"https://www.coca-colacompany.com/content/dam/company/us/en/home/TCCC_mastheads_02.jpg/width1960.jpg"
    },{
    img:"https://www.coca-colacompany.com/content/dam/company/us/en/home/TCCC_mastheads_05.jpg/width1960.jpg"
    },{
        img:"https://www.coca-colacompany.com/content/dam/company/us/en/home/TCCC_mastheads_01.jpg/width1960.jpg"
    },{
        img:"https://www.coca-colacompany.com/content/dam/company/us/en/home/TCCC_mastheads_04.jpg/width1960.jpg"
    },{
        img:"https://www.coca-colacompany.com/content/dam/company/us/en/home/TCCC_mastheads_03.jpg/width1960.jpg"
    }
]
var imgcontainer=document.querySelector(".images-container");
btns=document.querySelectorAll(".button-container button");
var clutter2="";
    images.forEach(function(elem,index){
        clutter2+=`<img id=${index} src="${elem.img}"/>`;
        })
        imgcontainer.innerHTML=clutter2;
        
btns.forEach(function(btn,index){
btn.addEventListener("click",function(){
    var clickedImage = images.splice(index, 1)[0];
    images.unshift(clickedImage);
    updateImagesContainer();
})
})

function updateImagesContainer() {
    var newClutter = "";
    images.forEach(function (elem, index) {
        newClutter += `<img id=${index} src="${elem.img}"/>`;
    });
    imgcontainer.innerHTML = newClutter;
}


