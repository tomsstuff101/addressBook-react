(window["webpackJsonpaddress-book"]=window["webpackJsonpaddress-book"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),c=a.n(l),r=(a(13),a(1)),s=a(2),i=a(4),m=a(3),u=a(5),d=(a(14),void 0),h=function(){return o.a.createElement("div",{className:"title"},o.a.createElement("h1",null,"Address Book"))},p=function(e){console.log("list..."),console.log("props.theState --\x3e  ".concat(e.theState.contacts[0].name));var t=e.theState.contacts;return o.a.createElement("div",null,t.map((function(e){return o.a.createElement("div",{key:e.id,className:"listWrapper"},o.a.createElement("div",{className:"listBlock"},o.a.createElement("div",{className:"nameKeep"},o.a.createElement("li",null,e.name),o.a.createElement("input",{type:"checkbox",name:"toDelete",value:e.toDelete,onChange:function(){return d.checkDeleteHandler()}})),o.a.createElement("li",null,e.mobile)))})))},b=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={contacts:[{id:0,name:"no records yet",mobile:"",toDelete:!1}]},a.formHandler=function(e){console.log("add...."),e.preventDefault(),console.log(e.target.name.value),console.log(e.target.mobile.value);var t=a.state.contacts,n={id:t.length,name:e.target.name.value,mobile:e.target.mobile.value,toDelete:!1};console.log("newContact --\x3e  ".concat(n.name,"  ").concat(n.mobile)),t.push(n),a.setState({contacts:t}),console.log("added new contact --\x3e ".concat(a.state.contacts," ")),e.target.name.value="",e.target.mobile.value=""},a.checkDeleteHandler=function(e){console.log("check delete ticked...."),console.log("event target --\x3e  ".concat(e))},a.theDeleteHandler=function(){console.log("delete....");var e=[];a.state.contacts.forEach((function(t,a){!0===t.toDelete&&e.push(a),console.log("deleteArr --\x3e  ".concat(e))}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"addressBookWrapper"},o.a.createElement(h,null),o.a.createElement("form",{className:"newNumbers",onSubmit:this.formHandler},o.a.createElement("input",{type:"text",name:"name",placeholder:"name",className:"formInput"}),o.a.createElement("input",{type:"number",name:"mobile",placeholder:"mobile number",className:"formInput"}),o.a.createElement("button",{className:"submit",type:"submit"},"add")),o.a.createElement(p,{theState:this.state,checkHandler:this.checkDeleteHandler}),o.a.createElement("div",{className:"deleteButt",onClick:this.theDeleteHandler},"Delete"))}}]),t}(o.a.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(b,null)}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8964efc7.chunk.js.map