(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(27),l=a.n(r),o=(a(55),a(18)),i=a(19),s=a(21),u=a(20),h=a(22),m=(a(57),a(59),a(117)),d=a(118);var k=function(e){return c.a.createElement(d.a,null,c.a.createElement(m.a,{xs:6,md:4},c.a.createElement("h2",null,"Clicky Game")),c.a.createElement(m.a,{xs:6,md:4},c.a.createElement("h3",null,"Click an image to begin!")),c.a.createElement(m.a,{xsHidden:!0,md:4},c.a.createElement("h3",null,"score: ",e.score," "),c.a.createElement("h3",null,"topScore: ",e.topScore)))};a(110);var f=function(){return c.a.createElement("div",{className:"hero"},c.a.createElement("h2",null,"Clicky Game!"),c.a.createElement("h4",null,"Click on an image to earn points, but don't click on any more than once!"))},C=a(47);var g=function(e){return c.a.createElement("div",{className:"item",onClick:e.handleClick},c.a.createElement("div",{className:"image",id:e.id}))},p=(a(112),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleOnClick=function(e){if(console.log(e.target.alt+", onclick!"),console.log("clickedCharsAmount: "+a.state.clickedChars.length),console.log("clickedChars: "+a.state.clickedChars),console.log("indexOf: "+a.state.clickedChars.indexOf(e.target.alt)),a.state.clickedChars.length>0&&a.state.clickedChars.indexOf(e.target.alt)>=0)a.resetClickedChars(),console.log("existing img clicked.");else{var t=a.shuffle(a.state.arr);a.setState({arr:t,clickedChars:[].concat(Object(C.a)(a.state.clickedChars),[e.target.alt])}),console.log("new img clicked.")}a.props.callbackFromParent(a.state.clickedChars.length)},a.state={arr:["Minions","Smurfs","SuperMareo","Spongebob_Squarepants","Pikachu","Sally_Brown","SpongeBob_Transparent","MarieCat"],clickedChars:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e}},{key:"resetClickedChars",value:function(){this.setState({arr:this.shuffle(this.state.arr),clickedChars:[]})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"cards-layout wrapper"},this.state.arr.map(function(t,a){return c.a.createElement(g,{id:t,key:a,handleClick:e.handleOnClick})}))}}]),t}(c.a.Component));a(114);var E=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",null,"\xa9copyright PENG 2019"))},v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).myCallback=function(e){a.setState({score:e}),e>a.state.topScore&&a.setState({topScore:e})},a.state={score:0,topScore:0},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(k,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(f,null),c.a.createElement(p,{callbackFromParent:this.myCallback}),c.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,a){e.exports=a(116)},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){}},[[49,2,1]]]);
//# sourceMappingURL=main.aacdc102.chunk.js.map