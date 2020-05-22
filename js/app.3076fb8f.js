(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5d9c2b81"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=n);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",c.name="ChunkLoadError",c.type=n,c.request=r,a[1](c)}o[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/toma-decisiones/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i=(a("034f"),a("2877")),s={},l=Object(i["a"])(s,o,r,!1,null,null,null),c=l.exports,u=a("9483");Object(u["a"])("".concat("/toma-decisiones/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var d=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-4"},[a("h3",[t._v("Toma de decisiones")]),a("b-row",[a("b-col",[a("b-form-group",{attrs:{description:"Las columnas son los datos verticales de una tabla",label:"Cantidad de columnas","label-for":"cols"}},[a("b-form-input",{attrs:{type:"number",min:"1",max:"50",id:"cols"},model:{value:t.cols,callback:function(e){t.cols=t._n(e)},expression:"cols"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{description:"Las filas son los datos horizontales de una tabla",label:"Cantidad de filas","label-for":"rows"}},[a("b-form-input",{attrs:{type:"number",min:"1",max:"50",id:"rows"},model:{value:t.rows,callback:function(e){t.rows=t._n(e)},expression:"rows"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"criteria",description:"Selecciona un valor",label:"Criterio de generación","label-for":"criteria"}},[a("b-form-select",{attrs:{options:t.criteriaOptions},on:{change:function(e){return t.generateResults()}},model:{value:t.criteria,callback:function(e){t.criteria=e},expression:"criteria"}})],1)],1)],1),t._e(),a("hr"),a("b-row",{staticClass:"mt-5",attrs:{id:"result"}},[a("h3",{staticClass:"text-center w-100"},[t._v("Tabla de resultados")]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"mx-auto mt-3 table table-hover table-bordered",attrs:{id:"main-table"}},[a("thead",{staticClass:"thead-dark font-weight-bold"},[a("tr",[a("th",{attrs:{rowspan:"2"}},[t._v("Alternativas")]),a("th",{attrs:{colspan:t.cols}},[t._v("Escenarios o estados")]),a("th",{attrs:{colspan:"2"}},[t._v("Totales")])]),a("tr",[t._l(t.cols,(function(e){return a("th",{key:e},[t._v("Escenario "+t._s(e))])})),a("th",[t._v("Mínimo")]),a("th",[t._v("Máximo")])],2)]),a("tbody",[t._l(t.rows,(function(e){return a("tr",{key:e},[a("td",{staticClass:"font-weight-bold"},[t._v("Alternativa "+t._s(e))]),t._l(t.cols,(function(e){return a("td",{key:e},[a("b-form-input",{attrs:{type:"number",trim:"",placeholder:"Ingresa valor"},on:{input:function(e){return t.generateResults()}}})],1)})),a("td",{staticClass:"minRow"}),a("td",{staticClass:"maxRow"})],2)})),a("tr",[a("td",{staticClass:"font-weight-bold"},[t._v("Mínimo")]),t._l(t.cols,(function(e){return a("td",{key:e,staticClass:"minCol"},[t._v("--")])})),a("td",[t._v("--")]),a("td",[t._v("--")])],2),a("tr",[a("td",{staticClass:"font-weight-bold"},[t._v("Máximo")]),t._l(t.cols,(function(e){return a("td",{key:e,staticClass:"maxCol"},[t._v("--")])})),a("td",[t._v("--")]),a("td",[t._v("--")])],2)],2)])]),void 0!=t.result?a("b-col",{staticClass:"mx-auto mt-4 text-center border border-dark p-4",attrs:{cols:"11",md:"10"}},[a("h4",[t._v("Resultado: "),a("span",{domProps:{innerHTML:t._s(t.result)}})])]):t._e()],1)],1)},p=[],h=(a("4de4"),a("7db0"),a("c975"),a("d81d"),a("a9e3"),a("96cf"),a("1da1")),m={name:"Home",data:function(){return{models:"",scenarios:"",criteria:"",criteriaOptions:[{text:"Wald (Maximin)",value:"WALD",description:"Se asigna el peor de los escenarios y se escoge el mejor"},{text:"Maximax",value:"MAXIMAX"},{text:"Savage (Perdida)",value:"SAVAGEMIN"},{text:"Savage (Ganancia)",value:"SAVAGEMAX"},{text:"Laplace",value:"LAPLACE"},{text:"Hurwicz",value:"HURWICZ"}],cols:"",rows:"",result:void 0,totals:[],totalsCols:[],totalMin:[],totalMax:[],totalMinCol:[],totalMaxCol:[],totalMinRow:[],totalMaxRow:[],newMatrizSavageMax:[]}},methods:{generateResults:function(){switch(this.getTotals(),this.criteria){case"WALD":this.wald();break;case"MAXIMAX":this.maximax();break;case"SAVAGEMIN":this.savageMin();break;case"SAVAGEMAX":this.savageMax();break;case"LAPLACE":this.laplace();break}},getTotals:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.totals=[],t.totalMin=[],t.totalMax=[],e.next=5,$.each($("#main-table tbody tr"),(function(e,a){var n=[];$.each($(a).find("input"),(function(t,e){n.push($(e).val())}));var o=Math.min.apply(Math,n),r=Math.max.apply(Math,n);t.totals.push(n),$(a).find(".minRow").html(o),$(a).find(".maxRow").html(r)}));case 5:t.getColTotals();case 6:case"end":return e.stop()}}),e)})))()},getColTotals:function(){var t=this;try{this.totalMinCol=[],this.totalMaxCol=[],this.totalsCols=[];var e=function(e){var a=t.totals.map((function(t){return Number(t[e])}));t.totalsCols.push(a);var n=Math.min.apply(Math,a.filter((function(t){return!isNaN(t)}))),o=Math.max.apply(Math,a.filter((function(t){return!isNaN(t)})));$($("#main-table tbody td.minCol")[e]).html(n),$($("#main-table tbody td.maxCol")[e]).html(o),t.totalMinCol.push(n),t.totalMaxCol.push(o)};for(var a in this.totals[0])e(a)}catch(n){console.error("getColTotals -> error",n)}},wald:function(){var t=this;$.each($("#main-table tbody tr"),(function(e,a){var n=[];$.each($(a).find("input"),(function(t,e){n.push($(e).val())}));var o=Math.min.apply(Math,n);t.totals.push(o),$(a).find("td:last-of-type").html(o),t.result=Math.max.apply(Math,t.totals)}))},maximax:function(){var t=this;$.each($("#main-table tbody tr"),(function(e,a){var n=[];$.each($(a).find("input"),(function(t,e){n.push($(e).val())}));var o=Math.max.apply(Math,n);t.totals.push(o),$(a).find("td:last-of-type").html(o),t.result=Math.min.apply(Math,t.totals)}))},savageMax:function(){var t=this;this.getColTotals();var e=[],a=[],n=[];$.each(this.totalsCols,(function(a,n){var o=n.map((function(e){return t.totalMaxCol[a]-e}));e.push(o)})),console.log("savageMax -> newMatriz",e);var o=function(t){var o=e.map((function(e){return Number(e[t])}));a.push(o);var r=Math.max.apply(Math,o.filter((function(t){return!isNaN(t)})));console.log("savageMax -> maxCol",r),n.push(r)};for(var r in e[0])o(r);var i=Math.min.apply(Math,n.filter((function(t){return!isNaN(t)&&isFinite(t)}))),s=n.indexOf(i)+1;console.log("savageMax -> min",i),this.result="Según el criterio de Savage (Ganancia) la alternativa <b>"+String(s)+"</b> es la opción que debemos seguir. <br> Aplicando en la segunda matriz min-max el resultado es: <br>"+String(i)+"</b>"},savageMin:function(){var t=this;this.getColTotals();var e=[],a=[],n=[];$.each(this.totalsCols,(function(a,n){var o=n.map((function(e){return e-t.totalMinCol[a]}));e.push(o)})),console.log("savageMin -> newMatriz",e);var o=function(t){var o=e.map((function(e){return Number(e[t])}));a.push(o);var r=Math.max.apply(Math,o.filter((function(t){return!isNaN(t)})));console.log("savageMin -> maxCol",r),n.push(r)};for(var r in e[0])o(r);console.log("savageMin -> newMatrizMin",a),console.log("savageMin -> MatrizMin",n);var i=Math.min.apply(Math,n.filter((function(t){return!isNaN(t)&&isFinite(t)}))),s=n.indexOf(i)+1;console.log("savageMin -> min",i),this.result="Según el criterio de Savage (Perdida) la alternativa <b>"+String(s)+"</b> es la opción que debemos seguir. <br> Aplicando en la segunda matriz max-min el resultado es: <br>"+String(i)+"</b>"},laplace:function(){}}},v=m,b=Object(i["a"])(v,f,p,!1,null,null,null),g=b.exports;n["default"].use(d["a"]);var M=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],x=new d["a"]({mode:"history",base:"/toma-decisiones/",routes:M}),w=x,y=a("2f62");n["default"].use(y["a"]);var C=new y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),_=a("5f5b"),A=a("b1e0");a("f9e3"),a("2dd8");window.$=window.jQuery=a("1157"),n["default"].use(_["a"]),n["default"].use(A["a"]),n["default"].config.productionTip=!1,new n["default"]({router:w,store:C,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.3076fb8f.js.map