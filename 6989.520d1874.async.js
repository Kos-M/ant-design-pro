(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6989],{8212:function(H,R,l){"use strict";l.d(R,{Z:function(){return A}});var h=l(67294),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},o=O,V=l(27029),U=function(Z,X){return h.createElement(V.Z,Object.assign({},Z,{ref:X,icon:o}))};U.displayName="EditOutlined";var A=h.forwardRef(U)},34719:function(H){H.exports={"ant-typography":"ant-typography","ant-typography-secondary":"ant-typography-secondary","ant-typography-success":"ant-typography-success","ant-typography-warning":"ant-typography-warning","ant-typography-danger":"ant-typography-danger","ant-typography-disabled":"ant-typography-disabled","ant-typography-ellipsis":"ant-typography-ellipsis","ant-typography-expand":"ant-typography-expand","ant-typography-edit":"ant-typography-edit","ant-typography-copy":"ant-typography-copy","ant-typography-copy-success":"ant-typography-copy-success","ant-typography-edit-content":"ant-typography-edit-content","ant-typography-edit-content-confirm":"ant-typography-edit-content-confirm","ant-typography-single-line":"ant-typography-single-line","ant-typography-ellipsis-single-line":"ant-typography-ellipsis-single-line","ant-typography-ellipsis-multiple-line":"ant-typography-ellipsis-multiple-line","ant-typography-rtl":"ant-typography-rtl"}},59289:function(H,R,l){"use strict";l.d(R,{Z:function(){return ot}});var h=l(22122),O=l(96156),o=l(67294),V=l(94184),U=l.n(V),A=l(42550),x=l(65632),Z=l(21687),X=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},q=function(r,i){var e=r.prefixCls,t=r.component,a=t===void 0?"article":t,s=r.className,p=r["aria-label"],c=r.setContentRef,d=r.children,f=X(r,["prefixCls","component","className","aria-label","setContentRef","children"]),u=i;return c&&((0,Z.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),u=(0,A.sQ)(i,c)),o.createElement(x.C,null,function(E){var g=E.getPrefixCls,j=E.direction,w=a,N=g("typography",e),k=U()(N,(0,O.Z)({},"".concat(N,"-rtl"),j==="rtl"),s);return o.createElement(w,(0,h.Z)({className:k,"aria-label":p,ref:u},f),d)})},F=o.forwardRef(q);F.displayName="Typography";var W=F,b=W,z=l(90484),_=l(98423),K=l(85061),J=l(6610),me=l(5991),Ee=l(10379),Ce=l(60446),ne=l(50344),xe=l(20640),be=l.n(xe),Oe=l(8212),Se=l(79508),Te=l(99165),Ze=l(4084),Ne=l(69224),Pe=l(42051),fe=l(34952),re=l(32637),ye=l(31808),ae=l(69713),Re=l(28481),ve=l(15105),Le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},De=Le,we=l(27029),he=function(r,i){return o.createElement(we.Z,Object.assign({},r,{ref:i,icon:De}))};he.displayName="EnterOutlined";var Ie=o.forwardRef(he),Ae=l(45839),je=function(r){var i=r.prefixCls,e=r["aria-label"],t=r.className,a=r.style,s=r.direction,p=r.maxLength,c=r.autoSize,d=c===void 0?!0:c,f=r.value,u=r.onSave,E=r.onCancel,g=r.onEnd,j=o.useRef(),w=o.useRef(!1),N=o.useRef(),k=o.useState(f),$=(0,Re.Z)(k,2),I=$[0],B=$[1];o.useEffect(function(){B(f)},[f]),o.useEffect(function(){if(j.current&&j.current.resizableTextArea){var C=j.current.resizableTextArea.textArea;C.focus();var m=C.value.length;C.setSelectionRange(m,m)}},[]);var G=function(m){var P=m.target;B(P.value.replace(/[\n\r]/g,""))},v=function(){w.current=!0},S=function(){w.current=!1},T=function(m){var P=m.keyCode;w.current||(N.current=P)},L=function(){u(I.trim())},M=function(m){var P=m.keyCode,ce=m.ctrlKey,pe=m.altKey,de=m.metaKey,ue=m.shiftKey;N.current===P&&!w.current&&!ce&&!pe&&!de&&!ue&&(P===ve.Z.ENTER?(L(),g==null||g()):P===ve.Z.ESC&&E())},D=function(){L()},Q=U()(i,"".concat(i,"-edit-content"),(0,O.Z)({},"".concat(i,"-rtl"),s==="rtl"),t);return o.createElement("div",{className:Q,style:a},o.createElement(Ae.Z,{ref:j,maxLength:p,value:I,onChange:G,onKeyDown:T,onKeyUp:M,onCompositionStart:v,onCompositionEnd:S,onBlur:D,"aria-label":e,autoSize:d}),o.createElement(Ie,{className:"".concat(i,"-edit-content-confirm")}))},ke=je,ie=l(73935),Me=1,Ke=3,Ue=8,y,oe={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function le(n){if(!n)return 0;var r=n.match(/^\d*(\.\d*)?/);return r?Number(r[0]):0}function ze(n){var r=Array.prototype.slice.apply(n);return r.map(function(i){return"".concat(i,": ").concat(n.getPropertyValue(i),";")}).join("")}function $e(n){var r=[];return n.forEach(function(i){var e=r[r.length-1];typeof i=="string"&&typeof e=="string"?r[r.length-1]+=i:r.push(i)}),r}var Be=function(n,r,i,e,t){y||(y=document.createElement("div"),y.setAttribute("aria-hidden","true")),y.parentNode||document.body.appendChild(y);var a=r.rows,s=r.suffix,p=s===void 0?"":s,c=window.getComputedStyle(n),d=ze(c),f=le(c.lineHeight),u=Math.floor(f)*(a+1)+le(c.paddingTop)+le(c.paddingBottom);y.setAttribute("style",d),y.style.position="fixed",y.style.left="0",y.style.height="auto",y.style.minHeight="auto",y.style.maxHeight="auto",y.style.top="-999999px",y.style.zIndex="-1000",y.style.textOverflow="clip",y.style.whiteSpace="normal",y.style.webkitLineClamp="none";var E=$e((0,ne.Z)(i));(0,ie.render)(o.createElement("div",{style:oe},o.createElement("span",{style:oe},E,p),o.createElement("span",{style:oe},e)),y);function g(){return y.offsetHeight<u}if(g())return(0,ie.unmountComponentAtNode)(y),{content:i,text:y.innerHTML,ellipsis:!1};var j=Array.prototype.slice.apply(y.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(v){var S=v.nodeType;return S!==Ue}),w=Array.prototype.slice.apply(y.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,ie.unmountComponentAtNode)(y);var N=[];y.innerHTML="";var k=document.createElement("span");y.appendChild(k);var $=document.createTextNode(t+p);k.appendChild($),w.forEach(function(v){y.appendChild(v)});function I(v){k.insertBefore(v,$)}function B(v,S){var T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,L=arguments.length>3&&arguments[3]!==void 0?arguments[3]:S.length,M=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,D=Math.floor((T+L)/2),Q=S.slice(0,D);if(v.textContent=Q,T>=L-1)for(var C=L;C>=T;C-=1){var m=S.slice(0,C);if(v.textContent=m,g()||!m)return C===S.length?{finished:!1,reactNode:S}:{finished:!0,reactNode:m}}return g()?B(v,S,D,L,D):B(v,S,T,D,M)}function G(v,S){var T=v.nodeType;if(T===Me)return I(v),g()?{finished:!1,reactNode:E[S]}:(k.removeChild(v),{finished:!0,reactNode:null});if(T===Ke){var L=v.textContent||"",M=document.createTextNode(L);return I(M),B(M,L)}return{finished:!1,reactNode:null}}return j.some(function(v,S){var T=G(v,S),L=T.finished,M=T.reactNode;return M&&N.push(M),L}),{content:N,text:y.innerHTML,ellipsis:!0}},He=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},We=(0,ye.GL)("webkitLineClamp"),Fe=(0,ye.GL)("textOverflow");function Ge(n,r){var i=n.mark,e=n.code,t=n.underline,a=n.delete,s=n.strong,p=n.keyboard,c=n.italic,d=r;function f(u,E){!u||(d=o.createElement(E,{},d))}return f(s,"strong"),f(t,"u"),f(a,"del"),f(e,"code"),f(i,"mark"),f(p,"kbd"),f(c,"i"),d}function ee(n,r,i){return n===!0||n===void 0?r:n||i&&r}var ge="...",se=function(n){(0,Ee.Z)(i,n);var r=(0,Ce.Z)(i);function i(){var e;return(0,J.Z)(this,i),e=r.apply(this,arguments),e.contentRef=o.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,a=e.context.getPrefixCls;return a("typography",t)},e.onExpandClick=function(t){var a,s=e.getEllipsis(),p=s.onExpand;e.setState({expanded:!0}),(a=p)===null||a===void 0||a(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var a=e.getEditable(),s=a.onChange;s==null||s(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,a;(a=(t=e.getEditable()).onCancel)===null||a===void 0||a.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var a=e.props,s=a.children,p=a.copyable,c=(0,h.Z)({},(0,z.Z)(p)==="object"?p:null);c.text===void 0&&(c.text=String(s)),be()(c.text||""),e.setState({copied:!0},function(){c.onCopy&&c.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var a=e.getEditable(),s=a.onStart;t&&s&&s(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){re.Z.cancel(e.rafId),e.rafId=(0,re.Z)(function(){e.syncEllipsis()})},e}return(0,me.Z)(i,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var a=this.props.children,s=this.getEllipsis(),p=this.getEllipsis(t);(a!==t.children||s.rows!==p.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),re.Z.cancel(this.rafId)}},{key:"getEditable",value:function(t){var a=this.state.edit,s=t||this.props,p=s.editable;return p?(0,h.Z)({editing:a},(0,z.Z)(p)==="object"?p:null):{editing:a}}},{key:"getEllipsis",value:function(t){var a=t||this.props,s=a.ellipsis;return s?(0,h.Z)({rows:1,expandable:!1},(0,z.Z)(s)==="object"?s:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,a=this.props,s=a.editable,p=a.copyable,c=this.getEllipsis(),d=c.rows,f=c.expandable,u=c.suffix,E=c.onEllipsis,g=c.tooltip;return u||g||s||p||f||!t||E?!1:d===1?Fe:We}},{key:"syncEllipsis",value:function(){var t=this.state,a=t.ellipsisText,s=t.isEllipsis,p=t.expanded,c=this.getEllipsis(),d=c.rows,f=c.suffix,u=c.onEllipsis,E=this.props.children;if(!(!d||d<0||!this.contentRef.current||p)&&!this.canUseCSSEllipsis()){(0,Z.Z)((0,ne.Z)(E).every(function(k){return typeof k=="string"}),"Typography","`ellipsis` should use string as children only.");var g=Be(this.contentRef.current,{rows:d,suffix:f},E,this.renderOperations(!0),ge),j=g.content,w=g.text,N=g.ellipsis;(a!==w||s!==N)&&(this.setState({ellipsisText:w,ellipsisContent:j,isEllipsis:N}),s!==N&&u&&u(N))}}},{key:"renderExpand",value:function(t){var a=this.getEllipsis(),s=a.expandable,p=a.symbol,c=this.state,d=c.expanded,f=c.isEllipsis;if(!s||!t&&(d||!f))return null;var u;return p?u=p:u=this.expandStr,o.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},u)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var a=t.icon,s=t.tooltip,p=(0,ne.Z)(s)[0]||this.editStr,c=typeof p=="string"?p:"";return o.createElement(ae.Z,{key:"edit",title:s===!1?"":p},o.createElement(fe.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":c},a||o.createElement(Oe.Z,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,a=this.props.copyable;if(!!a){var s=this.getPrefixCls(),p=a.tooltips,c=a.icon,d=Array.isArray(p)?p:[p],f=Array.isArray(c)?c:[c],u=t?ee(d[1],this.copiedStr):ee(d[0],this.copyStr),E=t?this.copiedStr:this.copyStr,g=typeof u=="string"?u:E;return o.createElement(ae.Z,{key:"copy",title:u},o.createElement(fe.Z,{className:U()("".concat(s,"-copy"),t&&"".concat(s,"-copy-success")),onClick:this.onCopyClick,"aria-label":g},t?ee(f[1],o.createElement(Se.Z,null),!0):ee(f[0],o.createElement(Te.Z,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,a=t.children,s=t.className,p=t.style,c=this.context.direction,d=this.getEditable(),f=d.maxLength,u=d.autoSize,E=d.onEnd;return o.createElement(ke,{value:typeof a=="string"?a:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:E,prefixCls:this.getPrefixCls(),className:s,style:p,direction:c,maxLength:f,autoSize:u})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(a){return a})}},{key:"renderContent",value:function(){var t=this,a=this.state,s=a.ellipsisContent,p=a.isEllipsis,c=a.expanded,d=this.props,f=d.component,u=d.children,E=d.className,g=d.type,j=d.disabled,w=d.style,N=He(d,["component","children","className","type","disabled","style"]),k=this.context.direction,$=this.getEllipsis(),I=$.rows,B=$.suffix,G=$.tooltip,v=this.getPrefixCls(),S=(0,_.Z)(N,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,K.Z)(Ne.nf))),T=this.canUseCSSEllipsis(),L=I===1&&T,M=I&&I>1&&T,D=u;if(I&&p&&!c&&!T){var Q=N.title,C=Q||"";!Q&&(typeof u=="string"||typeof u=="number")&&(C=String(u)),C=C.slice(String(s||"").length),D=o.createElement(o.Fragment,null,s,o.createElement("span",{title:C,"aria-hidden":"true"},ge),B),G&&(D=o.createElement(ae.Z,{title:G===!0?u:G},o.createElement("span",null,D)))}else D=o.createElement(o.Fragment,null,u,B);return D=Ge(this.props,D),o.createElement(Pe.Z,{componentName:"Text"},function(m){var P,ce=m.edit,pe=m.copy,de=m.copied,ue=m.expand;return t.editStr=ce,t.copyStr=pe,t.copiedStr=de,t.expandStr=ue,o.createElement(Ze.Z,{onResize:t.resizeOnNextFrame,disabled:T},o.createElement(b,(0,h.Z)({className:U()((P={},(0,O.Z)(P,"".concat(v,"-").concat(g),g),(0,O.Z)(P,"".concat(v,"-disabled"),j),(0,O.Z)(P,"".concat(v,"-ellipsis"),I),(0,O.Z)(P,"".concat(v,"-single-line"),I===1),(0,O.Z)(P,"".concat(v,"-ellipsis-single-line"),L),(0,O.Z)(P,"".concat(v,"-ellipsis-multiple-line"),M),P),E),style:(0,h.Z)((0,h.Z)({},w),{WebkitLineClamp:M?I:void 0}),component:f,ref:t.contentRef,direction:k},S),D,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),a=t.editing;return a?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var a=t.children,s=t.editable;return(0,Z.Z)(!s||typeof a=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),i}(o.Component);se.contextType=x.E_,se.defaultProps={children:""};var te=se,Ve=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},Xe=function(r){var i=r.ellipsis,e=Ve(r,["ellipsis"]),t=o.useMemo(function(){return i&&(0,z.Z)(i)==="object"?(0,_.Z)(i,["expandable","rows"]):i},[i]);return(0,Z.Z)((0,z.Z)(i)!=="object"||!i||!("expandable"in i)&&!("rows"in i),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),o.createElement(te,(0,h.Z)({},e,{ellipsis:t,component:"span"}))},Qe=Xe,Je=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},Ye=function(r,i){var e=r.ellipsis,t=r.rel,a=Je(r,["ellipsis","rel"]);(0,Z.Z)((0,z.Z)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var s=o.useRef(null);o.useImperativeHandle(i,function(){var c;return(c=s.current)===null||c===void 0?void 0:c.contentRef.current});var p=(0,h.Z)((0,h.Z)({},a),{rel:t===void 0&&a.target==="_blank"?"noopener noreferrer":t});return delete p.navigate,o.createElement(te,(0,h.Z)({},p,{ref:s,ellipsis:!!e,component:"a"}))},qe=o.forwardRef(Ye),_e=l(93355),et=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},tt=(0,_e.a)(1,2,3,4,5),nt=function(r){var i=r.level,e=i===void 0?1:i,t=et(r,["level"]),a;return tt.indexOf(e)!==-1?a="h".concat(e):((0,Z.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),a="h1"),o.createElement(te,(0,h.Z)({},t,{component:a}))},rt=nt,at=function(r){return o.createElement(te,(0,h.Z)({},r,{component:"div"}))},it=at,Y=b;Y.Text=Qe,Y.Link=qe,Y.Title=rt,Y.Paragraph=it;var ot=Y},402:function(H,R,l){"use strict";var h=l(43673),O=l.n(h),o=l(34719),V=l.n(o),U=l(22385),A=l(47673)},20640:function(H,R,l){"use strict";var h=l(11742),O={"text/plain":"Text","text/html":"Url",default:"Text"},o="Copy to clipboard: #{key}, Enter";function V(A){var x=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return A.replace(/#{\s*key\s*}/g,x)}function U(A,x){var Z,X,q,F,W,b,z=!1;x||(x={}),Z=x.debug||!1;try{q=h(),F=document.createRange(),W=document.getSelection(),b=document.createElement("span"),b.textContent=A,b.style.all="unset",b.style.position="fixed",b.style.top=0,b.style.clip="rect(0, 0, 0, 0)",b.style.whiteSpace="pre",b.style.webkitUserSelect="text",b.style.MozUserSelect="text",b.style.msUserSelect="text",b.style.userSelect="text",b.addEventListener("copy",function(K){if(K.stopPropagation(),x.format)if(K.preventDefault(),typeof K.clipboardData=="undefined"){Z&&console.warn("unable to use e.clipboardData"),Z&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var J=O[x.format]||O.default;window.clipboardData.setData(J,A)}else K.clipboardData.clearData(),K.clipboardData.setData(x.format,A);x.onCopy&&(K.preventDefault(),x.onCopy(K.clipboardData))}),document.body.appendChild(b),F.selectNodeContents(b),W.addRange(F);var _=document.execCommand("copy");if(!_)throw new Error("copy command was unsuccessful");z=!0}catch(K){Z&&console.error("unable to copy using execCommand: ",K),Z&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(x.format||"text",A),x.onCopy&&x.onCopy(window.clipboardData),z=!0}catch(J){Z&&console.error("unable to copy using clipboardData: ",J),Z&&console.error("falling back to prompt"),X=V("message"in x?x.message:o),window.prompt(X,A)}}finally{W&&(typeof W.removeRange=="function"?W.removeRange(F):W.removeAllRanges()),b&&document.body.removeChild(b),q()}return z}H.exports=U},11742:function(H){H.exports=function(){var R=document.getSelection();if(!R.rangeCount)return function(){};for(var l=document.activeElement,h=[],O=0;O<R.rangeCount;O++)h.push(R.getRangeAt(O));switch(l.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":l.blur();break;default:l=null;break}return R.removeAllRanges(),function(){R.type==="Caret"&&R.removeAllRanges(),R.rangeCount||h.forEach(function(o){R.addRange(o)}),l&&l.focus()}}}}]);
