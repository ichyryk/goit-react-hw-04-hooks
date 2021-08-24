(this["webpackJsonpgoit-react-hw-04-hooks"]=this["webpackJsonpgoit-react-hw-04-hooks"]||[]).push([[0],{17:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1P7Nb"}},18:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},31:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},32:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},34:function(e,t,a){e.exports={loader:"Loader_loader__1j2Bs"}},43:function(e,t,a){},7:function(e,t,a){e.exports={SearchForm:"SearchBar_SearchForm__1k1JW",SearchForm_button:"SearchBar_SearchForm_button__lS3c7",SearchForm_button_label:"SearchBar_SearchForm_button_label__2V9MA",SearchForm_input:"SearchBar_SearchForm_input__Hbv-v"}},89:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(5),l=a.n(o),i=(a(43),a(6)),s=a.n(i),u=a(19),m=a(10),b=a(4),h=a(14),j=(a(45),a(29)),d=a(36).a.div(n||(n=Object(j.a)(["\n  background-color: #e9f043;\n  padding: 10px;\n"]))),p=a(1),f=function(e){var t=e.children;return Object(p.jsx)(d,{children:t})},O=a(11),g=a(12),_=a(15),v=a(13);function x(){h.b.error("Please enter a valid request")}var y=a(7),S=a.n(y),k=function(e){Object(_.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pictureName:""},e.handleNameChange=function(t){e.setState({pictureName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.pictureName.trim()?(e.props.onSubmit(e.state.pictureName),e.setState({pictureName:""})):x()},e}return Object(g.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:S.a.SearchBar,children:Object(p.jsxs)("form",{className:S.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:S.a.SearchForm_button,children:Object(p.jsx)("span",{className:S.a.SearchForm_button_label,children:"Search"})}),Object(p.jsx)("input",{className:S.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.pictureName,onChange:this.handleNameChange})]})})}}]),a}(r.Component),w=a(17),I=a.n(w),C=function(e){var t=e.webformatURL,a=e.id,n=e.tags,r=e.largeImageURL,c=e.handleImageClick;return Object(p.jsx)("li",{className:I.a.ImageGalleryItem,children:Object(p.jsx)("img",{src:t,alt:n,className:I.a.ImageGalleryItem_image,onClick:function(){c(r,n)}})},a)},N=a(31),F=a.n(N);var B=function(e){var t=e.pictures,a=e.handleImageClick;return Object(p.jsx)("ul",{className:F.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(p.jsx)(C,{webformatURL:n,largeImageURL:r,tags:c,handleImageClick:a},t)}))})},G=a(18),L=a.n(G),M=document.querySelector("#modal-root"),R=function(e){Object(_.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(p.jsx)("div",{className:L.a.Overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:L.a.Modal,children:this.props.children})}),M)}}]),a}(r.Component);R.defaultProps={onClose:function(){return null},children:null};var E=R,U=a(20),D=a(37),T=a(32),P=a.n(T),A=["onClick"],J=function(e){var t=e.onClick,a=Object(D.a)(e,A);return Object(p.jsx)("button",Object(U.a)(Object(U.a)({className:P.a.Button,type:"button",onClick:t},a),{},{children:Object(p.jsx)("span",{children:"Load more"})}))};J.defaultProps={onClick:function(){return null}};a(50);var W=a(33),q=a.n(W),K=a(34),H=a.n(K),V=function(){return Object(p.jsx)("div",{className:H.a.loader,children:Object(p.jsx)(q.a,{type:"Rings",color:"#00BFFF",height:300,width:300})})},z=a(35),Q=a.n(z),X=function(){var e=Object(m.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://pixabay.com/api","22783665-26f30cb64115ee9487502848d",e.next=4,Q.a.get("".concat("https://pixabay.com/api","/?key=").concat("22783665-26f30cb64115ee9487502848d","&q=").concat(t,"&image_type=photo&page&per_page=12&page=").concat(a));case 4:return n=e.sent,e.next=7,n.data.hits;case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Y="idle",Z="pending",$="resolved",ee="rejected";function te(){var e=Object(r.useState)(),t=Object(b.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),o=Object(b.a)(c,2),l=o[0],i=o[1],j=Object(r.useState)(Y),d=Object(b.a)(j,2),O=d[0],g=d[1],_=Object(r.useState)(1),v=Object(b.a)(_,2),y=v[0],S=v[1],w=Object(r.useState)(null),I=Object(b.a)(w,2),C=I[0],N=I[1],F=Object(r.useState)(""),G=Object(b.a)(F,2),L=G[0],M=G[1],R=Object(r.useState)(!1),U=Object(b.a)(R,2),D=(U[0],U[1]);Object(r.useEffect)((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X(a,y);case 3:if(0!==(t=e.sent).length){e.next=6;break}throw new Error;case 6:i((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t))})),g($),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),g(ee),x();case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}a&&(g(Z),setTimeout((function(){!function(){e.apply(this,arguments)}()}),500))}),[y,a]),Object(r.useEffect)((function(){y>1&&setTimeout((function(){window.scrollBy({top:document.documentElement.scrollHeight,behavior:"smooth"})}),1e3)}),[l,y]);var T=l.length>0;return Object(p.jsxs)(f,{children:[Object(p.jsx)(h.a,{autoClose:4e3}),Object(p.jsx)(k,{onSubmit:function(e){""!==e.trim()?(n(null),S(1),i([]),n(e)):x()}}),O===Y&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("h2",{children:"Waiting for pictures..."})}),O===Z&&Object(p.jsx)(V,{}),Object(p.jsx)(B,{pictures:l,handleImageClick:function(e,t){N(e),M(t),D(!0)}}),T&&O===$&&Object(p.jsx)(J,{onClick:function(){S((function(e){return e+1}))},"aria-label":"add contact"}),C&&Object(p.jsx)(E,{onClose:function(){N(null)},children:Object(p.jsx)("img",{src:C,alt:L})})]})}l.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(te,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.b0ab3d08.chunk.js.map