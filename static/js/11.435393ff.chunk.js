(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1173:function(t,e,n){t.exports=n.p+"static/media/emergency.a945188c.gif"},1174:function(t,e,n){t.exports=n.p+"static/media/SystemOK.c30791b0.png"},1175:function(t,e,n){t.exports=n(1176)},1176:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var a=i.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},i.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),s=i.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},i.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function r(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function h(t,e,n,i,o){return function(t,e,n,i,o){var a=(t-n)/(e-n);if(0===a)return i;if(1===a)return o;for(var s="#",r=1;r<6;r+=2){var h=parseInt(i.substr(r,2),16),c=parseInt(o.substr(r,2),16),l=Math.round((1-a)*h+a*c).toString(16);1===l.length&&(l="0"+l),s+=l}return s}(t,e,n,r(i),r(o))}var c=function(t){function e(e){t.call(this,e);var n=e.height,i=e.width,o=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={s:o?this.i:this.o},this.n=0,this.e=0,this.h=this.h.bind(this),this.r=this.r.bind(this),this.a=this.a.bind(this),this.c=this.c.bind(this),this.l=this.l.bind(this),this.u=this.u.bind(this),this.f=this.f.bind(this),this.p=this.p.bind(this),this.b=this.b.bind(this),this.g=this.g.bind(this),this.v=this.v.bind(this),this.w=this.w.bind(this)}return t&&(e.__proto__=t),((e.prototype=Object.create(t&&t.prototype)).constructor=e).prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({s:this.props.checked?this.i:this.o})},e.prototype.k=function(t){this.y.focus(),this.setState({C:t,M:!0,m:Date.now()})},e.prototype.x=function(t){var e=this.state,n=e.C,i=e.s,o=(this.props.checked?this.i:this.o)+t-n;e.R||t===n||this.setState({R:!0});var a=Math.min(this.i,Math.max(this.o,o));a!==i&&this.setState({s:a})},e.prototype.S=function(t){var e=this.state,n=e.s,i=e.R,o=e.m,a=this.props.checked,s=(this.i+this.o)/2,r=Date.now()-o;!i||r<250?this.T(t):a?s<n?this.setState({s:this.i}):this.T(t):n<s?this.setState({s:this.o}):this.T(t),this.setState({R:!1,M:!1}),this.n=Date.now()},e.prototype.h=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.k(t.clientX),window.addEventListener("mousemove",this.r),window.addEventListener("mouseup",this.a))},e.prototype.r=function(t){t.preventDefault(),this.x(t.clientX)},e.prototype.a=function(t){this.S(t),window.removeEventListener("mousemove",this.r),window.removeEventListener("mouseup",this.a)},e.prototype.c=function(t){this.$=null,this.k(t.touches[0].clientX)},e.prototype.l=function(t){this.x(t.touches[0].clientX)},e.prototype.u=function(t){t.preventDefault(),this.S(t)},e.prototype.p=function(t){50<Date.now()-this.n&&(this.T(t),50<Date.now()-this.e&&this.setState({M:!1}))},e.prototype.b=function(){this.e=Date.now()},e.prototype.g=function(){this.setState({M:!0})},e.prototype.v=function(){this.setState({M:!1})},e.prototype.w=function(t){this.y=t},e.prototype.f=function(t){t.preventDefault(),this.y.focus(),this.T(t),this.setState({M:!1})},e.prototype.T=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.disabled,n=t.className,a=t.offColor,s=t.onColor,r=t.offHandleColor,c=t.onHandleColor,l=t.checkedIcon,u=t.uncheckedIcon,p=t.boxShadow,d=t.activeBoxShadow,f=t.height,b=t.width,m=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&-1===e.indexOf(i)&&(n[i]=t[i]);return n}(t,["disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","boxShadow","activeBoxShadow","height","width","handleDiameter"]),v=this.state,y=v.s,g=v.R,w=v.M,k={position:"relative",display:"inline-block",textAlign:"left",opacity:e?.5:1,direction:"ltr",borderRadius:f/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},E={height:f,width:b,margin:Math.max(0,(this.t-f)/2),position:"relative",background:h(y,this.i,this.o,a,s),borderRadius:f/2,cursor:e?"default":"pointer",WebkitTransition:g?null:"background 0.25s",MozTransition:g?null:"background 0.25s",transition:g?null:"background 0.25s"},x={height:f,width:Math.min(1.5*f,b-(this.t+f)/2+1),position:"relative",opacity:(y-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:g?null:"opacity 0.25s",MozTransition:g?null:"opacity 0.25s",transition:g?null:"opacity 0.25s"},C={height:f,width:Math.min(1.5*f,b-(this.t+f)/2+1),position:"absolute",opacity:1-(y-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:g?null:"opacity 0.25s",MozTransition:g?null:"opacity 0.25s",transition:g?null:"opacity 0.25s"},S={height:this.t,width:this.t,background:h(y,this.i,this.o,r,c),display:"inline-block",cursor:e?"default":"pointer",borderRadius:"50%",position:"absolute",transform:"translateX("+y+"px)",top:Math.max(0,(f-this.t)/2),outline:0,boxShadow:w?d:p,border:0,WebkitTransition:g?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:g?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:g?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"};return i.createElement("div",{className:n,style:k},i.createElement("div",{className:"react-switch-bg",style:E,onClick:e?null:this.f,onMouseDown:function(t){return t.preventDefault()}},l&&i.createElement("div",{style:x},l),u&&i.createElement("div",{style:C},u)),i.createElement("div",{className:"react-switch-handle",style:S,onClick:function(t){return t.preventDefault()},onMouseDown:e?null:this.h,onTouchStart:e?null:this.c,onTouchMove:e?null:this.l,onTouchEnd:e?null:this.u,onTouchCancel:e?null:this.v}),i.createElement("input",o({},{type:"checkbox",role:"switch",disabled:e,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},m,{ref:this.w,onFocus:this.g,onBlur:this.v,onKeyUp:this.b,onChange:this.p})))},e}(i.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:a,checkedIcon:s,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=c},1523:function(t,e,n){"use strict";n.r(e);var i=n(221),o=n(61),a=n(62),s=n(64),r=n(63),h=n(65),c=n(1),l=n.n(c),u=n(66),p=n(164),d=n(1033),f=n(762),b=n.n(f),m=(c.Component,n(1173),n(1174),n(1175)),v=n.n(m),y=(c.Component,n(776)),g=(c.PureComponent,function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=this.props,e=t.cx,n=t.cy;return l.a.createElement("circle",{cx:e,cy:n,r:1,stroke:this.props.color,fill:"white",strokeWidth:.8})}}]),e}(l.a.Component)),w=function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=this.props,e=t.x,n=t.y,i=t.payload;return l.a.createElement("g",{transform:"translate(".concat(e,",").concat(n,")")},l.a.createElement("text",{x:0,y:0,dy:16,fontSize:12,textAnchor:"end",fill:"#666",transform:"rotate(-30)"},i.value))}}]),e}(c.PureComponent),k=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(s.a)(this,Object(r.a)(e).call(this,t))).isChange=function(t){var e=t.target.name,o=t.target.value;n.setState(Object(i.a)({},e,o))},n.ToggleEnableToServer=function(t){},n.state={data:[],keyData:[],color:["red","blue","green","yellow","black"]},n}return Object(h.a)(e,t),Object(a.a)(e,[{key:"componentWillMount",value:function(){this.props.actionChangeNamePage("GI\xc1M S\xc1T NHI\u1ec6T \u0110\u1ed8 - \u0110\u1ed8 \u1ea8M")}},{key:"componentDidMount",value:function(){var t=this;p.b(function(e){var n=[],i=[];for(var o in e){var a=new Date(e[o].TimeCreate).toLocaleTimeString("en-US");e[o].TimeCreate=a,n.push(e[o]),i=Object.keys(e[o])}t.setState({data:n,keyData:i})})}},{key:"render",value:function(){var t=this;return l.a.createElement("div",{style:{overflow:"auto",alignItems:"center",maxWidth:"1700px",margin:"auto"}},l.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},l.a.createElement(d.d,{width:1500,height:800,data:this.state.data,margin:{top:20,right:20,left:0,bottom:50}},l.a.createElement(d.a,{strokeDasharray:"1 1"}),l.a.createElement(d.f,{dataKey:"TimeCreate",tick:l.a.createElement(w,null)}),l.a.createElement(d.g,null),l.a.createElement(d.e,null),l.a.createElement(d.b,{verticalAlign:"top",height:36}),this.state.keyData.map(function(e,n){return"TimeCreate"!==e?l.a.createElement(d.c,{type:"monotone",dataKey:e,stroke:t.state.color[n],dot:l.a.createElement(g,{color:t.state.color[n]})}):""}))),l.a.createElement("div",null),l.a.createElement("br",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))}}]),e}(c.Component);e.default=Object(u.b)(function(t,e){return{}},function(t,e){return{actionChangeNamePage:function(e){t(Object(y.a)(e))}}})(k)},776:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(t){return function(e){e({type:"_NAV_CHANGE_NAME_PAGE",namePage:t})}}}}]);
//# sourceMappingURL=11.435393ff.chunk.js.map