(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("NmYn"),o=a.n(r),c=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),h=a.n(p),u=a("qKvR"),m=function(e){var t,a=e.title,i=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:d()(h.a.pageHeader,(t={},t[h.a.withTabs]=r.length,t[h.a.darkMode]="dark"===i,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h2",{id:"page-title",className:h.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,i=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,r=n.baseUrl,o=n.subDirectory,s=r+"/edit/"+n.branch+o+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},f=a("FCXl"),A=a("dI71"),j=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===n,s=new RegExp(n+"/?(#.*)?$"),l=i.replace(s,a);return Object(u.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=r,t),j.listItem)},Object(u.b)(c.Link,{className:j.link,to:""+l},e))}));return Object(u.b)("div",{className:j.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:j.list},r))))))},t}(n.a.Component),w=a("MjG9"),N=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,p=t.titleType,h=b.tabs,g=b.title,A=b.theme,j=b.description,y=b.keywords,x=Object(N.a)().interiorTheme,T=Object(c.useStaticQuery)("2456312558").site.pathPrefix,C=T?i.pathname.replace(T,""):i.pathname,k=h?C.split("/").filter(Boolean).slice(-1)[0]||o()(h[0],{lower:!0}):"",I=A||x;return Object(u.b)(l.a,{tabs:h,homepage:!1,theme:I,pageTitle:g,pageDescription:j,pageKeywords:y,titleType:p},Object(u.b)(m,{title:n?Object(u.b)(n,null):g,label:"label",tabs:h,theme:I}),h&&Object(u.b)(v,{title:g,slug:C,tabs:h,currentTab:k}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:d})),Object(u.b)(f.a,{pageContext:t,location:i,slug:C,tabs:h,currentTab:k}),Object(u.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2EvBK",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--5mCgN",link:"EditLink-module--link--QlquD",row:"EditLink-module--row--104Au"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--3BhKg",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3k3x1",tabsContainer:"PageTabs-module--tabs-container--3ku4u",list:"PageTabs-module--list--Zs80A",listItem:"PageTabs-module--list-item--UVTiB",link:"PageTabs-module--link--TAIyd",selectedItem:"PageTabs-module--selected-item--2Kv-J"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--2SjuB",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3jsoz",pageHeader:"PageHeader-module--page-header--365gs",darkMode:"PageHeader-module--dark-mode--1Y-8D",withTabs:"PageHeader-module--with-tabs--2y_Tu",text:"PageHeader-module--text--3r6mD"}},XZFa:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var i=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),{}),s={_frontmatter:c},l=o.a;function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(l,Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",null,"Conceptual Architecture"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.611111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB9ElEQVQoz21SyZLTMBT03/MJHPgEuMyVKjhCcQCKWSCQydhJJollyZt2OalqWpphThxeWXputfp1q1qv14jRoxUt7n7XOJ5OmKYJzhncre6xOwh0XYcQAprtFvfNsWC0MRgGhdW6Qdv1sNbwjEP15kPEzTZiWQK/CaPmD+9xuST8OS64qWf0SiDEiNkGfN0kdErBx4QleVw3Eev9hFmPcCGiuvqisT5YpOTwKB1m40gY4KkoBovgLW93LK6DpwpblBj2gje43SXspYcuhCErdLiuLcdU+LlPUMMIy0MxBRykxaMwZXzrPEkMD+qX8sQNOsC4WPBZRPXus8NqbzGOkkoD5ED59CcEh00bcX+0mOee4FgI52eyrFIpntnQQyHZnzkZPXz7yRTCZfFoRMQ482aOFlLiyIYqMsmTsjKy1TC8cM44p4v/D0fN/QBL76vX7x19oF+J4TQBQir044jzOTKUhNt6onqFtCyYjMe3hwjB1DU9TZF2McityN7ywrSg+vhjwk5Q4TmhHegHgZqjZU/UHNCNlop0STkrKBh6VyYomJx+ZKjxycNXVwnfmwuc7lDXG76tHkIItO0JUrb0qWMpdLLjvitPqCcmp53DC3wJOZz8CnKv+rUzmNyZRBJ10xRCSbMzQQ4hG/3fcvaF9N869/8CIPL07lG+N4AAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Alvearie Conceptual Architecture",title:"Alvearie Conceptual Architecture",src:"/static/4cf54bd2a248e01ea360580777dac364/3cbba/alvearieConceptualArchitecture.png",srcSet:["/static/4cf54bd2a248e01ea360580777dac364/7fc1e/alvearieConceptualArchitecture.png 288w","/static/4cf54bd2a248e01ea360580777dac364/a5df1/alvearieConceptualArchitecture.png 576w","/static/4cf54bd2a248e01ea360580777dac364/3cbba/alvearieConceptualArchitecture.png 1152w","/static/4cf54bd2a248e01ea360580777dac364/5251f/alvearieConceptualArchitecture.png 1432w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"Project Alvearie is a collection of components that can be combined to build custom data pipelines and other solutions\nthat can help organizations improve the flow of health data. These components will move the data through five key stages."),Object(r.b)("p",null,"These stages include data integration, data ingestion, data persistence, data access and data analytics. There will also be\ntwo layers that are used across all of the stages: cloud infrastructure and common services."),Object(r.b)("p",null,"Let’s explore the specific technologies that will be used in each stage."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cloud Infrastructure")),Object(r.b)("p",null,"Our ultimate goal is for Alvearie to be cloud agnostic. To achieve that, we’ll be building all the components of Alvearie on an OpenShift infrastructure. OpenShift provides the flexibility needed for Alvearie to work on any cloud platform, so developers and healthcare organizations can work with services they trust and know deeply."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Common Services")),Object(r.b)("p",null,"This layer will include important features that most organizations need for managing health data. These services will include auditing,\nlogging, security management, data quality and lineage and other services shared across each stage of Alvearie. "),Object(r.b)("h3",null,"Data Integration and Ingestion Architecture"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACHElEQVQozzVSXW/TMBTN//8FvPOKkBhPTICmjpaybBpF66ACunTtmo86/ogdO46THm49ZunKN1Z07jnnnuTuQWIYOmyLHAfGkGUZJpNLfJlNcP9jjfXPCuUhhzEtDlsPzhpIJSCEiG/WOioL5xyOGJG8mWnYlqPa5pCsxsN6jfMP55hML7Ba7PF3oXCoC9Q1x3LKUZdtBBNcous8Qgjo+0CAHcbjgOTdXGJ5fwuVrtDsSxhnEHyPNL2CFAqNNJHJdveIm+lv1HuHMmcw0uP5HGOdgCPDt3ML7xvo1Q7yqURNshshcfb+jCw4EJiBlJJYeGg+oNppCGbQihGc2Cqh4dqeGAv0wZ8kKywWxOaWGOYlOK9htSGAHq5zaJoG7GRFtgZ7Iq//cLCKw/AR5SOBV5b6gPTqOnqbnKUmEq9FoAea3FpoApRKUm+gG42iKHCVfiNAi82Ko8grWBP+Cx5jjeMYv5LXFxJfZ5/xkNZgW4bgaCIBnph1PYEb8lE1ZEuHtglQNbFWJJMArfFoyd/eh7jpuJRP3wWWd7SU/ADHG/SNJV9UjE3+qLBfG3BJS9CWPOrxcoI/osg0FOvQt8B1egMhOZJXH59/UjRJEitFJeUpKiXYvsXmXqNiJUWrI9Y62qHN8+2sx3L5C7PpPCpynUViiOow9FFSR/VyD0PAMJJEknuKjacoaa2p1xQlG7PoLIV9t0e2yeD7Lnr5DwUu8Y1vekgQAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Alvearie Architecture",title:"Alvearie Architecture",src:"/static/2e44a7445c82d82d421be7291269da2f/3cbba/alvearieArchitecturePart1.png",srcSet:["/static/2e44a7445c82d82d421be7291269da2f/7fc1e/alvearieArchitecturePart1.png 288w","/static/2e44a7445c82d82d421be7291269da2f/a5df1/alvearieArchitecturePart1.png 576w","/static/2e44a7445c82d82d421be7291269da2f/3cbba/alvearieArchitecturePart1.png 1152w","/static/2e44a7445c82d82d421be7291269da2f/79b1f/alvearieArchitecturePart1.png 1494w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h3",null,"Data integration"),Object(r.b)("p",null,"The data integration stage will be the starting point for any data coming into Alvearie that isn’t already in a standard\nformat like FHIR or DICOM. This stage will provide a single front door for incoming data and will transform raw data into standard\nformats that can be used by Alvearie. Key components include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Linux for Health Connect:")," ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://linuxforhealth.github.io/docs/"}),"Linux for Health")," is an operating system that can be run where the data is stored, either on-premises or in the cloud, and used to export the data into Alvearie.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Intelligent Data as a Service:")," This ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://connectedhealth-idaas.io/"}),"open source framework")," for integrating health data from Red Hat will complement Alvearie by making it easier for health care systems to integrate with the Alvearie environment.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Client gateway"),": The client gateway will provide a path for data to be standardized and combined in a batch before sending to Alvearie. This component will be based on an open source integration engine called ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/nextgenhealthcare/connect"}),"Mirth"),"."))),Object(r.b)("h3",null,"Data ingestion"),Object(r.b)("p",null,"The next stage that data will travel through is the data ingestion stage. Here, the records will be ingested by\nAlvearie and pass through several orchestration steps that provide some additional data transformation and standardization\nbefore the data is stored in a database. For this stage, we’ll be using ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://nifi.apache.org/"}),"Apache NiFi"),", an open source technology that can efficiently\nprocess and distribute large quantities of data. The components for this stage include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://alvearie.github.io/HRI/"}),"Health record ingestion"),": All incoming data in FHIR and HL7 v2 formats will be sent to HRI where it will be audited, logged, and routed to Nifi for orchestration.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Imaging ingestion"),": Imaging data in the form of DICOM will be received by this component.  The images will be persisted in a configured DICOM storage component, and metadata about the images will be passed into Nifi for orchestration.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Alvearie/hri-pipeline-adapters"}),"FHIR ingestion"),": Some additional transformation of FHIR records will be conducted so that all FHIR records conform to Alvearie’s common data model. When the records are in this common format, they can either be stored in a database or transformed further with additional data orchestration components like de-identification or patient and provider matching.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Alvearie FHIR Implementation Guide:")," This FHIR Implementation Guide extends the FHIR v4 guide and provides additional profiles to enable analytics, person matching and other features.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Patient and provider matching:")," This component will identify unique patient and provider records so that duplicate records can be merged or linked.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Alvearie/de-identification"}),"Data De-identification"),": Data that is de-identified is very valuable for conducting research or tracking performance with analytics. With this component, records can be de-identified then stored in a database for other tools to access it."))),Object(r.b)("h3",null,"Data Persistence, Access and Analytics Architecture"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.69444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB50lEQVQozz1SaW8aMRTk//+nNvmQtKoiVS1BCUmqlKML7HoP3/augenYJFgy1uLneXO8GbjSKWHz5x31poJoBay1MMbwNNBaY0oThq7Dav6MnqfjvQ0OxrtSZ1h3Oh9xxgmz/JO4w3IN9XOJVvZIMWLoB0gpy2m8RVQa9uEVYr8niEbYNtC7pjR3xuJIUlfA45kM6oj9igBDixhCYab5MJ+OTIKzUH8r9EJAKQU7f0f812Ai0Mj6K+A4RUzHgK6asFpodO3Ax4nA8sJwGKAsGQ0K/uEN1XYDT8bOezakXILnplfJ377fY/H8G+02Yf1k0DQ1tPToPyUTMEtUWqIZahit4MjW8r/sXfbZ8juOsYBeJRsVKIcMu7YYrY28yOYO0UOIDosfFfa7A5vSP+eg6V++z/XpOF0YTmnEmAJUH9DsJA71gUlKJm74uC4MffBkZnFYx2JF23dQ6wOs6GHpbwkmBzeGi+Snl0foBti+GhbXTC2iWiZ0QiLQcEc2gWOiRAPFBkO24HaO4dcbifQYtcHd/R2+3nzBDB/LR84UzVdS0TtVJCuOiiQjR4b5kb19hBRtYRJZY5oOQWp43n2uWTYy73EaC5ssz1OGZ4qerLLhOZDs45iTZSg5JGtCST8H5AjuWJsn5j81UvsPhgsTWAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Alvearie Architecture",title:"Alvearie Architecture",src:"/static/4bdd22e3473b1d8c61c89176c2fcf536/3cbba/alvearieArchitecturePart2.png",srcSet:["/static/4bdd22e3473b1d8c61c89176c2fcf536/7fc1e/alvearieArchitecturePart2.png 288w","/static/4bdd22e3473b1d8c61c89176c2fcf536/a5df1/alvearieArchitecturePart2.png 576w","/static/4bdd22e3473b1d8c61c89176c2fcf536/3cbba/alvearieArchitecturePart2.png 1152w","/static/4bdd22e3473b1d8c61c89176c2fcf536/a882e/alvearieArchitecturePart2.png 1439w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h3",null,"Data persistence"),Object(r.b)("p",null,"Once the data is fully integrated and transformed into FHIR format, it will need to be stored. Because different organizations\nhave different requirements and goals, this stage will be configurable and provide a few different options for storing data.\nHere are some of the options that will be included:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://ibm.github.io/FHIR/"}),"IBM FHIR server"),":  This open source server provides a data store for FHIR resources in either IBM DB2 or Postgres and HTTP APIs for storage and retrieval.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.dcm4che.org/"}),"Dcm4che DICOM storage"),": Imaging data will be stored in a database using an open source clinical image archive called Dcm4che.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Relational data warehouse"),": Organizations will have the option to use a relational data warehouse if they want a more traditional way to store their data and connect it to business applications.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Parquet data store"),": The Parquet storage format can be used by organizations that need that structure for running analytics applications."))),Object(r.b)("h3",null,"Data access"),Object(r.b)("p",null,"Alvearie will be able to serve the data to APIs and other applications during this stage. This stage will ultimately be when most\nexternal applications connect with Alvearie to retrieve the standardized data. The connections we’re planning to build include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.dcm4che.org/"}),"Dcm4che Image Viewer"),": Imaging data can be accessed and viewed using an open source viewer from Dcm4che.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.3scale.net/"}),"3scale"),": APIs can connect through this component to deliver data to external applications. 3scale is an open source API gateway supported by Red Hat.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"SMART on FHIR and CDS Hooks"),": ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://smarthealthit.org/"}),"SMART on FHIR")," is a free, open standards API that provides access to FHIR data and ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://cds-hooks.org/"}),"CDS Hooks")," is an open API for clinical decision support. These APIs can be used for data requests from a variety of applications, ranging from smartphone apps to enterprise analytics."))),Object(r.b)("h3",null,"Data analytics"),Object(r.b)("p",null,"Often, additional steps need to be taken to prepare data for analytics and research. This stage in Alvearie will offer services and components that can make the standardized data usable for artificial intelligence (AI) applications, creating patient cohorts and other healthcare-specific use cases. The analytics components include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://alvearie.github.io/quality-measure-and-cohort-service/"}),"Cohort & Quality Measure service"),": This service will provide the ability for patient cohorts to be defined and retrieved using Clinical Quality Language. This service will be valuable for researchers and healthcare leaders who want to learn more about specific patient populations.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.kubeflow.org/"}),"Kubeflow"),": This open source project provides a portable way to deploy machine learning workflows on kubernetes. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Dashboards"),": Analytics dashboards from various vendors can be connected to data storage through this component to provide organizations with their most recent data. "))),Object(r.b)("p",null),Object(r.b)("p",null))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-architecture-index-mdx-af2c8bd89e79e26f4c5d.js.map