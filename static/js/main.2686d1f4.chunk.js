(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{18:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),s=a(5),i=a.n(s),o=a(6),r=a(7),l=a(8),b=a(11),d=a(10),u=a(9),j=a.n(u),h=a(0),O=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:e.map((function(t){return Object(h.jsx)("button",{type:"button",className:j.a.btn,onClick:a,children:t},t)}))})},p=a(2),f=a.n(p),k=function(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,s=t.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{className:f.a.statItem,children:["Good: ",e]}),Object(h.jsxs)("p",{className:f.a.statItem,children:["Neutral: ",a]}),Object(h.jsxs)("p",{className:f.a.statItem,children:["Bad: ",n]}),Object(h.jsxs)("p",{className:f.a.statItem,children:["Total: ",c]}),Object(h.jsxs)("p",{className:f.a.statItem,children:["Positive feedback: ",s,"%"]})]})},m=a(4),v=a.n(m),x=function(t){var e=t.title,a=t.children;return Object(h.jsxs)("section",{className:v.a.section,children:[Object(h.jsx)("h2",{className:v.a.title,children:e}),a]})},g=function(t){Object(b.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleFeedbackBtnClick=function(e){var a=e.target.innerText;t.setState((function(t){return Object(o.a)({},a,t[a]+1)}))},t.countTotalFeedbacks=function(t){return Object.values(t).reduce((function(t,e){return t+e}))},t.countPositiveFeedbackPercentage=function(e){var a=e.good,n=t.countTotalFeedbacks(e),c=n?a/n*100:0;return Math.round(c)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,n=t.bad;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{title:"please leave fedback",children:Object(h.jsx)(O,{options:Object.keys(this.state),onLeaveFeedback:this.handleFeedbackBtnClick})}),Object(h.jsx)(x,{title:"statistics",children:this.countTotalFeedbacks(this.state)?Object(h.jsx)(k,{good:e,neutral:a,bad:n,total:this.countTotalFeedbacks(this.state),positivePercentage:this.countPositiveFeedbackPercentage(this.state)}):"No feedbacks given"})]})}}]),a}(c.a.Component);a(17);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))},2:function(t,e,a){t.exports={statItem:"Statistics_statItem__3UbRi"}},4:function(t,e,a){t.exports={section:"Section_section__3RwRf",title:"Section_title__1sOEP"}},9:function(t,e,a){t.exports={btn:"FeedbackOptions_btn__1bLOc"}}},[[18,1,2]]]);
//# sourceMappingURL=main.2686d1f4.chunk.js.map