(this.webpackJsonpmock_api_exemple=this.webpackJsonpmock_api_exemple||[]).push([[0],{33:function(e,t,n){e.exports=n(47)},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),l=n(7),u=n.n(l),i=n(18),s=n(21),m="https://crudcrud.com/api/aa40e05fb50c437097f6218acf80dc8c/pokemons/",p=n(10),d=n(11),h=n(13),f=n(12),b=n(9),E=n(54),v=n(50),k=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(E.a.Body,null,r.a.createElement(v.a,{src:this.props.urlPhoto,rounded:!0,width:"125"}),r.a.createElement(b.b,{to:"Pokemons/"+this.props.nom+"?id="+this.props.id},r.a.createElement("h1",null,this.props.nom)))))}}]),n}(r.a.Component);var y=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1];function c(){return(c=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(m);case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,o(n),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[n.join(",")]),r.a.createElement("div",null,r.a.createElement("h1",null,"Affichage de la liste de tous les Pokemons"),n.map((function(e,t){return r.a.createElement(k,{nom:e.name,id:e._id,key:e.name+e._id,urlPhoto:e.picture})})))},g=n(20),j=n(51),O=n(52),w=n(32),P=n(53),x=n(55),C=n(19),q=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={photo:"",setErrors:{}},a.handleAdd=a.handleAdd.bind(Object(g.a)(a)),a.handlePhoto=a.handlePhoto.bind(Object(g.a)(a)),a.addPokemon=a.addPokemon.bind(Object(g.a)(a)),a}return Object(d.a)(n,[{key:"addPokemon",value:function(){var e=Object(i.a)(u.a.mark((function e(t,n,a,r){var o,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(m,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,picture:n,abilities:[{name:a},{name:r}]})});case 3:if(!(o=e.sent).ok){e.next=11;break}return e.next=7,o.json();case 7:return c=e.sent,this.props.history.push("/"),C.b.success("Ajout du Pok\xe9mon "+t),e.abrupt("return",c);case 11:throw new Error("Request failed!");case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"handleAdd",value:function(e){e.preventDefault();var t=document.getElementById("nomPokemon").value,n=document.getElementById("photoPokemon").value,a=document.getElementById("attaque1").value,r=document.getElementById("attaque2").value;this.addPokemon(t,n,a,r)}},{key:"handlePhoto",value:function(e){var t=document.getElementById("photoPokemon").value;this.setState({photo:t})}},{key:"render",value:function(){return console.log(this.props.history),r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement(w.a,null,r.a.createElement(P.a,null,r.a.createElement(P.a.Group,{controlId:"nomPokemon"},r.a.createElement(P.a.Label,null,"Nom du Pokemon"),r.a.createElement(P.a.Control,{type:"text",placeholder:"Entrer le nom du Pokemon"})),r.a.createElement(P.a.Group,{controlId:"photoPokemon"},r.a.createElement(P.a.Label,null,"URL d'une photo du Pokemon"),r.a.createElement(P.a.Control,{type:"text",placeholder:"Entrer une URL valide",onBlur:this.handlePhoto})),""!==this.state.photo&&r.a.createElement(v.a,{src:this.state.photo,rounded:!0,width:"125"}),r.a.createElement(P.a.Group,{controlId:"attaque1"},r.a.createElement(P.a.Label,null,"Nom de l'attaque 1"),r.a.createElement(P.a.Control,{type:"text",placeholder:"Entrer le nom de l'attaque 1"})),r.a.createElement(P.a.Group,{controlId:"attaque2"},r.a.createElement(P.a.Label,null,"Nom de l'attaque 2"),r.a.createElement(P.a.Control,{type:"text",placeholder:"Entrer le nom de l'attaque 2"})),r.a.createElement(x.a,{variant:"primary",type:"submit",onClick:this.handleAdd},"Enregistrer"))))))}}]),n}(r.a.Component),I=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{history:this.props.history}))}}]),n}(r.a.Component);var B=function(e){var t=Object(a.useState)({name:"",picture:"",abilities:["",""]}),n=Object(s.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(e.location.search.substring(4,e.location.search.length)),p=Object(s.a)(l,2),d=p[0],h=(p[1],Object(a.useState)("")),f=Object(s.a)(h,2),b=(f[0],f[1]);function E(){return(E=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(m+d);case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,c(n),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function k(){return(k=Object(i.a)(u.a.mark((function t(n,a,r,o){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(m+d,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,picture:a,abilities:[{name:r},{name:o}]})});case 3:if(!(c=t.sent).ok){t.next=8;break}return e.history.push("/"),C.b.success("Modification du Pok\xe9mon "+n),t.abrupt("return",c);case 8:throw new Error("Request failed!");case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function y(){return(y=Object(i.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(m+d,{method:"delete"});case 3:if(!(n=t.sent).ok){t.next=8;break}return e.history.push("/"),C.b.error("Supression du Pok\xe9mon "),t.abrupt("return",n);case 8:throw new Error("Request failed!");case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){E.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement(w.a,null,r.a.createElement(P.a,null,r.a.createElement(P.a.Group,{controlId:"nomPokemon"},r.a.createElement(P.a.Label,null,"Nom du Pokemon"),r.a.createElement(P.a.Control,{type:"text",defaultValue:o.name})," "),r.a.createElement(P.a.Group,{controlId:"photoPokemon"},r.a.createElement(P.a.Label,null,"URL d'une photo du Pokemon"),r.a.createElement(P.a.Control,{type:"text",placeholder:"Entrer une URL valide",onBlur:function(e){var t=document.getElementById("photoPokemon").value;b(t)},defaultValue:o.picture})),""!==o.picture&&r.a.createElement(v.a,{src:o.picture,rounded:!0,width:"125"}),r.a.createElement(P.a.Group,{controlId:"attaque1"},r.a.createElement(P.a.Label,null,"Nom de l'attaque 1"),r.a.createElement(P.a.Control,{type:"text",placeholder:"Entrer le nom de l'attaque 1",defaultValue:o.abilities[0].name})),r.a.createElement(P.a.Group,{controlId:"attaque2"},r.a.createElement(P.a.Label,null,"Nom de l'attaque 2"),r.a.createElement(P.a.Control,{type:"text",placeholder:"Entrer le nom de l'attaque 2",defaultValue:o.abilities[1].name})),r.a.createElement(x.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),function(e,t,n,a){k.apply(this,arguments)}(document.getElementById("nomPokemon").value,document.getElementById("photoPokemon").value,document.getElementById("attaque1").value,document.getElementById("attaque2").value)}},"Enregistrer")))),r.a.createElement("p",{className:"btn btn-danger mt-5",onClick:function(){return y.apply(this,arguments)}},"Supprimer le Pokemon")))},S=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"https://cdn.dribbble.com/users/1592487/screenshots/6678531/404.png",width:"1400px"}))}}]),n}(r.a.Component),L=n(5),N=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.b,{to:"/ajouterPokemon",className:"btn btn-primary mt-5"},"Ajouter un Pokemon"))}}]),n}(r.a.Component),A=(n(45),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.b,{to:"/",className:"btn btn-primary mt-5"},"Retour \xe0 la liste de Pok\xe9mons"))}}]),n}(r.a.Component));var R=function(){var e=Object(L.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{autoClose:3e3,hideProgressBar:!0}),r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/",exact:!0,component:y}),r.a.createElement(L.a,{path:"/ajouterPokemon",component:I}),r.a.createElement(L.a,{path:"/Pokemons/:nom",component:B}),r.a.createElement(L.a,{component:S})),"/ajouterPokemon"!=e.pathname&&!e.pathname.startsWith("/Pokemons")&&r.a.createElement(N,null),"/"!=e.pathname&&r.a.createElement(A,null),r.a.createElement("br",null))},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(46);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b.a,null,r.a.createElement(R,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):F(t,e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.80964903.chunk.js.map