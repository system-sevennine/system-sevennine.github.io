(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1568:function(e,n,a){"use strict";a.r(n);var t=a(61),r=a(62),l=a(64),c=a(63),i=a(65),o=a(1),u=a.n(o),m=a(60),s=a(221),p=a(1094),d=a(66),h=a(917),f=u.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(8),a.e(16)]).then(a.bind(null,1567))}),b=u.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(12)]).then(a.bind(null,1566))}),E=u.a.lazy(function(){return Promise.all([a.e(11),a.e(15)]).then(a.bind(null,1569))}),v=(u.a.lazy(function(){return Promise.all([a.e(0),a.e(2),a.e(7),a.e(13)]).then(a.bind(null,1565))}),[{path:"/",exact:!0,component:f,name:"Home"},{path:"/AirCheck",exact:!0,name:"AirCheck",component:f},{path:"/Temperature",exact:!0,name:"Temperature",component:b},{path:"/GPS",exact:!0,name:"GPS",component:E},{path:"/Dashboard",exact:!0,name:"Temperature",component:b}]),g=u.a.lazy(function(){return a.e(17).then(a.bind(null,1564))}),y=u.a.lazy(function(){return Promise.all([a.e(2),a.e(9),a.e(14)]).then(a.bind(null,1558))}),_=function(e){function n(){var e,a;Object(t.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(i)))).loading=function(){return u.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a}return Object(i.a)(n,e),Object(r.a)(n,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login")}},{key:"render",value:function(){var e=this,n={items:[{name:"LORA PROJECT",url:"/Temperature",icon:"icon-speedometer",badge:{variant:"info",text:"1.0"}},{title:!0,name:"Projects",wrapper:{element:"",attributes:{}},class:""},this.props.__nav._nav_Temperature,this.props.__nav._nav_AirCheck,this.props.__nav._nav_GPS]};this.props.uid;return u.a.createElement("div",{className:"app"},u.a.createElement(h.b,{fixed:!0},u.a.createElement(o.Suspense,{fallback:this.loading()},u.a.createElement(y,{onLogout:function(n){return e.signOut(n)}}))),u.a.createElement("div",{className:"app-body"},u.a.createElement(h.d,{fixed:!0,display:"false"},u.a.createElement(h.g,null),u.a.createElement(h.f,null),u.a.createElement(o.Suspense,null,u.a.createElement(h.i,Object.assign({navConfig:n},this.props,{router:s}))),u.a.createElement(h.e,null),u.a.createElement(h.h,null)),u.a.createElement("main",{className:"main"},u.a.createElement(p.a,{fluid:!0,style:{padding:0}},u.a.createElement(o.Suspense,{fallback:this.loading()},u.a.createElement(m.g,null,v.map(function(e,n){return e.component?u.a.createElement(m.d,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return u.a.createElement(e.component,n)}}):null}),u.a.createElement(m.c,{from:"/",to:"/dashboard"}))))),u.a.createElement(h.a,{fixed:!0},u.a.createElement(o.Suspense,{fallback:this.loading()},u.a.createElement(g,null)))))}}]),n}(o.Component);n.default=Object(d.b)(function(e,n){return{uid:e.firebase.auth.uid,__nav:e.navPageFull}})(_)}}]);
//# sourceMappingURL=20.734f1d23.chunk.js.map