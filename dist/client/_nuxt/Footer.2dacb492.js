import{o as r,q as t,s as a,t as s,_ as c,z as i,C as _}from"./entry.9e7a06c0.js";const p={class:"loader-wrap"},u=s("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none"},[s("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})],-1),h=s("div",{class:"loader-wrap-heading"},[s("span",null,[s("h2",{class:"load-text"},[s("span",null,"L"),s("span",null,"o"),s("span",null,"a"),s("span",null,"d"),s("span",null,"i"),s("span",null,"n"),s("span",null,"g")])])],-1),f=[u,h],E={__name:"Loader",setup(o){return r(()=>{const e=document.getElementById("svg"),n=gsap.timeline(),l="M0 502S175 272 500 272s500 230 500 230V0H0Z",d="M0 2S175 1 500 1s500 1 500 1V0H0Z";n.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),n.to(e,{duration:.5,attr:{d:l},ease:"power2.easeIn"}).to(e,{duration:.5,attr:{d},ease:"power2.easeOut"}),n.to(".loader-wrap",{y:-1500}),n.to(".loader-wrap",{zIndex:-1,display:"none"}),n.from("header",{y:200},"-=1.5"),n.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")}),(e,n)=>(t(),a("div",p,f))}},v={},m={className:"lines"},$=s("span",null,null,-1),x=s("span",null,null,-1),g=s("span",null,null,-1),w=s("span",null,null,-1),y=s("span",null,null,-1),b=[$,x,g,w,y];function V(o,e){return t(),a("div",m,b)}const F=c(v,[["render",V]]),B={},k={class:"contact-fixed-butn"},C=s("div",{class:"butn-presv"},[s("a",{href:"#0",class:"butn butn-sm bg-white","data-scroll-nav":"5"},[s("span",{class:"text-dark"},[i("Contact Us "),s("i",{class:"fa-solid fa-down-long"})])])],-1),L=[C];function M(o,e){return t(),a("div",k,L)}const K=c(B,[["render",M]]),N={},S={class:"pb-30 pt-30"},z=_('<div class="container"><div class="row"><div class="col-12"><div class="text-center"><p class="fz-13"> © 2023 Kariim is Proudly Powered by <span class="underline main-color"><a href="#" target="_blank"> Kariim </a></span></p></div></div></div></div>',1),H=[z];function I(o,e){return t(),a("footer",S,H)}const P=c(N,[["render",I]]);export{K as C,P as F,F as L,E as _};
