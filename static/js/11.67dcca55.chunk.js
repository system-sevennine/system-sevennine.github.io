(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1172:function(e,t,a){e.exports=a.p+"static/media/emergency.a945188c.gif"},1173:function(e,t,a){e.exports=a.p+"static/media/SystemOK.c30791b0.png"},1523:function(e,t,a){"use strict";a.r(t);var n=a(221),r=a(61),l=a(62),i=a(65),c=a(63),o=a(64),s=a(1),h=a.n(s),m=a(66),u=a(214),d=a(1497),g=a(762),E=a.n(g),p=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={padding:"1px",color:"navy",width:parseInt(this.props.width),fontSize:parseInt(this.props.fontSize),zIndex:100};return h.a.createElement(E.a,{onClick:this.handleWordDisplayClick,variant:"outlined",style:e},this.props.text)}}]),t}(s.Component),y=a(1172),f=a.n(y),b=a(1173),v=a.n(b),k=a(1174),C=a.n(k),O=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return h.a.createElement(C.a,{height:30,width:60,onChange:this.props.ToggleEnable,checked:this.props.stateToggle,uncheckedIcon:h.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:15,color:"orange",paddingRight:2}},"Off"),checkedIcon:h.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:15,color:"orange",paddingRight:2}},"On"),className:"react-switch",id:"icon-switch"})}}]),t}(s.Component),w=a(852),j=(s.PureComponent,function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cx,a=e.cy;return h.a.createElement("circle",{cx:t,cy:a,r:1,stroke:this.props.color,fill:"white",strokeWidth:.8})}}]),t}(h.a.Component)),x=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,n=e.payload;return h.a.createElement("g",{transform:"translate(".concat(t,",").concat(a,")")},h.a.createElement("text",{x:0,y:0,dy:16,fontSize:12,textAnchor:"end",fill:"#666",transform:"rotate(-45)"},n.value))}}]),t}(s.PureComponent),T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).isChange=function(e){var t=e.target.name,r=e.target.value;a.setState(Object(n.a)({},t,r))},a.ToggleEnableToServer=function(e){},a.state={data:[]},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.actionChangeNamePage("GI\xc1M S\xc1T NHI\u1ec6T \u0110\u1ed8 - \u0110\u1ed8 \u1ea8M")}},{key:"componentDidMount",value:function(){var e=this;u.a(function(t){var a=[];if(void 0!==t.Label)for(var n=0;n<t.Label.length;n++)a.push({name:t.Label[n],"M\u1ee9c_Pin":t.CB1[n],"Nhi\u1ec7t_\u0110\u1ed9":t.CB2[n],"\u0110\u1ed9_\u1ea8m":t.CB3[n],CB4:t.CB4[n],CB5:t.CB5[n],CB6:t.CB6[n]});e.setState({data:a})})}},{key:"render",value:function(){var e=this;return h.a.createElement("div",{style:{overflow:"auto",alignItems:"center",maxWidth:"1700px",margin:"auto"}},h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(d.d,{width:1500,height:600,data:this.state.data,margin:{top:20,right:20,left:0,bottom:50}},h.a.createElement(d.a,{strokeDasharray:"1 1"}),h.a.createElement(d.g,{dataKey:"name",tick:h.a.createElement(x,null)}),h.a.createElement(d.h,null),h.a.createElement(d.f,null),h.a.createElement(d.b,{verticalAlign:"top",height:36}),h.a.createElement(d.c,{type:"monotone",dataKey:"M\u1ee9c_Pin",stroke:"red",dot:h.a.createElement(j,{color:"red"})}),h.a.createElement(d.c,{type:"monotone",dataKey:"Nhi\u1ec7t_\u0110\u1ed9",stroke:"blue",dot:h.a.createElement(j,{color:"blue"})}),h.a.createElement(d.c,{type:"monotone",dataKey:"\u0110\u1ed9_\u1ea8m",stroke:"green",dot:h.a.createElement(j,{color:"green"})}))),h.a.createElement("div",null,h.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 m\u1ee9c pin hi\u1ec7n t\u1ea1i:","true"===this.state.ErrorCB1?h.a.createElement("img",{src:f.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:v.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB1?this.state.TimerCheckOverTemperature1:""," ",h.a.createElement(p,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].M\u1ee9c_Pin:"----"})),!0===this.state.EnablePass?h.a.createElement(O,{stateToggle:"true"===this.state.EnableCB1,ToggleEnable:function(){return e.ToggleEnableToServer(1)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(d.d,{width:1500,height:400,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},h.a.createElement(d.a,{strokeDasharray:"3 3"}),h.a.createElement(d.e,{y:2.55,label:"Low",stroke:"red"}),h.a.createElement(d.g,{dataKey:"name",tick:h.a.createElement(x,null)}),h.a.createElement(d.h,null),h.a.createElement(d.f,null),h.a.createElement(d.c,{type:"monotone",dataKey:"M\u1ee9c_Pin",stroke:"red",dot:h.a.createElement(j,null)})))),h.a.createElement("br",null),h.a.createElement("div",null,h.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 nhi\u1ec7t \u0111\u1ed9:","true"===this.state.ErrorCB2?h.a.createElement("img",{src:f.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:v.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB2?this.state.TimerCheckOverTemperature2:""," ",h.a.createElement(p,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].Nhi\u1ec7t_\u0110\u1ed9:"----"})),!0===this.state.EnablePass?h.a.createElement(O,{stateToggle:"true"===this.state.EnableCB2,ToggleEnable:function(){return e.ToggleEnableToServer(2)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(d.d,{width:1500,height:400,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},h.a.createElement(d.a,{strokeDasharray:"3 3"}),h.a.createElement(d.e,{y:-20,label:"Max",stroke:"red"}),h.a.createElement(d.g,{dataKey:"name",tick:h.a.createElement(x,null)}),h.a.createElement(d.h,null),h.a.createElement(d.f,null),h.a.createElement(d.c,{type:"monotone",dataKey:"Nhi\u1ec7t_\u0110\u1ed9",stroke:"blue",dot:h.a.createElement(j,null)})))),h.a.createElement("div",null,h.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 \u0111\u1ed9 \u1ea9m:","true"===this.state.ErrorCB3?h.a.createElement("img",{src:f.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:v.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB3?this.state.TimerCheckOverTemperature3:""," ",h.a.createElement(p,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].\u0110\u1ed9_\u1ea8m:"----"})),!0===this.state.EnablePass?h.a.createElement(O,{stateToggle:"true"===this.state.EnableCB3,ToggleEnable:function(){return e.ToggleEnableToServer(3)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(d.d,{width:1500,height:400,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},h.a.createElement(d.a,{strokeDasharray:"3 3"}),h.a.createElement(d.e,{y:-20,label:"Max",stroke:"red"}),h.a.createElement(d.g,{dataKey:"name",tick:h.a.createElement(x,null)}),h.a.createElement(d.h,null),h.a.createElement(d.f,null),h.a.createElement(d.c,{type:"monotone",dataKey:"\u0110\u1ed9_\u1ea8m",stroke:"green",dot:h.a.createElement(j,null)})))),h.a.createElement("div",null),h.a.createElement("div",null),h.a.createElement("div",null))}}]),t}(s.Component);t.default=Object(m.b)(function(e,t){return{}},function(e,t){return{actionChangeNamePage:function(t){e(Object(w.a)(t))}}})(T)},852:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){return function(t){t({type:"_NAV_CHANGE_NAME_PAGE",namePage:e})}}}}]);
//# sourceMappingURL=11.67dcca55.chunk.js.map