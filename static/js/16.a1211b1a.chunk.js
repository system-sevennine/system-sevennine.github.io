(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1241:function(t,e,A){t.exports=A.p+"static/media/MB_Tong_The.546bad33.jpg"},1242:function(t,e,A){t.exports=A.p+"static/media/flag.b6e47e2c.gif"},1577:function(t,e,A){"use strict";A.r(e),A.d(e,"Gps",function(){return C});var a=A(0),i=A(61),s=A(62),n=A(64),o=A(63),r=A(219),B=A(65),l=A(66),c=A(1),p=A.n(c),h=A(1241),M=A.n(h),u=A(749),f=A.n(u),w=A(1242),g=A.n(w),d=A(724),Q=A(149),m=A(750),C=function(t){function e(t){var A;return Object(i.a)(this,e),(A=Object(n.a)(this,Object(o.a)(e).call(this,t))).state={data:[],raw_data:[],nameDeviceSellect:"",createAtSellect:"",checkKey:0,initialLng:0,initialLat:0,showingInfoWindow:!1,activeMarker:{},selectedPlace:{},Pos1_X:311,Pos1_Y:317,Pos1_GPS_X:106.64520442485811,Pos1_GPS_Y:10.832357595578948,Pos2_X:1074,Pos2_Y:728,Pos2_GPS_X:106.6562980413437,Pos2_GPS_Y:10.826430102137095,intervalID:"",imgWidth:0,imgHeight:0},A.GetWidthHeight=A.GetWidthHeight.bind(Object(r.a)(A)),A.CalXY_PositionElement=A.CalXY_PositionElement.bind(Object(r.a)(A)),A}return Object(B.a)(e,t),Object(s.a)(e,[{key:"componentWillMount",value:function(){this.props.actionChangeNamePage("TRACKING GOLF CAR")}},{key:"componentDidMount",value:function(){var t=this,e=setInterval(this.GetWidthHeight,1e3);this.setState(Object(a.a)({},this.state,{intervalID:e})),Q.c(function(e){var A=[],a=function(a){var i=new Date(e[a].createAt).toLocaleTimeString("en-US");e[a].createAt=i,e[a].nameDevice=a,t.CalXY_PositionElement(e[a].GPS_Lng,e[a].GPS_Lat,function(t){e[a].x=t.x,e[a].y=t.y}),e[a].x>0&&e[a].x<t.state.imgWidth&&e[a].y>0&&e[a].y<t.state.imgHeight&&A.push(e[a])};for(var i in e)a(i);t.setState({data:A,raw_data:e})})}},{key:"GetWidthHeight",value:function(){var t=this,e=document.querySelector("#img_tongthe");if(e){var A=e.clientWidth,i=e.clientHeight;i>0&&A>0&&(this.setState(Object(a.a)({},this.state,{imgWidth:A,imgHeight:i})),clearInterval(this.state.intervalID));var s=[],n=function(e){var A=new Date(t.state.raw_data[e].createAt).toLocaleTimeString("en-US");t.state.raw_data[e].createAt=A,t.state.raw_data[e].nameDevice=e,t.CalXY_PositionElement(t.state.raw_data[e].GPS_Lng,t.state.raw_data[e].GPS_Lat,function(A){t.state.raw_data[e].x=A.x,t.state.raw_data[e].y=A.y}),t.state.raw_data[e].x>0&&t.state.raw_data[e].x<t.state.imgWidth&&t.state.raw_data[e].y>0&&t.state.raw_data[e].y<t.state.imgHeight&&s.push(t.state.raw_data[e])};for(var o in this.state.raw_data)n(o);this.setState({data:s})}}},{key:"CalXY_PositionElement",value:function(t,e,A){var a=Math.abs(this.state.Pos2_X-this.state.Pos1_X),i=Math.abs(this.state.Pos2_Y-this.state.Pos1_Y),s=Math.abs(this.state.Pos2_GPS_X-this.state.Pos1_GPS_X)/a,n=Math.abs(this.state.Pos2_GPS_Y-this.state.Pos1_GPS_Y)/i,o=t-this.state.Pos1_GPS_X,r=e-this.state.Pos1_GPS_Y;A({x:(this.state.Pos2_X-this.state.Pos1_X)*(this.state.Pos2_GPS_X-this.state.Pos1_GPS_X)>0?parseInt(this.state.Pos1_X)+parseInt(o/s):parseInt(this.state.Pos1_X)-parseInt(o/s),y:(this.state.Pos2_Y-this.state.Pos1_Y)*(this.state.Pos2_GPS_Y-this.state.Pos1_GPS_Y)>0?parseInt(this.state.Pos1_Y)+parseInt(r/n):parseInt(this.state.Pos1_Y)-parseInt(r/n)})}},{key:"render",value:function(){var t=this.props.viewMode?"grid":"block",e=this.props.viewMode?"auto":"0";return p.a.createElement("div",{style:{position:"relative",overflowY:"scroll",height:"93vh",display:t}},p.a.createElement("div",{style:{position:"relative",margin:e}},p.a.createElement("img",{id:"img_tongthe",alt:"",src:M.a,style:{width:"1200px"}}),this.state.data.map(function(t,e){return p.a.createElement(m.a,{x:t.x,y:t.y,size:25,info:t.currentTime})}),p.a.createElement("img",{onClick:function(){alert("10.832357595578948---106.64520442485811")},alt:"marker1",src:f.a,style:{width:"20px",position:"absolute",left:301,top:297,margin:e,zIndex:1,display:"none"}}),p.a.createElement("img",{onClick:function(){alert("10.826430102137095---106.6562980413437")},alt:"marker2",src:f.a,style:{width:"20px",position:"absolute",left:1064,top:708,margin:e,zIndex:1,display:"none"}}),[{left:256,top:578},{left:550,top:584},{left:569,top:512},{left:563,top:776},{left:494,top:733},{left:236,top:731},{left:403,top:698},{left:176,top:790},{left:418,top:853},{left:378,top:907},{left:333,top:589},{left:565,top:851},{left:658,top:851},{left:656,top:802},{left:563,top:776},{left:622,top:561},{left:716,top:524},{left:787,top:526},{left:768,top:592},{left:741,top:728},{left:814,top:789},{left:996,top:703},{left:1057,top:683},{left:995,top:654},{left:1038,top:460},{left:1057,top:379},{left:812,top:455},{left:783,top:353},{left:787,top:236},{left:736,top:106},{left:759,top:23},{left:407,top:55},{left:333,top:281},{left:575,top:358}].map(function(t,A){return p.a.createElement("img",{src:g.a,style:{width:"15px",position:"absolute",left:t.left,top:t.top,margin:e}})})))}}]),e}(c.Component);e.default=Object(l.b)(function(t,e){return{gps:t.gps,viewMode:t.viewMode.viewMode}},function(t,e){return{actionChangeNamePage:function(e){t(Object(d.a)(e))}}})(C)},724:function(t,e,A){"use strict";A.d(e,"a",function(){return a});var a=function(t){return function(e){e({type:"_NAV_CHANGE_NAME_PAGE",namePage:t})}}},749:function(t,e){t.exports="data:image/png;base64,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"},750:function(t,e,A){"use strict";var a=A(0),i=A(61),s=A(62),n=A(64),o=A(63),r=A(65),B=A(1),l=A.n(B),c=A(751),p=A.n(c),h=function(t){function e(t){var A;return Object(i.a)(this,e),(A=Object(n.a)(this,Object(o.a)(e).call(this,t))).componentWillMount=function(){A.setState(Object(a.a)({},A.setState,{currentLeft:A.props.x,currentTop:A.props.y}))},A.componentDidMount=function(){A.countdown=setInterval(A.timer,500)},A.componentWillUnmount=function(){clearInterval(A.countdown)},A.timer=function(){A.setState(Object(a.a)({},A.setState,{timerMove:parseInt(A.state.timerMove)>0?parseInt(A.state.timerMove)-1:0})),A.state.timerMove>0?A.setState(Object(a.a)({},A.state,{currentLeft:A.state.currentLeft+(A.props.x-A.state.currentLeft)*(10-A.state.timerMove)/10,currentTop:A.state.currentTop+(A.props.y-A.state.currentTop)*(10-A.state.timerMove)/10})):A.setState({currentTop:A.props.y,currentLeft:A.props.x})},A.handleClick=function(){A.setState(Object(a.a)({},A.state,{active:!A.state.active}))},A.state={active:0,timerMove:0,currentLeft:0,currentTop:0},A}return Object(r.a)(e,t),Object(s.a)(e,[{key:"componentDidUpdate",value:function(t,e){t.x===this.props.x&&t.y===this.props.y||this.setState(Object(a.a)({},this.state,{timerMove:10}))}},{key:"render",value:function(){var t=this;return l.a.createElement("div",{style:{position:"absolute",left:this.state.currentLeft-this.props.size/2,top:this.state.currentTop-86*this.props.size/134,zIndex:this.state.active?3:2}},l.a.createElement("img",{style:{position:"absolute",left:0,top:0,width:this.props.size},onClick:function(){t.handleClick()},src:(this.state.active,p.a)}),l.a.createElement("div",{style:{position:"absolute",top:1.5*this.props.size,color:"aquamarine",fontWeight:"bold",backgroundColor:"black",fontSize:this.props.size/4,width:"100%",textAlign:"center",display:"table"}},this.state.active?this.props.info:""))}}]),e}(B.Component);e.a=h},751:function(t,e,A){t.exports=A.p+"static/media/location_active3.b2dfeff2.gif"}}]);
//# sourceMappingURL=16.a1211b1a.chunk.js.map