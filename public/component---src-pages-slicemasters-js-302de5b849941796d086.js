(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Njg2:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u})),a.d(t,"query",(function(){return f}));var r=a("Wbzz"),n=a("9eSz"),i=a.n(n),l=a("q1tI"),s=a.n(l),o=a("vOnD"),c=o.b.div.withConfig({displayName:"Pagination__PaginationStyles",componentId:"sc-1g15gau-0"})(["display:flex;align-items:center;justify-content:center;border:1px solid var(--grey);margin:2rem 0rem;border-radius:5px;text-align:center;& > *{padding:1rem;flex:1;text-decoration:none;border-right:1px solid var(--grey);&[aria-current],&.current{color:var(--red);}&[disabled]{pointer-events:none;color:var(--grey);}}"]);function m(e){var t=e.pageSize,a=(e.skip,e.base),n=e.totalCount,i=e.currentPage,l=Math.ceil(n/t),o=i-1,m=i+1,d=m<=l,g=o>0;return s.a.createElement(c,null,s.a.createElement(r.a,{disabled:!g,to:a+"/"+o},"←Prev"),Array.from({length:l}).map((function(e,t){return s.a.createElement(r.a,{to:a+"/"+(t>0?t+1:""),className:0===t&&1===i?"current":""},t+1)})),s.a.createElement(r.a,{disabled:!d,to:a+"/"+m},"Next→"))}var d=a("EYWl"),g=o.b.div.withConfig({displayName:"slicemasters__SingleSlicemasterStyles",componentId:"sc-1ghrt1m-0"})(["padding:2rem;text-align:center;a{text-decoration:none;}.gatsby-image-wrapper{height:400px;}h2{transform:rotate(-2deg);font-size:4rem;margin-bottom:-2rem;position:relative;z-index:2;}.description{background:var(--yellow);padding:1rem;margin:2rem;margin-top:-6rem;position:relative;z-index:2;transform:rotate(1deg);}"]),p=o.b.div.withConfig({displayName:"slicemasters__SlicemasterGridStyles",componentId:"sc-1ghrt1m-1"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:2rem;"]);function u(e){var t=e.data,a=e.pageContext,n=t.slicemasters.nodes;return s.a.createElement("div",null,s.a.createElement(d.a,{title:"Slicemasters - Page "+(a.currentPage||1)}),s.a.createElement(m,{pageSize:parseInt("2"),skip:a.skip,base:"/slicemasters",totalCount:t.slicemasters.totalCount,currentPage:a.currentPage||1}),s.a.createElement(p,null,n.map((function(e){return s.a.createElement(g,null,s.a.createElement(r.a,{to:"slicemaster/"+e.slug.current,key:e.id},s.a.createElement("h2",null,s.a.createElement("span",{className:"mark"},e.name))),s.a.createElement(i.a,{fluid:e.image.asset.fluid,alt:""}),s.a.createElement("p",{className:"description"},e.description))}))))}var f="3430637731"}}]);
//# sourceMappingURL=component---src-pages-slicemasters-js-302de5b849941796d086.js.map