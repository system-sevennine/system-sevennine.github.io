(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1559:function(t,e,a){t.exports=a.p+"static/media/golf_background.739c219c.jpeg"},1592:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a(777),i=a(61),r=a(62),l=a(65),s=a(63),p=a(64),d=a(1),c=a.n(d),u=a(66),h=a(148),m=a(722),x=a(812),g=a(813),E=a(814),b=a(815),f=(a(816),a(817)),O=a(818),v=(a(1559),function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(s.a)(e).call(this,t))).state={data:[],maxTemperature:0,maxHumidity:0,maxCO2:0,maxVOC:0,maxCO:0,maxPM10:0,maxPM1:0,data_Outdoor:[],maxTemperature_Outdoor:0,maxHumidity_Outdoor:0,maxPM10_Outdoor:0},a}return Object(p.a)(e,t),Object(r.a)(e,[{key:"componentWillMount",value:function(){var t=this;h.f(function(e){console.log("11111"),console.log(e);var a=[],i=[];try{var r={};r.Temperature=parseFloat(e[5].v).toFixed(2),r.Humidity=parseFloat(e[6].v).toFixed(2),r.CO2=parseFloat(e[0].v).toFixed(2),r.CO=parseFloat(e[2].v).toFixed(2),r.VOC=parseFloat(1e6*e[1].v).toFixed(2),r.PM10=parseFloat(e[3].v).toFixed(2),r.PM1=parseFloat(e[8].v).toFixed(2),r.Level1=93,r.Level2=173,r.Level3=115,r.Level4=619,a.push(r),i=Object.keys(r)}catch(v){console.log(v)}var l=a.map(function(t){return t.Temperature}),s=Math.max.apply(Math,Object(n.a)(l)),p=a.map(function(t){return t.Humidity}),d=Math.max.apply(Math,Object(n.a)(p)),c=a.map(function(t){return t.CO2}),u=Math.max.apply(Math,Object(n.a)(c)),h=a.map(function(t){return t.CO}),m=Math.max.apply(Math,Object(n.a)(h)),x=a.map(function(t){return t.VOC}),g=Math.max.apply(Math,Object(n.a)(x)),E=a.map(function(t){return t.PM10}),b=Math.max.apply(Math,Object(n.a)(E)),f=a.map(function(t){return t.PM1}),O=Math.max.apply(Math,Object(n.a)(f));t.setState(Object(o.a)({},t.state,{data:a,keyData:i,maxTemperature:s+5,maxHumidity:d+10,maxCO2:u+100,maxCO:m+1,maxVOC:g+10,maxPM10:b+10,maxPM1:O+10}))})}},{key:"componentDidMount",value:function(){var t=this;h.i(function(e){console.log("44444"),console.log(t.state),console.log(e);var a=[];try{var i={};i.Temperature=parseFloat(e[5].v).toFixed(2),i.Humidity=parseFloat(e[6].v).toFixed(2),i.PM10=parseFloat(e[3].v).toFixed(2),i.Level1=93,i.Level2=173,i.Level3=115,i.Level4=619,a.push(i),Object.keys(i)}catch(u){console.log(u)}var r=a.map(function(t){return t.Temperature}),l=Math.max.apply(Math,Object(n.a)(r)),s=a.map(function(t){return t.Humidity}),p=Math.max.apply(Math,Object(n.a)(s)),d=a.map(function(t){return t.PM10}),c=Math.max.apply(Math,Object(n.a)(d));t.setState(Object(o.a)({},t.state,{data_Outdoor:a,maxTemperature_Outdoor:l+5,maxHumidity_Outdoor:p+10,maxPM10_Outdoor:c+10}))})}},{key:"render",value:function(){var t="rgb(66 70 73 / 73%)";return c.a.createElement("div",{style:{overflow:"auto",height:"97vh",alignItems:"center",justify:"center",backgroundColor:"black",display:"flex"}},c.a.createElement("div",{style:{overflow:"auto",margin:"auto",height:"1190px",width:"2250px",backgroundRepeat:"no-repeat",display:"grid",border:"10px inset gray"}},c.a.createElement("div",{style:{position:"relative"}},c.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},c.a.createElement("div",{className:"titleHeader",style:{textAlign:"center",width:"100%",display:"flex",padding:12}},c.a.createElement("img",{alt:"",src:a(752),style:{width:140,height:85}}),c.a.createElement("div",{style:{fontSize:65,width:"100%"}},"AIR QUALITY INDEX (AQI)")),c.a.createElement("div",{style:{backgroundColor:t,zIndex:0,position:"absolute",left:10,top:105,width:1453,height:987,border:"10px ridge #8e96ab"}},c.a.createElement("div",{className:"titleFull",style:{textAlign:"center"}},c.a.createElement("div",{style:{fontSize:110}},"MEN'S LOCKER")),c.a.createElement("div",{style:{backgroundColor:t,zIndex:0,position:"absolute",left:10,top:180,width:700,height:248,border:"8px outset rgb(108 117 119)"}},c.a.createElement(x.a,{data:this.state.data,dataKey:"Temperature",color:"red",textColor:"#757575",Chart_Width:700,maxData:this.state.maxTemperature})),c.a.createElement("div",{style:{backgroundColor:t,zIndex:0,position:"absolute",left:10,top:440,width:700,height:248,border:"8px outset rgb(108 117 119)"}},c.a.createElement(b.a,{data:this.state.data,dataKey:"Humidity",color:"green",textColor:"#757575",Chart_Width:700,maxData:this.state.maxHumidity})),c.a.createElement("div",{style:{backgroundColor:t,zIndex:0,position:"absolute",left:10,top:700,width:700,height:248,border:"8px outset rgb(108 117 119)"}},c.a.createElement(f.a,{data:this.state.data,dataKey:"PM10",color:"#f3722c",textColor:"#757575",Chart_Width:700,maxData:this.state.maxPM10})),c.a.createElement("div",{style:{backgroundColor:t,zIndex:0,position:"absolute",left:720,top:180,width:700,height:248,border:"8px outset rgb(108 117 119)"}},c.a.createElement(g.a,{data:this.state.data,dataKey:"CO2",color:"blue",textColor:"#757575",Chart_Width:700,maxData:this.state.maxCO2})),c.a.createElement("div",{style:{backgroundColor:t,zIndex:0,position:"absolute",left:720,top:440,width:700,height:248,border:"8px outset rgb(108 117 119)"}},c.a.createElement(E.a,{data:this.state.data,dataKey:"CO",color:"#0081a7",textColor:"#757575",Chart_Width:700,maxData:this.state.maxCO})),c.a.createElement("div",{style:{backgroundColor:t,zIndex:0,position:"absolute",left:720,top:700,width:700,height:248,border:"8px outset rgb(108 117 119)"}},c.a.createElement(O.a,{data:this.state.data,dataKey:"PM25",color:"#33ffff",textColor:"#757575",Chart_Width:700,maxData:this.state.maxPM1}))),c.a.createElement("div",{style:{backgroundColor:t,zIndex:0,position:"absolute",left:1480,top:105,width:740,height:987,border:"10px ridge #8e96ab"}},c.a.createElement("div",{className:"titleFull",style:{textAlign:"center"}},c.a.createElement("div",{style:{fontSize:110}},"OUTDOOR")),c.a.createElement("div",{style:{backgroundColor:t,zIndex:0,position:"absolute",left:10,top:180,width:700,height:248,border:"8px outset rgb(108 117 119)"}},c.a.createElement(x.a,{data:this.state.data_Outdoor,dataKey:"Temperature",color:"red",textColor:"#757575",Chart_Width:700,maxData:this.state.maxTemperature_Outdoor})),c.a.createElement("div",{style:{backgroundColor:t,zIndex:0,position:"absolute",left:10,top:440,width:700,height:248,border:"8px outset rgb(108 117 119)"}},c.a.createElement(b.a,{data:this.state.data_Outdoor,dataKey:"Humidity",color:"green",textColor:"#757575",Chart_Width:700,maxData:this.state.maxHumidity_Outdoor})),c.a.createElement("div",{style:{backgroundColor:t,zIndex:0,position:"absolute",left:10,top:700,width:700,height:248,border:"8px outset rgb(108 117 119)"}},c.a.createElement(f.a,{data:this.state.data_Outdoor,dataKey:"PM10",color:"#f3722c",textColor:"#757575",Chart_Width:700,maxData:this.state.maxPM10_Outdoor})))),c.a.createElement("div",{id:"tieuChuanFull"},c.a.createElement("div",{style:{fontSize:40}},"Air Quality Index - ISO 14001:2015 - ISO/IEC 17025:2017")))))}}]),e}(d.Component));e.default=Object(u.b)(function(t,e){return{}},function(t,e){return{actionChangeNamePage:function(e){t(Object(m.a)(e))}}})(v)},720:function(t,e,a){"use strict";var o=a(61),n=a(62),i=a(65),r=a(63),l=a(64),s=a(1),p=a.n(s);p.a.Component},721:function(t,e,a){"use strict";var o=a(61),n=a(62),i=a(65),r=a(63),l=a(64),s=a(1),p=a.n(s);s.PureComponent},722:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var o=function(t){return function(e){e({type:"_NAV_CHANGE_NAME_PAGE",namePage:t})}}},752:function(t,e,a){t.exports=a.p+"static/media/79.ecff7836.jpg"},812:function(t,e,a){"use strict";var o=a(217),n=a(61),i=a(62),r=a(65),l=a(63),s=a(64),p=a(1),d=a.n(p),c=a(716),u=a.n(c),h=(a(717),a(720),a(721),function(t){function e(){return Object(n.a)(this,e),Object(r.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return d.a.createElement("div",{style:{position:"relative",left:"5px",top:"5px",zIndex:101}},d.a.createElement("div",{id:"titleFull",style:{textAlign:"center",width:"300px",position:"absolute",left:-10,top:50}},d.a.createElement("div",{style:{fontSize:30}},"TEMPERATURE (",d.a.createElement("span",null,"\u2103"),")"),d.a.createElement("div",{style:{fontSize:90}},this.props.data.length>0?this.props.data[this.props.data.length-1].Temperature:"----")),d.a.createElement("div",{style:{position:"absolute",left:276,top:2}},d.a.createElement(u.a,Object(o.a)({maxValue:40,width:400,value:this.props.data.length>0?this.props.data[this.props.data.length-1].Temperature:0,needleColor:"red",textColor:"red",segments:20,segmentColors:["#0000FF","#001CF8","#0037F0","#0050E9","#0067E2","#007DDB","#0091D3","#00B2C6","#00B9A7","#00AC79","#00A050","#00860D","#00860D","#2C9300","#79AC00","#A7B900","#C6B200","#D39300","#DF7000","#F91900"]},"textColor",this.props.textColor))))}}]),e}(p.Component));e.a=h},813:function(t,e,a){"use strict";var o=a(61),n=a(62),i=a(65),r=a(63),l=a(64),s=a(1),p=a.n(s),d=a(716),c=a.n(d),u=(a(717),a(720),a(721),function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(n.a)(e,[{key:"render",value:function(){return p.a.createElement("div",{style:{position:"relative",left:"5px",top:"5px",zIndex:101}},p.a.createElement("div",{id:"titleFull",style:{textAlign:"center",width:"300px",position:"absolute",left:-10,top:50}},p.a.createElement("div",{style:{fontSize:30}},"CO2 (ppm)"),p.a.createElement("div",{style:{fontSize:90}},this.props.data.length>0?this.props.data[this.props.data.length-1].CO2:"----")),p.a.createElement("div",{style:{position:"absolute",left:276,top:2}},p.a.createElement(c.a,{width:400,needleHeightRatio:.7,value:this.props.data.length>0?this.props.data[this.props.data.length-1].CO2:0,customSegmentStops:[0,400,600,800,1e3],segmentColors:["green","#AEE228","#ECDB23","red"],customSegmentLabels:[{text:"VERY GOOD",position:"INSIDE",color:"#14213D",fontWeight:"bold"},{text:"GOOD",position:"INSIDE",color:"#14213D"},{text:"OK",position:"INSIDE",color:"#14213D"},{text:"BAD",position:"INSIDE",color:"#14213D"}],ringWidth:47,needleTransitionDuration:1e3,needleTransition:"easeElastic",needleColor:"red",textColor:this.props.textColor})))}}]),e}(s.Component));e.a=u},814:function(t,e,a){"use strict";var o=a(61),n=a(62),i=a(65),r=a(63),l=a(64),s=a(1),p=a.n(s),d=a(716),c=a.n(d),u=(a(717),a(720),a(721),function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(n.a)(e,[{key:"render",value:function(){return this.props.data?p.a.createElement("div",{style:{position:"relative",left:"5px",top:"5px",zIndex:101}},p.a.createElement("div",{id:"titleFull",style:{textAlign:"center",width:"300px",position:"absolute",left:-10,top:50}},p.a.createElement("div",{style:{fontSize:30}},"CO (ppm)"),p.a.createElement("div",{style:{fontSize:90}},this.props.data.length>0?this.props.data[this.props.data.length-1].CO:"----")),p.a.createElement("div",{style:{position:"absolute",left:276,top:2}},p.a.createElement(c.a,{width:400,maxValue:12,needleHeightRatio:.7,value:this.props.data.length>0?this.props.data[this.props.data.length-1].CO:0,customSegmentStops:[0,1,2,10,12],segmentColors:["green","#AEE228","#ECDB23","red"],customSegmentLabels:[{text:"GOOD",position:"INSIDE",color:"#14213D",fontWeight:"bold",fontSize:"12px"},{text:"OK",position:"INSIDE",color:"#14213D",fontSize:"12px"},{text:"NOT GOOD",position:"INSIDE",color:"#14213D"},{text:"BAD",position:"INSIDE",color:"#14213D"}],ringWidth:47,needleTransitionDuration:12,needleTransition:"easeElastic",needleColor:"red",textColor:this.props.textColor}))):p.a.createElement(p.a.Fragment,null)}}]),e}(s.Component));e.a=u},815:function(t,e,a){"use strict";var o=a(61),n=a(62),i=a(65),r=a(63),l=a(64),s=a(1),p=a.n(s),d=a(716),c=a.n(d),u=(a(717),a(720),a(721),function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(n.a)(e,[{key:"render",value:function(){return p.a.createElement("div",{style:{position:"relative",left:"5px",top:"5px",zIndex:101}},p.a.createElement("div",{id:"titleFull",style:{textAlign:"center",width:"300px",position:"absolute",left:-10,top:50}},p.a.createElement("div",{style:{fontSize:30}},"HUMIDITY (%RH)"),p.a.createElement("div",{style:{fontSize:90}},this.props.data.length>0?this.props.data[this.props.data.length-1].Humidity:"----")),p.a.createElement("div",{style:{position:"absolute",left:276,top:2}},p.a.createElement(c.a,{width:400,maxValue:100,needleHeightRatio:.7,value:this.props.data.length>0?this.props.data[this.props.data.length-1].Humidity:0,customSegmentStops:[0,55,65,100],segmentColors:["#ECDB23","green","#ECDB23"],customSegmentLabels:[{text:"NOT GOOD",position:"INSIDE",color:"#14213D"},{text:"GOOD",position:"INSIDE",color:"#14213D"},{text:"NOT GOOD",position:"INSIDE",color:"#14213D"}],ringWidth:47,needleTransitionDuration:100,needleTransition:"easeElastic",needleColor:"red",textColor:this.props.textColor})))}}]),e}(s.Component));e.a=u},816:function(t,e,a){"use strict";var o=a(61),n=a(62),i=a(65),r=a(63),l=a(64),s=a(1),p=a.n(s),d=a(716),c=a.n(d);a(717),a(720),a(721),s.Component},817:function(t,e,a){"use strict";var o=a(61),n=a(62),i=a(65),r=a(63),l=a(64),s=a(1),p=a.n(s),d=a(716),c=a.n(d),u=(a(717),a(720),a(721),function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(n.a)(e,[{key:"render",value:function(){return this.props.data?p.a.createElement("div",{style:{position:"relative",left:"5px",top:"5px",zIndex:101}},p.a.createElement("div",{id:"titleFull",style:{textAlign:"center",width:"300px",position:"absolute",left:-10,top:50}},p.a.createElement("div",{style:{fontSize:30}},"PM10 ( ",p.a.createElement("span",null,"\xb5"),"g/",p.a.createElement("span",null,"\u33a5")," )"),p.a.createElement("div",{style:{fontSize:90}},this.props.data.length>0?this.props.data[this.props.data.length-1].PM10:"----")),p.a.createElement("div",{style:{position:"absolute",left:276,top:2}},p.a.createElement(c.a,{width:400,maxValue:350,needleHeightRatio:.7,value:this.props.data.length>0?this.props.data[this.props.data.length-1].PM10:0,customSegmentStops:[0,50,100,250,350],segmentColors:["green","#AEE228","#ECDB23","red"],customSegmentLabels:[{text:"VERY GOOD",position:"INSIDE",color:"#14213D",fontWeight:"bold",fontSize:"12px"},{text:"GOOD",position:"INSIDE",color:"#14213D"},{text:"OK",position:"INSIDE",color:"#14213D"},{text:"BAD",position:"INSIDE",color:"#14213D"}],ringWidth:47,needleTransitionDuration:350,needleTransition:"easeElastic",needleColor:"red",textColor:this.props.textColor}))):p.a.createElement(p.a.Fragment,null)}}]),e}(s.Component));e.a=u},818:function(t,e,a){"use strict";var o=a(61),n=a(62),i=a(65),r=a(63),l=a(64),s=a(1),p=a.n(s),d=a(716),c=a.n(d),u=(a(717),a(720),a(721),function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(n.a)(e,[{key:"render",value:function(){return this.props.data?p.a.createElement("div",{style:{position:"relative",left:"5px",top:"5px",zIndex:101}},p.a.createElement("div",{id:"titleFull",style:{textAlign:"center",width:"300px",position:"absolute",left:-10,top:50}},p.a.createElement("div",{style:{fontSize:30}},"PM1 ( ",p.a.createElement("span",null,"\xb5"),"g/",p.a.createElement("span",null,"\u33a5")," )"),p.a.createElement("div",{style:{fontSize:90}},this.props.data.length>0?this.props.data[this.props.data.length-1].PM1:"----")),p.a.createElement("div",{style:{position:"absolute",left:276,top:2}},p.a.createElement(c.a,{width:400,maxValue:350,needleHeightRatio:.7,value:this.props.data.length>0?this.props.data[this.props.data.length-1].PM1:0,customSegmentStops:[0,50,100,250,350],segmentColors:["green","#AEE228","#ECDB23","red"],customSegmentLabels:[{text:"VERY GOOD",position:"INSIDE",color:"#14213D",fontWeight:"bold",fontSize:"12px"},{text:"GOOD",position:"INSIDE",color:"#14213D"},{text:"OK",position:"INSIDE",color:"#14213D"},{text:"BAD",position:"INSIDE",color:"#14213D"}],ringWidth:47,needleTransitionDuration:350,needleTransition:"easeElastic",needleColor:"red",textColor:this.props.textColor}))):p.a.createElement(p.a.Fragment,null)}}]),e}(s.Component));e.a=u}}]);
//# sourceMappingURL=12.1ed4c65d.chunk.js.map