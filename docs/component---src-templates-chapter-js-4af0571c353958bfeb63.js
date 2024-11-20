(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{684:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(685),o=a(822),l=a.n(o),i=a(823),s=a.n(i),u=(a(156),a(157),a(688)),m=a.n(u),d=(a(841),a(843)),p=a.n(d),f=a(673),h=a.n(f),v=function(e){var t,a=e.Component,n=void 0===a?"button":a,c=e.children,o=e.onClick,l=e.variant,i=e.small,s=e.className,u=m()(h.a.root,s,((t={})[h.a.primary]="primary"===l,t[h.a.secondary]="secondary"===l,t[h.a.small]=!!i,t));return r.a.createElement(n,{className:u,onClick:o},c)},g=function(e){var t,a=e.completed,n=e.toggleComplete,c=e.small,o=void 0===c||c,l=m()(((t={})[h.a.completeInactive]=!a,t[h.a.completeActive]=a,t));return r.a.createElement(v,{small:o,onClick:n,className:l},a?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{width:14,height:14,className:h.a.completeIcon})," ",r.a.createElement("span",{className:h.a.completeLabel},"Completed")," ",r.a.createElement("span",{className:h.a.completeLabelHover},"Remove from completed")):"Mark as completed")},b=r.a.createContext(),E=a(844),y=a.n(E),k=a(674),w=a.n(k),N=function(e){var t,a,c,o=e.id,l=e.title,i=e.type,s=e.children,u=Object(n.useRef)(),d=parseInt(o),p=Object(n.useContext)(b),f=p.activeExc,h=p.setActiveExc,E=p.completed,k=p.setCompleted,N=f===d,C=E.includes(d);Object(n.useEffect)(function(){N&&u.current&&u.current.scrollIntoView()},[N]);var x=Object(n.useCallback)(function(){return h(N?null:d)},[N,d]),M=Object(n.useCallback)(function(){return h(d+1)}),S=Object(n.useCallback)(function(){var e=C?E.filter(function(e){return e!==d}):[].concat(E,[d]);k(e)},[C,E,d]),_=m()(w.a.root,((t={})[w.a.expanded]=N,t[w.a.wide]=N&&"slides"===i,t[w.a.completed]=!N&&C,t)),j=m()(w.a.title,((a={})[w.a.titleExpanded]=N,a));return r.a.createElement("section",{ref:u,id:o,className:_},r.a.createElement("h2",{className:j,onClick:x},r.a.createElement("span",null,r.a.createElement("span",{className:m()(w.a.id,(c={},c[w.a.idCompleted]=C,c))},d),l),"slides"===i&&r.a.createElement(y.a,{className:w.a.icon})),N&&r.a.createElement("div",null,s,r.a.createElement("footer",{className:w.a.footer},r.a.createElement(g,{completed:C,toggleComplete:S}),r.a.createElement(v,{onClick:M,variant:"secondary",small:!0},"Next"))))},C=a(20),x=a.n(C),M=(a(98),a(845),a(97),a(846)),S=a(675),_=a.n(S),j=function(e){var t=e.expanded,a=void 0!==t&&t,c=e.actions,o=void 0===c?[]:c,l=e.children,i=Object(n.useState)(a),s=i[0],u=i[1],m=Object(n.useCallback)(function(){return u(!s)},[s]);return r.a.createElement("aside",{className:_.a.root},s&&l&&r.a.createElement("div",{className:_.a.content},l),r.a.createElement("menu",{className:_.a.actions},l&&r.a.createElement("button",{className:_.a.label,onClick:m},s?"Hide hints":"Show hints"),o.map(function(e,t){var a=e.text,n=e.onClick;return r.a.createElement("button",{className:_.a.label,key:t,onClick:n},a)})))},z=a(676),A=a.n(z);var q=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={Juniper:null,showSolution:!1,key:0},t}x()(t,e);var n=t.prototype;return n.handleShowSolution=function(){this.setState({showSolution:!0})},n.handleReset=function(){this.setState({showSolution:!1,key:this.state.key+1})},n.updateJuniper=function(){var e=this;this.state.Juniper||Promise.resolve().then(a.bind(null,331)).then(function(t){e.setState({Juniper:t.default})})},n.componentDidMount=function(){this.updateJuniper()},n.componentDidUpdate=function(){this.updateJuniper()},n.render=function(){var e=this,t=this.state,a=t.Juniper,n=t.showSolution,o=this.props,l=o.id,i=o.source,s=o.solution,u=o.test,m=o.children,d=i||"exc_"+l,p=s||"solution_"+l,f=u||"test_"+l,h={cell:A.a.cell,input:A.a.input,button:A.a.button,output:A.a.output},g=[{text:"Show solution",onClick:function(){return e.handleShowSolution()}},{text:"Reset",onClick:function(){return e.handleReset()}}];return r.a.createElement(c.b,{query:"1719272222",render:function(t){var c,o=t.site.siteMetadata.testTemplate,l=t.site.siteMetadata.juniper,i=l.repo,s=l.branch,u=l.kernelType,b=l.debug,E=l.lang,y=(c=t.allCode,Object.assign.apply(Object,[{}].concat(c.edges.map(function(e){var t,a=e.node;return(t={})[a.name]=a.code,t})))),k=y[d],w=y[p],N=y[f];return r.a.createElement("div",{className:A.a.root,key:e.state.key},a&&r.a.createElement(a,{msgButton:null,classNames:h,repo:i,branch:s,lang:E,kernelType:u,debug:b,actions:function(e){var t=e.runCode;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{onClick:function(){return t()}},"Run Code"),N&&r.a.createElement(v,{variant:"primary",onClick:function(){return t(function(e){return function(e,t,a){var n=a.replace(/"/g,'\\"');return e.replace(/\${solutionEscaped}/g,n).replace(/\${solution}/g,a).replace(/\${test}/g,t)}(o,N,e)})}},"Submit"))}},n?w:k),r.a.createElement(j,{actions:g},m))},data:M})},t}(r.a.Component),O=a(691),L=(a(155),a(847)),$=a(720),P=a.n($),R=(a(677),a(678)),T=a.n(R);function I(e,t){var a;return((a=e.allMarkdownRemark,Object.assign.apply(Object,[{}].concat(a.edges.map(function(e){var t,a=e.node;return(t={})[a.fields.slug.replace("/","")]=a.rawMarkdownBody,t}))))[t]||"").split("\n---\n").map(function(e){return e.trim()})}var H=function(e){function t(){return e.apply(this,arguments)||this}x()(t,e);var n=t.prototype;return n.componentDidMount=function(){Promise.resolve().then(a.t.bind(null,848,7)).then(function(e){var t=e.default;window.Reveal=t,window.marked=P.a,Promise.resolve().then(a.t.bind(null,849,7)).then(function(e){e.RevealMarkdown.init(),t.initialize({center:!1,progress:!1,showNotes:!0,controls:!0,width:"100%",height:600,minScale:.75,maxScale:1})})})},n.componentWillUnmount=function(){delete window.Reveal,delete window.marked,delete a.c[848],delete a.c[849]},n.render=function(){var e=this.props.source,t=m()("reveal","show-notes",T.a.reveal),a=m()("slides",T.a.slides);return r.a.createElement("div",{className:T.a.root},r.a.createElement("div",{className:t},r.a.createElement(c.b,{query:"1922309225",render:function(t){var n=I(t,e);return r.a.createElement("div",{className:a},n.map(function(e,t){return r.a.createElement("section",{key:t,"data-markdown":"","data-separator-notes":"^Notes:"},r.a.createElement("textarea",{"data-template":!0,defaultValue:e}))}))},data:L})))},t}(r.a.Component),B=a(679),J=a.n(B),F=function(e){var t=e.id,a=void 0===t?"0":t,c=e.children,o=void 0===c?[]:c,l=Object(n.useState)(null),i=l[0],s=l[1],u=Object(n.useState)(null),d=u[0],p=u[1],f=Object(n.useCallback)(function(){return p(i)},[i]),h=o.filter(function(e){return"\n"!==e});return r.a.createElement(r.a.Fragment,null,h.map(function(e,t){var n=e.key,c=e.props;return r.a.createElement("p",{key:n,className:J.a.option},r.a.createElement("input",{className:J.a.input,name:"choice-"+a,id:"choice-"+a+"-"+t,value:t,type:"radio",checked:i===t,onChange:function(){return s(t)}}),r.a.createElement("label",{className:J.a.label,htmlFor:"choice-"+a+"-"+t,dangerouslySetInnerHTML:{__html:"<span>"+c.text+"</span>"}}))}),r.a.createElement(v,{variant:"primary",onClick:f},"Submit"),h.map(function(e,t){var a,n,c=e.key,o=e.props,l=!!o.correct;return d===t?r.a.createElement("div",{key:c,className:m()(J.a.answer,(a={},a[J.a.correct]=l,a))},r.a.createElement("strong",{className:m()(J.a.answerLabel,(n={},n[J.a.answerLabelCorrect]=l,n))},l?"That's correct! ":"Incorrect. "),o.children):null}))},U=a(693),V=new s.a({createElement:r.a.createElement,components:{exercise:N,slides:H,codeblock:q,choice:F,opt:function(e){return e.children},a:O.a,hr:U.b,h3:U.a,ol:U.e,ul:U.f,li:U.d,code:U.c}}).Compiler,D=a(699),W=a(680),Q=a.n(W);a.d(t,"pageQuery",function(){return G});t.default=function(e){var t=e.data,a=t.markdownRemark,o=t.site.siteMetadata.courseId,i=a.frontmatter,s=a.htmlAst,u=i.title,m=i.description,d=i.prev,p=i.next,f=i.id,h=Object(n.useState)(null),g=h[0],E=h[1],y=l()(o+"-completed-"+f,[]),k=y[0],w=y[1],N=V(s),C=[{slug:d,text:"« Previous Chapter"},{slug:p,text:"Next Chapter »"}];return r.a.createElement(b.Provider,{value:{activeExc:g,setActiveExc:E,completed:k,setCompleted:w}},r.a.createElement(D.a,{title:u,description:m},N,r.a.createElement("section",{className:Q.a.pagination},C.map(function(e){var t=e.slug,a=e.text;return r.a.createElement("div",{key:t},t&&r.a.createElement(v,{variant:"secondary",small:!0,onClick:function(){return Object(c.c)(t)}},a))}))))};var G="3199094430"},685:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=a(96),i=a.n(l);a.d(t,"a",function(){return i.a}),a.d(t,"c",function(){return l.navigate});a(690);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},690:function(e,t,a){var n;e.exports=(n=a(696))&&n.default||n},691:function(e,t,a){"use strict";a.d(t,"a",function(){return f});a(97);var n=a(292),r=a.n(n),c=a(0),o=a.n(c),l=a(5),i=a.n(l),s=a(685),u=a(688),m=a.n(u),d=a(667),p=a.n(d),f=function(e){var t,a=e.children,n=e.to,c=e.href,l=e.onClick,i=e.variant,u=e.hidden,d=e.className,f=r()(e,["children","to","href","onClick","variant","hidden","className"]),h=n||c,v=/(http(s?)):\/\//gi.test(h),g=m()(p.a.root,d,((t={})[p.a.hidden]=u,t[p.a.secondary]="secondary"===i,t));return v?o.a.createElement("a",Object.assign({href:h,className:g,target:"_blank",rel:"noopener nofollow noreferrer"},f),a):h&&/^#/.test(h)||l?o.a.createElement("a",{href:h,onClick:l,className:g},a):o.a.createElement(s.a,Object.assign({to:h,className:g},f),a)};f.propTypes={children:i.a.node.isRequired,to:i.a.string,href:i.a.string,onClick:i.a.func,variant:i.a.oneOf(["secondary",null]),hidden:i.a.bool,className:i.a.string}},693:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return i}),a.d(t,"c",function(){return s}),a.d(t,"e",function(){return u}),a.d(t,"f",function(){return m}),a.d(t,"d",function(){return d});var n=a(0),r=a.n(n),c=a(668),o=a.n(c),l=function(e){var t=e.children;return r.a.createElement("h3",{className:o.a.h3},t)},i=function(){return r.a.createElement("hr",{className:o.a.hr})},s=function(e){var t=e.children;return r.a.createElement("code",{className:o.a.code},t)},u=function(e){var t=e.children;return r.a.createElement("ol",{className:o.a.ol},t)},m=function(e){var t=e.children;return r.a.createElement("ul",{className:o.a.ul},t)},d=function(e){var t=e.children;return r.a.createElement("li",{className:o.a.li},t)}},694:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M129.4 159.4l-29.8 2.1 5.1-49.3-29.8 49.5-19.6 1.3-20.1-47.3-5.3 50.7L0 168.5 12.3 51.4l25.4-1.8 30.7 68.6 45.5-73.9 27.9-2zM219.6 110.5l-5 43-29.8 2 4.9-42.9-36.2-71.1 33.4-2.3 19 42.6 29.4-46 35.7-2.5zM410.3 34.1c10.2 7.5 15.9 18 17.1 31.8l-30.9 4.5c-2.1-14-10.6-20.3-23.4-19.4a31.9 31.9 0 0 0-22.7 11.2c-5.9 6.8-9.1 15.6-9.8 26-1.5 20.5 9.3 30.9 25.2 29.8s24.8-9.3 28.7-23.7l31 1.2a60.8 60.8 0 0 1-20.6 34.2 62.1 62.1 0 0 1-36.8 14.7c-18.2 1.3-32.7-3.3-43.5-13.6s-15.4-25-14.1-43.9 7.7-32.5 19.2-43.7 25.8-17.5 42.9-18.7c15-1.1 27.7 2.1 37.7 9.6zM544.7 29.5c11.4 10.6 17 25 16.2 43.3s-6.6 32.2-17.8 43.5-25.4 17.7-42.9 18.9-33.7-3.2-45.1-13.8-17-25.1-16.3-43.4 6.6-32.2 17.8-43.5 25.7-17.7 43.1-18.9 33.5 3.4 45 13.9zm-75.6 49.8c.1 19.7 11.6 30.7 29.5 29.4 19.8-1.3 32.2-15.9 32.1-37.2-.1-19.7-11.6-30.7-29.6-29.4-19.8 1.3-32.1 15.9-32 37.2zM680.8 20c11.4 10.6 16.9 24.9 16.2 43.3s-6.6 32.2-17.8 43.5-25.5 17.7-43 18.9-33.6-3.3-45-13.8-17-25.1-16.3-43.5 6.6-32.1 17.8-43.5 25.6-17.6 43.1-18.8 33.5 3.4 45 13.9zm-75.7 49.7c.2 19.8 11.7 30.8 29.6 29.5 19.8-1.4 32.1-15.9 32.1-37.2-.2-19.7-11.7-30.7-29.6-29.5-19.8 1.4-32.1 16-32.1 37.2zM737.7 90.3l45.9-3.2-2.7 26.8-75.8 5.3L717.4 2.1 747.3 0zM119.8 240.9c10.1 7.5 15.8 18 17.1 31.7l-30.9 4.5c-2.1-14-10.6-20.2-23.4-19.3A31.6 31.6 0 0 0 59.9 269c-5.9 6.8-9.2 15.6-9.9 26-1.5 20.5 9.3 30.9 25.3 29.8s24.8-9.4 28.6-23.8l31 1.3c-3.2 14-10 25.4-20.6 34.2a63.1 63.1 0 0 1-36.7 14.7c-18.3 1.3-32.7-3.3-43.5-13.6s-15.5-25-14.1-43.9 7.6-32.5 19.1-43.8 25.8-17.5 43-18.7c15-1 27.6 2.2 37.7 9.7zM254.1 236.3c11.5 10.5 17 24.9 16.3 43.3s-6.6 32.2-17.8 43.5-25.5 17.6-43 18.9-33.6-3.3-45.1-13.8-16.9-25.1-16.2-43.5 6.6-32.1 17.8-43.5 25.6-17.6 43.1-18.8 33.5 3.4 44.9 13.9zM178.5 286c.2 19.8 11.7 30.8 29.6 29.5 19.8-1.4 32.1-15.9 32-37.2-.1-19.7-11.6-30.7-29.5-29.5-19.8 1.4-32.2 16-32.1 37.2zM396.7 211l-7 68.2c-3.8 32.4-23.1 51.8-54.5 54-16.2 1.1-28.8-2.7-37.5-11.4s-12-21.2-10.2-37.3l6.9-66.4 29.8-2.1-7.3 67.3c-1.6 16.5 4.5 24.3 18.4 23.3s23-10 24.7-27l6.9-66.6zM477.6 278.9l18.1 41.4-31.2 2.1-16.3-37.7-14.4 1-4.1 39.2-29.8 2.1 12.3-117.1 48.2-3.4c11.9-.8 21.6 2.2 28.8 9.2s10.5 16.6 9.6 29c-1.8 16.6-8.9 27.9-21.2 34.2zm-41-19.9l18.8-1.3c7.5-.6 12.3-5.1 13.1-13.2s-3.1-11.8-10.4-11.3l-18.9 1.4zM595.8 205.6c8.1 6.1 11.8 14.8 11 26.1l-30.3 3.4c.5-8-3.5-12.2-11.4-11.7s-14 5.2-14.6 11.9 2.9 7.9 16.8 10.5 22.9 6 29.3 11 9.6 12.4 8.9 22.5c-2 24.7-21.3 36.9-44.1 38.1-15 1-26.7-1.6-35.4-7.8s-12.4-15.6-11.4-27.8l30.4-3.2c-.6 8.7 5 13.6 14.4 13s15.3-4.5 15.6-11.2-4.9-9-16.8-11.1-19.7-4.4-27.5-9-11.5-12.9-10.6-24.3a38.9 38.9 0 0 1 12.2-26.1c7.4-7.2 17.7-11.4 30.7-12.3s24.8 1.7 32.8 8zM699.8 216.3l-46 3.2-1.8 17.6 39.4-2.8-2.8 26.2-39.5 2.7-2 19.9 46.2-3.2-2.9 26.7-75.9 5.4 12.3-117.1 75.8-5.3z"}))}r.defaultProps={width:"783.6",height:"351.4",viewBox:"0 0 783.6 351.4"},e.exports=r,r.default=r},696:function(e,t,a){"use strict";a.r(t);a(97);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=a(159),i=a(11),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},697:function(e){e.exports={data:{site:{siteMetadata:{title:"My cool online course",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique libero at est congue, sed vestibulum tortor laoreet. Aenean egestas massa non commodo consequat. Curabitur faucibus, sapien vitae euismod imperdiet, arcu erat semper urna, in accumsan sapien dui ac mi. Pellentesque felis lorem, semper nec velit nec, consectetur placerat enim.",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique libero at est congue, sed vestibulum tortor laoreet. Aenean egestas massa non commodo consequat. Curabitur faucibus, sapien vitae euismod imperdiet, arcu erat semper urna.",showProfileImage:!0,footerLinks:[{text:"Website",url:"https://spacy.io"},{text:"Source",url:"https://github.com/ines/course-starter-r"},{text:"Built with ♥",url:"https://github.com/ines/course-starter-r"}]}}}}},698:function(e){e.exports={data:{site:{siteMetadata:{title:"My cool online course",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique libero at est congue, sed vestibulum tortor laoreet. Aenean egestas massa non commodo consequat. Curabitur faucibus, sapien vitae euismod imperdiet, arcu erat semper urna, in accumsan sapien dui ac mi. Pellentesque felis lorem, semper nec velit nec, consectetur placerat enim.",slogan:"A free online course",siteUrl:"https://course-starter-r.netlify.com",twitter:"spacy_io",fonts:"IBM+Plex+Mono:500|IBM+Plex+Sans:700|Lato:400,400i,700,700i"}}}}},699:function(e,t,a){"use strict";var n=a(697),r=a(0),c=a.n(r),o=a(685),l=a(698),i=a(721),s=a.n(i),u=function(e){var t=e.title,a=e.description;return c.a.createElement(o.b,{query:m,render:function(e){var n=e.site.siteMetadata,r=t?t+" · "+n.title:n.title+" · "+n.slogan,o=a||n.description,l=n.siteUrl+"/social.jpg",i=[{name:"description",content:o},{property:"og:title",content:r},{property:"og:description",content:o},{property:"og:type",content:"website"},{property:"og:site_name",content:n.title},{property:"og:image",content:l},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:l},{name:"twitter:creator",content:"@"+n.twitter},{name:"twitter:site",content:"@"+n.twitter},{name:"twitter:title",content:r},{name:"twitter:description",content:o}];return c.a.createElement(s.a,{defer:!1,htmlAttributes:{lang:"en"},title:r,meta:i},n.fonts&&c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+n.fonts,rel:"stylesheet"}))},data:l})},m="463181092",d=a(691),p=a(693),f=a(694),h=a.n(f),v=(a(669),a(670)),g=a.n(v);t.a=function(e){var t=e.isHome,a=e.title,r=e.description,l=e.children;return c.a.createElement(o.b,{query:"2688331134",render:function(e){var n=e.site.siteMetadata;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{title:a,description:r}),c.a.createElement("main",{className:g.a.root},!t&&c.a.createElement("h1",{className:g.a.logo},c.a.createElement(d.a,{hidden:!0,to:"/"},c.a.createElement(h.a,{width:150,height:54,"aria-label":n.title}))),c.a.createElement("div",{className:g.a.content},(a||r)&&c.a.createElement("header",{className:g.a.header},a&&c.a.createElement("h1",{className:g.a.title},a),r&&c.a.createElement("p",{className:g.a.description},r)),l),c.a.createElement("footer",{className:g.a.footer},c.a.createElement("div",{className:g.a.footerContent},c.a.createElement("section",{className:g.a.footerSection},c.a.createElement(p.a,null,"About this course"),c.a.createElement("p",null,n.description)),c.a.createElement("section",{className:g.a.footerSection},c.a.createElement(p.a,null,"About me"),n.showProfileImage&&c.a.createElement("img",{src:"/profile.jpg",alt:"",className:g.a.profile}),c.a.createElement("p",null,n.bio)),n.footerLinks&&c.a.createElement("ul",{className:g.a.footerLinks},n.footerLinks.map(function(e,t){var a=e.text,n=e.url;return c.a.createElement("li",{key:t,className:g.a.footerLink},c.a.createElement(d.a,{variant:"secondary",to:n},a))}))))))},data:n})}},843:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z"}))}r.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},e.exports=r,r.default=r},844:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("path",{d:"M23.8 2.5A2.5 2.5 0 0 0 21.3 0H2.5A2.5 2.5 0 0 0 0 2.5v9.9a2.5 2.5 0 0 0 2.3 2.5v-1A1.5 1.5 0 0 1 1 12.4V2.5A1.5 1.5 0 0 1 2.5 1h18.8a1.5 1.5 0 0 1 1.5 1.5v3h1zM2.3 13.9v1z M23.5 20.3H4.8a2.5 2.5 0 0 1-2.5-2.5V8a2.5 2.5 0 0 1 2.5-2.5h18.7A2.5 2.5 0 0 1 26 8v9.8a2.5 2.5 0 0 1-2.5 2.5zM4.8 6.5A1.4 1.4 0 0 0 3.3 8v9.8a1.4 1.4 0 0 0 1.5 1.5h18.7a1.4 1.4 0 0 0 1.5-1.5V8a1.4 1.4 0 0 0-1.5-1.5z M15.8 9.5h7.1v1h-7.1z M15.8 12.4h7.1v1h-7.1z M15.9 15.3H23v1h-7.1z M4.9 10h1.5v6.5H4.9zM7.4 11.7h1.5v4.74H7.4zM10 11.7h1.5v4.74H10z",key:0}),n.createElement("circle",{cx:"14.1",cy:"10",r:"0.7",key:1}),n.createElement("circle",{cx:"14.1",cy:"12.9",r:"0.7",key:2}),n.createElement("circle",{cx:"14.2",cy:"15.8",r:"0.7",key:3})])}r.defaultProps={width:"24",height:"32",viewBox:"0 0 26 17",fill:"currentColor"},e.exports=r,r.default=r},846:function(e){e.exports={data:{site:{siteMetadata:{testTemplate:'success <- function(text) {\n    cat(paste("\\033[32m", text, "\\033[0m", sep = ""))\n}\n\n.solution <- "${solutionEscaped}"\n\n${solution}\n\n${test}\ntryCatch({\n    test()\n}, error = function(e) {\n    cat(paste("\\033[31m", e[1], "\\033[0m", sep = ""))\n})',juniper:{repo:"ines/course-starter-r",branch:"binder",kernelType:"ir",lang:"r",debug:!1}}},allCode:{edges:[{node:{name:"exc_01_03",code:'library(ggplot2)\n\nmtcars$gear <- factor(mtcars$gear,levels=c(3,4,5),\n  \tlabels=c("3gears","4gears","5gears"))\nmtcars$am <- factor(mtcars$am,levels=c(0,1),\n  \tlabels=c("Automatic","Manual"))\nmtcars$cyl <- factor(mtcars$cyl,levels=c(4,6,8),\n   labels=c("4cyl","6cyl","8cyl"))\n\n# Print the gear variable of mtcars\nprint(____)\n\n# Assign the length of mtcars to some_var\nsome_var <- ____\n\n# Uncomment this to see the plot\n# print(qplot(mpg, data=mtcars, geom="density", fill=gear, alpha=I(.5)))\n'}},{node:{name:"solution_01_03",code:'library(ggplot2)\n\nmtcars$gear <- factor(mtcars$gear,levels=c(3,4,5),\n  \tlabels=c("3gears","4gears","5gears"))\nmtcars$am <- factor(mtcars$am,levels=c(0,1),\n  \tlabels=c("Automatic","Manual"))\nmtcars$cyl <- factor(mtcars$cyl,levels=c(4,6,8),\n   labels=c("4cyl","6cyl","8cyl"))\n\n# Print the gear variable of mtcars\nprint(mtcars$gear)\n\n# Assign the length of mtcars to some_var\nsome_var <- length(mtcars)\n\n# Uncomment this to see the plot\n# print(qplot(mpg, data=mtcars, geom="density", fill=gear, alpha=I(.5)))\n'}},{node:{name:"test_01_03",code:'test <- function() {\n    # Here we can either check objects created in the solution code, or the\n    # string value of the solution, available as .solution. See the testTemplate\n    # in the meta.json for details.\n    if (some_var != length(mtcars)) {\n        stop("Are you getting the correct length?")\n    }\n    if (!grepl("print(mtcars$gear)", .solution, fixed = TRUE)) {\n        stop("Are you printing the correct variable?")\n    }\n\n    # This function is defined in the testTemplate\n    success("Well done!")\n}\n'}}]}}}},847:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{rawMarkdownBody:'\n# Introduction\n\nNotes: Text at the end of a slide prefixed like this will be displayed as\nspeaker notes on the side. Slides can be separated with a divider: ---.\n\n---\n\n# This is a slide\n\n```r\n# Print something\nprint("Hello world", quote = FALSE)\n```\n\n```out\nHello world\n```\n\n- Slides can have code, bullet points, tables and pretty much all other Markdown\n  elements.\n- This is another bullet point.\n\n<img src="profile.jpg" alt="This image is in /static" width="25%">\n\nNotes: Some more notes go here\n\n---\n\n# Let\'s practice!\n\nNotes: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique\nlibero at est congue, sed vestibulum tortor laoreet. Aenean egestas massa non\ncommodo consequat. Curabitur faucibus, sapien vitae euismod imperdiet, arcu erat\nsemper urna, in accumsan sapien dui ac mi. Pellentesque felis lorem, semper nec\nvelit nec, consectetur placerat enim.\n',fields:{slug:"/chapter1_01_introduction"}}}]}}}}}]);
//# sourceMappingURL=component---src-templates-chapter-js-4af0571c353958bfeb63.js.map