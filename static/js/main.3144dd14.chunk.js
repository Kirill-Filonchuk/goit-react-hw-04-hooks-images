(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{15:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1q4dn",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__32MYE"}},16:function(e,t,a){e.exports={Button:"Button_Button__jQhph"}},17:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3987X",Modal:"Modal_Modal__3HZNf"}},32:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__BO4BD"}},38:function(e,t,a){},39:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=(a(38),a(18)),i=a(5),l=a(6),h=a(8),u=a(7),m=(a(39),a(10)),d=a(33),p=a(28),b=a.n(p),g=a(14),j=a.n(g),f=a(29),x=a(30),y=a.n(x),O="https://pixabay.com/api/",S="22443315-0655a572bf532c2d4a9d9c050";function v(){return(v=Object(f.a)(j.a.mark((function e(t){var a,n,r,o,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchRequest,n=void 0===a?"":a,r=t.page,o=void 0===r?1:r,e.next=3,y.a.get("".concat(O,"?q=").concat(n,"&page=").concat(o,"&key=").concat(S,"&image_type=photo&orientation=horizontal&per_page=12"));case 3:return c=e.sent,e.abrupt("return",c.data.hits);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I={fetchPixData:function(e){return v.apply(this,arguments)}},_=a(9),M=a.n(_),w=a(1),T=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={pixabeyToSearch:""},e.handlSearchChange=function(t){e.setState({pixabeyToSearch:t.currentTarget.value.toLowerCase()})},e.handleSabmit=function(t){t.preventDefault(),""!==e.state.pixabeyToSearch.trim()?(e.props.onSubmit(e.state.pixabeyToSearch),e.setState({pixabeyToSearch:""})):m.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441!",{position:m.b.POSITION.TOP_LEFT})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(w.jsx)("header",{className:M.a.Searchbar,children:Object(w.jsxs)("form",{onSubmit:this.handleSabmit,className:M.a.SearchForm,children:[Object(w.jsx)("button",{type:"submit",className:M.a.SearchFormButton,children:Object(w.jsx)("span",{className:M.a.SearchFormButtonLabel,children:"Search"})}),Object(w.jsx)("input",{className:M.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.pixabeyToSearch,onChange:this.handlSearchChange})]})})}}]),a}(n.Component),k=a(19),P=a(31),C=a.n(P),D=a(32),L=a.n(D),B=a(15),F=a.n(B);function N(e){var t=e.largeImageURL,a=e.webformatURL,n=e.tags,r=e.imgPastToModal;return Object(w.jsx)("li",{className:F.a.ImageGalleryItem,onClick:function(){return r({largeImageURL:t,tags:n})},children:Object(w.jsx)("img",{src:a,alt:n,className:F.a.ImageGalleryItemImage})})}function R(e){var t=e.searchRequest,a=e.imgPastToModal;return Object(w.jsx)("ul",{className:L.a.ImageGallery,children:t.map((function(e){return Object(n.createElement)(N,Object(k.a)(Object(k.a)({},e),{},{imgPastToModal:a,key:C.a.generate()}))}))})}var q=a(16),G=a.n(q);function E(e){var t=e.LoadMore;return(0,e.scroll)(),Object(w.jsxs)("button",{type:"button",name:"page",onClick:t,className:G.a.Button,children:[Object(w.jsx)("span",{className:G.a.styleBtn,children:"Load more"})," "]})}var U=a(17),A=a.n(U),K=document.querySelector("#modal-root"),z=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).hendleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.hendleClickBackdrope=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.hendleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.hendleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(w.jsx)("div",{className:A.a.Overlay,onClick:this.hendleClickBackdrope,children:Object(w.jsx)("div",{className:A.a.Modal,children:this.props.children})}),K)}}]),a}(n.Component);Object(d.injectStyle)();var H=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={pixData:[],page:1,searchRequest:"",isLoaded:!1,error:null,isTherePix:!1,showModal:!1,imgInModal:""},e.fetchPixData=function(){var t=e.state,a={searchRequest:t.searchRequest,page:t.page};e.setState({isLoaded:!0}),I.fetchPixData(a).then((function(t){e.setState((function(e){return{pixData:[].concat(Object(s.a)(e.pixData),Object(s.a)(t)),page:e.page+1}})),t.length<1?e.setState({isTherePix:!0}):e.setState({isTherePix:!1})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoaded:!1})}))},e.onSubmit=function(t){console.log("App-",t),e.setState({searchRequest:t,page:1,pixData:[],error:null})},e.togleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.imgPastToModal=function(t){e.setState({imgInModal:t}),e.togleModal()},e.scroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchPixData()}},{key:"componentDidUpdate",value:function(e,t){t.searchRequest!==this.state.searchRequest&&this.fetchPixData()}},{key:"render",value:function(){var e=this.state,t=e.pixData,a=e.isLoaded,n=e.isTherePix,r=e.error,o=this.state.imgInModal,c=o.largeImageURL,s=o.tags,i=t.length>0&&t.length>11&&!a;return Object(w.jsxs)("div",{className:"container",children:[this.state.showModal&&Object(w.jsxs)(z,{onClose:this.togleModal,imgPastToModal:this.imgPastToModal,children:[this.state.imgInModal&&Object(w.jsx)("img",{src:c,alt:s}),Object(w.jsx)("p",{children:s}),Object(w.jsx)("button",{type:"button",onClick:this.togleModal,children:"Close"})]}),Object(w.jsx)(T,{onSubmit:this.onSubmit}),Object(w.jsx)(R,{searchRequest:t,imgPastToModal:this.imgPastToModal}),r&&Object(w.jsx)("h1",{children:"\u041e\u0448\u0438\u0431\u043a\u0430!!!"}),n&&Object(w.jsx)("h1",{children:"\u041a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e!"}),a&&Object(w.jsx)("div",{className:"Spiner",children:Object(w.jsx)(b.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:3e3})}),i&&Object(w.jsx)(E,{LoadMore:this.fetchPixData,scroll:this.scroll}),Object(w.jsx)(m.a,{autoClose:3e3})]})}}]),a}(n.Component);c.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(H,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1zem8",SearchForm:"Searchbar_SearchForm__ZnKdc",SearchFormButton:"Searchbar_SearchFormButton__lqg20",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__tze4r",SearchFormInput:"Searchbar_SearchFormInput__1TwRM"}}},[[89,1,2]]]);
//# sourceMappingURL=main.3144dd14.chunk.js.map