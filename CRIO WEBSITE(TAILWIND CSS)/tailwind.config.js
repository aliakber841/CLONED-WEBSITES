/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        nav:"#2DF8C5",
        nav_button:'#FFE500',
        play:'#07634C',
        light_blue:'#F2FBF7',
        sea_green:"#004246",
        settings:"#2AEDBE",
        dark_green:'#013437',
        hyper:'#81F076'
      },
      height:{
        'card-h':'1rem',
        'nav_height':'2.8rem',
        'box-h':'2.6rem',
        'tick':'1.8rem',
        'navbar':'6.6rem',
        'img_height':"3.4rem",
        'nav_height2':'3.8rem',
        'hero_height':'42rem',
        'green-h':'44rem',
        'card_container':"36rem",
        'card_container2':"24rem",
        'card_height':'32rem',
        'card2_height':'20rem',
        'hero-end':'4.8rem',
        'card-h':'13rem',
        'marquee-h':'14rem',
        'marquee2':'16rem',
        'box1':'10rem',
        'box2':'9rem',
        'card3_right':'5.8rem',
        'box3':'11.2rem',
        'box4':"12rem",
        'box5':"18rem",
        'box6':"29rem"
      },
      animation:{
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      width:{
        'box-w':'2.5rem',
        "bookbutton":'2rem',
        'card-w':'7rem',
        'card2-w':'4rem',
        'marquee1':'14rem',
        'card_width':'22rem',
        'card2_width':'20rem',
        'card3_width':'70rem',
        'card3_left':'40rem',
        'card3_left2':'38rem',
        'box1-w':'15.7rem',
        'card3_right_box':'30rem',
        'box3-w':'12rem',
        'box4-w':'19rem'
      },
      fontSize:{
        'book-button':'1.05rem',
        'nav_text':'0.95rem',
      },
      padding:{
        'pt1':"0.3rem",
        'pt2':"0.5rem",
        'pt3':'4rem',
        'pt4':"0.9rem",
        'pt5':'1.1rem',
        'pt6':'4.5rem',
        'pt7':'3.7rem',
        'pt8':'2.8rem',
        'pt9':'11.4rem',
        'pt10':'10.8rem',
        'pt11':'2rem',
        'pt12':"9.3rem",

        'pl2':"1.5rem",
        'pl3':'1.7rem',
        'pl4':'24rem',
        'nav_a':'1.1rem',
       
        'pr2':'1rem',
        'pr3':'1.3rem',

        'pb1':'1rem',
        'pb2':'0.3rem'
      },
      margin:{
        'mt1':'0.7rem',
        'mt2':'3rem',
        'mt3':'1rem',
        'mt4':"3.3rem",
        'mt5':'1.8rem',
        'mt6':'0.4rem',
        'mt7':'3.7rem',
        
        'ml1':'4.4rem',
        'ml2':'1.1rem',
        'ml3':'6rem',
        'ml4':'25rem',
        'ml5':'7.3rem',
        'ml6':'5rem',
        'ml7':'35rem',
        'ml8':'12rem',
        'ml9':'6.8rem',
        'ml10':'17rem',
        'ml11':'10.5rem',
        'ml12':'28rem',
        'hero_margin':'5rem',
        'ml13':'30rem',
        'ml14':'25rem',
        'ml15':'23rem',
        'ml16': "18.2rem",
        'ml19':'31rem',
        'ml20':'9rem',
        'ml21':"15rem",
        'ml22':'25.5rem',
        'ml23':'23.5rem'
      },
      lineHeight:{
        'l1':'3.1rem',
        'l2':'1.75rem',
        'l3':"3.3rem"
      }
      
      
    },
  },
  plugins: [],
}

