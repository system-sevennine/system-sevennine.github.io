(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1570:function(e,t,n){"use strict";n.r(t);var a=n(218),r=n(61),u=n(62),i=n(65),c=n(63),o=n(64),d=n(1),s=n.n(d),l=n(1096),E=n(1551),p=n(1552),f=n(1553),m=n(1554),T=n(1555),_=n(1556),A=n(1557),L=n(1098),h=n(1558),O=n(927),y=n(7),D=n(20),G=n(6),F=n.n(G),S=n(40),I=n.n(S),N=n(715),g={tag:N.d,className:F.a.string,cssModule:F.a.object},w=function(e){var t=e.className,n=e.cssModule,a=e.tag,r=Object(D.a)(e,["className","cssModule","tag"]),u=Object(N.b)(I()(t,"card-footer"),n);return s.a.createElement(a,Object(y.a)({},r,{className:u}))};w.propTypes=g,w.defaultProps={tag:"div"};var b=w,C=n(66),R=n(60),P=n(781),U=function(e){function t(){var e,n;Object(r.a)(this,t);for(var u=arguments.length,o=new Array(u),d=0;d<u;d++)o[d]=arguments[d];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={email:"",password:"",rePassword:"",userName:""},n.handleSubmit=function(e){e.preventDefault(),n.props.signUp(n.state)},n.handleChange=function(e){n.setState(Object(a.a)({},e.target.id,e.target.value))},n}return Object(o.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.uid,t=this.props.auth.authError;return e?s.a.createElement(R.c,{to:"/"}):s.a.createElement("div",{className:"app flex-row align-items-center"},s.a.createElement(l.a,null,s.a.createElement(E.a,{className:"justify-content-center"},s.a.createElement(p.a,{md:"9",lg:"7",xl:"6"},s.a.createElement(f.a,{className:"mx-4"},s.a.createElement(m.a,{className:"p-4"},s.a.createElement(T.a,null,s.a.createElement("h1",null,"Register"),s.a.createElement("p",{className:"text-muted"},"Create your account"),s.a.createElement(_.a,{className:"mb-3"},s.a.createElement(A.a,{addonType:"prepend"},s.a.createElement(L.a,null,s.a.createElement("i",{className:"icon-user"}))),s.a.createElement(h.a,{type:"text",placeholder:"UserName",autoComplete:"username",onChange:this.handleChange,id:"userName"})),s.a.createElement(_.a,{className:"mb-3"},s.a.createElement(A.a,{addonType:"prepend"},s.a.createElement(L.a,null,"@")),s.a.createElement(h.a,{type:"text",placeholder:"Email",autoComplete:"email",onChange:this.handleChange,id:"email"})),s.a.createElement(_.a,{className:"mb-3"},s.a.createElement(A.a,{addonType:"prepend"},s.a.createElement(L.a,null,s.a.createElement("i",{className:"icon-lock"}))),s.a.createElement(h.a,{type:"password",placeholder:"Password",autoComplete:"new-password",onChange:this.handleChange,id:"password"})),s.a.createElement(_.a,{className:"mb-4"},s.a.createElement(A.a,{addonType:"prepend"},s.a.createElement(L.a,null,s.a.createElement("i",{className:"icon-lock"}))),s.a.createElement(h.a,{type:"password",placeholder:"Repeat password",autoComplete:"new-password",onChange:this.handleChange,id:"rePassword"})),s.a.createElement(O.a,{color:"success",block:!0,onClick:this.handleSubmit},"Create Account"))),s.a.createElement(b,{className:"p-4"},s.a.createElement(E.a,null,s.a.createElement("div",{className:"text-warning text-center"},t))))))))}}]),t}(d.Component);t.default=Object(C.b)(function(e,t){return{auth:e.auth,uid:e.firebase.auth.uid}},function(e,t){return{signUp:function(t){e(Object(P.z)(t))}}})(U)},781:function(e,t,n){"use strict";n.d(t,"x",function(){return r}),n.d(t,"y",function(){return u}),n.d(t,"z",function(){return i}),n.d(t,"h",function(){return c}),n.d(t,"r",function(){return o}),n.d(t,"e",function(){return d}),n.d(t,"A",function(){return s}),n.d(t,"f",function(){return l}),n.d(t,"B",function(){return E}),n.d(t,"g",function(){return p}),n.d(t,"q",function(){return f}),n.d(t,"v",function(){return m}),n.d(t,"u",function(){return T}),n.d(t,"p",function(){return _}),n.d(t,"o",function(){return A}),n.d(t,"n",function(){return L}),n.d(t,"m",function(){return h}),n.d(t,"l",function(){return O}),n.d(t,"k",function(){return y}),n.d(t,"d",function(){return D}),n.d(t,"c",function(){return G}),n.d(t,"b",function(){return F}),n.d(t,"a",function(){return S}),n.d(t,"i",function(){return I}),n.d(t,"s",function(){return N}),n.d(t,"j",function(){return g}),n.d(t,"t",function(){return w}),n.d(t,"w",function(){return b});var a=n(39),r=function(e){return function(t){a.a.auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOGIN_SUCCESS"})}).catch(function(e){t({type:"LOGIN_ERROR",err:e})})}},u=function(){return function(e,t,n){(0,n.getFirebase)().auth().signOut().then(function(){e({type:"SIGN_OUT_SUCCESS"})}).catch(function(t){e({type:"SIGN_OUT_ERROR",err:t})})}},i=function(e){var t={message:""};return t.message="Password not match",function(n){e.password!==e.rePassword?n({type:"SIGNUP_ERROR",err:t}):a.a.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return a.a.collection("users").doc(t.user.uid).set({firstName:e.nameUser,lastName:"",initials:e.firstName[0]+e.lastName[0]})}).then(function(){n({type:"SIGNUP_SUCCESS"})}).catch(function(e){n({type:"SIGNUP_ERROR",err:e})})}},c=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_PANEL"}))}},o=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_PANEL"}))}},d=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_IMAGE"}))}},s=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_IMAGE"}))}},l=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_LABEL"}))}},E=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_LABEL"}))}},p=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_LINE"}))}},f=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_LINE"}))}},m=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_WORDDISPLAY"}))}},T=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_WORDADJUST"}))}},_=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_DWORDDISPLAY"}))}},A=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_DWORDADJUST"}))}},L=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_BITDISPLAY"}))}},h=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_BITADJUST"}))}},O=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_WORDDISPLAY"}))}},y=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_WORDADJUST"}))}},D=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_DWORDDISPLAY"}))}},G=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_DWORDADJUST"}))}},F=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_BITDISPLAY"}))}},S=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_BITADJUST"}))}},I=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_TEXT_FIELD"}))}},N=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_TEXT_FIELD"}))}},g=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_TEXT_FIELD_INPUT"}))}},w=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_TEXT_FIELD_INPUT"}))}},b=function(){return function(e,t){"1"===t().auth.idAdmin&&e({type:"OFF_ALL_STATE"})}}}}]);
//# sourceMappingURL=20.3d155ce6.chunk.js.map