(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),b=a.n(r),o=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),m=a.n(d),p=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,b=i.subDirectory,l=r+"/edit/"+i.branch+b+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),x=a("dI71"),v=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),r=a===i,l=new RegExp(i+"/?(#.*)?$"),c=n.replace(l,a);return Object(p.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=r,t),v.listItem)},Object(p.b)(o.Link,{className:v.link,to:""+c},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:v.list},r))))))},t}(i.a.Component),T=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,s=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,m=s.tabs,g=s.title,x=s.theme,v=s.description,k=s.keywords,N=Object(w.a)().interiorTheme,y=Object(o.useStaticQuery)("2456312558").site.pathPrefix,P=y?n.pathname.replace(y,""):n.pathname,C=m?P.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",H=x||N;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:H,pageTitle:g,pageDescription:v,pageKeywords:k,titleType:d},Object(p.b)(j,{title:i?Object(p.b)(i,null):g,label:"label",tabs:m,theme:H}),m&&Object(p.b)(f,{title:g,slug:P,tabs:m,currentTab:C}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:u})),Object(p.b)(O.a,{pageContext:t,location:n,slug:P,tabs:m,currentTab:C}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2EvBK",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--5mCgN",link:"EditLink-module--link--QlquD",row:"EditLink-module--row--104Au"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--3BhKg",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3k3x1",tabsContainer:"PageTabs-module--tabs-container--3ku4u",list:"PageTabs-module--list--Zs80A",listItem:"PageTabs-module--list-item--UVTiB",link:"PageTabs-module--link--TAIyd",selectedItem:"PageTabs-module--selected-item--2Kv-J"}},NWYF:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),b=a("013z"),o=(a("qKvR"),{}),l={_frontmatter:o},c=b.a;function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(c,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Getting involved with Alvearie"),Object(r.b)("p",null,"Alvearie is open source and we encourage all to use, provide feedback, and contribute to the projects. The first step is to engage with the community. This can be done by:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Ask questions in our GitHub discussion boards"))),Object(r.b)("p",null,"Each of our GitHub repositories (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/alvearie"}),"github.com/alvearie"),") has a GitHub Discussions board enabled where anyone can engage in a discussion, ask a question, or view discussion history."),Object(r.b)("p",null),Object(r.b)("h2",null,"Code of Conduct"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Alvearie follows the code of conduct that is defined by the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://contributor-covenant.org"}),"Contributor Convenant"))),Object(r.b)("p",null),Object(r.b)("h2",null,"License"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Alvearie components are all licensed under the Apache 2.0 license.")))}s.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--2SjuB",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3jsoz",pageHeader:"PageHeader-module--page-header--365gs",darkMode:"PageHeader-module--dark-mode--1Y-8D",withTabs:"PageHeader-module--with-tabs--2y_Tu",text:"PageHeader-module--text--3r6mD"}}}]);
//# sourceMappingURL=component---src-pages-contributions-index-mdx-fac6f2789b897c907cfe.js.map