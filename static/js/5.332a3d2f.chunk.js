(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[5],{1024:function(e,t,n){var r=n(250),c=n(1025),a=n(1040),i=n(378),o=n(488),s=n(1044),u=n(1045),b=n(910),l=u((function(e,t){var n={};if(null==e)return n;var u=!1;t=r(t,(function(t){return t=i(t,e),u||(u=t.length>1),t})),o(e,b(e),n),u&&(n=c(n,7,s));for(var l=t.length;l--;)a(n,t[l]);return n}));e.exports=l},1025:function(e,t,n){var r=n(316),c=n(1026),a=n(509),i=n(1027),o=n(1028),s=n(505),u=n(496),b=n(1029),l=n(1030),j=n(502),f=n(910),d=n(489),p=n(1031),O=n(1032),x=n(507),v=n(101),h=n(313),m=n(1036),g=n(129),y=n(1038),w=n(248),k=n(374),C="[object Arguments]",A="[object Function]",S="[object Object]",I={};I[C]=I["[object Array]"]=I["[object ArrayBuffer]"]=I["[object DataView]"]=I["[object Boolean]"]=I["[object Date]"]=I["[object Float32Array]"]=I["[object Float64Array]"]=I["[object Int8Array]"]=I["[object Int16Array]"]=I["[object Int32Array]"]=I["[object Map]"]=I["[object Number]"]=I[S]=I["[object RegExp]"]=I["[object Set]"]=I["[object String]"]=I["[object Symbol]"]=I["[object Uint8Array]"]=I["[object Uint8ClampedArray]"]=I["[object Uint16Array]"]=I["[object Uint32Array]"]=!0,I["[object Error]"]=I[A]=I["[object WeakMap]"]=!1,e.exports=function e(t,n,F,N,E,T){var D,P=1&n,U=2&n,B=4&n;if(F&&(D=E?F(t,N,E,T):F(t)),void 0!==D)return D;if(!g(t))return t;var L=v(t);if(L){if(D=p(t),!P)return u(t,D)}else{var H=d(t),M=H==A||"[object GeneratorFunction]"==H;if(h(t))return s(t,P);if(H==S||H==C||M&&!E){if(D=U||M?{}:x(t),!P)return U?l(t,o(D,t)):b(t,i(D,t))}else{if(!I[H])return E?t:{};D=O(t,H,P)}}T||(T=new r);var W=T.get(t);if(W)return W;T.set(t,D),y(t)?t.forEach((function(r){D.add(e(r,n,F,r,t,T))})):m(t)&&t.forEach((function(r,c){D.set(c,e(r,n,F,c,t,T))}));var J=L?void 0:(B?U?f:j:U?k:w)(t);return c(J||t,(function(r,c){J&&(r=t[c=r]),a(D,c,e(r,n,F,c,t,T))})),D}},1026:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},1027:function(e,t,n){var r=n(488),c=n(248);e.exports=function(e,t){return e&&r(t,c(t),e)}},1028:function(e,t,n){var r=n(488),c=n(374);e.exports=function(e,t){return e&&r(t,c(t),e)}},1029:function(e,t,n){var r=n(488),c=n(494);e.exports=function(e,t){return r(e,c(e),t)}},1030:function(e,t,n){var r=n(488),c=n(909);e.exports=function(e,t){return r(e,c(e),t)}},1031:function(e,t){var n=Object.prototype.hasOwnProperty;e.exports=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&n.call(e,"index")&&(r.index=e.index,r.input=e.input),r}},1032:function(e,t,n){var r=n(495),c=n(1033),a=n(1034),i=n(1035),o=n(506);e.exports=function(e,t,n){var s=e.constructor;switch(t){case"[object ArrayBuffer]":return r(e);case"[object Boolean]":case"[object Date]":return new s(+e);case"[object DataView]":return c(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return o(e,n);case"[object Map]":return new s;case"[object Number]":case"[object String]":return new s(e);case"[object RegExp]":return a(e);case"[object Set]":return new s;case"[object Symbol]":return i(e)}}},1033:function(e,t,n){var r=n(495);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}},1034:function(e,t){var n=/\w*$/;e.exports=function(e){var t=new e.constructor(e.source,n.exec(e));return t.lastIndex=e.lastIndex,t}},1035:function(e,t,n){var r=n(216),c=r?r.prototype:void 0,a=c?c.valueOf:void 0;e.exports=function(e){return a?Object(a.call(e)):{}}},1036:function(e,t,n){var r=n(1037),c=n(377),a=n(492),i=a&&a.isMap,o=i?c(i):r;e.exports=o},1037:function(e,t,n){var r=n(489),c=n(172);e.exports=function(e){return c(e)&&"[object Map]"==r(e)}},1038:function(e,t,n){var r=n(1039),c=n(377),a=n(492),i=a&&a.isSet,o=i?c(i):r;e.exports=o},1039:function(e,t,n){var r=n(489),c=n(172);e.exports=function(e){return c(e)&&"[object Set]"==r(e)}},1040:function(e,t,n){var r=n(378),c=n(1041),a=n(1042),i=n(253);e.exports=function(e,t){return t=r(t,e),null==(e=a(e,t))||delete e[i(c(t))]}},1041:function(e,t){e.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},1042:function(e,t,n){var r=n(317),c=n(1043);e.exports=function(e,t){return t.length<2?e:r(e,c(t,0,-1))}},1043:function(e,t){e.exports=function(e,t,n){var r=-1,c=e.length;t<0&&(t=-t>c?0:c+t),(n=n>c?c:n)<0&&(n+=c),c=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(c);++r<c;)a[r]=e[r+t];return a}},1044:function(e,t,n){var r=n(508);e.exports=function(e){return r(e)?void 0:e}},1045:function(e,t,n){var r=n(860),c=n(511),a=n(512);e.exports=function(e){return a(c(e,void 0,r),e+"")}},1403:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o,s,u,b,l,j,f,d,p,O,x,v=n(8),h=n(1),m=n(4),g=n(2),y=n(13),w=n(247),k=n(256),C=n.n(k),A=n(41),S=n(92),I=n(58),F=n(375),N=n(825),E=n(3),T=n.n(E),D=n(12),P=n(9),U=n(186),B=m.e.div(r||(r=Object(v.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),L=n(55),H=n(223),M=n(100),W=n(42),J=n(145),R=n(107),z=n(0),G=Object(m.e)(g.lc)(c||(c=Object(v.a)(["\n  font-weight: 600;\n"]))),Q=m.e.div(a||(a=Object(v.a)(["\n  margin-bottom: 16px;\n"]))),V=m.e.div(i||(i=Object(v.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),Z=m.e.label(o||(o=Object(v.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),_=function(e){var t=e.nft,n=e.tokenIds,r=e.onSuccess,c=e.onDismiss,a=Object(h.useState)(!1),i=Object(P.a)(a,2),o=i[0],s=i[1],u=Object(h.useState)(""),b=Object(P.a)(u,2),l=b[0],j=b[1],f=Object(h.useState)(null),d=Object(P.a)(f,2),p=d[0],O=d[1],x=Object(y.b)().t,v=Object(A.c)().account,m=Object(W.j)(Object(H.a)(t.type)),w=Object(M.a)().toastSuccess,k=Object(J.a)().callWithGasPrice,C=function(){var e=Object(D.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,L.a.utils.isAddress(l)){e.next=6;break}O(x("Please enter a valid wallet address")),e.next=14;break;case 6:return e.next=8,k(m,"transferFrom",[v,l,n[0]]);case 8:return t=e.sent,s(!0),e.next=12,t.wait();case 12:(a=e.sent).status?(c(),r(),w(x("NFT successfully transferred!"),Object(z.jsx)(R.b,{txHash:a.transactionHash}))):(O(x("Unable to transfer NFT")),s(!1));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return Object(z.jsxs)(g.wb,{title:x("Transfer NFT"),onDismiss:c,children:[Object(z.jsxs)(Q,{children:[p&&Object(z.jsx)(g.lc,{color:"failure",mb:"8px",children:p}),Object(z.jsxs)(B,{children:[Object(z.jsxs)(g.lc,{children:[x("Transferring"),":"]}),Object(z.jsx)(G,{children:x("1x %nftName% NFT",{nftName:t.name})})]}),Object(z.jsxs)(Z,{htmlFor:"transferAddress",children:[x("Receiving address"),":"]}),Object(z.jsx)(g.fb,{id:"transferAddress",name:"address",type:"text",placeholder:x("Paste address"),value:l,onChange:function(e){var t=e.target.value;j(t)},isWarning:p,disabled:o})]}),Object(z.jsxs)(V,{children:[Object(z.jsx)(g.r,{width:"100%",variant:"secondary",onClick:c,children:x("Cancel")}),Object(z.jsx)(g.r,{width:"100%",onClick:C,disabled:!v||o||!l,children:x("Confirm")})]})]})},K=m.e.div(s||(s=Object(v.a)(["\n  margin-bottom: 16px;\n"]))),X=m.e.div(u||(u=Object(v.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),Y=function(e){var t=e.nft,n=e.onSuccess,r=e.onClaim,c=e.onDismiss,a=Object(h.useState)(!1),i=Object(P.a)(a,2),o=i[0],s=i[1],u=Object(y.b)().t,b=Object(A.c)().account,l=Object(M.a)(),j=l.toastError,f=l.toastSuccess,d=function(){var e=Object(D.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,r();case 4:return t=e.sent,e.next=7,t.wait();case 7:(a=e.sent).status&&(f(u("Successfully claimed!"),Object(z.jsx)(R.b,{txHash:a.transactionHash})),c(),n()),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),j(u("Error"),u("Please try again. Confirm the transaction and make sure you are paying enough gas!")),s(!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return Object(z.jsxs)(g.wb,{title:u("Claim Collectible"),onDismiss:c,children:[Object(z.jsx)(K,{children:Object(z.jsxs)(g.X,{alignItems:"center",mb:"8px",justifyContent:"space-between",children:[Object(z.jsxs)(g.lc,{children:[u("You will receive"),":"]}),Object(z.jsx)(g.lc,{bold:!0,children:u("1x %nftName% Collectible",{nftName:t.name})})]})}),Object(z.jsxs)(X,{children:[Object(z.jsx)(g.r,{width:"100%",variant:"secondary",onClick:c,children:u("Cancel")}),Object(z.jsx)(g.r,{width:"100%",onClick:d,disabled:!b,isLoading:o,endIcon:o?Object(z.jsx)(g.i,{color:"currentColor",spin:!0}):null,children:u("Confirm")})]})]})},$=m.e.div(b||(b=Object(v.a)(["\n  background-color: ",";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])),(function(e){return e.theme.colors.cardBorder})),q=m.e.img(l||(l=Object(v.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 24px 24px 0 0;\n"]))),ee=m.e.video(j||(j=Object(v.a)(["\n  height: 100%;\n  width: 100%;\n"]))),te=function(e){var t=e.nft,n=e.isOwned,r=void 0!==n&&n,c=t.images,a=t.name,i=t.video,o="/images/nfts/".concat(c.lg);if(i){var s=Object(z.jsxs)(ee,{autoPlay:!0,controls:!1,loop:!0,muted:!0,poster:o,children:[Object(z.jsx)("source",{src:i.webm,type:"video/webm"}),Object(z.jsx)("source",{src:i.mp4,type:"video/mp4"})]});return r?Object(z.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:s}):s}var u=Object(z.jsx)(q,{src:o,alt:a});return Object(z.jsx)($,{children:r?Object(z.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:u}):u})},ne=Object(m.e)(B)(f||(f=Object(v.a)(["\n  min-height: 28px;\n"]))),re=Object(m.e)(g.r).attrs({variant:"text"})(d||(d=Object(v.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),ce=m.e.div(p||(p=Object(v.a)(["\n  padding: 24px;\n"]))),ae=function(e){var t,n=e.nft,r=e.canClaim,c=void 0!==r&&r,a=e.tokenIds,i=void 0===a?[]:a,o=e.onClaim,s=e.refresh,u=Object(h.useState)(!1),b=Object(P.a)(u,2),l=b[0],j=b[1],f=Object(y.b)().t,d=Object(U.c)().profile,p=n.identifier,O=n.name,x=n.description,v=i.length>0,m=l?g.K:g.H,w=function(){var e=Object(D.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(!l);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){s()},C=Object(g.Jc)(Object(z.jsx)(_,{nft:n,tokenIds:i,onSuccess:k})),A=Object(P.a)(C,1)[0],S=Object(g.Jc)(Object(z.jsx)(Y,{nft:n,onSuccess:k,onClaim:o})),I=Object(P.a)(S,1)[0];return Object(z.jsxs)(g.v,{isActive:v,children:[Object(z.jsx)(te,{nft:n,isOwned:v}),Object(z.jsxs)(g.w,{children:[Object(z.jsxs)(ne,{children:[Object(z.jsx)(g.Z,{children:O}),v&&Object(z.jsx)(g.ic,{outline:!0,variant:"secondary",children:f("In Wallet")}),(null===d||void 0===d||null===(t=d.nft)||void 0===t?void 0:t.identifier)===p&&Object(z.jsx)(g.ic,{outline:!0,variant:"success",children:f("Profile Pic")})]}),c&&Object(z.jsx)(g.r,{width:"100%",mt:"24px",onClick:I,children:f("Claim this NFT")}),v&&Object(z.jsx)(g.r,{width:"100%",variant:"secondary",mt:"24px",onClick:A,children:f("Transfer")})]}),Object(z.jsxs)(g.x,{p:"0",children:[Object(z.jsx)(re,{width:"100%",endIcon:Object(z.jsx)(m,{width:"24px",color:"primary"}),onClick:w,children:f("Details")}),l&&Object(z.jsx)(ce,{children:Object(z.jsx)(g.lc,{as:"p",color:"textSubtle",style:{textAlign:"center"},children:f(x)})})]})]})},ie=m.e.div(O||(O=Object(v.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),oe=n(5),se=n(51),ue=["nft"],be={"easter-storm":1,"easter-flipper":2,"easter-caker":3},le=function(e){var t=e.nft,n=Object(se.a)(e,ue),r=Object(h.useState)(!1),c=Object(P.a)(r,2),a=c[0],i=c[1],o=Object(A.c)().account,s=Object(U.c)().profile,u=t.identifier,b=(null!==s&&void 0!==s?s:{}).team,l=Object(W.k)(),j=function(){var e=Object(D.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.mintNFT();case 2:return t=e.sent,e.next=5,t.wait();case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){o&&b&&function(){var e=Object(D.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.canClaim(o);case 2:t=e.sent,i(!!t&&b.id===be[u]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o,u,b,l,i]),Object(z.jsx)(ae,Object(oe.a)(Object(oe.a)({nft:t},n),{},{canClaim:a,onClaim:j}))},je=n(1024),fe=n.n(je),de=n(449),pe=["nft"],Oe=function(e){var t=e.nft,n=Object(se.a)(e,pe),r=Object(A.c)().account,c=Object(I.b)(),a=Object(W.b)(),i=t.identifier,o=Object(h.useState)(!1),s=Object(P.a)(o,2),u=s[0],b=s[1],l=Object(h.useState)(null),j=Object(P.a)(l,2),f=j[0],d=j[1],p=Object(de.a)(),O=p.canClaimBaller,x=p.canClaimLottie,v=p.canClaimLucky;Object(h.useEffect)((function(){var e={lottie:x,lucky:v,baller:O};r&&function(){var t=Object(D.a)(T.a.mark((function t(){var n,r,c;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e[i]();case 2:n=t.sent,r=n.canClaim,c=n.mintData,b(r),d(c);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[r,O,x,v,i]);var m=function(){var e=Object(D.a)(T.a.mark((function e(){var t,n,r,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.bunnyId,n=f.lotteryId,r=f.cursor,e.next=3,a.mintNFT(t,n,r);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=fe()(n,"refresh");return Object(z.jsx)(ae,Object(oe.a)({nft:t,canClaim:u,onClaim:m,refresh:function(){c(Object(F.b)(r)),b(!1)}},g))},xe={"easter-storm":le,"easter-flipper":le,"easter-caker":le,lottie:Oe,lucky:Oe,baller:Oe},ve=function(){var e=Object(N.a)().tokenIds,t=Object(I.b)(),n=Object(A.c)().account,r=Object(h.useCallback)((function(){t(Object(F.b)(n))}),[t,n]);return Object(h.useEffect)((function(){r()}),[n,r]),Object(z.jsx)(ie,{children:C()(S.b,"sortOrder").map((function(t){var n=xe[t.identifier]||ae;return Object(z.jsx)("div",{children:Object(z.jsx)(n,{nft:t,tokenIds:e[t.identifier],refresh:r})},t.name)}))})},he=m.e.div(x||(x=Object(v.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(y.b)().t;return Object(z.jsxs)(w.a,{children:[Object(z.jsx)(he,{children:Object(z.jsx)(g.Z,{as:"h1",scale:"xxl",color:"secondary",children:e("Pancake Collectibles")})}),Object(z.jsx)(ve,{})]})}},825:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(1),c=n(41),a=n(30),i=n(58),o=n(92),s=n(375),u=function(){var e=Object(c.c)().account,t=Object(i.b)(),n=Object(a.c)((function(e){return e.collectibles})),u=n.isInitialized,b=n.isLoading,l=n.data,j=Object.keys(l);return Object(r.useEffect)((function(){u||t(Object(s.b)(e))}),[u,e,t]),{isInitialized:u,isLoading:b,tokenIds:l,nftsInWallet:o.b.filter((function(e){return j.includes(e.identifier)}))}}},860:function(e,t,n){var r=n(497);e.exports=function(e){return(null==e?0:e.length)?r(e,1):[]}},909:function(e,t,n){var r=n(386),c=n(387),a=n(494),i=n(504),o=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)r(t,a(e)),e=c(e);return t}:i;e.exports=o},910:function(e,t,n){var r=n(503),c=n(909),a=n(374);e.exports=function(e){return r(e,a,c)}}}]);
//# sourceMappingURL=5.332a3d2f.chunk.js.map