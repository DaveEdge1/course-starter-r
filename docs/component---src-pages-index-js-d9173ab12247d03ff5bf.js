(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{681:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});var n=a(0),r=a.n(n),i=a(699),c=a(691),s=a(694),o=a.n(s),l=a(682),u=a.n(l);t.default=function(e){var t=e.data,a=t.site.siteMetadata,n=t.allMarkdownRemark.edges.map(function(e){var t=e.node;return{slug:t.fields.slug,title:t.frontmatter.title,description:t.frontmatter.description}});return r.a.createElement(i.a,{isHome:!0},r.a.createElement(o.a,{className:u.a.logo,"aria-label":a.title}),n.map(function(e){var t=e.slug,a=e.title,n=e.description;return r.a.createElement("section",{key:t,className:u.a.chapter},r.a.createElement("h2",{className:u.a.chapterTitle},r.a.createElement(c.a,{hidden:!0,to:t},a)),r.a.createElement("p",{className:u.a.chapterDesc},r.a.createElement(c.a,{hidden:!0,to:t},n)))}))};var m="2950746046"},685:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(5),c=a.n(i),s=a(96),o=a.n(s);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return s.navigate});a(690);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},690:function(e,t,a){var n;e.exports=(n=a(696))&&n.default||n},691:function(e,t,a){"use strict";a.d(t,"a",function(){return f});a(97);var n=a(292),r=a.n(n),i=a(0),c=a.n(i),s=a(5),o=a.n(s),l=a(685),u=a(688),m=a.n(u),d=a(667),p=a.n(d),f=function(e){var t,a=e.children,n=e.to,i=e.href,s=e.onClick,o=e.variant,u=e.hidden,d=e.className,f=r()(e,["children","to","href","onClick","variant","hidden","className"]),h=n||i,g=/(http(s?)):\/\//gi.test(h),E=m()(p.a.root,d,((t={})[p.a.hidden]=u,t[p.a.secondary]="secondary"===o,t));return g?c.a.createElement("a",Object.assign({href:h,className:E,target:"_blank",rel:"noopener nofollow noreferrer"},f),a):h&&/^#/.test(h)||s?c.a.createElement("a",{href:h,onClick:s,className:E},a):c.a.createElement(l.a,Object.assign({to:h,className:E},f),a)};f.propTypes={children:o.a.node.isRequired,to:o.a.string,href:o.a.string,onClick:o.a.func,variant:o.a.oneOf(["secondary",null]),hidden:o.a.bool,className:o.a.string}},693:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return l}),a.d(t,"e",function(){return u}),a.d(t,"f",function(){return m}),a.d(t,"d",function(){return d});var n=a(0),r=a.n(n),i=a(668),c=a.n(i),s=function(e){var t=e.children;return r.a.createElement("h3",{className:c.a.h3},t)},o=function(){return r.a.createElement("hr",{className:c.a.hr})},l=function(e){var t=e.children;return r.a.createElement("code",{className:c.a.code},t)},u=function(e){var t=e.children;return r.a.createElement("ol",{className:c.a.ol},t)},m=function(e){var t=e.children;return r.a.createElement("ul",{className:c.a.ul},t)},d=function(e){var t=e.children;return r.a.createElement("li",{className:c.a.li},t)}},694:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M129.4 159.4l-29.8 2.1 5.1-49.3-29.8 49.5-19.6 1.3-20.1-47.3-5.3 50.7L0 168.5 12.3 51.4l25.4-1.8 30.7 68.6 45.5-73.9 27.9-2zM219.6 110.5l-5 43-29.8 2 4.9-42.9-36.2-71.1 33.4-2.3 19 42.6 29.4-46 35.7-2.5zM410.3 34.1c10.2 7.5 15.9 18 17.1 31.8l-30.9 4.5c-2.1-14-10.6-20.3-23.4-19.4a31.9 31.9 0 0 0-22.7 11.2c-5.9 6.8-9.1 15.6-9.8 26-1.5 20.5 9.3 30.9 25.2 29.8s24.8-9.3 28.7-23.7l31 1.2a60.8 60.8 0 0 1-20.6 34.2 62.1 62.1 0 0 1-36.8 14.7c-18.2 1.3-32.7-3.3-43.5-13.6s-15.4-25-14.1-43.9 7.7-32.5 19.2-43.7 25.8-17.5 42.9-18.7c15-1.1 27.7 2.1 37.7 9.6zM544.7 29.5c11.4 10.6 17 25 16.2 43.3s-6.6 32.2-17.8 43.5-25.4 17.7-42.9 18.9-33.7-3.2-45.1-13.8-17-25.1-16.3-43.4 6.6-32.2 17.8-43.5 25.7-17.7 43.1-18.9 33.5 3.4 45 13.9zm-75.6 49.8c.1 19.7 11.6 30.7 29.5 29.4 19.8-1.3 32.2-15.9 32.1-37.2-.1-19.7-11.6-30.7-29.6-29.4-19.8 1.3-32.1 15.9-32 37.2zM680.8 20c11.4 10.6 16.9 24.9 16.2 43.3s-6.6 32.2-17.8 43.5-25.5 17.7-43 18.9-33.6-3.3-45-13.8-17-25.1-16.3-43.5 6.6-32.1 17.8-43.5 25.6-17.6 43.1-18.8 33.5 3.4 45 13.9zm-75.7 49.7c.2 19.8 11.7 30.8 29.6 29.5 19.8-1.4 32.1-15.9 32.1-37.2-.2-19.7-11.7-30.7-29.6-29.5-19.8 1.4-32.1 16-32.1 37.2zM737.7 90.3l45.9-3.2-2.7 26.8-75.8 5.3L717.4 2.1 747.3 0zM119.8 240.9c10.1 7.5 15.8 18 17.1 31.7l-30.9 4.5c-2.1-14-10.6-20.2-23.4-19.3A31.6 31.6 0 0 0 59.9 269c-5.9 6.8-9.2 15.6-9.9 26-1.5 20.5 9.3 30.9 25.3 29.8s24.8-9.4 28.6-23.8l31 1.3c-3.2 14-10 25.4-20.6 34.2a63.1 63.1 0 0 1-36.7 14.7c-18.3 1.3-32.7-3.3-43.5-13.6s-15.5-25-14.1-43.9 7.6-32.5 19.1-43.8 25.8-17.5 43-18.7c15-1 27.6 2.2 37.7 9.7zM254.1 236.3c11.5 10.5 17 24.9 16.3 43.3s-6.6 32.2-17.8 43.5-25.5 17.6-43 18.9-33.6-3.3-45.1-13.8-16.9-25.1-16.2-43.5 6.6-32.1 17.8-43.5 25.6-17.6 43.1-18.8 33.5 3.4 44.9 13.9zM178.5 286c.2 19.8 11.7 30.8 29.6 29.5 19.8-1.4 32.1-15.9 32-37.2-.1-19.7-11.6-30.7-29.5-29.5-19.8 1.4-32.2 16-32.1 37.2zM396.7 211l-7 68.2c-3.8 32.4-23.1 51.8-54.5 54-16.2 1.1-28.8-2.7-37.5-11.4s-12-21.2-10.2-37.3l6.9-66.4 29.8-2.1-7.3 67.3c-1.6 16.5 4.5 24.3 18.4 23.3s23-10 24.7-27l6.9-66.6zM477.6 278.9l18.1 41.4-31.2 2.1-16.3-37.7-14.4 1-4.1 39.2-29.8 2.1 12.3-117.1 48.2-3.4c11.9-.8 21.6 2.2 28.8 9.2s10.5 16.6 9.6 29c-1.8 16.6-8.9 27.9-21.2 34.2zm-41-19.9l18.8-1.3c7.5-.6 12.3-5.1 13.1-13.2s-3.1-11.8-10.4-11.3l-18.9 1.4zM595.8 205.6c8.1 6.1 11.8 14.8 11 26.1l-30.3 3.4c.5-8-3.5-12.2-11.4-11.7s-14 5.2-14.6 11.9 2.9 7.9 16.8 10.5 22.9 6 29.3 11 9.6 12.4 8.9 22.5c-2 24.7-21.3 36.9-44.1 38.1-15 1-26.7-1.6-35.4-7.8s-12.4-15.6-11.4-27.8l30.4-3.2c-.6 8.7 5 13.6 14.4 13s15.3-4.5 15.6-11.2-4.9-9-16.8-11.1-19.7-4.4-27.5-9-11.5-12.9-10.6-24.3a38.9 38.9 0 0 1 12.2-26.1c7.4-7.2 17.7-11.4 30.7-12.3s24.8 1.7 32.8 8zM699.8 216.3l-46 3.2-1.8 17.6 39.4-2.8-2.8 26.2-39.5 2.7-2 19.9 46.2-3.2-2.9 26.7-75.9 5.4 12.3-117.1 75.8-5.3z"}))}r.defaultProps={width:"783.6",height:"351.4",viewBox:"0 0 783.6 351.4"},e.exports=r,r.default=r},696:function(e,t,a){"use strict";a.r(t);a(97);var n=a(0),r=a.n(n),i=a(5),c=a.n(i),s=a(159),o=a(11),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},697:function(e){e.exports={data:{site:{siteMetadata:{title:"My cool online course",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique libero at est congue, sed vestibulum tortor laoreet. Aenean egestas massa non commodo consequat. Curabitur faucibus, sapien vitae euismod imperdiet, arcu erat semper urna, in accumsan sapien dui ac mi. Pellentesque felis lorem, semper nec velit nec, consectetur placerat enim.",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique libero at est congue, sed vestibulum tortor laoreet. Aenean egestas massa non commodo consequat. Curabitur faucibus, sapien vitae euismod imperdiet, arcu erat semper urna.",showProfileImage:!0,footerLinks:[{text:"Website",url:"https://spacy.io"},{text:"Source",url:"https://github.com/ines/course-starter-r"},{text:"Built with ♥",url:"https://github.com/ines/course-starter-r"}]}}}}},698:function(e){e.exports={data:{site:{siteMetadata:{title:"My cool online course",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique libero at est congue, sed vestibulum tortor laoreet. Aenean egestas massa non commodo consequat. Curabitur faucibus, sapien vitae euismod imperdiet, arcu erat semper urna, in accumsan sapien dui ac mi. Pellentesque felis lorem, semper nec velit nec, consectetur placerat enim.",slogan:"A free online course",siteUrl:"https://course-starter-r.netlify.com",twitter:"spacy_io",fonts:"IBM+Plex+Mono:500|IBM+Plex+Sans:700|Lato:400,400i,700,700i"}}}}},699:function(e,t,a){"use strict";var n=a(697),r=a(0),i=a.n(r),c=a(685),s=a(698),o=a(721),l=a.n(o),u=function(e){var t=e.title,a=e.description;return i.a.createElement(c.b,{query:m,render:function(e){var n=e.site.siteMetadata,r=t?t+" · "+n.title:n.title+" · "+n.slogan,c=a||n.description,s=n.siteUrl+"/social.jpg",o=[{name:"description",content:c},{property:"og:title",content:r},{property:"og:description",content:c},{property:"og:type",content:"website"},{property:"og:site_name",content:n.title},{property:"og:image",content:s},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:s},{name:"twitter:creator",content:"@"+n.twitter},{name:"twitter:site",content:"@"+n.twitter},{name:"twitter:title",content:r},{name:"twitter:description",content:c}];return i.a.createElement(l.a,{defer:!1,htmlAttributes:{lang:"en"},title:r,meta:o},n.fonts&&i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+n.fonts,rel:"stylesheet"}))},data:s})},m="463181092",d=a(691),p=a(693),f=a(694),h=a.n(f),g=(a(669),a(670)),E=a.n(g);t.a=function(e){var t=e.isHome,a=e.title,r=e.description,s=e.children;return i.a.createElement(c.b,{query:"2688331134",render:function(e){var n=e.site.siteMetadata;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{title:a,description:r}),i.a.createElement("main",{className:E.a.root},!t&&i.a.createElement("h1",{className:E.a.logo},i.a.createElement(d.a,{hidden:!0,to:"/"},i.a.createElement(h.a,{width:150,height:54,"aria-label":n.title}))),i.a.createElement("div",{className:E.a.content},(a||r)&&i.a.createElement("header",{className:E.a.header},a&&i.a.createElement("h1",{className:E.a.title},a),r&&i.a.createElement("p",{className:E.a.description},r)),s),i.a.createElement("footer",{className:E.a.footer},i.a.createElement("div",{className:E.a.footerContent},i.a.createElement("section",{className:E.a.footerSection},i.a.createElement(p.a,null,"About this course"),i.a.createElement("p",null,n.description)),i.a.createElement("section",{className:E.a.footerSection},i.a.createElement(p.a,null,"About me"),n.showProfileImage&&i.a.createElement("img",{src:"/profile.jpg",alt:"",className:E.a.profile}),i.a.createElement("p",null,n.bio)),n.footerLinks&&i.a.createElement("ul",{className:E.a.footerLinks},n.footerLinks.map(function(e,t){var a=e.text,n=e.url;return i.a.createElement("li",{key:t,className:E.a.footerLink},i.a.createElement(d.a,{variant:"secondary",to:n},a))}))))))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-index-js-d9173ab12247d03ff5bf.js.map