(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3284],{16894:function(Z,D,t){"use strict";var E=t(12862),B=t(39629);D.ZP=B.Z},74665:function(Z){Z.exports={title:"antd-pro-pages-profile-basic-style-title"}},19422:function(Z){Z.exports={"ant-descriptions-header":"ant-descriptions-header","ant-descriptions-title":"ant-descriptions-title","ant-descriptions-extra":"ant-descriptions-extra","ant-descriptions-view":"ant-descriptions-view","ant-descriptions-row":"ant-descriptions-row","ant-descriptions-item-label":"ant-descriptions-item-label","ant-descriptions-item-no-colon":"ant-descriptions-item-no-colon","ant-descriptions-item-no-label":"ant-descriptions-item-no-label","ant-descriptions-item-content":"ant-descriptions-item-content","ant-descriptions-item":"ant-descriptions-item","ant-descriptions-item-container":"ant-descriptions-item-container","ant-descriptions-middle":"ant-descriptions-middle","ant-descriptions-small":"ant-descriptions-small","ant-descriptions-bordered":"ant-descriptions-bordered","ant-descriptions-rtl":"ant-descriptions-rtl"}},29969:function(Z,D,t){"use strict";t.r(D),t.d(D,{default:function(){return ee}});var E=t(72012),B=t(39144),F=t(48736),s=t(27049),ne=t(98858),v=t(4914),ae=t(54029),P=t(79166),X=t(15103),K=t(16894),f=t(67294),I=t(48910),k=t(3182),R=t(94043),j=t.n(R);function q(){return A.apply(this,arguments)}function A(){return A=(0,k.Z)(j().mark(function N(){return j().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",(0,I.WY)("/api/profile/basic"));case 1:case"end":return C.stop()}},N)})),A.apply(this,arguments)}var _=t(74665),U=t.n(_),r=t(85893),M=[{title:"\u65F6\u95F4",dataIndex:"time",key:"time"},{title:"\u5F53\u524D\u8FDB\u5EA6",dataIndex:"rate",key:"rate"},{title:"\u72B6\u6001",dataIndex:"status",key:"status",render:function(S){return S==="success"?(0,r.jsx)(P.Z,{status:"success",text:"\u6210\u529F"}):(0,r.jsx)(P.Z,{status:"processing",text:"\u8FDB\u884C\u4E2D"})}},{title:"\u64CD\u4F5C\u5458ID",dataIndex:"operator",key:"operator"},{title:"\u8017\u65F6",dataIndex:"cost",key:"cost"}],G=function(){var S=(0,I.QT)(function(){return q()}),C=S.data,z=S.loading,n=C||{basicGoods:[],basicProgress:[]},e=n.basicGoods,a=n.basicProgress,l=[];if(e.length){var c=0,i=0;e.forEach(function(p){c+=Number(p.num),i+=Number(p.amount)}),l=e.concat({id:"\u603B\u8BA1",num:c,amount:i})}var o=function(d,u,m){var g={children:d,props:{}};return m===e.length&&(g.props.colSpan=0),g},x=[{title:"\u5546\u54C1\u7F16\u53F7",dataIndex:"id",key:"id",render:function(d,u,m){return m<e.length?(0,r.jsx)("span",{children:d}):{children:(0,r.jsx)("span",{style:{fontWeight:600},children:"\u603B\u8BA1"}),props:{colSpan:4}}}},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"name",key:"name",render:o},{title:"\u5546\u54C1\u6761\u7801",dataIndex:"barcode",key:"barcode",render:o},{title:"\u5355\u4EF7",dataIndex:"price",key:"price",align:"right",render:o},{title:"\u6570\u91CF\uFF08\u4EF6\uFF09",dataIndex:"num",key:"num",align:"right",render:function(d,u,m){return m<e.length?d:(0,r.jsx)("span",{style:{fontWeight:600},children:d})}},{title:"\u91D1\u989D",dataIndex:"amount",key:"amount",align:"right",render:function(d,u,m){return m<e.length?d:(0,r.jsx)("span",{style:{fontWeight:600},children:d})}}];return(0,r.jsx)(X.Z,{children:(0,r.jsxs)(B.Z,{bordered:!1,children:[(0,r.jsxs)(v.Z,{title:"\u9000\u6B3E\u7533\u8BF7",style:{marginBottom:32},children:[(0,r.jsx)(v.Z.Item,{label:"\u53D6\u8D27\u5355\u53F7",children:"1000000000"}),(0,r.jsx)(v.Z.Item,{label:"\u72B6\u6001",children:"\u5DF2\u53D6\u8D27"}),(0,r.jsx)(v.Z.Item,{label:"\u9500\u552E\u5355\u53F7",children:"1234123421"}),(0,r.jsx)(v.Z.Item,{label:"\u5B50\u8BA2\u5355",children:"3214321432"})]}),(0,r.jsx)(s.Z,{style:{marginBottom:32}}),(0,r.jsxs)(v.Z,{title:"\u7528\u6237\u4FE1\u606F",style:{marginBottom:32},children:[(0,r.jsx)(v.Z.Item,{label:"\u7528\u6237\u59D3\u540D",children:"\u4ED8\u5C0F\u5C0F"}),(0,r.jsx)(v.Z.Item,{label:"\u8054\u7CFB\u7535\u8BDD",children:"18100000000"}),(0,r.jsx)(v.Z.Item,{label:"\u5E38\u7528\u5FEB\u9012",children:"\u83DC\u9E1F\u4ED3\u50A8"}),(0,r.jsx)(v.Z.Item,{label:"\u53D6\u8D27\u5730\u5740",children:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u4E07\u5858\u8DEF18\u53F7"}),(0,r.jsx)(v.Z.Item,{label:"\u5907\u6CE8",children:"\u65E0"})]}),(0,r.jsx)(s.Z,{style:{marginBottom:32}}),(0,r.jsx)("div",{className:U().title,children:"\u9000\u8D27\u5546\u54C1"}),(0,r.jsx)(K.ZP,{style:{marginBottom:24},pagination:!1,search:!1,loading:z,options:!1,toolBarRender:!1,dataSource:l,columns:x,rowKey:"id"}),(0,r.jsx)("div",{className:U().title,children:"\u9000\u8D27\u8FDB\u5EA6"}),(0,r.jsx)(K.ZP,{style:{marginBottom:16},pagination:!1,loading:z,search:!1,options:!1,toolBarRender:!1,dataSource:a,columns:M})]})})},ee=G},4914:function(Z,D,t){"use strict";t.d(D,{K:function(){return M},Z:function(){return z}});var E=t(96156),B=t(28481),F=t(90484),s=t(67294),ne=t(94184),v=t.n(ne),ae=t(50344),P=t(24308),X=t(21687),K=t(65632),f=t(22122);function I(n){return n!=null}var k=function(e){var a=e.itemPrefixCls,l=e.component,c=e.span,i=e.className,o=e.style,x=e.labelStyle,p=e.contentStyle,d=e.bordered,u=e.label,m=e.content,g=e.colon,b=l;if(d){var y;return s.createElement(b,{className:v()((y={},(0,E.Z)(y,"".concat(a,"-item-label"),I(u)),(0,E.Z)(y,"".concat(a,"-item-content"),I(m)),y),i),style:o,colSpan:c},I(u)&&s.createElement("span",{style:x},u),I(m)&&s.createElement("span",{style:p},m))}return s.createElement(b,{className:v()("".concat(a,"-item"),i),style:o,colSpan:c},s.createElement("div",{className:"".concat(a,"-item-container")},u&&s.createElement("span",{className:v()("".concat(a,"-item-label"),(0,E.Z)({},"".concat(a,"-item-no-colon"),!g)),style:x},u),m&&s.createElement("span",{className:v()("".concat(a,"-item-content")),style:p},m)))},R=k;function j(n,e,a){var l=e.colon,c=e.prefixCls,i=e.bordered,o=a.component,x=a.type,p=a.showLabel,d=a.showContent,u=a.labelStyle,m=a.contentStyle;return n.map(function(g,b){var y=g.props,w=y.label,Q=y.children,O=y.prefixCls,L=O===void 0?c:O,T=y.className,h=y.style,Y=y.labelStyle,W=y.contentStyle,H=y.span,J=H===void 0?1:H,$=g.key;return typeof o=="string"?s.createElement(R,{key:"".concat(x,"-").concat($||b),className:T,style:h,labelStyle:(0,f.Z)((0,f.Z)({},u),Y),contentStyle:(0,f.Z)((0,f.Z)({},m),W),span:J,colon:l,component:o,itemPrefixCls:L,bordered:i,label:p?w:null,content:d?Q:null}):[s.createElement(R,{key:"label-".concat($||b),className:T,style:(0,f.Z)((0,f.Z)((0,f.Z)({},u),h),Y),span:1,colon:l,component:o[0],itemPrefixCls:L,bordered:i,label:w}),s.createElement(R,{key:"content-".concat($||b),className:T,style:(0,f.Z)((0,f.Z)((0,f.Z)({},m),h),W),span:J*2-1,component:o[1],itemPrefixCls:L,bordered:i,content:Q})]})}var q=function(e){var a=s.useContext(M),l=e.prefixCls,c=e.vertical,i=e.row,o=e.index,x=e.bordered;return c?s.createElement(s.Fragment,null,s.createElement("tr",{key:"label-".concat(o),className:"".concat(l,"-row")},j(i,e,(0,f.Z)({component:"th",type:"label",showLabel:!0},a))),s.createElement("tr",{key:"content-".concat(o),className:"".concat(l,"-row")},j(i,e,(0,f.Z)({component:"td",type:"content",showContent:!0},a)))):s.createElement("tr",{key:o,className:"".concat(l,"-row")},j(i,e,(0,f.Z)({component:x?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},a)))},A=q,_=function(e){var a=e.children;return a},U=_,r=t(96159),M=s.createContext({}),G={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function ee(n,e){if(typeof n=="number")return n;if((0,F.Z)(n)==="object")for(var a=0;a<P.c4.length;a++){var l=P.c4[a];if(e[l]&&n[l]!==void 0)return n[l]||G[l]}return 3}function N(n,e,a){var l=n;return(e===void 0||e>a)&&(l=(0,r.Tm)(n,{span:a}),(0,X.Z)(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),l}function S(n,e){var a=(0,ae.Z)(n).filter(function(o){return o}),l=[],c=[],i=e;return a.forEach(function(o,x){var p,d=(p=o.props)===null||p===void 0?void 0:p.span,u=d||1;if(x===a.length-1){c.push(N(o,d,i)),l.push(c);return}u<i?(i-=u,c.push(o)):(c.push(N(o,u,i)),l.push(c),i=e,c=[])}),l}function C(n){var e,a=n.prefixCls,l=n.title,c=n.extra,i=n.column,o=i===void 0?G:i,x=n.colon,p=x===void 0?!0:x,d=n.bordered,u=n.layout,m=n.children,g=n.className,b=n.style,y=n.size,w=n.labelStyle,Q=n.contentStyle,O=s.useContext(K.E_),L=O.getPrefixCls,T=O.direction,h=L("descriptions",a),Y=s.useState({}),W=(0,B.Z)(Y,2),H=W[0],J=W[1],$=ee(o,H);s.useEffect(function(){var te=P.ZP.subscribe(function(V){(0,F.Z)(o)==="object"&&J(V)});return function(){P.ZP.unsubscribe(te)}},[]);var se=S(m,$);return s.createElement(M.Provider,{value:{labelStyle:w,contentStyle:Q}},s.createElement("div",{className:v()(h,(e={},(0,E.Z)(e,"".concat(h,"-").concat(y),y&&y!=="default"),(0,E.Z)(e,"".concat(h,"-bordered"),!!d),(0,E.Z)(e,"".concat(h,"-rtl"),T==="rtl"),e),g),style:b},(l||c)&&s.createElement("div",{className:"".concat(h,"-header")},l&&s.createElement("div",{className:"".concat(h,"-title")},l),c&&s.createElement("div",{className:"".concat(h,"-extra")},c)),s.createElement("div",{className:"".concat(h,"-view")},s.createElement("table",null,s.createElement("tbody",null,se.map(function(te,V){return s.createElement(A,{key:V,index:V,colon:p,prefixCls:h,vertical:u==="vertical",bordered:d,row:te})}))))))}C.Item=U;var z=C},98858:function(Z,D,t){"use strict";var E=t(43673),B=t.n(E),F=t(19422),s=t.n(F)}}]);
