(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1568:function(e,a,t){"use strict";t.r(a);var s=t(227),l=t(61),m=t(62),c=t(65),r=t(63),n=t(228),i=t(64),o=t(1),d=t.n(o),u=t(1550),v=t(1548),g=t(1549),p=t(7),E=t(22),N=t(219),b=t(6),f=t.n(b),x=t(40),h=t.n(x),j=d.a.createContext({}),y=t(715),O={tag:y.d,activeTab:f.a.any,className:f.a.string,cssModule:f.a.object},k=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(E.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.tag,l=Object(y.c)(this.props,Object.keys(O)),m=Object(y.b)(h()("tab-content",a),t);return d.a.createElement(j.Provider,{value:{activeTabId:this.state.activeTab}},d.a.createElement(s,Object(p.a)({},l,{className:m})))},a}(o.Component);Object(N.polyfill)(k);var T=k;k.propTypes=O,k.defaultProps={tag:"div"};var M=t(20),w={tag:y.d,className:f.a.string,cssModule:f.a.object,tabId:f.a.any};function L(e){var a=e.className,t=e.cssModule,s=e.tabId,l=e.tag,m=Object(M.a)(e,["className","cssModule","tabId","tag"]),c=function(e){return Object(y.b)(h()("tab-pane",a,{active:s===e}),t)};return d.a.createElement(j.Consumer,null,function(e){var a=e.activeTabId;return d.a.createElement(l,Object(p.a)({},m,{className:c(a)}))})}L.propTypes=w,L.defaultProps={tag:"div"};var C={tag:y.d,flush:f.a.bool,className:f.a.string,cssModule:f.a.object},P=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=e.flush,m=Object(M.a)(e,["className","cssModule","tag","flush"]),c=Object(y.b)(h()(a,"list-group",!!l&&"list-group-flush"),t);return d.a.createElement(s,Object(p.a)({},m,{className:c}))};P.propTypes=C,P.defaultProps={tag:"ul"};var z=P,S={tag:y.d,active:f.a.bool,disabled:f.a.bool,color:f.a.string,action:f.a.bool,className:f.a.any,cssModule:f.a.object},I=function(e){e.preventDefault()},H=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=e.active,m=e.disabled,c=e.action,r=e.color,n=Object(M.a)(e,["className","cssModule","tag","active","disabled","action","color"]),i=Object(y.b)(h()(a,!!l&&"active",!!m&&"disabled",!!c&&"list-group-item-action",!!r&&"list-group-item-"+r,"list-group-item"),t);return m&&(n.onClick=I),d.a.createElement(s,Object(p.a)({},n,{className:i}))};H.propTypes=S,H.defaultProps={tag:"li"};var U=H,B=t(840),G=t.n(B),A={children:f.a.node,bar:f.a.bool,multi:f.a.bool,tag:y.d,value:f.a.oneOfType([f.a.string,f.a.number]),max:f.a.oneOfType([f.a.string,f.a.number]),animated:f.a.bool,striped:f.a.bool,color:f.a.string,className:f.a.string,barClassName:f.a.string,cssModule:f.a.object},D=function(e){var a=e.children,t=e.className,s=e.barClassName,l=e.cssModule,m=e.value,c=e.max,r=e.animated,n=e.striped,i=e.color,o=e.bar,u=e.multi,v=e.tag,g=Object(M.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),E=G()(m)/G()(c)*100,N=Object(y.b)(h()(t,"progress"),l),b=Object(y.b)(h()("progress-bar",o&&t||s,r?"progress-bar-animated":null,i?"bg-"+i:null,n||r?"progress-bar-striped":null),l),f=u?a:d.a.createElement("div",{className:b,style:{width:E+"%"},role:"progressbar","aria-valuenow":m,"aria-valuemin":"0","aria-valuemax":c,children:a});return o?f:d.a.createElement(v,Object(p.a)({},g,{className:N,children:f}))};D.propTypes=A,D.defaultProps={tag:"div",value:0,max:100};var $=D,q=t(919),F=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(r.a)(a).call(this,e))).toggle=t.toggle.bind(Object(n.a)(t)),t.state={activeTab:"1"},t}return Object(i.a)(a,e),Object(m.a)(a,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,a=this.props;a.children,Object(s.a)(a,["children"]);return d.a.createElement(d.a.Fragment,null,d.a.createElement(u.a,{tabs:!0},d.a.createElement(v.a,null,d.a.createElement(g.a,{className:h()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},d.a.createElement("i",{className:"icon-list"}))),d.a.createElement(v.a,null,d.a.createElement(g.a,{className:h()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},d.a.createElement("i",{className:"icon-speech"}))),d.a.createElement(v.a,null,d.a.createElement(g.a,{className:h()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},d.a.createElement("i",{className:"icon-settings"})))),d.a.createElement(T,{activeTab:this.state.activeTab},d.a.createElement(L,{tabId:"1"},d.a.createElement(z,{className:"list-group-accent",tag:"div"},d.a.createElement(U,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"Today"),d.a.createElement(U,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-warning list-group-item-divider"},d.a.createElement("div",{className:"avatar float-right"},d.a.createElement("img",{className:"img-avatar",src:"assets/img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"})),d.a.createElement("div",null,"Meeting with ",d.a.createElement("strong",null,"Lucas")," "),d.a.createElement("small",{className:"text-muted mr-3"},d.a.createElement("i",{className:"icon-calendar"}),"\xa0 1 - 3pm"),d.a.createElement("small",{className:"text-muted"},d.a.createElement("i",{className:"icon-location-pin"})," Palo Alto, CA")),d.a.createElement(U,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-info list-group-item-divider"},d.a.createElement("div",{className:"avatar float-right"},d.a.createElement("img",{className:"img-avatar",src:"assets/img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"})),d.a.createElement("div",null,"Skype with ",d.a.createElement("strong",null,"Megan")),d.a.createElement("small",{className:"text-muted mr-3"},d.a.createElement("i",{className:"icon-calendar"}),"\xa0 4 - 5pm"),d.a.createElement("small",{className:"text-muted"},d.a.createElement("i",{className:"icon-social-skype"})," On-line")),d.a.createElement(U,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"Tomorrow"),d.a.createElement(U,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-danger list-group-item-divider"},d.a.createElement("div",null,"New UI Project - ",d.a.createElement("strong",null,"deadline")),d.a.createElement("small",{className:"text-muted mr-3"},d.a.createElement("i",{className:"icon-calendar"}),"\xa0 10 - 11pm"),d.a.createElement("small",{className:"text-muted"},d.a.createElement("i",{className:"icon-home"}),"\xa0 creativeLabs HQ"),d.a.createElement("div",{className:"avatars-stack mt-2"},d.a.createElement("div",{className:"avatar avatar-xs"},d.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),d.a.createElement("div",{className:"avatar avatar-xs"},d.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),d.a.createElement("div",{className:"avatar avatar-xs"},d.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),d.a.createElement("div",{className:"avatar avatar-xs"},d.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),d.a.createElement("div",{className:"avatar avatar-xs"},d.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})))),d.a.createElement(U,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-success list-group-item-divider"},d.a.createElement("div",null,d.a.createElement("strong",null,"#10 Startups.Garden")," Meetup"),d.a.createElement("small",{className:"text-muted mr-3"},d.a.createElement("i",{className:"icon-calendar"}),"\xa0 1 - 3pm"),d.a.createElement("small",{className:"text-muted"},d.a.createElement("i",{className:"icon-location-pin"}),"\xa0 Palo Alto, CA")),d.a.createElement(U,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-primary list-group-item-divider"},d.a.createElement("div",null,d.a.createElement("strong",null,"Team meeting")),d.a.createElement("small",{className:"text-muted mr-3"},d.a.createElement("i",{className:"icon-calendar"}),"\xa0 4 - 6pm"),d.a.createElement("small",{className:"text-muted"},d.a.createElement("i",{className:"icon-home"}),"\xa0 creativeLabs HQ"),d.a.createElement("div",{className:"avatars-stack mt-2"},d.a.createElement("div",{className:"avatar avatar-xs"},d.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),d.a.createElement("div",{className:"avatar avatar-xs"},d.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),d.a.createElement("div",{className:"avatar avatar-xs"},d.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),d.a.createElement("div",{className:"avatar avatar-xs"},d.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),d.a.createElement("div",{className:"avatar avatar-xs"},d.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),d.a.createElement("div",{className:"avatar avatar-xs"},d.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),d.a.createElement("div",{className:"avatar avatar-xs"},d.a.createElement("img",{src:"assets/img/avatars/8.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})))))),d.a.createElement(L,{tabId:"2",className:"p-3"},d.a.createElement("div",{className:"message"},d.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},d.a.createElement("div",{className:"avatar"},d.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),d.a.createElement("span",{className:"avatar-status badge-success"}))),d.a.createElement("div",null,d.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),d.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),d.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),d.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),d.a.createElement("hr",null),d.a.createElement("div",{className:"message"},d.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},d.a.createElement("div",{className:"avatar"},d.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),d.a.createElement("span",{className:"avatar-status badge-success"}))),d.a.createElement("div",null,d.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),d.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),d.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),d.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),d.a.createElement("hr",null),d.a.createElement("div",{className:"message"},d.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},d.a.createElement("div",{className:"avatar"},d.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),d.a.createElement("span",{className:"avatar-status badge-success"}))),d.a.createElement("div",null,d.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),d.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),d.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),d.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),d.a.createElement("hr",null),d.a.createElement("div",{className:"message"},d.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},d.a.createElement("div",{className:"avatar"},d.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),d.a.createElement("span",{className:"avatar-status badge-success"}))),d.a.createElement("div",null,d.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),d.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),d.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),d.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),d.a.createElement("hr",null),d.a.createElement("div",{className:"message"},d.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},d.a.createElement("div",{className:"avatar"},d.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),d.a.createElement("span",{className:"avatar-status badge-success"}))),d.a.createElement("div",null,d.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),d.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),d.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),d.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))),d.a.createElement(L,{tabId:"3",className:"p-3"},d.a.createElement("h6",null,"Settings"),d.a.createElement("div",{className:"aside-options"},d.a.createElement("div",{className:"clearfix mt-4"},d.a.createElement("small",null,d.a.createElement("b",null,"Option 1")),d.a.createElement(q.k,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm"})),d.a.createElement("div",null,d.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),d.a.createElement("div",{className:"aside-options"},d.a.createElement("div",{className:"clearfix mt-3"},d.a.createElement("small",null,d.a.createElement("b",null,"Option 2")),d.a.createElement(q.k,{className:"float-right",variant:"pill",label:!0,color:"success",size:"sm"})),d.a.createElement("div",null,d.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),d.a.createElement("div",{className:"aside-options"},d.a.createElement("div",{className:"clearfix mt-3"},d.a.createElement("small",null,d.a.createElement("b",null,"Option 3")),d.a.createElement(q.k,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm",disabled:!0}),d.a.createElement("div",null,d.a.createElement("small",{className:"text-muted"},"Option disabled.")))),d.a.createElement("div",{className:"aside-options"},d.a.createElement("div",{className:"clearfix mt-3"},d.a.createElement("small",null,d.a.createElement("b",null,"Option 4")),d.a.createElement(q.k,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm"}))),d.a.createElement("hr",null),d.a.createElement("h6",null,"System Utilization"),d.a.createElement("div",{className:"text-uppercase mb-1 mt-4"},d.a.createElement("small",null,d.a.createElement("b",null,"CPU Usage"))),d.a.createElement($,{className:"progress-xs",color:"info",value:"25"}),d.a.createElement("small",{className:"text-muted"},"348 Processes. 1/4 Cores."),d.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},d.a.createElement("small",null,d.a.createElement("b",null,"Memory Usage"))),d.a.createElement($,{className:"progress-xs",color:"warning",value:"70"}),d.a.createElement("small",{className:"text-muted"},"11444GB/16384MB"),d.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},d.a.createElement("small",null,d.a.createElement("b",null,"SSD 1 Usage"))),d.a.createElement($,{className:"progress-xs",color:"danger",value:"95"}),d.a.createElement("small",{className:"text-muted"},"243GB/256GB"),d.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},d.a.createElement("small",null,d.a.createElement("b",null,"SSD 2 Usage"))),d.a.createElement($,{className:"progress-xs",color:"success",value:"10"}),d.a.createElement("small",{className:"text-muted"},"25GB/256GB"))))}}]),a}(o.Component);F.defaultProps={};a.default=F},840:function(e,a){var t=NaN,s="[object Symbol]",l=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,r=/^0o[0-7]+$/i,n=parseInt,i=Object.prototype.toString;function o(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}e.exports=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&i.call(e)==s}(e))return t;if(o(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=o(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var d=c.test(e);return d||r.test(e)?n(e.slice(2),d?2:8):m.test(e)?t:+e}}}]);
//# sourceMappingURL=18.51bd8dbb.chunk.js.map