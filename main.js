!function(t){var e={};function s(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(r,i,function(e){return t[e]}.bind(null,i));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=7)}([function(t,e){t.exports=mobx},function(t,e){t.exports=HyperHTMLElement},function(t,e,s){t.exports={albums:"tunes-playlist-albums",control:"tunes-playlist-control",play:"tunes-playlist-play",pause:"tunes-playlist-pause",prev:"tunes-playlist-prev",next:"tunes-playlist-next"}},function(t,e,s){t.exports={artist:"tunes-album-artist",tracks:"tunes-album-tracks",track:"tunes-album-track",queue:"tunes-album-queue"}},function(t,e){t.exports=classNames},function(t,e,s){t.exports={albums:"tunes-library-albums"}},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var r=s(1),i=s.n(r),a=s(0),n=t=>(class extends t{constructor(){super();const t=Object.getOwnPropertyNames(this.constructor.prototype).filter(t=>"function"==typeof this[t]).filter(t=>t.match(/^(on|render).+/g));t.length>0&&this.bindAll(...t)}bindAll(...t){for(let e,s=0;e=t[s];s++)this[e]=this[e].bind(this)}}),u=s(2),l=s.n(u);var c=Object(a.decorate)(class{constructor(t){this.artist=t.artist,this.title=t.title,this.tracks=t.tracks}isFirstTrack(t){return 0===t}isLastTrack(t){return t>=this.tracks.length-1}trackUrlAtIndex(t){return this.tracks.length>=t?this.tracks[t].url:null}},{artist:a.observable,title:a.observable,tracks:a.observable});var o=Object(a.decorate)(class{constructor(t=[]){this.albums=t.map(t=>new c(t))}add(t){-1===this.findAlbumIndex(t)&&this.albums.push(new c(t))}remove(t){const e=this.findAlbumIndex(t);return this.albums.splice(e,1),e}findAlbumIndex(t){return this.albums.findIndex(e=>e.title===t.title)}isFirstAlbum(t){return 0===t}isLastAlbum(t){return t===this.albums.length-1}},{albums:a.observable});var h=Object(a.decorate)(class extends o{get currentAlbum(){return this.albums.length?this.albums[this.currentAlbumIndex]:null}get currentTrackUrl(){return this.currentAlbum?this.currentAlbum.trackUrlAtIndex(this.currentTrackIndex):null}get isFirstTrack(){return this.currentAlbum.isFirstTrack(this.currentTrackIndex)}get isLastTrack(){return this.currentAlbum.isLastTrack(this.currentTrackIndex)}constructor(){super(),this.audio=new Audio,this.reset()}remove(t){super.remove(t),this.reset()}reset(){this.status="pause",this.currentAlbumIndex=0,this.currentTrackIndex=0,this.updateAudio()}updateAudio(){this.currentTrackUrl?(this.audio.src=this.currentTrackUrl,this.audio[this.status]()):this.audio.pause()}toggle(){this.albums.length&&(this.status="play"===this.status?"pause":"play",this.updateAudio())}changeTrack({title:t},e){this.currentAlbumIndex=this.albums.findIndex(e=>e.title===t),this.currentTrackIndex=e,this.updateAudio()}nextTrack(){if(this.albums.length){if(this.isLastTrack){const t=this.isLastAlbum(this.currentAlbumIndex);this.currentAlbumIndex=t?0:this.currentAlbumIndex+1,this.currentTrackIndex=0}else this.currentTrackIndex+=1;this.updateAudio()}}prevTrack(){if(this.albums.length){if(this.isFirstTrack){const t=this.isFirstAlbum(this.currentAlbumIndex);this.currentAlbumIndex=t?this.albums.length-1:this.currentAlbumIndex-1,this.currentTrackIndex=this.currentAlbum.tracks.length-1}else this.currentTrackIndex-=1;this.updateAudio()}}},{currentAlbumIndex:a.observable,currentTrackIndex:a.observable,playlist:a.observable,status:a.observable});const d=new o([{title:"Bound - Zen Bound Ingame Music",artist:"Ghost Monkey",tracks:[{title:"Care",url:"assets/music/blue.mp3"},{title:"Rope and Wood",url:"assets/music/jazz.mp3"},{title:"Problem Solvent",url:"assets/music/minimalish.mp3"},{title:"Unpaint My Skin",url:"assets/music/slower.mp3"},{title:"Nostalgia",url:"assets/music/blue.mp3"},{title:"Interludum",url:"assets/music/jazz.mp3"},{title:"Grind",url:"assets/music/minimalish.mp3"},{title:"Diagrams",url:"assets/music/slower.mp3"},{title:"Hare",url:"assets/music/blue.mp3"},{title:"Carefree",url:"assets/music/jazz.mp3"},{title:"Tunnel At The End Of Light",url:"assets/music/minimalish.mp3"}]},{title:"Where the Earth Meets the Sky",artist:"Tom Heasley",tracks:[{title:"Ground Zero",url:"assets/music/blue.mp3"},{title:"Western Sky",url:"assets/music/jazz.mp3"},{title:"Monterey Bay",url:"assets/music/minimalish.mp3"},{title:"Where the Earth Meets the Sky",url:"assets/music/slower.mp3"}]}]),m=new h;var b=s(4),p=s.n(b);function k(t,e,s){const{attr:r,computed:i,type:a}=s;function n(){return(this.__values||{})[e]}Object.defineProperty(t,e,i?{get:n}:{get:n,set:function(t){let s=null===t||void 0===t?t:a===Array?t:a(t);this._setPropertyValue(e,s),r&&this._setAttributeValue(r,s,a),this.invalidate()}})}var f=t=>(class extends t{static get properties(){return{}}static get observedAttributes(){return Object.keys(this.properties).map(t=>this.properties[t].attr).filter(t=>t)}constructor(){super(),this.__deps={},this.__values={},this.__attrMap={},this.__listeners={},this.__lookupCache={};for(const t in this.constructor.properties){const e=this.constructor.properties[t],{value:s,attr:r,computed:i}=e,a=/(\w+)\((.+)\)/.exec(i);if(k(this,t,e),"string"==typeof r&&r.trim()&&(this.__attrMap[r]=t),r||void 0===s||this._setPropertyValue(t,s),a){const e=a[1],s=a[2].split(/,\s*/),r=()=>{const r=s.map(t=>this[t]);if(this[e]&&r.every(t=>void 0!==t)){const s=this[e](...r);this._setPropertyValue(t,s)}};for(const t of s)this.__deps[t]?this.__deps[t].push(r):this.__deps[t]=[r];r()}}}connectedCallback(){super.connectedCallback&&super.connectedCallback();for(const t of this.constructor.observedAttributes)this._setPropertyValueFromAttributeValue(t,this.getAttribute(t))}attributeChangedCallback(t,e,s){super.attributeChangedCallback&&super.attributeChangedCallback(t,e,s),this._setPropertyValueFromAttributeValue(t,s),this.invalidate()}async invalidate(){this.__needsRender||(this.__needsRender=!0,this.__needsRender=await!1,this.render())}_setPropertyValue(t,e){this.__values[t]=e,this.__deps[t]&&this.__deps[t].forEach(t=>t())}_setPropertyValueFromAttributeValue(t,e){const s=this.__attrMap[t],{type:r}=this.constructor.properties[s]||{};if(r){const i="Boolean"===r.name?""===e||!!e&&e===t.toLowerCase():null!==e?r(e):void 0;this._setPropertyValue(s,i)}}_setAttributeValue(t,e,s){"Boolean"===s.name?e?this.setAttribute(t,""):this.removeAttribute(t):this.setAttribute(t,e)}}),y=s(3),v=s.n(y);const{wire:x}=i.a;(class extends(f(n(i.a))){static get properties(){return{album:{type:Object,value:{}},isPlaylist:{type:Boolean,attr:"showtracks"}}}get collection(){return this.isPlaylist?m:d}created(){Object(a.autorun)(()=>this.render())}onClick(){m[this.isPlaylist?"remove":"add"](this.album)}renderTrack(t,e){const s=this.active&&m.currentTrackIndex===e;return x()`
      <li
        class=${p()(v.a.track,{"is-active":s})}
        onclick=${()=>m.changeTrack(this.album,e)}
      >
        ${t.title}
      </li>
    `}renderTracks(){return this.isPlaylist?(this.active=m.currentAlbumIndex===m.findAlbumIndex(this.album),this.classList[this.active?"add":"remove"]("is-active"),x()`
      <ol class=${v.a.tracks}>
        ${this.album.tracks.map(this.renderTrack)}
      </ol>
    `):x()`${[]}`}render(){const{artist:t,title:e}=this.album,s=this.isPlaylist?"remove":"add";return this.html`
      <li>
        <button
          class=${`${v.a.queue} ${v.a[s]}`}
          onclick=${this.onClick}
        >
          <img src=${`assets/images/${s}.png`} />
        </button>
        <span class=${v.a.title}>${e}</span>
        <span class=${v.a.artist}>${t}</span>
        ${this.renderTracks()}
      </li>
    `}}).define("tunes-album");const{wire:_}=i.a;(class extends(n(i.a)){created(){Object(a.autorun)(()=>this.render())}onToggleClick(){m.toggle()}onNextClick(){m.nextTrack()}onPrevClick(){m.prevTrack()}renderAlbum(t){return _(t,":playlist-album")`
      <tunes-album showtracks album=${t} />
    `}render(){return this.html`
      <h1>Playlist</h1>
      <nav>
        <button
          class=${`${l.a.control} ${l.a[m.status]}`}
          onclick=${this.onToggleClick}
        />
        <button
          class=${`${l.a.control} ${l.a.prev}`}
          onclick=${this.onPrevClick}
        />
        <button
          class=${`${l.a.control} ${l.a.next}`}
          onclick=${this.onNextClick}
        />
      </nav>
      <ul class=${l.a.albums}>
        ${m.albums.map(this.renderAlbum)}
      </ul>
    `}}).define("tunes-playlist");var A=s(5),g=s.n(A);const{wire:T}=i.a;(class extends(n(i.a)){renderAlbum(t){return T(t,":library-album")`
      <tunes-album album=${t} />
    `}render(){return this.html`
      <h1>Music Library</h1>
      <ul class=${g.a.albums}>
        ${d.albums.map(this.renderAlbum)}
      </ul>
    `}}).define("tunes-library");s(6);(class extends i.a{render(){return this.html`
      <tunes-playlist />
      <tunes-library />
    `}}).define("tunes-app"),document.querySelector("#__wrapper__").innerHTML="<tunes-app></tunes-app>"}]);