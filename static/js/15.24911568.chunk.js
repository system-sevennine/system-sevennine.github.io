(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1564:function(e,t,a){"use strict";a.r(t);var n=a(920),o=a(218),i=a(61),l=a(62),r=a(65),s=a(63),c=a(64),d=a(1),m=a.n(d),h=a(66),u=a(947),E=a.n(u),p=a(157),y=a(918),f=(a(867),a(757)),g=(d.PureComponent,function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cx,a=e.cy;return m.a.createElement("circle",{cx:t,cy:a,r:1,stroke:this.props.color,fill:"white",strokeWidth:.8})}}]),t}(m.a.Component)),v=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,n=e.payload;return m.a.createElement("g",{transform:"translate(".concat(t,",").concat(a,")")},m.a.createElement("text",{x:0,y:0,dy:16,fontSize:12,textAnchor:"end",fill:"#666",transform:"rotate(-20)"},n.value))}}]),t}(d.PureComponent),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).isChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(o.a)({},t,n))},a.state={data:[],keyData:[],color:["red","blue","green","#52b788","black","#5f0f40","#0081a7","#197278","#f3722c"],maxVOC_Ohm:0},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.actionChangeNamePage("GI\xc1M S\xc1T CH\u1ea4T L\u01af\u1ee2NG KH\xd4NG KH\xcd KHU V\u1ef0C LOCKER")}},{key:"componentDidMount",value:function(){var e=this;p.a(function(t){var a=[],o=[];for(var i in t){var l=new Date(t[i].TimeCreate).toLocaleTimeString("en-US");t[i].TimeCreate=l,t[i].voc1=93,t[i].voc2=173,t[i].voc3=115,t[i].voc4=619,a.push(t[i]),o=Object.keys(t[i])}var r=a.map(function(e){return e.VOC_Ohm});Math.max.apply(Math,Object(n.a)(r));e.setState({data:a,keyData:o})})}},{key:"render",value:function(){return m.a.createElement("div",{style:{overflow:"auto",alignItems:"center",margin:"auto"}},m.a.createElement("div",{id:"titleTemp"},m.a.createElement("div",{style:{fontSize:20}},"NHI\u1ec6T \u0110\u1ed8"),m.a.createElement("div",{style:{fontSize:20}},"(oC)"),m.a.createElement("div",{style:{fontSize:40}},this.state.data.length>0?this.state.data[this.state.data.length-1].Temperature:"----")),m.a.createElement("div",{style:{position:"absolute",left:292,top:70}},m.a.createElement(E.a,Object(o.a)({maxValue:40,width:240,value:this.state.data.length>0?this.state.data[this.state.data.length-1].Temperature:0,needleColor:"red",textColor:"red",segments:20,labelFontSize:8,segmentColors:["#0000FF","#001CF8","#0037F0","#0050E9","#0067E2","#007DDB","#0091D3","#00B2C6","#00B9A7","#00AC79","#00A050","#00860D","#00860D","#2C9300","#79AC00","#A7B900","#C6B200","#D39300","#DF7000","#F91900"]},"textColor","#757575"))),m.a.createElement("div",{style:{position:"absolute",left:0,top:195}},m.a.createElement(y.f,{width:600,height:190,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:30,bottom:50}},m.a.createElement(y.b,{strokeDasharray:"3 3"}),m.a.createElement(y.h,{dataKey:"TimeCreate",tick:m.a.createElement(v,null)}),m.a.createElement(y.i,null),m.a.createElement(y.g,null),m.a.createElement(y.e,{type:"monotone",dataKey:this.state.keyData[4],stroke:this.state.color[4],dot:m.a.createElement(g,{color:this.state.color[4]})}))),m.a.createElement("div",{id:"titleCo2"},m.a.createElement("div",{style:{fontSize:20}},"CO2"),m.a.createElement("div",{style:{fontSize:20}},"(ppm)"),m.a.createElement("div",{style:{fontSize:40}},this.state.data.length>0?this.state.data[this.state.data.length-1].Co2_ppm:"----")),m.a.createElement("div",{style:{position:"absolute",left:939,top:55}},m.a.createElement(E.a,{width:270,needleHeightRatio:.7,value:this.state.data.length>0?this.state.data[this.state.data.length-1].Co2_ppm:0,customSegmentStops:[0,400,600,800,1e3],segmentColors:["green","#AEE228","#ECDB23","red"],customSegmentLabels:[{text:"VERY GOOD",position:"INSIDE",color:"#14213D",fontWeight:"bold"},{text:"GOOD",position:"INSIDE",color:"#14213D"},{text:"OK",position:"INSIDE",color:"#14213D"},{text:"BAD",position:"INSIDE",color:"#14213D"}],ringWidth:47,needleTransitionDuration:1e3,needleTransition:"easeElastic",needleColor:"red",textColor:"#757575"})),m.a.createElement("div",{style:{position:"absolute",left:660,top:195}},m.a.createElement(y.f,{width:600,height:190,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},m.a.createElement(y.b,{strokeDasharray:"3 3"}),m.a.createElement(y.h,{dataKey:"TimeCreate",tick:m.a.createElement(v,null)}),m.a.createElement(y.i,null),m.a.createElement(y.g,null),m.a.createElement(y.e,{type:"monotone",dataKey:this.state.keyData[0],stroke:this.state.color[0],dot:m.a.createElement(g,{color:this.state.color[0]})}))),m.a.createElement("div",{id:"titleHumidity"},m.a.createElement("div",{style:{fontSize:20}},"\u0110\u1ed8 \u1ea8M KH\xd4NG KH\xcd"),m.a.createElement("div",{style:{fontSize:20}},"(RH)"),m.a.createElement("div",{style:{fontSize:40}},this.state.data.length>0?this.state.data[this.state.data.length-1].Humidity_RH:"----")),m.a.createElement("div",{style:{position:"absolute",left:272,top:380}},m.a.createElement(E.a,{width:270,maxValue:100,needleHeightRatio:.7,value:this.state.data.length>0?this.state.data[this.state.data.length-1].Humidity_RH:0,customSegmentStops:[0,55,65,100],segmentColors:["#ECDB23","green","#ECDB23"],customSegmentLabels:[{text:"NOT GOOD",position:"INSIDE",color:"#14213D",fontSize:"10"},{text:"GOOD",position:"INSIDE",color:"#14213D",fontSize:"10"},{text:"NOT GOOD",position:"INSIDE",color:"#14213D",fontSize:"10"}],ringWidth:47,needleTransitionDuration:100,needleTransition:"easeElastic",needleColor:"red",textColor:"#757575"})),m.a.createElement("div",{style:{position:"absolute",left:22,top:525}},m.a.createElement(y.f,{width:550,height:190,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},m.a.createElement(y.b,{strokeDasharray:"3 3"}),m.a.createElement(y.h,{dataKey:"TimeCreate",tick:m.a.createElement(v,null)}),m.a.createElement(y.i,null),m.a.createElement(y.g,null),m.a.createElement(y.e,{type:"monotone",dataKey:this.state.keyData[1],stroke:this.state.color[1],dot:m.a.createElement(g,{color:this.state.color[1]})}))),m.a.createElement("div",{id:"titleVoc"},m.a.createElement("div",{style:{fontSize:20}},"VOCs"),m.a.createElement("div",{style:{fontSize:20}},"(ppm)"),m.a.createElement("div",{style:{fontSize:40}},this.state.data.length>0?this.state.data[this.state.data.length-1].VOC_Ohm:"----")),m.a.createElement("div",{style:{position:"absolute",left:939,top:380}},m.a.createElement(E.a,{width:270,maxValue:1e3,needleHeightRatio:.7,value:this.state.data.length>0?this.state.data[this.state.data.length-1].VOC_Ohm:0,customSegmentStops:[0,93,266,381,1e3],segmentColors:["#008000","#53b324","#ECDB23","#FF0000"],customSegmentLabels:[{text:"",position:"OUTSIDE",color:"#14213D",fontSize:"10"},{text:"",position:"OUTSIDE",color:"#14213D",fontSize:"10"},{text:"",position:"OUTSIDE",color:"#14213D",fontSize:"10"},{text:"",position:"OUTSIDE",color:"#14213D",fontSize:"10"}],ringWidth:47,needleTransitionDuration:100,needleTransition:"easeElastic",needleColor:"red",textColor:"#757575"})),m.a.createElement("div",{style:{position:"absolute",left:650,top:525}},m.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},m.a.createElement(y.c,{width:600,height:190,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},m.a.createElement(y.b,{strokeDasharray:"3 3"}),m.a.createElement(y.h,{dataKey:"TimeCreate",tick:m.a.createElement(v,null)}),m.a.createElement(y.i,{type:"number",domain:[0,1e3]}),m.a.createElement(y.g,null),m.a.createElement(y.e,{type:"monotone",dataKey:"VOC_Ohm",stroke:this.state.color[5],dot:m.a.createElement(g,{color:this.state.color[5]})}),m.a.createElement(y.a,{type:"monotone",dataKey:"voc1",stackId:"1",stroke:"#008000",fill:"#008000"}),m.a.createElement(y.a,{type:"monotone",dataKey:"voc2",stackId:"1",stroke:"#53b324",fill:"#53b324"}),m.a.createElement(y.a,{type:"monotone",dataKey:"voc3",stackId:"1",stroke:"#ECDB23",fill:"#ECDB23"}),m.a.createElement(y.a,{type:"monotone",dataKey:"voc4",stackId:"1",stroke:"#FF0000",fill:"#FF0000"})))),m.a.createElement("div",{style:{zIndex:-1,position:"absolute",left:15,top:66,width:600,height:300,border:"5px outset gray"}}),m.a.createElement("div",{style:{zIndex:-1,position:"absolute",left:654,top:66,width:600,height:300,border:"5px outset gray"}}),m.a.createElement("div",{style:{zIndex:-1,position:"absolute",left:15,top:390,width:600,height:300,border:"5px outset gray"}}),m.a.createElement("div",{style:{zIndex:-1,position:"absolute",left:654,top:390,width:600,height:300,border:"5px outset gray"}}),m.a.createElement("div",{id:"tieuChuan"},m.a.createElement("div",{style:{fontSize:20}},"EN 62311:2008  -  CE/ROHS 2017")))}}]),t}(d.Component);t.default=Object(h.b)(function(e,t){return{}},function(e,t){return{actionChangeNamePage:function(t){e(Object(f.a)(t))}}})(b)},757:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){return function(t){t({type:"_NAV_CHANGE_NAME_PAGE",namePage:e})}}},867:function(e,t,a){"use strict";var n=a(61),o=a(62),i=a(65),l=a(63),r=a(64),s=a(1),c=a.n(s),d=a(756),m=a.n(d);s.Component}}]);
//# sourceMappingURL=15.24911568.chunk.js.map