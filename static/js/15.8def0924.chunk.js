(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1524:function(e,t,a){"use strict";a.r(t);var n=a(221),r=a(61),l=a(62),i=a(64),c=a(63),o=a(65),s=a(1),m=a.n(s),h=a(66),d=a(164),u=a(1033),E=a(762),y=a.n(E),f=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={padding:"1px",color:"navy",width:parseInt(this.props.width),fontSize:parseInt(this.props.fontSize),zIndex:100};return m.a.createElement(y.a,{onClick:this.handleWordDisplayClick,variant:"outlined",style:e},this.props.text)}}]),t}(s.Component),p=a(776),g=(s.PureComponent,function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cx,a=e.cy;return m.a.createElement("circle",{cx:t,cy:a,r:1,stroke:this.props.color,fill:"white",strokeWidth:.8})}}]),t}(m.a.Component)),k=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,n=e.payload;return m.a.createElement("g",{transform:"translate(".concat(t,",").concat(a,")")},m.a.createElement("text",{x:0,y:0,dy:16,fontSize:12,textAnchor:"end",fill:"#666",transform:"rotate(-30)"},n.value))}}]),t}(s.PureComponent),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).isChange=function(e){var t=e.target.name,r=e.target.value;a.setState(Object(n.a)({},t,r))},a.state={data:[],keyData:[],color:["red","blue","green","#52b788","black","#5f0f40","#0081a7","#197278","#f3722c"]},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.actionChangeNamePage("GI\xc1M S\xc1T CH\u1ea4T L\u01af\u1ee2NG KH\xd4NG KH\xcd")}},{key:"componentDidMount",value:function(){var e=this;d.a(function(t){var a=[],n=[];for(var r in t){var l=new Date(t[r].TimeCreate).toLocaleTimeString("en-US");t[r].TimeCreate=l,a.push(t[r]),n=Object.keys(t[r])}e.setState({data:a,keyData:n})})}},{key:"render",value:function(){var e=this;return console.log(this.state),m.a.createElement("div",{style:{overflow:"auto",alignItems:"center",maxWidth:"1700px",margin:"auto"}},m.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},m.a.createElement(u.d,{width:1500,height:800,data:this.state.data,margin:{top:20,right:20,left:0,bottom:50}},m.a.createElement(u.a,{strokeDasharray:"1 1"}),m.a.createElement(u.f,{dataKey:"TimeCreate",tick:m.a.createElement(k,null)}),m.a.createElement(u.g,null),m.a.createElement(u.e,null),m.a.createElement(u.b,{verticalAlign:"top",height:36}),this.state.keyData.map(function(t,a){return"TimeCreate"!==t?m.a.createElement(u.c,{type:"monotone",dataKey:t,stroke:e.state.color[a],dot:m.a.createElement(g,{color:e.state.color[a]})}):""}))),m.a.createElement("div",null,m.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 CO2:",m.a.createElement(f,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].Co2_ppm:"----"})),m.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},m.a.createElement(u.d,{width:1500,height:400,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},m.a.createElement(u.a,{strokeDasharray:"3 3"}),m.a.createElement(u.f,{dataKey:"TimeCreate",tick:m.a.createElement(k,null)}),m.a.createElement(u.g,null),m.a.createElement(u.e,null),m.a.createElement(u.c,{type:"monotone",dataKey:this.state.keyData[0],stroke:this.state.color[0],dot:m.a.createElement(g,{color:this.state.color[0]})})))),m.a.createElement("br",null),m.a.createElement("div",null,m.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 \u0111\u1ed9 \u1ea9m kh\xf4ng kh\xed:",m.a.createElement(f,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].Humidity_RH:"----"})),m.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},m.a.createElement(u.d,{width:1500,height:400,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},m.a.createElement(u.a,{strokeDasharray:"3 3"}),m.a.createElement(u.f,{dataKey:"TimeCreate",tick:m.a.createElement(k,null)}),m.a.createElement(u.g,null),m.a.createElement(u.e,null),m.a.createElement(u.c,{type:"monotone",dataKey:this.state.keyData[1],stroke:this.state.color[1],dot:m.a.createElement(g,{color:this.state.color[1]})})))),m.a.createElement("br",null),m.a.createElement("div",null,m.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 \u0111\u1ed9 \u1ed3n:",m.a.createElement(f,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].Noise_dBA:"----"})),m.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},m.a.createElement(u.d,{width:1500,height:400,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},m.a.createElement(u.a,{strokeDasharray:"3 3"}),m.a.createElement(u.f,{dataKey:"TimeCreate",tick:m.a.createElement(k,null)}),m.a.createElement(u.g,null),m.a.createElement(u.e,null),m.a.createElement(u.c,{type:"monotone",dataKey:this.state.keyData[2],stroke:this.state.color[2],dot:m.a.createElement(g,{color:this.state.color[2]})})))),m.a.createElement("br",null),m.a.createElement("div",null,m.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 \xe1p su\u1ea5t kh\xf4ng kh\xed:",m.a.createElement(f,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].Pressure_Pa:"----"})),m.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},m.a.createElement(u.d,{width:1500,height:400,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},m.a.createElement(u.a,{strokeDasharray:"3 3"}),m.a.createElement(u.f,{dataKey:"TimeCreate",tick:m.a.createElement(k,null)}),m.a.createElement(u.g,null),m.a.createElement(u.e,null),m.a.createElement(u.c,{type:"monotone",dataKey:this.state.keyData[3],stroke:this.state.color[3],dot:m.a.createElement(g,{color:this.state.color[3]})})))),m.a.createElement("br",null),m.a.createElement("div",null,m.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 nhi\u1ec7t \u0111\xf4:",m.a.createElement(f,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].Temperature:"----"})),m.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},m.a.createElement(u.d,{width:1500,height:400,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},m.a.createElement(u.a,{strokeDasharray:"3 3"}),m.a.createElement(u.f,{dataKey:"TimeCreate",tick:m.a.createElement(k,null)}),m.a.createElement(u.g,null),m.a.createElement(u.e,null),m.a.createElement(u.c,{type:"monotone",dataKey:this.state.keyData[4],stroke:this.state.color[4],dot:m.a.createElement(g,{color:this.state.color[4]})})))),m.a.createElement("br",null),m.a.createElement("div",null,m.a.createElement("h4",{style:{marginLeft:90}},"Bi\u1ec3u \u0111\u1ed3 VOC:",m.a.createElement(f,{width:100,fontSize:20,text:this.state.data.length>0?this.state.data[this.state.data.length-1].VOC_Ohm:"----"})),m.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},m.a.createElement(u.d,{width:1500,height:800,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},m.a.createElement(u.a,{strokeDasharray:"3 3"}),m.a.createElement(u.f,{dataKey:"TimeCreate",tick:m.a.createElement(k,null)}),m.a.createElement(u.g,null),m.a.createElement(u.e,null),m.a.createElement(u.c,{type:"monotone",dataKey:"VOC_Ohm",stroke:this.state.color[5],dot:m.a.createElement(g,{color:this.state.color[5]})})))),m.a.createElement("br",null),m.a.createElement("div",null),m.a.createElement("div",null),m.a.createElement("div",null))}}]),t}(s.Component);t.default=Object(h.b)(function(e,t){return{}},function(e,t){return{actionChangeNamePage:function(t){e(Object(p.a)(t))}}})(b)},776:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){return function(t){t({type:"_NAV_CHANGE_NAME_PAGE",namePage:e})}}}}]);
//# sourceMappingURL=15.8def0924.chunk.js.map