(function(t){function a(a){for(var s,l,o=a[0],r=a[1],c=a[2],u=0,m=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&m.push(i[l][0]),i[l]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(a);while(m.length)m.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,o=1;o<e.length;o++){var r=e[o];0!==i[r]&&(s=!1)}s&&(n.splice(a--,1),t=l(l.s=e[0]))}return t}var s={},i={app:0},n=[];function l(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=s,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)l.d(e,s,function(a){return t[a]}.bind(null,s));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=r;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},"0b09":function(t,a,e){t.exports=e.p+"img/avatar.3414c3a0.webp"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("becf"),e("cabf"),e("3c76");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("header",{staticClass:"d-print-none"},[s("div",{staticClass:"container text-center text-lg-left"},[s("div",{staticClass:"pt-4 clearfix"},[s("h1",{staticClass:"site-title mb-0"},[t._v(t._s(t.name))]),s("div",{staticClass:"site-nav"},[s("nav",{attrs:{role:"navigation"}},[s("ul",{staticClass:"nav justify-content-center"},t._l(t.items,(function(a){return s("li",{key:a.title,staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"+a.title.toLowerCase(),title:a.title}},[s("span",{staticClass:"menu-title"},[t._v(t._s(a.title))])])])})),0)])])])])]),s("div",{staticClass:"page-content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"resume-container"},[s("div",{staticClass:"shadow-1-strong bg-white my-5",attrs:{id:"intro"}},[s("div",{staticClass:"bg-info text-white"},[s("div",{staticClass:"cover bg-image"},[s("img",{attrs:{src:e("fd1b"),alt:"background"}}),s("div",{staticClass:"mask",staticStyle:{"background-color":"rgba(0, 0, 0, 0.7)","backdrop-filter":"blur(2px)"}},[s("div",{staticClass:"text-center p-5"},[t._m(0),s("div",{staticClass:"header-bio mt-3"},[s("div",{attrs:{"data-aos":"zoom-in","data-aos-delay":"0"}},[s("h2",{staticClass:"h1"},[t._v(t._s(t.name))]),s("p",[t._v(t._s(t.job))])]),s("div",{staticClass:"header-social mb-3 d-print-none",attrs:{"data-aos":"zoom-in","data-aos-delay":"200"}},[s("nav",{attrs:{role:"navigation"}},[s("ul",{staticClass:"nav justify-content-center"},t._l(t.socmeds,(function(a){return s("li",{key:a.title,staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:a.url,target:"_blank",title:a.title}},[s("i",{class:"fab "+a.icon}),s("span",{staticClass:"menu-title sr-only"},[t._v(t._s(a.title))])])])})),0)])]),t._m(1)])])])])])]),s("div",{staticClass:"shadow-1-strong bg-white my-5 p-5",attrs:{id:"about"}},[s("div",{staticClass:"about-section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("h2",{staticClass:"h2 fw-light mb-4"},[t._v(t._s(t.menu.aboutme))]),s("p",[t._v(t._s(t.about))])]),s("div",{staticClass:"col-md-5 offset-lg-1"},[s("div",[s("h2",{staticClass:"h2 fw-light mb-4"},[t._v("Bio")]),t._l(t.bios,(function(a){return s("div",{key:a.title,staticClass:"row mt-2"},[s("div",{staticClass:"col-sm-5"},[s("div",{staticClass:"pb-2 fw-bolder"},[s("i",{class:a.icon+" pe-2 text-muted",staticStyle:{width:"24px",opacity:"0.85"}}),t._v(" "+t._s(a.title)+" ")])]),s("div",{staticClass:"col-sm-7"},[s("div",{staticClass:"pb-2"},[t._v(t._s(a.value))])])])}))],2)])])])]),s("div",{staticClass:"shadow-1-strong bg-white my-5 p-5",attrs:{id:"skills"}},[s("div",{staticClass:"skills-section"},[s("h2",{staticClass:"h2 fw-light mb-4"},[t._v(t._s(t.menu.skill))]),s("div",{staticClass:"row"},t._l(t.skills,(function(a){return s("div",{key:a.data,staticClass:"col-md-6"},t._l(a.datas,(function(e){return s("div",{key:e.name,staticClass:"mb-3"},[s("span",{staticClass:"fw-bolder"},[t._v(t._s(e.name))]),s("div",{staticClass:"progress my-2 rounded",staticStyle:{height:"20px"}},[s("div",{class:"progress-bar bg-"+a.color,style:"width:"+e.percent+"%;",attrs:{role:"progressbar","data-aos":"zoom-in-right","data-aos-delay":"100","data-aos-anchor":".skills-section","aria-valuenow":e.percent,"aria-valuemin":"0","aria-valuemax":"100"}},[t._v(t._s(e.desc)+" ")])])])})),0)})),0)])]),s("div",{staticClass:"shadow-1-strong bg-white my-5 p-5",attrs:{id:"experience"}},[s("div",{staticClass:"work-experience-section"},[s("h2",{staticClass:"h2 fw-light mb-4"},[t._v(t._s(t.menu.experience))]),s("div",{staticClass:"timeline"},t._l(t.experiences,(function(a,e){return s("div",{key:e,staticClass:"timeline-card timeline-card-info",attrs:{"data-aos":"fade-in","data-aos-delay":200*e}},[s("div",{staticClass:"timeline-head px-4 pt-3"},[s("div",{staticClass:"h5"},[null!=a.url?s("a",{staticClass:"experience",attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.title))]):s("a",[t._v(t._s(a.title))])])]),s("div",{staticClass:"timeline-body px-4 pb-4"},[s("div",[t._v(t._s(a.description))])])])})),0)])]),s("div",{staticClass:"shadow-1-strong bg-white my-5 p-5",attrs:{id:"education"}},[s("div",{staticClass:"education-section"},[s("h2",{staticClass:"h2 fw-light mb-4"},[t._v(t._s(t.menu.education))]),s("div",{staticClass:"timeline"},t._l(t.educations,(function(a,e){return s("div",{key:e,staticClass:"timeline-card timeline-card-success",attrs:{"data-aos":"fade-in","data-aos-delay":200*e}},[s("div",{staticClass:"timeline-head px-4 pt-3"},[s("div",{staticClass:"h5"},[null!=a.url?s("a",{staticClass:"experience",attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.title))]):s("a",[t._v(t._s(a.title))]),null!=a.location?s("span",{staticClass:"text-muted h6"},[t._v(" from "+t._s(a.location))]):s("div")])]),s("div",{staticClass:"timeline-body px-4 pb-4"},[s("div",{staticClass:"text-muted text-small mb-3"},[t._v(t._s(a.time))]),s("div",[t._v(t._s(a.description))])])])})),0)])]),s("div",{staticClass:"shadow-1-strong bg-white my-5 p-5",attrs:{id:"contact"}},[s("div",{staticClass:"contant-section"},[s("h2",{staticClass:"h2 fw-light text mb-4"},[t._v(t._s(t.menu.contact))]),s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col-md-5",attrs:{"data-aos":"fade-left","data-aos-delay":"200"}},[s("div",{staticClass:"mt-1"},[s("div",{staticClass:"h6"},[s("i",{staticClass:"fas fa-phone pe-2 text-muted",staticStyle:{width:"24px",opacity:"0.85"}}),t._v(" "+t._s(t.phone)+" ")]),s("div",{staticClass:"h6"},[s("i",{staticClass:"far fa-envelope pe-2 text-muted",staticStyle:{width:"24px",opacity:"0.85"}}),t._v(" "+t._s(t.email)+" ")])]),s("div",{staticClass:"mt-5 d-print-none"},[s("FormContact",{attrs:{"form-url":t.formUrl}})],1)]),t._m(2)])])])])])]),s("footer",{staticClass:"pt-4 pb-4 text-muted text-center d-print-none"},[s("div",{staticClass:"container"},[s("div",{staticClass:"my-3"},[s("div",{staticClass:"h4"},[t._v(t._s(t.name))]),s("div",{staticClass:"footer-nav"},[s("nav",{attrs:{role:"navigation"}},[s("ul",{staticClass:"nav justify-content-center"},t._l(t.socmeds,(function(a){return s("li",{key:a.title,staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:a.url,target:"_blank",title:a.title}},[s("i",{class:"fab "+a.icon}),s("span",{staticClass:"menu-title sr-only"},[t._v(t._s(a.title))])])])})),0)])])]),t._m(3)])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"avatar p-1"},[s("img",{staticClass:"img-thumbnail shadow-2-strong",attrs:{src:e("0b09"),width:"160",height:"160",alt:"avatar"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-print-none"},[e("a",{staticClass:"btn btn-outline-light btn-lg shadow-sm mt-1 me-3",attrs:{href:"RizqiAudiantoFari_en.pdf",target:"_blank","data-aos":"fade-right","data-aos-delay":"700"}},[t._v("Download CV")]),e("a",{staticClass:"btn btn-info btn-lg shadow-sm mt-1",attrs:{href:"#contact","data-aos":"fade-left","data-aos-delay":"700"}},[t._v("Hire Me")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-7 d-print-none",attrs:{"data-aos":"zoom-in","data-aos-delay":"100"}},[e("iframe",{staticStyle:{border:"0",width:"100%"},attrs:{src:"https://maps.google.com/maps?q=Malang&t=&z=13&ie=UTF8&iwloc=&output=embed",width:"500",height:"400",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-small"},[e("div",{staticClass:"mb-1"},[t._v("© Material Resume. All rights reserved.")])])}],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{attrs:{action:t.formUrl,method:"POST"}},[e("div",{staticClass:"form-outline mb-4"},[e("mdb-input",{attrs:{type:"text",label:"Name",name:"name",id:"name",outline:""}})],1),e("div",{staticClass:"form-outline mb-4"},[e("mdb-input",{attrs:{type:"email",label:"Email",name:"email",id:"email",outline:""}})],1),e("div",{staticClass:"form-outline mb-4"},[e("mdb-input",{attrs:{type:"textarea",label:"Message",name:"message",id:"message",outline:"",rows:4}})],1),e("button",{staticClass:"btn btn-info btn-block mb-4",attrs:{type:"submit"}},[t._v("Send")])])},o=[],r=e("91c9"),c={name:"Form",components:{mdbInput:r["mdbInput"]},props:{formUrl:String}},d=c,u=e("2877"),m=Object(u["a"])(d,l,o,!1,null,"da648bfa",null),p=m.exports,v={name:"App",components:{FormContact:p},data:function(){var t="iianfarii@gmail.com",a="+62 895-3379-67091";return{name:"Rizqi Audianto Fari",job:"Software Engineer Student",about:"Hello! I'm Rizqi Audianto Fari. I am passionate about Android Development and Java Spring Boot. I like to learn new things.",email:t,phone:a,bios:[{title:"Born",value:"16 October 2004",icon:"far fa-calendar-alt"},{title:"Email",value:t,icon:"far fa-envelope"},{title:"Phone",value:a,icon:"fas fa-phone"},{title:"Address",value:"Malang, Jawa Timur, Indonesia",icon:"fas fa-map-marker-alt"}],items:[{title:"About"},{title:"Skills"},{title:"Experience"},{title:"Education"},{title:"Contact"}],socmeds:[{title:"Twitter",url:"https://twitter.com/themanusia__",icon:"fa-twitter"},{title:"Facebook",url:"https://www.facebook.com/Ian.TheManusia",icon:"fa-facebook"},{title:"Instagram",url:"https://www.instagram.com/ian_269",icon:"fa-instagram"},{title:"Github",url:"https://github.com/TheManusia",icon:"fa-github"}],skills:[{datas:[{name:"Java",percent:"85",desc:"Advance"},{name:"Kotlin",percent:"75",desc:"Advance"},{name:"Dart",percent:"80",desc:"Advance"},{name:"PHP",percent:"85",desc:"Advance"}],color:"info"},{datas:[{name:"Flutter",percent:"75",desc:"Advance"},{name:"Android",percent:"85",desc:"Advance"},{name:"Lumen",percent:"85",desc:"Advance"},{name:"Spring Boot",percent:"80",desc:"Beginner"}],color:"secondary"}],experiences:[{title:"Absensi Menggunakan GPS",url:"https://github.com/TheManusia/Tugas-Akhir",description:"An application to record student attendance by using gps on their android device. This\n                    application use CodeIgniter as its admin panel and uses Java Spring Boot for rest api."},{title:"Discord Bot",url:"https://github.com/TheManusia/brot",description:"Bots that are used only for personal needs but have features that may be useful for others as\n                    well. This bot has a feature to search anime using scene."}],educations:[{title:"Software Engineer",location:"SMK PGRI 3 Malang",time:"2019 - Present",description:"Resolving technical issues faced by other team members. Creating training manuals for users. Writing up reports, manuals and other documentation on the status, operation and maintenance of software. Supporting and maintaining the software within an IT system once it is up and running."},{title:"Belajar Fundamental Aplikasi Android",url:"https://www.dicoding.com/certificates/QEYX4LG76XDL",location:"DicodingAcademy",time:"2020",description:"The class is intended for developers who want to learn the fundamentals of creating Android applications, such as networking and databases, by referring to the international competency standards belonging to Google Developers Authorized Training Partners."},{title:"SMPN 01 Malang",time:"2016 - 2019",description:"Junior High School"},{title:"SDN Sumbersari 03 Malang",time:"2010 - 2016",description:"Elementary School"}],formUrl:"https://formspree.io/f/mnqldlvp",menu:{about:"About",skill:"Professional Skills",experience:"Experience",education:"Education",contact:"Contact",hire:"Hire Me",download:"Download",aboutme:"About Me"}}}},f=v,h=(e("034f"),Object(u["a"])(f,i,n,!1,null,null,null)),b=h.exports,g=e("f5af"),C=e.n(g);e("e829");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(b)},mounted:function(){C.a.init({anchorPlacement:"top-left",duration:1e3})}}).$mount("#app")},"85ec":function(t,a,e){},fd1b:function(t,a,e){t.exports=e.p+"img/header-background.418da205.webp"}});
//# sourceMappingURL=app.3e572cc6.js.map