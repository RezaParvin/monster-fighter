(this["webpackJsonpmonster-fight"]=this["webpackJsonpmonster-fight"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(12),n(3)),s=n(4),l=n(6),u=n(5),m=(n(13),n(14),function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"Monster"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?set=set2"),alt:n}),r.a.createElement("h2",null,n),r.a.createElement("p",null,a))}),h=(n(15),function(e){var t=e.monsters;return r.a.createElement("div",{className:"Monster-List"},t.map((function(e){return r.a.createElement(m,{key:e.id,name:e.name,email:e.email,id:e.id})})))}),f=(n(16),function(e){return r.a.createElement("div",{className:"filterBox"},r.a.createElement("input",{onChange:e.changeFilterText,placeholder:"Filter Monster"}))}),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={monsters:[],filterText:""},e.onChangeFilterText=function(t){e.setState({filterText:t.target.value})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.filterText,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monster Fight"),r.a.createElement(f,{changeFilterText:this.onChangeFilterText}),r.a.createElement(h,{monsters:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.b589edf8.chunk.js.map