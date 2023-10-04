var tl=gsap.timeline();
tl.from(".nav img",{
    y:-100,
        stagger:0.1,
        duration:0.7,
       
})
tl.from(".nav-part2",{
        y:-100,
        stagger:0.1,
        duration:1,
     
})
tl.from(".nav-part3",{
    y:-100,
    stagger:0.1,
    duration:1,
})

  var word= document.querySelector(".page4-word-container");
  var img=document.querySelector(".page4-right");
  word.addEventListener("click",function(){
      img.style.display="block";
      img.style.backgroundImage= `url(${"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade003_Multi_feature_1069_x600_A_Desktop1?scl=1&resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=90&fit=constrain&wid=2136&hei=1200"})`
      img.style.height = "56%";
      img.style.width = "57%";
      img.style.position = "absolute";
      img.style.right="3%";
      gsap.from(".page4-right",{
        y:-100,
        duration:1.7,
    })
    });  

    var word= document.querySelector(".page4-excel-container");
  var img=document.querySelector(".page4-right");
  word.addEventListener("click",function(){
      img.style.display="block";
      img.style.backgroundImage= `url(${"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade003_Multi_feature_1069_x600_B_Desktop1?scl=1&resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=90&fit=constrain&wid=2136&hei=1200"})`
      img.style.height = "56%";
      img.style.width = "57%";
      img.style.position = "absolute";
      img.style.right="3%";
      gsap.from(".page4-right",{
        y:-100,
        duration:1.7,
    })
    });  

    var word= document.querySelector(".page4-powerpoint-container");
    var img=document.querySelector(".page4-right");
    word.addEventListener("click",function(){
        img.style.display="block";
        img.style.backgroundImage= `url(${"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade003_Multi_feature_1069_x600_C_Desktop1?scl=1&resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=90&fit=constrain&wid=2136&hei=1200"})`
        img.style.height = "56%";
        img.style.width = "57%";
        img.style.position = "absolute";
        img.style.right="3%";
        gsap.from(".page4-right",{
            y:-100,
            duration:1.7,
        })
      });  

      var word= document.querySelector(".page4-teams-container");
    var img=document.querySelector(".page4-right");
    word.addEventListener("click",function(){
        img.style.display="block";
        img.style.backgroundImage= `url(${"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade003_Multi_feature_1069_x600_D_Desktop1?scl=1&resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=90&fit=constrain&wid=2136&hei=1200"})`
        img.style.height = "56%";
        img.style.width = "57%";
        img.style.position = "absolute";
        img.style.right="3%";
        img.style.top="1%";
        gsap.from(".page4-right",{
            y:-100,
            duration:1.7,
        })
      });  

      var word= document.querySelector(".page4-outlook-container");
    var img=document.querySelector(".page4-right");
    word.addEventListener("click",function(){
        img.style.display="block";
        img.style.backgroundImage= `url(${"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade003_Multi_feature_1069_x600_E_Desktop1?scl=1&resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=90&fit=constrain&wid=2136&hei=1200"})`
        img.style.height = "56%";
        img.style.width = "57%";
        img.style.position = "absolute";
        img.style.right="3%";
        img.style.top="5%";
        gsap.from(".page4-right",{
            y:-100,
            duration:1.7,
        })
      });  

      var word= document.querySelector(".page4-onedrive-container");
      var img=document.querySelector(".page4-right");
      word.addEventListener("click",function(){
          img.style.display="block";
          img.style.backgroundImage= `url(${"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade003_Multi_feature_1069_x600_F_Desktop1?scl=1&resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=90&fit=constrain&wid=2136&hei=1200"})`
          img.style.height = "56%";
          img.style.width = "57%";
          img.style.position = "absolute";
          img.style.right="3%";
          img.style.top="15%";
          gsap.from(".page4-right",{
            y:-100,
            duration:1.7,
        })
        });  

        var word= document.querySelector(".page4-more-container");
      var img=document.querySelector(".page4-right");
      word.addEventListener("click",function(){
          img.style.display="block";
          img.style.backgroundImage= `url(${"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade003_Multi_feature_1069_x600_G_Desktop?scl=1&resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=90&fit=constrain&wid=2136&hei=1200"})`
          img.style.height = "56%";
          img.style.width = "57%";
          img.style.position = "absolute";
          img.style.right="3%";
          img.style.top="19%";
          gsap.from(".page4-right",{
            y:-100,
            duration:1.7,
        })
        });  
        var wordadd= document.querySelector(".page4-word-container");
  wordadd.addEventListener("click",function(){
   wordadd.style.border= "4px dotted black";
  
   wordadd.addEventListener("mouseleave",function(){
    wordadd.style.border= "none";
    wordadd.style.borderTop= "2px solid #dadada";
    
   })
  })

  var exceladd= document.querySelector(".page4-excel-container");
  exceladd.addEventListener("click",function(){
   exceladd.style.border= "4px dotted black";

   exceladd.addEventListener("mouseleave",function(){
    exceladd.style.border= "none";
    exceladd.style.borderTop= "2px solid #dadada";
   })
  })

  var poweradd= document.querySelector(".page4-powerpoint-container");
  poweradd.addEventListener("click",function(){
   poweradd.style.border= "4px dotted black";

   poweradd.addEventListener("mouseleave",function(){
    poweradd.style.border= "none";
    poweradd.style.borderTop= "2px solid #dadada";
   })
  })

  var teamsadd= document.querySelector(".page4-teams-container");
  teamsadd.addEventListener("click",function(){
   teamsadd.style.border= "4px dotted black";

   teamsadd.addEventListener("mouseleave",function(){
    teamsadd.style.border= "none";
    teamsadd.style.borderTop= "2px solid #dadada";
   })
  })

  var outadd= document.querySelector(".page4-outlook-container");
  outadd.addEventListener("click",function(){
   outadd.style.border= "4px dotted black";

   outadd.addEventListener("mouseleave",function(){
    outadd.style.border= "none";
    outadd.style.borderTop= "2px solid #dadada";
   })
  })

  var oneadd= document.querySelector(".page4-onedrive-container");
  oneadd.addEventListener("click",function(){
   oneadd.style.border= "4px dotted black";

   oneadd.addEventListener("mouseleave",function(){
    oneadd.style.border= "none";
    oneadd.style.borderTop= "2px solid #dadada";
   })
  })

  var moreadd= document.querySelector(".page4-more-container");
  moreadd.addEventListener("click",function(){
   moreadd.style.border= "4px dotted black";

   moreadd.addEventListener("mouseleave",function(){
    moreadd.style.border= "none";
    moreadd.style.borderTop= "2px solid #dadada";
   })
  })

  var icons=document.querySelector(".page9-bottom>.ist-img");
  var image=document.querySelector(".page10-img-container");
  var text=document.querySelector(".simens-container");
  icons.addEventListener("click",function(){
    image.style.backgroundImage=`url(${"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/siemens-banner:VP4-1399x726?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=75"})`;
    image.style.display="block";
    image.style.height = "65%";
    image.style.width = "71%";
    image.style.backgroundSize= "cover";
    image.style.backgroundPosition= "center";
    image.style.position = "absolute";
    image.style.right="16%";
    image.style.top="9%";
    text.style.opacity=1;
    text4.style.opacity=0;
    text2.style.opacity=0;
    text3.style.opacity=0;
  })

  var icons=document.querySelector(".page9-bottom>.second-img");
  var image=document.querySelector(".page10-img-container");
  var text2=document.querySelector(".toyota-container");
  icons.addEventListener("click",function(){
    image.style.backgroundImage=`url(${"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/toyota-banner:VP4-1399x726?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=75"})`;
    image.style.display="block";
    image.style.height = "83%";
    image.style.width = "71%";
    image.style.backgroundSize= "cover";
    image.style.backgroundPosition= "center";
    image.style.position = "absolute";
    image.style.right="16%";
    text2.style.opacity=1;
    text4.style.opacity=0;
    text3.style.opacity=0;
    text.style.opacity=0;
  })

  var icons=document.querySelector(".page9-bottom>.third-img");
  var image=document.querySelector(".page10-img-container");
  var text3=document.querySelector(".academy-container");
  icons.addEventListener("click",function(){
    image.style.backgroundImage=`url(${"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ursuline-academy-of-dallas-banner:VP4-1399x726?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=75"})`;
    image.style.display="block";
    image.style.height = "76%";
    image.style.width = "71%";
    image.style.backgroundSize= "cover";
    image.style.backgroundPosition= "center";
    image.style.position = "absolute";
    image.style.right="16%";
    image.style.top="9%";
    text3.style.opacity=1;
    text4.style.opacity=0;
    text.style.opacity=0;
    text2.style.opacity=0;
  })

  var icons=document.querySelector(".page9-bottom>.fourth-img");
  var image=document.querySelector(".page10-img-container");
  var text4=document.querySelector(".zurich-container");
  icons.addEventListener("click",function(){
    image.style.backgroundImage=`url(${"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/zurich-banner:VP4-1399x726?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=75"})`;
    image.style.display="block";
    image.style.height = "76%";
    image.style.width = "71%";
    image.style.backgroundSize= "cover";
    image.style.backgroundPosition= "center";
    image.style.position = "absolute";
    image.style.right="16%";
    image.style.top="9%";
    text4.style.opacity=1;
    text.style.opacity=0;
    text2.style.opacity=0;
    text3.style.opacity=0;
  })

        

        