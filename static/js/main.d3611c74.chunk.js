(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},239:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(20),i=n.n(c),u=(n(101),n(23)),o=n.n(u),s=n(33),l=n(15),h=n(16),p=n(18),f=n(17),m=n(19),d=n(21),v=(n(24),{client_id:"c460a5edff31438ba358dd067c6f00a4",response_type:"token",redirect_uri:"https://tung2389.github.io/spotify-search-app/"}),j="https://accounts.spotify.com/authorize",E="https://api.spotify.com/v1/search";function b(e,t){var n=new URL(e);return n.search=new URLSearchParams(t),n}function C(){var e=function(e){var t=e.split("#");return t[0]+"?"+t[1]}(window.location.href);return new URL(e).searchParams.get("access_token")}function g(e,t){return fetch(e,{method:"GET",headers:{Authorization:"Bearer "+t}})}function O(){return(O=Object(s.a)(o.a.mark(function e(t,n){var a,r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=b(E,{q:t,type:"album"}),e.next=4,g(a,n);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}var x=function(e,t){return O.apply(this,arguments)},w=["https://tung2389.github.io/spotify-search-app/","access_token","token_type=Bearer","expires_in","#","=","&"];var y=function(e){for(var t=0;t<w.length;t++)if(-1===e.indexOf(w[t]))return!1;return!0},k=n(53),J=n.n(k),P=n(54),G=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.props.data;return r.a.createElement("div",{className:"result_card",onClick:function(){return window.open(t.external_urls.spotify)}},r.a.createElement(J.a,{elevation:4,classes:{root:e.partner_message}},r.a.createElement("img",{className:"song_image",src:t.images[1].url}),r.a.createElement("p",null,t.name),r.a.createElement("p",null,"Release date: ",t.release_date)))}}]),t}(a.Component),B=Object(P.withStyles)({result_card:{"border-radius":"8px","padding-top":"10px","padding-bottom":"10px","padding-right":"20px","padding-left":"20px"}})(G),S=(a.Component,["albums"]);var A,N=function(e){return e[S[0]].items.map(function(e){return r.a.createElement(B,{data:e,key:e.uri})})},H=n(91),R=n.n(H),L=n(92),F=n.n(L),U=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search_button"},r.a.createElement(R.a,{color:"primary","aria-label":"Search",onClick:this.props.onClick},r.a.createElement(F.a,null)))}}]),t}(a.Component),W=n(93),I=n.n(W),V=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search_bar"},r.a.createElement(I.a,{className:"input",onChange:function(t){return e.props.onChange(t.target.value)}}))}}]),t}(a.Component),X=n(94),Q=n.n(X),D=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:Q.a,className:"logo"}))}}]),t}(a.Component),M=n(95),Y=n.n(M),q=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login_button"},r.a.createElement(Y.a,{color:"primary",variant:"contained",onClick:this.props.onClick},"Login"))}}]),t}(a.Component);function Z(){window.location.href=b(j,v).href}var z=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={search_input:"",isLogin:!1,search_result:void 0},n.main_component=n.main_component.bind(Object(d.a)(Object(d.a)(n))),n.handle_change=n.handle_change.bind(Object(d.a)(Object(d.a)(n))),n.handle_fetch=n.handle_fetch.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:y(window.location.href)&&(A=C(),this.setState({isLogin:!0}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"main_component",value:function(){return void 0!==this.state.search_result?r.a.createElement("div",null,this.state.search_result):r.a.createElement("div",null)}},{key:"handle_fetch",value:function(){var e=Object(s.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isLogin||alert("You must login first to use this app"),this.state.search_input){e.next=5;break}alert("Plese enter your key word"),e.next=12;break;case 5:return e.next=7,x(this.state.search_input,A);case 7:return t=e.sent,e.next=10,N(t);case 10:n=e.sent,this.setState({search_result:n});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handle_change",value:function(e){this.setState({search_input:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(V,{onChange:this.handle_change}),r.a.createElement(U,{onClick:this.handle_fetch}),r.a.createElement(q,{onClick:Z}),this.main_component())}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,t,n){},94:function(e,t){e.exports="data:image/png;base64,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"},96:function(e,t,n){e.exports=n(239)}},[[96,1,2]]]);
//# sourceMappingURL=main.d3611c74.chunk.js.map