(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1343:function(e,t){},1345:function(e,t){},1388:function(e,t){},1389:function(e,t){},1522:function(e,t,a){"use strict";a.r(t);var n=a(61),l=a(62),r=a(65),c=a(63),i=a(64),o=a(1),u=a.n(o),m=a(228),s=a(66),d=a(1267),p=a.n(d),h=a(1263),E=a.n(h),b=a(104),f=a(1500),y=a(1193),g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={selectedDate:Date.now()},a.handleDateChange=function(e){a.setState({selectedDate:e.getTime()}),a.props.onGetTime(e)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onGetTime(this.state.selectedDate)}},{key:"render",value:function(){var e=this.props.classes,t=this.state.selectedDate;return u.a.createElement(y.b,{utils:f.a},u.a.createElement(E.a,{container:!0,className:e.grid,justify:"center"},u.a.createElement(y.a,{margin:"normal",label:"Date picker",value:t,onChange:this.handleDateChange}),u.a.createElement(y.c,{margin:"normal",label:"Time picker",value:t,onChange:this.handleDateChange})))}}]),t}(u.a.Component),v=Object(b.withStyles)({grid:{width:"100%"}})(g),O=a(762),j=a.n(O),w=a(58),C=a(1266),T=a.n(C),S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).onGetTimeStart=function(e){"object"==typeof e?a.setState({timeStart:Date.parse(e)}):a.setState({timeStart:e})},a.onGetTimeEnd=function(e){"object"==typeof e?a.setState({timeEnd:Date.parse(e)}):a.setState({timeEnd:e})},a.onClick=function(){a.props.actionUpdateTimeSearchTableReport({timeStart:a.state.timeStart,timeEnd:a.state.timeEnd})},a.state={timeStart:"",timeEnd:""},a.onGetTimeStart=a.onGetTimeStart.bind(Object(m.a)(a)),a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(p.a,{className:"container center mt-5",style:{maxWidth:600}},u.a.createElement("h2",{style:{justifyContent:"center",display:"flex"}},"Time Start"),u.a.createElement(v,{onGetTime:function(t){return e.onGetTimeStart(t)},style:{justifyContent:"center",display:"flex"}}),u.a.createElement("h2",{style:{justifyContent:"center",display:"flex"}},"Time End"),u.a.createElement(v,{onGetTime:function(t){return e.onGetTimeEnd(t)},style:{justifyContent:"center",display:"flex"}}),u.a.createElement("div",{className:"dropdown-divider"}),u.a.createElement(j.a,{onClick:this.onClick,variant:"contained",color:"primary",style:{margin:"auto",display:"flex"}},"SEARCH"),u.a.createElement("div",{className:"dropdown-divider"}))}}]),t}(o.Component),R=Object(s.b)(null,function(e,t){return{actionUpdateTimeSearchTableReport:function(t){e(function(e,t){return function(a){w.a.database().ref("Table1/UserActive").orderByChild("createAt").startAt(e.timeStart).endAt(e.timeEnd).on("value",function(n){var l=[],r=1;n.forEach(function(e){var t=e.key,a=e.val().action,n=T()(e.val().createAt).calendar(),c=e.val().nameScada,i=e.val().tag,o=e.val().email;l.push({key:t,id:r,action:a,createAt:n,nameScada:c,email:o,tag:i}),r+=1}),t=l.reverse(),a({type:"UPDATE_TIMESEARCH_TABLE_REPORT",object:e,Data:t})})}}(t))}}})(S),k=a(1491),x=a.n(k),H=a(232),N=a.n(H),A=a(1496),D=a.n(A),P=a(1495),I=a.n(P),G=a(0),_=a(227),K=a(221),W=a(149),B=a(1331),M=a.n(B),z=a(344),L=a.n(z),U=a(1498),F=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).getRowClassName=function(e){var t=e.index,n=a.props,l=n.classes,r=n.onRowClick;return Object(W.a)(l.tableRow,l.flexContainer,Object(K.a)({},l.tableRowHover,-1!==t&&null!=r))},a.cellRenderer=function(e){var t=e.cellData,n=e.columnIndex,l=a.props,r=l.columns,c=l.classes,i=l.rowHeight,o=l.onRowClick;return u.a.createElement(M.a,{component:"div",className:Object(W.a)(c.tableCell,c.flexContainer,Object(K.a)({},c.noClick,null==o)),variant:"body",style:{height:i},align:null!=n&&r[n].numeric?"right":"left"},t)},a.headerRenderer=function(e){var t=e.label,n=e.columnIndex,l=a.props,r=l.headerHeight,c=l.columns,i=l.classes;return u.a.createElement(M.a,{component:"div",className:Object(W.a)(i.tableCell,i.flexContainer,i.noClick),variant:"head",style:{height:r},align:c[n].numeric?"right":"left"},u.a.createElement("span",null,t))},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.columns,l=t.rowHeight,r=t.headerHeight,c=Object(_.a)(t,["classes","columns","rowHeight","headerHeight"]);return u.a.createElement(U.a,null,function(t){var i=t.height,o=t.width;return u.a.createElement(U.c,Object.assign({height:i,width:o,rowHeight:l,gridStyle:{direction:"inherit"},headerHeight:r,className:a.table},c,{rowClassName:e.getRowClassName}),n.map(function(t,n){var l=t.dataKey,r=Object(_.a)(t,["dataKey"]);return u.a.createElement(U.b,Object.assign({key:l,headerRenderer:function(t){return e.headerRenderer(Object(G.a)({},t,{columnIndex:n}))},className:a.flexContainer,cellRenderer:e.cellRenderer,dataKey:l},r))}))})}}]),t}(u.a.PureComponent);F.defaultProps={headerHeight:48,rowHeight:48};var J=Object(b.withStyles)(function(e){return{flexContainer:{display:"flex",alignItems:"center",boxSizing:"border-box",padding:"auto"},table:{"& .ReactVirtualized__Table__headerRow":{flip:!1,paddingRight:"rtl"===e.direction?"0px !important":void 0}},tableRow:{cursor:"pointer"},tableRowHover:{"&:hover":{backgroundColor:e.palette.grey[200]}},tableCell:{flex:1},noClick:{cursor:"initial"}}})(F),V=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return u.a.createElement(L.a,{style:{height:850,width:"100%"}},u.a.createElement(J,{rowCount:this.props.data.length,rowGetter:function(t){var a=t.index;return e.props.data[a]},columns:[{width:250,label:"NameScada",dataKey:"nameScada"},{width:200,label:"action",dataKey:"action",numeric:!0},{width:250,label:"CreateAt",dataKey:"createAt",numeric:!0},{width:100,label:"Tag",dataKey:"tag",numeric:!0},{width:250,label:"Email",dataKey:"email",numeric:!0}]}))}}]),t}(o.Component),Y=a(985),q=(a(1490),Y.a.create({page:{backgroundColor:"#E4E4E4",paddingTop:35,paddingBottom:65,paddingHorizontal:35},section:{margin:10,padding:10},table:{display:"table",width:"auto",borderStyle:"solid",borderWidth:1,borderRightWidth:0,borderBottomWidth:0},tableRow:{margin:"auto",flexDirection:"row"},tableCol:{width:"25%",borderStyle:"solid",borderWidth:1,borderLeftWidth:0,borderTopWidth:0},tableCell:{margin:"auto",marginTop:5,fontSize:10}}),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{id:this.props.printableId},u.a.createElement("div",{id:"Printpage"},u.a.createElement("p",null,"Footnotes",u.a.createElement("span",{class:"footnotes"},"Footnotes and notes placed in the footer of a document to reference the text. The footnote will be removed from the flow when the page is created.")," are useful in books and printed documents."),u.a.createElement("h1",null,"1"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("h1",null,"2"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("h1",null,"3"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111"),u.a.createElement("p",null,"111111")))}}]),t}(o.Component)),Q=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).printOrder=function(){var e=document.getElementById("printme").innerHTML,t=window.open("","Print","height=500,width=800");t.document.write('<html><head><title>IoT SYSTEM</title><link media="all" type="text/css" rel="stylesheet" href="./Report.css"/>'),t.document.write("</head><body >"),t.document.write(e),t.document.write("</body></html>"),t.document.close(),t.focus(),t.print(),t.onfocus=function(){console.log("tat man hinh"),setTimeout(function(){t.close()},1e3)}},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(x.a,{title:"OPEN SEARCH"},u.a.createElement(N.a,{onClick:this.props.actionOpenSearch,"aria-label":"Search"},u.a.createElement(I.a,null))),u.a.createElement(x.a,{title:"PRINT"},u.a.createElement(N.a,{onClick:function(){return e.printOrder()}},u.a.createElement(D.a,null)))),u.a.createElement("div",null,!1===this.props.printed?u.a.createElement(V,{data:this.props.data}):null,u.a.createElement(q,{printableId:"printme",data:this.props.data})))}}]),t}(o.Component),X=Object(s.b)(function(e,t){return{searched:e.searchTime.searched,printed:e.searchTime.printed}},function(e,t){return{actionOpenSearch:function(){e(function(e){e({type:"OPEN_SEARCH"}),e({type:"CLOSE_PRINT"})})},actionOpenPrint:function(){e(function(e){e({type:"OPEN_PRINT"})})}}})(Q),Z=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,this.props.searched?u.a.createElement(X,{data:this.props.data}):u.a.createElement(R,null))}}]),t}(o.Component);t.default=Object(s.b)(function(e,t){return{data:e.searchTime.data,searched:e.searchTime.searched}})(Z)}}]);
//# sourceMappingURL=10.76b357a4.chunk.js.map