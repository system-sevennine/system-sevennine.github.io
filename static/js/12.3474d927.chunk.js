(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1243:function(t,e,A){t.exports=A.p+"static/media/A_area.e8f7841b.png"},1578:function(t,e,A){"use strict";A.r(e),A.d(e,"Gps",function(){return m});var a=A(0),i=A(61),s=A(62),n=A(65),o=A(63),r=A(219),B=A(64),c=A(66),l=A(1),h=A.n(l),M=A(1243),p=A.n(M),Q=A(724),u=A(149),g=A(749),w=A.n(g),C=(A(762),A(750)),m=function(t){function e(t){var A;return Object(i.a)(this,e),(A=Object(n.a)(this,Object(o.a)(e).call(this,t))).state={data:[],raw_data:[],nameDeviceSellect:"",createAtSellect:"",checkKey:0,initialLng:0,initialLat:0,showingInfoWindow:!1,activeMarker:{},selectedPlace:{},Pos1_X:351,Pos1_Y:72,Pos1_GPS_X:106.6467332839966,Pos1_GPS_Y:10.836604243182496,Pos2_X:926,Pos2_Y:719,Pos2_GPS_X:106.65147542953491,Pos2_GPS_Y:10.831309096390347,intervalID:"",imgWidth:0,imgHeight:0},A.GetWidthHeight=A.GetWidthHeight.bind(Object(r.a)(A)),A.CalXY_PositionElement=A.CalXY_PositionElement.bind(Object(r.a)(A)),A}return Object(B.a)(e,t),Object(s.a)(e,[{key:"componentWillMount",value:function(){this.props.actionChangeNamePage("TRACKING GOLF CAR")}},{key:"componentDidMount",value:function(){var t=this,e=setInterval(this.GetWidthHeight,1e3);this.setState(Object(a.a)({},this.state,{intervalID:e})),u.c(function(e){var A=[],a=function(a){t.CalXY_PositionElement(e[a].GPS_Lng,e[a].GPS_Lat,function(t){e[a].x=t.x,e[a].y=t.y}),e[a].x>0&&e[a].x<t.state.imgWidth&&e[a].y>0&&e[a].y<t.state.imgHeight&&A.push(e[a])};for(var i in e)a(i);t.setState({data:A,raw_data:e})})}},{key:"GetWidthHeight",value:function(){var t=this,e=document.querySelector("#img_A");if(e){var A=e.clientWidth,i=e.clientHeight;i>0&&A>0&&(this.setState(Object(a.a)({},this.state,{imgWidth:A,imgHeight:i})),clearInterval(this.state.intervalID));var s=[],n=function(e){t.state.raw_data[e].nameDevice=e,t.CalXY_PositionElement(t.state.raw_data[e].GPS_Lng,t.state.raw_data[e].GPS_Lat,function(A){t.state.raw_data[e].x=A.x,t.state.raw_data[e].y=A.y}),t.state.raw_data[e].x>0&&t.state.raw_data[e].x<t.state.imgWidth&&t.state.raw_data[e].y>0&&t.state.raw_data[e].y<t.state.imgHeight&&s.push(t.state.raw_data[e])};for(var o in this.state.raw_data)n(o);this.setState({data:s})}}},{key:"CalXY_PositionElement",value:function(t,e,A){var a=Math.abs(this.state.Pos2_X-this.state.Pos1_X),i=Math.abs(this.state.Pos2_Y-this.state.Pos1_Y),s=Math.abs(this.state.Pos2_GPS_X-this.state.Pos1_GPS_X)/a,n=Math.abs(this.state.Pos2_GPS_Y-this.state.Pos1_GPS_Y)/i,o=t-this.state.Pos1_GPS_X,r=e-this.state.Pos1_GPS_Y;A({x:(this.state.Pos2_X-this.state.Pos1_X)*(this.state.Pos2_GPS_X-this.state.Pos1_GPS_X)>0?parseInt(this.state.Pos1_X)+parseInt(o/s):parseInt(this.state.Pos1_X)-parseInt(o/s),y:(this.state.Pos2_Y-this.state.Pos1_Y)*(this.state.Pos2_GPS_Y-this.state.Pos1_GPS_Y)>0?parseInt(this.state.Pos1_Y)+parseInt(r/n):parseInt(this.state.Pos1_Y)-parseInt(r/n)})}},{key:"render",value:function(){var t=this.props.viewMode?"grid":"block",e=this.props.viewMode?"auto":"0";return h.a.createElement("div",{style:{position:"relative",overflowY:"scroll",height:"93vh",display:t}},h.a.createElement("div",{style:{position:"relative",margin:e}},h.a.createElement("img",{id:"img_A",alt:"",src:p.a,style:{width:"1150px"}}),this.state.data.map(function(t,e){return h.a.createElement(C.a,{x:t.x,y:t.y,size:30,info:t.createAt,nameDevice:t.nameDevice})}),h.a.createElement("img",{onClick:function(){alert("10.836604243182496---106.6467332839966")},alt:"marker1",src:w.a,style:{width:"20px",position:"absolute",left:346,top:52,margin:e,zIndex:1,display:"none"}}),h.a.createElement("img",{onClick:function(){alert("10.831309096390347---106.65147542953491")},alt:"marker2",src:w.a,style:{width:"20px",position:"absolute",left:921,top:699,margin:e,zIndex:1,display:"none"}})))}}]),e}(l.Component);e.default=Object(c.b)(function(t,e){return{gps:t.gps,viewMode:t.viewMode.viewMode}},function(t,e){return{actionChangeNamePage:function(e){t(Object(Q.a)(e))}}})(m)},724:function(t,e,A){"use strict";A.d(e,"a",function(){return a});var a=function(t){return function(e){e({type:"_NAV_CHANGE_NAME_PAGE",namePage:t})}}},749:function(t,e){t.exports="data:image/png;base64,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"},750:function(t,e,A){"use strict";var a=A(0),i=A(61),s=A(62),n=A(65),o=A(63),r=A(64),B=A(1),c=A.n(B),l=A(751),h=A.n(l),M=10,p=function(t){function e(t){var A;return Object(i.a)(this,e),(A=Object(n.a)(this,Object(o.a)(e).call(this,t))).componentWillMount=function(){A.setState(Object(a.a)({},A.setState,{currentLeft:A.props.x,currentTop:A.props.y}))},A.componentDidMount=function(){A.countdown=setInterval(A.timer,500)},A.componentWillUnmount=function(){clearInterval(A.countdown)},A.timer=function(){A.setState(Object(a.a)({},A.setState,{timerMove:parseInt(A.state.timerMove)>0?parseInt(A.state.timerMove)-1:0})),A.state.timerMove>0?A.setState(Object(a.a)({},A.state,{currentLeft:A.state.currentLeft+(A.props.x-A.state.currentLeft)*(M-A.state.timerMove)/M,currentTop:A.state.currentTop+(A.props.y-A.state.currentTop)*(M-A.state.timerMove)/M})):A.setState({currentTop:A.props.y,currentLeft:A.props.x})},A.handleClick=function(){console.log(A.props.info),A.setState(Object(a.a)({},A.state,{active:!A.state.active}))},A.state={active:1,timerMove:0,currentLeft:0,currentTop:0},A}return Object(r.a)(e,t),Object(s.a)(e,[{key:"componentDidUpdate",value:function(t,e){t.x===this.props.x&&t.y===this.props.y||this.setState(Object(a.a)({},this.state,{timerMove:M})),t.info===this.props.info||this.state.active||console.log(this.props.info)}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{style:{position:"absolute",left:this.state.currentLeft-this.props.size/2,top:this.state.currentTop-86*this.props.size/134,zIndex:this.state.active?3:2}},c.a.createElement("img",{style:{position:"absolute",left:0,top:0,width:this.props.size},onClick:function(){t.handleClick()},src:(this.state.active,h.a)}),c.a.createElement("div",{style:{position:"absolute",left:.1*-this.props.size,top:.4*-this.props.size,color:"white",fontWeight:"bold",backgroundColor:"black",fontSize:this.props.size/5,width:1.2*this.props.size,textAlign:"center",display:"table",padding:1,borderRadius:3}},this.state.active?this.props.nameDevice:""))}}]),e}(B.Component);e.a=p},751:function(t,e,A){t.exports=A.p+"static/media/location_active3.b2dfeff2.gif"},762:function(t,e){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=12.3474d927.chunk.js.map