(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),s=(a(11),a(2)),m=a.n(s),o=a(5),i=a(1),p=(a(13),function(e){var t=e.city,a=e.state,n=e.country,r=e.weatherData;console.log("this is weather"),console.log(r);var l=r.daily;console.log("this is weekDays"),console.log(l);var s=new Date,m=(s.toString().substring(0,3),new Date(s.setDate(s.getDate()+1)).toUTCString());m=m.toString().substring(0,3);var o=new Date(s.setDate(s.getDate()+1)).toUTCString();o=o.toString().substring(0,3);var i=new Date(s.setDate(s.getDate()+1)).toUTCString();i=i.toString().substring(0,3);var p=new Date(s.setDate(s.getDate()+1)).toUTCString();p=p.toString().substring(0,3);var u=new Date(s.setDate(s.getDate()+1)).toUTCString();u=u.toString().substring(0,3);var g=new Date(s.setDate(s.getDate()+1)).toUTCString();g=g.toString().substring(0,3);var h=new Date(s.setDate(s.getDate()+1)).toUTCString();return h=h.toString().substring(0,3),r.length<1?c.a.createElement("div",null,c.a.createElement("h1",null,"Bembe-Weather App"),c.a.createElement("div",{className:"message"},c.a.createElement("p",{className:"loading"},"For US City: Enter the City, or City and State. For Other Country's City: Enter City, or City and Country's Code.")),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null)):c.a.createElement("div",{className:"bodyContainer"},c.a.createElement("div",{className:"cityStateCountry"}," ",t,", ",a,", ",n," "),c.a.createElement("div",{className:"weatherContainer"},l.map((function(e,t){var a=new Date(1e3*e.dt).toUTCString();console.log(a);var n=a.substring(0,3),l=new Date(1e3*e.dt).getMonth()+1,s=a.substring(5,7),m=a.substring(12,16),o=parseInt(e.temp.min),i=parseInt(e.temp.max),p=parseInt(r.current.temp);return 0===t&&7!==t?(console.log(t),c.a.createElement("div",{key:t,className:"today1"},c.a.createElement("p",{className:"single1"},n),c.a.createElement("p",{className:"date1"},l,"/",s,"/",m),c.a.createElement("img",{className:"icon1",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:""}),c.a.createElement("p",{className:"currentTemp"},p,c.a.createElement("span",null,"\xb0")),c.a.createElement("div",{className:"temp1"},c.a.createElement("p",{className:"maxTemp1"},i,c.a.createElement("span",null,"\xb0")),c.a.createElement("p",{className:"minTemp1"},o,c.a.createElement("span",null,"\xb0"))))):1===t?c.a.createElement("div",{key:t,className:"today2"},c.a.createElement("p",{className:"singleDayH1"},n),c.a.createElement("p",{className:"date"},l,"/",s,"/",m),c.a.createElement("img",{className:"icon",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:""}),c.a.createElement("div",{className:"temp"},c.a.createElement("p",{className:"maxTemp"},i,c.a.createElement("span",null,"\xb0")),c.a.createElement("p",{className:"minTemp"},o,c.a.createElement("span",null,"\xb0")))):2===t?c.a.createElement("div",{key:t,className:"today3"},c.a.createElement("p",{className:"singleDayH1"},n),c.a.createElement("p",{className:"date"},l,"/",s,"/",m),c.a.createElement("img",{className:"icon",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:""}),c.a.createElement("div",{className:"temp"},c.a.createElement("p",{className:"maxTemp"},i,c.a.createElement("span",null,"\xb0")),c.a.createElement("p",{className:"minTemp"},o,c.a.createElement("span",null,"\xb0")))):3===t?c.a.createElement("div",{key:t,className:"today4"},c.a.createElement("p",{className:"singleDayH1"},n),c.a.createElement("p",{className:"date"},l,"/",s,"/",m),c.a.createElement("img",{className:"icon",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:""}),c.a.createElement("div",{className:"temp"},c.a.createElement("p",{className:"maxTemp"},i,c.a.createElement("span",null,"\xb0")),c.a.createElement("p",{className:"minTemp"},o,c.a.createElement("span",null,"\xb0")))):4===t?c.a.createElement("div",{key:t,className:"today5"},c.a.createElement("p",{className:"singleDayH1"},n),c.a.createElement("p",{className:"date"},l,"/",s,"/",m),c.a.createElement("img",{className:"icon",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:""}),c.a.createElement("div",{className:"temp"},c.a.createElement("p",{className:"maxTemp"},i,c.a.createElement("span",null,"\xb0")),c.a.createElement("p",{className:"minTemp"},o,c.a.createElement("span",null,"\xb0")))):void 0}))))}),u=function(e){var t=e.city,a=e.state,n=e.country,r=e.handleSubmit,l=e.handleChangeCity,s=e.handleChangeState,m=e.handleChangeCountry;return c.a.createElement("div",{className:"navbar navbar-dark bg-primary"},c.a.createElement("form",{onSubmit:r,className:"d-flex form-container"},c.a.createElement("input",{className:"cityInput",placeholder:"Type the city",type:"text",name:"SearchString",onChange:l,value:t,required:!0}),c.a.createElement("input",{className:"countryInput",placeholder:"Type the state",type:"text",name:"SearchString",onChange:s,value:a}),c.a.createElement("input",{className:"countryInput",placeholder:"Type the country code (TZ, CD...)",type:"text",name:"SearchString",onChange:m,value:n}),c.a.createElement("button",{className:"submitButton",type:"submit"},"Search")))};var g=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),g=s[0],h=s[1],E=Object(n.useState)(""),d=Object(i.a)(E,2),y=d[0],b=d[1],N=Object(n.useState)(""),v=Object(i.a)(N,2),w=v[0],S=v[1],C=Object(n.useState)(""),D=Object(i.a)(C,2),f=D[0],T=D[1],x=Object(n.useState)(""),j=Object(i.a)(x,2),O=j[0],k=j[1],U=Object(n.useState)(""),I=Object(i.a)(U,2),H=I[0],B=I[1],q="ce4c40997a3390b41ea04d9cbae780af",F=1,J="http://api.openweathermap.org/geo/1.0/direct?q=",A="ce4c40997a3390b41ea04d9cbae780af",M="https://api.openweathermap.org/data/2.5/onecall?";function W(e,t,a){return Z.apply(this,arguments)}function Z(){return(Z=Object(o.a)(m.a.mark((function e(t,a,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(J).concat(t,",").concat(a,",").concat(n,"&limit=").concat(F,"&appid=").concat(q),{mode:"no-cors"}).then((function(e){return e.json()})).then((function(e){e[0]&&fetch("".concat(M,"lat=").concat(e[0].lat,"&lon=").concat(e[0].lon,"&exclude=minutely,hourly&appid=").concat(A,"&units=imperial")).then((function(e){return e.json()})).then((function(t){T(e[0].name),k(e[0].state),B(e[0].country),r(t)}))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){W(),h(""),b(""),S("")}),[]),c.a.createElement("div",null,c.a.createElement(p,{weatherData:a,city:f,state:O,country:H}),c.a.createElement(u,{city:g,state:y,country:w,handleChangeCity:function(e){h(e.target.value)},handleChangeState:function(e){b(e.target.value)},handleChangeCountry:function(e){S(e.target.value)},handleSubmit:function(e){e.preventDefault(),W(g,y,w),h(""),b(""),S("")}}))};l.a.render(c.a.createElement(g,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.54a1f1de.chunk.js.map