(this["webpackJsonpmocking-practica"]=this["webpackJsonpmocking-practica"]||[]).push([[0],{30:function(e,a,t){},31:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(5),i=t.n(c),l=(t(30),t(23)),s=(t(31),t(6)),o=t.n(s),u=(t(50),t(22)),m=t(3);var d=function(){var e=Object(n.useState)([]),a=Object(l.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){o.a.get("/api/users/list/all-data").then((function(e){r(e.data)}))}),[]),Object(m.jsxs)(u.a,{striped:!0,responsive:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"First Name"}),Object(m.jsx)("th",{children:"Last Name"}),Object(m.jsx)("th",{children:"Username"})]})}),Object(m.jsx)("tbody",{children:t.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:e.id}),Object(m.jsx)("td",{children:e.fullName}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.username})]})}))})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,65)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),n(e),r(e),c(e),i(e)}))},h=t(21),b=new(t.n(h).a)(o.a);b.onGet("/api/users/list/all-data").reply(200,[{id:1,fullName:"Galen Slixby",company:"Yotz PVT LTD",role:"editor",username:"gslixby0",country:"El Salvador",contact:"(479) 232-9151",email:"gslixby0@abc.net.au",currentPlan:"enterprise",status:"inactive",avatar:""},{id:2,fullName:"Halsey Redmore",company:"Skinder PVT LTD",role:"author",username:"hredmore1",country:"Albania",contact:"(472) 607-9137",email:"hredmore1@imgur.com",currentPlan:"team",status:"pending"},{id:3,fullName:"Marjory Sicely",company:"Oozz PVT LTD",role:"maintainer",username:"msicely2",country:"Russia",contact:"(321) 264-4599",email:"msicely2@who.int",currentPlan:"enterprise",status:"active"},{id:4,fullName:"Cyrill Risby",company:"Oozz PVT LTD",role:"maintainer",username:"crisby3",country:"China",contact:"(923) 690-6806",email:"crisby3@wordpress.com",currentPlan:"team",status:"inactive"},{id:5,fullName:"Maggy Hurran",company:"Aimbo PVT LTD",role:"subscriber",username:"mhurran4",country:"Pakistan",contact:"(669) 914-1078",email:"mhurran4@yahoo.co.jp",currentPlan:"enterprise",status:"pending"},{id:6,fullName:"Silvain Halstead",company:"Jaxbean PVT LTD",role:"author",username:"shalstead5",country:"China",contact:"(958) 973-3093",email:"shalstead5@shinystat.com",currentPlan:"company",status:"active",avatar:""},{id:7,fullName:"Breena Gallemore",company:"Jazzy PVT LTD",role:"subscriber",username:"bgallemore6",country:"Canada",contact:"(825) 977-8152",email:"bgallemore6@boston.com",currentPlan:"company",status:"pending",avatar:""},{id:8,fullName:"Kathryne Liger",company:"Pixoboo PVT LTD",role:"author",username:"kliger7",country:"France",contact:"(187) 440-0934",email:"kliger7@vinaora.com",currentPlan:"enterprise",status:"pending"},{id:9,fullName:"Franz Scotfurth",company:"Tekfly PVT LTD",role:"subscriber",username:"fscotfurth8",country:"China",contact:"(978) 146-5443",email:"fscotfurth8@dailymotion.com",currentPlan:"team",status:"pending"},{id:10,fullName:"Jillene Bellany",company:"Gigashots PVT LTD",role:"maintainer",username:"jbellany9",country:"Jamaica",contact:"(589) 284-6732",email:"jbellany9@kickstarter.com",currentPlan:"company",status:"inactive"}]),b.onAny().passThrough(),i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(d,{})}),document.getElementById("root")),y()}},[[58,1,2]]]);
//# sourceMappingURL=main.fd34491d.chunk.js.map