(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/guatape-min.51af6710.jpeg"},26:function(e,t,a){e.exports=a(59)},32:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),i=(a(32),a(19)),c=a(20),s=a(23),m=a(21),u=a(24),p=a(8),h=a(62),d=a(60),k=a(63),v=a(61),E=a(64),g=a(12),f=a(13),w=(a(43),a(22)),y=a.n(w),b=(a(45),function(){return r.a.createElement("div",{id:"projects"},r.a.createElement("h3",{className:"project-title"},"Personal Projects"),r.a.createElement("ul",{className:"list-style"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://populariz-frontend.herokuapp.com/"},"Popularity Contest App")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/spencercorwin/instagram-unlimited"},'"Intagram Unlimited" Chrome Extension')),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/spencercorwin/twitter-bots"},"Daily Gold and Silver Quotes Twitter Bot"))))}),N=(a(47),a(49)),j=function(){return r.a.createElement("div",{className:"description"},r.a.createElement("p",null,"I am a software engineer at"," ",r.a.createElement("a",{href:"https://neotracker.io"},"NEO Tracker"),". To see my personal projects click ",r.a.createElement(N.a,{to:"/projects"},"here"),". To see the code for any of these projects go to my"," ",r.a.createElement("a",{href:"https://github.com/spencercorwin"},"GitHub"),". To see a more complete view of my professional resume you can go to my"," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/spencercorwin/"},"LinkedIn"),"."))},S=(a(52),function(e){return r.a.createElement("div",{className:"profile-group"},r.a.createElement("div",null,r.a.createElement("h4",null,"GitHub"),r.a.createElement("div",{id:"github-calendar"},r.a.createElement("p",null,e.contributions," contributions in the last year"),r.a.createElement("a",{href:"https://github.com/spencercorwin"},r.a.createElement("img",{src:"http://ghchart.rshah.org/spencercorwin",alt:"spencercorwin's GitHub chart"}))),r.a.createElement("p",null,"Profile: ",r.a.createElement("a",{href:"https://github.com/spencercorwin"},"@spencercorwin"))),r.a.createElement("div",null,r.a.createElement("h4",null,"LinkedIn"),r.a.createElement("p",null,"LinkedIn Connections: 800"),r.a.createElement("p",null,"Profile:"," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/spencercorwin/"},"Spencer M. Corwin"))),r.a.createElement("div",null,r.a.createElement("h4",null,"Stack Overflow"),r.a.createElement("p",null,"Reputation: ",e.reputation),r.a.createElement("p",null,"Profile:"," ",r.a.createElement("a",{href:"https://stackoverflow.com/users/9157715/spencer"},"Spencer Corwin"))),r.a.createElement("div",null,r.a.createElement("h4",null,"LeetCode"),r.a.createElement("p",null,"Profile: ",r.a.createElement("a",{href:"https://leetcode.com/spencercorwin/"},"spencercorwin"))),r.a.createElement("div",null,r.a.createElement("h4",null,"FreeCodeCamp"),r.a.createElement("p",null,"Profile:"," ",r.a.createElement("a",{href:"https://www.freecodecamp.org/spencercorwin"},"@spencercorwin"))))}),C=(a(54),function(){return r.a.createElement("div",{className:"testimonial-text"},r.a.createElement("p",null,"\u201cSpencer, I can truthfully say you\u2019re the best hire I\u2019ve made. Keep up the great work and don\u2019t set your expectations for yourself too low!\u201d"," ",r.a.createElement("span",{className:"testimonial-author"},"-Former Boss")),r.a.createElement("p",null,"\u201cSpencer, Thank you so much for helping me with my spreads and renewals. You always have such a great positive attitude. I am so impressed with your professionalism and strong work ethic. We are lucky to have you as part of the SWB lending team!\u201d"," ",r.a.createElement("span",{className:"testimonial-author"},"-Former Co-Worker")),r.a.createElement("p",null,"\u201cSpencer, It\u2019s been very fun working with you these past couple months and everyone tells me how great it is to have you on the team. You show a lot of great promise and I look forward to watching you grow into a top banker in the coming years\u201d"," ",r.a.createElement("span",{className:"testimonial-author"},"-Former Boss")),r.a.createElement("p",null,"\u201cSpencer, So happy that you\u2019re part of the team. I see great things for you in the near future!\u201d"," ",r.a.createElement("span",{className:"testimonial-author"},"-Former Boss")),r.a.createElement("p",null,"\u201cSpencer, We all really enjoy you as part of the team. We look forward to spending a bunch more birthdays with you\u201d"," ",r.a.createElement("span",{className:"testimonial-author"},"-Former Co-Worker")))}),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggleDarkMode=function(){a.state.dark?document.getElementsByTagName("html")[0].style.background="#121212":document.getElementsByTagName("html")[0].style.background="white",a.setState({dark:!a.state.dark}),localStorage.setItem("darkmode",JSON.stringify({dark:!a.state.dark}))},a.componentDidMount=function(){var e=localStorage.getItem("darkmode");if(e){var t=JSON.parse(e);a.setState({dark:!!t.dark}),t.dark||(document.getElementsByTagName("html")[0].style.background="#121212")}fetch("http://urlreq.appspot.com/req?method=GET&url=https%3A%2F%2Fgithub-contributions-api.herokuapp.com%2Fspencercorwin%2Fcount").then(function(e){return e.json()}).then(function(e){var t=0;for(var n in e.data)for(var r in e.data[n])for(var o in e.data[n][r])t+=e.data[n][r][o];a.setState({contributions:t})}),fetch("https://api.stackexchange.com/2.2/users/9157715?order=desc&sort=reputation&site=stackoverflow").then(function(e){return e.json()}).then(function(e){a.setState({reputation:e.items[0].reputation})})},a.state={dark:!0,contributions:"418",reputation:"216"},a.toggleDarkMode=a.toggleDarkMode.bind(Object(p.a)(Object(p.a)(a))),f.a.initialize("UA-128636931-1"),f.a.pageview(window.location.pathname+window.location.search),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.state.dark?"body-container light-body":"body-container dark-body"},r.a.createElement("div",{className:"body"},r.a.createElement("h1",{id:"h1-title"},"Spencer M. Corwin"),r.a.createElement("div",{className:"tagline-container"},r.a.createElement("div",{id:"toggle-placeholder"}),r.a.createElement("p",{className:"tagline"},"Software Engineer at"," ",r.a.createElement("a",{href:"https://neotracker.io"},"NEO Tracker")),r.a.createElement("button",{className:this.state.dark?"toggle-button toggle-button-dark":"toggle-button toggle-button-light",onClick:this.toggleDarkMode},"Toggle ",this.state.dark?"Dark":"Light"," Mode")),r.a.createElement("div",{id:"top"},r.a.createElement(h.a,null,r.a.createElement(d.a,{render:function(t){var a=t.location;return r.a.createElement("div",{id:"content"},r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(k.a,{to:"/about"})}}),r.a.createElement("div",{className:e.state.dark?"nav-container nav-container-dark":"nav-container nav-container-light"},r.a.createElement(v.a,{className:e.state.dark?"nav-link nav-link-dark":"nav-link nav-link-light",activeClassName:e.state.dark?"active-nav-link active-nav-link-dark":"active-nav-link active-nav-link-light",to:"/about"},"About Me"),r.a.createElement(v.a,{className:e.state.dark?"nav-link nav-link-dark":"nav-link nav-link-light",activeClassName:e.state.dark?"active-nav-link active-nav-link-dark":"active-nav-link active-nav-link-light",to:"/projects"},"Projects"),r.a.createElement(v.a,{className:e.state.dark?"nav-link nav-link-dark":"nav-link nav-link-light",activeClassName:e.state.dark?"active-nav-link active-nav-link-dark":"active-nav-link active-nav-link-light",to:"/social"},"Profiles"),r.a.createElement(v.a,{className:e.state.dark?"nav-link nav-link-dark":"nav-link nav-link-light",activeClassName:e.state.dark?"active-nav-link active-nav-link-dark":"active-nav-link active-nav-link-light",to:"/testimonials"},"Testimonials")),r.a.createElement(g.TransitionGroup,null,r.a.createElement(g.CSSTransition,{key:a.key,classNames:"fade",timeout:0},r.a.createElement(E.a,{location:a},r.a.createElement(d.a,{path:"/about",component:j}),r.a.createElement(d.a,{path:"/projects",component:b}),r.a.createElement(d.a,{path:"/social",render:function(){return r.a.createElement(S,{contributions:e.state.contributions,reputation:e.state.reputation,score:e.state.score,rank:e.state.rank,js:e.state.js,jsscore:e.state.jsscore,python:e.state.python,pythonscore:e.state.pythonscore})}}),r.a.createElement(d.a,{path:"/testimonials",component:C})))))}})),r.a.createElement("div",{id:"photo"},r.a.createElement("img",{src:y.a,alt:"Spencer Corwin in Cartagena, Colombia"})))))}}]),t}(n.Component);l.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[26,2,1]]]);
//# sourceMappingURL=main.88153454.chunk.js.map