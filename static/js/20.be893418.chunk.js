(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1250:function(t,e,A){t.exports=A.p+"static/media/MB_Tong_The.546bad33.jpg"},1251:function(t,e,A){t.exports=A.p+"static/media/flag.b6e47e2c.gif"},1587:function(t,e,A){"use strict";A.r(e),A.d(e,"Gps",function(){return Q});var a=A(0),i=A(61),s=A(62),o=A(65),n=A(63),r=A(219),B=A(64),l=A(66),c=A(1),p=A.n(c),h=A(1250),M=A.n(h),u=A(755),f=A.n(u),w=A(1251),g=A.n(w),d=A(722),m=A(148),_=A(756),Q=function(t){function e(t){var A;return Object(i.a)(this,e),(A=Object(o.a)(this,Object(n.a)(e).call(this,t))).state={data:[],raw_data:[],nameDeviceSellect:"",createAtSellect:"",checkKey:0,initialLng:0,initialLat:0,showingInfoWindow:!1,activeMarker:{},selectedPlace:{},Pos1_X:311,Pos1_Y:317,Pos1_GPS_X:106.64523522487912,Pos1_GPS_Y:10.832354973778948,Pos2_X:1074,Pos2_Y:728,Pos2_GPS_X:106.6563210413437,Pos2_GPS_Y:10.826389702137096,intervalID:"",imgWidth:0,imgHeight:0},A.GetWidthHeight=A.GetWidthHeight.bind(Object(r.a)(A)),A.CalXY_PositionElement=A.CalXY_PositionElement.bind(Object(r.a)(A)),A}return Object(B.a)(e,t),Object(s.a)(e,[{key:"componentWillMount",value:function(){this.props.actionChangeNamePage("TRACKING GOLF CAR")}},{key:"componentDidMount",value:function(){var t=this,e=setInterval(this.GetWidthHeight,1e3);this.setState(Object(a.a)({},this.state,{intervalID:e})),m.c(function(e){var A=[],a=function(a){t.CalXY_PositionElement(e[a].GPS_Lng,e[a].GPS_Lat,function(t){e[a].x=t.x,e[a].y=t.y}),e[a].x>0&&e[a].x<t.state.imgWidth&&e[a].y>0&&e[a].y<t.state.imgHeight&&A.push(e[a])};for(var i in e)a(i);t.setState({data:A,raw_data:e})})}},{key:"GetWidthHeight",value:function(){var t=this,e=document.querySelector("#img_tongthe");if(e){var A=e.clientWidth,i=e.clientHeight;i>0&&A>0&&(this.setState(Object(a.a)({},this.state,{imgWidth:A,imgHeight:i})),clearInterval(this.state.intervalID));var s=[],o=function(e){var A=new Date(t.state.raw_data[e].createAt).toLocaleTimeString("en-US");t.state.raw_data[e].createAt=A,t.state.raw_data[e].nameDevice=e,t.CalXY_PositionElement(t.state.raw_data[e].GPS_Lng,t.state.raw_data[e].GPS_Lat,function(A){t.state.raw_data[e].x=A.x,t.state.raw_data[e].y=A.y}),t.state.raw_data[e].x>0&&t.state.raw_data[e].x<t.state.imgWidth&&t.state.raw_data[e].y>0&&t.state.raw_data[e].y<t.state.imgHeight&&s.push(t.state.raw_data[e])};for(var n in this.state.raw_data)o(n);this.setState({data:s})}}},{key:"CalXY_PositionElement",value:function(t,e,A){var a=Math.abs(this.state.Pos2_X-this.state.Pos1_X),i=Math.abs(this.state.Pos2_Y-this.state.Pos1_Y),s=Math.abs(this.state.Pos2_GPS_X-this.state.Pos1_GPS_X)/a,o=Math.abs(this.state.Pos2_GPS_Y-this.state.Pos1_GPS_Y)/i,n=t-this.state.Pos1_GPS_X,r=e-this.state.Pos1_GPS_Y;A({x:(this.state.Pos2_X-this.state.Pos1_X)*(this.state.Pos2_GPS_X-this.state.Pos1_GPS_X)>0?parseInt(this.state.Pos1_X)+parseInt(n/s):parseInt(this.state.Pos1_X)-parseInt(n/s),y:(this.state.Pos2_Y-this.state.Pos1_Y)*(this.state.Pos2_GPS_Y-this.state.Pos1_GPS_Y)>0?parseInt(this.state.Pos1_Y)+parseInt(r/o):parseInt(this.state.Pos1_Y)-parseInt(r/o)})}},{key:"render",value:function(){var t=this,e=this.props.viewMode?"grid":"block",A=this.props.viewMode?"auto":"0";return p.a.createElement("div",{style:{position:"relative",overflowY:"scroll",height:"93vh",display:e}},p.a.createElement("div",{style:{position:"relative",margin:A}},p.a.createElement("img",{id:"img_tongthe",alt:"",src:M.a,style:{width:"1200px"}}),this.state.data.map(function(t,e){return p.a.createElement(_.a,{x:t.x,y:t.y,size:15,info:t.createAt,nameDevice:t.nameDevice})}),p.a.createElement("img",{onClick:function(){alert(t.state.Pos1_GPS_Y+","+t.state.Pos1_GPS_X)},alt:"marker1",src:f.a,style:{width:"20px",position:"absolute",left:this.state.Pos1_X-520/53,top:this.state.Pos1_Y-1e3/53,margin:A,zIndex:1,display:"none"}}),p.a.createElement("img",{onClick:function(){alert(t.state.Pos2_GPS_Y+","+t.state.Pos2_GPS_X)},alt:"marker2",src:f.a,style:{width:"20px",position:"absolute",left:this.state.Pos2_X-520/53,top:this.state.Pos2_Y-1e3/53,margin:A,zIndex:1,display:"none"}}),[{left:256,top:578},{left:550,top:584},{left:569,top:512},{left:563,top:776},{left:494,top:733},{left:236,top:731},{left:403,top:698},{left:176,top:790},{left:418,top:853},{left:378,top:907},{left:333,top:589},{left:565,top:851},{left:658,top:851},{left:656,top:802},{left:563,top:776},{left:622,top:561},{left:716,top:524},{left:787,top:526},{left:768,top:592},{left:741,top:728},{left:814,top:789},{left:996,top:703},{left:1057,top:683},{left:995,top:654},{left:1038,top:460},{left:1057,top:379},{left:812,top:455},{left:783,top:353},{left:787,top:236},{left:736,top:106},{left:759,top:23},{left:407,top:55},{left:333,top:281},{left:575,top:358}].map(function(t,e){return p.a.createElement("img",{src:g.a,style:{width:"15px",position:"absolute",left:t.left,top:t.top,margin:A}})})))}}]),e}(c.Component);e.default=Object(l.b)(function(t,e){return{gps:t.gps,viewMode:t.viewMode.viewMode}},function(t,e){return{actionChangeNamePage:function(e){t(Object(d.a)(e))}}})(Q)},722:function(t,e,A){"use strict";A.d(e,"a",function(){return a});var a=function(t){return function(e){e({type:"_NAV_CHANGE_NAME_PAGE",namePage:t})}}},755:function(t,e){t.exports="data:image/png;base64,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"},756:function(t,e,A){"use strict";var a=A(0),i=A(61),s=A(62),o=A(65),n=A(63),r=A(64),B=A(1),l=A.n(B),c=A(757),p=A.n(c),h=10,M=function(t){function e(t){var A;return Object(i.a)(this,e),(A=Object(o.a)(this,Object(n.a)(e).call(this,t))).componentWillMount=function(){A.setState(Object(a.a)({},A.setState,{currentLeft:A.props.x,currentTop:A.props.y,timerInitial:5}))},A.componentDidMount=function(){A.countdown=setInterval(A.timer,500)},A.componentWillUnmount=function(){clearInterval(A.countdown)},A.timer=function(){A.setState(Object(a.a)({},A.setState,{timerMove:parseInt(A.state.timerMove)>0?parseInt(A.state.timerMove)-1:0,timerInitial:parseInt(A.state.timerInitial)>0?parseInt(A.state.timerInitial)-1:0})),A.state.timerMove>0&&0===parseInt(A.state.timerInitial)?A.setState(Object(a.a)({},A.state,{currentLeft:A.state.currentLeft+(A.props.x-A.state.currentLeft)*(h-A.state.timerMove)/h,currentTop:A.state.currentTop+(A.props.y-A.state.currentTop)*(h-A.state.timerMove)/h})):A.setState({currentTop:A.props.y,currentLeft:A.props.x})},A.handleClick=function(){console.log(A.props.info),A.setState(Object(a.a)({},A.state,{active:!A.state.active}))},A.state={active:1,timerMove:0,timerInitial:5,currentLeft:0,currentTop:0},A}return Object(r.a)(e,t),Object(s.a)(e,[{key:"componentDidUpdate",value:function(t,e){t.x===this.props.x&&t.y===this.props.y||this.setState(Object(a.a)({},this.state,{timerMove:h})),t.info===this.props.info||this.state.active||console.log(this.props.info)}},{key:"render",value:function(){var t=this;return l.a.createElement("div",{style:{position:"absolute",left:this.state.currentLeft-this.props.size/2,top:this.state.currentTop-this.props.size/2,zIndex:this.state.active?3:2}},l.a.createElement("img",{style:{position:"absolute",left:0,top:0,width:this.props.size},onClick:function(){t.handleClick()},src:(this.state.active,p.a)}),l.a.createElement("div",{style:{position:"absolute",left:.1*-this.props.size,top:.4*-this.props.size,color:"white",fontWeight:"bold",backgroundColor:"black",fontSize:this.props.size/5,width:1.2*this.props.size,textAlign:"center",display:"table",padding:1,borderRadius:3}},this.state.active?this.props.nameDevice:""))}}]),e}(B.Component);e.a=M},757:function(t,e,A){t.exports=A.p+"static/media/golf_car5.6e98ab0f.gif"}}]);
//# sourceMappingURL=20.be893418.chunk.js.map