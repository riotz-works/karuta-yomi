(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{237:function(t,e,s){},238:function(t,e,s){},239:function(t,e){},250:function(t,e){t.exports={type:"image",mimeType:"image/jpeg",src:"/karuta-yomi/assets/static/card-design.2c8be7e.105a772a01bc3b01807c63c6d71a0ea2.jpg",size:{width:1620,height:1117},sizes:"(max-width: 1620px) 100vw, 1620px",srcset:["/karuta-yomi/assets/static/card-design.82a2fbd.105a772a01bc3b01807c63c6d71a0ea2.jpg 480w","/karuta-yomi/assets/static/card-design.cbab2cf.105a772a01bc3b01807c63c6d71a0ea2.jpg 1024w","/karuta-yomi/assets/static/card-design.2c8be7e.105a772a01bc3b01807c63c6d71a0ea2.jpg 1620w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1620 1117' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-217f8a4cecca0bccd9c7d1b87eaa7efc'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-217f8a4cecca0bccd9c7d1b87eaa7efc)' width='1620' height='1117' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAsAEADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAMBBAUCBgj/xAAuEAACAQMDAgMGBwAAAAAAAAABAgMABBESITETQRQiYQVRUnGBsTJCkaHB0eH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQADAQEAAAAAAAAAAAAAAAECESExQf/aAAwDAQACEQMRAD8A%2bqM%2bbGKmljOrPaid%2blC0hUtpGcCj0O87cVCsDWBP7TmckRgqp4zyDV6xuRcQ5bOpdmPYn0qrhZC206KWkmTg8dqZUmKKKKAqGRYVYJlmA7tvQlwZLcyRKzZGQvB54qhdPbys0eGWVWI2GDnvSxHMxTpsGI40nH7fWq55Uov2glEjN1EmG2O5rTsdHgogBsVFItfZ6hS15h5H2x7v9oMMlnqWJWkh5UA5K%2bnyp5XmocXlwr6gduMV3rFZCX5kICISfSu7i5kt2AdCc8Ebg1n1TU1ijVnYc/as6J7iYZWPQPieuZLgqPD2kbSOdmkOwzTktK3R1xPaCbMixs4OCxXOKsQzBxkLpyTseSPfXnrklLiVQTgMcb%2btTbuwuImySdQ5NaXDidt95FU4J3PGTVZ7kpNJE%2bVOcqfT3j%2bqhR4mEmU5BLbY2HbakwqLiV7ebzqjEKx/EO/NLQcOy9YtLAHHJeLIP1FOWSzjXMSkkbg78/wfnUHXFKFWVzjucE/rir0cQKguzOT8VK7%2bhT6zTMvRjY42Jc7CieUwL5X6kndmGMfLgCntaLIMPLKVH5cgD7VItbdRgQx/UZqkv//Z' /%3e%3c/svg%3e"}},251:function(t,e,s){t.exports=s.p+"assets/media/finish.d1375c63.mp3"},252:function(t,e,s){"use strict";var i=s(237);s.n(i).a},253:function(t,e,s){"use strict";var i=s(238);s.n(i).a},254:function(t,e,s){"use strict";var i=s(239),a=s.n(i);e.default=a.a},280:function(t,e,s){"use strict";s.r(e);var i=s(1),a=s(6);const c=s(251);var n=i.a.extend({data:()=>({mode:"prep",config:{},field:{},card:void 0}),mounted(){this.config=new o(this.$page.game),this.field=new r(this.config,this.$page.game)},destroyed(){this.field.destroy()},methods:{start(){this.mode="play",this.reset(),this.next()},next(){this.card=this.field.openCard(),this.card?this.field.readAloud(this.card,this.config,this.next):this.mode="done"},skip(){this.field.skip(this.next)},pause(){this.field.pause()},resume(){this.field.resume(this.next)},reset(){this.field.destroy(),this.field=new r(this.config,this.$page.game)}},metaInfo(){const t=this.$page.game.title,e=this.$page.game.description;return{title:t,meta:[{key:"description",content:e,template:!0},{key:"twitter:title",content:t,template:!0},{key:"twitter:description",content:e,template:!0},{key:"og:title",content:t,template:!0},{key:"og:description",content:e,template:!0}]}}});class o{constructor(t){var e,s,i,c;this.voiceIndex=0,this.voices=[],this.random=!0,this.lang=t.configuration.lang,this.max=t.cards.length,this.count=(null===(e=t.configuration)||void 0===e?void 0:e.count)||t.cards.length,this.interval=(null===(s=t.configuration)||void 0===s?void 0:s.interval)||a.a.SYNTH.INTERVAL,this.rate=(null===(i=t.configuration)||void 0===i?void 0:i.rate)||a.a.SYNTH.RATE,this.pitch=(null===(c=t.configuration)||void 0===c?void 0:c.pitch)||a.a.SYNTH.PITCH,this.createVoices(),speechSynthesis.onvoiceschanged=()=>this.createVoices(),this.readable=void 0!==t.cards.find(t=>t.read),this.read=this.readable}createVoices(){this.voices=speechSynthesis.getVoices().filter(t=>t.lang.match(`${this.lang}|${this.lang.replace("-","_")}`)).map((t,e)=>{const s=t;return s.default&&(this.voiceIndex=e),s.text=t.name,s.value=e,s})}get voice(){return this.voices[this.voiceIndex]}}class r{constructor(t,e){this.index=-1,this.timerId=0,this.synthesisPaused=!1,this.status="open",this.sounds={finish:new Audio(c)},addEventListener("beforeunload",()=>{speechSynthesis.cancel()});const s=t.random?l(e.cards):e.cards;this.library=e.introduction?[e.introduction,...s]:s,t.count&&(this.library.length=t.count+(e.introduction?1:0))}get paused(){return"pause"===this.status||"paused"===this.status}get resumable(){return this.synthesisPaused}openCard(){return this.library.length<=++this.index?(this.status="done",void this.play(this.sounds.finish)):(this.status="open",this.library[this.index])}readAloud(t,e,s){speechSynthesis.cancel();const i=this.createSynth(t,e,()=>{"pause"===this.status||"done"===this.status?this.status="paused":"skip"===this.status?s():(this.status="interval",this.timerId=setTimeout(s,1e3*e.interval))});speechSynthesis.speak(i)}skip(t){return clearTimeout(this.timerId),"interval"===this.status||"paused"===this.status?t():(this.status="skip",speechSynthesis.cancel())}pause(){clearTimeout(this.timerId),speechSynthesis.pause(),"interval"===this.status?this.status="paused":this.status="pause"}resume(t){return"paused"===this.status?t():(this.status="open",speechSynthesis.resume())}destroy(){this.status="done",clearTimeout(this.timerId),speechSynthesis.cancel()}createSynth(t,e,s){const i=new SpeechSynthesisUtterance;return i.text=e.read&&t.read||t.text,i.lang=e.lang,i.rate=e.rate/10,i.pitch=e.pitch/10,i.voice=e.voice,i.volume=a.a.SYNTH.VOLUME,i.onend=s,i.onpause=()=>{this.synthesisPaused=speechSynthesis.paused},i}play(t){t.pause(),t.currentTime=0,t.volume=.05,t.play()}}const l=t=>{const e=t.slice();for(let t=e.length-1;0<t;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e};var d=n,h=(s(252),s(253),s(46)),u=s(254),g=s(96),p=s.n(g),v=s(234),m=s(243),f=s(244),A=s(275),b=s(248),w=s(276),y=s(277),x=s(279),C=s(278),k=s(282),S=Object(h.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",{staticClass:"Game",attrs:{mode:t.mode}},[i("v-container",["prep"===t.mode?i("section",{staticClass:"contents",attrs:{id:"prep"}},[i("h2",{staticClass:"display-3"},[t._v(t._s(t.$page.game.title))]),i("div",{staticClass:"description font-weight-medium"},[i("div",[t._v(t._s(t.$page.game.description))]),i("div",{staticClass:"credits"},t._l(t.$page.game.credits,(function(e,s){return i("div",{key:s,staticClass:"body-2"},[t._v(t._s(e.license)+" "),i("a",{attrs:{href:e.link}},[t._v(t._s(e.author))])])})),0)]),i("v-form",{staticClass:"font-weight-bold"},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-slider",{attrs:{label:"読上げ数",min:"1",max:t.config.max,"thumb-label":"always","thumb-size":"24",dense:""},model:{value:t.config.count,callback:function(e){t.$set(t.config,"count",e)},expression:"config.count"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-slider",{attrs:{label:"出題間隔",min:"1",max:"5",step:"0.1","thumb-label":"always","thumb-size":"24",dense:""},model:{value:t.config.interval,callback:function(e){t.$set(t.config,"interval",e)},expression:"config.interval"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"6"}},[i("v-slider",{attrs:{dense:"",label:"発話速度",min:"1",max:"100","thumb-label":"","thumb-size":"24"},model:{value:t.config.rate,callback:function(e){t.$set(t.config,"rate",e)},expression:"config.rate"}})],1),i("v-col",{attrs:{cols:"6"}},[i("v-slider",{attrs:{dense:"",label:"声の高低",min:"0",max:"20","thumb-label":"","thumb-size":"24"},model:{value:t.config.pitch,callback:function(e){t.$set(t.config,"pitch",e)},expression:"config.pitch"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"6"}},[i("v-switch",{staticClass:"switch",attrs:{dense:"",label:t.config.random?"ランダム":"シーケンス"},model:{value:t.config.random,callback:function(e){t.$set(t.config,"random",e)},expression:"config.random"}})],1),i("v-col",{attrs:{cols:"6"}},[i("v-switch",{staticClass:"switch",attrs:{dense:"",label:t.config.read?"読み補正":"表記読み",disabled:!t.config.readable},model:{value:t.config.read,callback:function(e){t.$set(t.config,"read",e)},expression:"config.read"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-select",{attrs:{items:t.config.voices,dense:"",label:"音声"},model:{value:t.config.voiceIndex,callback:function(e){t.$set(t.config,"voiceIndex",e)},expression:"config.voiceIndex"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-btn",{attrs:{depressed:"",small:"",width:"100%",color:"primary"},on:{click:t.start}},[t._v("開始！")])],1)],1)],1)],1):t._e(),"play"===t.mode?i("section",{attrs:{id:"play"}},[i("v-card",{staticClass:"card mx-auto",attrs:{raised:"",hover:"",ripple:!1},on:{click:function(e){return t.skip()}}},[i("g-image",{attrs:{src:s(250)}}),i("v-card-title",{staticClass:"text"},[t._v(t._s(t.card.text.replace(/\u3000/g,"\n")))])],1),i("v-row",{staticClass:"actions"},[i("v-col",{attrs:{cols:"6"}},[i("v-btn",{attrs:{outlined:"",block:"",color:"primary"},on:{click:function(e){return t.skip()}}},[t._v("つぎ！")])],1),t.field.paused?t._e():i("v-col",{attrs:{cols:"6"}},[i("v-btn",{attrs:{outlined:"",block:"",color:"secondary"},on:{click:function(e){return t.pause()}}},[t._v("まった")])],1),t.field.paused&&t.field.resumable?i("v-col",{attrs:{cols:"6"}},[i("v-btn",{attrs:{outlined:"",block:""},on:{click:function(e){return t.resume()}}},[t._v("つづき")])],1):t._e()],1)],1):t._e(),"done"===t.mode?i("section",{staticClass:"contents",attrs:{id:"done"}},[i("h2",{staticClass:"display-3"},[t._v("終了")]),i("v-container",[i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"10"}},[i("v-btn",{staticClass:"font-weight-black",attrs:{"x-large":"",block:"",color:"primary"},on:{click:function(e){return t.start()}}},[t._v("もぅ いっかい！！")])],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"10"}},[i("v-btn",{attrs:{outlined:"",block:"",color:"secondary",gridsome:"",to:"/"}},[t._v("やめる")])],1)],1)],1)],1):t._e()])],1)}),[],!1,null,"e31a8722",null);"function"==typeof u.default&&Object(u.default)(S);e.default=S.exports;p()(S,{VBtn:v.a,VCard:m.a,VCardTitle:f.a,VCol:A.a,VContainer:b.a,VForm:w.a,VRow:y.a,VSelect:x.a,VSlider:C.a,VSwitch:k.a})}}]);