(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8529],{34540:function(Y,I,n){"use strict";var x=n(67294),F=n(90872),B=n(86190),P=n(61834);function b(){return b=Object.assign||function(E){for(var p=1;p<arguments.length;p++){var u=arguments[p];for(var s in u)Object.prototype.hasOwnProperty.call(u,s)&&(E[s]=u[s])}return E},b.apply(this,arguments)}var v="dateRange",L=x.forwardRef(function(E,p){var u=E.fieldProps,s=E.proFieldProps;return x.createElement(F.ZP,b({ref:p,text:u==null?void 0:u.value,mode:"edit",fieldProps:u,valueType:v},s))});I.Z=(0,P.Z)(L,{valueType:v,lightFilterLabelFormatter:function(p){return(0,B.Z)(p,"YYYY-MM-DD")}})},64317:function(Y,I,n){"use strict";var x=n(67294),F=n(90872),B=n(22270),P=n(61834);function b(){return b=Object.assign||function(l){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(l[f]=a[f])}return l},b.apply(this,arguments)}function v(l,c){var a=Object.keys(l);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(l);c&&(f=f.filter(function(T){return Object.getOwnPropertyDescriptor(l,T).enumerable})),a.push.apply(a,f)}return a}function L(l){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?v(Object(a),!0).forEach(function(f){E(l,f,a[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach(function(f){Object.defineProperty(l,f,Object.getOwnPropertyDescriptor(a,f))})}return l}function E(l,c,a){return c in l?Object.defineProperty(l,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):l[c]=a,l}var p=x.forwardRef(function(l,c){var a=l.fieldProps,f=l.children,T=l.params,U=l.proFieldProps,V=l.mode,H=l.valueEnum,G=l.request,z=l.showSearch,Q=l.options;return x.createElement(F.ZP,b({mode:"edit",valueEnum:(0,B.h)(H),request:G,params:T,valueType:"select",fieldProps:L({options:Q,mode:V,showSearch:z},a),ref:c},U),f)}),u=x.forwardRef(function(l,c){var a=l.fieldProps,f=l.children,T=l.params,U=l.proFieldProps,V=l.mode,H=l.valueEnum,G=l.request,z=l.options,Q=L({options:z,mode:V||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label",filterOption:!1},a);return x.createElement(F.ZP,b({mode:"edit",valueEnum:(0,B.h)(H),request:G,params:T,valueType:"select",fieldProps:Q,ref:c},U),f)}),s=(0,P.Z)(p,{customLightMode:!0}),d=(0,P.Z)(u,{customLightMode:!0}),j=s;j.SearchSelect=d,I.Z=j},5966:function(Y,I,n){"use strict";var x=n(67294),F=n(90872),B=n(61834);function P(){return P=Object.assign||function(p){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(p[d]=s[d])}return p},P.apply(this,arguments)}var b="text",v=(0,B.Z)(function(p){var u=p.fieldProps,s=p.proFieldProps;return x.createElement(F.ZP,P({mode:"edit",valueType:b,fieldProps:u},s))},{valueType:b}),L=(0,B.Z)(function(p){var u=p.fieldProps,s=p.proFieldProps;return x.createElement(F.ZP,P({mode:"edit",valueType:"password",fieldProps:u},s))},{valueType:b}),E=v;E.Password=L,I.Z=E},86190:function(Y,I,n){"use strict";var x=n(30381),F=n.n(x);function B(u,s){return E(u)||L(u,s)||b(u,s)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(u,s){if(!!u){if(typeof u=="string")return v(u,s);var d=Object.prototype.toString.call(u).slice(8,-1);if(d==="Object"&&u.constructor&&(d=u.constructor.name),d==="Map"||d==="Set")return Array.from(u);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return v(u,s)}}function v(u,s){(s==null||s>u.length)&&(s=u.length);for(var d=0,j=new Array(s);d<s;d++)j[d]=u[d];return j}function L(u,s){var d=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(d!=null){var j=[],l=!0,c=!1,a,f;try{for(d=d.call(u);!(l=(a=d.next()).done)&&(j.push(a.value),!(s&&j.length===s));l=!0);}catch(T){c=!0,f=T}finally{try{!l&&d.return!=null&&d.return()}finally{if(c)throw f}}return j}}function E(u){if(Array.isArray(u))return u}var p=function(s,d){var j=Array.isArray(s)?s:[],l=B(j,2),c=l[0],a=l[1],f=c?F()(c).format(d):"",T=a?F()(a).format(d):"",U=f&&T&&"".concat(f," ~ ").concat(T);return U};I.Z=p},72627:function(Y){Y.exports={card:"antd-pro-pages-form-advanced-form-style-card",errorIcon:"antd-pro-pages-form-advanced-form-style-errorIcon",anticon:"antd-pro-pages-form-advanced-form-style-anticon",errorPopover:"antd-pro-pages-form-advanced-form-style-errorPopover",errorListItem:"antd-pro-pages-form-advanced-form-style-errorListItem",errorField:"antd-pro-pages-form-advanced-form-style-errorField",editable:"antd-pro-pages-form-advanced-form-style-editable"}},79969:function(Y,I,n){"use strict";n.r(I),n.d(I,{default:function(){return $e}});var x=n(72012),F=n(39144),B=n(13062),P=n(71230),b=n(89032),v=n(15746),L=n(34792),E=n(48086),p=n(3182),u=n(20136),s=n(55241),d=n(2824),j=n(94043),l=n.n(j),c=n(73218),a=n(67294),f=n(90872),T=n(61834),U=n(86190);function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},V.apply(this,arguments)}var H="time",G=a.forwardRef(function(e,t){var r=e.fieldProps,o=e.proFieldProps;return a.createElement(f.ZP,V({ref:t,text:(r==null?void 0:r.value)||"",mode:"edit",fieldProps:r,valueType:"timeRange"},o))}),z=function(t){var r=t.fieldProps,o=t.proFieldProps;return a.createElement(f.ZP,V({text:(r==null?void 0:r.value)||"",mode:"edit",fieldProps:r,valueType:H},o))},Q=(0,T.Z)(z,{customLightMode:!0,valueType:H}),ge=(0,T.Z)(G,{valueType:"timeRange",lightFilterLabelFormatter:function(t){return(0,U.Z)(t,"HH:mm:SS")}}),le=Q;le.RangePicker=ge;var Pe=le,ue=n(15196),re=n(5966),k=n(64317),be=n(34540),Ge=n(57663),Ee=n(71577),ze=n(9715),Oe=n(86585),Fe=n(21770),xe=n(49101),je=n(22270),Te=n(39629),Ze=["onTableChange","maxLength","recordCreatorProps","rowKey","controlled"],Ce=["record","position","creatorButtonText","newRecordType"];function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},te.apply(this,arguments)}function ie(e,t){return De(e)||we(e,t)||Ae(e,t)||Re()}function Re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ae(e,t){if(!!e){if(typeof e=="string")return se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return se(e,t)}}function se(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function we(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var o=[],m=!0,h=!1,J,M;try{for(r=r.call(e);!(m=(J=r.next()).done)&&(o.push(J.value),!(t&&o.length===t));m=!0);}catch(D){h=!0,M=D}finally{try{!m&&r.return!=null&&r.return()}finally{if(h)throw M}}return o}}function De(e){if(Array.isArray(e))return e}function de(e,t){if(e==null)return{};var r=Se(e,t),o,m;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(e);for(m=0;m<h.length;m++)o=h[m],!(t.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(r[o]=e[o]))}return r}function Se(e,t){if(e==null)return{};var r={},o=Object.keys(e),m,h;for(h=0;h<o.length;h++)m=o[h],!(t.indexOf(m)>=0)&&(r[m]=e[m]);return r}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable})),r.push.apply(r,o)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ce(Object(r),!0).forEach(function(o){fe(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function fe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var me=a.createContext(void 0);function ve(e){var t=e.children,r=e.record,o=e.position,m=e.newRecordType,h=(0,a.useContext)(me);return a.cloneElement(t,ne(ne({},t.props),{},{onClick:function(M){var D,C,O;h==null||(D=h.current)===null||D===void 0||D.addEditRecord(r,{position:o,newRecordType:m}),(C=(O=t.props).onClick)===null||C===void 0||C.call(O,M)}}))}function pe(e){var t,r=e.onTableChange,o=e.maxLength,m=e.recordCreatorProps,h=e.rowKey,J=e.controlled,M=de(e,Ze),D=(0,a.useRef)(),C=Oe.Z.useForm(),O=ie(C,1),R=O[0];(0,a.useImperativeHandle)(M.actionRef,function(){return D.current});var X=(0,Fe.Z)(function(){return e.value||[]},{value:e.value,onChange:e.onChange}),y=ie(X,2),g=y[0],A=y[1],q=a.useMemo(function(){return typeof h=="function"&&h?h:function(K,w){return K[h]||w}},[h]);(0,a.useEffect)(function(){!e.controlled||g.forEach(function(K,w){R.setFieldsValue(fe({},q(K,w),K))},{})},[g,e.controlled]);var _=m||{},Ue=_.record,he=_.position,Ye=_.creatorButtonText,He=_.newRecordType,ke=de(_,Ce),ye=he==="top",ee=(0,a.useMemo)(function(){return o&&o<=(g==null?void 0:g.length)?!1:m!==!1&&a.createElement(ve,{record:(0,je.h)(Ue,g.length)||{},position:he,newRecordType:He},a.createElement(Ee.Z,te({type:"dashed",style:{display:"block",margin:"10px 0",width:"100%"},icon:a.createElement(xe.Z,null)},ke),Ye||"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"))},[m,o,g.length]),Je=(0,a.useMemo)(function(){return ee?ye?{components:{header:{wrapper:function(w){var S,W=w.className,N=w.children;return a.createElement("thead",{className:W},N,a.createElement("tr",{style:{position:"relative"}},a.createElement("td",{colSpan:0,style:{visibility:"hidden"}},ee),a.createElement("td",{style:{position:"absolute",left:0,width:"100%"},colSpan:(S=M.columns)===null||S===void 0?void 0:S.length},ee)))}}}}:{tableViewRender:function(w,S){var W,N;return a.createElement(a.Fragment,null,(W=(N=e.tableViewRender)===null||N===void 0?void 0:N.call(e,w,S))!==null&&W!==void 0?W:S,ee)}}:{}},[ye,ee]);return a.createElement(me.Provider,{value:D},a.createElement(Te.Z,te({search:!1,options:!1,pagination:!1,rowKey:h},M,Je,{tableLayout:"fixed",actionRef:D,onChange:r,dataSource:g,editable:ne(ne({form:R},e.editable),{},{onValuesChange:(e==null?void 0:e.onValuesChange)||((t=e.editable)===null||t===void 0?void 0:t.onValuesChange)||e.controlled&&(e==null?void 0:e.onChange)?function(K,w){var S,W,N;if((S=e.editable)===null||S===void 0||(W=S.onValuesChange)===null||W===void 0||W.call(S,K,w),(N=e.onValuesChange)===null||N===void 0||N.call(e,w,K),e.controlled){var oe;e==null||(oe=e.onChange)===null||oe===void 0||oe.call(e,w)}}:void 0}),onDataSourceChange:A})))}pe.RecordCreator=ve;var Ie=pe,Be=n(85224),Me=n(15103),Le=n(48910);function Ke(e){return ae.apply(this,arguments)}function ae(){return ae=(0,p.Z)(l().mark(function e(t){return l().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,Le.WY)("/api/advancedForm",{method:"POST",data:t}));case 1:case"end":return o.stop()}},e)})),ae.apply(this,arguments)}var We=n(72627),$=n.n(We),i=n(85893),Z={name:"\u4ED3\u5E93\u540D",url:"\u4ED3\u5E93\u57DF\u540D",owner:"\u4ED3\u5E93\u7BA1\u7406\u5458",approver:"\u5BA1\u6279\u4EBA",dateRange:"\u751F\u6548\u65E5\u671F",type:"\u4ED3\u5E93\u7C7B\u578B",name2:"\u4EFB\u52A1\u540D",url2:"\u4EFB\u52A1\u63CF\u8FF0",owner2:"\u6267\u884C\u4EBA",approver2:"\u8D23\u4EFB\u4EBA",dateRange2:"\u751F\u6548\u65E5\u671F",type2:"\u4EFB\u52A1\u7C7B\u578B"},Ne=[{key:"1",workId:"00001",name:"John Brown",department:"New York No. 1 Lake Park"},{key:"2",workId:"00002",name:"Jim Green",department:"London No. 1 Lake Park"},{key:"3",workId:"00003",name:"Joe Black",department:"Sidney No. 1 Lake Park"}],Ve=function(){var t=(0,a.useState)([]),r=(0,d.Z)(t,2),o=r[0],m=r[1],h=function(O){var R=O.filter(function(g){return g.errors.length>0}).length;if(!O||R===0)return null;var X=function(A){var q=document.querySelector('label[for="'.concat(A,'"]'));q&&q.scrollIntoView(!0)},y=O.map(function(g){if(!g||g.errors.length===0)return null;var A=g.name[0];return(0,i.jsxs)("li",{className:$().errorListItem,onClick:function(){return X(A)},children:[(0,i.jsx)(c.Z,{className:$().errorIcon}),(0,i.jsx)("div",{className:$().errorMessage,children:g.errors[0]}),(0,i.jsx)("div",{className:$().errorField,children:Z[A]})]},A)});return(0,i.jsxs)("span",{className:$().errorIcon,children:[(0,i.jsx)(s.Z,{title:"\u8868\u5355\u6821\u9A8C\u4FE1\u606F",content:y,overlayClassName:$().errorPopover,trigger:"click",getPopupContainer:function(A){return A&&A.parentNode?A.parentNode:A},children:(0,i.jsx)(c.Z,{})}),R]})},J=function(){var C=(0,p.Z)(l().mark(function O(R){return l().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return m([]),y.prev=1,y.next=4,Ke(R);case 4:E.default.success("\u63D0\u4EA4\u6210\u529F"),y.next=9;break;case 7:y.prev=7,y.t0=y.catch(1);case 9:case"end":return y.stop()}},O,null,[[1,7]])}));return function(R){return C.apply(this,arguments)}}(),M=function(O){m(O.errorFields)},D=[{title:"\u6210\u5458\u59D3\u540D",dataIndex:"name",key:"name",width:"20%"},{title:"\u5DE5\u53F7",dataIndex:"workId",key:"workId",width:"20%"},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"department",key:"department",width:"40%"},{title:"\u64CD\u4F5C",key:"action",valueType:"option",render:function(O,R,X,y){return[(0,i.jsx)("a",{onClick:function(){y==null||y.startEditable(R.key)},children:"\u7F16\u8F91"},"eidit")]}}];return(0,i.jsx)(ue.ZP,{layout:"vertical",hideRequiredMark:!0,submitter:{render:function(O,R){return(0,i.jsxs)(Be.Z,{children:[h(o),R]})}},initialValues:{members:Ne},onFinish:J,onFinishFailed:M,children:(0,i.jsxs)(Me.Z,{content:"\u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002",children:[(0,i.jsxs)(F.Z,{title:"\u4ED3\u5E93\u7BA1\u7406",className:$().card,bordered:!1,children:[(0,i.jsxs)(P.Z,{gutter:16,children:[(0,i.jsx)(v.Z,{lg:6,md:12,sm:24,children:(0,i.jsx)(re.Z,{label:Z.name,name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0"}],placeholder:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0"})}),(0,i.jsx)(v.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,i.jsx)(re.Z,{label:Z.url,name:"url",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],fieldProps:{style:{width:"100%"},addonBefore:"http://",addonAfter:".com"},placeholder:"\u8BF7\u8F93\u5165"})}),(0,i.jsx)(v.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,i.jsx)(k.Z,{label:Z.owner,name:"owner",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}],placeholder:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"})})]}),(0,i.jsxs)(P.Z,{gutter:16,children:[(0,i.jsx)(v.Z,{lg:6,md:12,sm:24,children:(0,i.jsx)(k.Z,{label:Z.approver,name:"approver",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5BA1\u6279\u5458"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}],placeholder:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"})}),(0,i.jsx)(v.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,i.jsx)(be.Z,{label:Z.dateRange,name:"dateRange",fieldProps:{style:{width:"100%"}},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u751F\u6548\u65E5\u671F"}]})}),(0,i.jsx)(v.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,i.jsx)(k.Z,{label:Z.type,name:"type",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B"}],options:[{label:"\u79C1\u5BC6",value:"private"},{label:"\u516C\u5F00",value:"public"}],placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B"})})]})]}),(0,i.jsxs)(F.Z,{title:"\u4EFB\u52A1\u7BA1\u7406",className:$().card,bordered:!1,children:[(0,i.jsxs)(P.Z,{gutter:16,children:[(0,i.jsx)(v.Z,{lg:6,md:12,sm:24,children:(0,i.jsx)(re.Z,{label:Z.name2,name:"name2",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]})}),(0,i.jsx)(v.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,i.jsx)(re.Z,{label:Z.url2,name:"url2",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]})}),(0,i.jsx)(v.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,i.jsx)(k.Z,{label:Z.owner2,name:"owner2",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}]})})]}),(0,i.jsxs)(P.Z,{gutter:16,children:[(0,i.jsx)(v.Z,{lg:6,md:12,sm:24,children:(0,i.jsx)(k.Z,{label:Z.approver2,name:"approver2",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5BA1\u6279\u5458"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}],placeholder:"\u8BF7\u9009\u62E9\u5BA1\u6279\u5458"})}),(0,i.jsx)(v.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,i.jsx)(Pe,{label:Z.dateRange2,name:"dateRange2",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],placeholder:"\u63D0\u9192\u65F6\u95F4",fieldProps:{style:{width:"100%"}}})}),(0,i.jsx)(v.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,i.jsx)(k.Z,{label:Z.type2,name:"type2",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B"}],options:[{label:"\u79C1\u5BC6",value:"private"},{label:"\u516C\u5F00",value:"public"}],placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B"})})]})]}),(0,i.jsx)(F.Z,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1,children:(0,i.jsx)(ue.ZP.Item,{name:"members",children:(0,i.jsx)(Ie,{recordCreatorProps:{record:function(){return{key:"0".concat(Date.now())}}},columns:D,rowKey:"key"})})})]})})},$e=Ve}}]);