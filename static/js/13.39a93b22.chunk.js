(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1174:function(e,t,a){e.exports=a.p+"static/media/emergency.a945188c.gif"},1175:function(e,t,a){e.exports=a.p+"static/media/SystemOK.c30791b0.png"},1505:function(e,t,a){"use strict";a.r(t);var n=a(220),r=a(60),l=a(61),i=a(64),s=a(62),o=a(63),c=a(1),h=a.n(c),m=a(65),d=a(233),g=a(1482),E=a(762),u=a.n(E),y=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={padding:"1px",color:"navy",width:parseInt(this.props.width),fontSize:parseInt(this.props.fontSize),zIndex:100};return h.a.createElement(u.a,{onClick:this.handleWordDisplayClick,variant:"outlined",style:e},this.props.text)}}]),t}(c.Component),f=a(1174),p=a.n(f),b=a(1175),C=a.n(b),B=a(1176),k=a.n(B),v=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return h.a.createElement(k.a,{height:30,width:60,onChange:this.props.ToggleEnable,checked:this.props.stateToggle,uncheckedIcon:h.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:15,color:"orange",paddingRight:2}},"Off"),checkedIcon:h.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:15,color:"orange",paddingRight:2}},"On"),className:"react-switch",id:"icon-switch"})}}]),t}(c.Component),w=(c.PureComponent,function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,n=e.payload;return h.a.createElement("g",{transform:"translate(".concat(t,",").concat(a,")")},h.a.createElement("text",{x:0,y:0,dy:16,fontSize:14,textAnchor:"end",fill:"#666",transform:"rotate(-30)"},n.value))}}]),t}(c.PureComponent)),T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).isChange=function(e){var t=e.target.name,r=e.target.value;a.setState(Object(n.a)({},t,r))},a.ToggleEnableToServer=function(e){},a.state={data:[]},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;d.a(function(t){console.log(typeof t),console.log(JSON.stringify(t));var a=[];if(console.log(t.Label),void 0!==t.Label)for(var n=0;n<t.Label.length;n++)a.push({name:t.Label[n],CB1:t.CB1[n],CB2:t.CB2[n],CB3:t.CB3[n],CB4:t.CB4[n],CB5:t.CB5[n],CB6:t.CB6[n]});e.setState({data:a})})}},{key:"render",value:function(){var e=this;return h.a.createElement("div",{style:{overflow:"auto",alignItems:"center",maxWidth:"2000px",margin:"auto"}},h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(g.d,{width:1700,height:400,data:this.state.data,margin:{top:20,right:50,left:20,bottom:50}},h.a.createElement(g.a,{strokeDasharray:"3 3"}),h.a.createElement(g.g,{dataKey:"name",tick:h.a.createElement(w,null)}),h.a.createElement(g.h,null),h.a.createElement(g.f,null),h.a.createElement(g.b,{verticalAlign:"top",height:36}),h.a.createElement(g.c,{type:"monotone",dataKey:"CB1",stroke:"red"}),h.a.createElement(g.c,{type:"monotone",dataKey:"CB2",stroke:"blue"}),h.a.createElement(g.c,{type:"monotone",dataKey:"CB3",stroke:"green"}),h.a.createElement(g.c,{type:"monotone",dataKey:"CB4",stroke:"teal"}),h.a.createElement(g.c,{type:"monotone",dataKey:"CB5",stroke:"black"}),h.a.createElement(g.c,{type:"monotone",dataKey:"CB6",stroke:"orange"}))),h.a.createElement("div",null,h.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 nhi\u1ec7t \u0111\u1ed9 1:","true"===this.state.ErrorCB1?h.a.createElement("img",{src:p.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:C.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB1?this.state.TimerCheckOverTemperature1:""," ",h.a.createElement(y,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].CB1:"----"})),!0===this.state.EnablePass?h.a.createElement(v,{stateToggle:"true"===this.state.EnableCB1,ToggleEnable:function(){return e.ToggleEnableToServer(1)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(g.d,{width:1700,height:200,data:this.state.data,syncId:"anyId",margin:{top:20,right:50,left:20,bottom:50}},h.a.createElement(g.a,{strokeDasharray:"3 3"}),h.a.createElement(g.e,{y:2.55,label:"Low",stroke:"red"}),h.a.createElement(g.g,{dataKey:"name",tick:h.a.createElement(w,null)}),h.a.createElement(g.h,null),h.a.createElement(g.f,null),h.a.createElement(g.c,{type:"monotone",dataKey:"CB1",stroke:"red"})))),h.a.createElement("br",null),h.a.createElement("div",null,h.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 nhi\u1ec7t \u0111\u1ed9 2:","true"===this.state.ErrorCB2?h.a.createElement("img",{src:p.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:C.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB2?this.state.TimerCheckOverTemperature2:""," ",h.a.createElement(y,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].CB2:"----"})),!0===this.state.EnablePass?h.a.createElement(v,{stateToggle:"true"===this.state.EnableCB2,ToggleEnable:function(){return e.ToggleEnableToServer(2)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(g.d,{width:1700,height:200,data:this.state.data,syncId:"anyId",margin:{top:20,right:50,left:20,bottom:50}},h.a.createElement(g.a,{strokeDasharray:"3 3"}),h.a.createElement(g.e,{y:-20,label:"Max",stroke:"red"}),h.a.createElement(g.g,{dataKey:"name",tick:h.a.createElement(w,null)}),h.a.createElement(g.h,null),h.a.createElement(g.f,null),h.a.createElement(g.c,{type:"monotone",dataKey:"CB2",stroke:"blue"})))),h.a.createElement("div",null,h.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 nhi\u1ec7t \u0111\u1ed9 3:","true"===this.state.ErrorCB3?h.a.createElement("img",{src:p.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:C.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB3?this.state.TimerCheckOverTemperature3:""," ",h.a.createElement(y,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].CB3:"----"})),!0===this.state.EnablePass?h.a.createElement(v,{stateToggle:"true"===this.state.EnableCB3,ToggleEnable:function(){return e.ToggleEnableToServer(3)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(g.d,{width:1700,height:200,data:this.state.data,syncId:"anyId",margin:{top:20,right:50,left:20,bottom:50}},h.a.createElement(g.a,{strokeDasharray:"3 3"}),h.a.createElement(g.e,{y:-20,label:"Max",stroke:"red"}),h.a.createElement(g.g,{dataKey:"name",tick:h.a.createElement(w,null)}),h.a.createElement(g.h,null),h.a.createElement(g.f,null),h.a.createElement(g.c,{type:"monotone",dataKey:"CB3",stroke:"green"})))),h.a.createElement("div",null,h.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 nhi\u1ec7t \u0111\u1ed9 4:","true"===this.state.ErrorCB4?h.a.createElement("img",{src:p.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:C.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB4?this.state.TimerCheckOverTemperature4:""," ",h.a.createElement(y,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].CB4:"----"})),!0===this.state.EnablePass?h.a.createElement(v,{stateToggle:"true"===this.state.EnableCB4,ToggleEnable:function(){return e.ToggleEnableToServer(4)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(g.d,{width:1700,height:200,data:this.state.data,syncId:"anyId",margin:{top:20,right:50,left:20,bottom:50}},h.a.createElement(g.a,{strokeDasharray:"3 3"}),h.a.createElement(g.e,{y:-20,label:"Max",stroke:"red"}),h.a.createElement(g.g,{dataKey:"name",tick:h.a.createElement(w,null)}),h.a.createElement(g.h,null),h.a.createElement(g.f,null),h.a.createElement(g.c,{type:"monotone",dataKey:"CB4",stroke:"teal"})))),h.a.createElement("div",null,h.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 nhi\u1ec7t \u0111\u1ed9 5:","true"===this.state.ErrorCB5?h.a.createElement("img",{src:p.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:C.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB5?this.state.TimerCheckOverTemperature5:""," ",h.a.createElement(y,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].CB5:"----"})),!0===this.state.EnablePass?h.a.createElement(v,{stateToggle:"true"===this.state.EnableCB5,ToggleEnable:function(){return e.ToggleEnableToServer(5)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(g.d,{width:1700,height:200,data:this.state.data,syncId:"anyId",margin:{top:20,right:50,left:20,bottom:50}},h.a.createElement(g.a,{strokeDasharray:"3 3"}),h.a.createElement(g.e,{y:-20,label:"Max",stroke:"red"}),h.a.createElement(g.g,{dataKey:"name",tick:h.a.createElement(w,null)}),h.a.createElement(g.h,null),h.a.createElement(g.f,null),h.a.createElement(g.c,{type:"monotone",dataKey:"CB5",stroke:"black"})))),h.a.createElement("div",null,h.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 nhi\u1ec7t \u0111\u1ed9 6:","true"===this.state.ErrorCB6?h.a.createElement("img",{src:p.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:C.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB6?this.state.TimerCheckOverTemperature6:""," ",h.a.createElement(y,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].CB6:"----"})),!0===this.state.EnablePass?h.a.createElement(v,{stateToggle:"true"===this.state.EnableCB6,ToggleEnable:function(){return e.ToggleEnableToServer(6)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(g.d,{width:1700,height:200,data:this.state.data,syncId:"anyId",margin:{top:20,right:50,left:20,bottom:50}},h.a.createElement(g.a,{strokeDasharray:"3 3"}),h.a.createElement(g.e,{y:-20,label:"Max",stroke:"red"}),h.a.createElement(g.g,{dataKey:"name",tick:h.a.createElement(w,null)}),h.a.createElement(g.h,null),h.a.createElement(g.f,null),h.a.createElement(g.c,{type:"monotone",dataKey:"CB6",stroke:"orange"})))))}}]),t}(c.Component);t.default=Object(m.b)(function(e,t){return{}},function(e,t){return{}})(T)}}]);
//# sourceMappingURL=13.39a93b22.chunk.js.map