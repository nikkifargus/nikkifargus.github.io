(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=(n(148),n(152)),o=n(153),c=n(155);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Contact Us"}),r.a.createElement(c.a,null,"peter@fargus.co.uk | dee@fargus.co.uk"),r.a.createElement(c.a,null,r.a.createElement("a",{style:{color:"#565347"},href:"https://www.linkedin.com/in/pfargus/"},"Peter Fargus")," | ",r.a.createElement("a",{style:{color:"#565347"},href:"https://www.linkedin.com/in/dee-fargus-20382b12/"},"Dee Fargus")),r.a.createElement(c.a,null,"01423 566035"))}},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(147),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(149),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},150:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(51),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,n){},152:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(148),s=function(){return r.a.createElement("div",{style:{background:"#999584",marginBottom:"1.45rem",padding:"1.45rem 1.0875rem",display:"flex",flexDirection:"row"}},r.a.createElement("h1",{style:{margin:0,maxWidth:960}},r.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},"FCP")),r.a.createElement("div",{style:{justifyContent:"space-evenly",display:"flex",flexDirection:"row",alignItems:"center",flex:1}},r.a.createElement("h3",{style:{margin:0,maxWidth:960}},r.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},"Home")),r.a.createElement("h3",{style:{margin:0,maxWidth:960}},r.a.createElement(c.Link,{to:"/about-us/",style:{color:"white",textDecoration:"none"}},"About Us")),r.a.createElement("h3",{style:{margin:0,maxWidth:960}},r.a.createElement(c.Link,{to:"/what-we-do/",style:{color:"white",textDecoration:"none"}},"What We Do")),r.a.createElement("h3",{style:{margin:0,maxWidth:960}},r.a.createElement(c.Link,{to:"/client-list/",style:{color:"white",textDecoration:"none"}},"Client List"))))};s.propTypes={},s.defaultProps={};var l=s,u=(n(151),function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(l,null),r.a.createElement("div",{style:{paddingLeft:"6rem",paddingRight:"6rem",flex:1}},t,r.a.createElement("footer",{style:{paddingTop:"2rem"}},r.a.createElement("p",{style:{fontSize:15,marginBottom:0,textAlign:"center",color:"#565347"}}," Our standards are based on those specified by the ",r.a.createElement("a",{href:"https://www.cipd.co.uk/"},"Chartered Institute of Personnel & Development"),", the ",r.a.createElement("a",{href:"http://www.bps.org.uk/"},"British Psychological Society"),", and the ",r.a.createElement("a",{href:"http://www.ibconsulting.org.uk/"},"Institute of Business Consulting"),"."),r.a.createElement("p",{style:{fontSize:17,marginBottom:0,textAlign:"center",color:"#565347"}},"peter@fargus.co.uk | 01423 566035 | dee@fargus.co.uk"))))});u.propTypes={children:o.a.node.isRequired};t.a=u},153:function(e,t,n){"use strict";var a=n(154),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(156),l=n.n(s),u=n(148);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},155:function(e,t,n){"use strict";var a=n(4),r=n.n(a),i=n(0),o=n.n(i),c=function(e){var t=e.children,n=e.style;return console.log("style",n),o.a.createElement("p",{style:{color:"#565347",fontSize:20}},t)};c.propTypes={siteTitle:r.a.string},c.defaultProps={siteTitle:""},t.a=c}}]);
//# sourceMappingURL=component---src-pages-contact-us-js-f7b2546bf55737770939.js.map