(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(59),a(32));a(60),a(61),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);var s=function(){return r.a.createElement("div",{className:"area"},r.a.createElement("ul",{className:"circles"},r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null)))};a(62);a(63);var u=a(8);var i=function(){return r.a.createElement("div",{className:"buttonWrapper"},r.a.createElement("div",{className:"btn-group"},r.a.createElement(u.b,{to:"/LinkWindow",className:"buttonS"},"DemoChat")))},m=a(9),d=a(6),p=(a(72),Object(n.createContext)()),f=function(e){var t=e.reducer,a=e.appState,c=e.children;return r.a.createElement(p.Provider,{value:Object(n.useReducer)(t,a)},c)},E=function(){return Object(n.useContext)(p)};var g=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(""),s=Object(d.a)(l,2),i=s[0],m=s[1],p=E(),f=Object(d.a)(p,2),g=(f[0],f[1]);return localStorage.setItem("name",{userName:i}),console.log(localStorage.getItem("name")),r.a.createElement("div",{className:"LinkWindow"},r.a.createElement("div",{className:"minorLinkWindowWrapper"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),fetch("/generateRoomId",{method:"POST",body:JSON.stringify({userName:i,tokenValue:c}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log(t),console.log(c),t.success&&(g({type:"passName",payload:{userName:i}}),e.history.push("/rooms/".concat(c)))}).catch(function(e){return console.error("Error:",e)})}},r.a.createElement("div",null,r.a.createElement("input",{type:"text",required:!0,value:i,onChange:function(e){return m(e.target.value)}})," \u2190Type your nick name"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:c,onChange:function(e){return o(e.target.value)}})," \u2190Please enter your token here"),r.a.createElement("input",{onClick:function(){fetch("/createRoomId",{method:"POST",body:JSON.stringify({createRoomId:"Id"}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log(JSON.stringify(e)),o(e.roomId)}).catch(function(e){return console.error("Error:",e)})},type:"button",value:"Generate"}),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement(u.b,{to:"/",className:"getToMain"},"Get Back")))},v=(a(73),a(30)),b=a.n(v),h=(a(103),b()()),N=[],y=0,O=[];var j=function(e,t,a){var c=e.match,o=E(),l=Object(d.a)(o,1)[0],s=Object(n.useState)(l.setName.userName),u=Object(d.a)(s,1)[0],i=Object(n.useState)(0),m=Object(d.a)(i,2),p=(m[0],m[1]),f=Object(n.useState)([]),g=Object(d.a)(f,2),v=g[0],b=g[1],j=Object(n.useState)([]),S=Object(d.a)(j,2),k=(S[0],S[1]),w=Object(n.useRef)(null),C=c.params.id;return Object(n.useEffect)(function(){fetch("/messages/".concat(C),{method:"POST",body:JSON.stringify({name:u}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){e.messages.reverse(),b(e.messages)}).catch(function(e){return console.error("Error:",e)}),h.on("message",function(e){N.push(e),p(y+1),y++}),h.on("name",function(e){e&&(O=e,k(y+1),y++)}),h.on("updateusers",function(e){if(e){var t=e;console.log(t),O=t,e&&(k(y+1),y++)}}),h.emit("subscribe",C),h.emit("name",{name:u,room:C})},[]),Object(n.useEffect)(function(){w.current.getBoundingClientRect().height,w.current.scrollTop=w.current.scrollHeight}),r.a.createElement("div",{className:"gridWrapper"},r.a.createElement("div",{className:"original-grid-container"},r.a.createElement("div",{className:"NickNamesArea"},O.map(function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("div",{className:"ChatArea",ref:w},v.map(function(e,t){return r.a.createElement("div",{className:"messageBubble",key:t},r.a.createElement("div",{className:"userName"},e.name),r.a.createElement("div",{className:"messageDate"},e.date.toString().slice(11,-8)),r.a.createElement("br",null),e.message)}),N.map(function(e,t){return r.a.createElement("div",{className:"messageBubble",key:t+"socket"},r.a.createElement("div",{className:"userName"},e.name),r.a.createElement("div",{className:"messageDate"},e.date.toString().slice(11,-8)),r.a.createElement("br",null),e.message)})),r.a.createElement("div",{className:"ChatInputArea"},r.a.createElement("div",{className:"messageInputWrapper"},r.a.createElement("textarea",{className:"messageTypingSpot",type:"text",autoFocus:!0,onKeyUp:function(e){"Enter"===e.key&&(e.target.value.length>1&&h.emit("sendMessage",{room:C,message:e.target.value,date:new Date,name:u}),e.target.value="")}})))))};o.a.render(r.a.createElement(function(){return r.a.createElement(f,{appState:{setName:[],test:"fff"},reducer:function(e,t){switch(t.type){case"passName":return Object(l.a)({},e,{setName:t.payload});case"testing":return Object(l.a)({},e,{test:t.payload});default:return e}}},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(m.a,{exact:!0,path:"/",component:i}),r.a.createElement(m.a,{path:"/LinkWindow",component:g}),r.a.createElement(m.a,{path:"/rooms/:id",component:j}))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,t,a){e.exports=a(111)},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.58b09c4e.chunk.js.map