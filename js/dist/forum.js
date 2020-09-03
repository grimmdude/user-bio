module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=11)}([function(t,e){t.exports=flarum.core.compat.extend},,function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){t.exports=flarum.core.compat["utils/computed"]},function(t,e){t.exports=flarum.core.compat["components/UserCard"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["utils/classList"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){(function(){var t=[].slice;String.prototype.autoLink=function(){var e,o,r,n,i,a;return i=/(^|[\s\n]|<[A-Za-z]*\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi,0<(n=1<=arguments.length?t.call(arguments,0):[]).length?(r=n[0],o=function(){var t;for(e in t=[],r)a=r[e],"callback"!==e&&t.push(" "+e+"='"+a+"'");return t}().join(""),this.replace(i,(function(t,e,n){return""+e+(("function"==typeof r.callback?r.callback(n):void 0)||"<a href='"+n+"'"+o+">"+n+"</a>")}))):this.replace(i,"$1<a href='$2'>$2</a>")}}).call(this)},function(t,e,o){"use strict";o.r(e);var r=o(0),n=(o(10),o(3)),i=o.n(n),a=o(4),u=o.n(a),c=o(2),s=o.n(c),l=o(5),f=o.n(l);var p=o(6),d=o.n(p),b=o(7),h=o.n(b),v=o(8),g=o.n(v),y=o(9),x=o.n(y),_=function(t){var e,o;function r(){return t.apply(this,arguments)||this}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var n=r.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.editing=!1,this.loading=!1},n.view=function(){var t,e=this,o=this.attrs.user,r=o.attribute("canEditBio");if(this.editing)t=m("textarea",{className:"FormControl",placeholder:x()(app.translator.trans("fof-user-bio.forum.userbioPlaceholder")),rows:"3",oncreate:this.setupTextarea.bind(this),value:o.bio()});else{var n;if(this.loading)n=m("p",{className:"UserBio-placeholder"},m(h.a,{size:"tiny"}));else{var i=o.bioHtml();i?n=m.trust(i):r&&(n=m("p",{className:"UserBio-placeholder"},app.translator.trans("fof-user-bio.forum.userbioPlaceholder")))}var a=r&&!this.loading;t=m("div",{className:"UserBio-content",onclick:a&&function(){return e.editing=!0}},n)}return m("div",{className:"UserBio "+g()({editable:r,editing:this.editing,loading:this.loading})},t)},n.setupTextarea=function(t){var e=this,o=function(o){o.shiftKey||(o.preventDefault(),e.save(t.dom.value))};$(t.dom).focus().bind("blur",o).bind("keydown","return",o)},n.save=function(t){var e=this,o=this.attrs.user;o.bio()!==t&&(this.loading=!0,o.save({bio:t}).catch((function(){})).then((function(){e.loading=!1,m.redraw()}))),this.editing=!1,m.redraw()},r}(d.a);app.initializers.add("fof-user-bio",(function(){s.a.prototype.bio=f.a.attribute("bio"),s.a.prototype.bioHtml=i()("bio",(function(t){return t?"<p>"+$("<div/>").text(t).html().replace(/\n/g,"<br>").autoLink({rel:"nofollow ugc"})+"</p>":""})),Object(r.extend)(u.a.prototype,"infoItems",(function(t){var e=this.attrs.user;e&&e.attribute("canViewBio")&&t.add("bio",m(_,{user:e}))}))}))}]);
//# sourceMappingURL=forum.js.map