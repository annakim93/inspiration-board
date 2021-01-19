(this["webpackJsonpinspiration-board"]=this["webpackJsonpinspiration-board"]||[]).push([[0],{19:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},50:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n(20),r=n.n(o),i=(n(30),n(31),n(21)),s=n(23),l=n(3),d=n(6),u=n.n(d),j=(n(50),n(22)),b=n.n(j),h=(n(19),["bg-color-yellow","bg-color-pink","bg-color-orange"]),f=function(e){var t=h[Math.floor(Math.random()*h.length)];return Object(a.jsxs)("div",{className:"card ".concat(t),children:[Object(a.jsx)("button",{className:"delete-button",onClick:function(){return e.deleteCardCallback(e.id)},children:"X"}),Object(a.jsxs)("div",{className:"card__content ".concat(t),children:[Object(a.jsx)("p",{className:"card__content-text ".concat(t),children:e.optionalText?e.optionalText:null}),Object(a.jsx)("p",{className:"card__content-emoji ".concat(t),children:e.optionalEmoji?b.a.getUnicode(e.optionalEmoji):null})]})]})},m=n(24),p=(n(57),["","heart_eyes","beer","clap","sparkling_heart","heart_eyes_cat","dog"]),O=function(e){var t=Object(c.useState)({text:"",emoji:""}),n=Object(l.a)(t,2),o=n[0],r=n[1],i=Object(c.useState)(e.currentBoard),s=Object(l.a)(i,2),d=s[0],u=s[1];Object(c.useEffect)((function(){u(e.currentBoard)}),[e]);var j=function(e){var t=Object(m.a)({},o);t[e.target.name]=e.target.value,r(t)};return Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Add a msg using the sticky below!"}),Object(a.jsx)("div",{className:"new-card-form new-card-form__bg-color",children:Object(a.jsx)("div",{className:"card__content",children:Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addCardCallback(o,d),r({text:"",emoji:""}),u(e.currentBoard)},className:"new-card-form__bg-color",children:[Object(a.jsx)("textarea",{name:"text",onChange:j,value:o.text,placeholder:"Write your message here"}),Object(a.jsxs)("select",{name:"emoji",onChange:j,value:o.emoji,children:[Object(a.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Emoji Selection"}),p.map((function(e,t){return Object(a.jsx)("option",{children:e},t)}))]}),Object(a.jsx)("label",{htmlFor:"boards",className:"new-card-form__bg-color",children:"Destination board:"}),Object(a.jsxs)("select",{name:"boards",onChange:function(e){u(e.target.value)},value:d,children:[Object(a.jsx)("option",{value:"",disabled:!0,selected:!0,children:d}),e.studentBoards.map((function(e,t){return Object(a.jsx)("option",{children:e},t)}))]}),Object(a.jsx)("input",{type:"submit",value:"Add Inspo!",className:"new-card-form__form-button"})]})})})]})},v=function(e){var t=e.url+"boards/",n=e.url+"cards/",o=Object(c.useState)([]),r=Object(l.a)(o,2),d=r[0],j=r[1],b=Object(c.useState)([]),h=Object(l.a)(b,2),m=h[0],p=h[1],v=Object(c.useState)(null),g=Object(l.a)(v,2),x=g[0],_=g[1],w=Object(c.useState)(e.boardName),N=Object(l.a)(w,2),k=N[0],C=N[1];Object(c.useEffect)((function(){u.a.get(t).then((function(e){p(e.data.map((function(e){return e.board.name})))})).catch((function(e){_(e.message)}))}),[]),Object(c.useEffect)((function(){u.a.get(t+k+"/cards").then((function(e){var t=e.data.map((function(e){return e.card}));j(t),_(null)})).catch((function(e){_(e.message)}))}),[k]);var y=function(e){var t=d.filter((function(t){return t.id!==e}));t.length<d.length&&u.a.delete(n+e).then((function(n){_("Card #".concat(e," successfully deleted from ").concat(k,"'s board.")),j(t)})).catch((function(t){_("Failed to delete card #".concat(e,"."))}))};return Object(a.jsxs)("div",{className:"board-container",children:[Object(a.jsxs)("div",{className:"board-container__nav",children:[Object(a.jsx)("span",{children:"Current board:"}),Object(a.jsxs)("select",{name:"studentBoard",onChange:function(e){C(e.target.value)},children:[Object(a.jsx)("option",{value:"",disabled:!0,selected:!0,children:k}),m.map((function(e,t){return Object(a.jsx)("option",{children:e},t)}))]})]}),Object(a.jsxs)("div",{className:"board-container__left-side",children:[Object(a.jsxs)("h1",{className:"header__h1",children:[Object(a.jsx)("span",{children:"inspo "}),Object(a.jsx)("span",{className:"header__text--stroke",children:"board"})]}),x?Object(a.jsx)("div",{className:"alert-display",children:Object(a.jsx)("span",{children:x})}):"",Object(a.jsx)(O,{addCardCallback:function(e,n){u.a.post(t+n+"/cards",e).then((function(e){if(n===k){var t=[].concat(Object(s.a)(d),[e.data.card]);j(t)}_("Successfully added new inspo card to ".concat(n,"'s board!"))})).catch((function(e){_(e.message)}))},currentBoard:k,studentBoards:m})]}),Object(a.jsx)("div",{className:"board-container__content",children:Object(a.jsx)("div",{className:"board-container__content__cards",children:function(e){var t,n=[],c=Object(i.a)(e);try{for(c.s();!(t=c.n()).done;){var o=t.value;n.push(Object(a.jsx)(f,{id:o.id,optionalText:o.text,optionalEmoji:o.emoji,deleteCardCallback:y},o.id))}}catch(r){c.e(r)}finally{c.f()}return n}(d)})})]})},g=function(){return Object(a.jsx)("section",{children:Object(a.jsx)(v,{url:"https://inspiration-board.herokuapp.com/",boardName:"anna-kim"})})},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(a.jsx)(g,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/inspiration-board",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/inspiration-board","/service-worker.js");x?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):_(e)}))}}()}},[[58,1,2]]]);
//# sourceMappingURL=main.60a27f67.chunk.js.map