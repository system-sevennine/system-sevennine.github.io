(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1527:function(t,n,e){"use strict";e.r(n);var a=e(221),r=e(61),u=e(62),i=e(65),c=e(63),o=e(64),d=e(1),E=e.n(d),s=e(220),_=e(1073),f=e(1508),l=e(1509),T=e(7),A=e(20),m=e(6),p=e.n(m),L=e(39),O=e.n(L),y=e(715),h={tag:y.d,className:p.a.string,cssModule:p.a.object},D=function(t){var n=t.className,e=t.cssModule,a=t.tag,r=Object(A.a)(t,["className","cssModule","tag"]),u=Object(y.b)(O()(n,"card-group"),e);return E.a.createElement(a,Object(T.a)({},r,{className:u}))};D.propTypes=h,D.defaultProps={tag:"div"};var G=D,S=e(1510),F=e(1511),I=e(1512),N=e(1513),g=e(1514),w=e(1075),b=e(1515),R=e(909),P=e(60),U=e(773),v=e(66),C=function(t){function n(){var t,e;Object(r.a)(this,n);for(var u=arguments.length,o=new Array(u),d=0;d<u;d++)o[d]=arguments[d];return(e=Object(i.a)(this,(t=Object(c.a)(n)).call.apply(t,[this].concat(o)))).state={email:"",password:"",checked:!1},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e.handleChange=function(t){e.setState(Object(a.a)({},t.target.id,t.target.value))},e}return Object(o.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var t=this.props.auth.authError;return this.props.uid?E.a.createElement(P.c,{to:"/"}):E.a.createElement("div",{className:"app flex-row align-items-center"},E.a.createElement(_.a,null,E.a.createElement(f.a,{className:"justify-content-center"},E.a.createElement(l.a,{md:"8"},E.a.createElement(G,null,E.a.createElement(S.a,{className:"p-4"},E.a.createElement(F.a,null,E.a.createElement(I.a,null,E.a.createElement("h1",null,"Login"),E.a.createElement("p",{className:"text-muted"},"Sign In to your account"),E.a.createElement(N.a,{className:"mb-3"},E.a.createElement(g.a,{addonType:"prepend"},E.a.createElement(w.a,null,E.a.createElement("i",{className:"icon-user"}))),E.a.createElement(b.a,{type:"text",placeholder:"Email",autoComplete:"username",onChange:this.handleChange,id:"email"})),E.a.createElement(N.a,{className:"mb-4"},E.a.createElement(g.a,{addonType:"prepend"},E.a.createElement(w.a,null,E.a.createElement("i",{className:"icon-lock"}))),E.a.createElement(b.a,{type:"password",placeholder:"Password",autoComplete:"current-password",onChange:this.handleChange,id:"password"})),E.a.createElement(f.a,null,E.a.createElement(l.a,{xs:"6"},E.a.createElement(R.a,{color:"primary",className:"px-4",onClick:this.handleSubmit},"Login"))),E.a.createElement("div",{className:"text-warning text-center"},t)))),E.a.createElement(S.a,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"}},E.a.createElement(F.a,{className:"text-center"},E.a.createElement("div",null,E.a.createElement("h2",null,"Sign up"),E.a.createElement(s.Link,{to:"/register"},E.a.createElement(R.a,{color:"primary",className:"mt-3",active:!0,tabIndex:-1},"Register Now!"))))))))))}}]),n}(d.Component);n.default=Object(v.b)(function(t,n){return{auth:t.auth,uid:t.firebase.auth.uid}},function(t,n){return{signIn:function(n){t(Object(U.x)(n))}}})(C)},773:function(t,n,e){"use strict";e.d(n,"x",function(){return r}),e.d(n,"y",function(){return u}),e.d(n,"z",function(){return i}),e.d(n,"h",function(){return c}),e.d(n,"r",function(){return o}),e.d(n,"e",function(){return d}),e.d(n,"A",function(){return E}),e.d(n,"f",function(){return s}),e.d(n,"B",function(){return _}),e.d(n,"g",function(){return f}),e.d(n,"q",function(){return l}),e.d(n,"v",function(){return T}),e.d(n,"u",function(){return A}),e.d(n,"p",function(){return m}),e.d(n,"o",function(){return p}),e.d(n,"n",function(){return L}),e.d(n,"m",function(){return O}),e.d(n,"l",function(){return y}),e.d(n,"k",function(){return h}),e.d(n,"d",function(){return D}),e.d(n,"c",function(){return G}),e.d(n,"b",function(){return S}),e.d(n,"a",function(){return F}),e.d(n,"i",function(){return I}),e.d(n,"s",function(){return N}),e.d(n,"j",function(){return g}),e.d(n,"t",function(){return w}),e.d(n,"w",function(){return b});var a=e(49),r=function(t){return function(n){a.a.auth().signInWithEmailAndPassword(t.email,t.password).then(function(){n({type:"LOGIN_SUCCESS"})}).catch(function(t){n({type:"LOGIN_ERROR",err:t})})}},u=function(){return function(t,n,e){(0,e.getFirebase)().auth().signOut().then(function(){t({type:"SIGN_OUT_SUCCESS"})}).catch(function(n){t({type:"SIGN_OUT_ERROR",err:n})})}},i=function(t){var n={message:""};return n.message="Password not match",function(e){t.password!==t.rePassword?e({type:"SIGNUP_ERROR",err:n}):a.a.auth().createUserWithEmailAndPassword(t.email,t.password).then(function(n){return a.a.collection("users").doc(n.user.uid).set({firstName:t.nameUser,lastName:"",initials:t.firstName[0]+t.lastName[0]})}).then(function(){e({type:"SIGNUP_SUCCESS"})}).catch(function(t){e({type:"SIGNUP_ERROR",err:t})})}},c=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_PANEL"}))}},o=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_PANEL"}))}},d=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_IMAGE"}))}},E=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_IMAGE"}))}},s=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_LABEL"}))}},_=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_LABEL"}))}},f=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_LINE"}))}},l=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_LINE"}))}},T=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_WORDDISPLAY"}))}},A=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_WORDADJUST"}))}},m=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_DWORDDISPLAY"}))}},p=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_DWORDADJUST"}))}},L=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_BITDISPLAY"}))}},O=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_BITADJUST"}))}},y=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_WORDDISPLAY"}))}},h=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_WORDADJUST"}))}},D=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_DWORDDISPLAY"}))}},G=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_DWORDADJUST"}))}},S=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_BITDISPLAY"}))}},F=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_BITADJUST"}))}},I=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_TEXT_FIELD"}))}},N=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_TEXT_FIELD"}))}},g=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_TEXT_FIELD_INPUT"}))}},w=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_TEXT_FIELD_INPUT"}))}},b=function(){return function(t,n){"1"===n().auth.idAdmin&&t({type:"OFF_ALL_STATE"})}}}}]);
//# sourceMappingURL=15.a2a9b0a2.chunk.js.map