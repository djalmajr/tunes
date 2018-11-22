/* eslint-disable */
!function i(a,l,s){function c(t,e){if(!l[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(o)return o(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var u=l[t]={exports:{}};a[t][0].call(u.exports,function(e){return c(a[t][1][e]||e)},u,u.exports,i,a,l,s)}return l[t].exports}for(var o="function"==typeof require&&require,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{title:"Bound - Zen Bound Ingame Music",artist:"Ghost Monkey",tracks:[{title:"Care",url:"music/blue.mp3"},{title:"Rope and Wood",url:"music/jazz.mp3"},{title:"Problem Solvent",url:"music/minimalish.mp3"},{title:"Unpaint My Skin",url:"music/slower.mp3"},{title:"Nostalgia",url:"music/blue.mp3"},{title:"Interludum",url:"music/jazz.mp3"},{title:"Grind",url:"music/minimalish.mp3"},{title:"Diagrams",url:"music/slower.mp3"},{title:"Hare",url:"music/blue.mp3"},{title:"Carefree",url:"music/jazz.mp3"},{title:"Tunnel At The End Of Light",url:"music/minimalish.mp3"}]},{title:"Where the Earth Meets the Sky",artist:"Tom Heasley",tracks:[{title:"Ground Zero",url:"music/blue.mp3"},{title:"Western Sky",url:"music/jazz.mp3"},{title:"Monterey Bay",url:"music/minimalish.mp3"},{title:"Where the Earth Meets the Sky",url:"music/slower.mp3"}]}]},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,u=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=e("../models/album.js"),a=(r=i)&&r.__esModule?r:{default:r};var l=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.albums=e.map(function(e){return new a.default(e)})}return u(t,[{key:"add",value:function(e){-1===this.findAlbumIndex(e)&&this.albums.push(new a.default(e))}},{key:"remove",value:function(e){var t=this.findAlbumIndex(e);return this.albums.splice(t,1),t}},{key:"findAlbumIndex",value:function(t){return this.albums.findIndex(function(e){return e.title===t.title})}},{key:"isFirstAlbum",value:function(e){return 0===e}},{key:"isLastAlbum",value:function(e){return e===this.albums.length-1}}]),t}();n.default=l},{"../models/album.js":5}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,u=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=e("./library.js"),a=(r=i)&&r.__esModule?r:{default:r};var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.audio=new Audio,e.reset(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),u(t,[{key:"currentAlbum",get:function(){return this.albums.length?this.albums[this.currentAlbumIndex]:null}},{key:"currentTrackUrl",get:function(){return this.currentAlbum?this.currentAlbum.trackUrlAtIndex(this.currentTrackIndex):null}},{key:"isFirstTrack",get:function(){return this.currentAlbum.isFirstTrack(this.currentTrackIndex)}},{key:"isLastTrack",get:function(){return this.currentAlbum.isLastTrack(this.currentTrackIndex)}}]),u(t,[{key:"remove",value:function(e){(function e(t,n,r){null===t&&(t=Function.prototype);var u=Object.getOwnPropertyDescriptor(t,n);if(void 0===u){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in u)return u.value;var a=u.get;return void 0!==a?a.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"remove",this).call(this,e),this.reset()}},{key:"reset",value:function(){this.status="pause",this.currentAlbumIndex=0,this.currentTrackIndex=0,this.updateAudio()}},{key:"updateAudio",value:function(){this.currentTrackUrl?(this.audio.src=this.currentTrackUrl,this.audio[this.status]()):this.audio.pause()}},{key:"toggle",value:function(){this.albums.length&&(this.status="play"===this.status?"pause":"play",this.updateAudio())}},{key:"changeTrack",value:function(e,t){var n=e.title;this.currentAlbumIndex=this.albums.findIndex(function(e){return e.title===n}),this.currentTrackIndex=t,this.updateAudio()}},{key:"nextTrack",value:function(){if(this.albums.length){if(this.isLastTrack){var e=this.isLastAlbum(this.currentAlbumIndex);this.currentAlbumIndex=e?0:this.currentAlbumIndex+1,this.currentTrackIndex=0}else this.currentTrackIndex+=1;this.updateAudio()}}},{key:"prevTrack",value:function(){if(this.albums.length){if(this.isFirstTrack){var e=this.isFirstAlbum(this.currentAlbumIndex);this.currentAlbumIndex=e?this.albums.length-1:this.currentAlbumIndex-1,this.currentTrackIndex=this.currentAlbum.tracks.length-1}else this.currentTrackIndex-=1;this.updateAudio()}}}]),t}();n.default=l},{"./library.js":2}],4:[function(e,t,n){"use strict";var r,u,i=(r=["",""],u=["",""],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(u)}}))),a=s(e("./store.js")),l=s(e("./views/app.js"));function s(e){return e&&e.__esModule?e:{default:e}}var c=document.querySelector("#__wrapper__"),o=hyperHTML.wire(),f=hyperHTML.bind(c);a.default.init(function(){return f(i,(0,l.default)(o))})},{"./store.js":6,"./views/app.js":9}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var u=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.artist=e.artist,this.title=e.title,this.tracks=e.tracks}return r(t,[{key:"isFirstTrack",value:function(e){return 0===e}},{key:"isLastTrack",value:function(e){return e>=this.tracks.length-1}},{key:"trackUrlAtIndex",value:function(e){return this.tracks.length>=e?this.tracks[e].url:null}}]),t}();n.default=u},{}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=r(e("./controllers/library.js")),o=r(e("./controllers/playlist.js")),f=r(e("./albums.js"));function r(e){return e&&e.__esModule?e:{default:e}}var d=void 0,b=void 0,p=void 0;n.default={init:function(e){var n=this;d=e,b=new c.default(f.default),p=new o.default;var t=Object.keys(this).filter(function(e){return"function"==typeof n[e]}).filter(function(e){return!e.match(/^(init|is|get).*/g)}),r=!0,u=!1,i=void 0;try{for(var a,l=function(){var e,t=a.value;n[t]=(e=n[t],function(){return e.apply(void 0,arguments),d()})},s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)l()}catch(e){u=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(u)throw i}}d()},get isPlaying(){return"play"===p.status},get playlist(){return p.albums},get library(){return b.albums},isAlbumActive:function(e){return p.currentAlbumIndex===p.findAlbumIndex(e)},isTrackActive:function(e,t){var n=p.currentTrackIndex===t;return this.isAlbumActive(e)&&n},addToPlaylist:function(e){p.add(e)},removeFromPlaylist:function(e){p.remove(e)},changeTrack:function(e,t){p.changeTrack(e,t)},playPause:function(){p.toggle()},prevTrack:function(){p.prevTrack()},nextTrack:function(){p.nextTrack()}}},{"./albums.js":1,"./controllers/library.js":2,"./controllers/playlist.js":3}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,c=s(["\n    <li\n      class=","\n      onclick=","\n    >\n      ","\n    </li>\n  "],["\n    <li\n      class=","\n      onclick=","\n    >\n      ","\n    </li>\n  "]),u=s(["",""],["",""]),i=s(['\n    <ol class="album-tracks">\n      ',"\n    </ol>\n  "],['\n    <ol class="album-tracks">\n      ',"\n    </ol>\n  "]),l=s(["\n    <div class=",'>\n      <li>\n        <button\n          class="album-queue"\n          onclick=','\n        >\n          <img src="','" />\n        </button>\n        <span class="album-title">','</span>\n        <span class="album-artist">',"</span>\n        ","\n      </li>\n    </div>\n  "],["\n    <div class=",'>\n      <li>\n        <button\n          class="album-queue"\n          onclick=','\n        >\n          <img src="','" />\n        </button>\n        <span class="album-title">','</span>\n        <span class="album-artist">',"</span>\n        ","\n      </li>\n    </div>\n  "]),a=e("../store.js"),o=(r=a)&&r.__esModule?r:{default:r};function s(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var f=hyperHTML.wire,d=function(e,t){var s=t.album,n=t.showtracks,r=t.tracks;return n?e(i,r.map(function(e,t){return n=f(e),u=(r={album:s,index:t,track:e}).album,i=r.index,a=r.track,l=o.default.isTrackActive(u,i),n(c,"album-track"+(l?" is-active":""),function(){return o.default.changeTrack(u,i)},a.title);var n,r,u,i,a,l})):e(u,[])};n.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.album,r=t.showtracks,u=r?"remove":"add",i=r&&o.default.isAlbumActive(n),a=r?"removeFromPlaylist":"addToPlaylist";return e(l,"album"+(i?" is-active":""),function(){return o.default[a](n)},"images/"+u+".png",n.title,n.artist,d(f(n,":album-tracks"),{album:n,showtracks:r,tracks:n.tracks}))}},{"../store.js":6}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,u,i,a=(r=['\n    <ul class="albums">\n      ',"\n    </ul>\n  "],u=['\n    <ul class="albums">\n      ',"\n    </ul>\n  "],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(u)}}))),l=e("./album.js"),s=(i=l)&&i.__esModule?i:{default:i};var c=hyperHTML.wire;n.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.albums,r=t.showtracks,u=t.wireID;return e(a,n.map(function(e){return(0,s.default)(c(e,u),{album:e,showtracks:r})}))}},{"./album.js":7}],9:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,u,i=(r=['\n  <div class="app">\n    ',"\n    ","\n  </div>\n"],u=['\n  <div class="app">\n    ',"\n    ","\n  </div>\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(u)}}))),a=s(e("./playlist.js")),l=s(e("./library.js"));function s(e){return e&&e.__esModule?e:{default:e}}var c=hyperHTML.wire(),o=hyperHTML.wire();n.default=function(e){return e(i,(0,a.default)(c),(0,l.default)(o))}},{"./library.js":10,"./playlist.js":11}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,u,i=(r=['\n  <div class="library">\n    <h1>Music Library</h1>\n    ',"\n  </div>\n"],u=['\n  <div class="library">\n    <h1>Music Library</h1>\n    ',"\n  </div>\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(u)}}))),a=s(e("./albums.js")),l=s(e("../store.js"));function s(e){return e&&e.__esModule?e:{default:e}}var c=hyperHTML.wire();n.default=function(e){return e(i,(0,a.default)(c,{wireID:":library-album",albums:l.default.library}))}},{"../store.js":6,"./albums.js":8}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,u,i=(r=['\n    <div class="playlist">\n      <h1>Playlist</h1>\n      <nav>\n        <button\n          class=',"\n          onclick=",'\n        />\n        <button\n          class="playlist-control is-prev"\n          onclick=','\n        />\n        <button\n          class="playlist-control is-next"\n          onclick=',"\n        />\n      </nav>\n      ","\n      </ul>\n    </div>\n  "],u=['\n    <div class="playlist">\n      <h1>Playlist</h1>\n      <nav>\n        <button\n          class=',"\n          onclick=",'\n        />\n        <button\n          class="playlist-control is-prev"\n          onclick=','\n        />\n        <button\n          class="playlist-control is-next"\n          onclick=',"\n        />\n      </nav>\n      ","\n      </ul>\n    </div>\n  "],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(u)}}))),a=s(e("./albums.js")),l=s(e("../store.js"));function s(e){return e&&e.__esModule?e:{default:e}}var c=hyperHTML.wire();n.default=function(e){var t=l.default.isPlaying?"play":"pause";return e(i,"playlist-control is-"+t,function(){return l.default.playPause()},function(){return l.default.prevTrack()},function(){return l.default.nextTrack()},(0,a.default)(c,{wireID:":playlist-album",albums:l.default.playlist,showtracks:!0}))}},{"../store.js":6,"./albums.js":8}]},{},[1,4,6]);