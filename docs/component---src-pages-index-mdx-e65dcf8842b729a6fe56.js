(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),l=a.n(r),b=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h2",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,l=o.subDirectory,i=r+"/edit/"+o.branch+l+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),h=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===o,i=new RegExp(o+"/?(#.*)?$"),c=n.replace(i,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=r,t),h.listItem)},Object(p.b)(b.Link,{className:h.link,to:""+c},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},r))))))},t}(o.a.Component),T=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=s.tabs,j=s.title,f=s.theme,h=s.description,y=s.keywords,k=Object(w.a)().interiorTheme,P=Object(b.useStaticQuery)("2456312558").site.pathPrefix,C=P?n.pathname.replace(P,""):n.pathname,M=m?C.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",N=f||k;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:N,pageTitle:j,pageDescription:h,pageKeywords:y,titleType:u},Object(p.b)(g,{title:o?Object(p.b)(o,null):j,label:"label",tabs:m,theme:N}),m&&Object(p.b)(v,{title:j,slug:C,tabs:m,currentTab:M}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(x,{relativePagePath:d})),Object(p.b)(O.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:M}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2EvBK",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--5mCgN",link:"EditLink-module--link--QlquD",row:"EditLink-module--row--104Au"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--3BhKg",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3k3x1",tabsContainer:"PageTabs-module--tabs-container--3ku4u",list:"PageTabs-module--list--Zs80A",listItem:"PageTabs-module--list-item--UVTiB",link:"PageTabs-module--link--TAIyd",selectedItem:"PageTabs-module--selected-item--2Kv-J"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--2SjuB",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3jsoz",pageHeader:"PageHeader-module--page-header--365gs",darkMode:"PageHeader-module--dark-mode--1Y-8D",withTabs:"PageHeader-module--with-tabs--2y_Tu",text:"PageHeader-module--text--3r6mD"}},pfKO:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return g}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=(a("013z"),a("QH4P")),b=a("664G"),i=a("R55w"),c=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},d=s("Row"),u=s("Column"),m={_frontmatter:c},p=l.a;function g(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(p,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(d,{mdxType:"Row"},Object(r.b)(u,{colMd:2,colLg:3,noGutterMdLeft:!0,mdxType:"Column"},"Project Alvearie"),Object(r.b)(u,{colMd:6,colLg:9,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)("h2",null,"Project Alvearie is an open-source project designed to bring together contributors from across the health and life sciences ecosystem for collaboration around common and pervasive challenges to health data ingestion and flow."),Object(r.b)("p",null,"Together, we're working toward building a set of extensible, modular and scalable multi-cloud data and analytics components that can help organizations improve care delivery and operate more efficiently in a highly regulated environment."))),Object(r.b)(b.a,{mdxType:"ObjectivesSection"}),Object(r.b)(d,{mdxType:"Row"},Object(r.b)(u,{colMd:4,colLg:6,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)(i.a,{mdxType:"GetInvolvedSection"})),Object(r.b)(u,{colMd:4,colLg:6,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)("div",{style:{"border-left":"1px solid #aaaaaa","padding-left":"20px"}},Object(r.b)("h2",{style:{"padding-bottom":"20px"}},"Open Source Community Projects"),Object(r.b)("p",null,"Alvearie combines a number of open source projects:"),Object(r.b)("p",{style:{"padding-left":"20px","line-height":"40px","padding-top":"20px"}},"OpenShift hybrid cloud platform",Object(r.b)("br",null),"Apache Spark cluster computing framework",Object(r.b)("br",null),"Apache Nifi data distribution and processing",Object(r.b)("br",null),"Apache Kafka stream-processing platform",Object(r.b)("br",null),"Apache Camel integration framework",Object(r.b)("br",null),"Apache Flink batch-processing framework",Object(r.b)("br",null),"Kubeflow for machine learning workflows on kubernetes",Object(r.b)("br",null),"NATS distributed messaging queue",Object(r.b)("br",null),"dcm4che applications and utilites",Object(r.b)("br",null),"Mirth HL7 interface engine",Object(r.b)("br",null),"HAPI utilities for HL7 v2 messaging",Object(r.b)("br",null),"CQL Evaluation Engine",Object(r.b)("br",null))))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-e65dcf8842b729a6fe56.js.map