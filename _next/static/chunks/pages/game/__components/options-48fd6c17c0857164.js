(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33],{9273:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/__components/options",function(){return n(7732)}])},9693:function(e,i){"use strict";i.Z={src:"/_next/static/media/arrowDown.08ce69b3.png",height:48,width:86,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAYUlEQVR42mNgXlW5CIi5gJgBiFmYVlWxAjEDEGsA8XwG5tVV4UCJTUAsBJKAYgPmVVU7mFdXmoIUgLAZUME+IJYDSjoAJXcDJcUYQAAoyAZVpApkHwdKbgJKcgJpoFwVKwA3NSs2ce1w6QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},3965:function(e,i){"use strict";i.Z={src:"/_next/static/media/arrowUp.881cb319.png",height:48,width:87,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAUklEQVR42mNgWl3JyLyqiokBCIDsWiBexwAEUD4LAxKnG4ibmVdXhgHp9UDMjiw5DYhrYHygiS5A/iYglgZKVs4G4hKIwipmZqBOqCIL5tWV+wCpCB+kh47IXgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},7732:function(e,i,n){"use strict";n.r(i);var l=n(5893),t=n(5675),s=n.n(t),o=n(7294),r=n(9693),c=n(3965);i.default=()=>{let[e,i]=(0,o.useState)(!0),[n,t]=(0,o.useState)("اختار الجولة"),[m,a]=(0,o.useState)();return(0,o.useEffect)(()=>{document.querySelectorAll(".mouseContainer").forEach(e=>{e.addEventListener("mousemove",i=>{let n=e.querySelectorAll(".mouseMove"),l=e.getBoundingClientRect(),t=i.clientX-l.x,s=i.clientY-l.y;try{n[0].style.setProperty("left","".concat(t,"px")),n[0].style.setProperty("top","".concat(s,"px"))}catch(e){}})})},[]),(0,l.jsxs)("div",{dir:"rtl",className:"font-ping ",children:[(0,l.jsx)("h1",{className:"text-center text-[7vmin] md:text-[2vw] font-messira font-extrabold",children:"اختار الجولة"}),e&&(0,l.jsx)("div",{className:"relative h-[15vw] md:h-[5vw]",children:(0,l.jsxs)("div",{onClick:()=>i(!e),className:"mouseContainer  absolute flex items-center text-[3.5vmin] md:text-[1.2vw] py-[4vmin] md:py-[1.5vw] px-[8vmin] md:px-[4vmin] mx-[5vmin] md:mx-[1vw] backdrop-blur-2xl rounded-2xl font-extrabold text-custom-white",children:[(0,l.jsx)("div",{className:"mouseMove"}),"اختار الجولة"!=n&&(0,l.jsx)("div",{className:"box-glow inline-block w-[5.5vmin] h-[5.5vmin] ml-[2vw] rounded-full",style:{backgroundColor:["#01271C","#002E20","#003828","#014B36","#01573E","#016D4E","#01825C","#00966A","#029D70","#03AB7A"][m]}}),(0,l.jsx)("div",{className:"leading-none",children:n}),(0,l.jsx)(s(),{className:"w-[7vmin] md:w-[3vw] mr-auto",src:r.Z,alt:"arrowDown",width:100,height:100})]})}),!e&&(0,l.jsx)("div",{className:"relative h-[15vw] transition-all duration-500",children:(0,l.jsxs)("div",{className:"mouseContainer absolute z-50 flex flex-col py-[5vmin] px-[8vmin] md:px-[4vmin] mx-[5vmin] text-[2.33vmin] md:text-[1vw] justify-between backdrop-blur-2xl rounded-2xl leading-none font-light text-custom-white",children:[(0,l.jsx)("div",{className:"mouseMove"}),(0,l.jsx)(s(),{onClick:()=>{i(!0)},className:"w-[7vmin] md:w-[3vw] absolute top-[5vmin] left-[8vmin] md:left-[4vmin]",src:c.Z,alt:"arrowDown",width:100,height:100}),(0,l.jsxs)("div",{className:"flex items-center border-b-[1px] p-[1vmin]",onClick:()=>{t("الجولة الاولي"),a(0),i(!0)},children:[(0,l.jsx)("div",{className:"box-glow inline-block w-[3.25vmin] h-[3.25vmin] ml-[2vw] rounded-full",style:{backgroundColor:"#01271C"}}),(0,l.jsx)("div",{children:"الجولة الاولي"})]}),(0,l.jsxs)("div",{className:"flex items-center border-b-[1px] p-[1vmin]",onClick:()=>{t("الجولة الثانية"),a(1),i(!0)},children:[(0,l.jsx)("div",{className:"box-glow inline-block w-[3.25vmin] h-[3.25vmin] ml-[2vw] rounded-full",style:{backgroundColor:"#002E20"}}),(0,l.jsx)("div",{children:"الجولة الثانية "})]}),(0,l.jsxs)("div",{className:"flex items-center border-b-[1px] p-[1vmin]",onClick:()=>{t("الجولة الثالثة"),a(2),i(!0)},children:[(0,l.jsx)("div",{className:"box-glow inline-block w-[3.25vmin] h-[3.25vmin] ml-[2vw] rounded-full",style:{backgroundColor:"#003828"}}),(0,l.jsx)("div",{children:"الجولة الثالثة"})]}),(0,l.jsxs)("div",{className:"flex items-center border-b-[1px] p-[1vmin]",onClick:()=>{t("الجولة العاشرة"),a(9),i(!0)},children:[(0,l.jsx)("div",{className:"box-glow inline-block w-[3.25vmin] h-[3.25vmin] ml-[2vw] rounded-full",style:{backgroundColor:"#03AB7A"}}),(0,l.jsx)("div",{children:"الجولة العاشرة"})]})]})})]})}}},function(e){e.O(0,[675,888,774,179],function(){return e(e.s=9273)}),_N_E=e.O()}]);