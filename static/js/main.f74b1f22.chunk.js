(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1q4dn",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__32MYE"}},15:function(e,t,a){e.exports={Button:"Button_Button__jQhph"}},16:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3987X",Modal:"Modal_Modal__3HZNf"}},31:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__BO4BD"}},37:function(e,t,a){},38:function(e,t,a){},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1zem8",SearchForm:"Searchbar_SearchForm__ZnKdc",SearchFormButton:"Searchbar_SearchFormButton__lqg20",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__tze4r",SearchFormInput:"Searchbar_SearchFormInput__1TwRM"}},88:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(5),o=a.n(r),s=(a(37),a(17)),l=a(4),i=(a(38),a(8)),u=a(32),m=a(27),b=a.n(m),j=a(13),h=a.n(j),d=a(28),O=a(29),g=a.n(O),p="https://pixabay.com/api/",f="22443315-0655a572bf532c2d4a9d9c050";function S(){return(S=Object(d.a)(h.a.mark((function e(t){var a,c,n,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchRequest,c=void 0===a?"":a,n=t.page,r=void 0===n?1:n,e.next=3,g.a.get("".concat(p,"?q=").concat(c,"&page=").concat(r,"&key=").concat(f,"&image_type=photo&orientation=horizontal&per_page=12"));case 3:return o=e.sent,e.abrupt("return",o.data.hits);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x={fetchPixData:function(e){return S.apply(this,arguments)}},_=a(6),v=a.n(_),y=a(1);function I(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(l.a)(a,2),r=n[0],o=n[1];return Object(y.jsx)("header",{className:v.a.Searchbar,children:Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r),o("")):i.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441!",{position:i.b.POSITION.TOP_LEFT})},className:v.a.SearchForm,children:[Object(y.jsx)("button",{type:"submit",className:v.a.SearchFormButton,children:Object(y.jsx)("span",{className:v.a.SearchFormButtonLabel,children:"Search"})}),Object(y.jsx)("input",{className:v.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var w=a(18),F=a(30),M=a.n(F),N=a(31),B=a.n(N),L=a(14),k=a.n(L);function C(e){var t=e.largeImageURL,a=e.webformatURL,c=e.tags,n=e.imgPastToModal;return Object(y.jsx)("li",{className:k.a.ImageGalleryItem,onClick:function(){return n({largeImageURL:t,tags:c})},children:Object(y.jsx)("img",{src:a,alt:c,className:k.a.ImageGalleryItemImage})})}function G(e){var t=e.searchRequest,a=e.imgPastToModal;return Object(y.jsx)("ul",{className:B.a.ImageGallery,children:t.map((function(e){return Object(c.createElement)(C,Object(w.a)(Object(w.a)({},e),{},{imgPastToModal:a,key:M.a.generate()}))}))})}var T=a(15),E=a.n(T);function P(e){var t=e.LoadMore;return(0,e.scroll)(),Object(y.jsxs)("button",{type:"button",name:"page",onClick:t,className:E.a.Button,children:[Object(y.jsx)("span",{className:E.a.styleBtn,children:"Load more"})," "]})}var R=a(16),q=a.n(R),D=document.querySelector("#modal-root");function U(e){var t=e.onClose,a=e.children;Object(c.useEffect)((function(){return console.log("Mount"),window.addEventListener("keydown",n),function(){console.log("unmount"),window.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&t()};return Object(r.createPortal)(Object(y.jsx)("div",{className:q.a.Overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(y.jsx)("div",{className:q.a.Modal,children:a})}),D)}Object(u.injectStyle)();var z=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(1),o=Object(l.a)(r,2),u=o[0],m=o[1],j=Object(c.useState)(""),h=Object(l.a)(j,2),d=h[0],O=h[1],g=Object(c.useState)(!1),p=Object(l.a)(g,2),f=p[0],S=p[1],_=Object(c.useState)(null),v=Object(l.a)(_,2),w=v[0],F=v[1],M=Object(c.useState)(!1),N=Object(l.a)(M,2),B=N[0],L=N[1],k=Object(c.useState)(!1),C=Object(l.a)(k,2),T=C[0],E=C[1],R=Object(c.useState)(""),q=Object(l.a)(R,2),D=q[0],z=q[1],H=function(){var e={searchRequest:d,page:u};S(!0),x.fetchPixData(e).then((function(e){n([].concat(Object(s.a)(a),Object(s.a)(e))),m(u+1),e.length<1?L(!0):L(!1)})).catch((function(e){return F(e.message)})).finally((function(){return S(!1)}))};Object(c.useEffect)((function(){H()}),[d]);var J=function(){E(!T)},Z=function(e){z(e),J()},K=D.largeImageURL,Q=D.tags,X=a.length>0&&a.length>11&&!f;return Object(y.jsxs)("div",{className:"container",children:[T&&Object(y.jsxs)(U,{onClose:J,imgPastToModal:Z,children:[D&&Object(y.jsx)("img",{src:K,alt:Q}),Object(y.jsx)("p",{children:Q}),Object(y.jsx)("button",{type:"button",onClick:J,children:"Close"})]}),Object(y.jsx)(I,{onSubmit:function(e){O(e),m(1),n([]),F(null)}}),Object(y.jsx)(G,{searchRequest:a,imgPastToModal:Z}),w&&Object(y.jsx)("h1",{children:"\u041e\u0448\u0438\u0431\u043a\u0430!!!"}),B&&Object(y.jsx)("h1",{children:"\u041a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e!"}),f&&Object(y.jsx)("div",{className:"Spiner",children:Object(y.jsx)(b.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:3e3})}),X&&Object(y.jsx)(P,{LoadMore:H,scroll:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}}),Object(y.jsx)(i.a,{autoClose:3e3})]})};o.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(z,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.f74b1f22.chunk.js.map