(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{276:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("77f4c5a8",content,!0,{sourceMap:!1})},277:function(t,e,n){var content=n(286);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("6ff47c77",content,!0,{sourceMap:!1})},278:function(t,e,n){var content=n(294);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("8a50623e",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";var strong=n(291),r=n(281);t.exports=n(292)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},281:function(t,e,n){var r=n(32);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},282:function(t,e,n){"use strict";n(174),n(19),n(9),n(6),n(11),n(37),n(5);var r=n(3),o=n(296),c=n.n(o),l=n(105),f=n(104);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"certificados"},{id:4,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:7,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"},{id:8,label:"Apoie a new school",icon:"mdi-volume-high",link:"/investidores"}]}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)("user",["clearInfoUser"]),{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){localStorage.clear(),$nuxt._router.push("/login"),t.clearInfoUser()}))},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos")},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){f.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:c.a}},m=(n(283),n(39)),h=n(43),y=n.n(h),_=n(272),x=n(268),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page"},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1)]),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"7640787c",null),w=component.exports;y()(component,{VBtn:_.a,VIcon:x.a});var k={data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Home",icon:"mdi-home",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school",link:"/aluno/certificados",class:""}]}},components:{SideMenu:w},mounted:function(){f.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].class="remove-certificates")}}},O=(n(285),n(602)),j=Object(m.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"01775e7f",null);e.a=j.exports;y()(j,{VBottomNavigation:O.a,VBtn:_.a,VIcon:x.a})},283:function(t,e,n){"use strict";var r=n(276);n.n(r).a},284:function(t,e,n){(e=n(22)(!1)).push([t.i,".container-page[data-v-7640787c]{z-index:2}#btnLogout[data-v-7640787c]{margin-top:5px}.container-page>main[data-v-7640787c]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-7640787c],.container-page>main[data-v-7640787c]{display:-webkit-box;display:flex}#avatar[data-v-7640787c]{margin-right:1rem}.text-menu[data-v-7640787c]{text-transform:uppercase}h1[data-v-7640787c]{font-size:1.4rem;font-weight:600;text-transform:capitalize}.container-page[data-v-7640787c]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-7640787c]{margin-left:0}#close-btn[data-v-7640787c]{cursor:pointer;font-size:30px}#flex-info-user[data-v-7640787c]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-7640787c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-7640787c]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-7640787c]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-7640787c]{width:100%}.item-menu[data-v-7640787c]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:#60c!important;cursor:pointer}.item-menu[data-v-7640787c],.item-menu div[data-v-7640787c]{display:-webkit-box;display:flex}.item-menu div[data-v-7640787c]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-7640787c]:hover{background-color:#e8d1ff}.col-flex-center[data-v-7640787c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-7640787c]{margin-bottom:0!important}h4[data-v-7640787c]{font-weight:600}@media(max-width:320px){.item-menu[data-v-7640787c]{height:42px}}",""]),t.exports=e},285:function(t,e,n){"use strict";var r=n(277);n.n(r).a},286:function(t,e,n){(e=n(22)(!1)).push([t.i,"[data-v-01775e7f] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-01775e7f]{margin-right:0!important}#page[data-v-01775e7f]{margin-bottom:5rem!important}.btn-fixed[data-v-01775e7f]{height:100%!important}.intro-transition[data-v-01775e7f]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-01775e7f] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:#60c}@media (max-width:375px){.v-btn[data-v-01775e7f]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-01775e7f]{font-size:.65rem!important}}.remove-certificates[data-v-01775e7f]{display:none}",""]),t.exports=e},290:function(t,e,n){"use strict";var r={props:["title","backPage"],methods:{comeBackPage:function(){this.$router.back()}}},o=(n(293),n(39)),c=n(43),l=n.n(c),f=n(272),d=n(268),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"head__bar"}},[t.backPage?n("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:t.comeBackPage}},[n("v-icon",[t._v("mdi-arrow-left")])],1):t._e(),t._v(" "),n("h1",{staticClass:"h1__theme"},[t._v(t._s(t.title))])],1)}),[],!1,null,"3f62119b",null);e.a=component.exports;l()(component,{VBtn:f.a,VIcon:d.a})},291:function(t,e,n){"use strict";var r=n(33).f,o=n(106),c=n(177),l=n(53),f=n(175),d=n(176),v=n(123),m=n(178),h=n(124),y=n(24),_=n(122).fastKey,x=n(281),w=y?"_s":"size",k=function(t,e){var n,r=_(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var m=t((function(t,r){f(t,m,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[w]=0,null!=r&&d(r,n,t[v],t)}));return c(m.prototype,{clear:function(){for(var t=x(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[w]=0},delete:function(t){var n=x(this,e),r=k(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[w]--}return!!r},forEach:function(t){x(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!k(x(this,e),t)}}),y&&r(m.prototype,"size",{get:function(){return x(this,e)[w]}}),m},def:function(t,e,n){var r,o,c=k(t,e);return c?c.v=n:(t._l=c={i:o=_(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[w]++,"F"!==o&&(t._i[o]=c)),t},getEntry:k,setStrong:function(t,e,n){v(t,e,(function(t,n){this._t=x(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?m(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,m(1))}),n?"entries":"values",!n,!0),h(e)}}},292:function(t,e,n){"use strict";var r=n(17),o=n(14),c=n(38),l=n(177),meta=n(122),f=n(176),d=n(175),v=n(32),m=n(26),h=n(125),y=n(80),_=n(126);t.exports=function(t,e,n,x,w,k){var O=r[t],j=O,S=w?"set":"add",C=j&&j.prototype,P={},M=function(t){var e=C[t];c(C,t,"delete"==t?function(a){return!(k&&!v(a))&&e.call(this,0===a?0:a)}:"has"==t?function(a){return!(k&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return k&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof j&&(k||C.forEach&&!m((function(){(new j).entries().next()})))){var E=new j,D=E[S](k?{}:-0,1)!=E,V=m((function(){E.has(1)})),N=h((function(t){new j(t)})),I=!k&&m((function(){for(var t=new j,e=5;e--;)t[S](e,e);return!t.has(-0)}));N||((j=e((function(e,n){d(e,j,t);var r=_(new O,e,j);return null!=n&&f(n,w,r[S],r),r}))).prototype=C,C.constructor=j),(V||I)&&(M("delete"),M("has"),w&&M("get")),(I||D)&&M(S),k&&C.clear&&delete C.clear}else j=x.getConstructor(e,t,w,S),l(j.prototype,n),meta.NEED=!0;return y(j,t),P[t]=j,o(o.G+o.W+o.F*(j!=O),P),k||x.setStrong(j,t,w),j}},293:function(t,e,n){"use strict";var r=n(278);n.n(r).a},294:function(t,e,n){(e=n(22)(!1)).push([t.i,".h1__theme[data-v-3f62119b]{font-size:1.4444rem}#head__bar[data-v-3f62119b]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.2rem;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-3f62119b] .btn-back{padding-right:2rem;margin-top:unset!important}[data-v-3f62119b] .btn-back .theme--light.v-icon{color:#60c;font-size:35px}[data-v-3f62119b] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},302:function(t,e,n){"use strict";n(19),n(9),n(66),n(30),n(36);var r=n(3),o=(n(79),n(280),n(31),n(6),n(5),n(11),n(52),n(289),n(1)),c=n(279),l=n(7);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=["sm","md","lg","xl"],v=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=d.reduce((function(t,e){return t["offset"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),h=d.reduce((function(t,e){return t["order"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(h)};function _(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var x=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({cols:{type:[Boolean,String,Number],default:!1}},v,{offset:{type:[String,Number],default:null}},m,{order:{type:[String,Number],default:null}},h,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},justifySelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=x.get(l);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),Object(r.a)(t,"justify-self-".concat(n.justifySelf),n.justifySelf),t)),x.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},303:function(t,e,n){"use strict";n(19),n(9);var r=n(3),o=(n(79),n(280),n(31),n(6),n(5),n(11),n(30),n(36),n(289),n(1)),c=n(279),l=n(7);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return d.reduce((function(n,r){return n[t+Object(l.t)(r)]=e(),n}),{})}var h=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},y=m("align",(function(){return{type:String,default:null,validator:h}})),_=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},x=m("justify",(function(){return{type:String,default:null,validator:_}})),w=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},k=m("alignContent",(function(){return{type:String,default:null,validator:w}})),O={align:Object.keys(y),justify:Object.keys(x),alignContent:Object.keys(k)},j={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var r=j[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var C=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},y,{justify:{type:String,default:null,validator:_}},x,{alignContent:{type:String,default:null,validator:w}},k),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=C.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),C.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},308:function(t,e,n){"use strict";n(287);var r=n(288);e.a=Object(r.a)("layout")},317:function(t,e,n){"use strict";n(287);var r=n(288);e.a=Object(r.a)("flex")},348:function(t,e,n){var content=n(456);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("2ed54025",content,!0,{sourceMap:!1})},349:function(t,e){},455:function(t,e,n){"use strict";var r=n(348);n.n(r).a},456:function(t,e,n){(e=n(22)(!1)).push([t.i,"#page h1[data-v-68338999],#page p[data-v-68338999]{color:#60c;text-transform:uppercase}",""]),t.exports=e},457:function(t,e,n){"use strict";var r=n(349),o=n.n(r);e.default=o.a},609:function(t,e,n){"use strict";n.r(e);n(37);var r=n(282),o=n(290),c=n(296),l=n.n(c),f={components:{HeaderBar:o.a,Avatar:l.a,NavigationBar:r.a},methods:{goToChangePassword:function(){$nuxt._router.push("/admin/alterar-senha")},goToChangeData:function(){$nuxt._router.push("/admin/alterar")},goToExit:function(){localStorage.clear(),$nuxt._router.push("/login"),this.clearInfoUser()}},computed:{user:function(){return this.$store.state.user.data}},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}}},d=(n(455),n(39)),v=n(457),m=n(43),h=n.n(m),y=n(272),_=n(302),x=n(593),w=n(317),k=n(268),O=n(308),j=n(303),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page"}},[n("HeaderBar",{attrs:{title:"Meu Perfil",backPage:!0}}),t._v(" "),n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{ref:"flex",staticStyle:{"text-align":"-webkit-center"},attrs:{role:"main",xs10:"",sm8:"",md4:""}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:150}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v("Administrador")])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{large:"",color:"#6600cc",outlined:"",block:""},on:{click:t.goToChangePassword}},[t._v("\n              Alterar Senha"),n("v-icon",{attrs:{right:""}},[t._v("mdi-key")])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{large:"",color:"#6600cc",outlined:"",block:""},on:{click:t.goToChangeData}},[t._v("\n              Alterar Dados"),n("v-icon",{attrs:{right:""}},[t._v("mdi-pencil")])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{large:"",color:"red",outlined:"",block:""},on:{click:t.goToExit}},[t._v("\n              Sair"),n("v-icon",{attrs:{right:""}},[t._v("mdi-exit-to-app")])],1)],1)],1)],1)],1)],1),t._v(" "),n("client-only",[n("navigation-bar")],1)],1)}),[],!1,null,"68338999",null);"function"==typeof v.default&&Object(v.default)(component);e.default=component.exports;h()(component,{VBtn:y.a,VCol:_.a,VContainer:x.a,VFlex:w.a,VIcon:k.a,VLayout:O.a,VRow:j.a})}}]);