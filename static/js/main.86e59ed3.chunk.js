(this.webpackJsonpnyuschedule=this.webpackJsonpnyuschedule||[]).push([[0],{216:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(28),c=a.n(r),s=a(3),l=a(4),i=a(39),o=a(49),u=a.n(o),d=a(15),h=function(e){var t=Object(n.useState)(e),a=Object(l.a)(t,2),r=a[0],c=a[1],s=Object(n.useCallback)((function(e){c((function(t){return[].concat(Object(d.a)(t),[e])}))}),[c]),i=Object(n.useCallback)((function(e){e<0||e>=r.length||c((function(t){var a=Object(d.a)(t);return a.splice(e,1),a}))}),[c,r.length]),o=Object(n.useCallback)((function(e,t){c((function(a){var n=Object(d.a)(a);return n[e]=t,n}))}),[c]),u=Object(n.useCallback)((function(e){c((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e))}))}),[c]);return{list:r,addList:s,deleteList:i,updateList:o,concatList:u,setList:c}},j=a(11),b=a.n(j),f=a(62),m=a(6),O=function(e){return Object(m.jsxs)("li",{children:[Object(m.jsxs)("b",{style:{float:"left",paddingRight:"10px"},children:[e.name,":"]})," ",Object(m.jsx)("div",{style:{float:"left"},children:e.message})]})},v=function(e){var t=h([]),a=function(e){var t="";if(!e)return"No profile on RMP";for(var a=0,n=Object.entries(e);a<n.length;a++){var r=Object(l.a)(n[a],2),c=r[0],s=r[1];"url"!==c&&"tid"!==c&&(t+="<br />".concat(c,": ").concat("Tags"===c?s.join(", "):s))}return 0===t.length?"No profile on RMP":t};Object(n.useEffect)((function(){if(t.setList([]),e.info.Instructor){var a,n=Object(i.a)(e.info.Instructor);try{for(n.s();!(a=n.n()).done;){var r=a.value;if("Staff"!==r){var c="name="+r;u.a.get("http://newalbert-1375323476.us-east-1.elb.amazonaws.com/rmp/getProf?"+c).then((function(e){t.addList(e.data)}))}else t.addList({})}}catch(s){n.e(s)}finally{n.f()}}}),[e.info]),Object(n.useEffect)((function(){f.a.rebuild()}));return Object(m.jsxs)("button",{className:"search-item",onClick:function(t){if("A"!==t.target.tagName){var a,n=e.info["Days/Times"].substr(0,e.info["Days/Times"].search(" ")),r=e.info["Days/Times"].substr(e.info["Days/Times"].search(" ")+1),c=n.split(","),s=b()(r.split(" - ")[0],"hh.mm A"),l=b()(r.split(" - ")[1],"hh.mm A"),o=Object(i.a)(c);try{for(o.s();!(a=o.n()).done;){var u=a.value,d=b()(),h=b()();if("Mon"===u)d=b()().day(1),h=b()().day(1);else if("Tue"===u)d=b()().day(2),h=b()().day(2);else if("Wed"===u)d=b()().day(3),h=b()().day(3);else if("Thu"===u)d=b()().day(4),h=b()().day(4);else{if("Fri"!==u)continue;d=b()().day(5),h=b()().day(5)}d.hour(s.hour()),d.minute(s.minute()),d.second(0),h.hour(l.hour()),h.minute(l.minute()),h.second(0),e.handleAddCourse(d,h,e.info["Class#"])}}catch(j){o.e(j)}finally{o.f()}}},children:[Object(m.jsx)("div",{className:"item-name",children:e.info.class_name}),Object(m.jsx)("div",{className:"info-container","data-tip":e.info.Notes?e.info.Notes:"No Notes",children:Object(m.jsx)("span",{className:"info-circle",children:"i"})}),Object(m.jsx)("ul",{className:"item-attrib-collection",children:function(){for(var n=[],r=0,c=0,s=Object.entries(e.info);c<s.length;c++){var i=Object(l.a)(s[c],2),o=i[0],u=i[1];if("class_name"!==o&&"Notes"!==o)if("Instructor"===o)for(var d=0;d<u.length;d+=1)n.push(Object(m.jsx)(O,{name:o,message:Object(m.jsx)("a",{href:t.list[d]&&t.list[d].url?"//"+t.list[d].url:"#","data-tip":a(t.list[d]),target:"_blank",rel:"noreferrer",onClick:function(){},children:u[d]})},r)),r+=1;else n.push(Object(m.jsx)(O,{name:o,message:"Class Status"===o?"Open"===u?Object(m.jsx)("div",{style:{color:"blue",float:"left"},children:u}):"Closed"===u?Object(m.jsx)("div",{style:{color:"red"},children:u}):Object(m.jsx)("div",{style:{color:"#FF8C00"},children:u}):u},r)),r+=1}return n}()})]})},p=function(e){var t=function(t,a,n){var r=e.name.match(/\w+-\w+.*\d+/)[0].slice(0,-1);e.handleAddCourse(t,a,r+"\n"+n)};return Object(m.jsxs)("div",{className:"course-cata",children:[Object(m.jsx)("h3",{className:"course-title",style:{whiteSpace:"pre-line"},children:e.name}),function(){var a,n=[],r=0,c=Object(i.a)(e.course.classes);try{for(c.s();!(a=c.n()).done;){var s=a.value;n.push(Object(m.jsx)(v,{info:s,handleAddCourse:t},r)),r++}}catch(l){c.e(l)}finally{c.f()}return n}()]})},g=function(e){return Object(m.jsxs)("div",{className:"searcher-display",children:[Object(m.jsx)("h1",{children:"Search Results"}),Object(m.jsx)("div",{className:"display",children:function(){var t=[];if(!e.data)return t;for(var a=0,n=0,r=Object.entries(e.data);n<r.length;n++){var c=Object(l.a)(r[n],2),s=c[0],i=c[1];t.push(Object(m.jsx)(p,{course:i,name:s,handleAddCourse:e.handleAddCourse},a)),a++}return t}()})]})},x=a(63),y=a(46),w=a.n(y),k=a(223),N=a(222),S=a(72),C=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=Object(n.useState)("idle"),r=Object(l.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(null),o=Object(l.a)(i,2),u=o[0],d=o[1],h=Object(n.useState)(null),j=Object(l.a)(h,2),b=j[0],f=j[1],m=Object(n.useCallback)((function(){return s("pending"),d(null),f(null),e().then((function(e){d(e),s("success")})).catch((function(e){f(e),s("error")}))}),[e]);return Object(n.useEffect)((function(){t&&m()}),[m,t]),{execute:m,status:c,value:u,error:b}},I=k.a.Option,L=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){u.a.get("http://newalbert-1375323476.us-east-1.elb.amazonaws.com/albert/getoptions").then((function(e){c(e.data)}))}),[]);var s=Object(n.useState)(""),o=Object(l.a)(s,2),d=o[0],h=o[1],j=Object(n.useState)(""),b=Object(l.a)(j,2),f=b[0],O=b[1],v=Object(n.useState)(""),p=Object(l.a)(v,2),g=p[0],y=p[1],L=Object(n.useState)(0),H=Object(l.a)(L,2),A=(H[0],H[1]),T=Object(n.useState)(""),D=Object(l.a)(T,2),F=(D[0],D[1]),M=Object(n.useState)(""),P=Object(l.a)(M,2),q=(P[0],P[1]),R=Object(n.useCallback)(Object(x.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="term=".concat(d,"&school=").concat(f,"&major=").concat(g),"http://newalbert-1375323476.us-east-1.elb.amazonaws.com/albert/getcourse",e.next=4,u.a.get("http://newalbert-1375323476.us-east-1.elb.amazonaws.com/albert/getcourse?"+t);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)}))),[d,f,g]),E=C(R,!1);Object(n.useEffect)((function(){"success"===E.status&&e.handleSearch(E.value)}),[E.value,E.status,e]);return Object(m.jsxs)("div",{className:"search-option",children:[Object(m.jsxs)("div",{className:"select-container",children:[Object(m.jsxs)("div",{className:"search-field",children:[Object(m.jsx)("label",{children:"*Term"}),Object(m.jsx)("div",{className:"search-select",children:Object(m.jsx)(k.a,{style:{width:"100%"},showSearch:"showSearch",placeholder:"Select a term",optionFilterProp:"children",onChange:function(e){h(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,t){var a=parseInt(e.value.substr(e.value.search(" ")+1),10),n=e.value.substr(0,e.value.search(" ")),r=parseInt(t.value.substr(t.value.search(" ")+1),10),c=t.value.substr(0,t.value.search(" "));return a!==r?a<r:(n="January"===n?1:"Spring"===n?2:"Summer"===n?3:4,"January"===c?n=1:"Spring"===c?n=2:"Summer"===c?n=3:c=4,n<c)},children:function(){var e=[];if(!r)return e;var t=0;for(var a in r)e.push(Object(m.jsx)(I,{value:a,children:a},t)),t+=1;return e}()})})]}),Object(m.jsxs)("div",{className:"search-field",children:[Object(m.jsx)("label",{children:"*School"}),Object(m.jsx)("div",{className:"search-select",children:Object(m.jsx)(k.a,{style:{width:"100%"},showSearch:"showSearch",placeholder:"Select a school",optionFilterProp:"children",onChange:function(e){O(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:function(){var e=[];if(""===d)return e.push(Object(m.jsx)(I,{value:"",children:"Select a term first"},0)),e;var t=0;for(var a in r[d])e.push(Object(m.jsx)(I,{value:a,children:a},t)),t+=1;return e}()})})]}),Object(m.jsxs)("div",{className:"search-field",children:[Object(m.jsx)("label",{children:"*Subject"}),Object(m.jsx)("div",{className:"search-select",children:Object(m.jsx)(k.a,{style:{width:"100%"},showSearch:"showSearch",placeholder:"Select a subject",optionFilterProp:"children",onChange:function(e){y(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:function(){var e=[];if(""===f)return e.push(Object(m.jsx)(I,{value:"",children:"Select a school first"},0)),e;var t,a=0,n=Object(i.a)(r[d][f]);try{for(n.s();!(t=n.n()).done;){var c=t.value;e.push(Object(m.jsx)(I,{value:c,children:c},a)),a+=1}}catch(s){n.e(s)}finally{n.f()}return e}()})})]})]}),Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsxs)("div",{className:"search-field",children:[Object(m.jsx)("label",{children:"Keyword"}),Object(m.jsx)("div",{className:"search-input",children:Object(m.jsx)(N.a,{style:{width:"100%"},placeholder:"Input keyword",onChange:function(e){F(e.target.value)}})})]}),Object(m.jsxs)("div",{className:"small-container",children:[Object(m.jsxs)("div",{className:"search-field",children:[Object(m.jsx)("label",{children:"Catalog Number"}),Object(m.jsx)("div",{className:"search-input",children:Object(m.jsx)(N.a,{style:{width:"100%"},placeholder:"Input catalog",onChange:function(e){A(e.target.value)}})})]}),Object(m.jsxs)("div",{className:"search-field",children:[Object(m.jsx)("label",{children:"Class Number"}),Object(m.jsx)("div",{className:"search-input",children:Object(m.jsx)(N.a,{style:{width:"100%"},placeholder:"Input keyword",onChange:function(e){q(e.target.value)}})})]})]})]}),Object(m.jsx)(S.a,{type:"primary",onClick:E.execute,disabled:"pending"===E.status,children:"Search"})]})},H=function(e){var t=Object(n.useState)({}),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(m.jsxs)("div",{className:"searcher",children:[Object(m.jsx)(L,{handleSearch:function(e){c(e)}}),Object(m.jsx)(g,{data:r,handleAddCourse:e.handleAddCourse})]})},A=a(107),T=a.n(A),D=function(e){return Object(m.jsxs)("div",{className:"calendar-event",style:{background:e.color},children:[Object(m.jsx)("span",{children:"".concat(e.start.format("HH:mm")," - ").concat(e.end.format("HH:mm"))}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:e.value})]})},F=a(221),M=["whitesmoke","wheat","violet","thistle","tan","steelblue","snow","slateblue","sienna","seagreen","salmon","yellowgreen","saddlebrown","royalblue","tomato","powderblue","pink","palevioletred","paleturquoise","palegoldenrod","orchid","papayawhip","orangered","orange","olivedrab","oldlace","mintcream","midnightblue","mediumvioletred","mediumturquoise","mediumspringgreen","mediumslateblue","mediumseagreen","limegreen","aliceblue","lightslategrey","sandybrown","lightseagreen","slategrey","lightsalmon","mediumpurple","deeppink","lightgreen","teal","lightgray","aqua","lightcoral","lemonchiffon","indigo","hotpink","azure","grey","lightskyblue","honeydew","gold","gainsboro","ghostwhite","linen","black","forestgreen","floralwhite","firebrick","chocolate","dodgerblue","antiquewhite","dimgrey","dimgray","lavender","lightgrey","deepskyblue","blue","darkred","ivory","darkturquoise","mistyrose","lavenderblush","darkslategray","navajowhite","lightslategray","magenta","lightsteelblue","darkseagreen","cornsilk","darkorange","darkslategrey","khaki","darkorchid","moccasin","greenyellow","darkblue","darkolivegreen","slategray","silver","lime","darkgreen","palegreen","gray","red","beige","darksalmon","lightcyan","plum","lightblue","darkgray","darkgoldenrod","maroon","cyan","mediumorchid","chartreuse","darkmagenta","crimson","rosybrown","coral","mediumblue","bisque","darkviolet","darkslateblue","skyblue","burlywood","peachpuff","blueviolet","blanchedalmond","goldenrod","lightpink","darkgrey","springgreen","aquamarine","mediumaquamarine","turquoise","brown","lawngreen","olive","white","indianred","green","navy","darkkhaki","yellow","lightyellow","seashell","cadetblue","lightgoldenrodyellow","darkcyan","purple","peru","cornflowerblue","fuchsia"],P=k.a.Option,q=F.a.RangePicker,R=function(e){var t=Object(n.useState)(e.value),a=Object(l.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(e.color),i=Object(l.a)(s,2),o=i[0],u=i[1],h=Object(n.useState)(e.start),j=Object(l.a)(h,2),b=j[0],f=j[1],O=Object(n.useState)(e.end),v=Object(l.a)(O,2),p=v[0],g=v[1],x=Object(n.useMemo)((function(){return M.map((function(e,t){return Object(m.jsxs)(P,{value:e,children:[Object(m.jsx)("div",{className:"color-box",style:{backgroundColor:e}}),e]},t)}))}),[]);return Object(m.jsxs)("div",{className:"modal",children:[Object(m.jsx)("div",{className:"modal-text",children:b.isSame(p,"day")?Object(m.jsx)("span",{children:"".concat(b.format("HH:mm")," - ").concat(p.format("HH:mm"))}):Object(m.jsx)("span",{children:"".concat(b.format("Do MMM.")," - ").concat(p.format("Do MMM."),", ").concat(b.format("HH:mm")," - ").concat(p.format("HH:mm"))})}),Object(m.jsx)(q,{className:"modal-picker",defaultValue:[b,p],onChange:function(e){f(e[0]),g(e[1])},format:"HH:mm",minuteStep:15,disabledHours:function(){return[].concat(Object(d.a)(Array(6).keys()),Object(d.a)(Array.from(Array(4).keys()).map((function(e){return e+20}))))}}),Object(m.jsx)(N.a,{className:"modal-input",type:"text",placeholder:"Enter something",defaultValue:e.value,onChange:function(e){return c(e.target.value)}}),Object(m.jsx)(k.a,{showSearch:!0,className:"modal-select",placeholder:"Select Color",optionFilterProp:"children",filterOption:function(e,t){return t.value.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,t){return e.value.toLowerCase().localeCompare(t.value.toLowerCase())},onSelect:function(e){return u(e)},defaultValue:e.color,children:x}),Object(m.jsx)(S.a,{className:"modal-button",onClick:function(){return e.onRemove()},children:"edit"===e.actionType?"Delete":"Cancel"}),Object(m.jsx)(S.a,{className:"modal-button float-right",onClick:function(){e.onSave({start:b,end:p,value:r,color:o})},children:"Save"})]})},E=function(e){return Object(m.jsx)("div",{className:"calendar",children:Object(m.jsx)(T.a,{eventComponent:D,modalComponent:R,firstDay:b()().day(1),dayFormat:"ddd",startTime:b()({h:6,m:0}),endTime:b()({h:21,m:0}),numberOfDays:5,selectedIntervals:e.selectedIntervals,onIntervalSelect:e.handleIntervalSelect,onIntervalUpdate:e.handleIntervalUpdate,onIntervalRemove:e.handleIntervalRemove})})},U=function(){var e=h([]),t=Object(n.useState)(1),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(H,{handleAddCourse:function(t,a,n){var s={start:t,end:a,value:n,uid:r,color:"DodgerBlue"};e.addList(s),c((function(e){return e+1}))}}),Object(m.jsx)(E,{selectedIntervals:e.list,handleIntervalSelect:function(t){var a=t.map((function(e,t){return Object(s.a)(Object(s.a)({},e),{},{uid:r+t})}));e.concatList(a),c((function(e){return e+1}))},handleIntervalUpdate:function(t){var a=e.list.findIndex((function(e){return e.uid===t.uid}));a>-1&&e.updateList(a,t)},handleIntervalRemove:function(t){var a=e.list.findIndex((function(e){return e.uid===t.uid}));a>-1&&e.deleteList(a)}})]})},z=function(){return Object(m.jsxs)("div",{className:"topbar",children:["A NYU course schedule helper site developed by ",Object(m.jsx)("a",{className:"git-link",href:"https://github.com/HUNTINGHOUND",children:"Morgan Xu"})]})},J=function(){return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(z,{}),Object(m.jsx)(U,{}),Object(m.jsx)(f.a,{place:"right",type:"dark",effect:"solid",multiline:!0})]})},B=(a(216),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,225)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))});c.a.render(Object(m.jsx)(J,{}),document.getElementById("root")),B()}},[[217,1,2]]]);
//# sourceMappingURL=main.86e59ed3.chunk.js.map