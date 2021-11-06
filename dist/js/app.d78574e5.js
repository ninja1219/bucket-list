(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},r=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},2431:function(t,e,o){"use strict";o("b781")},"3bfb":function(t,e,o){"use strict";o("7cde")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"menu"}},[o("div",{attrs:{id:"brand"}},[o("router-link",{attrs:{to:"/"}},[o("img",{attrs:{src:t.img}}),o("h1",[t._v("Bucket List")])])],1),o("div",{attrs:{id:"side"}},[o("router-link",{attrs:{to:"/plans"}},[o("div",{staticClass:"menu-item"},[o("p",[t._v("Plans")])])]),o("router-link",{attrs:{to:"/share"}},[o("div",{staticClass:"menu-item"},[o("p",[t._v("Share")])])])],1)]),o("router-view"),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer"},[o("h2",[t._v("For Reference:")]),o("a",{attrs:{href:"https://github.com/ninja1219/bucket-list.git"}},[t._v("Github")])])}],s={data:function(){return{img:o("7f73")}}},i=s,c=(o("3bfb"),o("2877")),l=Object(c["a"])(i,a,r,!1,null,"126f7524",null),d=l.exports,u=o("8c4f"),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("h1",[t._v("Your Bucket List")]),o("p",{directives:[{name:"show",rawName:"v-show",value:0===t.activeTodos.length,expression:"activeTodos.length === 0"}]},[t._v("You have completed your entire bucket list! What else do you want to accomplish?")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.addItem.apply(null,arguments)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),o("button",{attrs:{type:"submit"}},[t._v("Add")])]),o("div",{staticClass:"controls"},[o("button",{on:{click:function(e){return t.showAll()}}},[t._v("Show All")]),o("button",{on:{click:function(e){return t.showActive()}}},[t._v("Show Active")]),o("button",{on:{click:function(e){return t.showCompleted()}}},[t._v("Show Completed")])]),o("ul",t._l(t.filteredTodos,(function(e){return o("li",{key:e.text,attrs:{draggable:"true"},on:{dragstart:function(o){return t.dragItem(e)},dragover:function(t){t.preventDefault()},drop:function(o){return t.dropItem(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"item.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(o){var n=e.completed,a=o.target,r=!!a.checked;if(Array.isArray(n)){var s=null,i=t._i(n,s);a.checked?i<0&&t.$set(e,"completed",n.concat([s])):i>-1&&t.$set(e,"completed",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(e,"completed",r)}}}),o("label",{class:{completed:e.completed}},[t._v(t._s(e.text))]),o("router-link",{attrs:{to:"/plans"}},[o("button",{staticClass:"plan",on:{click:function(o){return t.showPlanMenu(e)}}},[t._v("Plan")])]),o("button",{staticClass:"delete",on:{click:function(o){return t.deleteItem(e)}}},[t._v("X")])],1)})),0)])},p=[],h=(o("4de4"),o("d3b7"),o("a434"),{name:"Home",components:{},computed:{activeTodos:function(){return this.$root.$data.todos.filter((function(t){return!t.completed}))},filteredTodos:function(){return"active"===this.$root.$data.show?this.$root.$data.todos.filter((function(t){return!t.completed})):"completed"===this.$root.$data.show?this.$root.$data.todos.filter((function(t){return t.completed})):this.$root.$data.todos}},methods:{addItem:function(){this.$root.$data.todos.push({text:this.message,completed:!1}),this.message=""},deleteItem:function(t){var e=this.$root.$data.todos.indexOf(t);e>-1&&this.$root.$data.todos.splice(e,1)},showAll:function(){this.$root.$data.show="all"},showActive:function(){this.$root.$data.show="active"},showCompleted:function(){this.$root.$data.show="completed"},showPlanMenu:function(t){this.$root.$data.planMenuOn=!0,this.$root.$data.currentItem=t},dragItem:function(t){this.$root.$data.drag=t},dropItem:function(t){var e=this.$root.$data.todos.indexOf(this.$root.$data.drag),o=this.$root.$data.todos.indexOf(t);this.$root.$data.todos.splice(e,1),this.$root.$data.todos.splice(o,0,this.$root.$data.drag)}}}),f=h,v=(o("cccb"),Object(c["a"])(f,m,p,!1,null,null,null)),g=v.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("h1",[t._v("Your Bucket List Plans")]),o("p",{directives:[{name:"show",rawName:"v-show",value:0===t.activeTodos.length,expression:"activeTodos.length === 0"}]},[t._v("You have completed your entire bucket list! Go to the home page to add more to your list!")]),!1===this.$root.$data.planMenuOn?o("div",[o("div",{staticClass:"controls"},[o("button",{on:{click:function(e){return t.showActive()}}},[t._v("Show Active")]),o("button",{on:{click:function(e){return t.showCompleted()}}},[t._v("Show Completed")])]),o("ul",t._l(t.filteredTodos,(function(e){return o("li",{key:e.text,attrs:{draggable:"true"},on:{dragstart:function(o){return t.dragItem(e)},dragover:function(t){t.preventDefault()},drop:function(o){return t.dropItem(e)}}},[o("label",{class:{completed:e.completed}},[t._v(t._s(e.text))]),o("button",{staticClass:"plan",on:{click:function(o){return t.showPlanMenu(e)}}},[t._v("Plan")])])})),0)]):o("div",[o("div",{staticClass:"controls"},[o("button",{on:{click:function(e){return t.goBack()}}},[t._v("Back")])]),o("h3",[t._v("Plans for: "+t._s(this.$root.$data.currentItem.text))]),o("form",{on:{submit:function(e){return e.preventDefault(),t.addPlan.apply(null,arguments)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),o("button",{attrs:{type:"submit"}},[t._v("Add Plan")])]),o("ul",t._l(t.findPlans,(function(e){return o("li",{key:e.text},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"plan.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(o){var n=e.completed,a=o.target,r=!!a.checked;if(Array.isArray(n)){var s=null,i=t._i(n,s);a.checked?i<0&&t.$set(e,"completed",n.concat([s])):i>-1&&t.$set(e,"completed",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(e,"completed",r)}}}),o("label",[t._v(t._s(e.text))]),o("button",{staticClass:"plan",on:{click:function(o){return t.deletePlan(e)}}},[t._v("X")])])})),0)])])},b=[],w={name:"Plans",components:{},computed:{activeTodos:function(){return this.$root.$data.todos.filter((function(t){return!t.completed}))},filteredTodos:function(){return"completed"===this.$root.$data.show?this.$root.$data.todos.filter((function(t){return t.completed})):this.$root.$data.todos.filter((function(t){return!t.completed}))},findPlans:function(){return this.$root.$data.currentItem.plan}},methods:{addItem:function(){this.$root.$data.todos.push({text:this.message,completed:!1}),this.message=""},addPlan:function(){this.$root.$data.currentItem.plan.push({text:this.message,completed:!1}),this.message=""},planItem:function(t){var e=this.$root.$data.todos.indexOf(t);e>-1&&this.$root.$data.todos.splice(e,1)},showActive:function(){this.$root.$data.show="active"},showCompleted:function(){this.$root.$data.show="completed"},showPlanMenu:function(t){this.$root.$data.planMenuOn=!0,this.$root.$data.currentItem=t},goBack:function(){this.$root.$data.planMenuOn=!1,this.$root.$data.currentItem={}},dragItem:function(t){this.$root.$data.drag=t},dropItem:function(t){var e=this.$root.$data.todos.indexOf(this.$root.$data.drag),o=this.$root.$data.todos.indexOf(t);this.$root.$data.todos.splice(e,1),this.$root.$data.todos.splice(o,0,this.$root.$data.drag)},deletePlan:function(t){var e=this.$root.$data.currentItem.plan.indexOf(t);e>-1&&this.$root.$data.currentItem.plan.splice(e,1)}}},y=w,x=(o("de10"),Object(c["a"])(y,$,b,!1,null,null,null)),_=x.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("h1",[t._v("Share Your Experience")]),o("div",[o("form",{on:{submit:function(e){return e.preventDefault(),t.addShare.apply(null,arguments)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.message1,expression:"message1"}],attrs:{id:"name",type:"text",placeholder:"Enter your name here"},domProps:{value:t.message1},on:{input:function(e){e.target.composing||(t.message1=e.target.value)}}}),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message2,expression:"message2"}],attrs:{id:"large-textbox",type:"text",placeholder:"Share what bucket list item you accomplished"},domProps:{value:t.message2},on:{input:function(e){e.target.composing||(t.message2=e.target.value)}}}),o("button",{attrs:{type:"submit"}},[t._v("Share")])])]),o("ul",t._l(t.findComments,(function(e){return o("li",{key:e.name},[o("p",[t._v(t._s(e.name))]),o("p",[t._v(t._s(e.text))])])})),0)])},I=[],P={name:"Share",computed:{findComments:function(){return this.$root.$data.bucketListShares}},methods:{addShare:function(){this.$root.$data.bucketListShares.push({name:this.message1,text:this.message2}),this.message1="",this.message2=""}}},O=P,A=(o("2431"),Object(c["a"])(O,k,I,!1,null,"7c6d9d31",null)),S=A.exports;n["a"].use(u["a"]);var C=[{path:"/",name:"Home",component:g},{path:"/plans",name:"Plans",component:_},{path:"/share",name:"Share",component:S}],M=new u["a"]({mode:"history",base:"/",routes:C}),j=M,T=[{name:"Susan Bellingham",text:"I finally completed my dream to climb the highest mountain in Washington, Mount Rainier! It was such an amazing journey! I started out by only doing hikes near where I live, and built up to do Mount Adams. After that, I made plans to climb Mount Rainier a few months later, but I got injured. About a year after my injury though, I was able to complete my dream."},{name:"Arnold Brown",text:"I went skydiving at age 75. I promised my grandson that I would do it with him if he got a college degree. It was wonderful."},{name:"Charley Swindle",text:"I SKIED A DOUBLE BLACK DIAMOND TODAY!!!"},{name:"Emily Randolph",text:"I ate a California Reaper - one of the hottest peppers out there. Never going to do it again."},{name:"Bradley Asterfield",text:"I ran a marathon! Under 4 hours! I'm pretty proud of that. Maybe I'll try to improve my time next year."}],B=T,L=[{text:"Visit Machu Picchu",plan:[],completed:!1,message:""},{text:"Learn how to backflip",plan:[{text:"First, I need to learn how to backflip in a safe area",completed:!0},{text:"Second, I must practice and perfect the proper technique",completed:!1},{text:"Lastly, I should do a backflip outside on grass",completed:!1}],completed:!1,message:""},{text:"Learn how to dunk",plan:[{text:"Go to the gym regularly to strengthen my lower body",completed:!1}],completed:!1,message:""},{text:"Build a treehouse",plan:[{text:"Practice woodworking skills",completed:!1},{text:"Search for designs",completed:!1}],completed:!1,message:""}],D=L;n["a"].config.productionTip=!1;var E={bucketListShares:B,todos:D,currentItem:{},planMenuOn:!1,message:"",show:"all",drag:{}};new n["a"]({router:j,data:E,render:function(t){return t(d)}}).$mount("#app")},"5ced":function(t,e,o){},"7cde":function(t,e,o){},"7e14":function(t,e,o){},"7f73":function(t,e,o){t.exports=o.p+"img/mountain-range.c7f077d1.jpg"},b781:function(t,e,o){},cccb:function(t,e,o){"use strict";o("5ced")},de10:function(t,e,o){"use strict";o("7e14")}});
//# sourceMappingURL=app.d78574e5.js.map