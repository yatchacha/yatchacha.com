(this.webpackJsonpmbti=this.webpackJsonpmbti||[]).push([[0],{125:function(t,e,c){},126:function(t,e,c){},153:function(t,e,c){},188:function(t,e,c){},189:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c(53),i=c.n(n),s=(c(125),c(10)),r=c(9),l=(c(126),c(1)),o=function(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsxs)("p",{style:{textAlign:"center",fontWeight:100},children:[Object(l.jsx)("span",{children:"\ubcf8 \uc6f9\uc0ac\uc774\ud2b8\uc758 \uc815\ubcf4\ub294 \uc0ac\uc2e4\uacfc \ub2e4\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:"https://github.com/yatchacha/mbti",target:"_blank",rel:"noopener noreferrer",children:"\uc18c\uc2a4\ucf54\ub4dc"})}),Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:"https://api.yatchacha.com/docs",target:"_blank",rel:"noopener noreferrer",children:"Open API"})}),Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:"mailto:hyeonwoo5342@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac \ubb38\uc758"})})]})})},j=function(t){var e=t.mbti,c=t.children,a="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-"+e;return Object(l.jsxs)("div",{id:e,className:"mbti",children:[Object(l.jsx)("a",{href:a,className:"mbtiTitle",target:"_blank",rel:"noopener noreferrer",children:e}),Object(l.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:c})]})},b=function(t){var e=t.userName,c=t.userId,a=t.userLogo,n="/mbti/user/"+c;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(s.b,{to:n,children:Object(l.jsx)("img",{"data-for":"tooltipComp","data-tip":e,"data-type":"info",style:{width:"26px",margin:"1px",borderRadius:"24px"},src:a,alt:e})})})},d=c(14),h=c.n(d),u=c(13),p=(c(153),function(){var t=Object(a.useState)(null),e=Object(r.a)(t,2),c=e[0],n=e[1];function i(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],c=e?"https://api.yatchacha.com/mbti/user?allow_tw_info=true":"https://api.yatchacha.com/mbti/user";h.a.get(c).then((function(t){"success"===t.data.result&&n(t.data.data[0].data)})).catch((function(e){console.log(e),t&&i()}))}Object(a.useEffect)((function(){i(!0)}),[]),Object(a.useEffect)((function(){u.a.rebuild()}));var s=/Mobi|Android/i.test(navigator.userAgent);return Object(l.jsxs)("div",{className:"totalWrapper",children:[Object(l.jsx)("div",{className:"wrapperOuter",children:[["ISTJ","ISFJ","INFJ","INTJ"],["ISTP","ISFP","INFP","INTP"],["ESTP","ESFP","ENFP","ENTP"],["ESTJ","ESFJ","ENFJ","ENTJ"]].map((function(t){return Object(l.jsx)("div",{className:"mbtiWrapper",children:t.map((function(t){return Object(l.jsx)(j,{mbti:t,children:c&&c.map((function(e){var c=null!==e.twitch_info?e.twitch_info.logo:"https://img.favpng.com/18/1/17/twitch-computer-icons-logo-png-favpng-Gpj6D8W7NPubLhPvTbefsX9ym.jpg";return e.mbti===t&&Object(l.jsx)(b,{userName:e.tw_name,userId:e.tw_id,userLogo:c},e.id)}))})}))})}))}),Object(l.jsx)(u.a,{id:"tooltipComp",globalEventOff:s?"click":void 0}),Object(l.jsx)(o,{})]})}),m=c(58),x=c.n(m),O=function(t){var e=t.match.params,c=e.name,n="https://api.yatchacha.com/mbti/user?allow_tw_info=true&tw_id="+c,i=Object(a.useState)(0),o=Object(r.a)(i,2),j=o[0],d=o[1],p=Object(a.useState)({}),m=Object(r.a)(p,2),O=m[0],f=m[1],g=Object(a.useState)({}),v=Object(r.a)(g,2),y=v[0],w=v[1],N=Object(a.useState)(0),_=Object(r.a)(N,2),S=_[0],E=_[1],I=Object(a.useState)({}),k=Object(r.a)(I,2),T=k[0],P=k[1];function F(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e="";h.a.get(n).then((function(t){"success"===t.data.result&&0!==t.data.data[0].rows&&null!==t.data.data[0].data[0].twitch_info?(f(t.data.data[0].data[0]),P(t.data.data[0].data[0].twitch_info),d(1),e=t.data.data[0].data[0].mbti):d(-1)})).catch((function(e){console.log(e),t&&F()})).then((function(){var t="https://api.yatchacha.com/mbti/user?allow_tw_info=true&mbti="+e;h.a.get(t).then((function(t){"success"===t.data.result&&(w(t.data.data[0].data),E(t.data.data[0].rows-1))})).catch((function(t){console.log(t)}))}))}Object(a.useEffect)((function(){F(!0)}),[e]),Object(a.useEffect)((function(){u.a.rebuild()}));var C=/Mobi|Android/i.test(navigator.userAgent);return-1===j?Object(l.jsxs)("p",{className:"jua",children:["\uc774\ub7f0! \uc720\uc800\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc5b4\uc694!",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(s.b,{to:"/mbti",style:{fontSize:"14px"},children:"\uccab \ud398\uc774\uc9c0\ub85c"})]}):0===j?Object(l.jsx)("p",{className:"jua",children:"\ub85c\ub529 \uc911..."}):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"totalWrapper",children:[Object(l.jsxs)("div",{style:{marginTop:"20px",textAlign:"left",display:"flex",justifyContent:"space-between"},children:[Object(l.jsxs)("span",{style:{fontSize:"24px",display:"flex",alignItems:"center"},children:[O.tw_name,Object(l.jsx)("a",{href:"https://twitch.tv/"+O.tw_id,target:"_blank",rel:"noopener noreferrer",style:{marginLeft:"10px",fontSize:"12px"},children:Object(l.jsx)("i",{className:"fas fa-external-link-alt"})})]}),Object(l.jsxs)("span",{className:"noto",style:{visibility:"hidden"},children:[Object(l.jsx)("i",{className:"fas fa-chevron-left"})," \ud648"]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{style:{margin:"10px"},children:T.bio}),Object(l.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around"},children:[Object(l.jsx)("img",{src:T.logo,alt:"\ub85c\uace0",className:"logo",style:{width:"200px"}}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{style:{fontSize:"30px"},children:O.mbti}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{style:{lineHeight:"15px"},children:[Object(l.jsx)("span",{style:{fontSize:"12px"},children:"\uacc4\uc815 \uc0dd\uc131\uc77c"}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{style:{fontSize:"15px"},children:x()(T.created_at).format("YYYY-MM-DD hh:mm:ss")})]})]})]}),Object(l.jsxs)("div",{style:{marginTop:"40px"},children:[Object(l.jsxs)("p",{children:["\ub610 \ub2e4\ub978 ",O.mbti,"\ub97c \ucc3e\uc544\ubcfc\uae4c\uc694?"]}),Object(l.jsx)("div",{children:S?y.map((function(t){if(c===t.tw_id)return"";var e=null!==t.twitch_info?t.twitch_info.logo:"https://img.favpng.com/18/1/17/twitch-computer-icons-logo-png-favpng-Gpj6D8W7NPubLhPvTbefsX9ym.jpg";return Object(l.jsx)(b,{userName:t.tw_name,userId:t.tw_id,userLogo:e},t.id)})):Object(l.jsxs)("p",{style:{fontSize:"12px"},children:["\uc544\uc27d\uac8c\ub3c4 \uc544\uc9c1 ",O.mbti,"\uc778 \ub2e4\ub978 \uc720\uc800\uac00 \uc5c6\ub124\uc694 \u3160\u3160"]})})]})]}),Object(l.jsx)(u.a,{id:"tooltipComp",globalEventOff:C?"click":void 0})]})})},f=function(t){var e=t.match.params;return Object(l.jsxs)("p",{children:["MbtiPage ",e.mbti]})},g=c(15),v=c(3),y=(c(188),c(193)),w=c(194),N=c(195),_=c(196);var S=function(){var t=Object(v.e)(),e=Object(v.f)().pathname;console.log(e),e.includes("home")&&(e="/home"),e.includes("calendar")&&(e="/calendar"),e.includes("mbti")&&(e="/mbti"),e.includes("community")&&(e="/community");var c=[{key:"/",title:"\ud648",icon:Object(l.jsx)(y.a,{})},{key:"/calendar",title:"\ubc29\uc1a1\uc77c\uc815",icon:Object(l.jsx)(w.a,{})},{key:"/mbti",title:"MBTI",icon:Object(l.jsx)(N.a,{})},{key:"/community",title:"\ucee4\ubba4\ub2c8\ud2f0",icon:Object(l.jsx)(_.a,{})}];return Object(l.jsx)(g.b,{activeKey:e,onChange:function(e){return function(e){t.push(e)}(e)},children:c.map((function(t){return Object(l.jsx)(g.b.Item,{icon:t.icon,title:t.title},t.key)}))})};var E=function(){var t=Object(a.useState)("\ub2ec\ucc28\ub124 \ub9c8\uc744"),e=Object(r.a)(t,2),c=e[0],n=(e[1],Object(a.useState)(null)),i=Object(r.a)(n,2),s=i[0];return i[1],Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("div",{className:"top",children:Object(l.jsx)(g.a,{back:s,className:"headerTitle",children:c})}),Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)(v.a,{exact:!0,path:"/mbti",children:Object(l.jsx)(p,{})}),Object(l.jsx)(v.a,{exact:!0,path:"/calendar",children:Object(l.jsx)(I,{})}),Object(l.jsx)(v.a,{exact:!0,path:["/","/home"],children:Object(l.jsx)(P,{})}),Object(l.jsx)(v.a,{exact:!0,path:"/community",children:Object(l.jsx)(k,{})}),Object(l.jsx)(v.a,{exact:!0,path:"/me",children:Object(l.jsx)(T,{})}),Object(l.jsx)(v.a,{path:"/mbti/user/:name",exact:!0,component:O}),Object(l.jsx)(v.a,{path:"/mbti/:mbti",exact:!0,component:f})]}),Object(l.jsx)("div",{className:"bottom",children:Object(l.jsx)(S,{})})]})};function I(){return Object(l.jsx)("div",{children:"\ud604\uc7ac \uc900\ube44 \uc911\uc785\ub2c8\ub2e4"})}function k(){return Object(l.jsx)("div",{children:"\ud604\uc7ac \uc900\ube44 \uc911\uc785\ub2c8\ub2e4"})}function T(){return Object(l.jsx)("div",{children:"\ud604\uc7ac \uc900\ube44 \uc911\uc785\ub2c8\ub2e4"})}function P(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("iframe",{src:"https://player.twitch.tv/?channel=yatchacha&parent=yatchacha.com&parent=localhost",frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"378",width:"620"})})}var F=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,197)).then((function(e){var c=e.getCLS,a=e.getFID,n=e.getFCP,i=e.getLCP,s=e.getTTFB;c(t),a(t),n(t),i(t),s(t)}))};i.a.render(Object(l.jsx)(s.a,{children:Object(l.jsx)(E,{})}),document.getElementById("root")),F()}},[[189,1,2]]]);
//# sourceMappingURL=main.fdbd965e.chunk.js.map