(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1174:function(e,t,a){e.exports=a.p+"static/media/emergency.a945188c.gif"},1175:function(e,t,a){e.exports=a.p+"static/media/SystemOK.c30791b0.png"},1505:function(e,t,a){"use strict";a.r(t);var r=a(220),n=a(60),l=a(61),i=a(64),o=a(62),s=a(63),c=a(1),h=a.n(c),m=a(65),E=a(233),d=a(1482),g=a(762),u=a.n(g),y=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={padding:"1px",color:"navy",width:parseInt(this.props.width),fontSize:parseInt(this.props.fontSize),zIndex:100};return h.a.createElement(u.a,{onClick:this.handleWordDisplayClick,variant:"outlined",style:e},this.props.text)}}]),t}(c.Component),p=a(1174),C=a.n(p),b=a(1175),f=a.n(b),T=a(1176),B=a.n(T),k=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return h.a.createElement(B.a,{height:30,width:60,onChange:this.props.ToggleEnable,checked:this.props.stateToggle,uncheckedIcon:h.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:15,color:"orange",paddingRight:2}},"Off"),checkedIcon:h.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:15,color:"orange",paddingRight:2}},"On"),className:"react-switch",id:"icon-switch"})}}]),t}(c.Component),v=(c.PureComponent,function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,r=e.payload;return h.a.createElement("g",{transform:"translate(".concat(t,",").concat(a,")")},h.a.createElement("text",{x:0,y:0,dy:16,fontSize:14,textAnchor:"end",fill:"#666",transform:"rotate(-30)"},r.value))}}]),t}(c.PureComponent)),w=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).isChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(r.a)({},t,n))},a.ToggleEnableToServer=function(e){},a.state={data:[],resultBalance:"",ThoiGianKhoiDongHeThong:0,TimerCheckOverTemperature1:0,TimerCheckOverTemperature2:0,TimerCheckOverTemperature3:0,TimerCheckOverTemperature4:0,TimerCheckOverTemperature5:0,TimerCheckOverTemperature6:0,TimeDelayPeople1_2_1:0,TimeDelayPeople1_2_2:0,TimeDelayPeople1_2_3:0,TimeDelayPeople1_2_4:0,TimeDelayPeople1_2_5:0,TimeDelayPeople1_2_6:0,TimeDelayPeople2_3_1:0,TimeDelayPeople2_3_2:0,TimeDelayPeople2_3_3:0,TimeDelayPeople2_3_4:0,TimeDelayPeople2_3_5:0,TimeDelayPeople2_3_6:0,TimeDelayPeople3_1_1:0,TimeDelayPeople3_1_2:0,TimeDelayPeople3_1_3:0,TimeDelayPeople3_1_4:0,TimeDelayPeople3_1_5:0,TimeDelayPeople3_1_6:0,ErrorCB1:!1,ErrorCB2:!1,ErrorCB3:!1,ErrorCB4:!1,ErrorCB5:!1,ErrorCB6:!1,pass:"",EnablePass:!1,StatusPLC:"Disconnected",EnableCB1:"",EnableCB2:"",EnableCB3:"",EnableCB4:"",EnableCB5:"",EnableCB6:""},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;E.a(function(t){console.log(typeof t),console.log(JSON.stringify(t));var a=[];if(console.log(t.Label),void 0!==t.Label)for(var r=0;r<t.Label.length;r++)a.push({name:t.Label[r],CB1:t.CB1[r],CB2:t.CB2[r],CB3:t.CB3[r],CB4:t.CB4[r],CB5:t.CB5[r],CB6:t.CB6[r]});e.setState({data:a})})}},{key:"render",value:function(){var e=this;return h.a.createElement("div",{style:{margin:20,alignItems:"center"}},h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(d.d,{width:1700,height:400,data:this.state.data,margin:{top:20,right:50,left:20,bottom:50}},h.a.createElement(d.a,{strokeDasharray:"3 3"}),h.a.createElement(d.g,{dataKey:"name",tick:h.a.createElement(v,null)}),h.a.createElement(d.h,null),h.a.createElement(d.f,null),h.a.createElement(d.b,{verticalAlign:"top",height:36}),h.a.createElement(d.c,{type:"monotone",dataKey:"CB1",stroke:"red"}),h.a.createElement(d.c,{type:"monotone",dataKey:"CB2",stroke:"blue"}),h.a.createElement(d.c,{type:"monotone",dataKey:"CB3",stroke:"green"}),h.a.createElement(d.c,{type:"monotone",dataKey:"CB4",stroke:"teal"}),h.a.createElement(d.c,{type:"monotone",dataKey:"CB5",stroke:"black"}),h.a.createElement(d.c,{type:"monotone",dataKey:"CB6",stroke:"orange"}))),h.a.createElement("div",null,h.a.createElement("h4",null,"Bi\u1ec3u \u0111\u1ed3 nhi\u1ec7t \u0111\u1ed9 1:","true"===this.state.ErrorCB1?h.a.createElement("img",{src:C.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:f.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB1?this.state.TimerCheckOverTemperature1:""," ",h.a.createElement(y,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].CB1:"----"})),!0===this.state.EnablePass?h.a.createElement(k,{stateToggle:"true"===this.state.EnableCB1,ToggleEnable:function(){return e.ToggleEnableToServer(1)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(d.d,{width:1700,height:200,data:this.state.data,syncId:"anyId",margin:{top:20,right:50,left:20,bottom:50}},h.a.createElement(d.a,{strokeDasharray:"3 3"}),h.a.createElement(d.e,{y:2.55,label:"Low",stroke:"red"}),h.a.createElement(d.g,{dataKey:"name",tick:h.a.createElement(v,null)}),h.a.createElement(d.h,null),h.a.createElement(d.f,null),h.a.createElement(d.c,{type:"monotone",dataKey:"CB1",stroke:"red"})))),h.a.createElement("br",null),h.a.createElement("div",null,h.a.createElement("h4",null,"Bi\u1ec3u \u0111\u1ed3 nhi\u1ec7t \u0111\u1ed9 2:","true"===this.state.ErrorCB2?h.a.createElement("img",{src:C.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:f.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB2?this.state.TimerCheckOverTemperature2:""," ",h.a.createElement(y,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].CB2:"----"})),!0===this.state.EnablePass?h.a.createElement(k,{stateToggle:"true"===this.state.EnableCB2,ToggleEnable:function(){return e.ToggleEnableToServer(2)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(d.d,{width:1700,height:200,data:this.state.data,syncId:"anyId",margin:{top:20,right:50,left:20,bottom:50}},h.a.createElement(d.a,{strokeDasharray:"3 3"}),h.a.createElement(d.e,{y:-20,label:"Max",stroke:"red"}),h.a.createElement(d.g,{dataKey:"name",tick:h.a.createElement(v,null)}),h.a.createElement(d.h,null),h.a.createElement(d.f,null),h.a.createElement(d.c,{type:"monotone",dataKey:"CB2",stroke:"blue"})))),h.a.createElement("div",null,h.a.createElement("h4",null,"Bi\u1ec3u \u0111\u1ed3 nhi\u1ec7t \u0111\u1ed9 3:","true"===this.state.ErrorCB3?h.a.createElement("img",{src:C.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:f.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB3?this.state.TimerCheckOverTemperature3:""," ",h.a.createElement(y,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].CB3:"----"})),!0===this.state.EnablePass?h.a.createElement(k,{stateToggle:"true"===this.state.EnableCB3,ToggleEnable:function(){return e.ToggleEnableToServer(3)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(d.d,{width:1700,height:200,data:this.state.data,syncId:"anyId",margin:{top:20,right:50,left:20,bottom:50}},h.a.createElement(d.a,{strokeDasharray:"3 3"}),h.a.createElement(d.e,{y:-20,label:"Max",stroke:"red"}),h.a.createElement(d.g,{dataKey:"name",tick:h.a.createElement(v,null)}),h.a.createElement(d.h,null),h.a.createElement(d.f,null),h.a.createElement(d.c,{type:"monotone",dataKey:"CB3",stroke:"green"})))),h.a.createElement("div",null,h.a.createElement("h4",null,"Bi\u1ec3u \u0111\u1ed3 nhi\u1ec7t \u0111\u1ed9 4:","true"===this.state.ErrorCB4?h.a.createElement("img",{src:C.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:f.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB4?this.state.TimerCheckOverTemperature4:""," ",h.a.createElement(y,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].CB4:"----"})),!0===this.state.EnablePass?h.a.createElement(k,{stateToggle:"true"===this.state.EnableCB4,ToggleEnable:function(){return e.ToggleEnableToServer(4)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(d.d,{width:1700,height:200,data:this.state.data,syncId:"anyId",margin:{top:20,right:50,left:20,bottom:50}},h.a.createElement(d.a,{strokeDasharray:"3 3"}),h.a.createElement(d.e,{y:-20,label:"Max",stroke:"red"}),h.a.createElement(d.g,{dataKey:"name",tick:h.a.createElement(v,null)}),h.a.createElement(d.h,null),h.a.createElement(d.f,null),h.a.createElement(d.c,{type:"monotone",dataKey:"CB4",stroke:"teal"})))),h.a.createElement("div",null,h.a.createElement("h4",null,"Bi\u1ec3u \u0111\u1ed3 nhi\u1ec7t \u0111\u1ed9 5:","true"===this.state.ErrorCB5?h.a.createElement("img",{src:C.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:f.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB5?this.state.TimerCheckOverTemperature5:""," ",h.a.createElement(y,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].CB5:"----"})),!0===this.state.EnablePass?h.a.createElement(k,{stateToggle:"true"===this.state.EnableCB5,ToggleEnable:function(){return e.ToggleEnableToServer(5)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(d.d,{width:1700,height:200,data:this.state.data,syncId:"anyId",margin:{top:20,right:50,left:20,bottom:50}},h.a.createElement(d.a,{strokeDasharray:"3 3"}),h.a.createElement(d.e,{y:-20,label:"Max",stroke:"red"}),h.a.createElement(d.g,{dataKey:"name",tick:h.a.createElement(v,null)}),h.a.createElement(d.h,null),h.a.createElement(d.f,null),h.a.createElement(d.c,{type:"monotone",dataKey:"CB5",stroke:"black"})))),h.a.createElement("div",null,h.a.createElement("h4",null,"Bi\u1ec3u \u0111\u1ed3 nhi\u1ec7t \u0111\u1ed9 6:","true"===this.state.ErrorCB6?h.a.createElement("img",{src:C.a,style:{width:50,height:50},alt:"Logo"}):h.a.createElement("img",{src:f.a,style:{width:50,height:50},alt:"Logo"})," ","true"===this.state.ErrorCB6?this.state.TimerCheckOverTemperature6:""," ",h.a.createElement(y,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].CB6:"----"})),!0===this.state.EnablePass?h.a.createElement(k,{stateToggle:"true"===this.state.EnableCB6,ToggleEnable:function(){return e.ToggleEnableToServer(6)}}):"",h.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},h.a.createElement(d.d,{width:1700,height:200,data:this.state.data,syncId:"anyId",margin:{top:20,right:50,left:20,bottom:50}},h.a.createElement(d.a,{strokeDasharray:"3 3"}),h.a.createElement(d.e,{y:-20,label:"Max",stroke:"red"}),h.a.createElement(d.g,{dataKey:"name",tick:h.a.createElement(v,null)}),h.a.createElement(d.h,null),h.a.createElement(d.f,null),h.a.createElement(d.c,{type:"monotone",dataKey:"CB6",stroke:"orange"})))))}}]),t}(c.Component);t.default=Object(m.b)(function(e,t){return{}},function(e,t){return{}})(w)}}]);
//# sourceMappingURL=13.cc963a6c.chunk.js.map