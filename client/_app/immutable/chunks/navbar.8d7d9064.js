import{S as ne,i as ie,s as ue,k as s,a as w,q as V,l as r,m as n,h as l,c as N,r as q,J as ce,n as e,b as oe,G as a,H as re,I as de}from"./index.472b9089.js";import{p as fe}from"./stores.fcb51444.js";import{j as he}from"./singletons.85932640.js";const ve=he("on_navigate");function _e(h){let u,d,f,A,L,T,t,v,b,Y,C,D,_,j,H,$,J,p,E,M,B,P,m,k,U,G,y,g,I,z,K,F,S;return{c(){u=s("nav"),d=s("a"),f=s("img"),T=w(),t=s("ul"),v=s("li"),b=s("a"),Y=V("Cases"),D=w(),_=s("li"),j=s("a"),H=V("Ydelser"),J=w(),p=s("li"),E=s("a"),M=V("Blog"),P=w(),m=s("li"),k=s("a"),U=V("Indsigt"),y=w(),g=s("li"),I=s("a"),z=V("Kontakt"),F=w(),S=s("div"),this.h()},l(c){u=r(c,"NAV",{class:!0});var i=n(u);d=r(i,"A",{href:!0,class:!0,current:!0});var O=n(d);f=r(O,"IMG",{src:!0,alt:!0,class:!0}),O.forEach(l),T=N(i),t=r(i,"UL",{class:!0});var o=n(t);v=r(o,"LI",{current:!0,class:!0});var Q=n(v);b=r(Q,"A",{href:!0,class:!0});var R=n(b);Y=q(R,"Cases"),R.forEach(l),Q.forEach(l),D=N(o),_=r(o,"LI",{current:!0,class:!0});var W=n(_);j=r(W,"A",{href:!0,class:!0});var X=n(j);H=q(X,"Ydelser"),X.forEach(l),W.forEach(l),J=N(o),p=r(o,"LI",{current:!0,class:!0});var Z=n(p);E=r(Z,"A",{href:!0,class:!0});var x=n(E);M=q(x,"Blog"),x.forEach(l),Z.forEach(l),P=N(o),m=r(o,"LI",{current:!0,class:!0});var ee=n(m);k=r(ee,"A",{href:!0,class:!0});var ae=n(k);U=q(ae,"Indsigt"),ae.forEach(l),ee.forEach(l),y=N(o),g=r(o,"LI",{current:!0,class:!0});var te=n(g);I=r(te,"A",{href:!0,class:!0});var se=n(I);z=q(se,"Kontakt"),se.forEach(l),te.forEach(l),F=N(o),S=r(o,"DIV",{});var le=n(S);le.forEach(l),o.forEach(l),i.forEach(l),this.h()},h(){ce(f.src,A="/img/branding/haulweb_logo_black.svg")||e(f,"src",A),e(f,"alt",""),e(f,"class","svelte-1eisij3"),e(d,"href","/"),e(d,"class","nav-home svelte-1eisij3"),e(d,"current",L=h[0].url.pathname==="/"?"page":void 0),e(b,"href","/cases"),e(b,"class","svelte-1eisij3"),e(v,"current",C=h[0].url.pathname.includes("cases")?"page":void 0),e(v,"class","svelte-1eisij3"),e(j,"href","/about"),e(j,"class","svelte-1eisij3"),e(_,"current",$=h[0].url.pathname.includes("about")?"page":void 0),e(_,"class","svelte-1eisij3"),e(E,"href","/blog"),e(E,"class","svelte-1eisij3"),e(p,"current",B=h[0].url.pathname.includes("blog")?"page":void 0),e(p,"class","svelte-1eisij3"),e(k,"href","/indsigt"),e(k,"class","svelte-1eisij3"),e(m,"current",G=h[0].url.pathname.includes("indsigt")?"page":void 0),e(m,"class","svelte-1eisij3"),e(I,"href","/kontakt"),e(I,"class","svelte-1eisij3"),e(g,"current",K=h[0].url.pathname.includes("kontakt")?"page":void 0),e(g,"class","svelte-1eisij3"),e(t,"class","nav-list svelte-1eisij3"),e(u,"class","navbar svelte-1eisij3")},m(c,i){oe(c,u,i),a(u,d),a(d,f),a(u,T),a(u,t),a(t,v),a(v,b),a(b,Y),a(t,D),a(t,_),a(_,j),a(j,H),a(t,J),a(t,p),a(p,E),a(E,M),a(t,P),a(t,m),a(m,k),a(k,U),a(t,y),a(t,g),a(g,I),a(I,z),a(t,F),a(t,S)},p(c,[i]){i&1&&L!==(L=c[0].url.pathname==="/"?"page":void 0)&&e(d,"current",L),i&1&&C!==(C=c[0].url.pathname.includes("cases")?"page":void 0)&&e(v,"current",C),i&1&&$!==($=c[0].url.pathname.includes("about")?"page":void 0)&&e(_,"current",$),i&1&&B!==(B=c[0].url.pathname.includes("blog")?"page":void 0)&&e(p,"current",B),i&1&&G!==(G=c[0].url.pathname.includes("indsigt")?"page":void 0)&&e(m,"current",G),i&1&&K!==(K=c[0].url.pathname.includes("kontakt")?"page":void 0)&&e(g,"current",K)},i:re,o:re,d(c){c&&l(u)}}}function pe(h,u,d){let f;return de(h,fe,A=>d(0,f=A)),ve(A=>{if(document.startViewTransition)return new Promise(L=>{document.startViewTransition(async()=>{L(),await A.complete})})}),[f]}class je extends ne{constructor(u){super(),ie(this,u,pe,_e,ue,{})}}export{je as N};
