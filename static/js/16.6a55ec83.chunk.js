(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1566:function(t,e,a){"use strict";a.r(e);var n=a(920),o=a(218),i=a(61),l=a(62),r=a(65),s=a(63),c=a(64),d=a(1),m=a.n(d),h=a(66),u=a(947),E=a.n(u),p=a(154),y=a(918),g=(a(867),a(757)),f=(d.PureComponent,function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.cx,a=t.cy;return m.a.createElement("circle",{cx:e,cy:a,r:1,stroke:this.props.color,fill:"white",strokeWidth:.8})}}]),e}(m.a.Component)),v=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.x,a=t.y,n=t.payload;return m.a.createElement("g",{transform:"translate(".concat(e,",").concat(a,")")},m.a.createElement("text",{x:0,y:0,dy:16,fontSize:12,textAnchor:"end",fill:"#666",transform:"rotate(-30)"},n.value))}}]),e}(d.PureComponent),b=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(r.a)(this,Object(s.a)(e).call(this,t))).isChange=function(t){var e=t.target.name,n=t.target.value;a.setState(Object(o.a)({},e,n))},a.state={data:[],keyData:[],color:["red","blue","green","#52b788","black","#5f0f40","#0081a7","#197278","#f3722c"],maxVOC_Ohm:0},a}return Object(c.a)(e,t),Object(l.a)(e,[{key:"componentWillMount",value:function(){this.props.actionChangeNamePage("INDOOR AIR QUALITY FOR GENTLEMAN LOCKER")}},{key:"componentDidMount",value:function(){var t=this;p.a(function(e){var a=[],o=[];for(var i in e){var l=new Date(e[i].TimeCreate).toLocaleTimeString("en-US");e[i].TimeCreate=l,e[i].voc1=93,e[i].voc2=173,e[i].voc3=115,e[i].voc4=619,a.push(e[i]),o=Object.keys(e[i])}var r=a.map(function(t){return t.VOC_Ohm});Math.max.apply(Math,Object(n.a)(r));t.setState({data:a,keyData:o})})}},{key:"render",value:function(){return m.a.createElement("div",{style:{overflow:"auto",height:"100vh",alignItems:"center",justify:"center"}},m.a.createElement("div",{style:{overflow:"auto",margin:"auto",height:"1190px",width:"1504px",backgroundRepeat:"no-repeat",display:"grid"}},m.a.createElement("div",{style:{position:"relative"}},m.a.createElement("div",{id:"titleTempFull"},m.a.createElement("div",{style:{fontSize:30}},"TEMPERATURE (oC)"),m.a.createElement("div",{style:{fontSize:90}},this.state.data.length>0?this.state.data[this.state.data.length-1].Temperature:"----")),m.a.createElement("div",{style:{position:"absolute",left:310,top:78}},m.a.createElement(E.a,Object(o.a)({maxValue:40,width:400,value:this.state.data.length>0?this.state.data[this.state.data.length-1].Temperature:0,needleColor:"red",textColor:"red",segments:20,segmentColors:["#0000FF","#001CF8","#0037F0","#0050E9","#0067E2","#007DDB","#0091D3","#00B2C6","#00B9A7","#00AC79","#00A050","#00860D","#00860D","#2C9300","#79AC00","#A7B900","#C6B200","#D39300","#DF7000","#F91900"]},"textColor","#757575"))),m.a.createElement("div",{style:{position:"absolute",left:30,top:295}},m.a.createElement(y.f,{width:700,height:300,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:30,bottom:50}},m.a.createElement(y.b,{strokeDasharray:"3 3"}),m.a.createElement(y.h,{dataKey:"TimeCreate",tick:m.a.createElement(v,null)}),m.a.createElement(y.i,null),m.a.createElement(y.g,null),m.a.createElement(y.e,{type:"monotone",dataKey:this.state.keyData[4],stroke:this.state.color[4],dot:m.a.createElement(f,{color:this.state.color[4]})}))),m.a.createElement("div",{id:"titleCo2Full"},m.a.createElement("div",{style:{fontSize:30}},"CO2 (ppm)"),m.a.createElement("div",{style:{fontSize:90}},this.state.data.length>0?this.state.data[this.state.data.length-1].Co2_ppm:"----")),m.a.createElement("div",{style:{position:"absolute",left:1080,top:78}},m.a.createElement(E.a,{width:400,needleHeightRatio:.7,value:this.state.data.length>0?this.state.data[this.state.data.length-1].Co2_ppm:0,customSegmentStops:[0,400,600,800,1e3],segmentColors:["green","#AEE228","#ECDB23","red"],customSegmentLabels:[{text:"VERY GOOD",position:"INSIDE",color:"#14213D",fontWeight:"bold"},{text:"GOOD",position:"INSIDE",color:"#14213D"},{text:"OK",position:"INSIDE",color:"#14213D"},{text:"BAD",position:"INSIDE",color:"#14213D"}],ringWidth:47,needleTransitionDuration:1e3,needleTransition:"easeElastic",needleColor:"red",textColor:"#757575"})),m.a.createElement("div",{style:{position:"absolute",left:800,top:295}},m.a.createElement(y.f,{width:700,height:300,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},m.a.createElement(y.b,{strokeDasharray:"3 3"}),m.a.createElement(y.h,{dataKey:"TimeCreate",tick:m.a.createElement(v,null)}),m.a.createElement(y.i,null),m.a.createElement(y.g,null),m.a.createElement(y.e,{type:"monotone",dataKey:this.state.keyData[0],stroke:this.state.color[0],dot:m.a.createElement(f,{color:this.state.color[0]})}))),m.a.createElement("div",{id:"titleHumidityFull"},m.a.createElement("div",{style:{fontSize:30}},"HUMIDITY (%RH)"),m.a.createElement("div",{style:{fontSize:90}},this.state.data.length>0?this.state.data[this.state.data.length-1].Humidity_RH:"----")),m.a.createElement("div",{style:{position:"absolute",left:310,top:590}},m.a.createElement(E.a,{width:400,maxValue:100,needleHeightRatio:.7,value:this.state.data.length>0?this.state.data[this.state.data.length-1].Humidity_RH:0,customSegmentStops:[0,55,65,100],segmentColors:["#ECDB23","green","#ECDB23"],customSegmentLabels:[{text:"NOT GOOD",position:"INSIDE",color:"#14213D"},{text:"GOOD",position:"INSIDE",color:"#14213D"},{text:"NOT GOOD",position:"INSIDE",color:"#14213D"}],ringWidth:47,needleTransitionDuration:100,needleTransition:"easeElastic",needleColor:"red",textColor:"#757575"})),m.a.createElement("div",{style:{position:"absolute",left:30,top:800}},m.a.createElement(y.f,{width:700,height:300,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},m.a.createElement(y.b,{strokeDasharray:"3 3"}),m.a.createElement(y.h,{dataKey:"TimeCreate",tick:m.a.createElement(v,null)}),m.a.createElement(y.i,null),m.a.createElement(y.g,null),m.a.createElement(y.e,{type:"monotone",dataKey:this.state.keyData[1],stroke:this.state.color[1],dot:m.a.createElement(f,{color:this.state.color[1]})}))),m.a.createElement("div",{id:"titleVocFull"},m.a.createElement("div",{style:{fontSize:30}},"VOCs (ppm)"),m.a.createElement("div",{style:{fontSize:90}},this.state.data.length>0?this.state.data[this.state.data.length-1].VOC_Ohm:"----")),m.a.createElement("div",{style:{position:"absolute",left:1060,top:590}},m.a.createElement(E.a,{width:400,maxValue:1e3,needleHeightRatio:.7,value:this.state.data.length>0?this.state.data[this.state.data.length-1].VOC_Ohm:0,customSegmentStops:[0,93,266,381,1e3],segmentColors:["#008000","#53b324","#ECDB23","#FF0000"],customSegmentLabels:[{text:"",position:"OUTSIDE",color:"#14213D",fontSize:"10"},{text:"",position:"OUTSIDE",color:"#14213D",fontSize:"10"},{text:"",position:"OUTSIDE",color:"#14213D",fontSize:"10"},{text:"",position:"OUTSIDE",color:"#14213D",fontSize:"10"}],ringWidth:47,needleTransitionDuration:100,needleTransition:"easeElastic",needleColor:"red",textColor:"#757575"})),m.a.createElement("div",{style:{position:"absolute",left:800,top:800}},m.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},m.a.createElement(y.c,{width:700,height:300,data:this.state.data,syncId:"anyId",margin:{top:20,right:20,left:0,bottom:50}},m.a.createElement(y.b,{strokeDasharray:"3 3"}),m.a.createElement(y.h,{dataKey:"TimeCreate",tick:m.a.createElement(v,null)}),m.a.createElement(y.i,{type:"number",domain:[0,1e3]}),m.a.createElement(y.g,null),m.a.createElement(y.e,{type:"monotone",dataKey:"VOC_Ohm",stroke:this.state.color[5],dot:m.a.createElement(f,{color:this.state.color[5]})}),m.a.createElement(y.a,{type:"monotone",dataKey:"voc1",stackId:"1",stroke:"#008000",fill:"#008000"}),m.a.createElement(y.a,{type:"monotone",dataKey:"voc2",stackId:"1",stroke:"#53b324",fill:"#53b324"}),m.a.createElement(y.a,{type:"monotone",dataKey:"voc3",stackId:"1",stroke:"#ECDB23",fill:"#ECDB23"}),m.a.createElement(y.a,{type:"monotone",dataKey:"voc4",stackId:"1",stroke:"#FF0000",fill:"#FF0000"})))),m.a.createElement("div",{style:{zIndex:-1,position:"absolute",left:35,top:66,width:700,height:511,border:"5px outset gray"}}),m.a.createElement("div",{style:{zIndex:-1,position:"absolute",left:804,top:66,width:700,height:511,border:"5px outset gray"}}),m.a.createElement("div",{style:{zIndex:-1,position:"absolute",left:35,top:590,width:700,height:511,border:"5px outset gray"}}),m.a.createElement("div",{style:{zIndex:-1,position:"absolute",left:804,top:590,width:700,height:511,border:"5px outset gray"}}),m.a.createElement("div",{id:"tieuChuanFull"},m.a.createElement("div",{style:{fontSize:40}},"EN 62311:2008  -  CE/ROHS 2017")))))}}]),e}(d.Component);e.default=Object(h.b)(function(t,e){return{}},function(t,e){return{actionChangeNamePage:function(e){t(Object(g.a)(e))}}})(b)},757:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n=function(t){return function(e){e({type:"_NAV_CHANGE_NAME_PAGE",namePage:t})}}},867:function(t,e,a){"use strict";var n=a(61),o=a(62),i=a(65),l=a(63),r=a(64),s=a(1),c=a.n(s),d=a(756),m=a.n(d);s.Component}}]);
//# sourceMappingURL=16.6a55ec83.chunk.js.map