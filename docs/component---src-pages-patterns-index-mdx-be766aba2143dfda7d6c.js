(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),l=a.n(r),o=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),m=a("QH2O"),u=a.n(m),g=a("qKvR"),p=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(g.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h2",{id:"page-title",className:u.a.text},a)))))},A=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,l=i.subDirectory,s=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(g.b)("div",{className:"bx--row "+A.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:A.link,href:s},"Edit this page on GitHub"))):null},h=a("FCXl"),O=a("dI71"),j=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===i,s=new RegExp(i+"/?(#.*)?$"),c=n.replace(s,a);return Object(g.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=r,t),j.listItem)},Object(g.b)(o.Link,{className:j.link,to:""+c},e))}));return Object(g.b)("div",{className:j.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:j.list},r))))))},t}(i.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,m=t.titleType,u=b.tabs,A=b.title,O=b.theme,j=b.description,f=b.keywords,k=Object(y.a)().interiorTheme,T=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=T?n.pathname.replace(T,""):n.pathname,N=u?I.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",C=O||k;return Object(g.b)(c.a,{tabs:u,homepage:!1,theme:C,pageTitle:A,pageDescription:j,pageKeywords:f,titleType:m},Object(g.b)(p,{title:i?Object(g.b)(i,null):A,label:"label",tabs:u,theme:C}),u&&Object(g.b)(v,{title:A,slug:I,tabs:u,currentTab:N}),Object(g.b)(w.a,{padded:!0},a,Object(g.b)(x,{relativePagePath:d})),Object(g.b)(h.a,{pageContext:t,location:n,slug:I,tabs:u,currentTab:N}),Object(g.b)(s.a,null))}},"1EvY":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return g}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=s("Row"),b=s("Column"),d=s("ArticleCard"),m={_frontmatter:o},u=l.a;function g(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(u,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"Row"},Object(r.b)(b,{colMd:4,colLg:6,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)(d,{title:"This reference implementation will focus on the process of accepting data from a source system (EMR, Data Warehouse, etc),  performing the necessary transformation & normalization and storing it in a persistence layer. Initial data formats supported will  include HL7, FHIR and DICOM and will persist the data in an industry standard FHIR Server and DICOM image store.",actionIcon:"launch",href:"https://github.com/Alvearie/health-patterns/blob/main/docs/roadmap.md#1-clinical-data-ingestion",mdxType:"ArticleCard"},Object(r.b)("undefined",null,Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"118px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"84.74576271186442%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1UlEQVQ4y5WU3UuaYRjGb19Ts9TyK/uw1OxDKTUtWRsLmxu0HBEbCAuWEBJjUmvh2sEG28FOxtjB/tmO2+96MSG2HfTAxft8Xvd9X8/1vDYzM2O5XM7m5+cFJ5/P2/T0tG1tbVkgELB6vW5TU1PuXDQadW5ubqzf71uj0bB/tlQqZZlMxhYWFhwg8gjj/cXFxWPHcY7S6fQxQQ8hTIuU5hGxvoJaKBSy8fFxGxsbMzcyBA4E+m5D8J6MKs1mM+z1et2gwWDwkkO/1tfXX2isw7cNPrtDSIlONpu11dXVCv2uNkkCAoVGRkZeMnwKLlRFtVrdZ77P+DFogl0In0EYGxKenp66kSjjO58NqRCPx40g1XA4/Iaxl0NnYJt+ksO//X7/K/qPQIP55h3C2dlZXUZxdHT0kg11dLtstVo2Nze3SZAn2sShPGt74AFZd5DgSnvBk78IVT94GIvFNgaa9UCbAH027CWTyaFeuvXNzc14IpH4xnBrkOEu56NDQhZliyXK+MSGHTK8kIW48QoZ7g4yLLJ2KO3Y945gXwY6PmetBWFiSKimLNHtK4vrDMPynTRk/kRjgnzgq7VJbPaDksv00yDLmRz7gkNCrOApFApWq9UKxWLxTAFkbggD6LU3yORMHl1aWnqLGxrI83/byDLAWV5eNlDCFueUvINFUreH0PEz0vzk1jv0j3ktnoODA5ucnPTe+nJISFTXd8A199ramp9+g/5rLuEIF+i1NEFUepNpbWJi4rzdbvsjkYgBLxKI3E5OUGhlZcX0ngVlWqlUjMMyuhtVFeiSsJEuz6eg7M1QyUfKjXJJhgSOXpz2uq3b7brvWZmWSiURSgKHyB49Sy7CEaEC0XczokWYu6KC/ODZuhXeq+kRUK6hpX4O5vP5vFirh0wZXSzw3ItQsmAhU5lo56ii6+trD4QhYOVy2e7dOp2OaxP99tDW0+v1DLu5EOkfm5Bx1HiExPsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ingestionSmall",title:"ingestionSmall",src:"/static/7c577baac03e4e23c6639873ce514239/5e0da/ingestionSmall.png",srcSet:["/static/7c577baac03e4e23c6639873ce514239/5e0da/ingestionSmall.png 118w"],sizes:"(max-width: 118px) 100vw, 118px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," \nClinical Data Ingestion"))),Object(r.b)(b,{colMd:4,colLg:6,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)(d,{title:"Enrichment of clinical data through the use of Natural Language Processing (NLP), de-identification, or other services.",actionIcon:"launch",href:"https://github.com/Alvearie/health-patterns/blob/main/docs/roadmap.md#2-clinical-data-enrichment",mdxType:"ArticleCard"},Object(r.b)("undefined",null,Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"118px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"84.74576271186442%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAADOElEQVQ4y41T205aQRSdwwHkbhVQRBGroCh3AQURuSsk1oDcLKgEDNKUilRbSeqDfepj3/wCE3/Kj7FrHyg1TWo6yWJmOHvWXvvG2HDp9Xo2OzvLzGazAJPJJNynpqbY8vIyazabrF6vs0qlwl5dDoeDczqdzO/3JxOJRHN3d7cCHKVSqWosFmsA1XQ63ez1em+63S5rt9uvEz49PbHHx0derVZ3eZ5PAJ9EIlFHIpGUx8fHTWNjYxE47BeLxXC1WmUbGxu8WCzmYMMpFAqRxWLhKAqCsB4eHtj9/b0IIV9AiX0TC482o9Got9FomPP5/NtIJHJ1eHgYDIfDwhs4YyBkSqWSgZBNT09zwEgkRz86na6o1Wr7k5OTZ0AL54/w+g17D7m8SiaTZplMVuQ4rgKyMvYCiFvI9TYiYYDAw56fnwmcVCptqFSqHB5fG43Ga3hs4LMLSKNIl7lczkO2+F+h0WjknU6Hira+trb2lYq4sLDAC4R3d3es3+9L5HL5OXJkQRVL5XK5WKvVtofKtchCq1AoxLLZrCCA1szMDJFY7XZ7BzudRbD5UxwQvsf2DkgAKSCDsEq0I79d5NCYyWRYPB5np6enzGq1srm5OSsUXs7Pz1OrDRRCibAjXEr09uLiohTJ591uNxlwNptNTP1nMBjkIFUjAiV21c7OjgbVnwd8Xq+X4T5QhiqSut9Ca2gFMVUeCriVlRWeehTnDFR8x7fPcPwN6KPNTpDLEzj6gkqfkB16WvR3W+ZXV1eFCaFJwQMWCoWo95qtVosk2OA8BOIAGd/e3sqQ9yByfFUqlUjcIGx44+gxGvYDyHwgcwBOqFqfmJgwIKQ0pucnmruNcC8I+/v7NwcHB929vb0fSM8xSFkwGBwohFzO5XIx5Mvv8XgqQI4Aw4rP5wuC2IuJuYEptVLrBc4g4hrO08NpGRBSlQj0J4oyAvqRwqU5r6MYWTjNIU9N4Jh6FwL0UJgIBAI9qGZQPCAcNqYwQktLSzSfAtBj0q2tLUr2EQpzDlM/0hPHyEUx85u4u9GPZdh1yW4U8r8WwmSYIBorDa5eys4LuIdYhxMd+5+F2RVIaVZfWyAcnX8BNY++gXRrLO4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"enrichmentSmall",title:"enrichmentSmall",src:"/static/b2de83805edcae15b7e6a78c9a6e74e8/5e0da/enrichmentSmall.png",srcSet:["/static/b2de83805edcae15b7e6a78c9a6e74e8/5e0da/enrichmentSmall.png 118w"],sizes:"(max-width: 118px) 100vw, 118px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," \nClinical Data Enrichment")))),Object(r.b)("p",null),Object(r.b)("h3",null,"Coming Soon"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Clinical Data Access and Analytics")))}g.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2EvBK",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--5mCgN",link:"EditLink-module--link--QlquD",row:"EditLink-module--row--104Au"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--3BhKg",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3k3x1",tabsContainer:"PageTabs-module--tabs-container--3ku4u",list:"PageTabs-module--list--Zs80A",listItem:"PageTabs-module--list-item--UVTiB",link:"PageTabs-module--link--TAIyd",selectedItem:"PageTabs-module--selected-item--2Kv-J"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--2SjuB",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3jsoz",pageHeader:"PageHeader-module--page-header--365gs",darkMode:"PageHeader-module--dark-mode--1Y-8D",withTabs:"PageHeader-module--with-tabs--2y_Tu",text:"PageHeader-module--text--3r6mD"}}}]);
//# sourceMappingURL=component---src-pages-patterns-index-mdx-be766aba2143dfda7d6c.js.map