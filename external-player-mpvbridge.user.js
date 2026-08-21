// ==UserScript==
// @name                    External Player for MPVBridge
// @name:zh-CN              外部播放器 · MPVBridge
// @namespace               https://github.com/LibertyPrime6/external-player-mpvbridge
// @copyright               2024, LuckyPuppy514; 2026, LibertyPrime6
// @version                 1.5.3-mpvbridge.1
// @license                 MIT
// @description             Play web video through MPVBridge and mpv
// @description:zh-CN       通过 MPVBridge 和 mpv 播放网页视频
// @icon                    data:image/png;base64,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
// @author                  LibertyPrime6
// @homepage                https://github.com/LibertyPrime6/external-player-mpvbridge
// @source                  https://github.com/LibertyPrime6/external-player-mpvbridge
// @supportURL              https://github.com/LibertyPrime6/external-player-mpvbridge/issues
// @include                 *://*
// @connect                 v.anime1.me
// @connect                 www.bilibili.com
// @connect                 api.bilibili.com
// @connect                 api.live.bilibili.com
// @connect                 www.youtube.com
// @connect                 127.0.0.1
// @grant                   GM_setValue
// @grant                   GM_getValue
// @grant                   GM_info
// @grant                   GM_cookie
// @grant                   GM.xmlHttpRequest
// @grant                   unsafeWindow
// @run-at                  document-start
// @downloadURL             https://raw.githubusercontent.com/LibertyPrime6/external-player-mpvbridge/main/external-player-mpvbridge.user.js
// @updateURL               https://raw.githubusercontent.com/LibertyPrime6/external-player-mpvbridge/main/external-player-mpvbridge.user.js
// ==/UserScript==

/*
 * MPVBridge edition maintained by LibertyPrime6.
 * Based on External Player by LuckyPuppy514:
 * https://github.com/LuckyPuppy514/external-player
 * Original copyright (c) 2024 LuckyPuppy514, licensed under the MIT License.
 */

'use strict';

/*! pako 2.0.4 https://github.com/nodeca/pako @license (MIT AND Zlib) */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).pako={})}(this,(function(t){"use strict";function e(t){let e=t.length;for(;--e>=0;)t[e]=0}const a=256,i=286,n=30,s=15,r=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),l=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),o=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),h=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),d=new Array(576);e(d);const _=new Array(60);e(_);const f=new Array(512);e(f);const c=new Array(256);e(c);const u=new Array(29);e(u);const w=new Array(n);function b(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let g,p,m;function k(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}e(w);const v=t=>t<256?f[t]:f[256+(t>>>7)],y=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},x=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,y(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},z=(t,e,a)=>{x(t,a[2*e],a[2*e+1])},A=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},E=(t,e,a)=>{const i=new Array(16);let n,r,l=0;for(n=1;n<=s;n++)i[n]=l=l+a[n-1]<<1;for(r=0;r<=e;r++){let e=t[2*r+1];0!==e&&(t[2*r]=A(i[e]++,e))}},R=t=>{let e;for(e=0;e<i;e++)t.dyn_ltree[2*e]=0;for(e=0;e<n;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0},Z=t=>{t.bi_valid>8?y(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},U=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},S=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&U(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!U(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},D=(t,e,i)=>{let n,s,o,h,d=0;if(0!==t.last_lit)do{n=t.pending_buf[t.d_buf+2*d]<<8|t.pending_buf[t.d_buf+2*d+1],s=t.pending_buf[t.l_buf+d],d++,0===n?z(t,s,e):(o=c[s],z(t,o+a+1,e),h=r[o],0!==h&&(s-=u[o],x(t,s,h)),n--,o=v(n),z(t,o,i),h=l[o],0!==h&&(n-=w[o],x(t,n,h)))}while(d<t.last_lit);z(t,256,e)},T=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,r=e.stat_desc.elems;let l,o,h,d=-1;for(t.heap_len=0,t.heap_max=573,l=0;l<r;l++)0!==a[2*l]?(t.heap[++t.heap_len]=d=l,t.depth[l]=0):a[2*l+1]=0;for(;t.heap_len<2;)h=t.heap[++t.heap_len]=d<2?++d:0,a[2*h]=1,t.depth[h]=0,t.opt_len--,n&&(t.static_len-=i[2*h+1]);for(e.max_code=d,l=t.heap_len>>1;l>=1;l--)S(t,a,l);h=r;do{l=t.heap[1],t.heap[1]=t.heap[t.heap_len--],S(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=l,t.heap[--t.heap_max]=o,a[2*h]=a[2*l]+a[2*o],t.depth[h]=(t.depth[l]>=t.depth[o]?t.depth[l]:t.depth[o])+1,a[2*l+1]=a[2*o+1]=h,t.heap[1]=h++,S(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,r=e.stat_desc.has_stree,l=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,h=e.stat_desc.max_length;let d,_,f,c,u,w,b=0;for(c=0;c<=s;c++)t.bl_count[c]=0;for(a[2*t.heap[t.heap_max]+1]=0,d=t.heap_max+1;d<573;d++)_=t.heap[d],c=a[2*a[2*_+1]+1]+1,c>h&&(c=h,b++),a[2*_+1]=c,_>i||(t.bl_count[c]++,u=0,_>=o&&(u=l[_-o]),w=a[2*_],t.opt_len+=w*(c+u),r&&(t.static_len+=w*(n[2*_+1]+u)));if(0!==b){do{for(c=h-1;0===t.bl_count[c];)c--;t.bl_count[c]--,t.bl_count[c+1]+=2,t.bl_count[h]--,b-=2}while(b>0);for(c=h;0!==c;c--)for(_=t.bl_count[c];0!==_;)f=t.heap[--d],f>i||(a[2*f+1]!==c&&(t.opt_len+=(c-a[2*f+1])*a[2*f],a[2*f+1]=c),_--)}})(t,e),E(a,d,t.bl_count)},O=(t,e,a)=>{let i,n,s=-1,r=e[1],l=0,o=7,h=4;for(0===r&&(o=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++l<o&&n===r||(l<h?t.bl_tree[2*n]+=l:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):l<=10?t.bl_tree[34]++:t.bl_tree[36]++,l=0,s=n,0===r?(o=138,h=3):n===r?(o=6,h=3):(o=7,h=4))},I=(t,e,a)=>{let i,n,s=-1,r=e[1],l=0,o=7,h=4;for(0===r&&(o=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++l<o&&n===r)){if(l<h)do{z(t,n,t.bl_tree)}while(0!=--l);else 0!==n?(n!==s&&(z(t,n,t.bl_tree),l--),z(t,16,t.bl_tree),x(t,l-3,2)):l<=10?(z(t,17,t.bl_tree),x(t,l-3,3)):(z(t,18,t.bl_tree),x(t,l-11,7));l=0,s=n,0===r?(o=138,h=3):n===r?(o=6,h=3):(o=7,h=4)}};let F=!1;const L=(t,e,a,i)=>{x(t,0+(i?1:0),3),((t,e,a,i)=>{Z(t),i&&(y(t,a),y(t,~a)),t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a})(t,e,a,!0)};var N={_tr_init:t=>{F||((()=>{let t,e,a,h,k;const v=new Array(16);for(a=0,h=0;h<28;h++)for(u[h]=a,t=0;t<1<<r[h];t++)c[a++]=h;for(c[a-1]=h,k=0,h=0;h<16;h++)for(w[h]=k,t=0;t<1<<l[h];t++)f[k++]=h;for(k>>=7;h<n;h++)for(w[h]=k<<7,t=0;t<1<<l[h]-7;t++)f[256+k++]=h;for(e=0;e<=s;e++)v[e]=0;for(t=0;t<=143;)d[2*t+1]=8,t++,v[8]++;for(;t<=255;)d[2*t+1]=9,t++,v[9]++;for(;t<=279;)d[2*t+1]=7,t++,v[7]++;for(;t<=287;)d[2*t+1]=8,t++,v[8]++;for(E(d,287,v),t=0;t<n;t++)_[2*t+1]=5,_[2*t]=A(t,5);g=new b(d,r,257,i,s),p=new b(_,l,0,n,s),m=new b(new Array(0),o,0,19,7)})(),F=!0),t.l_desc=new k(t.dyn_ltree,g),t.d_desc=new k(t.dyn_dtree,p),t.bl_desc=new k(t.bl_tree,m),t.bi_buf=0,t.bi_valid=0,R(t)},_tr_stored_block:L,_tr_flush_block:(t,e,i,n)=>{let s,r,l=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,i=4093624447;for(e=0;e<=31;e++,i>>>=1)if(1&i&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<a;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),T(t,t.l_desc),T(t,t.d_desc),l=(t=>{let e;for(O(t,t.dyn_ltree,t.l_desc.max_code),O(t,t.dyn_dtree,t.d_desc.max_code),T(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*h[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),s=t.opt_len+3+7>>>3,r=t.static_len+3+7>>>3,r<=s&&(s=r)):s=r=i+5,i+4<=s&&-1!==e?L(t,e,i,n):4===t.strategy||r===s?(x(t,2+(n?1:0),3),D(t,d,_)):(x(t,4+(n?1:0),3),((t,e,a,i)=>{let n;for(x(t,e-257,5),x(t,a-1,5),x(t,i-4,4),n=0;n<i;n++)x(t,t.bl_tree[2*h[n]+1],3);I(t,t.dyn_ltree,e-1),I(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,l+1),D(t,t.dyn_ltree,t.dyn_dtree)),R(t),n&&Z(t)},_tr_tally:(t,e,i)=>(t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&i,t.last_lit++,0===e?t.dyn_ltree[2*i]++:(t.matches++,e--,t.dyn_ltree[2*(c[i]+a+1)]++,t.dyn_dtree[2*v(e)]++),t.last_lit===t.lit_bufsize-1),_tr_align:t=>{x(t,2,3),z(t,256,d),(t=>{16===t.bi_valid?(y(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var B=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const C=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var M=(t,e,a,i)=>{const n=C,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},H={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},j={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:K,_tr_stored_block:P,_tr_flush_block:Y,_tr_tally:G,_tr_align:X}=N,{Z_NO_FLUSH:W,Z_PARTIAL_FLUSH:q,Z_FULL_FLUSH:J,Z_FINISH:Q,Z_BLOCK:V,Z_OK:$,Z_STREAM_END:tt,Z_STREAM_ERROR:et,Z_DATA_ERROR:at,Z_BUF_ERROR:it,Z_DEFAULT_COMPRESSION:nt,Z_FILTERED:st,Z_HUFFMAN_ONLY:rt,Z_RLE:lt,Z_FIXED:ot,Z_DEFAULT_STRATEGY:ht,Z_UNKNOWN:dt,Z_DEFLATED:_t}=j,ft=258,ct=262,ut=103,wt=113,bt=666,gt=(t,e)=>(t.msg=H[e],e),pt=t=>(t<<1)-(t>4?9:0),mt=t=>{let e=t.length;for(;--e>=0;)t[e]=0};let kt=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const vt=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},yt=(t,e)=>{Y(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,vt(t.strm)},xt=(t,e)=>{t.pending_buf[t.pending++]=e},zt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},At=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=B(t.adler,e,n,a):2===t.state.wrap&&(t.adler=M(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},Et=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,l=t.nice_match;const o=t.strstart>t.w_size-ct?t.strstart-(t.w_size-ct):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+ft;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),l>t.lookahead&&(l=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=ft-(f-s),s=f-ft,i>r){if(t.match_start=e,r=i,i>=l)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>o&&0!=--n);return r<=t.lookahead?r:t.lookahead},Rt=t=>{const e=t.w_size;let a,i,n,s,r;do{if(s=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-ct)){t.window.set(t.window.subarray(e,e+e),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,i=t.hash_size,a=i;do{n=t.head[--a],t.head[a]=n>=e?n-e:0}while(--i);i=e,a=i;do{n=t.prev[--a],t.prev[a]=n>=e?n-e:0}while(--i);s+=e}if(0===t.strm.avail_in)break;if(i=At(t.strm,t.window,t.strstart+t.lookahead,s),t.lookahead+=i,t.lookahead+t.insert>=3)for(r=t.strstart-t.insert,t.ins_h=t.window[r],t.ins_h=kt(t,t.ins_h,t.window[r+1]);t.insert&&(t.ins_h=kt(t,t.ins_h,t.window[r+3-1]),t.prev[r&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=r,r++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<ct&&0!==t.strm.avail_in)},Zt=(t,e)=>{let a,i;for(;;){if(t.lookahead<ct){if(Rt(t),t.lookahead<ct&&e===W)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=kt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-ct&&(t.match_length=Et(t,a)),t.match_length>=3)if(i=G(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=kt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=kt(t,t.ins_h,t.window[t.strstart+1]);else i=G(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(yt(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===Q?(yt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(yt(t,!1),0===t.strm.avail_out)?1:2},Ut=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<ct){if(Rt(t),t.lookahead<ct&&e===W)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=kt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-ct&&(t.match_length=Et(t,a),t.match_length<=5&&(t.strategy===st||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=G(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=kt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(yt(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=G(t,0,t.window[t.strstart-1]),i&&yt(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=G(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===Q?(yt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(yt(t,!1),0===t.strm.avail_out)?1:2};function St(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const Dt=[new St(0,0,0,0,((t,e)=>{let a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(Rt(t),0===t.lookahead&&e===W)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;const i=t.block_start+a;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,yt(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-ct&&(yt(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===Q?(yt(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(yt(t,!1),t.strm.avail_out),1)})),new St(4,4,8,4,Zt),new St(4,5,16,8,Zt),new St(4,6,32,32,Zt),new St(4,4,16,16,Ut),new St(8,16,32,32,Ut),new St(8,16,128,128,Ut),new St(8,32,128,256,Ut),new St(32,128,258,1024,Ut),new St(32,258,258,4096,Ut)];function Tt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=_t,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),mt(this.dyn_ltree),mt(this.dyn_dtree),mt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),mt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),mt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Ot=t=>{if(!t||!t.state)return gt(t,et);t.total_in=t.total_out=0,t.data_type=dt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:wt,t.adler=2===e.wrap?0:1,e.last_flush=W,K(e),$},It=t=>{const e=Ot(t);var a;return e===$&&((a=t.state).window_size=2*a.w_size,mt(a.head),a.max_lazy_match=Dt[a.level].max_lazy,a.good_match=Dt[a.level].good_length,a.nice_match=Dt[a.level].nice_length,a.max_chain_length=Dt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ft=(t,e,a,i,n,s)=>{if(!t)return et;let r=1;if(e===nt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==_t||i<8||i>15||e<0||e>9||s<0||s>ot)return gt(t,et);8===i&&(i=9);const l=new Tt;return t.state=l,l.strm=t,l.wrap=r,l.gzhead=null,l.w_bits=i,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=n+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+3-1)/3),l.window=new Uint8Array(2*l.w_size),l.head=new Uint16Array(l.hash_size),l.prev=new Uint16Array(l.w_size),l.lit_bufsize=1<<n+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new Uint8Array(l.pending_buf_size),l.d_buf=1*l.lit_bufsize,l.l_buf=3*l.lit_bufsize,l.level=e,l.strategy=s,l.method=a,It(t)};var Lt={deflateInit:(t,e)=>Ft(t,e,_t,15,8,ht),deflateInit2:Ft,deflateReset:It,deflateResetKeep:Ot,deflateSetHeader:(t,e)=>t&&t.state?2!==t.state.wrap?et:(t.state.gzhead=e,$):et,deflate:(t,e)=>{let a,i;if(!t||!t.state||e>V||e<0)return t?gt(t,et):et;const n=t.state;if(!t.output||!t.input&&0!==t.avail_in||n.status===bt&&e!==Q)return gt(t,0===t.avail_out?it:et);n.strm=t;const s=n.last_flush;if(n.last_flush=e,42===n.status)if(2===n.wrap)t.adler=0,xt(n,31),xt(n,139),xt(n,8),n.gzhead?(xt(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),xt(n,255&n.gzhead.time),xt(n,n.gzhead.time>>8&255),xt(n,n.gzhead.time>>16&255),xt(n,n.gzhead.time>>24&255),xt(n,9===n.level?2:n.strategy>=rt||n.level<2?4:0),xt(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(xt(n,255&n.gzhead.extra.length),xt(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(t.adler=M(t.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(xt(n,0),xt(n,0),xt(n,0),xt(n,0),xt(n,0),xt(n,9===n.level?2:n.strategy>=rt||n.level<2?4:0),xt(n,3),n.status=wt);else{let e=_t+(n.w_bits-8<<4)<<8,a=-1;a=n.strategy>=rt||n.level<2?0:n.level<6?1:6===n.level?2:3,e|=a<<6,0!==n.strstart&&(e|=32),e+=31-e%31,n.status=wt,zt(n,e),0!==n.strstart&&(zt(n,t.adler>>>16),zt(n,65535&t.adler)),t.adler=1}if(69===n.status)if(n.gzhead.extra){for(a=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>a&&(t.adler=M(t.adler,n.pending_buf,n.pending-a,a)),vt(t),a=n.pending,n.pending!==n.pending_buf_size));)xt(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>a&&(t.adler=M(t.adler,n.pending_buf,n.pending-a,a)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){a=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>a&&(t.adler=M(t.adler,n.pending_buf,n.pending-a,a)),vt(t),a=n.pending,n.pending===n.pending_buf_size)){i=1;break}i=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,xt(n,i)}while(0!==i);n.gzhead.hcrc&&n.pending>a&&(t.adler=M(t.adler,n.pending_buf,n.pending-a,a)),0===i&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){a=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>a&&(t.adler=M(t.adler,n.pending_buf,n.pending-a,a)),vt(t),a=n.pending,n.pending===n.pending_buf_size)){i=1;break}i=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,xt(n,i)}while(0!==i);n.gzhead.hcrc&&n.pending>a&&(t.adler=M(t.adler,n.pending_buf,n.pending-a,a)),0===i&&(n.status=ut)}else n.status=ut;if(n.status===ut&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&vt(t),n.pending+2<=n.pending_buf_size&&(xt(n,255&t.adler),xt(n,t.adler>>8&255),t.adler=0,n.status=wt)):n.status=wt),0!==n.pending){if(vt(t),0===t.avail_out)return n.last_flush=-1,$}else if(0===t.avail_in&&pt(e)<=pt(s)&&e!==Q)return gt(t,it);if(n.status===bt&&0!==t.avail_in)return gt(t,it);if(0!==t.avail_in||0!==n.lookahead||e!==W&&n.status!==bt){let a=n.strategy===rt?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(Rt(t),0===t.lookahead)){if(e===W)return 1;break}if(t.match_length=0,a=G(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(yt(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===Q?(yt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(yt(t,!1),0===t.strm.avail_out)?1:2})(n,e):n.strategy===lt?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=ft){if(Rt(t),t.lookahead<=ft&&e===W)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+ft;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=ft-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=G(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=G(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(yt(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===Q?(yt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(yt(t,!1),0===t.strm.avail_out)?1:2})(n,e):Dt[n.level].func(n,e);if(3!==a&&4!==a||(n.status=bt),1===a||3===a)return 0===t.avail_out&&(n.last_flush=-1),$;if(2===a&&(e===q?X(n):e!==V&&(P(n,0,0,!1),e===J&&(mt(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),vt(t),0===t.avail_out))return n.last_flush=-1,$}return e!==Q?$:n.wrap<=0?tt:(2===n.wrap?(xt(n,255&t.adler),xt(n,t.adler>>8&255),xt(n,t.adler>>16&255),xt(n,t.adler>>24&255),xt(n,255&t.total_in),xt(n,t.total_in>>8&255),xt(n,t.total_in>>16&255),xt(n,t.total_in>>24&255)):(zt(n,t.adler>>>16),zt(n,65535&t.adler)),vt(t),n.wrap>0&&(n.wrap=-n.wrap),0!==n.pending?$:tt)},deflateEnd:t=>{if(!t||!t.state)return et;const e=t.state.status;return 42!==e&&69!==e&&73!==e&&91!==e&&e!==ut&&e!==wt&&e!==bt?gt(t,et):(t.state=null,e===wt?gt(t,at):$)},deflateSetDictionary:(t,e)=>{let a=e.length;if(!t||!t.state)return et;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return et;if(1===n&&(t.adler=B(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(mt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,l=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,Rt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=kt(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,Rt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=l,t.avail_in=s,i.wrap=n,$},deflateInfo:"pako deflate (from Nodeca project)"};const Nt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Bt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Nt(a,e)&&(t[e]=a[e])}}return t},Ct=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Mt=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Mt=!1}const Ht=new Uint8Array(256);for(let t=0;t<256;t++)Ht[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Ht[254]=Ht[254]=1;var jt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,l=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),l+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(l),s=0,n=0;s<l;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},Kt=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Ht[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Mt)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Pt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Ht[t[a]]>e?a:e};var Yt=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Gt=Object.prototype.toString,{Z_NO_FLUSH:Xt,Z_SYNC_FLUSH:Wt,Z_FULL_FLUSH:qt,Z_FINISH:Jt,Z_OK:Qt,Z_STREAM_END:Vt,Z_DEFAULT_COMPRESSION:$t,Z_DEFAULT_STRATEGY:te,Z_DEFLATED:ee}=j;function ae(t){this.options=Bt({level:$t,method:ee,chunkSize:16384,windowBits:15,memLevel:8,strategy:te},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Yt,this.strm.avail_out=0;let a=Lt.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Qt)throw new Error(H[a]);if(e.header&&Lt.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?jt(e.dictionary):"[object ArrayBuffer]"===Gt.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=Lt.deflateSetDictionary(this.strm,t),a!==Qt)throw new Error(H[a]);this._dict_set=!0}}function ie(t,e){const a=new ae(e);if(a.push(t,!0),a.err)throw a.msg||H[a.err];return a.result}ae.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Jt:Xt,"string"==typeof t?a.input=jt(t):"[object ArrayBuffer]"===Gt.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===Wt||s===qt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=Lt.deflate(a,s),n===Vt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=Lt.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Qt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},ae.prototype.onData=function(t){this.chunks.push(t)},ae.prototype.onEnd=function(t){t===Qt&&(this.result=Ct(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var ne={Deflate:ae,deflate:ie,deflateRaw:function(t,e){return(e=e||{}).raw=!0,ie(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,ie(t,e)},constants:j};var se=function(t,e){let a,i,n,s,r,l,o,h,d,_,f,c,u,w,b,g,p,m,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),l=E.dmax,o=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,b=(1<<E.lenbits)-1,g=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),p=u[f&b];e:for(;;){if(m=p>>>24,f>>>=m,c-=m,m=p>>>16&255,0===m)A[n++]=65535&p;else{if(!(16&m)){if(0==(64&m)){p=u[(65535&p)+(f&(1<<m)-1)];continue e}if(32&m){E.mode=12;break t}t.msg="invalid literal/length code",E.mode=30;break t}k=65535&p,m&=15,m&&(c<m&&(f+=z[a++]<<c,c+=8),k+=f&(1<<m)-1,f>>>=m,c-=m),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),p=w[f&g];a:for(;;){if(m=p>>>24,f>>>=m,c-=m,m=p>>>16&255,!(16&m)){if(0==(64&m)){p=w[(65535&p)+(f&(1<<m)-1)];continue a}t.msg="invalid distance code",E.mode=30;break t}if(v=65535&p,m&=15,c<m&&(f+=z[a++]<<c,c+=8,c<m&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<m)-1,v>l){t.msg="invalid distance too far back",E.mode=30;break t}if(f>>>=m,c-=m,m=n-s,v>m){if(m=v-m,m>h&&E.sane){t.msg="invalid distance too far back",E.mode=30;break t}if(y=0,x=_,0===d){if(y+=o-m,m<k){k-=m;do{A[n++]=_[y++]}while(--m);y=n-v,x=A}}else if(d<m){if(y+=o+d-m,m-=d,m<k){k-=m;do{A[n++]=_[y++]}while(--m);if(y=0,d<k){m=d,k-=m;do{A[n++]=_[y++]}while(--m);y=n-v,x=A}}}else if(y+=d-m,m<k){k-=m;do{A[n++]=_[y++]}while(--m);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const re=15,le=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),oe=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),he=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),de=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var _e=(t,e,a,i,n,s,r,l)=>{const o=l.bits;let h,d,_,f,c,u,w=0,b=0,g=0,p=0,m=0,k=0,v=0,y=0,x=0,z=0,A=null,E=0;const R=new Uint16Array(16),Z=new Uint16Array(16);let U,S,D,T=null,O=0;for(w=0;w<=re;w++)R[w]=0;for(b=0;b<i;b++)R[e[a+b]]++;for(m=o,p=re;p>=1&&0===R[p];p--);if(m>p&&(m=p),0===p)return n[s++]=20971520,n[s++]=20971520,l.bits=1,0;for(g=1;g<p&&0===R[g];g++);for(m<g&&(m=g),y=1,w=1;w<=re;w++)if(y<<=1,y-=R[w],y<0)return-1;if(y>0&&(0===t||1!==p))return-1;for(Z[1]=0,w=1;w<re;w++)Z[w+1]=Z[w]+R[w];for(b=0;b<i;b++)0!==e[a+b]&&(r[Z[e[a+b]]++]=b);if(0===t?(A=T=r,u=19):1===t?(A=le,E-=257,T=oe,O-=257,u=256):(A=he,T=de,u=-1),z=0,b=0,w=g,c=s,k=m,v=0,_=-1,x=1<<m,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){U=w-v,r[b]<u?(S=0,D=r[b]):r[b]>u?(S=T[O+r[b]],D=A[E+r[b]]):(S=96,D=0),h=1<<w-v,d=1<<k,g=d;do{d-=h,n[c+(z>>v)+d]=U<<24|S<<16|D|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,b++,0==--R[w]){if(w===p)break;w=e[a+r[b]]}if(w>m&&(z&f)!==_){for(0===v&&(v=m),c+=g,k=w-v,y=1<<k;k+v<p&&(y-=R[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=m<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),l.bits=m,0};const{Z_FINISH:fe,Z_BLOCK:ce,Z_TREES:ue,Z_OK:we,Z_STREAM_END:be,Z_NEED_DICT:ge,Z_STREAM_ERROR:pe,Z_DATA_ERROR:me,Z_MEM_ERROR:ke,Z_BUF_ERROR:ve,Z_DEFLATED:ye}=j,xe=12,ze=30,Ae=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function Ee(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const Re=t=>{if(!t||!t.state)return pe;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=1,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,we},Ze=t=>{if(!t||!t.state)return pe;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,Re(t)},Ue=(t,e)=>{let a;if(!t||!t.state)return pe;const i=t.state;return e<0?(a=0,e=-e):(a=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?pe:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,Ze(t))},Se=(t,e)=>{if(!t)return pe;const a=new Ee;t.state=a,a.window=null;const i=Ue(t,e);return i!==we&&(t.state=null),i};let De,Te,Oe=!0;const Ie=t=>{if(Oe){De=new Int32Array(512),Te=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(_e(1,t.lens,0,288,De,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;_e(2,t.lens,0,32,Te,0,t.work,{bits:5}),Oe=!1}t.lencode=De,t.lenbits=9,t.distcode=Te,t.distbits=5},Fe=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Le={inflateReset:Ze,inflateReset2:Ue,inflateResetKeep:Re,inflateInit:t=>Se(t,15),inflateInit2:Se,inflate:(t,e)=>{let a,i,n,s,r,l,o,h,d,_,f,c,u,w,b,g,p,m,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return pe;a=t.state,a.mode===xe&&(a.mode=13),r=t.next_out,n=t.output,o=t.avail_out,s=t.next_in,i=t.input,l=t.avail_in,h=a.hold,d=a.bits,_=l,f=o,x=we;t:for(;;)switch(a.mode){case 1:if(0===a.wrap){a.mode=13;break}for(;d<16;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=M(a.check,A,2,0),h=0,d=0,a.mode=2;break}if(a.flags=0,a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=ze;break}if((15&h)!==ye){t.msg="unknown compression method",a.mode=ze;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits)a.wbits=y;else if(y>a.wbits){t.msg="invalid window size",a.mode=ze;break}a.dmax=1<<a.wbits,t.adler=a.check=1,a.mode=512&h?10:xe,h=0,d=0;break;case 2:for(;d<16;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==ye){t.msg="unknown compression method",a.mode=ze;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=ze;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&(A[0]=255&h,A[1]=h>>>8&255,a.check=M(a.check,A,2,0)),h=0,d=0,a.mode=3;case 3:for(;d<32;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=M(a.check,A,4,0)),h=0,d=0,a.mode=4;case 4:for(;d<16;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&(A[0]=255&h,A[1]=h>>>8&255,a.check=M(a.check,A,2,0)),h=0,d=0,a.mode=5;case 5:if(1024&a.flags){for(;d<16;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&(A[0]=255&h,A[1]=h>>>8&255,a.check=M(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=6;case 6:if(1024&a.flags&&(c=a.length,c>l&&(c=l),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&(a.check=M(a.check,i,c,s)),l-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=7;case 7:if(2048&a.flags){if(0===l)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<l);if(512&a.flags&&(a.check=M(a.check,i,c,s)),l-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=8;case 8:if(4096&a.flags){if(0===l)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<l);if(512&a.flags&&(a.check=M(a.check,i,c,s)),l-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=9;case 9:if(512&a.flags){for(;d<16;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}if(h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=ze;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=xe;break;case 10:for(;d<32;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}t.adler=a.check=Ae(h),h=0,d=0,a.mode=11;case 11:if(0===a.havedict)return t.next_out=r,t.avail_out=o,t.next_in=s,t.avail_in=l,a.hold=h,a.bits=d,ge;t.adler=a.check=1,a.mode=xe;case xe:if(e===ce||e===ue)break t;case 13:if(a.last){h>>>=7&d,d-=7&d,a.mode=27;break}for(;d<3;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=14;break;case 1:if(Ie(a),a.mode=20,e===ue){h>>>=2,d-=2;break t}break;case 2:a.mode=17;break;case 3:t.msg="invalid block type",a.mode=ze}h>>>=2,d-=2;break;case 14:for(h>>>=7&d,d-=7&d;d<32;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=ze;break}if(a.length=65535&h,h=0,d=0,a.mode=15,e===ue)break t;case 15:a.mode=16;case 16:if(c=a.length,c){if(c>l&&(c=l),c>o&&(c=o),0===c)break t;n.set(i.subarray(s,s+c),r),l-=c,s+=c,o-=c,r+=c,a.length-=c;break}a.mode=xe;break;case 17:for(;d<14;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=ze;break}a.have=0,a.mode=18;case 18:for(;a.have<a.ncode;){for(;d<3;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=_e(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=ze;break}a.have=0,a.mode=19;case 19:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],b=z>>>24,g=z>>>16&255,p=65535&z,!(b<=d);){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}if(p<16)h>>>=b,d-=b,a.lens[a.have++]=p;else{if(16===p){for(R=b+2;d<R;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}if(h>>>=b,d-=b,0===a.have){t.msg="invalid bit length repeat",a.mode=ze;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===p){for(R=b+3;d<R;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}h>>>=b,d-=b,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=b+7;d<R;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}h>>>=b,d-=b,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=ze;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===ze)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=ze;break}if(a.lenbits=9,E={bits:a.lenbits},x=_e(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=ze;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=_e(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=ze;break}if(a.mode=20,e===ue)break t;case 20:a.mode=21;case 21:if(l>=6&&o>=258){t.next_out=r,t.avail_out=o,t.next_in=s,t.avail_in=l,a.hold=h,a.bits=d,se(t,f),r=t.next_out,n=t.output,o=t.avail_out,s=t.next_in,i=t.input,l=t.avail_in,h=a.hold,d=a.bits,a.mode===xe&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],b=z>>>24,g=z>>>16&255,p=65535&z,!(b<=d);){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}if(g&&0==(240&g)){for(m=b,k=g,v=p;z=a.lencode[v+((h&(1<<m+k)-1)>>m)],b=z>>>24,g=z>>>16&255,p=65535&z,!(m+b<=d);){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,a.back+=m}if(h>>>=b,d-=b,a.back+=b,a.length=p,0===g){a.mode=26;break}if(32&g){a.back=-1,a.mode=xe;break}if(64&g){t.msg="invalid literal/length code",a.mode=ze;break}a.extra=15&g,a.mode=22;case 22:if(a.extra){for(R=a.extra;d<R;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=23;case 23:for(;z=a.distcode[h&(1<<a.distbits)-1],b=z>>>24,g=z>>>16&255,p=65535&z,!(b<=d);){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}if(0==(240&g)){for(m=b,k=g,v=p;z=a.distcode[v+((h&(1<<m+k)-1)>>m)],b=z>>>24,g=z>>>16&255,p=65535&z,!(m+b<=d);){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,a.back+=m}if(h>>>=b,d-=b,a.back+=b,64&g){t.msg="invalid distance code",a.mode=ze;break}a.offset=p,a.extra=15&g,a.mode=24;case 24:if(a.extra){for(R=a.extra;d<R;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=ze;break}a.mode=25;case 25:if(0===o)break t;if(c=f-o,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=ze;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>o&&(c=o),o-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=21);break;case 26:if(0===o)break t;n[r++]=a.length,o--,a.mode=21;break;case 27:if(a.wrap){for(;d<32;){if(0===l)break t;l--,h|=i[s++]<<d,d+=8}if(f-=o,t.total_out+=f,a.total+=f,f&&(t.adler=a.check=a.flags?M(a.check,n,f,r-f):B(a.check,n,f,r-f)),f=o,(a.flags?h:Ae(h))!==a.check){t.msg="incorrect data check",a.mode=ze;break}h=0,d=0}a.mode=28;case 28:if(a.wrap&&a.flags){for(;d<32;){if(0===l)break t;l--,h+=i[s++]<<d,d+=8}if(h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=ze;break}h=0,d=0}a.mode=29;case 29:x=be;break t;case ze:x=me;break t;case 31:return ke;case 32:default:return pe}return t.next_out=r,t.avail_out=o,t.next_in=s,t.avail_in=l,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<ze&&(a.mode<27||e!==fe))&&Fe(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,a.wrap&&f&&(t.adler=a.check=a.flags?M(a.check,n,f,t.next_out-f):B(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(a.mode===xe?128:0)+(20===a.mode||15===a.mode?256:0),(0===_&&0===f||e===fe)&&x===we&&(x=ve),x},inflateEnd:t=>{if(!t||!t.state)return pe;let e=t.state;return e.window&&(e.window=null),t.state=null,we},inflateGetHeader:(t,e)=>{if(!t||!t.state)return pe;const a=t.state;return 0==(2&a.wrap)?pe:(a.head=e,e.done=!1,we)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return t&&t.state?(i=t.state,0!==i.wrap&&11!==i.mode?pe:11===i.mode&&(n=1,n=B(n,e,a,0),n!==i.check)?me:(s=Fe(t,e,a,a),s?(i.mode=31,ke):(i.havedict=1,we))):pe},inflateInfo:"pako inflate (from Nodeca project)"};var Ne=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const Be=Object.prototype.toString,{Z_NO_FLUSH:Ce,Z_FINISH:Me,Z_OK:He,Z_STREAM_END:je,Z_NEED_DICT:Ke,Z_STREAM_ERROR:Pe,Z_DATA_ERROR:Ye,Z_MEM_ERROR:Ge}=j;function Xe(t){this.options=Bt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Yt,this.strm.avail_out=0;let a=Le.inflateInit2(this.strm,e.windowBits);if(a!==He)throw new Error(H[a]);if(this.header=new Ne,Le.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=jt(e.dictionary):"[object ArrayBuffer]"===Be.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Le.inflateSetDictionary(this.strm,e.dictionary),a!==He)))throw new Error(H[a])}function We(t,e){const a=new Xe(e);if(a.push(t),a.err)throw a.msg||H[a.err];return a.result}Xe.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,l;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Me:Ce,"[object ArrayBuffer]"===Be.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Le.inflate(a,r),s===Ke&&n&&(s=Le.inflateSetDictionary(a,n),s===He?s=Le.inflate(a,r):s===Ye&&(s=Ke));a.avail_in>0&&s===je&&a.state.wrap>0&&0!==t[a.next_in];)Le.inflateReset(a),s=Le.inflate(a,r);switch(s){case Pe:case Ye:case Ke:case Ge:return this.onEnd(s),this.ended=!0,!1}if(l=a.avail_out,a.next_out&&(0===a.avail_out||s===je))if("string"===this.options.to){let t=Pt(a.output,a.next_out),e=a.next_out-t,n=Kt(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==He||0!==l){if(s===je)return s=Le.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},Xe.prototype.onData=function(t){this.chunks.push(t)},Xe.prototype.onEnd=function(t){t===He&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ct(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var qe={Inflate:Xe,inflate:We,inflateRaw:function(t,e){return(e=e||{}).raw=!0,We(t,e)},ungzip:We,constants:j};const{Deflate:Je,deflate:Qe,deflateRaw:Ve,gzip:$e}=ne,{Inflate:ta,inflate:ea,inflateRaw:aa,ungzip:ia}=qe;var na=Je,sa=Qe,ra=Ve,la=$e,oa=ta,ha=ea,da=aa,_a=ia,fa=j,ca={Deflate:na,deflate:sa,deflateRaw:ra,gzip:la,Inflate:oa,inflate:ha,inflateRaw:da,ungzip:_a,constants:fa};t.Deflate=na,t.Inflate=oa,t.constants=fa,t.default=ca,t.deflate=sa,t.deflateRaw=ra,t.gzip=la,t.inflate=ha,t.inflateRaw=da,t.ungzip=_a,Object.defineProperty(t,"__esModule",{value:!0})}));

const DEBUG = false;

const PROJECT_NAME = 'external-player-mpvbridge';

const SETTING_URL = DEBUG === true ? 'http://127.0.0.1:5500/setting.html' : undefined;

const VIDEO_URL_REGEX_GLOBAL = /https?:\/\/((?![^"^']*http)[^"^']+(\.|%2e)(mp4|mkv|flv|m3u8|m4s|m3u|mov|avi|wmv|webm)(\?[^"^']+|))|((?![^"^']*http)[^"^']+\?[^"^']+(\.|%2e|video_)(mp4|mkv|flv|mov|avi|wmv|webm|m3u8|m3u)[^"^']*)/ig;

const VIDEO_URL_REGEX_EXACT = /^https?:\/\/((?![^"^']*http)[^"^']+(\.|%2e)(mp4|mkv|flv|m3u8|m4s|m3u|mov|avi|wmv|webm)(\?[^"^']+|))|((?![^"^']*http)[^"^']+\?[^"^']+(\.|%2e|video_)(mp4|mkv|flv|mov|avi|wmv|webm|m3u8|m3u)[^"^']*)$/ig;

const MPV_BRIDGE_PLAY_EVENT = 'launchMpvBridge(media, config, player.name);';

const defaultConfig = {
    global: {
        version: '1.5.3',
        language: (navigator.language || navigator.userLanguage) === 'zh-CN' ? 'zh' : 'en',
        buttonXCoord: '0',
        buttonYCoord: '0',
        buttonScale: '1.00',
        buttonVisibilityDuration: '5000',
        networkProxy: '',
        parser: {
            bilibili: {
                regex: [
                    "https://www.bilibili.com/bangumi/play/.+",
                    "https://www.bilibili.com/video/.+",
                    "https://www.bilibili.com/list/.+",
                    "https://www.bilibili.com/festival/.+"
                ],
                preferredQuality: 'auto',
                qualityPriority: '126,125,127,120,116,112,80,74,64,32,16',
                preferredAudio: 'auto',
                audioPriority: 'dolby,hires,30280,30232,30216,other',
                preferredSubtitle: 'auto',
                preferredCodec: 'auto',
                preferredPlaylist: 'current',
                collectionLimit: '50',
                partLimit: '50',
                playlistLimit: '50',
            },
            bilibiliLive: {
                regex: [
                    "https://live.bilibili.com/\\d+.*",
                    "https://live.bilibili.com/roomid=\\d+.*",
                    "https://live.bilibili.com/blanc/\\d+.*"
                ],
                preferredQuality: 'auto',
                preferredAudio: 'auto',
                preferredLine: '0',
            },
            youtube: {
                regex: [
                    "^https://(?:www\\.|m\\.|music\\.)?youtube\\.com/(?:watch\\?|shorts/|playlist\\?|live/|embed/|clip/).+",
                    "^https://youtu\\.be/.+",
                    "^https://(?:www\\.)?youtube-nocookie\\.com/embed/.+"
                ],
                preferredQuality: 'auto',
                qualityPriority: '4320hdr,4320,2160hdr,2160,1440hdr,1440,1080hdr,1080,720hdr,720,480,360,240,144',
                preferredAudio: 'auto',
                audioPriority: 'multichannel,originalOpus,originalAac,drcOpus,drcAac,other',
                preferredSubtitle: 'auto',
                preferredCodec: 'auto',
                preferredPlaylist: 'current',
                playlistLimit: '50',
            },
            ytdlp: {
                regex: [],
                preferredQuality: 'auto',
                preferredAudio: 'auto',
                preferredSubtitle: 'auto',
                preferredPlaylist: 'current',
                playlistLimit: '50',
            },
            video: {
                regex: [
                    "https://www.moepoi.net/static/player/artplayer.html",
                    "https://.*libvio\\..+/vid/plyr/vr2.php\\?url=.+",
                    "https://danmu.yhdmjx.com/m3u8.php\\?url=.+",
                    "https://player.cycanime.com/\\?url=.+",
                    "https://www.tucao.my/play/.+",
                    "https://ddys\\..+/.+",
                    "https://43.240.156.118:8443/vip/\\?url=.+",
                ]
            },
            url: {
                regex: [
                    "https://m3u8.girigirilove.com/.+\\.php\\?.+",
                    "https://m3u8.girigirilove.icu/.+\\.php\\?.+",
                    "https://cnys.tv/addons/dp/player/dp.php\\?.+",
                ]
            },
            html: {
                regex: []
            },
            script: {
                regex: [
                    "https://.*libvio\\..+/vid/yd.php\\?url=.+",
                    "https://43.240.156.118:8443/m3u8/\\?url=.+"
                ]
            },
            request: {
                regex: []
            },
            aniGamer: {
                regex: [
                    "https://ani.gamer.com.tw/animeVideo.php\\?sn=.+"
                ]
            },
            anime1: {
                regex: [
                    "https://anime1.me/\\d+"
                ]
            }
        }
    },
    players: [{
            name: 'IINA',
            system: 'mac',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAC4iAAAuIgGq4t2SAAAWjElEQVR42tSVA5DtahCE17ZtIznXtkt6lkrPtm3bFkqLEq5t28LaVr/+5yR3bU/Vdzip/N2DOKxZs8ZmhMIjLi4u2N7eXuHv4ODgSZz5OxobG+v4XlFXV1fEz3nHjh3L5/d6Mn7j3LlzYWVlZTdUVlZ+XVNTs626urqIAtFbMK+F+Zdra2vX8vN75eXlK/bs2eMzLkQfXLPGg6JvoYBcUoFuor6+HjQGpaWlYD6qqqrQ1NSE7oJm5NGM34qLi1fwNrZjT/jBgyEU8RIPeg4d4sqVK1i9ejW++OILPPzww7j2mmuwYMECTJs6DRMnTsQkMmP6dCxZsgQ33XQTnnn6afz000/Ytm2bmNOFGXsrKiru/vDDD11HXfi///7rSuHPsqIFaBMXLlzAL7/8IoJSUlLg4+0DV1dXuLu7w9vbG/7+/ggKDEJwcLAQGBgIfz8/eHl5wc3NTeVKzgTLBNxzzz3Izs7uZAbvebSkpOT2URNfUFCwgoc4hDaxc+dOPPDAA+Cyg4uLCzw8PBASEoLo6GjExsYinr8nxCcgMYEkJrYjgb/xP3Wt5EZFRSEoKEgZIuiajldffRVnzpxB2+BeWXnq1CltxIS//PLLTqz6p2gTHAHcdddd8PPzV8JFdExMDMXEU1gikpKSpRNSU9OQlpaO9PQMZGS0g7+l87805qQiJTmF1yTxWjFEGShd4uTkJMY8//zzyMvLgxkNDQ015SXlDw+7+CNHjsTQ8c1tNrZUJSgomMJdER4WwepJlQ3RqUowBWYiM1ODxirqukWw6BNgsZjIb0RnjsbcTDGFhohxSYlJiI+PR2xMrJjr6OioDJIxaxsszF/ffvut27CIP3/+/FS2/EUYsXv3bsyeNQf29o4ICQ5lxeN4SFVtVWmKTleilSAKuyp2YisTiMVkQidoiBhGM6Q72BkimkZId/n7B4gRN990c7tu4JLcsm7dutAhFc+lNp9tVgEj/vzjTwQGBHGpebIlVaurmVYVZ3ubwlVFKWSAmJ3SyQh2hOyMOHZaZEQknBydpFP41Gi7II/s2rUrekjEnz17dibFV8GIt99+h7PoggAaEBNtrXpykmr1DKPNzYNP6ITWLZae0XTDBE1Gw+wG7hjZD16eXvLUyMrKatsJxwbdCYcOnUysq6svghEvvPAi7OwcOIdhnMd4znoSF1Ya213NrTqoIVabKGidmERBJhOvkslrMjWFxUDvBs0wIVN2S3JysnUkomO4gP3kMctHM9rsqJ0D3gn//bfGo7q65iCMePONN2Fn64CwkAgRnxjPWU9RG1xVZkJ7oZmTrGgmk63oXTEJmcJEIUNrY4ZUvYMBJKOdCSliQjRNCGAXuLu5IScnB2aUl5f/NyADeOEfMOKXn3+Bo70zl1043U5AQkIKZ1HNpIUH4cEp1srkNkzhYRVTreg9MYVMFiMyFJoYQSwUqxtoHeD9MzLamJAg4+Dr68tx8MOOHTtgBpfkY93ptM3LK+zq95uD/6fVHKAmZ5o2fHUnM/MIa3y2bdu2bduWjl7btm3btrQWHgy7+69UML2z+/7+cs51KumH991V1Z1kFi84FOCqq67iHW9/N9JxGR0dI5WYkdgUYy0GABORBSPQvya6jgKEfgwCfUJ5rXHgPDoCgeA9rueQ+wll3bq1iBlccMEFyP6Brhz33Xffy4CbtjJAljMGjoXSZG6TDc0C2XPz5je9lTvvvBtpMoX4Omkl3pIfti/QbMuM6Lw4QnU6KNBDJd4TiojGRzfCZyY4MaCbm7B8+TJkK87BBx8MgOwRrhgfH3/N4A8mDBySTtuPj4+9HuAPf/gTxx57PLLRIU1rQkPFW5sApQGCyUiAAhPFwXOTgi3PbUUQcoPKWGAgxGYOZlEI+WXxtWDQ7BkaHuaKy69Alk2e97znIrvIx8l9xUPA9Y9qwEte8qpnL1o0b+8kSew111zL97/7Q+bMmZP9MElaJ00y8akK7wvNxRtioelW4oOOCbb4mu1/XyjN0HMTG1MaoeOx8tgg4hF1oPQmcM01V/OZz3yGYTFEdL1UbqD2ArrbNOBDH3r/9rKUvCiEwPe++wPuuONO5O6tEF8rxJeiM0JhRg0TC1fRpriuazSlAaV5SY1QZoOSlkZEhhilNCIIj9ZX4rEQMoL2Lbl5YnRslDe+8Y3Z9YTcfa4ErtrKgJ122utJCxbM2SNN0+TCCy7kz3/6C3PnzctrPs2anoqMZhoM40BaZGatECjIQEgmMGVp2JpivYNkmFAbJem21byQDhG0p0RlYguDYxPIY9BQih/MiFB6UJmQJglys8YnP/lJpAcAPP3Ef/5zT8ARG/DrX//8x3L7+pb8/LfcetsdTExMivg6STb7ppz9FGybtPMShtfvjA3vxDUuIZguxjQgtHFjH6b9mF/iRp9BOiNm2wbGe9oLX8Ca1/2MTc9/H60lTyNtTVGfWg9YMaUhIRX6JoTSQIlxJsSmxEfceMuVxFrLsmXLkJnnta99bVbO857yyldeDdwFYAE+/OG/1aQ+PlPc8XH2WedI7U9qp1eMBSwh5BECtvcEErdQeDLGP5V8UuoS6zD0cqjPxY88E+w4UCOk42x+/tfpLHoibnwBU899A4987K8sf/+PaD3uOSQ9g3FZRoxAbSSPgmZIImhsQNqQWCfYmpDmmCQnaqb6fydJFnXmjzjiCGRnCMCcyckvAFQG/OY373uFPHR4GsDJJ53Mug3rqUnqW5Ngi24ftLlYIRFSML5q2DY8NjeIbHwSkgUYHemAaWCo4YeX4EcXkvbAekg6gEVMeSUPfe63LPv4D2g+5QXYzAiBNCuV4SqqAYV4hKAMmmBzUHTirE0YGR3l1ltu5dLLLgMgSdO3jy9ZMr80QBwaebdkQLZh4IwzzmJ4aARjrIIpxaskJZCoEdXSH56QN0Itj/mQzC8y1KgB2CHFlKYVWNQI/bapF7yYR778E5Z/4QfMPvNFGJeoGUEMyBmKaJQGRCZoFuTidVasYgTV1utx2mmnASCNflLuI95QGZAk9k0AsluShnGrfIMa0F9bg6BZkAMJYPPZz+CxwJCOkSzCJCNY1W/yvqDUVfQ2AZK2xJAZ8Twe+eb3Wf717zPzvJdifCpGUGaCkBuAkBtRK1AThDILDCbqHSOjY1xyyaXI02qAbFnUfmfPPOTMMWN4HsAN198g28j1yEpQiVdC3Gm1DDT262gxMJ5/X7Kk36usIZh6kQX1whBgGyaQ9I2wDqZf8GyWfffbLP/+D5l58cu17Gw3QNJQE8peoKj40oCyFIxi5NoYoxsjmWAFyJbElwPYx734KU8UNybVgBtuxAe/5ZY2xHtXW5BgJJZZbpGUD3MAMMlSHVN0Fmo6+0o1IcqW19GvVyNaiGCYef4zWP7Db7H85z9h+pWvzo1ouUy4mkAWk1q0ggxsoopySNKETZunuO2228ud49NHFy4cs0ND9SeJG7pk3HnXXdTSWjT75dbbDKApFm3xRzAsKEpgcS6qdIdauUcoPd0y2j6DRmAQsUIHms97Git+8k2W//6XTL3+9ZqFttnWGa9KIG6GCP1/RDV555DXbuRln8x79avftMTW6/YJgNbGskeWqQFAJF4oMyAgWCEui3K2FxKoY5KF0RgEUoWMaCmPiAyLsiICJDZzM5rPeSqrfiml8c8/MPW2t+bNeLqpkxL3AC0BlL4JScIDDz4EgKx6TE6OLU6ttUvyu6Up5FWVpkolHiFEFRBMdGGI/0FrFuIYwSRzok1arLiMW86+Kb2MCPFYbBi5CaELrWc/hdYLv0f99vcwcdyJjJ59rhgxix+ug+lVPSvksZx1Vq9ZjXNOz2s1s8ACc/MMaGoWiCFAKV6JM6Eqg8FdmJaAmcSYMeIjLxdl4P5FY3yhxAbFR3xZZIQIho4YsfYvP2bF/jsz+4Y3YERHwBRQacEYrIie2rxZl3sAK/cG1hgzBCAPPvVeGiBE6kPJoBl6QVQG8zH2McKWt6sBNUyj2aaiAbGD54MMHrPCZug868ms3vmftJ/zbDEnKwn6kGswQDvT2St1hoa12EDs1LaPQvmjf1e5Ogwe0TT8ew8nJOCHhgj+v/fHEmuDdcG1inVRSPFe3RrA5xEfXw+k+npcb1l/vAzB5yAMGlP97LbHCdtg8KgLE2A3bGLun7ajfu11+GExIfgKCh3e+/zZRpIAZLvDjpXBDUVX1IcG3rkthbOlGR5fjceH82vwbj3Bz0bCSgOcxlJEnBTxRXw+4O9W2kNdmIRk3QYmdjuURZ/+BqOHH4Fv1Am+Lz74XHgQnHNMjI/rZAPZ+CbrXFgB6PZ37ry54ko3ci/EcStX4//b+dUEP43vbaA61LwewTulUjXQTxjAFJDhNVaEmjAB6Zr1TO52OAu//kMmdt1bjFiDGxsF7zJUMKURGgO+10PeOOtOtyfn7dnOWjGg+1CeAaM87rGPpdvt5K4FZWvxvj+jIRLj/Cq8a+N7ayKRmfuZAV0Fti04KH3Bej04Xgc/DsnqdUzucSQLf/Arxvc/BLNxA73xEbw14Lp41yNEJihFJhCcPi0GmJmZDlNTzZVWlr4H5D5Z60LukAj0ctHeDwoXnIr3oaexX+etLAN03HdX9rXp7+kUdAcf7ubXSv86qAl9QiZ8DJIVa5mz1xEs/PnvGTv8KMwmET7SIOCg2yb0OkIXMgOUPOu8EFyuAaxofAYAvZ5bd/31l6+0V175wEPyylvz9oUveiFg8IPpLniddQEhNyBK/3U4t05TznWX9WdODWjjBTVBRZYMzLaPM6AQPgrpI6uY3OtwFvzuT4wedzxMb8QNJYTQhU6TIOJR8YKLDKgyQE3QtX9icoJnP+tZZSbeBcxaYEa4SQ144QuYOzmfTqerjUNQA3wxHSo+S+k4A4SeX4nzm/T7XGc5oRIW8rJwTaGlaRhKkQOgsRA+DMlDK5jc5xDm/+UvjJxyEmFGhDcswYmZItyr+JYakJvQVbzrln0gygRPc3aWpz31qVUJiCFXAdg8Hfz5APLenRe88Pk0mzPqmg9C1cXL657QxeOqztzzD+PDjODEgBX4XkuFeh+EZt+AKM1z+uJ9TRiC9IGHmdx3f+b9688Mn3UqobUZVzeE7He2Z0T8LAihMADBD2aAojPfXwHEpNfJTZQ85dYGOD09e15lwKZNU6dLL9Bl8N3veRc+ZOka+jWkJRDNvtazq7bLXf8Avqhz110trAWQa6/ig9KCYPoz7YqYCW9ATR5fT+6/J3O2+xNDF5wuYqdwNfDdpoidKZhVZEzFCyqcvP6FWLxGxcm4sZb3vPtdqks+cLX+1ltvurgy4He/+9W10ghvz774vve9l/HxuXTanbwMQmlCvwGqQdGa3nUPVuOutx7fWUUwCKnOvPMt/MwKQnMzPo1qXEjvu4uJA3dgcpff0bjsDBE1kwvvZcKnlb74ZkEmXFDh7Vy8KxHhKl5LWHDMzkwjr9V55StfiTEmy4AzgY2VAYDznkPki9mrJHVqtrWx6P79rp9HwXt6rMTTpes30PF35bPtW7oR6s7cmM9CcyWht5mQGdZci716L9i8Sf/R5N5bGD3sH4zv80vq15ylmdJT4bP4QrjPhffFFzOvoruZ+IxYuIubXz5WvDP87Gc/w8TEBJ1uN8uAAykOc8UVN5bnj3vGMx5/lzxCHr7ooot5+9vfyfDQWP502KaKMWn0YsRS4/EE08WZ9RgamOI+3NgaprGE4KYIoVk8rbGQzdrYIkJjGLNpBcZ19DxYA7qqeCDPNFGW48vzsgQdJq4h7zXGa6yWrMvrv9lssmDBfHlPeDlLly5FXo3dLi9JXgD0AIx8kpPo2GvJksVf73Z7fPzjn+LEE49jcnwh1iaYDJNGb4dMcd+djQ1Fz7gSIUBwIEaQ1OOnG7kgAqQ1NUu/N99eF9FpJFTClaBi9TzqnH3RCiq+yMa8h01NbeYvspL85je/0fSXzzB/A9i7yoCbb76Z6Hjq4x//+OzVeP2mm27iDW94MwRDoz6sBqgRZus3w4atn8PpeRwRbPmEhpzqjsJX/zw4iKMKVmMGNxB96EfdxRbb95npKeRzRPI0+GLt/vK6/74j/qN6awC2I4qh2Wpr27Zt27Zt27Y5rm3btvV+bXdUY3uSTvpvt1s7M3nGnujqZN685CYT3eJjI5eMjh49ejsOn+7detKw4UMoVIjwslFiSRroSRGrZT7+9PiKvPa25HzPY8nH8wwToKq8bk4TPYFDzEUc720g/J/KiVDZsmV5/s+ELz79mkuGWB79AmFBWDyNKIgOupkQJI4dP0KhQoZnsGIIIj00ce9bmcBJH3sSJMhFkDCJEKaXHfo6cDd4RAHP9VH4ahCI1xL69+/fZ6D5ySWWn99l8pCyceLEWMoTBk6R/PkK0PMXr96fGEmRgyHU8x+AmWqCJ+PeeGwkwOcYIo4B1Hv5qKKhz+8LeBnN2Lk48CXgeObz+dLqgaiLIOEp57BKjAbCUUY+VeUZ4pIlC/niZdEklva6cH3uFcr6WNcUZo5LJTcKnLEG8VpAuHdTGLxyinhhx/m+dOlSihkzpkzuUOhbEtEGgnyrAWj9+rUbQYIsYttBYqROnUqWyxs2rCMWTgP5Q7W+BXWtaIzdI9eOkj8YS6u7CZzBuAGrgS3H5Xj/sOc3eMgDc1TyPlu2bGTbNh+NT2W2D3mKOQ/wlphJksTeh22kGLyLMnjwEOrbtw9zBuSPLEvP3/w5Oi7xfM3Rl733xrxC3PVRRzc71QgCnq9x9uzZVLp0ab4eHvN3gN1eUCgxXqLD4FckDVZQm+H1CDAEjRs3njp16igIggULbhKU9DToqwb49l1Tx+NlDXfSewbPYS+MMHSe8PUwK+zovn37ChDRY/qCWCdOnKVvkIyxY0dbAwtH4o3TpUuXU9OmTeQgxeZZHYOGWkSGQX6iu0eAeQPX9/kR7/HxOh9kaan2IFTLcId+pMOQ4tzXQV8RCx1Z9I2SAsVwKYpKIjlHPO+jNm1aEwjJgtS2gxrO13ND6+vB8NVN+Y+9rY95iGapXbs2DRo0SCIAQzfP8zdCqojnf7Vs2rQpCvJqPawuXV/4M2GPhwsXXpIW9cCBIQwNhkYKU4MbGuwrGlQUheyDIgW1OAhlftasWUyIZj6wg+U8N2hNkbn575a7d+/2hyHeIs+Yli4tM40bNxa2tl4g0kUu+L3aojarzaoGsj/VIAL0I0VYf/hdLGgcFDYHDRwO/z8DRzvdowsXLtSjPymYVuaAEfZhP5GjQS7kyJHDTrt27aSvx9z3RQFlg6gClKqC1Pf81bIs8zekYQKh7vj5+YnXMa+X/0Xz1hLwmePTX5IAd2/dav7gwYMrbAi+MDYEjONgOHJq1arFVHY2gAL5ZuVoYNAtWrRg+juHN/82e10U/3kQK7sy9JNiCXHo5yV05syZ6xJRY1x4Cj154ak0ooTQ1gbW6TnCdJQQugSvcaXWU1qesEgR01knukF4KsuPhaqrowoMzJV/JxZqk5AKC8RY/5KAjhoInioJ78y8d+fObS6SXCNQsUU1XZCz4tEbN244mKk5qCkODMXv8ef5c6zicSxinDu3b/uB8z+e23fofxF4PQyAFcGFDwbYjdArAPwC3ueqzWA1nLWPWIyCCHmCz/lu3bq1HMbphsfZFyxYEIT+d0HlDnTm4JloSIXUYKPmvejzlUTlLg/ODmtxvJ4To0nyHTt2RPqTDdLvAFpMqcN9BUH4AAAAAElFTkSuQmCC',
            iconSize: 53,
            playEvent: "const delimiter = '&';\n\nlet args = [\n    `url=${encodeURIComponent(media.video)}`,\n    media.origin ? `mpv_http-header-fields=${encodeURIComponent('origin: ' + media.origin)}` : '',\n    media.referer ? `mpv_http-header-fields=${encodeURIComponent('referer: ' + media.referer)}` : '',\n]\nargs = args.filter(item => item !== '');\n\nconsole.log(args);\n\nwindow.open(`iina://weblink?${args.join(delimiter)}`, '_self');",
            presetEvent: {
                playAuto: false,
                pauseAuto: true,
                closeAuto: false,
                syncTime: false,
            },
            enable: true,
            readonly: true
        },
        {
            name: 'PotPlayer',
            system: 'windows',
            icon: 'data:image/png;base64,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',
            iconSize: 50,
            playEvent: "let args = [\n    `\"${media.video}\"`,\n    media.subtitle ? `/sub=\"${media.subtitle}\"` : '',\n    media.origin ? `/headers=\"origin: ${media.origin}\"` : '',\n    media.referer ? `/referer=\"${media.referer}\"` : '',\n    config.networkProxy ? `/user_agent=\"${config.networkProxy}\"` : '',\n    media.title ? `/title=\"${media.title}\"` : '',\n    media.time ? `/seek=\"${media.time}\"` : '',\n]\nargs = args.filter(item => item !== '');\n\nconsole.log(args);\n\nwindow.open(`ush://${player.name}?${compress(args.join(' '))}`, '_self');",
            presetEvent: {
                playAuto: false,
                pauseAuto: true,
                closeAuto: false,
                syncTime: false,
            },
            enable: true,
            readonly: true
        },
        {
            name: 'MPV',
            system: 'windows',
            icon: 'data:image/png;base64,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',
            iconSize: 52,
            playEvent: MPV_BRIDGE_PLAY_EVENT,
            presetEvent: {
                playAuto: false,
                pauseAuto: true,
                closeAuto: false,
                syncTime: false,
            },
            enable: true,
            readonly: true
        },
        {
            name: 'MPVNET',
            system: 'windows',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsEAAA7BAbiRa+0AAA1qSURBVHhezVt7jBXVGf/OsA8W9sXyWgoUZHkIgihSkEetQbD2ARYTtS2UAlqpVZeSSGpbEmuaJlr7h+xCEFMItoSa2tBYG2zloRCjZEEUioCyvF8Lgiyw7AN25/T3O3OHHWbv3T1z7130l5y9d86dOed83/f7HmdmVkl7Y7nOlEY9UJSUSBOaI0PFlWIc54uWruYcJefw/SJ+q8Jv+yRTDuDcSumuDshD6oo5p53QPgpY4vaDEPdBqMkQaKw4qq9kod9Bc9F07JONYD8bV+OfQ7FdfQx9FWgbRau35HF1GL1pRfoUoLWCtafj20wIOEVyVK4R5CpaI39HiwKuLAMtE41KqdWX8bke/avlpPqnPKd89aWE1BXwoO4gk/QMUaoUVr7DjFiP1mR+TR86oGV7X6VB78DSy+Ewq6EIqjdppKaAcn23ZOrnpaMaa6xMwW8EOqKRHQ16Oxj2jDzpbDT9SSA5Bbzg5kmevCgZap6xTJ3XfcORg0amNek/S71aKAtUtemPgOgKKHPHgOor4OPD5TKO0+KJKYDxoTNand4LNjwiTzkfmH5L8HJ7LHHnwg+3SCaEv4TjL1t4gmvgWjLVUKztXRhonum3hL0CyvQzsPoKkCb7S6N8a+CaXJUlueplGGqR19k27Fyg3P2D5KnfmEnSHd3TDcakTmiX9J8QHBeavlbQNgMWu78ywtfiezqFZ10QbOkC18jYlKeehuF+a/paQesMeMmdg4FWmqosVeHpq37MgNpVUPVYheZv/hxcFX+PHqKb4dcNNfpRKXXguvGReIpydxSqsK0ocDJNNZcMfKEhTDEidT+0ryF1dUceL0Rp7MYs72AVtagjPkcdcQpudgwWPILmsragIoLKigJWkaIbUaOMlyecbaYvhPgKYJ7PlW0ocIYY6ke1BAWDNfMh6MgikVFofSF8JxQvHKoJv/vC+6AS2Ph7A66lInYjq28/J3KalOYPURXBORgPGnSldFCjZZ66YPoD4LAtUeYul0L1GPZn0YHFZ0PQSb1EJvYUKYKlKfAVMCEsdCJwUZkQlo3M+PgLkbdOiJylMUjt+KuOD85ZgHZBr0KNMMf0BdByqDJ3Aiz/niltfZ+1ASfC+cNg7elfh8Wh+XocN0YZIw7IihwIfRFuSCW8e8r/IfZpA55Ld6hF6T7f2Wz6YrheAe/oDNmtK6STuj1SrqeQUMBUCP7t3p4uSON0IgNCdET76LzIXyqR9hmXyAZbsGyu1bsky7jCtah2vR736ocQ9SMLn4WFzB4s8t0+HtXDwpP6TSkygUyqAStv7yJSOlSkJ307ipIpU566VRr1w16Hh2YF/B3b2kbsrEh9W9DUwKyBIuO7e/4a9HPS6yoW3gFfchELrmDBqboEldAvV+TxIXBtprkoSqBsTZDxWTA9hmYFVMlUlJEjIm1pIcz0/iKj4ff00YDsBhS+G6g3Y4TI3NvAECiqE3yxDgsJnxsFVHQPjDtnkBdwrWMVZctVt0hXPc3rCCpA6bmRoisWMQZR/l5E+8vUbBzQ2hP7gq5IgR2x0JE4/6e3iozoATfBNVRQsqAShiK6T++HgyjapIxK5noHvgKWub3ReY+19bHwQvjgAxCOPp9ofkZwUj+IfND2fsSL6aBwPn6rjcMcW9Tg2rug1BHdcJDACC1AGR2ZhBIfEctXQJNMAzU6WfsTVvw9RPsCCNCWFRPl/mGIGbNHitwBBjE2sEUFh2ZwnQZRspjmbDTJeTqrHEh+Pw99F7jX2o8wQJ88+H1X+HISiw6C8YBx4UFE9SL4tGFDRDo0YN2sOcZCodYG9GSdwj8OImIWNDfWut7HAifAhzsi9dlWdj4Y/D5EIRNOiYMQRGcjNtwJVjFuRGUDWcg1OQyINmvyZB0LN8h2pIcukUzVy8qHMHgeLDWiMPlCZ9NhFDK7RE7yLk4AjOZTBoj8cDgiPIIm2WCrYMah3mDBEJa8IeXGBWXNUsWQZ5CDC0rMQwubySD0INC/CIGsMaL1CQZg0v44hF+9W2TzEc/iQfSHELPAhm+iqqQ72CiaS8nA4MNhGCs5eA5l7iADGAP4uMoOmGQAihAKkgpobY6x5SjY8D9sfUN7NG6C7kZ6Y/3QGwq3YQPdgAWSsnUDLkBLCUXns7q2wUFxdh/QM9VqjmCKJBuqakT+9onIhkMtrU3hfwIlTEKxRbTGBjKyG5jZxZbNlEHJUAd/elpdANBy+Vh0GuS/hmwEU5bKHxwXeXWnSCW2vkFQURNQb8wMsCFepmAfd41UgrUCEAHJgEJbBhRA+Fwogfv7dMJnwzlsWF7fi20vdnsUNIheoDeVQGWQ7mGX4GEmxuliqwCe46pCB1+K0mrSFMBdZSbadqTKV5Ep9nx+vbuRKXSH72MPQISZYGSyEZ7guEoX0QUw7FcHXAzZcOayyNpPRQ7FedjFvUSXjulhIl3gnG0W4OLaW1u0OG92sDjixmkg9v9hnELgvNjguU4QPAz3JQRl1uoLusAFWwXwFhdLz/ZQAqlLv89DFCfFf4yCqG8+5gpNtvO0yD8QJxgHgsLyKxlhdqY2C+Q5jq6mC5y2veDCFa/RF9OJ+lgVOg6bmjnYIN1W7B0HcQLF0xoUT2/u9xTFW2RBUFH1SJNnuNuzWZ93/RkqYI8VAzgoJqjCBOHJkwWtyP3BQNCdEX7yTUhl8P8gaqDw/x5A5YiCifEgB1ko3vw0SjUUc54PcWwV4Mo+B3XxQessAIodhCVsxm8NPt0LEch+MFjk4WFemguC8W0HssEq1AYVJz2686ZKIrB65AOVqxjXaoGcQMkB6uGAefRlqbX9UAD9zDrYhEC681LW+twBDkdED+MoSmNafB0sfxkCMSvYzLePzzEoWFvgWJS5kQropSrlqj5lXjlpC1AA09OnmIjb4aig5Qd39aI7a/2wRRnZ16EIWoPS+BjmSET3MHjOeVy7lynTZl2c94qugiL2O7H38Cq852gWgBDvo0CJeuOCoEBTEeGLQ3SnYraB5qQ7ac+dHUtkW/B5QcU5kUu2AZCy8vW7+U6Dr9/1VoGQgBCfnPdYwNo7CsIpjWBg4/2B/4DuDIgMgvHOSwQqqxom3FyFA1sZeJ6WDf5XRsM35LKus37SgqD5L2xemHfb8s1EwpyHtd78TOQ10P0kChv6eTLZhaxaD+Gr+eDD5nrKWKPrpUm9wUPvkvnOcWhko3n9zAYY5DAstwkTd6Y/JQDdJLx15vHW2M5v5xkvekehuw96IJ8270XA3MLnhbZjeJulTfJLdZSHzTrTstKMagtM+O9j3iPsREqg9enbjOQUfO9Zj+7rsffnfT9aLwrdg6DSSP01B5H6eJ8g2jgrY5+By/i4qKv+WDqpW6yfD2BiPp5agDzOlx7i3SVmscPylpbmdpfgri8VcCxiGTZL+3j/oBUWXgcyvE7vkbNqpP+GaTMD2OHIC9aDERDkAtLPy/BllqCkZBhcLBlAn6fgqQpPyzNrrEK6jCQ84WW6PwZfr21WAJGpXpNLepd5lGwLLKgKtcFibFDoj3mYJLxX4HGq5TOH5M0Y5vul+0Q+QiqOJDxluqh3S5Za43V4aOk5S9y7JFttNvfOQwGsVYD+GVDGfb1R0/fyLM/NSZSwkghZGIsK/BC5fu0RKIGuFEV4Kp/3Chv0JHnCecf0xdBSAUS5u0IK1FxslKMFF0oLoW8qQMHTF1UftrNMk7yZGfXmBa+j4GTPiVqRtxFMK5A1zHookC04L58XVOu/Sqkzy/QFEF+85bpAGjVfkhqU1EtSDIa4Zjh2eXd2w24vz3sQan7CgvhkKEwuTmFcBY2ZgU9/j8K1dsDqFcgeDWRkFKv7YOBr0Acx6Gj5hUIJdz04b3wsdb+BCd/HKRlJvSZHzcek7AL/GwI2DIAiirEgPlRl6mQwIwxLcC7vNfBVOb4ix3hyyn85k4Ez8UoTwyhMN0mDTESts9X0hdD6sGXuzyRXvWLSYpR4EAavZeNsoG8uAiWbv5+gxRkvLkIBLgVmP2keheph8Fpav0b/HNRfbvrioG29lrmLJF/93rhCKkrwERP62mcQXE3bK2obFL4z2kV5Tp5SvzN9CWA3XZn7IoLi02l/X7g94At/Sb8kTzoLTF8rsCNZqbMQOXSRqaOTCUQ3ClybyfewvIXwRDTClbuPIp8uRajOivQqXXuD7kTBXX1Vrsh8CL/M9FsguseVu+Og6ZXYM9z8FfuXmc+kXj2CXd57pt8Sdi4QBP8np1qNl1q98hrlvixwbtb3dXoVjDEuqvBEajF3iXsPcvTzkoMig9sL211kqmB6o/Lr9A4w8Ncob982/Ukg9aTzLWyjf6Rn4FspNhqjTB82LGnPFiyGGISJBmzblZTJDrVaXml+7zcZpK4AH89qR4r1AxhxJqwyGTGis4kPXB7ZES/vtwaujFYmxemotboWnxtQNa3G37XyukqLitOngCCW6f6i9Hcg9GS0MSjy+1wTxK8KqRA/gLKfK+EnG3/jvepGfQL9FejbiLZOHnMOoTetaB8FBLHYzUawGgihSuAaJaDyzXCPYgiUDwV0NQLzCTWzN59T8t/nM+QAzqtEqq3krWtzRrtA5P/q10sKtGxUxgAAAABJRU5ErkJggg==',
            iconSize: 50,
            playEvent: "let args = [\n    `\"${media.video}\"`,\n    media.audio ? `--audio-file=\"${media.audio}\"` : '',\n    media.subtitle ? `--sub-file=\"${media.subtitle}\"` : '',\n    media.origin ? `--http-header-fields=\"origin: ${media.origin}\"` : '',\n    media.referer ? `--http-header-fields=\"referer: ${media.referer}\"` : '',\n    media.cookie ? `--http-header-fields=\"cookie: ${media.cookie}\"` : '',\n    config.networkProxy ? `--http-proxy=\"${config.networkProxy}\"` : '',\n    media.ytdlp.networkProxy ? `--ytdl-raw-options=\"proxy=[${media.ytdlp.networkProxy}]\"` : '',\n    media.ytdlp.quality ? `--ytdl-format=\"bestvideo[height<=?${media.ytdlp.quality}]+bestaudio/best\"` : '',\n    media.bilibili.cid ? `--script-opts=\"cid=${media.bilibili.cid}\"` : '',\n    media.title ? `--force-media-title=\"${media.title}\"` : '',\n    media.time ? `--start=\"${media.time}\"` : '',\n]\nargs = args.filter(item => item !== '');\n\nconsole.log(args);\n\nwindow.open(`ush://${player.name}?${compress(args.join(' '))}`, '_self');",
            presetEvent: {
                playAuto: false,
                pauseAuto: true,
                closeAuto: false,
                syncTime: false,
            },
            enable: true,
            readonly: true
        }
    ]
}

// 内置 MPV 播放器改由 MPVBridge 自有协议接收。这里迁移默认事件，
// 后续配置升级也会覆盖油猴中保存的旧 ush:// MPV 事件。
migrateMpvBridgePlayer(defaultConfig);

if (DEBUG === true) {
    defaultConfig.global.parser.ytdlp.regex.push(SETTING_URL);
}

const translations = {
    en: {
        loadSuccessfully: 'Load successfully',
        loadTimeout: 'Load timeout ......',
        saveSuccessfully: 'Save successfully',
        loadFail: 'Load fail',
        requireLoginOrVip: 'Require login or vip',
        playlistItemsSkipped: 'playlist item(s) could not be resolved and were skipped',
        liveNotAvailable: 'The live room is offline or has no playable stream',
        noMatchingParserFound: 'No matching parser found',
        onlyNewTabsCanCloseAutomatically: 'Only new tabs can close automatically'
    },
    zh: {
        loadSuccessfully: '加载成功',
        loadTimeout: '加载超时 ......',
        saveSuccessfully: '保存成功',
        loadFail: '加载失败',
        requireLoginOrVip: '需要登录或会员',
        playlistItemsSkipped: '个播放项解析失败，已跳过',
        liveNotAvailable: '直播间未开播或没有可用直播流',
        noMatchingParserFound: '没有匹配的解析器',
        onlyNewTabsCanCloseAutomatically: '只有新标签页才能自动关闭'
    }
};

const REFRESH_INTERVAL = 500;
const MAX_TRY_COUNT = 5;
const SITE_REQUEST_TIMEOUT = 8000;

var currentTryCount;
var currentConfig;
var currentUrl;
var currentParser;
var currentMedia;
var currentPlayer;
var translation;
var iframe;
var bilibiliWbiKeyCache;

function normalizePlaybackTime(value) {
    const seconds = Number(value);
    if (!Number.isFinite(seconds) || seconds < 0) {
        return undefined;
    }
    return Math.floor(seconds * 1000) / 1000;
}

function parsePlaybackTimeText(value) {
    if (value === undefined || value === null) {
        return undefined;
    }
    const text = String(value).trim().toLowerCase();
    if (/^\d+(?:\.\d+)?$/.test(text)) {
        return normalizePlaybackTime(text);
    }
    if (/^\d+(?::\d+){1,2}(?:\.\d+)?$/.test(text)) {
        const parts = text.split(':').map(Number);
        return normalizePlaybackTime(parts.reduce((total, part) => total * 60 + part, 0));
    }
    const match = text.match(/^(?:(\d+(?:\.\d+)?)h)?(?:(\d+(?:\.\d+)?)m)?(?:(\d+(?:\.\d+)?)s)?$/);
    if (!match || !match.slice(1).some(Boolean)) {
        return undefined;
    }
    return normalizePlaybackTime(
        Number(match[1] || 0) * 3600 + Number(match[2] || 0) * 60 + Number(match[3] || 0)
    );
}

function getPlaybackTimeFromUrl(url = location.href) {
    try {
        const parsedUrl = new URL(url, location.href);
        const searchKeys = ['t', 'start', 'time_continue'];
        for (const key of searchKeys) {
            const time = parsePlaybackTimeText(parsedUrl.searchParams.get(key));
            if (time !== undefined) {
                return time;
            }
        }
        const hash = parsedUrl.hash.replace(/^#!/, '').replace(/^#/, '').replace(/^\?/, '');
        const hashParams = new URLSearchParams(hash);
        for (const key of searchKeys) {
            const time = parsePlaybackTimeText(hashParams.get(key));
            if (time !== undefined) {
                return time;
            }
        }
        return parsePlaybackTimeText(hash.replace(/^t=/, ''));
    } catch (error) {
        return undefined;
    }
}

function getBestVideoPlaybackState(root = document, preferredSelectors = []) {
    const videos = [...root.querySelectorAll('video')];
    const rankedVideos = videos.map((video, index) => {
        const isMainVideo = video.classList?.contains('html5-main-video') ||
            video.matches?.('#movie_player video, ytd-player video');
        const preferredIndex = preferredSelectors.findIndex(selector => video.matches?.(selector));
        const isPreferredVideo = preferredIndex > -1;
        const isVisible = Boolean(video.offsetWidth || video.offsetHeight || video.getClientRects?.().length);
        const score = (isPreferredVideo ? 200 - preferredIndex : 0) + (isMainVideo ? 100 : 0) +
            (!video.paused ? 30 : 0) +
            (isVisible ? 20 : 0) + (video.readyState > 0 ? 10 : 0) - index;
        return {
            video,
            score
        };
    }).sort((a, b) => b.score - a.score);
    const selected = rankedVideos[0]?.video;
    if (!selected) {
        return undefined;
    }
    return {
        video: selected,
        time: normalizePlaybackTime(selected.currentTime),
        initialized: selected.readyState > 0 || Boolean(selected.currentSrc || selected.src),
        live: selected.duration === Infinity
    };
}

class BaseParser {
    constructor() {
        currentMedia = {
            video: undefined,
            playlist: [],
            playlistM3u: undefined,
            playlistEntries: [],
            playlistStart: 0,
            videos: [],
            videoTracks: [],
            audio: undefined,
            audios: [],
            audioTracks: [],
            subtitle: undefined,
            subtitles: [],
            title: undefined,
            origin: undefined,
            referer: undefined,
            time: undefined,
            bilibili: {
                cid: undefined
            },
            ytdlp: {
                authSource: 'anonymous',
                quality: undefined,
                format: undefined,
                rawOptions: undefined,
                cookieJar: undefined,
                allFormats: undefined,
                forceAllFormats: undefined,
                trackLabelSite: undefined,
                preferFirstVideo: false,
                preferFirstAudio: false,
                subtitleLanguages: undefined,
                subtitlesEnabled: undefined,
                networkProxy: undefined
            }
        }
    }
    async execute() {}
    async parseVideo() {
        currentMedia.video = location.href;
    }
    async parseAudio() {}
    async parseSubtitle() {}
    async parseTitle() {
        currentMedia.title = document.title;
    }
    async parseOrigin() {
        currentMedia.origin = location.origin || location.href;
    }
    async parseReferer() {
        let index = currentUrl.indexOf('?');
        currentMedia.referer = index > 0 ? currentUrl.substring(0, index) : currentUrl;
    }
    async parseTime() {
        try {
            const playbackState = getBestVideoPlaybackState(document);
            if (playbackState && !playbackState.live) {
                currentMedia.time = playbackState.time;
            }
        } catch (error) {
            console.error("获取开始时间失败", error);
        }
    }
    async check(video) {
        if (!video) {
            video = currentMedia.video;
        }
        if (!video || !video.startsWith('http') || video.startsWith('https://www.mp4')) {
            return false;
        }

        if (video.indexOf('.m3u8') > -1 || video.indexOf('.m3u') > -1) {
            try {
                const response = await (await fetch(video, {
                    method: 'GET',
                    credentials: 'include'
                })).body();
                return response && response.indexOf('png') === -1;
            } catch (error) {}
        }

        return new RegExp(VIDEO_URL_REGEX_EXACT).test(video);
    }
    async pause() {
        for (let index = 0; index < MAX_TRY_COUNT; index++) {
            try {
                for (const video of document.getElementsByTagName('video')) {
                    video.pause();
                }
            } catch (error) {
                console.error('暂停失败', error);
            } finally {
                await sleep(REFRESH_INTERVAL * 3);
            }
        }
    }
    async close() {
        try {
            await sleep(REFRESH_INTERVAL * 2);
            if (window.top.history.length === 1) {
                window.top.location.href = "about:blank";
                window.top.close();
            } else {
                showToast(translation.onlyNewTabsCanCloseAutomatically);
            }
        } catch (error) {
            console.error('关闭失败', error);
        }
    }
    async play(player) {
        try {
            // 别名，方便播放事件使用
            currentPlayer = player;
            let media = currentMedia;
            let parser = currentParser;
            let config = currentConfig.global;
            // Bilibili 普通视频与直播已在 execute() 内完成“网页会话 → 自动
            // Cookie → 已保存 Cookie → 匿名”的完整回退。外层再重跑五次会把
            // 一次网络故障放大成最多二十轮认证/API 请求，也是此前偶发长时间
            // 超时的主要原因。为这类解析器只保留一轮完整回退。
            const maximumAttempts = parser.handlesAuthenticationFallback ? 1 : MAX_TRY_COUNT;
            showLoading(Number(parser.loadingTimeout) > 0 ? Number(parser.loadingTimeout) : 6000);

            currentTryCount = 0;
            let latestError = undefined;
            do {
                currentTryCount++;
                try {
                    // 低端影视
                    if (currentUrl.startsWith("https://ddys")) {
                        document.getElementsByClassName("vjs-big-play-button")[0].click();
                        await this.parseReferer();
                    }

                    await parser.execute();
                    if (await parser.check()) {
                        latestError = undefined;
                        break;
                    }
                    await sleep(REFRESH_INTERVAL * 2);
                } catch (error) {
                    latestError = error;
                    console.error(`第${currentTryCount}次尝试解析失败：`, error);
                }
            }
            while (currentTryCount < maximumAttempts);
            if (latestError) {
                showToast(translation.loadFail + ': ' + latestError.message);
                return;
            }
            if (!await parser.check()) {
                showToast(translation.loadFail);
                return;
            }
            media = currentMedia;

            if (!player.presetEvent.syncTime) {
                media.time = undefined;
            }

            if (player.playEvent) {
                try {
                    eval(policy.createScript(player.playEvent));
                } catch (error) {
                    if (error.toString().includes('unsafe-eval')) {
                        console.log('unsafe-eval: try to execute default play event');

                        if ('MPV' === player.name) {
                            launchMpvBridge(media, config, player.name);

                        } else if ('MPVNET' === player.name) {
                            let args = [
                                `"${media.video}"`,
                                media.audio ? `--audio-file="${media.audio}"` : '',
                                media.subtitle ? `--sub-file="${media.subtitle}"` : '',
                                media.origin ? `--http-header-fields="origin: ${media.origin}"` : '',
                                media.referer ? `--http-header-fields="referer: ${media.referer}"` : '',
                                media.cookie ? `--http-header-fields="cookie: ${media.cookie}"` : '',
                                config.networkProxy ? `--http-proxy="${config.networkProxy}"` : '',
                                media.ytdlp.networkProxy ? `--ytdl-raw-options="proxy=[${media.ytdlp.networkProxy}]"` : '',
                                media.ytdlp.quality ? `--ytdl-format="bestvideo[height<=?${media.ytdlp.quality}]+bestaudio/best"` : '',
                                media.bilibili.cid ? `--script-opts="cid=${media.bilibili.cid}"` : '',
                                media.title ? `--force-media-title="${media.title}"` : '',
                                media.time ? `--start="${media.time}"` : '',
                            ]
                            args = args.filter(item => item !== '');
                            console.log(args);
                            window.open(`ush://${player.name}?${compress(args.join(' '))}`, '_self');

                        } else if ('PotPlayer' === player.name) {
                            let args = [
                                `"${media.video}"`,
                                media.subtitle ? `/sub="${media.subtitle}"` : '',
                                media.origin ? `/headers="origin: ${media.origin}"` : '',
                                media.referer ? `/referer="${media.referer}"` : '',
                                config.networkProxy ? `/user_agent="${config.networkProxy}"` : '',
                                media.title ? `/title="${media.title}"` : '',
                                media.time ? `/seek="${media.time}"` : '',
                            ]
                            args = args.filter(item => item !== '');
                            console.log(args);
                            window.open(`ush://${player.name}?${compress(args.join(' '))}`, '_self');

                        } else if ('IINA' === player.name) {
                            const delimiter = '&';
                            let args = [
                                `url=${encodeURIComponent(media.video)}`,
                                media.origin ? `mpv_http-header-fields=${encodeURIComponent('origin: ' + media.origin)}` : '',
                                media.referer ? `mpv_http-header-fields=${encodeURIComponent('referer: ' + media.referer)}` : '',
                            ]
                            args = args.filter(item => item !== '');
                            console.log(args);
                            window.open(`iina://weblink?${args.join(delimiter)}`, '_self');

                        } else {
                            throw new Error('unsafe-eval and did not find default player: ' + player.name);
                        }
                    } else {
                        throw error;
                    }
                }
            }

            if (player.presetEvent.closeAuto) {
                parser.close();
            }
            if (player.presetEvent.pauseAuto) {
                parser.pause();
            }
        } catch (error) {
            showToast(translation.loadFail + ': ' + error.message);
        } finally {
            hideLoading();
        }
    }
}

function getYoutubeCodecFilter(codec) {
    const codecFilters = {
        av1: '[vcodec^=av01]',
        vp9: "[vcodec~='^(?:vp9|vp09)']",
        hevc: "[vcodec~='^(?:hev1|hvc1|hevc)']",
        avc: '[vcodec^=avc1]'
    };
    return codecFilters[codec] || '';
}

const YOUTUBE_QUALITY_PRIORITY = [
    '4320hdr', '4320', '2160hdr', '2160', '1440hdr', '1440',
    '1080hdr', '1080', '720hdr', '720', '480', '360', '240', '144'
];
const YOUTUBE_AUDIO_PRIORITY = [
    'multichannel', 'originalOpus', 'originalAac', 'drcOpus', 'drcAac', 'other'
];

function normalizePriority(value, allowedValues, defaultValues) {
    const allowed = new Set(allowedValues.map(String));
    const incoming = Array.isArray(value) ? value : String(value || '').split(',');
    return [...new Set([
        ...incoming.map(item => String(item).trim()).filter(item => allowed.has(item)),
        ...defaultValues.map(String).filter(item => allowed.has(item))
    ])];
}

function getYoutubeQualityPriority(parserConfig) {
    return normalizePriority(parserConfig?.qualityPriority, YOUTUBE_QUALITY_PRIORITY,
        YOUTUBE_QUALITY_PRIORITY);
}

function getYoutubeAudioPriority(parserConfig) {
    return normalizePriority(parserConfig?.audioPriority, YOUTUBE_AUDIO_PRIORITY,
        YOUTUBE_AUDIO_PRIORITY);
}

function getYoutubeQualityTierFilters(tier) {
    const match = String(tier || '').match(/^(\d+)(hdr)?$/);
    if (!match) {
        return undefined;
    }
    return {
        height: Number(match[1]),
        dynamicRange: match[2] ? "[dynamic_range~='^(?:HDR|HLG)']" :
            "[dynamic_range!~=?'^(?:HDR|HLG)']"
    };
}

function buildYoutubeQualityTierSelector(parserConfig, tier) {
    const filters = getYoutubeQualityTierFilters(tier);
    if (!filters) {
        return undefined;
    }
    const codecFilter = getYoutubeCodecFilter(parserConfig.preferredCodec);
    const tierFilter = `[height=${filters.height}]${filters.dynamicRange}`;
    const preferred = `bv${codecFilter}${tierFilter}`;
    const fallback = `bv${tierFilter}`;
    return codecFilter ? `(${preferred}/${fallback})` : fallback;
}

function getYoutubeAudioCategorySelector(category, selector = 'ba') {
    const filters = {
        multichannel: '[audio_channels>=3]',
        originalOpus: '[audio_channels<=?2][format_id!$=-drc][acodec^=opus]',
        originalAac: "[audio_channels<=?2][format_id!$=-drc][acodec~='^(?:mp4a|aac)']",
        drcOpus: '[audio_channels<=?2][format_id$=-drc][acodec^=opus]',
        drcAac: "[audio_channels<=?2][format_id$=-drc][acodec~='^(?:mp4a|aac)']",
        other: "[audio_channels<=?2][acodec!~='^(?:opus|mp4a|aac)']"
    };
    return filters[category] ? `${selector}[vcodec=none][acodec!=none]${filters[category]}` : undefined;
}

function getYoutubeAudioSelector(audio, parserConfig) {
    const explicitSelectors = {
        original: 'ba[format_id!$=-drc]',
        drc: 'ba[format_id$=-drc]',
        opus: 'ba[acodec^=opus][format_id!$=-drc]',
        aac: "ba[acodec~='^(?:mp4a|aac)'][format_id!$=-drc]"
    };
    const priority = getYoutubeAudioPriority(parserConfig);
    const requestedCategory = explicitSelectors[audio] ? undefined :
        (YOUTUBE_AUDIO_PRIORITY.includes(audio) ? audio : undefined);
    const categoryOrder = requestedCategory ?
        [requestedCategory, ...priority.filter(item => item !== requestedCategory)] : priority;
    const selectors = explicitSelectors[audio] ? [explicitSelectors[audio]] :
        categoryOrder.map(item => getYoutubeAudioCategorySelector(item)).filter(Boolean);
    selectors.push('ba');
    return `(${[...new Set(selectors)].join('/')})`;
}

function buildYoutubeVideoSelector(parserConfig) {
    const quality = parserConfig.preferredQuality;
    if (quality === 'auto' || quality === 'mpv') {
        const selectors = getYoutubeQualityPriority(parserConfig)
            .map(tier => buildYoutubeQualityTierSelector(parserConfig, tier)).filter(Boolean);
        selectors.push('bv');
        return `(${[...new Set(selectors)].join('/')})`;
    }
    if (quality === 'hdr') {
        const selectors = getYoutubeQualityPriority(parserConfig).filter(tier => tier.endsWith('hdr'))
            .map(tier => buildYoutubeQualityTierSelector(parserConfig, tier)).filter(Boolean);
        selectors.push('bv');
        return `(${[...new Set(selectors)].join('/')})`;
    }
    const heightFilter = /^\d+$/.test(quality) ? `[height<=?${quality}]` : '';
    const codecFilter = getYoutubeCodecFilter(parserConfig.preferredCodec);
    const preferredVideo = `bv${codecFilter}${heightFilter}`;
    const fallbackVideo = `bv${heightFilter}`;
    return codecFilter ? `(${preferredVideo}/${fallbackVideo})` : fallbackVideo;
}

function buildYoutubeFormat(parserConfig) {
    const quality = parserConfig.preferredQuality;
    const heightFilter = /^\d+$/.test(quality) ? `[height<=?${quality}]` : '';
    const video = buildYoutubeVideoSelector(parserConfig);
    const audio = getYoutubeAudioSelector(parserConfig.preferredAudio, parserConfig);
    const combined = `b${heightFilter}`;
    return `${video}+${audio}/${combined}/ba`;
}

function buildYoutubeMpvFormat(parserConfig) {
    // ytdl_hook 会反转 requested_downloads。这里按用户优先级的反序交给 yt-dlp，
    // MPV 中最终顺序就与拖拽列表一致，并把第一条设为默认轨。
    const videos = parserConfig.preferredQuality === 'mpv' ?
        getYoutubeQualityPriority(parserConfig).slice().reverse()
            .map(tier => buildYoutubeQualityTierSelector(parserConfig, tier)).filter(Boolean) :
        [buildYoutubeVideoSelector(parserConfig)];
    const audios = parserConfig.preferredAudio === 'mpv' ?
        getYoutubeAudioPriority(parserConfig).slice().reverse()
            .map(category => getYoutubeAudioCategorySelector(category, 'all')).filter(Boolean) :
        [getYoutubeAudioSelector(parserConfig.preferredAudio, parserConfig)];
    return [...videos, ...audios].join(',');
}

function getGenericYtdlpAudioSelector(audio) {
    const audioSelectors = {
        multichannel: '(ba[audio_channels>=3]/ba)',
        stereo: '(ba[audio_channels<=?2]/ba)'
    };
    return audioSelectors[audio] || 'ba';
}

const BILIBILI_AUTO_QUALITY_PRIORITY = [126, 125, 127, 120, 116, 112, 80, 74, 64, 32, 16];
const BILIBILI_NORMAL_QUALITY_PRIORITY = [127, 126, 125, 120, 116, 112, 80, 74, 64, 32, 16];
const BILIBILI_AUDIO_PRIORITY = ['dolby', 'hires', '30280', '30232', '30216', 'other'];
const BILIBILI_QUALITY_NAMES = {
    127: '8K 超高清',
    126: '杜比视界',
    125: 'HDR 真彩',
    120: '4K 超清',
    116: '1080P 60帧',
    112: '1080P 高码率',
    80: '1080P 高清',
    74: '720P 60帧',
    64: '720P 高清',
    32: '480P 清晰',
    16: '360P 流畅'
};
const BILIBILI_CODEC_NAMES = {
    13: 'AV1',
    12: 'HEVC',
    7: 'AVC'
};
const BILIBILI_MPV_VIDEO_CODECS = {
    13: 'av1',
    12: 'hevc',
    7: 'h264'
};
const BILIBILI_LIVE_QUALITY_NAMES = {
    30000: '杜比',
    20000: '4K',
    15000: '2K',
    10000: '原画',
    400: '蓝光',
    250: '超清',
    150: '高清',
    80: '流畅'
};

function getMpvAudioCodec(stream) {
    const codec = String(stream?.codecs || stream?.codec || '').toLowerCase();
    if (/^(?:mp4a|aac)/.test(codec)) return 'aac';
    if (/^(?:ec-3|eac3)/.test(codec)) return 'eac3';
    if (codec.startsWith('flac')) return 'flac';
    if (codec.startsWith('opus')) return 'opus';
    return codec.split('.')[0] || undefined;
}

function getBilibiliMpvVideoCodec(stream) {
    const mapped = BILIBILI_MPV_VIDEO_CODECS[Number(stream?.codecid)];
    if (mapped) return mapped;
    const codec = String(stream?.codecs || stream?.codec || '').toLowerCase();
    // DASH 的 Dolby Vision 样本项通常是 dvh1/dvhe，解码层仍必须交给 HEVC。
    if (/^(?:dvh1|dvhe|hev1|hvc1|hevc|h265)/.test(codec)) return 'hevc';
    if (/^(?:av01|av1)/.test(codec)) return 'av1';
    if (/^(?:avc1|avc|h264)/.test(codec)) return 'h264';
    return codec.split('.')[0] || undefined;
}

function getBilibiliYtdlpCodecFilters(codec) {
    const filters = {
        '13': '[vcodec^=av01]',
        // Bilibili 的杜比视界使用 dvh1/dvhe 标识，本质仍由 HEVC 解码器承载。
        '12': "[vcodec~='^(?:dvh1|dvhe|hev1|hvc1|hevc)']",
        '7': '[vcodec^=avc1]'
    };
    const automaticOrder = ['13', '12', '7'];
    const order = codec && codec !== 'auto' ?
        [...new Set([String(codec), ...automaticOrder])] : automaticOrder;
    return [...order.map(item => filters[item]).filter(Boolean), ''];
}

function buildBilibiliYtdlpVideoSelector(parserConfig, qualityIds, allowGlobalFallback = true) {
    const selectors = [];
    for (const qualityId of qualityIds) {
        for (const codecFilter of getBilibiliYtdlpCodecFilters(parserConfig.preferredCodec)) {
            selectors.push(`bv[quality=${qualityId}]${codecFilter}`);
        }
    }
    if (allowGlobalFallback) {
        selectors.push('bv');
    }
    return `(${[...new Set(selectors)].join('/')})`;
}

function getBilibiliQualityPriority(parserConfig) {
    return normalizePriority(parserConfig?.qualityPriority,
        BILIBILI_AUTO_QUALITY_PRIORITY, BILIBILI_AUTO_QUALITY_PRIORITY).map(Number);
}

function getBilibiliAudioPriority(parserConfig) {
    return normalizePriority(parserConfig?.audioPriority,
        BILIBILI_AUDIO_PRIORITY, BILIBILI_AUDIO_PRIORITY);
}

function getBilibiliYtdlpQualityIds(quality, parserConfig) {
    if (quality === 'auto' || quality === 'mpv') {
        return getBilibiliQualityPriority(parserConfig);
    }
    const preferredQuality = Number(quality);
    const qualityIds = BILIBILI_NORMAL_QUALITY_PRIORITY.filter(item => item <= preferredQuality);
    if (Number.isFinite(preferredQuality) && !qualityIds.includes(preferredQuality)) {
        qualityIds.unshift(preferredQuality);
    }
    return qualityIds.length ? qualityIds : BILIBILI_AUTO_QUALITY_PRIORITY;
}

function getBilibiliAudioCategorySelector(category, selector = 'ba') {
    const filters = {
        dolby: "[acodec~='^(?:ec-3|eac3)']",
        hires: '[acodec^=flac]',
        '30280': '[format_id=30280]',
        '30232': '[format_id=30232]',
        '30216': '[format_id=30216]',
        other: "[acodec!~='^(?:ec-3|eac3|flac)'][format_id!=30280][format_id!=30232][format_id!=30216]"
    };
    return filters[category] ? `${selector}[vcodec=none][acodec!=none]${filters[category]}` : undefined;
}

function getBilibiliYtdlpAudioSelector(audio, parserConfig) {
    const priority = getBilibiliAudioPriority(parserConfig);
    const requested = BILIBILI_AUDIO_PRIORITY.includes(audio) ? audio : undefined;
    const order = requested ? [requested, ...priority.filter(item => item !== requested)] : priority;
    const selectors = order.map(item => getBilibiliAudioCategorySelector(item)).filter(Boolean);
    selectors.push('ba');
    return `(${[...new Set(selectors)].join('/')})`;
}

function buildBilibiliYtdlpFormat(parserConfig) {
    const qualityIds = getBilibiliYtdlpQualityIds(parserConfig.preferredQuality, parserConfig);
    if (parserConfig.preferredQuality === 'mpv' || parserConfig.preferredAudio === 'mpv') {
        const videos = parserConfig.preferredQuality === 'mpv' ?
            qualityIds.slice().reverse().map(qualityId =>
                buildBilibiliYtdlpVideoSelector(parserConfig, [qualityId], false)) :
            [buildBilibiliYtdlpVideoSelector(parserConfig, qualityIds)];
        const audios = parserConfig.preferredAudio === 'mpv' ?
            getBilibiliAudioPriority(parserConfig).slice().reverse()
                .map(category => getBilibiliAudioCategorySelector(category, 'all')).filter(Boolean) :
            [getBilibiliYtdlpAudioSelector(parserConfig.preferredAudio, parserConfig)];
        return [...videos, ...audios].join(',');
    }
    const video = buildBilibiliYtdlpVideoSelector(parserConfig, qualityIds);
    const audio = getBilibiliYtdlpAudioSelector(parserConfig.preferredAudio, parserConfig);
    return `${video}+${audio}/b/ba`;
}

function buildGenericYtdlpFormat(parserConfig) {
    const quality = parserConfig.preferredQuality || 'auto';
    const audioPreference = parserConfig.preferredAudio || 'auto';
    const audio = getGenericYtdlpAudioSelector(audioPreference);
    const heightFilter = /^\d+$/.test(quality) ? `[height<=?${quality}]` : '';

    // 默认模式不传 -f，让 yt-dlp 和站点提取器自行决定格式与排序。
    if ((quality === 'auto' || quality === 'mpv') && audioPreference === 'auto') {
        return undefined;
    }

    // 只展开音频时保留一个视频入口；没有独立音轨的站点仍可回退到合并流。
    if (audioPreference === 'mpv') {
        const primaryVideo = quality === 'combined' ? 'b' :
            quality === 'separate' ? 'bv' : `bv*${heightFilter}`;
        return `${primaryVideo},all[vcodec=none][acodec!=none]`;
    }

    if (quality === 'combined') {
        return `b/bv*+${audio}/ba`;
    }
    if (quality === 'separate') {
        return `bv+${audio}/b/ba`;
    }
    return `bv*${heightFilter}+${audio}/b${heightFilter}/ba`;
}

function getYtdlpSubtitleLanguages(preference) {
    const languages = {
        'zh-Hans': 'zh-Hans,zh-CN,zh-SG,zh.*,zh,chi.*,zho.*,cmn.*,zh-Hant,zh-TW,-live_chat',
        'zh-Hant': 'zh-Hant,zh-TW,zh-HK,zh.*,zh,chi.*,zho.*,cmn.*,zh-Hans,zh-CN,-live_chat',
        en: 'en.*,en,eng.*,-live_chat',
        'en-US': 'en.*,en,eng.*,-live_chat',
        mpv: 'all,-live_chat',
        off: 'none'
    };
    if (preference === 'auto') {
        return currentConfig.global.language === 'zh' ?
            'zh-Hans,zh-CN,zh-SG,zh-Hant,zh-TW,zh-HK,zh.*,zh,chi.*,zho.*,cmn.*,en.*,en,eng.*,-live_chat' :
            'en.*,en,eng.*,zh-Hans,zh-Hant,zh.*,zh,chi.*,zho.*,-live_chat';
    }
    return languages[preference] || languages.mpv;
}

function getMpvSubtitleLanguages(preference) {
    const languages = {
        'zh-Hans': 'zh-Hans,zh-CN,zh-SG,zh,chi,zho,cmn,zh-Hant,zh-TW,zh-HK',
        'zh-Hant': 'zh-Hant,zh-TW,zh-HK,zh,chi,zho,cmn,zh-Hans,zh-CN,zh-SG',
        en: 'en,eng',
        'en-US': 'en,eng'
    };
    if (preference === 'auto') {
        return currentConfig.global.language === 'zh' ?
            'zh-Hans,zh-CN,zh-SG,zh-Hant,zh-TW,zh-HK,zh,chi,zho,cmn,en,eng' :
            'en,eng,zh-Hans,zh-Hant,zh-CN,zh-TW,zh,chi,zho';
    }
    return languages[preference];
}

function wrapYtdlpRawValue(value) {
    return `[${String(value).replace(/]/g, '\\]')}]`;
}

const AUTH_STORE_KEY = 'external-player-mpvbridge-auth-v1';
const AUTH_STATUS_KEY = 'external-player-mpvbridge-auth-status-v1';
const AUTH_SITE_INFO = {
    bilibili: {
        label: 'Bilibili',
        url: 'https://www.bilibili.com/',
        domains: ['bilibili.com']
    },
    youtube: {
        label: 'YouTube',
        url: 'https://www.youtube.com/',
        domains: ['youtube.com', 'youtube-nocookie.com']
    }
};
const YOUTUBE_AUTH_COOKIE_NAMES = ['SAPISID', '__Secure-1PAPISID', '__Secure-3PAPISID'];
const YOUTUBE_LOGIN_MARKER_COOKIE = 'LOGIN_INFO';

function detectUserscriptBrowser(additionalUaData = {}) {
    // GM_info.userAgentData 来自油猴扩展上下文，不受 Bilibili/YouTube 对页面 UA 的裁剪影响。
    const managerUaData = typeof GM_info !== 'undefined' ? GM_info.userAgentData || {} : {};
    const brandItems = [
        ...(managerUaData.brands || []),
        ...(managerUaData.fullVersionList || []),
        ...(additionalUaData.brands || []),
        ...(additionalUaData.fullVersionList || []),
        ...(navigator.userAgentData?.brands || [])
    ];
    const brands = brandItems.map(item => String(item.brand || '').toLowerCase()).join(' ');
    const userAgent = String(navigator.userAgent || '');
    if (brands.includes('microsoft edge') || /Edg(?:A|iOS)?\//.test(userAgent)) {
        return { name: 'Microsoft Edge', ytdlp: 'edge' };
    }
    if (navigator.brave?.isBrave) {
        return { name: 'Brave', ytdlp: 'brave' };
    }
    if (brands.includes('opera') || /OPR\//.test(userAgent)) {
        return { name: 'Opera', ytdlp: 'opera' };
    }
    if (/Vivaldi\//.test(userAgent)) {
        return { name: 'Vivaldi', ytdlp: 'vivaldi' };
    }
    if (/Firefox\//.test(userAgent)) {
        return { name: 'Firefox', ytdlp: 'firefox' };
    }
    if (brands.includes('google chrome') || /Chrome\//.test(userAgent)) {
        return { name: 'Google Chrome', ytdlp: 'chrome' };
    }
    return { name: 'Unknown', ytdlp: undefined };
}

async function detectUserscriptBrowserAccurately() {
    let detected = detectUserscriptBrowser();
    if (detected.name === 'Microsoft Edge' ||
        typeof navigator.userAgentData?.getHighEntropyValues !== 'function') {
        return detected;
    }
    try {
        // fullVersionList 通常仍包含 Microsoft Edge，即使网页只看到 Chromium/Chrome UA。
        const highEntropy = await navigator.userAgentData.getHighEntropyValues(['fullVersionList']);
        detected = detectUserscriptBrowser(highEntropy);
    } catch (error) {
        // 站点 Permissions-Policy 拒绝高熵提示时保留 GM_info/普通 UA 的检测结果。
    }
    return detected;
}

function createDefaultAuthMethodStatus() {
    return { state: 'unchecked', checkedAt: 0, detail: '' };
}

function createDefaultAuthStatus() {
    return {
        browser: detectUserscriptBrowser(),
        sites: {
            bilibili: {
                page: createDefaultAuthMethodStatus(),
                automatic: createDefaultAuthMethodStatus(),
                file: createDefaultAuthMethodStatus(),
                lastUsed: 'anonymous'
            },
            youtube: {
                page: { state: 'disabled', checkedAt: 0, detail: 'YouTube page-session authentication is disabled' },
                automatic: createDefaultAuthMethodStatus(),
                file: createDefaultAuthMethodStatus(),
                lastUsed: 'anonymous'
            }
        }
    };
}

function loadAuthStatus() {
    const stored = GM_getValue(AUTH_STATUS_KEY) || {};
    const result = createDefaultAuthStatus();
    for (const site of Object.keys(AUTH_SITE_INFO)) {
        for (const method of ['page', 'automatic', 'file']) {
            result.sites[site][method] = {
                ...result.sites[site][method],
                ...(stored.sites?.[site]?.[method] || {})
            };
        }
        result.sites[site].lastUsed = stored.sites?.[site]?.lastUsed || 'anonymous';
    }
    result.sites.youtube.page = {
        state: 'disabled', checkedAt: 0,
        detail: 'YouTube page-session authentication is disabled'
    };
    if (result.sites.youtube.lastUsed === 'page') {
        result.sites.youtube.lastUsed = 'anonymous';
    }
    result.browser = stored.browser?.name ? stored.browser : detectUserscriptBrowser();
    return result;
}

async function updateDetectedBrowser() {
    const status = loadAuthStatus();
    status.browser = await detectUserscriptBrowserAccurately();
    saveAuthStatus(status);
    return status.browser;
}

function saveAuthStatus(status) {
    GM_setValue(AUTH_STATUS_KEY, status);
    if (settingIframe?.contentWindow) {
        settingIframe.contentWindow.postMessage({
            name: PROJECT_NAME,
            method: 'authSnapshot',
            auth: getAuthSnapshot(status)
        }, '*');
    }
}

function setAuthMethodStatus(site, method, state, detail = '') {
    const status = loadAuthStatus();
    status.sites[site][method] = { state, checkedAt: Date.now(), detail };
    saveAuthStatus(status);
}

function recordRequestAuthenticationResult(site, source, succeeded, detail = '') {
    if (!['page', 'automatic', 'file'].includes(source)) {
        return;
    }
    setAuthMethodStatus(site, source, succeeded ? 'available' : 'unverified', detail);
}

function getRuntimeAuthenticationSourceLabel(source) {
    const labels = currentConfig?.global?.language === 'zh' ? {
        page: '网页请求', automatic: '自动 Cookie', file: '已保存 Cookie', anonymous: '匿名'
    } : {
        page: 'Page request', automatic: 'Automatic Cookie', file: 'Saved Cookie', anonymous: 'Anonymous'
    };
    return labels[source] || labels.anonymous;
}

function showBilibiliAuthenticationResult(source, succeeded, willFallback = false) {
    const label = getRuntimeAuthenticationSourceLabel(source);
    const zh = currentConfig?.global?.language === 'zh';
    if (succeeded) {
        showToast(zh ? `Bilibili｜认证：${label}｜解析成功` :
            `Bilibili | Auth: ${label} | Parsing succeeded`);
    } else if (willFallback) {
        showToast(zh ? `Bilibili｜认证：${label}｜未通过，正在尝试下一认证来源` :
            `Bilibili | Auth: ${label} | Failed; trying the next authentication source`);
    }
}

function setLastAuthSource(site, source) {
    const status = loadAuthStatus();
    status.sites[site].lastUsed = source;
    saveAuthStatus(status);
    if (currentMedia?.ytdlp) {
        currentMedia.ytdlp.authSource = source;
    }
}

function loadAuthStore() {
    const stored = GM_getValue(AUTH_STORE_KEY);
    return stored && typeof stored === 'object' ? stored : { bilibili: undefined, youtube: undefined };
}

function saveAuthStore(store) {
    GM_setValue(AUTH_STORE_KEY, store);
}

function getCookieExpiration(cookie) {
    const value = Number(cookie?.expirationDate ?? cookie?.expires ?? cookie?.expiration ?? 0);
    return Number.isFinite(value) && value > 0 ? value : 0;
}

function isCookieExpired(cookie, nowSeconds = Date.now() / 1000) {
    const expires = getCookieExpiration(cookie);
    return expires > 0 && expires <= nowSeconds;
}

function cookieMatchesSite(cookie, site) {
    const domain = String(cookie?.domain || '').replace(/^#HttpOnly_/, '').replace(/^\./, '').toLowerCase();
    return AUTH_SITE_INFO[site].domains.some(allowed => domain === allowed || domain.endsWith(`.${allowed}`));
}

function serializeCookieHeader(cookies, allowedNames) {
    const pairs = [];
    const seen = new Set();
    const allowed = allowedNames ? new Set(allowedNames) : undefined;
    for (const cookie of cookies || []) {
        if (isCookieExpired(cookie)) {
            continue;
        }
        const name = String(cookie?.name || '').trim();
        const value = String(cookie?.value ?? '').replace(/[;\t\r\n]/g, '');
        if (!/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/.test(name) || (allowed && !allowed.has(name))) {
            continue;
        }
        const pair = `${name}=${value}`;
        if (!seen.has(pair)) {
            seen.add(pair);
            pairs.push(pair);
        }
    }
    return pairs.join('; ');
}

function serializeNetscapeCookieJar(cookies, site) {
    const siteDomain = AUTH_SITE_INFO[site]?.domains?.[0];
    if (!siteDomain) {
        return '';
    }
    const lines = [
        '# Netscape HTTP Cookie File',
        '# Generated temporarily by External Player; MPVBridge deletes it after playback.'
    ];
    const seen = new Set();
    for (const cookie of cookies || []) {
        if (isCookieExpired(cookie)) {
            continue;
        }
        const name = String(cookie?.name || '').trim();
        const value = String(cookie?.value ?? '').replace(/[\t\r\n]/g, '');
        if (!/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/.test(name)) {
            continue;
        }
        let domain = String(cookie?.domain || `.${siteDomain}`)
            .replace(/^#HttpOnly_/, '').replace(/[\t\r\n]/g, '').toLowerCase();
        if (!domain || !cookieMatchesSite({ domain }, site)) {
            domain = `.${siteDomain}`;
        }
        const includeSubdomains = cookie?.hostOnly === true ? 'FALSE' : 'TRUE';
        if (includeSubdomains === 'TRUE' && !domain.startsWith('.')) {
            domain = `.${domain}`;
        }
        if (cookie?.httpOnly) {
            domain = `#HttpOnly_${domain}`;
        }
        const path = String(cookie?.path || '/').replace(/[\t\r\n]/g, '') || '/';
        const secure = cookie?.secure === false ? 'FALSE' : 'TRUE';
        const expires = Math.max(0, Math.floor(getCookieExpiration(cookie)));
        const record = [domain, includeSubdomains, path, secure, expires, name, value].join('\t');
        const key = `${domain}\t${path}\t${name}`;
        if (!seen.has(key)) {
            seen.add(key);
            lines.push(record);
        }
    }
    return lines.length > 2 ? `${lines.join('\n')}\n` : '';
}

function cookieHeaderToNetscapeJar(cookieHeader, site) {
    const siteDomain = AUTH_SITE_INFO[site]?.domains?.[0];
    if (!cookieHeader || !siteDomain) {
        return '';
    }
    const cookies = String(cookieHeader).split(';').map(part => {
        const separator = part.indexOf('=');
        if (separator < 1) {
            return undefined;
        }
        return {
            domain: `.${siteDomain}`,
            hostOnly: false,
            path: '/',
            secure: true,
            expirationDate: 0,
            name: part.slice(0, separator).trim(),
            value: part.slice(separator + 1).trim()
        };
    }).filter(Boolean);
    return serializeNetscapeCookieJar(cookies, site);
}

function getDocumentCookies() {
    try {
        return String(document.cookie || '').split(';').map(part => {
            const separator = part.indexOf('=');
            return separator < 0 ? undefined : {
                name: part.slice(0, separator).trim(),
                value: part.slice(separator + 1).trim()
            };
        }).filter(Boolean);
    } catch (error) {
        return [];
    }
}

function hasAuthenticationCookie(cookieHeader, site) {
    if (site === 'youtube') {
        // YouTube may leave __Secure-3PAPISID behind after rotating the login
        // session. yt-dlp also requires LOGIN_INFO before treating the jar as
        // an authenticated account, so do not accept a stale marker alone.
        const hasLoginMarker = new RegExp(
            `(?:^|;\\s*)${YOUTUBE_LOGIN_MARKER_COOKIE}=`).test(cookieHeader);
        const hasSapisid = YOUTUBE_AUTH_COOKIE_NAMES.some(name =>
            new RegExp(`(?:^|;\\s*)${name}=`).test(cookieHeader));
        return hasLoginMarker && hasSapisid;
    }
    return /(?:^|;\s*)SESSDATA=/.test(cookieHeader);
}

function parseNetscapeCookieFile(text) {
    const normalized = String(text || '').replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
    const lines = normalized.split('\n');
    const firstNonEmpty = lines.find(line => line.trim());
    if (!/^# (?:Netscape )?HTTP Cookie File/i.test(firstNonEmpty || '')) {
        throw new Error('Cookie 文件不是 Netscape 格式');
    }
    const cookies = [];
    for (const sourceLine of lines) {
        const httpOnly = sourceLine.startsWith('#HttpOnly_');
        if (!sourceLine.trim() || (sourceLine.startsWith('#') && !httpOnly)) {
            continue;
        }
        const line = httpOnly ? sourceLine.slice('#HttpOnly_'.length) : sourceLine;
        const fields = line.split('\t');
        if (fields.length < 7) {
            continue;
        }
        const [domain, includeSubdomains, path, secure, expires, name, ...valueParts] = fields;
        if (!domain || !name) {
            continue;
        }
        cookies.push({
            domain: domain.toLowerCase(),
            hostOnly: String(includeSubdomains).toUpperCase() !== 'TRUE',
            path: path || '/',
            secure: String(secure).toUpperCase() === 'TRUE',
            expirationDate: Number(expires) || 0,
            httpOnly,
            name,
            value: valueParts.join('\t')
        });
    }
    if (!cookies.length) {
        throw new Error('Cookie 文件中没有可读取的记录');
    }
    return cookies;
}

function listCookiesWithGm(url) {
    return new Promise(resolve => {
        let settled = false;
        const finish = cookies => {
            if (settled) {
                return;
            }
            settled = true;
            clearTimeout(timeoutId);
            resolve(Array.isArray(cookies) ? cookies : []);
        };
        const timeoutId = setTimeout(() => finish([]), 1500);

        try {
            if (typeof GM_cookie !== 'undefined' && typeof GM_cookie.list === 'function') {
                const result = GM_cookie.list({ url },
                    (cookies, error) => finish(error ? [] : cookies));
                if (result && typeof result.then === 'function') {
                    result.then(finish).catch(() => finish([]));
                }
                return;
            }
            if (typeof GM !== 'undefined' && typeof GM.cookie?.list === 'function') {
                GM.cookie.list({ url })
                    .then(finish).catch(() => finish([]));
                return;
            }
        } catch (error) {
            finish([]);
            return;
        }
        finish([]);
    });
}

async function getSiteCookieHeader(url, allowedNames) {
    const privilegedCookies = await listCookiesWithGm(url);
    const targetHostname = new URL(url).hostname;
    const sameSite = location.hostname === targetHostname ||
        location.hostname.endsWith(`.${targetHostname.replace(/^www\./, '')}`);
    // 支持 HttpOnly Cookie 的脚本管理器可取得完整登录态；同站页面再补充 document.cookie。
    // 不跨站混入当前页面 Cookie，避免把 YouTube Cookie 发给 Bilibili（或反向泄露）。
    const readableCookies = sameSite ? getDocumentCookies() : [];
    return serializeCookieHeader([...privilegedCookies, ...readableCookies], allowedNames);
}

function configureYtdlpAuthentication(authContext) {
    currentMedia.ytdlp.authSource = authContext?.source || 'anonymous';
    if (!authContext?.cookieJar) {
        return false;
    }
    // yt-dlp 不会把 add-headers=Cookie 当成完整 Cookie jar；让 MPVBridge 在
    // 启动期间创建临时 Netscape 文件，才能让提取器正确识别登录态。
    currentMedia.ytdlp.cookieJar = authContext.cookieJar;
    return true;
}

function getBilibiliCookieHeader() {
    return getSiteCookieHeader('https://www.bilibili.com/');
}

function getYoutubeCookieHeader() {
    return getSiteCookieHeader('https://www.youtube.com/');
}

async function validateBilibiliCookieHeader(cookieHeader) {
    if (!hasAuthenticationCookie(cookieHeader, 'bilibili')) {
        return false;
    }
    try {
        const response = await requestJsonWithCookieContext(
            'https://api.bilibili.com/x/web-interface/nav',
            { cookieHeader, credentials: 'omit' }
        );
        return response?.code === 0 && response?.data?.isLogin === true;
    } catch (error) {
        return false;
    }
}

async function validateYoutubeCookieHeader(cookieHeader) {
    if (!hasAuthenticationCookie(cookieHeader, 'youtube')) {
        return false;
    }
    try {
        const response = await GM.xmlHttpRequest({
            method: 'GET',
            url: 'https://www.youtube.com/feed/you',
            anonymous: true,
            cookie: cookieHeader,
            timeout: SITE_REQUEST_TIMEOUT,
            headers: { 'Accept-Language': navigator.language || 'en-US' }
        });
        if (response.status < 200 || response.status >= 400) {
            return false;
        }
        const body = String(response.responseText || '');
        return /["']LOGGED_IN["']\s*:\s*true/i.test(body) ||
            /["']loggedIn["']\s*:\s*true/i.test(body);
    } catch (error) {
        return false;
    }
}

async function validateCookieHeader(cookieHeader, site) {
    return site === 'youtube' ? validateYoutubeCookieHeader(cookieHeader) :
        validateBilibiliCookieHeader(cookieHeader);
}

function getBilibiliPageRequestHeaders() {
    const isBilibiliPage = /(?:^|\.)bilibili\.com$/i.test(location.hostname);
    return { Referer: isBilibiliPage ? location.href : 'https://www.bilibili.com/' };
}

function requestJsonWithBrowserSession(url, options = {}) {
    return new Promise((resolve, reject) => {
        GM.xmlHttpRequest({
            method: 'GET',
            url: String(url),
            responseType: 'json',
            anonymous: false,
            timeout: Number(options.timeout) > 0 ? Number(options.timeout) : SITE_REQUEST_TIMEOUT,
            headers: {
                'Accept-Language': navigator.language || 'zh-CN',
                ...(options.headers || {})
            },
            onload: response => {
                if (response.status < 200 || response.status >= 400) {
                    reject(new Error(`HTTP ${response.status}`));
                    return;
                }
                try {
                    resolve(response.response ?? JSON.parse(response.responseText));
                } catch (error) {
                    reject(error);
                }
            },
            onerror: () => reject(new Error('Browser-session request failed')),
            ontimeout: () => reject(new Error('Browser-session request timed out'))
        });
    });
}

async function checkBilibiliPageAuthentication() {
    if (!/(?:^|\.)bilibili\.com$/i.test(location.hostname)) {
        return undefined;
    }
    try {
        // A sandboxed userscript fetch may omit api.bilibili.com session
        // cookies in Chromium/Edge. GM XHR with anonymous=false keeps the
        // browser session without extracting or persisting Cookie values.
        const response = await requestJsonWithBrowserSession(
            'https://api.bilibili.com/x/web-interface/nav',
            { headers: getBilibiliPageRequestHeaders() });
        return response?.code === 0 && response?.data?.isLogin === true;
    } catch (error) {
        return undefined;
    }
}

async function checkPageAuthentication(site) {
    // 网页会话认证只属于 Bilibili；YouTube 只允许读取 Cookie 后显式传递。
    if (site !== 'bilibili') {
        return undefined;
    }
    const result = await checkBilibiliPageAuthentication();
    // 非当前站点无法验证网页会话，此时保留该站上次结果，不能把“不可检查”误写成失效。
    if (result !== undefined) {
        setAuthMethodStatus(site, 'page', result === true ? 'available' : 'loggedOut');
    }
    return result;
}

function getStoredCookieHeader(site) {
    return serializeCookieHeader(getStoredCookies(site));
}

function getStoredCookies(site) {
    const entry = loadAuthStore()[site];
    return entry?.cookies?.filter(cookie => cookieMatchesSite(cookie, site) && !isCookieExpired(cookie)) || [];
}

async function checkAutomaticAuthentication(site) {
    const cookieHeader = site === 'youtube' ? await getYoutubeCookieHeader() :
        await getBilibiliCookieHeader();
    const hasCandidate = hasAuthenticationCookie(cookieHeader, site);
    const usable = hasCandidate && await validateCookieHeader(cookieHeader, site);
    setAuthMethodStatus(site, 'automatic', usable ? 'available' :
        hasCandidate ? 'unverified' : 'unavailable', usable ? '' :
        hasCandidate ? 'Site validation did not confirm this Cookie' :
            'No authentication Cookie was obtained from the browser');
    return usable ? cookieHeader : '';
}

async function checkStoredAuthentication(site) {
    const cookieHeader = getStoredCookieHeader(site);
    const hasCandidate = hasAuthenticationCookie(cookieHeader, site);
    const usable = hasCandidate && await validateCookieHeader(cookieHeader, site);
    setAuthMethodStatus(site, 'file', usable ? 'available' :
        hasCandidate ? 'unverified' : 'unavailable', usable ? '' :
        hasCandidate ? 'Site validation did not confirm the saved Cookie' :
            'No unexpired saved authentication Cookie');
    return usable ? cookieHeader : '';
}

async function resolveSiteAuthentication(site, options = {}) {
    const skipped = new Set(options.skipSources || []);
    // 默认关闭网页会话。只有 B站“仅当前视频”和 Live 的调用方会显式开启。
    const includePage = site === 'bilibili' && options.includePage === true;
    if (includePage && !skipped.has('page') && await checkPageAuthentication(site) === true) {
        setLastAuthSource(site, 'page');
        return { site, source: 'page', cookieHeader: '', credentials: 'include' };
    }
    if (!skipped.has('automatic')) {
        const automatic = await checkAutomaticAuthentication(site);
        if (automatic) {
            setLastAuthSource(site, 'automatic');
            return {
                site,
                source: 'automatic',
                cookieHeader: automatic,
                cookieJar: cookieHeaderToNetscapeJar(automatic, site),
                credentials: 'omit'
            };
        }
    }
    if (!skipped.has('file')) {
        const stored = await checkStoredAuthentication(site);
        if (stored) {
            setLastAuthSource(site, 'file');
            return {
                site,
                source: 'file',
                cookieHeader: stored,
                cookieJar: serializeNetscapeCookieJar(getStoredCookies(site), site),
                credentials: 'omit'
            };
        }
    }
    setLastAuthSource(site, 'anonymous');
    return { site, source: 'anonymous', cookieHeader: '', credentials: 'omit' };
}

function getCookieYtdlpValidationTarget(site) {
    if (site === 'youtube') {
        if (/(?:^|\.)youtube(?:-nocookie)?\.com$/i.test(location.hostname) &&
            getPlaybackPageIdentity(location.href).startsWith('youtube:')) {
            return location.href;
        }
        return 'https://www.youtube.com/watch?v=jNQXAC9IVRw';
    }
    if (/(?:^|\.)bilibili\.com$/i.test(location.hostname) &&
        /\/(?:video\/BV|bangumi\/play\/ep)/i.test(location.pathname)) {
        return location.href;
    }
    return 'https://www.bilibili.com/video/BV174bk6dE3p/?p=2';
}

async function validateCookieJarWithYtdlp(site, cookieJar) {
    const session = createMpvBridgeSession({
        playlistStart: 0,
        ytdlp: { cookieJar, authSource: 'file' }
    });
    session.site = site;
    const target = getCookieYtdlpValidationTarget(site);
    const rawOptions = [
        ...(site === 'youtube' ? buildYoutubeYtdlpCompatibilityRawOptions() : []),
        currentConfig?.global?.networkProxy ?
            `proxy=${wrapYtdlpRawValue(currentConfig.global.networkProxy)}` : ''
    ].filter(Boolean).join(',');
    const args = [
        `--mpvbridge-session=${session.token}`,
        `--mpvbridge-feedback-port=${session.port}`,
        '--mpvbridge-preflight=1',
        '--mpvbridge-cookie-transfer=1',
        '--mpvbridge-validation-only=1',
        rawOptions ? `--ytdl-raw-options=${quoteMpvArgument(rawOptions)}` : '',
        quoteMpvArgument(`ytdl://${target}`)
    ].filter(Boolean);

    window.open(`mpvbridge://MPV?${encodeMpvBridgePayload(args.join(' '))}`, '_self');
    let cookieUploaded = false;
    const deadline = Date.now() + 130000;
    try {
        while (Date.now() < deadline) {
            try {
                const snapshot = await requestMpvBridgeStatus(session);
                if (!cookieUploaded) {
                    await uploadMpvBridgeCookieJar(session);
                    cookieUploaded = true;
                    session.cookieJar = '';
                }
                if (snapshot?.preflight?.status === 'ok' || snapshot.phase === 'validated') {
                    return snapshot.preflight;
                }
                if (snapshot?.preflight?.status === 'failed' || snapshot.phase === 'error') {
                    throw new Error(`yt-dlp 预检失败：${String(
                        snapshot?.preflight?.error || snapshot.error || '未知错误').slice(0, 300)}`);
                }
            } catch (error) {
                if (/^yt-dlp 预检失败：/.test(error.message)) {
                    throw error;
                }
            }
            await sleep(cookieUploaded ? 500 : 200);
        }
        throw new Error('yt-dlp Cookie 预检超时，未保存 Cookie');
    } finally {
        session.cookieJar = '';
    }
}

async function importCookieFile(site, fileName, text) {
    if (!AUTH_SITE_INFO[site]) {
        throw new Error('Unsupported Cookie site');
    }
    const cookies = parseNetscapeCookieFile(text)
        .filter(cookie => cookieMatchesSite(cookie, site) && !isCookieExpired(cookie));
    if (!cookies.length) {
        throw new Error('文件中没有该站点的有效 Cookie');
    }
    const cookieHeader = serializeCookieHeader(cookies);
    if (!hasAuthenticationCookie(cookieHeader, site) || !await validateCookieHeader(cookieHeader, site)) {
        setAuthMethodStatus(site, 'file', 'invalid', 'Imported Cookie validation failed');
        throw new Error('Cookie 已过期或未登录，未保存');
    }
    const cookieJar = serializeNetscapeCookieJar(cookies, site);
    if (!cookieJar) {
        throw new Error('无法生成 yt-dlp Cookie 文件，未保存');
    }
    await validateCookieJarWithYtdlp(site, cookieJar);
    const expirations = cookies.map(getCookieExpiration).filter(Boolean);
    const store = loadAuthStore();
    store[site] = {
        fileName: String(fileName || 'cookies.txt').replace(/[\r\n]/g, ''),
        importedAt: Date.now(),
        validatedAt: Date.now(),
        expiresAt: expirations.length ? Math.min(...expirations) * 1000 : 0,
        cookies
    };
    saveAuthStore(store);
    setAuthMethodStatus(site, 'file', 'available',
        'Userscript login validation and yt-dlp preflight both succeeded');
    return getAuthSnapshot();
}

function deleteStoredCookieFile(site) {
    const store = loadAuthStore();
    delete store[site];
    saveAuthStore(store);
    setAuthMethodStatus(site, 'file', 'unchecked', '');
    return getAuthSnapshot();
}

function getAuthSnapshot(existingStatus) {
    const status = existingStatus || loadAuthStatus();
    const store = loadAuthStore();
    const files = {};
    for (const site of Object.keys(AUTH_SITE_INFO)) {
        const entry = store[site];
        files[site] = entry ? {
            fileName: entry.fileName,
            importedAt: entry.importedAt,
            validatedAt: entry.validatedAt,
            expiresAt: entry.expiresAt,
            cookieCount: entry.cookies?.length || 0
        } : undefined;
    }
    return { browser: status.browser, sites: status.sites, files };
}

async function refreshAllAuthentication() {
    await updateDetectedBrowser();
    for (const site of Object.keys(AUTH_SITE_INFO)) {
        if (site !== 'youtube') {
            await checkPageAuthentication(site);
        }
        await checkAutomaticAuthentication(site);
        await checkStoredAuthentication(site);
    }
    return getAuthSnapshot();
}

async function requestJsonWithCookieContext(url, context, options = {}) {
    const headers = {
        ...(context?.site === 'bilibili' ? getBilibiliPageRequestHeaders() : {}),
        ...(options.headers || {})
    };
    if (context?.site === 'bilibili' && context?.source === 'page') {
        return requestJsonWithBrowserSession(url, { ...options, headers });
    }
    const timeout = Number(options.timeout) > 0 ? Number(options.timeout) : SITE_REQUEST_TIMEOUT;
    if (!context?.cookieHeader && !Object.keys(headers).length) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        try {
            return await (await fetch(url, {
                method: 'GET',
                credentials: context?.credentials || 'omit',
                signal: controller.signal
            })).json();
        } catch (error) {
            if (error?.name === 'AbortError') {
                throw new Error('Site request timed out');
            }
            throw error;
        } finally {
            clearTimeout(timeoutId);
        }
    }
    const response = await GM.xmlHttpRequest({
        method: 'GET',
        url: String(url),
        responseType: 'json',
        anonymous: true,
        cookie: context?.cookieHeader || undefined,
        timeout,
        headers
    });
    if (response.status < 200 || response.status >= 400) {
        throw new Error(`HTTP ${response.status}`);
    }
    return response.response ?? JSON.parse(response.responseText);
}

function normalizeBilibiliBangumiPlayInfo(response) {
    let statusCode = response?.code;
    let playInfo = response;
    if (playInfo?.raw) {
        playInfo = playInfo.raw;
    }
    if (playInfo?.data) {
        playInfo = playInfo.data;
    }
    if (statusCode === undefined || statusCode === null) {
        statusCode = playInfo?.code;
    }
    if (playInfo?.result) {
        playInfo = playInfo.result;
    }
    const playbackState = playInfo?.play_check?.play_detail || playInfo?.play_video_type;
    return {
        statusCode: Number(statusCode ?? 0),
        playInfo: playInfo || {},
        videoInfo: playInfo?.video_info,
        premiumOnly: Number(statusCode) === -10403,
        previewOnly: playbackState === 'PLAY_PREVIEW' || playbackState === 'preview'
    };
}

function parseEmbeddedJsonAssignment(source, assignmentName) {
    const text = String(source || '');
    const markerIndex = text.indexOf(assignmentName);
    if (markerIndex < 0) {
        return undefined;
    }
    const assignmentIndex = text.indexOf('=', markerIndex + assignmentName.length);
    if (assignmentIndex < 0) {
        return undefined;
    }
    let start = assignmentIndex + 1;
    while (/\s/.test(text[start] || '')) {
        start++;
    }
    if (text[start] !== '{' && text[start] !== '[') {
        return undefined;
    }

    const opening = text[start];
    const closing = opening === '{' ? '}' : ']';
    let depth = 0;
    let quoted = false;
    let escaped = false;
    for (let index = start; index < text.length; index++) {
        const character = text[index];
        if (quoted) {
            if (escaped) {
                escaped = false;
            } else if (character === '\\') {
                escaped = true;
            } else if (character === '"') {
                quoted = false;
            }
            continue;
        }
        if (character === '"') {
            quoted = true;
        } else if (character === opening) {
            depth++;
        } else if (character === closing && --depth === 0) {
            try {
                return JSON.parse(text.slice(start, index + 1));
            } catch (error) {
                return undefined;
            }
        }
    }
    return undefined;
}

function createBilibiliAuthenticationError(message) {
    const error = new Error(message || translation.requireLoginOrVip);
    error.bilibiliAuthenticationRejected = true;
    return error;
}

function createBilibiliMediaIdentityError(message) {
    const error = new Error(message || 'can not identify the current bilibili media');
    // URL/页面身份识别与登录态无关，禁止把同一个错误在所有认证源上重复执行。
    error.bilibiliAuthenticationIndependent = true;
    return error;
}

function buildYtdlpSubtitleRawOptions(subtitlePreference) {
    if (subtitlePreference === 'off') {
        return [];
    }
    return [
        `sub-langs=${wrapYtdlpRawValue(getYtdlpSubtitleLanguages(subtitlePreference))}`,
        'write-subs=',
        'write-auto-subs='
    ];
}

function buildYoutubeYtdlpCompatibilityRawOptions() {
    return [
        // Logged-in tv_downgraded currently returns "The page needs to be
        // reloaded" for some accounts. These are yt-dlp's current upstream
        // fallback clients for Cookie-authenticated YouTube extraction.
        `extractor-args=${wrapYtdlpRawValue(
            'youtube:player_client=default,web_embedded')}`,
        // Node is already installed with the user's MPV toolchain; yt-dlp
        // requires explicit opt-in before it will use Node for EJS challenges.
        'js-runtimes=node'
    ];
}

function normalizePlaylistLimit(value, fallback = 50) {
    const parsed = Math.floor(Number(value));
    return Number.isFinite(parsed) ? Math.min(500, Math.max(1, parsed)) : fallback;
}

// 返回一个固定长度、以当前项为中心的窗口。某一侧到达边界后，缺额全部补到另一侧。
function getCenteredPlaylistWindow(totalItems, currentIndex, maxItems) {
    const total = Math.max(0, Math.floor(Number(totalItems)) || 0);
    if (!total) {
        return { start: 0, end: 0, currentIndex: 0, count: 0 };
    }
    const safeIndex = Math.min(total - 1, Math.max(0, Math.floor(Number(currentIndex)) || 0));
    const count = Math.min(total, normalizePlaylistLimit(maxItems));
    let start = safeIndex - Math.floor((count - 1) / 2);
    let end = start + count;
    if (start < 0) {
        end -= start;
        start = 0;
    }
    if (end > total) {
        start = Math.max(0, start - (end - total));
        end = total;
    }
    return { start, end, currentIndex: safeIndex - start, count: end - start };
}

function getYoutubePlaylistStart(url = location.href) {
    try {
        const parsedUrl = new URL(url, location.href);
        return parsedUrl.searchParams.has('list') ?
            Math.max(1, Math.floor(Number(parsedUrl.searchParams.get('index'))) || 1) : 1;
    } catch (error) {
        return 1;
    }
}

async function getYoutubePlaylistContext(url = location.href) {
    let currentItem = getYoutubePlaylistStart(url);
    let playlistLength;
    for (let attempt = 0; attempt < 3 && !playlistLength; attempt++) {
        try {
            const player = document.getElementById('movie_player');
            const playerIndex = Number(player?.getPlaylistIndex?.());
            const playlist = player?.getPlaylist?.();
            if (Number.isFinite(playerIndex) && playerIndex >= 0) {
                currentItem = Math.floor(playerIndex) + 1;
            }
            if (Array.isArray(playlist) && playlist.length >= currentItem) {
                playlistLength = playlist.length;
            }
        } catch (error) {
            // 播放器 API 尚未初始化时继续尝试页面初始数据。
        }
        if (!playlistLength && attempt < 2) {
            await sleep(100);
        }
    }
    try {
        const initialPlaylist = ytInitialData?.contents?.twoColumnWatchNextResults?.playlist?.playlist;
        const initialIndex = Number(initialPlaylist?.currentIndex);
        const initialLength = Number(initialPlaylist?.totalVideos) || initialPlaylist?.contents?.length;
        if (Number.isFinite(initialIndex) && initialIndex >= 0) {
            currentItem = Math.floor(initialIndex) + 1;
        }
        if (!playlistLength && Number.isFinite(initialLength) && initialLength >= currentItem) {
            playlistLength = Math.floor(initialLength);
        }
    } catch (error) {
        // 页面未暴露 ytInitialData 时保留播放器 API 或 URL 索引。
    }
    return { currentItem, playlistLength };
}

function getUserscriptPageWindow() {
    return typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
}

function getBilibiliCurrentBvid(url = location.href) {
    const matched = String(url).match(/(BV[0-9A-Za-z]+)/);
    if (matched?.[1]) {
        return matched[1];
    }
    try {
        const initialState = getUserscriptPageWindow().__INITIAL_STATE__;
        return initialState?.bvid || initialState?.videoData?.bvid ||
            initialState?.videoInfo?.bvid || initialState?.epInfo?.bvid;
    } catch (error) {
        return undefined;
    }
}

function getBilibiliCurrentEpid(url = location.href) {
    const extractEpid = value => String(value || '').match(/(?:\/ep|[?&]ep_id=)(\d+)/)?.[1];
    const addressCandidates = [
        url,
        document.querySelector('link[rel="canonical"]')?.href,
        document.querySelector('meta[property="og:url"]')?.content
    ];
    for (const candidate of addressCandidates) {
        const epid = extractEpid(candidate);
        if (epid) {
            return epid;
        }
    }
    try {
        const initialState = getUserscriptPageWindow().__INITIAL_STATE__;
        const stateEpid = initialState?.epInfo?.id || initialState?.epInfo?.ep_id ||
            initialState?.epid || initialState?.ep_id || initialState?.videoData?.epid ||
            initialState?.mediaInfo?.new_ep?.id;
        if (stateEpid) {
            return String(stateEpid);
        }
    } catch (error) {
        // 页面没有暴露初始状态时继续检查动态剧集列表。
    }

    // SPA 切集后地址和初始状态可能尚未同步，读取右侧剧集列表中当前选中的 ep 链接。
    const episodeLinks = [...document.querySelectorAll('a[href*="/bangumi/play/ep"]')];
    const selectedLink = episodeLinks.find(link => {
        let element = link;
        for (let depth = 0; element && depth < 4; depth++, element = element.parentElement) {
            const className = typeof element.className === 'string' ? element.className : '';
            if (/(?:^|[_\-\s])(active|selected|select|visited)(?:$|[_\-\s])/i.test(className) ||
                element.getAttribute('aria-current') === 'true' ||
                element.getAttribute('aria-current') === 'page' ||
                element.getAttribute('aria-selected') === 'true') {
                return true;
            }
        }
        return false;
    });
    const selectedEpid = extractEpid(selectedLink?.href);
    if (selectedEpid) {
        return selectedEpid;
    }

    // 兼容旧版番剧页和部分 CSS Modules 页面使用的选中节点。
    const selectedElement = document.querySelector([
        '.ep-item.cursor.visited',
        '[class*="numberListItem_select"]',
        '[class*="episode"][class*="active"]',
        '[data-ep-id][aria-selected="true"]',
        '[data-epid][aria-selected="true"]'
    ].join(','));
    const selectedElementEpid = extractEpid(selectedElement?.querySelector?.('a[href*="/ep"]')?.href) ||
        selectedElement?.dataset?.epId || selectedElement?.dataset?.epid;
    return selectedElementEpid ? String(selectedElementEpid) : undefined;
}

function getBilibiliCurrentSeasonId(url = location.href) {
    const matched = String(url).match(/\/ss(\d+)/);
    if (matched?.[1]) {
        return matched[1];
    }
    try {
        const initialState = getUserscriptPageWindow().__INITIAL_STATE__;
        const seasonId = initialState?.mediaInfo?.season_id || initialState?.season_id ||
            initialState?.epInfo?.season_id;
        return seasonId ? String(seasonId) : undefined;
    } catch (error) {
        return undefined;
    }
}

function getBilibiliSelectedEpisodeOrdinal() {
    const selectedElement = document.querySelector([
        '.ep-item.cursor.visited',
        '[class*="numberListItem_select"]',
        '[class*="episode"][class*="active"]',
        '[aria-label*="当前"][class*="episode"]'
    ].join(','));
    const label = String(selectedElement?.textContent || '').trim();
    const matched = label.match(/^(?:第\s*)?(\d+)(?:\s*[话集])?$/) || label.match(/\b(\d+)\b/);
    const ordinal = Math.floor(Number(matched?.[1]));
    return Number.isFinite(ordinal) && ordinal > 0 ? ordinal : undefined;
}

function getBilibiliCurrentPage(url = location.href) {
    try {
        const parsedUrl = new URL(url, location.href);
        return Math.max(1, Math.floor(Number(parsedUrl.searchParams.get('p'))) || 1);
    } catch (error) {
        return 1;
    }
}

async function fetchBilibiliApi(path, params = {}, required = false, cookieContext) {
    const apiUrl = new URL(path, 'https://api.bilibili.com');
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
            apiUrl.searchParams.set(key, String(value));
        }
    });
    const response = cookieContext ?
        await requestJsonWithCookieContext(apiUrl.href, cookieContext) :
        await (await fetch(apiUrl.href, {
            method: 'GET',
            credentials: 'omit'
        })).json();
    if (response?.code !== 0 || !response.data) {
        if (required) {
            throw new Error(response?.message || 'can not get bilibili playlist info');
        }
        return undefined;
    }
    return response.data;
}

async function getBilibiliViewData(bvid, required = false, cookieContext) {
    return bvid ? fetchBilibiliApi('/x/web-interface/view', { bvid }, required, cookieContext) : undefined;
}

function normalizeBilibiliArchive(archive, fallbackBvid) {
    const bvid = archive?.bvid || fallbackBvid;
    if (!bvid) {
        return undefined;
    }
    const sourcePages = Array.isArray(archive?.pages) && archive.pages.length ? archive.pages :
        archive?.page ? [archive.page] : [];
    const pages = sourcePages.map((page, index) => ({
        page: Math.max(1, Math.floor(Number(page?.page)) || index + 1),
        cid: page?.cid,
        title: page?.part || archive?.title || ''
    }));
    return {
        aid: archive?.aid || archive?.arc?.aid,
        bvid,
        title: archive?.title || archive?.arc?.title || '',
        pages
    };
}

function getBilibiliUgcSeasonArchives(viewData) {
    const archives = [];
    for (const section of viewData?.ugc_season?.sections || []) {
        for (const episode of section?.episodes || []) {
            const archive = normalizeBilibiliArchive(episode);
            if (archive) {
                archives.push(archive);
            }
        }
    }
    return archives;
}

function takePlaylistNeighborhood(items, currentIndex, maxItems) {
    if (!Array.isArray(items) || !items.length) {
        return { items: [], currentIndex: 0 };
    }
    const window = getCenteredPlaylistWindow(items.length,
        currentIndex >= 0 && currentIndex < items.length ? currentIndex : 0, maxItems);
    return {
        items: items.slice(window.start, window.end),
        currentIndex: window.currentIndex
    };
}

async function fetchBilibiliListArchives(currentBvid, neighborhoodRadius, cookieContext) {
    let parsedUrl;
    try {
        parsedUrl = new URL(location.href);
    } catch (error) {
        return { archives: [], currentIndex: -1 };
    }
    const mid = parsedUrl.pathname.match(/\/list\/(\d+)/)?.[1];
    const sid = parsedUrl.searchParams.get('sid');
    if (!mid || !sid) {
        return { archives: [], currentIndex: -1 };
    }

    const requestedType = parsedUrl.searchParams.get('type');
    const types = requestedType === 'series' ? ['series'] :
        requestedType === 'season' ? ['season'] : ['season', 'series'];
    let fallbackArchives = [];
    for (const type of types) {
        const archives = [];
        const pageSize = 30;
        let currentIndex = -1;
        for (let page = 1; ; page++) {
            const data = type === 'series' ?
                await fetchBilibiliApi('/x/series/archives', {
                    mid,
                    series_id: sid,
                    pn: page,
                    ps: pageSize
                }, false, cookieContext) :
                await fetchBilibiliApi('/x/polymer/web-space/seasons_archives_list', {
                    mid,
                    season_id: sid,
                    page_num: page,
                    page_size: pageSize
                }, false, cookieContext);
            const pageArchives = data?.archives || [];
            if (!pageArchives.length) {
                break;
            }
            archives.push(...pageArchives.map(item => normalizeBilibiliArchive(item)).filter(Boolean));
            if (currentIndex < 0) {
                currentIndex = archives.findIndex(item => item.bvid === currentBvid);
            }
            const total = Number(data?.page?.total);
            const reachedEnd = pageArchives.length < pageSize ||
                (Number.isFinite(total) && archives.length >= total);
            const hasEnoughFollowing = currentIndex >= 0 &&
                archives.length - currentIndex - 1 >= neighborhoodRadius;
            if (reachedEnd || hasEnoughFollowing) {
                break;
            }
        }
        if (!fallbackArchives.length && archives.length) {
            fallbackArchives = archives;
        }
        if (currentIndex >= 0) {
            const start = Math.max(0, currentIndex - neighborhoodRadius);
            const end = Math.min(archives.length, currentIndex + neighborhoodRadius + 1);
            return {
                archives: archives.slice(start, end),
                currentIndex: currentIndex - start
            };
        }
    }
    return { archives: fallbackArchives, currentIndex: -1 };
}

async function ensureBilibiliArchivePages(archive, cookieContext) {
    if (archive?.pages?.length) {
        return archive;
    }
    const pages = await fetchBilibiliApi('/x/player/pagelist', {
        bvid: archive?.bvid,
        jsonp: 'jsonp'
    }, false, cookieContext);
    return {
        ...archive,
        pages: (pages || []).map((page, index) => ({
            page: Math.max(1, Math.floor(Number(page?.page)) || index + 1),
            title: page?.part || archive?.title || ''
        }))
    };
}

function makeBilibiliPartUrl(bvid, page = 1) {
    return `https://www.bilibili.com/video/${bvid}?p=${Math.max(1, Math.floor(Number(page)) || 1)}`;
}

function makeBilibiliPlaylistTitle(archive, page) {
    const archiveTitle = String(archive?.title || '').trim();
    const partTitle = String(page?.title || '').trim();
    const pageNumber = Math.max(1, Math.floor(Number(page?.page)) || 1);
    if ((archive?.pages?.length || 0) <= 1) {
        return archiveTitle || partTitle || archive?.bvid || '';
    }
    return [archiveTitle, `P${pageNumber}`, partTitle && partTitle !== archiveTitle ? partTitle : '']
        .filter(Boolean).join(' - ');
}

function normalizeBilibiliEpisode(episode) {
    const id = String(episode?.id || episode?.ep_id || '');
    if (!id) {
        return undefined;
    }
    const shortTitle = String(episode?.show_title || episode?.title || '').trim();
    const longTitle = String(episode?.long_title || '').trim();
    return {
        id,
        epid: id,
        aid: episode?.aid,
        bvid: episode?.bvid,
        cid: episode?.cid,
        url: `https://www.bilibili.com/bangumi/play/ep${id}`,
        title: [shortTitle, longTitle && longTitle !== shortTitle ? longTitle : '']
            .filter(Boolean).join(' - ') || `ep${id}`
    };
}

async function buildBilibiliBangumiPlaylist(parserConfig, mode, cookieContext) {
    const currentEpid = getBilibiliCurrentEpid();
    const currentSeasonId = getBilibiliCurrentSeasonId();
    if (!currentEpid && !currentSeasonId) {
        return undefined;
    }
    const seasonQuery = currentEpid ? `ep_id=${encodeURIComponent(currentEpid)}` :
        `season_id=${encodeURIComponent(currentSeasonId)}`;
    const response = cookieContext ?
        await requestJsonWithCookieContext(
            `https://api.bilibili.com/pgc/view/web/season?${seasonQuery}`,
            cookieContext
        ) :
        await (await fetch(
            `https://api.bilibili.com/pgc/view/web/season?${seasonQuery}`,
            {
                method: 'GET',
                credentials: 'omit'
            }
        )).json();
    if (response?.code !== 0 || !response.result) {
        throw new Error(response?.message || 'can not get bilibili episode playlist');
    }

    const episodeGroups = [
        response.result.episodes,
        ...(response.result.section || []).map(section => section?.episodes)
    ].filter(group => Array.isArray(group) && group.length);
    const sourceEpisodes = episodeGroups.find(group =>
        group.some(episode => String(episode?.id || episode?.ep_id || '') === currentEpid)
    ) || episodeGroups[0] || [];
    const episodes = sourceEpisodes.map(normalizeBilibiliEpisode).filter(Boolean);
    let matchedIndex = currentEpid ? episodes.findIndex(episode => episode.id === currentEpid) : -1;
    if (matchedIndex < 0) {
        const currentBvid = getBilibiliCurrentBvid();
        matchedIndex = currentBvid ? episodes.findIndex(episode => episode.bvid === currentBvid) : -1;
    }
    if (matchedIndex < 0) {
        const selectedOrdinal = getBilibiliSelectedEpisodeOrdinal();
        if (selectedOrdinal && selectedOrdinal <= episodes.length) {
            matchedIndex = selectedOrdinal - 1;
        }
    }
    if (matchedIndex < 0) {
        return undefined;
    }

    if (mode === 'parts') {
        return { items: [episodes[matchedIndex]], playlistStart: 0, syncTimeSafe: true };
    }
    const limit = mode === 'collection' ? normalizePlaylistLimit(parserConfig.collectionLimit) :
        normalizePlaylistLimit(parserConfig.playlistLimit);
    const neighborhood = takePlaylistNeighborhood(episodes, matchedIndex, limit);
    return {
        items: neighborhood.items,
        playlistStart: neighborhood.currentIndex,
        syncTimeSafe: true
    };
}

function deduplicatePlaylistItems(items) {
    const seen = new Set();
    return (items || []).filter(item => {
        if (!item?.url || seen.has(item.url)) {
            return false;
        }
        seen.add(item.url);
        return true;
    });
}

async function buildBilibiliExplicitPlaylist(parserConfig, cookieContext) {
    const mode = parserConfig.preferredPlaylist;
    if (!['collection', 'parts', 'playlist'].includes(mode)) {
        return undefined;
    }
    if (/\/bangumi\/play\//.test(location.pathname)) {
        return buildBilibiliBangumiPlaylist(parserConfig, mode, cookieContext);
    }

    const currentBvid = getBilibiliCurrentBvid();
    if (!currentBvid) {
        return undefined;
    }

    const currentPage = getBilibiliCurrentPage();
    const viewData = await getBilibiliViewData(currentBvid, true, cookieContext);
    const currentArchive = normalizeBilibiliArchive(viewData, currentBvid);
    let collectionArchives = getBilibiliUgcSeasonArchives(viewData);
    const isListPage = /\/list\//.test(location.pathname);
    const outerLimit = mode === 'collection' ? normalizePlaylistLimit(parserConfig.collectionLimit) :
        normalizePlaylistLimit(parserConfig.playlistLimit);
    let currentArchiveIndex = collectionArchives.findIndex(item => item.bvid === currentBvid);
    if (currentArchiveIndex >= 0 && currentArchive) {
        const collectionArchive = collectionArchives[currentArchiveIndex];
        collectionArchives[currentArchiveIndex] = {
            ...collectionArchive,
            aid: collectionArchive.aid || currentArchive.aid,
            title: collectionArchive.title || currentArchive.title,
            pages: currentArchive.pages?.length ? currentArchive.pages : collectionArchive.pages
        };
    }
    if (!collectionArchives.length && isListPage && mode !== 'parts') {
        const listContext = await fetchBilibiliListArchives(currentBvid, outerLimit, cookieContext);
        collectionArchives = listContext.archives;
        currentArchiveIndex = listContext.currentIndex;
    }

    let items = [];
    let playlistStart = 0;
    let syncTimeSafe = true;
    if (mode === 'parts') {
        const limit = normalizePlaylistLimit(parserConfig.partLimit);
        const pages = currentArchive?.pages?.length ? currentArchive.pages : [{ page: 1 }];
        const matchedPageIndex = Math.max(0, pages.findIndex(page => page.page === currentPage));
        const neighborhood = takePlaylistNeighborhood(pages, matchedPageIndex, limit);
        items = neighborhood.items.map(page => ({
            url: makeBilibiliPartUrl(currentBvid, page.page),
            title: makeBilibiliPlaylistTitle(currentArchive, page),
            aid: currentArchive?.aid,
            bvid: currentBvid,
            cid: page.cid,
            page: page.page
        }));
        playlistStart = neighborhood.currentIndex;
    } else if (mode === 'collection') {
        const archives = collectionArchives.length ? collectionArchives : [currentArchive].filter(Boolean);
        const matchedIndex = currentArchiveIndex >= 0 ? currentArchiveIndex :
            archives.findIndex(item => item.bvid === currentBvid);
        if (matchedIndex < 0) {
            items = [{
                url: makeBilibiliPartUrl(currentBvid, currentPage),
                title: makeBilibiliPlaylistTitle(currentArchive, currentArchive?.pages?.[currentPage - 1]),
                aid: currentArchive?.aid,
                bvid: currentBvid,
                cid: currentArchive?.pages?.[currentPage - 1]?.cid,
                page: currentPage
            }];
        } else {
            const neighborhood = takePlaylistNeighborhood(archives, matchedIndex, outerLimit);
            items = neighborhood.items.map(archive => ({
                url: makeBilibiliPartUrl(archive.bvid,
                    archive.bvid === currentBvid ? currentPage : 1),
                title: archive.title || archive.bvid,
                aid: archive.aid,
                bvid: archive.bvid,
                cid: archive.pages?.[archive.bvid === currentBvid ? currentPage - 1 : 0]?.cid,
                page: archive.bvid === currentBvid ? currentPage : 1
            }));
            playlistStart = neighborhood.currentIndex;
        }
    } else {
        const limit = normalizePlaylistLimit(parserConfig.playlistLimit);
        const archives = collectionArchives.length ? collectionArchives : [currentArchive].filter(Boolean);
        const matchedIndex = currentArchiveIndex >= 0 ? currentArchiveIndex :
            archives.findIndex(item => item.bvid === currentBvid);
        if (matchedIndex < 0) {
            items = [{
                url: makeBilibiliPartUrl(currentBvid, currentPage),
                title: makeBilibiliPlaylistTitle(currentArchive, currentArchive?.pages?.[currentPage - 1]),
                aid: currentArchive?.aid,
                bvid: currentBvid,
                cid: currentArchive?.pages?.[currentPage - 1]?.cid,
                page: currentPage
            }];
        } else {
            const candidateStart = Math.max(0, matchedIndex - limit);
            const candidateEnd = Math.min(archives.length, matchedIndex + limit + 1);
            const detailedArchives = [];
            for (let index = candidateStart; index < candidateEnd; index += 6) {
                detailedArchives.push(...await Promise.all(
                    archives.slice(index, Math.min(candidateEnd, index + 6)).map(
                        archive => ensureBilibiliArchivePages(archive, cookieContext)
                    )
                ));
            }
            const flattenedItems = [];
            for (const archive of detailedArchives) {
                const pages = archive.pages?.length ? archive.pages : [{ page: 1, title: archive.title }];
                for (const page of pages) {
                    flattenedItems.push({
                        url: makeBilibiliPartUrl(archive.bvid, page.page),
                        title: makeBilibiliPlaylistTitle(archive, page),
                        aid: archive.aid,
                        bvid: archive.bvid,
                        cid: page.cid,
                        page: page.page
                    });
                }
            }
            const currentUrl = makeBilibiliPartUrl(currentBvid, currentPage);
            const currentItemIndex = flattenedItems.findIndex(item => item.url === currentUrl);
            const neighborhood = takePlaylistNeighborhood(flattenedItems,
                Math.max(0, currentItemIndex), limit);
            items = neighborhood.items;
            playlistStart = neighborhood.currentIndex;
            syncTimeSafe = currentItemIndex >= 0;
        }
    }

    items = deduplicatePlaylistItems(items);
    if (!items.length) {
        items = [{
            url: makeBilibiliPartUrl(currentBvid, currentPage),
            title: makeBilibiliPlaylistTitle(currentArchive, currentArchive?.pages?.[currentPage - 1]),
            aid: currentArchive?.aid,
            bvid: currentBvid,
            cid: currentArchive?.pages?.[currentPage - 1]?.cid,
            page: currentPage
        }];
        playlistStart = 0;
    }
    const selectedItemIndex = items.findIndex(item =>
        item.url === makeBilibiliPartUrl(currentBvid, currentPage));
    if (selectedItemIndex >= 0) {
        playlistStart = selectedItemIndex;
    }
    playlistStart = Math.min(items.length - 1, Math.max(0, playlistStart));
    return { items, playlistStart, syncTimeSafe };
}

async function mapWithConcurrency(items, concurrency, mapper) {
    const results = new Array(items.length);
    let cursor = 0;
    const workers = Array.from({ length: Math.min(items.length, Math.max(1, concurrency)) }, async () => {
        while (cursor < items.length) {
            const index = cursor++;
            results[index] = await mapper(items[index], index);
        }
    });
    await Promise.all(workers);
    return results;
}

async function getBilibiliNativePlaylistVideoInfo(item, cookieContext) {
    if (item?.aid && item?.cid && (item?.bvid || item?.epid)) {
        return item;
    }

    const epid = String(item?.epid || String(item?.url || '').match(/\/ep(\d+)/)?.[1] || '');
    if (epid) {
        const response = await requestJsonWithCookieContext(
            `https://api.bilibili.com/pgc/view/web/season?ep_id=${encodeURIComponent(epid)}`,
            cookieContext
        );
        const groups = [
            response?.result?.episodes,
            ...(response?.result?.section || []).map(section => section?.episodes)
        ].filter(Array.isArray);
        const episode = groups.flat().find(candidate =>
            String(candidate?.id || candidate?.ep_id || '') === epid);
        if (!episode?.aid || !episode?.cid) {
            throw new Error(response?.message || `can not resolve bilibili episode ep${epid}`);
        }
        return {
            ...item,
            epid,
            aid: episode.aid,
            bvid: episode.bvid,
            cid: episode.cid,
            title: item.title || episode.share_copy || episode.long_title || episode.title
        };
    }

    const bvid = item?.bvid || String(item?.url || '').match(/(BV[0-9A-Za-z]+)/)?.[1];
    if (!bvid) {
        throw new Error('can not find bilibili playlist bvid');
    }
    const page = Math.max(1, Math.floor(Number(item?.page)) || getBilibiliCurrentPage(item?.url));
    const viewData = await getBilibiliViewData(bvid, true, cookieContext);
    const pageData = viewData?.pages?.[page - 1] || viewData?.pages?.[0];
    if (!viewData?.aid || !pageData?.cid) {
        throw new Error('can not find bilibili playlist aid and cid');
    }
    return {
        ...item,
        aid: viewData.aid,
        bvid: viewData.bvid || bvid,
        cid: pageData.cid,
        page,
        title: item.title || pageData.part || viewData.title
    };
}

async function resolveBilibiliNativePlaylistItem(item, cookieContext, parserConfig) {
    const videoInfo = await getBilibiliNativePlaylistVideoInfo(item, cookieContext);
    const parser = Object.create(PARSER.BILIBILI.prototype);
    parser.cookieContext = cookieContext;
    const dash = await parser.getDash(
        videoInfo.aid,
        videoInfo.bvid,
        videoInfo.cid,
        videoInfo.epid,
        parserConfig.preferredCodec,
        parserConfig.preferredQuality,
        parserConfig.preferredAudio
    );
    const video = dash?.video || await parser.getFlvOrMP4(videoInfo.aid, videoInfo.cid);
    if (!video) {
        throw new Error('can not resolve bilibili playlist media');
    }
    const subtitles = parserConfig.preferredSubtitle && parserConfig.preferredSubtitle !== 'off' ?
        await parser.getSubtitles(videoInfo.aid, videoInfo.cid) : [];
    return {
        video,
        videos: dash?.videos || [],
        videoTracks: dash?.videoTracks || [],
        audio: dash?.audio,
        audios: dash?.audios || [],
        audioTracks: dash?.audioTracks || [],
        subtitles,
        title: videoInfo.title || item.title,
        cid: videoInfo.cid,
        sourceUrl: item.url
    };
}

async function resolveBilibiliNativePlaylist(explicitPlaylist, cookieContext, parserConfig) {
    const settled = await mapWithConcurrency(explicitPlaylist.items, 3, async (item, index) => {
        try {
            return {
                entry: await resolveBilibiliNativePlaylistItem(item, cookieContext, parserConfig),
                originalIndex: index
            };
        } catch (error) {
            console.warn(`Bilibili playlist item ${index + 1} failed:`, error);
            return { error, originalIndex: index };
        }
    });
    const selectedResult = settled[explicitPlaylist.playlistStart];
    if (!selectedResult?.entry) {
        throw selectedResult?.error || new Error('can not resolve current bilibili playlist item');
    }
    const resolved = settled.filter(result => result.entry);
    const skipped = settled.length - resolved.length;
    if (skipped > 0) {
        showToast(currentConfig.global.language === 'zh' ?
            `Bilibili: ${skipped}${translation.playlistItemsSkipped}` :
            `Bilibili: ${skipped} ${translation.playlistItemsSkipped}`);
    }
    return {
        entries: resolved.map(result => result.entry),
        playlistStart: resolved.findIndex(result =>
            result.originalIndex === explicitPlaylist.playlistStart)
    };
}

function applyYtdlpCommonMedia(parserConfig, rawOptions, options = {}) {
    const subtitlePreference = parserConfig.preferredSubtitle || 'auto';
    if (parserConfig.preferredPlaylist === 'playlist') {
        rawOptions.push('yes-playlist=');
        const limit = normalizePlaylistLimit(parserConfig.playlistLimit);
        const currentItem = Math.max(1, Math.floor(Number(options.playlistStart)) || 1);
        const playlistLength = Math.floor(Number(options.playlistLength));
        const hasKnownLength = Number.isFinite(playlistLength) && playlistLength >= currentItem;
        const window = hasKnownLength ?
            getCenteredPlaylistWindow(playlistLength, currentItem - 1, limit) : undefined;
        const start = window ? window.start + 1 :
            Math.max(1, currentItem - Math.floor((limit - 1) / 2));
        const end = window ? window.end : start + limit - 1;
        rawOptions.push(`playlist-items=${wrapYtdlpRawValue(`${start}:${end}`)}`);
        currentMedia.playlistStart = window ? window.currentIndex : currentItem - start;
    } else {
        rawOptions.push('no-playlist=');
        currentMedia.playlistStart = 0;
    }
    if (currentConfig.global.networkProxy) {
        rawOptions.push(`proxy=${wrapYtdlpRawValue(currentConfig.global.networkProxy)}`);
    }

    const mediaUrl = options.mediaUrl || location.href;
    currentMedia.video = mediaUrl.startsWith('ytdl://') ? mediaUrl : `ytdl://${mediaUrl}`;
    currentMedia.ytdlp.rawOptions = rawOptions.join(',');
    currentMedia.ytdlp.subtitleLanguages = subtitlePreference === 'mpv' || subtitlePreference === 'off' ?
        undefined : getMpvSubtitleLanguages(subtitlePreference);
    currentMedia.ytdlp.subtitlesEnabled = subtitlePreference !== 'off';
    currentMedia.ytdlp.networkProxy = currentConfig.global.networkProxy || undefined;
}

async function configureYoutubeMedia(parserConfig, authContext) {
    const loadCuratedFormats = parserConfig.preferredQuality === 'mpv' ||
        parserConfig.preferredAudio === 'mpv';
    // requested_downloads 中 all 音频默认是高→低，而 mpv ytdl_hook 会再次倒序。
    // 仅在“音频全部载入”时让 yt-dlp 按低→高输出，MPV 最终即为高→低；
    // 视频仍以 HDR/分辨率/帧率/编码为最高优先级，每档只取一个编码。
    const formatSort = parserConfig.preferredAudio === 'mpv' ?
        'hdr,res,fps,vcodec,+channels,+br,+asr,+acodec,+lang' :
        'hdr,res,fps,vcodec,channels,acodec,br,lang';
    const rawOptions = [
        `format-sort=${wrapYtdlpRawValue(formatSort)}`,
        ...buildYoutubeYtdlpCompatibilityRawOptions(),
        ...buildYtdlpSubtitleRawOptions(parserConfig.preferredSubtitle || 'auto')
    ];
    configureYtdlpAuthentication(authContext);

    currentMedia.ytdlp.format = loadCuratedFormats ?
        buildYoutubeMpvFormat(parserConfig) : buildYoutubeFormat(parserConfig);
    currentMedia.ytdlp.allFormats = false;
    currentMedia.ytdlp.forceAllFormats = false;
    currentMedia.ytdlp.trackLabelSite = 'youtube';
    currentMedia.ytdlp.preferFirstVideo = parserConfig.preferredQuality === 'mpv';
    currentMedia.ytdlp.preferFirstAudio = parserConfig.preferredAudio === 'mpv';
    const playlistContext = await getYoutubePlaylistContext(location.href);
    applyYtdlpCommonMedia(parserConfig, rawOptions, {
        playlistStart: playlistContext.currentItem,
        playlistLength: playlistContext.playlistLength
    });
}

function configureGenericYtdlpMedia(parserConfig) {
    const loadAllFormats = parserConfig.preferredQuality === 'mpv';
    const rawOptions = buildYtdlpSubtitleRawOptions(parserConfig.preferredSubtitle || 'auto');

    currentMedia.ytdlp.format = buildGenericYtdlpFormat(parserConfig);
    currentMedia.ytdlp.allFormats = loadAllFormats;
    currentMedia.ytdlp.forceAllFormats = loadAllFormats;
    applyYtdlpCommonMedia(parserConfig, rawOptions);
}

async function configureBilibiliPlaylistMedia(parserConfig) {
    // yt-dlp 先按低→高生成全部音频，mpv 的 ytdl_hook 再倒序载入，
    // 最终在 MPV 中即为高→低，并默认选中最高音质轨。
    const formatSort = parserConfig.preferredAudio === 'mpv' ?
        'hdr,res,fps,vcodec,+channels,+br,+asr,+acodec,+lang' :
        'hdr,res,fps,vcodec,channels,acodec,br,lang';
    const rawOptions = [
        `format-sort=${wrapYtdlpRawValue(formatSort)}`,
        ...buildYtdlpSubtitleRawOptions(parserConfig.preferredSubtitle || 'auto')
    ];

    currentMedia.ytdlp.format = buildBilibiliYtdlpFormat(parserConfig);
    // 每档画质只请求一个首选编码，避免“播放列表 × 全部格式”指数级膨胀。
    currentMedia.ytdlp.allFormats = false;
    currentMedia.ytdlp.forceAllFormats = false;
    currentMedia.ytdlp.trackLabelSite = 'bilibili';
    currentMedia.ytdlp.preferFirstVideo = parserConfig.preferredQuality === 'mpv';
    currentMedia.ytdlp.preferFirstAudio = parserConfig.preferredAudio === 'mpv';

    // 脚本只枚举合集、分P或番剧条目；每个条目的媒体流仍由 yt-dlp 解析。
    // Bilibili 的 ?p=N URL 即使启用 yes-playlist 也只会返回第 N 个分P，因此不能
    // 直接把当前地址当作完整播放列表交给 yt-dlp。
    const skippedSources = [];
    let authContext;
    let explicitPlaylist;
    for (;;) {
        authContext = await resolveSiteAuthentication('bilibili', {
            includePage: false,
            skipSources: skippedSources
        });
        try {
            explicitPlaylist = await buildBilibiliExplicitPlaylist(parserConfig, authContext);
            if (!explicitPlaylist?.items?.length) {
                throw new Error('can not build bilibili playlist');
            }
            recordRequestAuthenticationResult('bilibili', authContext.source, true,
                'Bilibili playlist request succeeded');
            break;
        } catch (error) {
            if (authContext.source === 'anonymous') {
                throw error;
            }
            recordRequestAuthenticationResult('bilibili', authContext.source, false,
                `Bilibili playlist request failed: ${String(error.message || error).slice(0, 240)}`);
            skippedSources.push(authContext.source);
        }
    }

    configureYtdlpAuthentication(authContext);
    // 条目已经由脚本展开，yt-dlp 每次只解析一个明确的 BV 分P或番剧 ep。
    const ytdlpItemConfig = {
        ...parserConfig,
        preferredPlaylist: 'current'
    };
    applyYtdlpCommonMedia(ytdlpItemConfig, rawOptions);

    const playlistItems = explicitPlaylist.items.map(item => ({
        ...item,
        url: String(item.url || '').startsWith('ytdl://') ? item.url : `ytdl://${item.url}`
    }));
    const playlistStart = Math.min(playlistItems.length - 1,
        Math.max(0, Math.floor(Number(explicitPlaylist.playlistStart)) || 0));
    const selectedItem = playlistItems[playlistStart];
    currentMedia.video = selectedItem.url;
    currentMedia.title = selectedItem.title || document.title;
    currentMedia.playlistM3u = buildMpvM3uPlaylist(playlistItems);
    currentMedia.playlistStart = playlistStart;
    return { ...explicitPlaylist, playlistStart, syncTimeSafe: false };
}

const PARSER = {
    YOUTUBE: class Parser extends BaseParser {
        get handlesAuthenticationFallback() {
            return true;
        }
        get loadingTimeout() {
            return 25000;
        }
        async execute() {
            const parserConfig = currentConfig.global.parser.youtube;
            // YouTube 不读取页面 player response，也不使用网页会话认证。
            // 所有播放列表策略统一按 自动 Cookie → 已保存 Cookie → 匿名交给 yt-dlp。
            const authContext = await resolveSiteAuthentication('youtube', { includePage: false });
            await configureYoutubeMedia(parserConfig, authContext);
            await this.parseTime();
        }
        async parseTime() {
            try {
                // YouTube 页面可能同时存在广告、Shorts、迷你播放器或尚未初始化的隐藏 video。
                // 优先使用播放器 API，再读取 html5-main-video，最后才使用 URL 时间参数。
                for (let attempt = 0; attempt < 3; attempt++) {
                    const player = document.getElementById('movie_player');
                    const videoData = typeof player?.getVideoData === 'function' ? player.getVideoData() : undefined;
                    const isLive = Boolean(videoData?.isLive || videoData?.isLiveContent);
                    if (isLive) {
                        currentMedia.time = undefined;
                        return;
                    }

                    if (typeof player?.getCurrentTime === 'function') {
                        const playerTime = normalizePlaybackTime(player.getCurrentTime());
                        const duration = typeof player.getDuration === 'function' ? Number(player.getDuration()) : 0;
                        if (playerTime !== undefined && (playerTime > 0 || duration > 0)) {
                            currentMedia.time = playerTime;
                            return;
                        }
                    }

                    const playbackState = getBestVideoPlaybackState(document);
                    if (playbackState?.live) {
                        currentMedia.time = undefined;
                        return;
                    }
                    if (playbackState?.time !== undefined &&
                        (playbackState.time > 0 || playbackState.initialized)) {
                        currentMedia.time = playbackState.time;
                        return;
                    }
                    if (attempt < 2) {
                        await sleep(100);
                    }
                }

                currentMedia.time = getPlaybackTimeFromUrl(location.href);
            } catch (error) {
                console.error('获取 YouTube 开始时间失败', error);
                currentMedia.time = getPlaybackTimeFromUrl(location.href);
            }
        }
        async check() {
            return currentMedia.video ? true : false;
        }
    },
    YTDLP: class Parser extends BaseParser {
        async execute() {
            configureGenericYtdlpMedia(currentConfig.global.parser.ytdlp);
            await this.parseTime();
        }
        async check() {
            return currentMedia.video ? true : false;
        }
    },
    VIDEO: class Parser extends BaseParser {
        async execute() {
            await this.parseVideo();
            await this.parseTitle();
            await this.parseTime();
        }
        async parseVideo() {
            for (const video of document.getElementsByTagName('video')) {
                if (await this.check(video.src)) {
                    currentMedia.video = video.src;
                    return;
                }
            }
        }
        async check(video) {
            video = video ? video : currentMedia.video;
            return video && video.startsWith("http") ? true : false;
        }
    },
    URL: class Parser extends BaseParser {
        async execute() {
            await this.parseVideo();
            await this.parseTitle();
            await this.parseTime();
        }
        async parseVideo() {
            let urls = currentUrl.match(VIDEO_URL_REGEX_GLOBAL) || [];
            for (const url of urls) {
                if (await this.check(url)) {
                    currentMedia.video = url;
                    return;
                }
            }

            for (const iframe of document.getElementsByTagName('iframe')) {
                let urls = iframe.src.match(VIDEO_URL_REGEX_GLOBAL) || [];
                for (const url of urls) {
                    if (await this.check(url)) {
                        currentMedia.video = url;
                        return;
                    }
                }
            }
        }
    },
    HTML: class Parser extends BaseParser {
        async execute() {
            await this.parseVideo();
            await this.parseTitle();
            await this.parseTime();
        }
        async parseVideo() {
            let urls = document.body.innerHTML.match(VIDEO_URL_REGEX_GLOBAL) || [];
            for (const url of urls) {
                if (await this.check(url)) {
                    currentMedia.video = url;
                    return;
                }
            }
        }
    },
    SCRIPT: class Parser extends BaseParser {
        async execute() {
            await this.parseVideo();
            await this.parseTitle();
            await this.parseTime();
        }
        async parseVideo() {
            for (const script of document.scripts) {
                let urls = script.innerHTML.match(VIDEO_URL_REGEX_GLOBAL) || [];
                for (const url of urls) {
                    if (await this.check(url)) {
                        currentMedia.video = url;
                        return;
                    }
                }
            }
        }
    },
    REQUEST: class Parser extends BaseParser {
        constructor() {
            super();
            this.video = undefined;
            let that = this;
            const open = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
                if (!that.video) {
                    let urls = url.match(VIDEO_URL_REGEX_GLOBAL) || [];
                    for (const vurl of urls) {
                        that.check(vurl).check().then(
                            result => {
                                if (result === true) {
                                    that.video = vurl;
                                }
                            }
                        )
                    }

                }
                return open.apply(this, arguments);
            };

            const originalFetch = fetch;

            window.fetch = function (url, options) {
                return originalFetch(url, options).then(response => {
                    if (!that.video) {
                        let urls = url.match(VIDEO_URL_REGEX_GLOBAL) || [];
                        for (const vurl of urls) {
                            that.check(vurl).check().then(
                                result => {
                                    if (result === true) {
                                        that.video = vurl;
                                    }
                                }
                            )
                        }
                    }
                    return response;
                });
            };
        }
        async execute() {
            await this.parseTitle();
            await this.parseVideo();
            await this.parseReferer();
            await this.parseTime();
        }
        async parseVideo() {
            currentMedia.video = this.video;
        }
    },
    BILIBILI: class Parser extends BaseParser {
        get handlesAuthenticationFallback() {
            return true;
        }
        get loadingTimeout() {
            return 35000;
        }
        async execute() {
            const parserConfig = currentConfig.global.parser.bilibili;
            const usesPlaylist = ['collection', 'parts', 'playlist']
                .includes(parserConfig.preferredPlaylist);
            if (usesPlaylist) {
                const playlistContext = await configureBilibiliPlaylistMedia(parserConfig);
                if (playlistContext.syncTimeSafe) {
                    await this.parseTime();
                }
                return;
            }
            await this.parseTitle();
            const skippedSources = [];
            for (;;) {
                this.cookieContext = await resolveSiteAuthentication('bilibili', {
                    includePage: !skippedSources.includes('page'),
                    skipSources: skippedSources
                });
                try {
                    await this.parseVideo();
                    recordRequestAuthenticationResult('bilibili', this.cookieContext.source, true,
                        'Bilibili current-video request succeeded');
                    showBilibiliAuthenticationResult(this.cookieContext.source, true);
                    break;
                } catch (error) {
                    if (error?.bilibiliAuthenticationIndependent) {
                        throw error;
                    }
                    if (this.cookieContext.source === 'anonymous') {
                        throw error;
                    }
                    recordRequestAuthenticationResult('bilibili', this.cookieContext.source, false,
                        `Bilibili current-video request failed: ${String(
                            error.message || error).slice(0, 240)}`);
                    showBilibiliAuthenticationResult(this.cookieContext.source, false, true);
                    skippedSources.push(this.cookieContext.source);
                    currentMedia.video = undefined;
                    currentMedia.audio = undefined;
                    currentMedia.videos = [];
                    currentMedia.audios = [];
                    currentMedia.videoTracks = [];
                    currentMedia.audioTracks = [];
                }
            }
            await this.parseReferer();
            await this.parseTime();
        }
        async check() {
            return Boolean(currentMedia.video);
        }
        async parseVideo() {
            let videoInfo = undefined;
            if (currentUrl.startsWith('https://www.bilibili.com/bangumi/')) {
                videoInfo = await this.getVideoInfoByEpid();
            } else if (currentUrl.startsWith('https://www.bilibili.com/video/')) {
                videoInfo = await this.getVideoInfoByBvid();
            } else {
                videoInfo = await this.getVideoInfo();
            }

            if (!videoInfo || !videoInfo.aid || !videoInfo.cid) {
                throw new Error('can not find aid and cid');
            }

            const aid = videoInfo.aid;
            const cid = videoInfo.cid;
            const bvid = videoInfo.bvid;
            const epid = videoInfo.epid;
            const title = videoInfo.title;
            const codecid = currentConfig.global.parser.bilibili.preferredCodec;
            const quality = currentConfig.global.parser.bilibili.preferredQuality;
            const audioPreference = currentConfig.global.parser.bilibili.preferredAudio;

            currentMedia.bilibili.cid = cid;
            currentMedia.title = title ? title : currentMedia.title;
            const shouldLoadSubtitles = currentConfig.global.parser.bilibili.preferredSubtitle &&
                currentConfig.global.parser.bilibili.preferredSubtitle !== 'off';
            // 字幕失败不应让整套网页登录/Cookie 回退重新执行；同时与 DASH 解析并行，
            // 避免把两个互不依赖的接口串行等待。
            const subtitlePromise = shouldLoadSubtitles ?
                this.getSubtitles(aid, cid).catch(error => {
                    console.warn('Bilibili subtitle request failed:', error);
                    return [];
                }) : Promise.resolve([]);
            // MPV 明确支持独立 DASH 音轨；保留对自定义播放器事件的兼容探测。
            const supportsSeparateAudio = currentPlayer?.name === 'MPV' ||
                /media\.(?:audio|audios)/.test(currentPlayer?.playEvent || '');
            if (supportsSeparateAudio) {
                const [subtitles, dash] = await Promise.all([
                    subtitlePromise,
                    this.getDash(aid, bvid, cid, epid, codecid, quality, audioPreference)
                ]);
                currentMedia.subtitles = subtitles;
                currentMedia.subtitle = subtitles[0];
                if (dash) {
                    currentMedia.audio = dash.audio;
                    currentMedia.audios = dash.audios;
                    currentMedia.audioTracks = dash.audioTracks || [];
                    currentMedia.video = dash.video;
                    currentMedia.videos = dash.videos;
                    currentMedia.videoTracks = dash.videoTracks || [];
                    return;
                }
            }
            currentMedia.subtitles = await subtitlePromise;
            currentMedia.subtitle = currentMedia.subtitles[0];
            currentMedia.video = await this.getFlvOrMP4(aid, cid);
        }
        async parseTime() {
            const mainVideoSelectors = [
                '#bilibili-player video',
                '.bpx-player-container video',
                '.bpx-player-video-wrap video',
                '.bilibili-player-video video'
            ];
            let initializedTime;
            try {
                // B站没有稳定暴露给页面脚本的播放器时间 API；点播与番剧均以主 video 为准。
                // 重试可覆盖 SPA 切集、分P切换或播放器刚刚重建 video 的短暂窗口。
                for (let attempt = 0; attempt < 3; attempt++) {
                    const playbackState = getBestVideoPlaybackState(document, mainVideoSelectors);
                    if (playbackState?.live) {
                        currentMedia.time = undefined;
                        return;
                    }
                    if (playbackState?.time > 0) {
                        currentMedia.time = playbackState.time;
                        return;
                    }
                    if (playbackState?.initialized && playbackState.time !== undefined) {
                        initializedTime = playbackState.time;
                    }
                    if (attempt < 2) {
                        await sleep(100);
                    }
                }

                // 刚打开带 ?t= 的分享链接时，video 可能仍停在 0 秒，优先保留链接中的目标时间。
                const urlTime = getPlaybackTimeFromUrl(location.href);
                currentMedia.time = urlTime !== undefined ? urlTime : initializedTime;
            } catch (error) {
                console.error('获取 Bilibili 开始时间失败', error);
                currentMedia.time = getPlaybackTimeFromUrl(location.href);
            }
        }
        async getVideoInfo() {
            try {
                const initialState = __INITIAL_STATE__;
                if (!initialState) {
                    return;
                }
                const videoInfo = initialState.epInfo || initialState.videoData || initialState.videoInfo;
                const aid = videoInfo.aid;
                const page = initialState.p;
                let cid = videoInfo.cid;
                let title = videoInfo.title;
                if (page && page > 1) {
                    cid = initialState.cidMap[aid].cids[page];
                }

                return {
                    aid: aid,
                    bvid: videoInfo.bvid || initialState.bvid,
                    cid: cid,
                    title: title
                };
            } catch (error) {
                console.error(error.message);
            }
        }
        async getVideoInfoByBvid() {
            let param = undefined;
            const bvids = currentUrl.match(/(BV[0-9a-zA-Z]+)/);
            if (bvids && bvids[1]) {
                param = `bvid=${bvids[1]}`;
            } else {
                const avids = currentUrl.match(/av([0-9]+)/);
                if (avids && avids[1]) {
                    param = `aid=${avids[1]}`;
                }
            }

            if (!param) {
                throw new Error('can not find bvid or avid');
            }

            const response = await requestJsonWithCookieContext(
                `https://api.bilibili.com/x/web-interface/view?${param}`, this.cookieContext);

            if (response.code !== 0 || !response.data) {
                throw new Error(response.message || 'can not get bilibili video info');
            }

            let aid = response.data.aid;
            let cid = response.data.cid;
            const archiveTitle = response.data.title;
            let title = archiveTitle;

            // 分 p 视频
            const ps = currentUrl.match(/[?&]p=([^&]+)/);
            if (ps && response.data.pages.length > 1) {
                const p = Math.max(1, Math.floor(Number(ps[1])) || 1);
                const currentPage = response.data.pages[p - 1];
                if (currentPage) {
                    cid = currentPage.cid;
                    // MPV 播放列表需要同时保留稿件名和分 P 名，不能只显示 “Hi-Res AUDIO”。
                    title = makeBilibiliPlaylistTitle({
                        title: archiveTitle,
                        bvid: response.data.bvid,
                        pages: response.data.pages
                    }, {
                        page: p,
                        title: currentPage.part
                    });
                }
            }

            return {
                aid: aid,
                bvid: response.data.bvid,
                cid: cid,
                title: title
            };
        }
        getCurrentBangumiEpisodeId() {
            const pageWindow = getUserscriptPageWindow();
            const pageDocument = pageWindow?.document || document;
            const fromUrl = value => String(value || '').match(/(?:\/|^)ep(\d+)(?:[/?#]|$)/i)?.[1];
            const fromNumber = value => /^\d+$/.test(String(value || '')) ? String(value) : undefined;

            // /ep... 地址最直接；新版 /ss... 地址会把当前集写入 canonical/og:url。
            const urlCandidates = [
                currentUrl,
                pageWindow?.location?.href,
                pageDocument.querySelector('link[rel="canonical"]')?.href,
                pageDocument.querySelector('meta[property="og:url"]')?.content
            ];
            for (const value of urlCandidates) {
                const epid = fromUrl(value);
                if (epid) {
                    return epid;
                }
            }

            // 兼容旧页面与部分 SSR 页面；新版 React 页面可能不再提供这些全局对象。
            const initialState = pageWindow?.__INITIAL_STATE__;
            const nextPageProps = pageWindow?.__NEXT_DATA__?.props?.pageProps;
            const stateCandidates = [
                initialState?.epInfo?.id,
                initialState?.epInfo?.ep_id,
                initialState?.videoData?.ep_id,
                nextPageProps?.epInfo?.id,
                nextPageProps?.epInfo?.ep_id
            ];
            for (const value of stateCandidates) {
                const epid = fromNumber(value);
                if (epid) {
                    return epid;
                }
            }

            // CSS Modules 的完整类名会随构建变化，只判断 active/selected/current 语义。
            const episodeAnchors = [...pageDocument.querySelectorAll('a[href*="/bangumi/play/ep"]')];
            const activeAnchor = episodeAnchors.find(anchor => {
                const ariaCurrent = anchor.getAttribute('aria-current');
                const semanticClasses = [anchor, anchor.parentElement, anchor.parentElement?.parentElement]
                    .map(element => typeof element?.className === 'string' ? element.className : '')
                    .join(' ');
                return ariaCurrent === 'page' || ariaCurrent === 'true' ||
                    /active|selected|current/i.test(semanticClasses);
            });
            const activeEpid = fromUrl(activeAnchor?.href);
            if (activeEpid) {
                return activeEpid;
            }

            const legacySelected = pageDocument.querySelector(
                '.squirtle-pagelist-select-item.active, [data-ep-id][class*="active"], [data-epid][class*="active"]');
            return fromNumber(legacySelected?.dataset?.epId || legacySelected?.dataset?.epid ||
                legacySelected?.dataset?.value);
        }
        async getVideoInfoByEpid() {
            const epid = this.getCurrentBangumiEpisodeId();
            if (!epid) {
                throw createBilibiliMediaIdentityError('can not find current bilibili episode id');
            }

            const response = await requestJsonWithCookieContext(
                `https://api.bilibili.com/pgc/view/web/season?ep_id=${epid}`, this.cookieContext);
            if (response.code !== 0 || !response.result) {
                throw new Error(response.message || 'can not get bilibili episode info');
            }
            let section = response.result.section;
            if (!section) {
                section = new Array();
            }
            section.push({
                episodes: response.result.episodes
            });
            let currentEpisode;
            for (let i = section.length - 1; i >= 0; i--) {
                let episodes = section[i].episodes;
                for (const episode of episodes) {
                    if (episode.id == epid) {
                        currentEpisode = episode;
                        break;
                    }
                }
                if (currentEpisode) {
                    return {
                        aid: currentEpisode.aid,
                        bvid: currentEpisode.bvid,
                        cid: currentEpisode.cid,
                        epid: epid,
                        title: currentEpisode.share_copy
                    }
                }
            }
            throw createBilibiliMediaIdentityError('current episode is missing from bilibili season response');
        }
        getBilibiliDmParams() {
            const randomString = length => {
                const bytes = crypto.getRandomValues(new Uint8Array(length));
                return btoa(String.fromCharCode(...bytes)).replace(/=+$/g, '');
            };
            const width = Number(screen.width || 1920);
            const height = Number(screen.height || 1080);
            const imageRandom = Math.floor(Math.random() * 114);
            const offsetRandom = Math.floor(Math.random() * 514);
            const scrollTop = Math.max(10, Math.floor(window.scrollY || 0));
            return {
                dm_img_list: '[]',
                dm_img_str: randomString(24),
                dm_cover_img_str: randomString(48),
                dm_img_inter: JSON.stringify({
                    ds: [],
                    wh: [2 * width + 2 * height + 3 * imageRandom, 4 * width - height + imageRandom, imageRandom],
                    of: [3 * scrollTop + offsetRandom, 4 * scrollTop + 2 * offsetRandom, offsetRandom]
                })
            };
        }
        async getBilibiliWbiKey() {
            if (bilibiliWbiKeyCache && bilibiliWbiKeyCache.expires > Date.now()) {
                return bilibiliWbiKeyCache.key;
            }
            const response = await requestJsonWithCookieContext(
                'https://api.bilibili.com/x/web-interface/nav', this.cookieContext);
            const wbiImage = response?.data?.wbi_img;
            if (response.code !== 0 || !wbiImage?.img_url || !wbiImage?.sub_url) {
                throw new Error(response.message || 'can not get bilibili wbi key');
            }
            const fileKey = url => url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
            const source = fileKey(wbiImage.img_url) + fileKey(wbiImage.sub_url);
            const mixinKeyEncTable = [
                46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35,
                27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13,
                37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4,
                22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52
            ];
            const key = mixinKeyEncTable.map(index => source[index] || '').join('').slice(0, 32);
            if (key.length !== 32) {
                throw new Error('invalid bilibili wbi key');
            }
            bilibiliWbiKeyCache = {
                key: key,
                expires: Date.now() + 30 * 1000
            };
            return key;
        }
        async signBilibiliWbiParams(params) {
            const signedParams = {
                ...params,
                wts: Math.round(Date.now() / 1000)
            };
            const query = new URLSearchParams();
            Object.keys(signedParams).sort().forEach(key => {
                const value = signedParams[key];
                if (value !== undefined && value !== null) {
                    query.append(key, String(value).replace(/[!'()*]/g, ''));
                }
            });
            const key = await this.getBilibiliWbiKey();
            query.append('w_rid', md5(query.toString() + key));
            return query.toString();
        }
        getEmbeddedUgcDashResponse(cid) {
            if (this.cookieContext?.source !== 'page' ||
                !/\/video\/(?:BV|av)/i.test(location.pathname)) {
                return undefined;
            }
            const pageWindow = getUserscriptPageWindow();
            const pageDocument = pageWindow?.document || document;
            for (const script of pageDocument.scripts || []) {
                const source = String(script.textContent || '');
                if (!source.includes('__playinfo__')) {
                    continue;
                }
                const embedded = parseEmbeddedJsonAssignment(source, '__playinfo__');
                const data = embedded?.data;
                const embeddedCid = Number(data?.last_play_cid);
                if (embedded?.code === 0 && data?.dash &&
                    (!embeddedCid || embeddedCid === Number(cid))) {
                    return embedded;
                }
            }
            return undefined;
        }
        async getBangumiDashResponse(epid) {
            // 与 yt-dlp 的番剧提取顺序一致：页面 SSR 播放信息最接近当前网页认证状态，
            // 也不会因随后单独请求 playurl 时的风控/降级而偶发只剩一条音轨。
            const pageWindow = getUserscriptPageWindow();
            const pageDocument = pageWindow?.document || document;
            const pageEpisodeId = [
                pageWindow?.location?.href,
                pageDocument.querySelector('link[rel="canonical"]')?.href,
                pageDocument.querySelector('meta[property="og:url"]')?.content
            ].map(value => String(value || '').match(/\/ep(\d+)(?:[/?#]|$)/i)?.[1]).find(Boolean);
            if (String(pageEpisodeId || '') === String(epid)) {
                for (const script of pageDocument.scripts || []) {
                    if (!String(script.textContent || '').includes('playurlSSRData')) {
                        continue;
                    }
                    const embedded = parseEmbeddedJsonAssignment(script.textContent, 'playurlSSRData');
                    const normalized = normalizeBilibiliBangumiPlayInfo(embedded);
                    if (!normalized.premiumOnly && !normalized.previewOnly &&
                        normalized.statusCode === 0 && normalized.videoInfo?.dash) {
                        return { code: 0, data: normalized.videoInfo };
                    }
                }
            }

            const url = 'https://api.bilibili.com/pgc/player/web/v2/playurl?' + new URLSearchParams({
                fnval: '12240',
                ep_id: epid
            });
            const response = await requestJsonWithCookieContext(url, this.cookieContext, {
                // PGC v2 与 yt-dlp 当前实现一致，需要番剧播放页作为 Referer。
                headers: getBilibiliPageRequestHeaders()
            });
            const normalized = normalizeBilibiliBangumiPlayInfo(response);
            if (normalized.premiumOnly || normalized.previewOnly) {
                throw createBilibiliAuthenticationError(translation.requireLoginOrVip);
            }
            if (normalized.statusCode !== 0 || !normalized.videoInfo) {
                throw new Error(response?.message || normalized.playInfo?.message ||
                    'can not get bilibili bangumi playurl');
            }
            return {
                code: 0,
                data: normalized.videoInfo
            };
        }
        async getDashResponse(aid, bvid, cid, epid) {
            if (epid) {
                try {
                    return await this.getBangumiDashResponse(epid);
                } catch (error) {
                    // 试看或会员受限代表当前认证源没有拿到完整会员态，必须交给
                    // execute() 切换到自动 Cookie/已保存 Cookie，不能降级成 UGC 接口。
                    if (error?.bilibiliAuthenticationRejected) {
                        throw error;
                    }
                    console.warn('Bilibili PGC v2 playurl failed, use compatible endpoint:', error);
                }
            } else {
                // 新版视频页已内嵌当前分 P 的完整 __playinfo__。网页登录时直接复用它，
                // 可省去第二次 /nav(WBI) 与 playurl 请求，且登录态与网页播放器完全一致。
                const embedded = this.getEmbeddedUgcDashResponse(cid);
                if (embedded) {
                    return embedded;
                }
            }
            try {
                const params = {
                    ...(bvid ? { bvid: bvid } : { avid: aid }),
                    cid: cid,
                    qn: 127,
                    otype: 'json',
                    fourk: 1,
                    fnver: 0,
                    fnval: 4048,
                    ...this.getBilibiliDmParams()
                };
                const query = await this.signBilibiliWbiParams(params);
                const response = await requestJsonWithCookieContext(
                    `https://api.bilibili.com/x/player/wbi/playurl?${query}`, this.cookieContext);
                if (response.code === 0 && response.data) {
                    return response;
                }
                console.warn('Bilibili WBI playurl failed, use legacy endpoint:', response);
            } catch (error) {
                console.warn('Bilibili WBI playurl failed, use legacy endpoint:', error);
            }

            const legacyUrl = `https://api.bilibili.com/x/player/playurl?qn=127&otype=json&fourk=1&fnver=0&fnval=4048&avid=${aid}&cid=${cid}`;
            return requestJsonWithCookieContext(legacyUrl, this.cookieContext);
        }
        async getDash(aid, bvid, cid, epid, codecid, quality, audioPreference) {
            const response = await this.getDashResponse(aid, bvid, cid, epid);
            if (!response.data) {
                currentTryCount = MAX_TRY_COUNT;
                throw new Error(translation.requireLoginOrVip);
            }
            const dash = response.data.dash;
            if (!dash) {
                const directUrl = response.data.durl?.[0]?.url;
                return directUrl ? {
                    video: directUrl,
                    videos: [],
                    videoTracks: [],
                    audio: undefined,
                    audios: [],
                    audioTracks: []
                } : undefined;
            }

            const videoStreams = this.selectDashVideos(dash.video || [], quality, codecid);
            if (!videoStreams.length) {
                return undefined;
            }
            const qualityNames = this.getDashQualityNames(response.data);
            const dashDuration = Number(dash.duration);
            const responseDuration = Number(response.data.timelength) / 1000;
            const duration = dashDuration > 0 ? dashDuration :
                responseDuration > 0 ? responseDuration : undefined;
            const videoTracks = videoStreams.map(stream => ({
                url: this.getDashUrl(stream),
                title: this.getDashVideoTitle(stream, qualityNames),
                mediaType: 'video',
                codec: getBilibiliMpvVideoCodec(stream),
                width: Number(stream?.width),
                height: Number(stream?.height),
                fps: this.getDashFrameRate(stream),
                duration,
                byterate: Math.floor(Number(stream?.bandwidth || 0) / 8)
            })).filter(track => track.url).filter((track, index, tracks) =>
                tracks.findIndex(item => item.url === track.url) === index);
            const selectedVideoTracks = quality === 'mpv' ? videoTracks : videoTracks.slice(0, 1);
            const audioTracks = this.selectDashAudioTracks(dash, audioPreference)
                .map(track => ({ ...track, duration }));
            return {
                video: selectedVideoTracks[0]?.url,
                videos: selectedVideoTracks.slice(1).map(track => track.url),
                videoTracks: selectedVideoTracks,
                audio: audioTracks[0]?.url,
                audios: audioTracks.map(track => track.url),
                audioTracks
            };
        }
        getDashUrl(stream) {
            return stream ? stream.baseUrl || stream.base_url : undefined;
        }
        getDashFrameRate(stream) {
            const value = stream?.frameRate || stream?.frame_rate;
            if (typeof value === 'string' && value.includes('/')) {
                const [numerator, denominator] = value.split('/').map(Number);
                return denominator > 0 ? numerator / denominator : undefined;
            }
            return Number(value);
        }
        getDashQualityNames(data) {
            const names = new Map(Object.entries(BILIBILI_QUALITY_NAMES)
                .map(([quality, name]) => [Number(quality), name]));
            const supportFormats = Array.isArray(data?.support_formats) ? data.support_formats : [];
            for (const format of supportFormats) {
                const quality = Number(format?.quality);
                const name = format?.new_description || format?.display_desc || format?.description;
                if (Number.isFinite(quality) && name) {
                    names.set(quality, String(name));
                }
            }
            const qualities = Array.isArray(data?.accept_quality) ? data.accept_quality : [];
            const descriptions = Array.isArray(data?.accept_description) ? data.accept_description : [];
            qualities.forEach((quality, index) => {
                if (descriptions[index]) {
                    names.set(Number(quality), String(descriptions[index]));
                }
            });
            return names;
        }
        getDashVideoTitle(stream, qualityNames) {
            const quality = Number(stream?.id);
            const qualityName = qualityNames.get(quality) || BILIBILI_QUALITY_NAMES[quality] ||
                `${Number(stream?.height) || '?'}P`;
            const codecName = BILIBILI_CODEC_NAMES[Number(stream?.codecid)] ||
                String(stream?.codecs || '').split('.')[0].toUpperCase();
            return codecName ? `${qualityName} · ${codecName}` : qualityName;
        }
        selectBestDashCodec(videos, codecid) {
            const automaticPriority = [13, 12, 7];
            const codecPriority = codecid === 'auto' ? automaticPriority :
                [...new Set([Number(codecid), ...automaticPriority])];
            for (const codecId of codecPriority) {
                const candidates = videos.filter(video => Number(video.codecid) === codecId);
                if (candidates.length) {
                    return candidates.sort((a, b) => Number(b.bandwidth || 0) - Number(a.bandwidth || 0))[0];
                }
            }
            return videos.sort((a, b) => Number(b.bandwidth || 0) - Number(a.bandwidth || 0))[0];
        }
        selectDashVideos(videos, quality, codecid) {
            if (!videos.length) {
                return [];
            }

            // 自动选择和“全部载入”共用设置页中的拖拽顺序。
            const autoQualityPriority = getBilibiliQualityPriority(
                currentConfig.global.parser.bilibili);
            const normalQualityPriority = BILIBILI_NORMAL_QUALITY_PRIORITY;
            if (quality === 'mpv') {
                const availableQualityIds = [...new Set(videos.map(video => Number(video.id)))];
                const unknownQualityIds = availableQualityIds
                    .filter(id => !autoQualityPriority.includes(id))
                    .sort((a, b) => b - a);
                return [...autoQualityPriority, ...unknownQualityIds]
                    .filter(id => availableQualityIds.includes(id))
                    .map(id => this.selectBestDashCodec(videos.filter(video => Number(video.id) === id), codecid))
                    .filter(Boolean);
            }
            let qualityPriority;
            if (quality === 'auto') {
                qualityPriority = autoQualityPriority;
            } else {
                const preferredQuality = Number(quality);
                qualityPriority = normalQualityPriority.filter(item => item <= preferredQuality);
                if (!qualityPriority.includes(preferredQuality)) {
                    qualityPriority.unshift(preferredQuality);
                }
            }

            let candidates = [];
            for (const qualityId of qualityPriority) {
                candidates = videos.filter(video => Number(video.id) === qualityId);
                if (candidates.length) {
                    break;
                }
            }
            if (!candidates.length) {
                candidates = videos.slice();
            }

            const selected = this.selectBestDashCodec(candidates, codecid);
            return selected ? [selected] : [];
        }
        selectDashAudioTracks(dash, audioPreference) {
            const normalizeStreamList = value => Array.isArray(value) ? value.flat(Infinity).filter(Boolean) :
                value && typeof value === 'object' ? [value] : [];
            const sortByBandwidth = streams => streams
                .filter(stream => this.getDashUrl(stream))
                .sort((a, b) => Number(b.bandwidth || 0) - Number(a.bandwidth || 0));
            const dolby = sortByBandwidth(normalizeStreamList(dash?.dolby?.audio));
            const hiRes = sortByBandwidth(normalizeStreamList(dash?.flac?.audio));
            const standard = sortByBandwidth(normalizeStreamList(dash?.audio));

            // 当前网页 DASH 音频：杜比全景声、Hi-Res 无损、192K/132K/64K AAC。
            // 杜比与 Hi-Res 是两条独立音轨，不能合并；“全部载入 MPV”会将它们都交给 MPV 切换。
            const knownStandardIds = new Set([30280, 30232, 30216]);
            const otherStandard = standard.filter(stream => !knownStandardIds.has(Number(stream.id)));
            const groups = {
                dolby,
                hires: hiRes,
                '30280': standard.filter(stream => Number(stream.id) === 30280),
                '30232': standard.filter(stream => Number(stream.id) === 30232),
                '30216': standard.filter(stream => Number(stream.id) === 30216),
                other: otherStandard
            };
            const automaticPriority = getBilibiliAudioPriority(
                currentConfig.global.parser.bilibili);
            let streams;
            if (audioPreference === 'mpv') {
                streams = automaticPriority.flatMap(key => groups[key] || []);
            } else {
                const preferredPriority = audioPreference && audioPreference !== 'auto' ?
                    [audioPreference, ...automaticPriority.filter(key => key !== audioPreference)] : automaticPriority;
                const selectedGroup = preferredPriority.map(key => groups[key] || []).find(group => group.length);
                streams = selectedGroup ? [selectedGroup[0]] : otherStandard.length ? [otherStandard[0]] : [];
            }
            const getAudioTitle = stream => {
                if (dolby.includes(stream)) return '杜比全景声';
                if (hiRes.includes(stream)) return 'Hi-Res 无损';
                const standardNames = {
                    30280: '192K',
                    30232: '132K',
                    30216: '64K'
                };
                const id = Number(stream?.id);
                return standardNames[id] ||
                    (Number(stream?.bandwidth) > 0 ? `${Math.round(Number(stream.bandwidth) / 1000)}K` : `音频 ${id}`);
            };
            return streams.map(stream => ({
                url: this.getDashUrl(stream),
                title: getAudioTitle(stream),
                mediaType: 'audio',
                codec: getMpvAudioCodec(stream),
                samplerate: Number(stream?.sample_rate || stream?.sampling_rate),
                byterate: Math.floor(Number(stream?.bandwidth || 0) / 8)
            })).filter(track => track.url).filter((track, index, tracks) =>
                tracks.findIndex(item => item.url === track.url) === index);
        }
        selectDashAudios(dash, audioPreference) {
            return this.selectDashAudioTracks(dash, audioPreference).map(track => track.url);
        }
        async getFlvOrMP4(aid, cid) {
            const url = `https://api.bilibili.com/x/player/playurl?qn=120&otype=json&fourk=1&fnver=0&fnval=128&avid=${aid}&cid=${cid}`;
            const response = await requestJsonWithCookieContext(url, this.cookieContext);
            if (!response.data) {
                currentTryCount = MAX_TRY_COUNT;
                throw new Error(translation.requireLoginOrVip);
            }
            return response.data.durl[0].url;
        }
        async getSubtitles(avid, cid) {
            const url = `https://api.bilibili.com/x/player/wbi/v2?aid=${avid}&cid=${cid}`;
            const response = await requestJsonWithCookieContext(url, this.cookieContext);

            const subtitles = response?.data?.subtitle?.subtitles || [];
            if (response.code !== 0 || !subtitles.length) {
                return [];
            }
            const preference = currentConfig.global.parser.bilibili.preferredSubtitle;
            const normalizedLanguage = value => String(value || '').toLowerCase().replaceAll('_', '-');
            const languageGroup = subtitle => {
                const language = normalizedLanguage(subtitle.lan);
                const description = String(subtitle.lan_doc || '').toLowerCase();
                if (/^(?:zh-(?:hans|cn|sg)|zh)$/.test(language) || /简体|中文（简/.test(description)) return 'zh-Hans';
                if (/^zh-(?:hant|tw|hk|mo)$/.test(language) || /繁体|中文（繁/.test(description)) return 'zh-Hant';
                if (/^en(?:-|$)/.test(language) || /english|英语|英文/.test(description)) return 'en-US';
                return subtitle.lan || 'unknown';
            };
            const aiRank = subtitle => Number(subtitle.ai_type || subtitle.type || 0) === 0 ? 0 : 1;
            const languagePriorityMap = {
                'zh-Hans': ['zh-Hans', 'zh-Hant', 'en-US'],
                'zh-Hant': ['zh-Hant', 'zh-Hans', 'en-US'],
                'en-US': ['en-US', 'zh-Hans', 'zh-Hant']
            };
            const automaticPriority = currentConfig.global.language === 'zh' ?
                ['zh-Hans', 'zh-Hant', 'en-US'] : ['en-US', 'zh-Hans', 'zh-Hant'];
            const languagePriority = languagePriorityMap[preference] || automaticPriority;
            const ranked = subtitles
                .filter(subtitle => subtitle.subtitle_url && subtitle.lan)
                .map((subtitle, index) => ({
                    subtitle,
                    index,
                    group: languageGroup(subtitle)
                }))
                .sort((a, b) => {
                    const aLanguage = languagePriority.indexOf(a.group);
                    const bLanguage = languagePriority.indexOf(b.group);
                    const aRank = aLanguage === -1 ? languagePriority.length : aLanguage;
                    const bRank = bLanguage === -1 ? languagePriority.length : bLanguage;
                    return aRank - bRank || aiRank(a.subtitle) - aiRank(b.subtitle) || a.index - b.index;
                });
            const firstAvailableGroup = languagePriority.find(group => ranked.some(item => item.group === group));
            const selected = preference === 'mpv' ? ranked :
                ranked.filter(item => item.group === firstAvailableGroup).slice(0, 1);
            const fallback = selected.length ? selected : ranked.slice(0, 1);
            return fallback.map(item => {
                const subtitleUrl = item.subtitle.subtitle_url.startsWith('//') ?
                    `https:${item.subtitle.subtitle_url}` : item.subtitle.subtitle_url;
                return 'https://www.lckp.top/common/bilibili/jsonToSrt/?' + new URLSearchParams({
                    url: subtitleUrl,
                    lan: item.subtitle.lan
                });
            });
        }
    },
    BILIBILI_LIVE: class Parser extends BaseParser {
        get handlesAuthenticationFallback() {
            return true;
        }
        get loadingTimeout() {
            return 35000;
        }
        async execute() {
            const skippedSources = [];
            for (;;) {
                this.cookieContext = await resolveSiteAuthentication('bilibili', {
                    includePage: !skippedSources.includes('page'),
                    skipSources: skippedSources
                });
                try {
                    await this.parseVideo();
                    recordRequestAuthenticationResult('bilibili', this.cookieContext.source, true,
                        'Bilibili live request succeeded');
                    showBilibiliAuthenticationResult(this.cookieContext.source, true);
                    break;
                } catch (error) {
                    if (this.cookieContext.source === 'anonymous') {
                        throw error;
                    }
                    recordRequestAuthenticationResult('bilibili', this.cookieContext.source, false,
                        `Bilibili live request failed: ${String(
                            error.message || error).slice(0, 240)}`);
                    showBilibiliAuthenticationResult(this.cookieContext.source, false, true);
                    skippedSources.push(this.cookieContext.source);
                    currentMedia.video = undefined;
                    currentMedia.videos = [];
                    currentMedia.videoTracks = [];
                    currentMedia.audio = undefined;
                    currentMedia.audios = [];
                    currentMedia.audioTracks = [];
                }
            }
            await this.parseTitle();
            await this.parseOrigin();
            await this.parseReferer();
        }
        async parseVideo() {
            const roomids = currentUrl.match(
                /.*(roomid=|blanc\/|live.bilibili.com\/)(\d+).*/
            );
            const roomid = roomids ? roomids[2] : undefined;

            if (!roomid) {
                throw new Error('can not find roomid');
            }

            const parserConfig = currentConfig.global.parser.bilibiliLive;
            const legacyQualityMap = { '4': '10000', '3': '400', '2': '80' };
            const configuredQuality = legacyQualityMap[parserConfig.preferredQuality] ||
                parserConfig.preferredQuality || 'auto';
            const initialQuality = configuredQuality === 'auto' || configuredQuality === 'mpv' ?
                30000 : Number(configuredQuality);
            const initialResponse = await this.getRoomPlayInfo(roomid, initialQuality, false);
            const qualityNames = this.getLiveQualityNames(initialResponse);
            let videoTracks;

            if (configuredQuality === 'mpv') {
                const initialCandidates = this.getLiveCandidates(initialResponse);
                const acceptedQualities = [...new Set(initialCandidates.flatMap(candidate =>
                    [...candidate.acceptQn, candidate.qn]).filter(Number.isFinite))];
                const requestedQualities = this.sortLiveQualities(acceptedQualities);
                const responses = await Promise.all(requestedQualities.map(quality =>
                    quality === initialQuality ? initialResponse :
                        this.getRoomPlayInfo(roomid, quality, false)));
                videoTracks = responses.map((response, index) =>
                    this.getLiveTrack(response, requestedQualities[index], qualityNames))
                    .filter(Boolean)
                    .filter((track, index, tracks) => tracks.findIndex(item =>
                        item.qn === track.qn || item.url === track.url) === index)
                    .sort((a, b) => Number(b.qn) - Number(a.qn));
            } else {
                const selected = this.getLiveTrack(initialResponse, initialQuality, qualityNames);
                videoTracks = selected ? [selected] : [];
            }

            if (!videoTracks.length) {
                currentTryCount = MAX_TRY_COUNT;
                throw new Error(translation.liveNotAvailable);
            }
            // only_audio 在多数直播间仍返回 AVC/HEVC 音画合并流；只接受接口真正
            // 返回的非视频编码，避免把同一直播流伪装成独立音轨重复载入。
            let audioTracks = [];
            if (parserConfig.preferredAudio === 'mpv') {
                const audioResponse = await this.getRoomPlayInfo(roomid, initialQuality, true);
                audioTracks = this.getLiveCandidates(audioResponse)
                    .filter(candidate => !/^(?:avc|hevc|av1)$/i.test(candidate.codec))
                    .map(candidate => this.createLiveTrack(candidate, qualityNames, true))
                    .filter(Boolean)
                    .sort((a, b) => Number(b.bandwidth || 0) - Number(a.bandwidth || 0))
                    .filter((track, index, tracks) => tracks.findIndex(item => item.url === track.url) === index);
            }

            // 普通直播是音画合并流：只让最高画质立即打开以提供音频，其余画质
            // 延迟为 video-only。若接口真的给出独立音轨，则所有视频和音频都延迟打开。
            const hasSeparateAudio = audioTracks.length > 0;
            videoTracks = videoTracks.map((track, index) => ({
                ...track,
                mediaType: 'video',
                eager: !hasSeparateAudio && index === 0
            }));
            currentMedia.videoTracks = videoTracks;
            currentMedia.video = videoTracks[0].url;
            currentMedia.videos = videoTracks.slice(1).map(track => track.url);
            currentMedia.audioTracks = audioTracks;
            currentMedia.audio = audioTracks[0]?.url;
            currentMedia.audios = audioTracks.map(track => track.url);
        }
        async getRoomPlayInfo(roomid, quality, onlyAudio) {
            const url = 'https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo?' +
                new URLSearchParams({
                    room_id: roomid,
                    protocol: '0,1',
                    format: '0,1,2',
                    codec: '0,1',
                    qn: String(quality || 30000),
                    platform: 'web',
                    ptype: '8',
                    dolby: '5',
                    panorama: '1',
                    only_audio: onlyAudio ? '1' : '0',
                    no_playurl: '0'
                });
            return requestJsonWithCookieContext(url, this.cookieContext);
        }
        getLiveQualityNames(response) {
            const names = new Map(Object.entries(BILIBILI_LIVE_QUALITY_NAMES)
                .map(([quality, name]) => [Number(quality), name]));
            const playurl = response?.data?.playurl_info?.playurl;
            const descriptions = Array.isArray(playurl?.g_qn_desc) ? playurl.g_qn_desc :
                Array.isArray(playurl?.quality_description) ? playurl.quality_description : [];
            for (const description of descriptions) {
                const quality = Number(description?.qn);
                const detailedName = description?.media_base_desc?.detail_desc?.desc;
                const name = detailedName || description?.desc;
                if (Number.isFinite(quality) && name) {
                    names.set(quality, String(name));
                }
            }
            return names;
        }
        getLiveCandidates(response) {
            const streams = response?.data?.playurl_info?.playurl?.stream || [];
            const candidates = [];
            for (const stream of streams) {
                for (const format of stream.format || []) {
                    for (const codec of format.codec || []) {
                        if (!codec.base_url || !Array.isArray(codec.url_info)) {
                            continue;
                        }
                        candidates.push({
                            protocol: stream.protocol_name,
                            format: format.format_name,
                            codec: codec.codec_name,
                            qn: Number(codec.current_qn || 0),
                            acceptQn: (Array.isArray(codec.accept_qn) ? codec.accept_qn : [])
                                .map(Number).filter(Number.isFinite),
                            bandwidth: Number(codec.bandwidth || 0),
                            baseUrl: codec.base_url,
                            urlInfo: codec.url_info
                        });
                    }
                }
            }
            return candidates;
        }
        sortLiveQualities(qualities) {
            return [...new Set(qualities.map(Number).filter(Number.isFinite))]
                .sort((a, b) => b - a);
        }
        selectLiveCandidate(candidates, requestedQuality) {
            const protocolPriority = ['http_stream', 'http_hls'];
            const formatPriority = ['flv', 'fmp4', 'ts'];
            const codecPriority = ['hevc', 'avc'];
            const rank = (value, priority) => {
                const index = priority.indexOf(value);
                return index === -1 ? priority.length : index;
            };
            candidates.sort((a, b) => {
                const aExact = a.qn === Number(requestedQuality) ? 0 : 1;
                const bExact = b.qn === Number(requestedQuality) ? 0 : 1;
                return aExact - bExact || b.qn - a.qn ||
                    rank(a.protocol, protocolPriority) - rank(b.protocol, protocolPriority) ||
                    rank(a.format, formatPriority) - rank(b.format, formatPriority) ||
                    rank(a.codec, codecPriority) - rank(b.codec, codecPriority);
            });

            return candidates[0];
        }
        createLiveTrack(selected, qualityNames, audioOnly) {
            if (!selected) {
                return undefined;
            }
            const configuredLine = Number(currentConfig.global.parser.bilibiliLive.preferredLine || 0);
            const urlInfo = selected.urlInfo[configuredLine] || selected.urlInfo[0];
            if (!urlInfo || !urlInfo.host) {
                return undefined;
            }
            const codecName = String(selected.codec || '').toUpperCase();
            const mpvCodec = /^(?:avc|h264)$/i.test(selected.codec) ? 'h264' :
                /^(?:hevc|h265)$/i.test(selected.codec) ? 'hevc' :
                    /^(?:av1|av01)$/i.test(selected.codec) ? 'av1' : getMpvAudioCodec(selected);
            const qualityName = qualityNames.get(Number(selected.qn)) ||
                BILIBILI_LIVE_QUALITY_NAMES[Number(selected.qn)] || `${selected.qn}P`;
            return {
                url: `${urlInfo.host}${selected.baseUrl}${urlInfo.extra || ''}`,
                title: audioOnly ? `直播独立音频 · ${codecName || 'Audio'}` :
                    `${qualityName}${codecName ? ` · ${codecName}` : ''}`,
                mediaType: audioOnly ? 'audio' : 'video',
                codec: mpvCodec,
                byterate: Math.floor(Number(selected.bandwidth || 0) / 8),
                qn: Number(selected.qn),
                bandwidth: selected.bandwidth
            };
        }
        getLiveTrack(response, requestedQuality, qualityNames) {
            const selected = this.selectLiveCandidate(this.getLiveCandidates(response), requestedQuality);
            return this.createLiveTrack(selected, qualityNames, false);
        }
    },
    ANI_GAMER: class Parser extends BaseParser {
        async execute() {
            await this.parseVideo();
            await this.parseOrigin();
            await this.parseTitle();
            await this.parseTime();
        }
        async parseVideo() {
            let match = currentUrl.match(/[?&]sn=([^&]+)/);
            const sn = match ? match[1] : undefined;
            if (!sn) {
                return;
            }
            const device = localStorage.ANIME_deviceid;
            const url = `https://ani.gamer.com.tw/ajax/m3u8.php?sn=${sn}&device=${device}`;
            const response = await (await fetch(url, {
                method: 'GET',
                credentials: 'include'
            })).json();
            if (response.error && response.error.code === 1015) {
                throw new Error("請先跳過廣告后再嘗試");
            }
            currentMedia.video = response ? response.src : undefined;
        }
    },
    ANIME1: class Parser extends BaseParser {
        async execute() {
            await this.parseVideo();
            await this.parseTitle();
            await this.parseTime();
        }
        async parseVideo() {
            const anime1_api_url = 'https://v.anime1.me/api';
            const body = `d=${document.querySelector("video").getAttribute("data-apireq")}`;
            const response = await new Promise(res => {
                GM.xmlHttpRequest({
                    headers: {
                        "content-type": "application/x-www-form-urlencoded",
                    },
                    method: "POST",
                    url: anime1_api_url,
                    data: body,
                    onload: function (response) {
                        res(response);
                    }
                });
            });

            let cookies = [];
            let cookieLines = response.responseHeaders.match(/set-cookie:\s*([^;]*)/gi);
            if (cookieLines) {
                cookieLines.forEach(cookieStr => {
                    let [key, value] = cookieStr.replace(/set-cookie:\s*/i, "").split("=");
                    cookies.push(`${key}=${value}`);
                });
            }
            currentMedia.cookie = cookies.join("; ");

            const video = response?.responseText ? JSON.parse(response.responseText).s?. [0]?.src : undefined;
            currentMedia.video = video ? "https:" + video : undefined;
        }
    },
    IFRAME: class Parser extends BaseParser {
        async execute() {
            iframe.postMessage({
                name: PROJECT_NAME,
                method: 'execute'
            }, '*');
            await sleep(REFRESH_INTERVAL);
            await this.parseTitle();
        }
        async pause() {
            iframe.postMessage({
                name: PROJECT_NAME,
                method: 'pause'
            }, '*');
        }
        async check() {
            return currentMedia.video ? true : false;
        }
    }
};

function compress(str) {
    return btoa(String.fromCharCode(...pako.gzip(str)));
};

// MPVBridge uses UTF-8 plus URL-safe Base64. This avoids command-line quoting
// loss while keeping the custom-protocol URL free of reserved '+' and '/' bytes.
function encodeMpvBridgePayload(value) {
    const bytes = new TextEncoder().encode(String(value));
    const chunks = [];
    const chunkSize = 0x8000;
    for (let offset = 0; offset < bytes.length; offset += chunkSize) {
        chunks.push(String.fromCharCode(...bytes.subarray(offset, offset + chunkSize)));
    }
    return btoa(chunks.join(''))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/g, '');
}

function migrateMpvBridgePlayer(config) {
    const player = config?.players?.find(item => item?.name === 'MPV');
    if (!player) {
        return false;
    }
    if (player.playEvent === MPV_BRIDGE_PLAY_EVENT) {
        return false;
    }
    // 内置 MPV 项为只读配置；版本升级时统一迁移到带预检和回传的启动器。
    player.playEvent = MPV_BRIDGE_PLAY_EVENT;
    return true;
}

// 按 Windows CommandLineToArgvW 规则引用单个参数，避免标题或 URL 中的引号破坏 MPV 命令行。
function quoteMpvArgument(value) {
    const escaped = String(value ?? '')
        .replace(/[\r\n]+/g, ' ')
        .replace(/(\\*)"/g, '$1$1\\"')
        .replace(/(\\+)$/g, '$1$1');
    return `"${escaped}"`;
}

// MPV 的 memory:// 播放列表需要保留换行；其余转义仍遵循 CommandLineToArgvW。
function quoteMpvMultilineArgument(value) {
    const escaped = String(value ?? '')
        .replace(/\r/g, '')
        .replace(/(\\*)"/g, '$1$1\\"')
        .replace(/(\\+)$/g, '$1$1');
    return `"${escaped}"`;
}

function escapeMpvEdlValue(value) {
    const text = String(value ?? '');
    return `%${new TextEncoder().encode(text).length}%${text}`;
}

function buildMpvNamedTrackEdl(videoTracks, audioTracks) {
    const normalizeTracks = tracks => (Array.isArray(tracks) ? tracks : [])
        .map(track => typeof track === 'string' ? { url: track, title: '' } : track)
        .filter(track => track?.url)
        .filter((track, index, items) => items.findIndex(item => item.url === track.url) === index);
    const videos = normalizeTracks(videoTracks);
    const audios = normalizeTracks(audioTracks);
    if (!videos.length) {
        return undefined;
    }

    const streams = [];
    const appendTrack = (track, isDefault) => {
        const headers = [];
        if (streams.length) {
            headers.push('!new_stream');
        }
        headers.push('!no_clip');
        if (track.mediaType && track.eager !== true) {
            const delayProperties = [`media_type=${track.mediaType === 'audio' ? 'audio' : 'video'}`];
            const codec = String(track.codec || '').match(/^[A-Za-z0-9_.-]+$/)?.[0];
            if (codec) {
                delayProperties.push(`codec=${codec}`);
            }
            const addPositiveInteger = (name, value) => {
                const number = Math.round(Number(value));
                if (Number.isFinite(number) && number > 0) {
                    delayProperties.push(`${name}=${number}`);
                }
            };
            if (track.mediaType === 'audio') {
                addPositiveInteger('samplerate', track.samplerate);
            } else {
                addPositiveInteger('w', track.width);
                addPositiveInteger('h', track.height);
                addPositiveInteger('fps', track.fps);
            }
            headers.push(`!delay_open,${delayProperties.join(',')}`);
        }
        const title = track.title ? `,title=${escapeMpvEdlValue(track.title)}` : '';
        const byterateValue = Math.floor(Number(track.byterate));
        const byterate = Number.isFinite(byterateValue) && byterateValue > 0 ?
            `,byterate=${byterateValue}` : '';
        const flags = isDefault ? ',flags=default' : '';
        headers.push(`!track_meta${title}${byterate}${flags}`);
        const durationValue = Number(track.duration);
        const duration = Number.isFinite(durationValue) && durationValue > 0 ?
            `,length=${durationValue}` : '';
        headers.push(`${escapeMpvEdlValue(track.url)}${duration}`);
        streams.push(headers.join(';'));
    };
    videos.forEach((track, index) => appendTrack(track, index === 0));
    audios.forEach((track, index) => appendTrack(track, index === 0));
    return `edl://${streams.join(';')}`;
}

function buildMpvM3uPlaylist(items) {
    const lines = ['#EXTM3U'];
    for (const item of items || []) {
        const url = String(item?.url || '').replace(/[\r\n]+/g, '').trim();
        if (!url) {
            continue;
        }
        const title = String(item?.title || url).replace(/[\r\n]+/g, ' ').trim();
        lines.push(`#EXTINF:-1,${title}`, url);
    }
    return lines.length > 1 ? lines.join('\n') : undefined;
}

function redactMpvArguments(args) {
    return (args || []).map(argument =>
        /cookie\s*:|mpvbridge-ytdl-cookie-jar|mpvbridge-session/i.test(String(argument)) ?
            '[Cookie argument redacted]' : argument);
}

const MPV_BRIDGE_STATUS_KEY = 'external-player-mpvbridge-status-v1';
const MPV_BRIDGE_PORT_BASE = 42000;
const MPV_BRIDGE_PORT_COUNT = 1000;

function createMpvBridgeSession(media) {
    const bytes = new Uint8Array(16);
    if (globalThis.crypto?.getRandomValues) {
        globalThis.crypto.getRandomValues(bytes);
    } else {
        for (let index = 0; index < bytes.length; index++) {
            bytes[index] = Math.floor(Math.random() * 256);
        }
    }
    const token = [...bytes].map(value => value.toString(16).padStart(2, '0')).join('');
    let hash = 2166136261;
    for (const character of token) {
        hash = Math.imul(hash ^ character.charCodeAt(0), 16777619) >>> 0;
    }
    const hostname = location.hostname.toLowerCase();
    const site = /(?:^|\.)bilibili\.com$/.test(hostname) ? 'bilibili' :
        /(?:^|\.)youtube(?:-nocookie)?\.com$/.test(hostname) ? 'youtube' : 'other';
    const ytdlpSources = [
        media?.video,
        media?.playlistM3u,
        ...(Array.isArray(media?.playlist) ? media.playlist : [])
    ];
    return {
        token,
        port: MPV_BRIDGE_PORT_BASE + hash % MPV_BRIDGE_PORT_COUNT,
        site,
        pageIdentity: getPlaybackPageIdentity(location.href),
        playlistStart: Math.max(0, Math.floor(Number(media?.playlistStart)) || 0),
        cookieJar: String(media?.ytdlp?.cookieJar || ''),
        authSource: String(media?.ytdlp?.authSource || 'anonymous'),
        usesYtdlp: ytdlpSources.some(source => /ytdl:\/\//i.test(String(source || ''))),
        startedAt: Date.now()
    };
}

function getPlaybackPageIdentity(url) {
    try {
        const value = String(url || '').replace(/^ytdl:\/\//, '');
        const parsed = new URL(value, location.href);
        if (/(?:^|\.)bilibili\.com$/i.test(parsed.hostname)) {
            const episode = parsed.pathname.match(/\/ep(\d+)/i)?.[1];
            if (episode) return `bilibili:ep${episode}`;
            const bvid = parsed.pathname.match(/(BV[0-9A-Za-z]+)/)?.[1];
            if (bvid) return `bilibili:${bvid}:p${Math.max(1, Number(parsed.searchParams.get('p')) || 1)}`;
        }
        if (/(?:^|\.)youtube(?:-nocookie)?\.com$|youtu\.be$/i.test(parsed.hostname)) {
            const videoId = parsed.hostname === 'youtu.be' ? parsed.pathname.split('/').filter(Boolean)[0] :
                parsed.searchParams.get('v') || parsed.pathname.match(/\/(?:shorts|live|embed)\/([^/?]+)/)?.[1];
            if (videoId) return `youtube:${videoId}`;
        }
    } catch (error) {
        return '';
    }
    return '';
}

function requestMpvBridgeStatus(session) {
    return new Promise((resolve, reject) => {
        GM.xmlHttpRequest({
            method: 'GET',
            url: `http://127.0.0.1:${session.port}/v1/session/${session.token}`,
            anonymous: true,
            timeout: 1500,
            headers: { Accept: 'application/json' },
            onload: response => {
                if (response.status !== 200) {
                    reject(new Error(`HTTP ${response.status}`));
                    return;
                }
                try {
                    resolve(JSON.parse(response.responseText));
                } catch (error) {
                    reject(error);
                }
            },
            onerror: () => reject(new Error('MPVBridge feedback is not ready')),
            ontimeout: () => reject(new Error('MPVBridge feedback timeout'))
        });
    });
}

function uploadMpvBridgeCookieJar(session) {
    return new Promise((resolve, reject) => {
        GM.xmlHttpRequest({
            method: 'POST',
            url: `http://127.0.0.1:${session.port}/v1/session/${session.token}/cookie`,
            anonymous: true,
            timeout: 5000,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
            data: session.cookieJar,
            onload: response => {
                if (response.status >= 200 && response.status < 300) {
                    resolve();
                } else {
                    reject(new Error(`Cookie upload HTTP ${response.status}`));
                }
            },
            onerror: () => reject(new Error('MPVBridge Cookie upload failed')),
            ontimeout: () => reject(new Error('MPVBridge Cookie upload timeout'))
        });
    });
}

function syncWebsitePlaybackProgress(session, snapshot) {
    const playback = snapshot?.playback;
    const time = Number(playback?.timePos);
    if (!Number.isFinite(time) || time < 0 ||
        getPlaybackPageIdentity(location.href) !== session.pageIdentity) {
        return;
    }
    const playlistPosition = Math.floor(Number(playback?.playlistPos));
    const detail = {
        time,
        duration: Number.isFinite(Number(playback.duration)) ? Number(playback.duration) : undefined,
        playlistPosition: Number.isFinite(playlistPosition) && playlistPosition >= 0 ?
            playlistPosition : undefined,
        paused: playback.pause === true,
        title: playback.mediaTitle || '',
        phase: snapshot.phase
    };
    try {
        sessionStorage.setItem('external-player-mpvbridge-progress', JSON.stringify(detail));
        document.dispatchEvent(new CustomEvent('external-player-mpvbridge:mpv-progress', { detail }));
    } catch (error) {
        // Storage or cross-world CustomEvent may be unavailable; page sync can still continue.
    }

    // Every playlist position is published to the website. Only seek the
    // visible web player while MPV is still on the item that launched it.
    if (Number.isFinite(playlistPosition) && playlistPosition >= 0 &&
        playlistPosition !== session.playlistStart) {
        return;
    }

    try {
        const pageWindow = getUserscriptPageWindow();
        if (session.site === 'youtube') {
            const player = pageWindow?.document?.getElementById('movie_player');
            const pageTime = typeof player?.getCurrentTime === 'function' ? Number(player.getCurrentTime()) : NaN;
            if (typeof player?.seekTo === 'function' && (!Number.isFinite(pageTime) || Math.abs(pageTime - time) >= 2)) {
                player.seekTo(time, true);
            }
        } else if (session.site === 'bilibili') {
            const state = getBestVideoPlaybackState(document, [
                '#bilibili-player video', '.bpx-player-container video', '.bpx-player-video-wrap video'
            ]);
            const video = state?.video;
            if (video && Math.abs(Number(video.currentTime || 0) - time) >= 2) {
                const duration = Number(video.duration);
                video.currentTime = Number.isFinite(duration) && duration > 0 ?
                    Math.min(time, Math.max(0, duration - 0.1)) : time;
            }
        }
    } catch (error) {
        console.warn('MPV progress could not be synchronized to the webpage:', error);
    }
}

function getMpvBridgeResultLabels(session) {
    const zh = currentConfig?.global?.language === 'zh';
    const site = session.site === 'bilibili' ? 'Bilibili' :
        session.site === 'youtube' ? 'YouTube' : 'MPV';
    const sourceLabels = zh ? {
        page: '网页请求', automatic: '自动 Cookie', file: '已保存 Cookie', anonymous: '匿名'
    } : {
        page: 'Page request', automatic: 'Automatic Cookie', file: 'Saved Cookie', anonymous: 'Anonymous'
    };
    return { zh, site, source: sourceLabels[session.authSource] || sourceLabels.anonymous };
}

function recordSuccessfulYtdlpAuthentication(session) {
    if (!['bilibili', 'youtube'].includes(session.site) ||
        !['automatic', 'file'].includes(session.authSource)) {
        return;
    }
    setAuthMethodStatus(session.site, session.authSource, 'available',
        'yt-dlp preflight succeeded for the current media');
}

function getAuthenticationSourcesThrough(site, source) {
    // MPVBridge/yt-dlp 只接收显式 Cookie；网页会话只在 B站原生解析器内使用。
    const order = ['automatic', 'file', 'anonymous'];
    const index = order.indexOf(source);
    return index >= 0 ? order.slice(0, index + 1) : [source];
}

function recordFailedYtdlpAuthentication(session, error) {
    if (!['bilibili', 'youtube'].includes(session.site) ||
        !['automatic', 'file'].includes(session.authSource)) {
        return;
    }
    const detail = String(error || 'MPV/yt-dlp extraction failed for the current media');
    const explicitlyInvalid = /no longer valid|rotat(?:ed|ing)|expired|not logged|LOGIN_INFO/i.test(detail);
    setAuthMethodStatus(session.site, session.authSource,
        explicitlyInvalid ? 'invalid' : 'unverified', detail.slice(0, 300));
}

async function retryMpvBridgeWithNextAuthentication(session, retryContext, error) {
    if (!retryContext || !['bilibili', 'youtube'].includes(session.site)) {
        return false;
    }
    const attempted = new Set(retryContext.attemptedAuthSources || []);
    attempted.add(session.authSource);
    recordFailedYtdlpAuthentication(session, error);
    const next = await resolveSiteAuthentication(session.site, {
        includePage: false,
        skipSources: [...attempted]
    });
    if (!next || attempted.has(next.source)) {
        return false;
    }

    const nextMedia = {
        ...retryContext.media,
        ytdlp: {
            ...retryContext.media.ytdlp,
            authSource: next.source,
            cookieJar: next.cookieJar || undefined
        }
    };
    const labels = getMpvBridgeResultLabels({ ...session, authSource: next.source });
    showToast(labels.zh ?
        `${labels.site}｜上一认证播放失败，正在尝试：${labels.source}` :
        `${labels.site} | Previous authenticated playback failed; trying: ${labels.source}`);
    launchMpvBridge(nextMedia, retryContext.config, retryContext.playerName,
        [...attempted, next.source]);
    return true;
}

async function monitorMpvBridgeSession(session, retryContext) {
    let received = false;
    let cookieUploaded = !session.cookieJar;
    let announcedPreflight = '';
    let announcedIpc = '';
    let terminalErrorAnnounced = false;
    let lastPlaybackUpdatedAt = 0;
    let lastStoredAt = 0;
    const deadline = Date.now() + 12 * 60 * 60 * 1000;
    while (Date.now() < deadline) {
        try {
            const snapshot = await requestMpvBridgeStatus(session);
            received = true;
            if (!cookieUploaded) {
                await uploadMpvBridgeCookieJar(session);
                cookieUploaded = true;
                session.cookieJar = '';
            }
            if (Date.now() - lastStoredAt >= 3000 || ['error', 'ended'].includes(snapshot.phase)) {
                GM_setValue(MPV_BRIDGE_STATUS_KEY, snapshot);
                lastStoredAt = Date.now();
            }
            const preflightStatus = snapshot?.preflight?.status || '';
            if (preflightStatus && preflightStatus !== announcedPreflight) {
                announcedPreflight = preflightStatus;
                const labels = getMpvBridgeResultLabels(session);
                if (preflightStatus === 'ok') {
                    const format = snapshot.preflight.formatId || snapshot.preflight.resolution || '';
                    recordSuccessfulYtdlpAuthentication(session);
                    showToast(labels.zh ?
                        `${labels.site}｜认证：${labels.source}｜yt-dlp 预检成功${format ? `｜格式：${format}` : ''}` :
                        `${labels.site} | Auth: ${labels.source} | yt-dlp preflight passed${format ? ` | Format: ${format}` : ''}`);
                } else if (preflightStatus === 'failed') {
                    const error = String(snapshot.preflight.error || '').slice(0, 180);
                    if (await retryMpvBridgeWithNextAuthentication(
                        session, retryContext, snapshot.preflight.error || '')) {
                        return;
                    }
                    terminalErrorAnnounced = true;
                    recordFailedYtdlpAuthentication(session, error);
                    showToast(labels.zh ?
                        `${labels.site}｜认证：${labels.source}｜yt-dlp 预检失败：${error}` :
                        `${labels.site} | Auth: ${labels.source} | yt-dlp preflight failed: ${error}`);
                } else if (preflightStatus === 'skipped') {
                    const delegatedToMpv = /delegates extraction directly/i.test(
                        String(snapshot.preflight.error || ''));
                    showToast(labels.zh ?
                        `${labels.site}｜认证：${labels.source}｜${delegatedToMpv ?
                            '直接启动 MPV（不重复预检）' : '页面直连'}` :
                        `${labels.site} | Auth: ${labels.source} | ${delegatedToMpv ?
                            'Launch MPV directly (no duplicate preflight)' : 'Direct page stream'}`);
                }
            }
            const ipcStatus = snapshot?.ipc?.status || '';
            if (ipcStatus && ipcStatus !== announcedIpc) {
                announcedIpc = ipcStatus;
                if (ipcStatus === 'failed') {
                    showToast(`MPV JSON IPC 连接失败: ${String(snapshot.ipc.error || '').slice(0, 180)}`);
                }
            }
            const playbackUpdatedAt = Number(snapshot?.playback?.updatedAt || 0);
            if ((session.site === 'bilibili' || session.site === 'youtube') &&
                playbackUpdatedAt > 0 && playbackUpdatedAt !== lastPlaybackUpdatedAt) {
                lastPlaybackUpdatedAt = playbackUpdatedAt;
                syncWebsitePlaybackProgress(session, snapshot);
            }
            if (snapshot.phase === 'error') {
                if (!terminalErrorAnnounced) {
                    showToast(`MPVBridge: ${String(snapshot.error || '启动失败').slice(0, 180)}`);
                }
                return;
            }
            if (snapshot.phase === 'ended') {
                const exitCode = Number(snapshot.exitCode);
                // 普通播放不再为同一地址事前重复运行 yt-dlp。若 MPV 确实以
                // 非零错误码结束，才按既定顺序切换 Cookie 来源重试；正常关闭
                // （退出码 0）不会触发新的播放器窗口。
                if (session.usesYtdlp && Number.isFinite(exitCode) && exitCode !== 0 &&
                    await retryMpvBridgeWithNextAuthentication(
                        session, retryContext, `MPV/yt-dlp exited with code ${exitCode}`)) {
                    return;
                }
                return;
            }
        } catch (error) {
            if (received) {
                console.warn('MPVBridge feedback connection was interrupted:', error);
            }
        }
        await sleep(received ? 1000 : 250);
    }
}

function launchMpvBridge(media, config, playerName, attemptedAuthSources) {
    const session = createMpvBridgeSession(media);
    const args = buildMpvLaunchArguments(media, config, session);
    console.log(redactMpvArguments(args));
    const retryContext = {
        media,
        config,
        playerName,
        attemptedAuthSources: attemptedAuthSources ||
            getAuthenticationSourcesThrough(session.site, session.authSource)
    };
    monitorMpvBridgeSession(session, retryContext).catch(error =>
        console.warn('MPVBridge feedback monitor stopped:', error));
    window.open(`mpvbridge://${playerName}?${encodeMpvBridgePayload(args.join(' '))}`, '_self');
}

function buildMpvNativePlaylistArguments(media) {
    const entries = (Array.isArray(media.playlistEntries) ? media.playlistEntries : [])
        .filter(entry => entry?.video);
    if (!entries.length) {
        return [];
    }
    const playlistStart = Math.min(entries.length - 1,
        Math.max(0, Math.floor(Number(media.playlistStart)) || 0));
    return entries.flatMap((entry, index) => {
        const namedTrackEdl = buildMpvNamedTrackEdl(entry.videoTracks, entry.audioTracks);
        const videoFiles = [...new Set(Array.isArray(entry.videos) ? entry.videos : [])]
            .filter(video => video && video !== entry.video);
        const audioFiles = [...new Set(
            Array.isArray(entry.audios) && entry.audios.length ? entry.audios :
                entry.audio ? [entry.audio] : []
        )].filter(Boolean);
        const subtitleFiles = [...new Set(Array.isArray(entry.subtitles) ? entry.subtitles : [])]
            .filter(Boolean);
        return [
            '--{',
            quoteMpvArgument(namedTrackEdl || entry.video),
            ...(!namedTrackEdl ? videoFiles.map(video => `--external-file=${quoteMpvArgument(video)}`) : []),
            ...(!namedTrackEdl ? audioFiles.map(audio => `--audio-file=${quoteMpvArgument(audio)}`) : []),
            ...subtitleFiles.map(subtitle => `--sub-file=${quoteMpvArgument(subtitle)}`),
            entry.cid ? `--script-opts-append=${quoteMpvArgument('cid=' + entry.cid)}` : '',
            entry.title ? `--force-media-title=${quoteMpvArgument(entry.title)}` : '',
            index === playlistStart && media.time ? `--start=${quoteMpvArgument(media.time)}` : '',
            '--}'
        ].filter(Boolean);
    });
}

function buildMpvLaunchArguments(media, config, bridgeSession) {
    const nativePlaylistArguments = buildMpvNativePlaylistArguments(media);
    const hasNativePlaylist = nativePlaylistArguments.length > 0;
    const playlistFiles = [...new Set(Array.isArray(media.playlist) ? media.playlist : [])].filter(Boolean);
    const namedTrackEdl = buildMpvNamedTrackEdl(media.videoTracks, media.audioTracks);
    const primaryVideo = namedTrackEdl || media.video || playlistFiles[0];
    const videoFiles = [...new Set(Array.isArray(media.videos) ? media.videos : [])]
        .filter(video => video && video !== media.video);
    const audioFiles = [...new Set(
        Array.isArray(media.audios) && media.audios.length ? media.audios : media.audio ? [media.audio] : []
    )].filter(Boolean);
    const subtitleFiles = [...new Set(
        Array.isArray(media.subtitles) && media.subtitles.length ? media.subtitles :
            media.subtitle ? [media.subtitle] : []
    )].filter(Boolean);
    const memoryPlaylist = media.playlistM3u ? `memory://${media.playlistM3u}` : undefined;
    const playlistStart = Math.max(0, Math.floor(Number(media.playlistStart)) || 0);
    const usesNamedTrackEdl = Boolean(namedTrackEdl) ||
        (Array.isArray(media.playlistEntries) && media.playlistEntries.some(entry =>
            Array.isArray(entry?.videoTracks) && entry.videoTracks.length));

    return [
        bridgeSession ? `--mpvbridge-session=${bridgeSession.token}` : '',
        bridgeSession ? `--mpvbridge-feedback-port=${bridgeSession.port}` : '',
        bridgeSession ? '--mpvbridge-preflight=1' : '',
        // 0 的含义是禁用强制终止超时，会让失去响应的远程 demuxer 无限等待。
        // 保留 MPV 的短非零默认值，使认证 CDN 或外置轨道可被及时中断。
        '--demuxer-termination-timeout=0.1',
        // mpv-Yaozhi 的 thumbfast 在 network=yes 时会把整条多轨 EDL 再交给一个
        // --idle/--keep-open 子 MPV。主进程退出会等待这个远程缩略图进程，表现为
        // 窗口关闭卡死；仅对本脚本发起的网络播放禁用该缩略图子进程。
        '--script-opts-append=thumbfast-network=no',
        // 旧版本曾把超长命名 EDL 写入 recent.json；yt-dlp 普通 URL 与这些旧记录
        // 做逐字符相似度比较也会拖慢退出。网页播放保留最近记录，但关闭系列相似比较。
        '--script-opts-append=recentmenu-ignore_same_series=no',
        // recentmenu 会把多轨命名 EDL（含多条长签名 URL）当作文件路径，并在
        // 退出时执行二次复杂度的相似度比较。仅在使用命名 EDL 时跳过本次记录，
        // 轨道名称与高→低顺序保持不变，也避免把临时认证地址写入历史文件。
        usesNamedTrackEdl ? '--script-opts-append=recentmenu-enabled=no' : '',
        ...(hasNativePlaylist ? nativePlaylistArguments : [
            memoryPlaylist ? `--playlist=${quoteMpvMultilineArgument(memoryPlaylist)}` : quoteMpvArgument(primaryVideo)
        ]),
        ...(!hasNativePlaylist && !memoryPlaylist ? playlistFiles.filter(video => video !== primaryVideo)
            .map(video => quoteMpvArgument(video)) : []),
        (hasNativePlaylist || memoryPlaylist || playlistStart > 0) ? `--playlist-start=${playlistStart}` : '',
        ...(!hasNativePlaylist && !namedTrackEdl ?
            videoFiles.map(video => `--external-file=${quoteMpvArgument(video)}`) : []),
        ...(!hasNativePlaylist && !namedTrackEdl ?
            audioFiles.map(audio => `--audio-file=${quoteMpvArgument(audio)}`) : []),
        ...(!hasNativePlaylist ? subtitleFiles.map(subtitle => `--sub-file=${quoteMpvArgument(subtitle)}`) : []),
        media.origin ? `--http-header-fields-append=${quoteMpvArgument('Origin: ' + media.origin)}` : '',
        media.referer ? `--http-header-fields-append=${quoteMpvArgument('Referer: ' + media.referer)}` : '',
        media.cookie ? `--http-header-fields-append=${quoteMpvArgument('Cookie: ' + media.cookie)}` : '',
        config.networkProxy ? `--http-proxy=${quoteMpvArgument(config.networkProxy)}` : '',
        media.ytdlp.cookieJar ? '--mpvbridge-cookie-transfer=1' : '',
        media.ytdlp.trackLabelSite ? '--mpvbridge-ytdl-label-script=1' : '',
        media.ytdlp.trackLabelSite ?
            `--script-opts-append=${quoteMpvArgument(
                'external_player_ytdl_labels-site=' + media.ytdlp.trackLabelSite)}` : '',
        media.ytdlp.rawOptions ? `--ytdl-raw-options=${quoteMpvArgument(media.ytdlp.rawOptions)}` : '',
        media.ytdlp.format ? `--ytdl-format=${quoteMpvArgument(media.ytdlp.format)}` : '',
        typeof media.ytdlp.allFormats === 'boolean' ?
            `--script-opts-append=${quoteMpvArgument('ytdl_hook-all_formats=' + (media.ytdlp.allFormats ? 'yes' : 'no'))}` : '',
        typeof media.ytdlp.forceAllFormats === 'boolean' ?
            `--script-opts-append=${quoteMpvArgument('ytdl_hook-force_all_formats=' + (media.ytdlp.forceAllFormats ? 'yes' : 'no'))}` : '',
        media.ytdlp.preferFirstVideo ? '--vid=1' : '',
        media.ytdlp.preferFirstAudio ? '--aid=1' : '',
        media.ytdlp.subtitleLanguages ? `--slang=${quoteMpvArgument(media.ytdlp.subtitleLanguages)}` : '',
        media.ytdlp.subtitlesEnabled === false ? '--sid=no' : '',
        !hasNativePlaylist && media.bilibili.cid ?
            `--script-opts-append=${quoteMpvArgument('cid=' + media.bilibili.cid)}` : '',
        !hasNativePlaylist && !memoryPlaylist && media.title ?
            `--force-media-title=${quoteMpvArgument(media.title)}` : '',
        !hasNativePlaylist && media.time ? `--start=${quoteMpvArgument(media.time)}` : '',
    ].filter(item => item !== '');
}

function md5(value) {
    const input = new TextEncoder().encode(String(value));
    const paddedLength = Math.ceil((input.length + 9) / 64) * 64;
    const buffer = new Uint8Array(paddedLength);
    buffer.set(input);
    buffer[input.length] = 0x80;
    const view = new DataView(buffer.buffer);
    const bitLength = input.length * 8;
    view.setUint32(paddedLength - 8, bitLength >>> 0, true);
    view.setUint32(paddedLength - 4, Math.floor(bitLength / 0x100000000), true);

    const shifts = [
        7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
        5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
        4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
        6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
    ];
    const constants = Array.from({ length: 64 }, (_, index) =>
        Math.floor(Math.abs(Math.sin(index + 1)) * 0x100000000) >>> 0);
    const rotateLeft = (number, shift) => (number << shift) | (number >>> (32 - shift));
    let a0 = 0x67452301;
    let b0 = 0xefcdab89;
    let c0 = 0x98badcfe;
    let d0 = 0x10325476;

    for (let offset = 0; offset < paddedLength; offset += 64) {
        const words = Array.from({ length: 16 }, (_, index) => view.getUint32(offset + index * 4, true));
        let a = a0;
        let b = b0;
        let c = c0;
        let d = d0;
        for (let index = 0; index < 64; index++) {
            let f;
            let wordIndex;
            if (index < 16) {
                f = (b & c) | (~b & d);
                wordIndex = index;
            } else if (index < 32) {
                f = (d & b) | (~d & c);
                wordIndex = (5 * index + 1) % 16;
            } else if (index < 48) {
                f = b ^ c ^ d;
                wordIndex = (3 * index + 5) % 16;
            } else {
                f = c ^ (b | ~d);
                wordIndex = (7 * index) % 16;
            }
            const nextD = c;
            const nextC = b;
            const sum = (a + f + constants[index] + words[wordIndex]) >>> 0;
            b = (b + rotateLeft(sum, shifts[index])) >>> 0;
            a = d;
            d = nextD;
            c = nextC;
        }
        a0 = (a0 + a) >>> 0;
        b0 = (b0 + b) >>> 0;
        c0 = (c0 + c) >>> 0;
        d0 = (d0 + d) >>> 0;
    }

    return [a0, b0, c0, d0].map(word =>
        [0, 8, 16, 24].map(shift => ((word >>> shift) & 0xff).toString(16).padStart(2, '0')).join('')
    ).join('');
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function loadConfig() {
    let config = GM_getValue('config');
    if (config) {
        if (config.global.version === defaultConfig.global.version) {
            if (migrateMpvBridgePlayer(config)) {
                GM_setValue('config', config);
            }
            return config;
        }
        console.log('更新配置 ......');
        config = updateConfig(defaultConfig, config);
        config.global.version = defaultConfig.global.version;
    } else {
        console.log('初始化配置 ......');
        config = JSON.parse(JSON.stringify(defaultConfig));
        for (const key in config.global.parser) {
            config.global.parser[key].regex = [];
        }
    }
    migrateMpvBridgePlayer(config);
    GM_setValue('config', config);
    return config;
}

function updateConfig(defaultConfig, config) {
    function mergeDefaults(defaultObj, currentObj) {
        if (typeof defaultObj !== 'object' || defaultObj === null) {
            return currentObj !== undefined ? currentObj : defaultObj;
        }

        if (Array.isArray(defaultObj)) {
            return Array.isArray(currentObj) ? currentObj : defaultObj;
        }

        const merged = {};
        for (const key in defaultObj) {
            if (key === 'regex') {
                merged[key] = currentObj?. [key] || [];
                continue;
            }
            merged[key] = mergeDefaults(defaultObj[key], currentObj?. [key]);
        }
        return merged;
    }

    const newConfig = mergeDefaults(defaultConfig, config);
    const legacyLiveQualityMap = {
        '4': '10000',
        '3': '400',
        '2': '80'
    };
    const liveConfig = newConfig.global?.parser?.bilibiliLive;
    if (liveConfig && legacyLiveQualityMap[liveConfig.preferredQuality]) {
        liveConfig.preferredQuality = legacyLiveQualityMap[liveConfig.preferredQuality];
    }
    const ytdlpConfig = newConfig.global?.parser?.ytdlp;
    if (ytdlpConfig) {
        const legacyYtdlpQualityMap = {
            unlimited: 'auto',
            hdr: 'auto',
            '4320': 'auto',
            '240': '360',
            '144': '360'
        };
        ytdlpConfig.preferredQuality = legacyYtdlpQualityMap[ytdlpConfig.preferredQuality] ||
            ytdlpConfig.preferredQuality;
        if (!['auto', 'mpv', 'separate', 'combined', '2160', '1440', '1080', '720', '480', '360']
            .includes(ytdlpConfig.preferredQuality)) {
            ytdlpConfig.preferredQuality = 'auto';
        }
        if (!['auto', 'mpv', 'multichannel', 'stereo'].includes(ytdlpConfig.preferredAudio)) {
            ytdlpConfig.preferredAudio = 'auto';
        }
    }
    const bilibiliConfig = newConfig.global?.parser?.bilibili;
    if (bilibiliConfig) {
        bilibiliConfig.qualityPriority = getBilibiliQualityPriority(bilibiliConfig).join(',');
        bilibiliConfig.audioPriority = getBilibiliAudioPriority(bilibiliConfig).join(',');
    }
    const youtubeConfig = newConfig.global?.parser?.youtube;
    if (youtubeConfig) {
        youtubeConfig.qualityPriority = getYoutubeQualityPriority(youtubeConfig).join(',');
        youtubeConfig.audioPriority = getYoutubeAudioPriority(youtubeConfig).join(',');
    }
    for (const parserName of ['bilibili', 'youtube', 'ytdlp']) {
        const parserConfig = newConfig.global?.parser?.[parserName];
        if (parserConfig) {
            parserConfig.playlistLimit = String(normalizePlaylistLimit(parserConfig.playlistLimit));
            if (parserName === 'bilibili') {
                parserConfig.collectionLimit = String(normalizePlaylistLimit(parserConfig.collectionLimit));
                parserConfig.partLimit = String(normalizePlaylistLimit(parserConfig.partLimit));
            }
        }
    }
    for (let index = 0; index < defaultConfig.players.length; index++) {
        const dp = defaultConfig.players[index];
        const np = newConfig.players[index];
        if (np && dp.name === np.name) {
            np.icon = dp.icon;
            np.readonly = dp.readonly;
            np.playEvent = dp.playEvent;
            if (!np.presetEvent.syncTime) {
                np.presetEvent.syncTime = dp.presetEvent.syncTime;
            }
        } else {
            newConfig.players.unshift(dp);
        }
    }

    return newConfig;
}

function matchParser(parser, url) {
    for (const key in parser) {
        for (const regex of parser[key].regex) {
            if (!regex || regex.startsWith('#') || regex.startsWith('//')) {
                continue;
            }
            if (new RegExp(regex).test(url)) {
                console.log(`match parser regex: ${new RegExp(regex)}\n${url}`);
                return new PARSER[key.replace(/[A-Z]/g, letter => `_${letter}`).toUpperCase()]();
            }
        }
    }
}

// =================================== 按钮区域和设置页面 ===================================

var policy;
try {
    policy = window.trustedTypes.createPolicy('externalPlayer', {
        createHTML: (string, sink) => string,
        createScript: (input) => input
    })
} catch (error) {
    policy = {
        createHTML: (string, sink) => string,
        createScript: (input) => input
    }
}

const FIRST_Z_INDEX = 999999999;
const SECOND_Z_INDEX = FIRST_Z_INDEX - 1;
const THIRD_Z_INDEX = SECOND_Z_INDEX - 1;

const COLORS = [{
    // 配色方案1
    PRIMARY: 'rgba(245, 166, 35, 1)',
    TEXT: 'rgba(90, 90, 90, 1)',
    TEXT_ACTIVE: 'rgba(255, 255, 255, 1)',
    WARNING: 'rgba(233, 78, 119, 1)',
    BORDER: 'rgba(243, 229, 213, 1)',
}, {
    // 配色方案2
    PRIMARY: 'rgba(60, 179, 113, 1)',
    TEXT: 'rgba(47, 79, 79, 1)',
    TEXT_ACTIVE: 'rgba(255, 255, 255, 1)',
    WARNING: 'rgba(255, 111, 97, 1)',
    BORDER: 'rgba(204, 231, 208, 1)',
}, {
    // 配色方案3
    PRIMARY: 'rgba(74, 144, 226, 1)',
    TEXT: 'rgba(51, 51, 51, 1)',
    TEXT_ACTIVE: 'rgba(255, 255, 255, 1)',
    WARNING: 'rgba(242, 95, 92, 1)',
    BORDER: 'rgba(217, 227, 240, 1)',
}]
const COLOR = COLORS[2];

var style;
var buttonDiv;
var toastDiv;
var loadingDiv;
var settingButton;
var settingIframe;
var loadingId;
var isReloading = false;

function appendCss() {
    if (style) {
        return;
    }
    style = document.createElement('style');
    style.innerHTML = policy.createHTML(`
        #${PROJECT_NAME}-toast-div {
            z-index: ${FIRST_Z_INDEX};
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translate(-50%, 0);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            font-size: 14px;
            padding: 10px 20px;
            border-radius: 5px;
            opacity: 0;
            transition: opacity 0.5s ease;
            display: none;
            letter-spacing: 1px;
        }
        #${PROJECT_NAME}-loading-div {
            z-index: ${FIRST_Z_INDEX};
            display: none;
            position: fixed;
            bottom: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0);
        }
        #${PROJECT_NAME}-loading-div div {
            width: 50px;
            height: 50px;
            background-color: ${COLOR.PRIMARY};
            border-radius: 0;
            -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
            animation: sk-rotateplane 1.2s infinite ease-in-out;
        }
        @-webkit-keyframes sk-rotateplane {
            0% {
                -webkit-transform: perspective(120px)
            }
            50% {
                -webkit-transform: perspective(120px) rotateY(180deg)
            }
            100% {
                -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)
            }
        }
        @keyframes sk-rotateplane {
            0% {
                transform: perspective(120px) rotateX(0deg) rotateY(0deg);
                -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
            }
            50% {
                transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
                -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(0deg)
            }
            100% {
                transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
                -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
            }
        }
        #${PROJECT_NAME}-button-div {
            z-index: ${THIRD_Z_INDEX};
            position: fixed;
            display: none;
            align-items: center;
            width: auto;
            height: auto;
            left: ${currentConfig.global.buttonXCoord}px;
            bottom: ${currentConfig.global.buttonYCoord}px;
            padding: 5px;
            border: 3px solid rgba(0, 0, 0, 0);
            border-radius: 5px;
            cursor: move;
            gap: 10px;
            background-color: rgba(0, 0, 0, 0);
            min-width: ${50 * currentConfig.global.buttonScale}px;
            min-height: ${50 * currentConfig.global.buttonScale}px;
        }
        #${PROJECT_NAME}-button-div button {
            color: white;
            font-size: 20px;
            font-weight: bold;
            width: 50px;
            height: 50px;
            outline: none;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            background-size: cover;
            background-color: rgba(0, 0, 0, 0);
            transition: opacity 0.5s ease, visibility 0s linear 0.5s;
        }
        #${PROJECT_NAME}-button-div:hover {
            background-color: rgb(255, 255, 255, 0.3) !important;
        }
        #${PROJECT_NAME}-button-div:hover button {
            visibility: visible !important;
            transition: opacity 0.5s ease, visibility 0s;
        }
        #${PROJECT_NAME}-button-div button:hover {
            transform: scale(1.06);
            box-shadow: 0px 0px 16px #e6e6e6;
        }
        #${PROJECT_NAME}-setting-button {
            visibility: hidden;
            position: absolute;
            right: ${-12 * currentConfig.global.buttonScale}px !important;
            top: ${-12 * currentConfig.global.buttonScale}px !important;
            width: ${25 * currentConfig.global.buttonScale}px !important;
            height: ${25 * currentConfig.global.buttonScale}px !important;
            background-image: url('data:image/svg+xml,<svg t="1731846507027" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4281" width="16" height="16"><path d="M616.533333 512.128c0-25.6-9.941333-49.536-28.16-67.669333a95.744 95.744 0 0 0-67.84-28.074667c-25.685333 0-49.706667 9.984-67.925333 28.074667a95.146667 95.146667 0 0 0-28.16 67.669333c0 25.6 10.069333 49.578667 28.16 67.712 18.218667 18.048 42.24 28.074667 67.925333 28.074667 25.642667 0 49.664-10.026667 67.84-28.074667 18.218667-18.133333 28.16-42.112 28.16-67.712z m-202.112 352.896l48-55.978667a309.290667 309.290667 0 0 0 99.029334 0l48 55.978667a27.52 27.52 0 0 0 30.208 7.978667l2.218666-0.768a380.074667 380.074667 0 0 0 118.186667-68.138667l1.834667-1.536a27.434667 27.434667 0 0 0 8.106666-30.037333l-24.746666-69.546667a298.666667 298.666667 0 0 0 49.322666-85.205333l72.874667-13.44a27.477333 27.477333 0 0 0 22.058667-22.101334l0.426666-2.304a384.64 384.64 0 0 0 0-135.936l-0.426666-2.304a27.477333 27.477333 0 0 0-22.058667-22.058666l-73.216-13.525334a302.293333 302.293333 0 0 0-49.194667-84.650666l25.002667-70.016a27.306667 27.306667 0 0 0-8.149333-30.037334l-1.834667-1.536a383.018667 383.018667 0 0 0-118.186667-68.138666l-2.218666-0.768a27.605333 27.605333 0 0 0-30.208 7.936l-48.512 56.661333a302.592 302.592 0 0 0-97.834667 0L414.592 159.146667a27.52 27.52 0 0 0-30.208-7.978667l-2.218667 0.768a381.056 381.056 0 0 0-118.186666 68.138667l-1.834667 1.536a27.434667 27.434667 0 0 0-8.106667 30.037333l24.96 69.973333a296.192 296.192 0 0 0-49.194666 84.693334l-73.216 13.525333a27.477333 27.477333 0 0 0-22.058667 22.058667l-0.426667 2.304a382.592 382.592 0 0 0 0 135.936l0.426667 2.304c2.048 11.221333 10.794667 20.053333 22.058667 22.101333l72.874666 13.44a300.672 300.672 0 0 0 49.365334 85.248l-24.832 69.504a27.306667 27.306667 0 0 0 8.149333 30.037333l1.834667 1.536a383.018667 383.018667 0 0 0 118.186666 68.138667l2.218667 0.768a27.733333 27.733333 0 0 0 30.037333-8.149333z m-44.8-352.853333A150.656 150.656 0 0 1 520.533333 361.642667a150.656 150.656 0 0 1 150.869334 150.442666A150.656 150.656 0 0 1 520.533333 662.613333a150.656 150.656 0 0 1-150.912-150.485333z" fill="${COLOR.PRIMARY}" p-id="4282"></path></svg>');
        }
        #${PROJECT_NAME}-setting-iframe {
            z-index: ${SECOND_Z_INDEX};
            position: fixed;
            width: 1000px;
            max-width: 100%;
            height: 500px;
            max-height: 90%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: none;
            border-radius: 5px;
            box-shadow: 0 0 16px rgba(0, 0, 0, 0.6);
            background-color: #fff;
            display: none;
        }
    `);
    document.head.appendChild(style);
}

function appendToastDiv() {
    const TOAST_DIV_ID = `${PROJECT_NAME}-toast-div`;
    if (document.getElementById(TOAST_DIV_ID)) {
        return;
    }
    toastDiv = document.createElement('div');
    toastDiv.id = TOAST_DIV_ID;
    document.body.appendChild(toastDiv);
}

function showToast(message) {
    toastDiv.textContent = message;
    toastDiv.style.opacity = '0.9';
    toastDiv.style.display = 'block';
    setTimeout(() => {
        toastDiv.style.opacity = '0';
        toastDiv.style.display = 'none';
    }, 5000);
}

function appendLoadingDiv() {
    const LOADING_DIV_ID = `${PROJECT_NAME}-loading-div`;
    if (document.getElementById(LOADING_DIV_ID)) {
        return;
    }
    loadingDiv = document.createElement('div');
    loadingDiv.id = LOADING_DIV_ID;
    loadingDiv.appendChild(document.createElement('div'));
    document.body.appendChild(loadingDiv);
}

function showLoading(timeout) {
    if (loadingId) {
        clearTimeout(loadingId);
        loadingId = undefined;
    }
    if (!timeout) {
        timeout = 10000;
    }
    loadingDiv.style.display = 'block';
    loadingId = setTimeout(() => {
        if (loadingDiv.style.display === 'block') {
            hideLoading();
            showToast(translation.loadTimeout);
        }
    }, timeout);
}

function hideLoading() {
    loadingDiv.style.display = 'none';
}

function appendButtonDiv() {
    const BUTTON_DIV_ID = `${PROJECT_NAME}-button-div`;
    if (document.getElementById(BUTTON_DIV_ID)) {
        buttonDiv.style.display = "none";
        return;
    }
    buttonDiv = document.createElement('div');
    buttonDiv.id = BUTTON_DIV_ID;
    buttonDiv.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'BUTTON') {
            return;
        }
        let offsetX = e.clientX - buttonDiv.getBoundingClientRect().left;
        let offsetY = e.clientY - buttonDiv.getBoundingClientRect().top;

        document.addEventListener('mouseup', mouseUpHandler);
        document.addEventListener('mousemove', mouseMoveHandler);

        function mouseUpHandler() {
            buttonDiv.style.border = '3px solid rgba(0, 0, 0, 0)';
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }

        function mouseMoveHandler(e) {
            buttonDiv.style.border = `3px solid ${COLOR.PRIMARY}`;
            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const divWidth = buttonDiv.offsetWidth;
            const divHeight = buttonDiv.offsetHeight;

            if (newX < 0) newX = 0;
            if (newX + divWidth > windowWidth) newX = windowWidth - divWidth;
            if (newY < 0) newY = 0;
            if (newY + divHeight > windowHeight) newY = windowHeight - divHeight;

            newY = windowHeight - newY - divHeight;
            buttonDiv.style.left = `${newX}px`;
            buttonDiv.style.bottom = `${newY}px`;
            currentConfig.global.buttonXCoord = newX;
            currentConfig.global.buttonYCoord = newY;
            GM_setValue('config', currentConfig);
        }
    });
    document.body.appendChild(buttonDiv);

    appendPlayButton();
    appendSettingButton();

    // 全屏隐藏
    document.addEventListener("fullscreenchange", () => {
        if (document.fullscreenElement) {
            buttonDiv.style.display = "none";
        } else {
            if (currentParser) {
                buttonDiv.style.display = "flex";
            }
        }
    });
}

function appendPlayButton() {
    if (!currentConfig.players) {
        return;
    }
    currentConfig.players.forEach(player => {
        if (player.enable !== true) {
            return;
        }
        const playButton = document.createElement('button');
        if (player.icon) {
            const image = new Image();
            image.src = player.icon;
            image.onload = () => playButton.style.backgroundImage = `url(${image.src})`;
            image.onerror = () => {
                playButton.style.backgroundColor = COLOR.PRIMARY;
                playButton.textContent = player.name ? player.name.substring(0, 1) : 'P';
            };
        } else {
            playButton.style.backgroundColor = COLOR.PRIMARY;
            playButton.textContent = player.name ? player.name.substring(0, 1) : 'P';
        }
        playButton.style.width = `${player.iconSize * currentConfig.global.buttonScale}px`;
        playButton.style.height = `${player.iconSize * currentConfig.global.buttonScale}px`;

        // 自动隐藏
        if (currentConfig.global.buttonVisibilityDuration == 0) {
            playButton.style.visibility = 'hidden';
        } else if (currentConfig.global.buttonVisibilityDuration > 0) {
            setTimeout(() => {
                playButton.style.visibility = 'hidden';
            }, currentConfig.global.buttonVisibilityDuration);
        }

        playButton.addEventListener('click', async function () {
            playButton.disabled = true;
            if (currentParser) {
                currentParser.play(player);
            } else {
                showToast(translation.noMatchingParserFound);
            }
            setTimeout(() => {
                playButton.disabled = false;
            }, REFRESH_INTERVAL * 3);
        });

        buttonDiv.appendChild(playButton);
    });
}

function appendSettingButton() {
    settingButton = document.createElement('button');
    settingButton.id = `${PROJECT_NAME}-setting-button`;
    settingButton.title = 'Ctrl + Alt + E';

    settingButton.addEventListener('click', async () => {
        await updateDetectedBrowser();
        await appendSettingIframe();
        if (settingIframe.style.display === "block") {
            settingIframe.style.display = "none";
        } else {
            settingIframe.contentWindow.postMessage({
                name: PROJECT_NAME,
                method: 'loadConfig',
                defaultConfig: defaultConfig,
                config: currentConfig,
                auth: getAuthSnapshot()
            }, '*');
            settingIframe.style.display = "block";
        }
    });
    buttonDiv.appendChild(settingButton);

    // 失去焦点隐藏设置页面
    document.addEventListener('click', (event) => {
        if (settingIframe && settingIframe.style.display === 'block' &&
            !settingButton.contains(event.target) &&
            !settingIframe.contains(event.target)) {
            settingIframe.style.display = 'none';
        }
    });
}

async function appendSettingIframe() {
    const SETTING_IFRAME_ID = `${PROJECT_NAME}-setting-iframe`;
    if (document.getElementById(SETTING_IFRAME_ID)) {
        return;
    }
    settingIframe = document.createElement('iframe');
    settingIframe.id = SETTING_IFRAME_ID;
    // about:blank iframe 会继承宿主页面 CSP。YouTube 要求内联脚本携带页面 nonce，
    // 否则设置页脚本被拦截，两个默认隐藏的容器不会显示，最终只剩白色 iframe。
    const pageNonce = [...document.scripts].map(script => script.nonce).find(Boolean) || '';
    const settingScriptNonce = pageNonce ?
        ` nonce="${pageNonce.replaceAll('&', '&amp;').replaceAll('"', '&quot;')}"` : '';
    let settingIframeHtml = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>External Player</title>
        <style>
            :root {
                --primary-color: ${COLOR.PRIMARY};
                --text-color: ${COLOR.TEXT};
                --text-active-color: ${COLOR.TEXT_ACTIVE};
                --warning-color: ${COLOR.WARNING};
                --border-color: ${COLOR.BORDER};
            }

            body {
                display: flex;
                flex-direction: row;
                height: 100vh;
                margin: 0;
            }

            body,
            button,
            input,
            textarea,
            select {
                font-family: auto;
                color: var(--text-color);
            }

            ::placeholder {
                font-family: auto;
                color: var(--text-color);
                opacity: 0.2;
            }

            #sidebar-container {
                display: none;
                flex: 0 0 200px;
                flex-direction: column;
                background-color: #f4f4f4;
                box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
                padding: 25px 20px 35px 20px;
            }

            #sidebar {
                flex: 1;
                overflow-y: auto;
                position: relative;
                border: none;
                border-radius: 5px;
                margin-bottom: 10px;
            }

            #sidebar::-webkit-scrollbar {
                display: none !important;
            }

            .reset-button,
            #add-tab-button,
            #save-button,
            #sidebar button {
                width: 200px;
                padding: 10px;
                margin: 0 0 10px 0;
                border: none;
                border-radius: 5px;
                background-color: #e0e0e0;
                cursor: pointer;
                font-size: 15px;
                white-space: nowrap;
                display: inline-flex;
                position: relative;
                align-items: center;
                justify-content: center;
            }

            #add-tab-button,
            #save-button {
                background-color: var(--primary-color);
                color: var(--text-active-color);
                margin: 0;
            }

            #add-tab-button {
                font-size: 25px;
                line-height: 21.45px;
            }

            #add-tab-button:hover,
            #save-button:hover {
                opacity: 0.9;
            }

            #reset-button-coord-button {
                padding: 7px 10px;
            }

            .reset-button {
                margin: 0;
                width: 80px;
                background-color: var(--warning-color);
                color: var(--text-active-color);
                opacity: 0.6;
            }

            .reset-button:hover {
                opacity: 0.8;
            }

            #sidebar button svg {
                width: 20px !important;
                height: 20px !important;
                position: absolute;
                left: 10px;
                fill: var(--text-color);
            }

            #sidebar button .sidebar-icon {
                position: absolute;
                left: 10px;
                width: 20px;
                font-size: 20px;
                line-height: 1;
                text-align: center;
            }

            #content .radio-button svg {
                width: 20px !important;
                height: 20px !important;
                fill: var(--text-color);
            }

            #sidebar button.active svg,
            #sidebar button:hover svg,
            #content .radio-button.active svg,
            #content .radio-button:hover svg {
                fill: var(--text-active-color)
            }

            #sidebar button.active {
                background-color: var(--primary-color);
                color: var(--text-active-color);
            }

            #sidebar button:hover {
                background-color: var(--primary-color);
                color: var(--text-active-color);
            }

            #content-container {
                display: none;
                flex-direction: column;
                flex: 1;
                padding: 25px 20px 0 20px;
            }

            #content {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
                position: relative;
                border: 1px solid var(--border-color);
                border-radius: 5px;
                margin-bottom: 15px;
            }

            .tab {
                display: none;
                position: relative;
            }

            .tab.active {
                display: block;
            }

            .input-group {
                margin-bottom: 15px;
            }

            .parser-hint {
                margin: 2px 0 12px;
                padding: 9px 11px;
                color: #5f6368;
                background: #f5f7fa;
                border: 1px solid var(--border-color);
                border-radius: 5px;
                font-size: 13px;
                line-height: 1.45;
            }

            .auth-card {
                border: 1px solid var(--border-color);
                border-radius: 8px;
                padding: 14px;
                margin-bottom: 16px;
            }

            .auth-grid {
                display: grid;
                grid-template-columns: minmax(130px, 1fr) minmax(130px, 1fr);
                gap: 10px 16px;
                align-items: center;
                margin-bottom: 12px;
            }

            .auth-grid label {
                margin: 0;
            }

            .auth-state {
                display: inline-flex;
                width: fit-content;
                padding: 4px 10px;
                border-radius: 999px;
                background: #e0e0e0;
                font-size: 13px;
            }

            .auth-state.available {
                color: #0b6b2a;
                background: #dff5e5;
            }

            .auth-state.loggedOut,
            .auth-state.invalid {
                color: #9b2c2c;
                background: #fde2e2;
            }

            .auth-state.unverified {
                color: #8a5b00;
                background: #fff3cd;
            }

            .auth-state.unavailable,
            .auth-state.disabled {
                color: #5f6368;
                background: #eceff1;
            }

            .auth-actions {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-top: 10px;
            }

            .auth-actions button,
            .auth-actions .reset-button {
                width: auto;
                min-width: 76px;
                margin: 0;
                padding: 9px 16px;
                white-space: nowrap;
            }

            .auth-file-meta,
            #auth-browser,
            #auth-message {
                color: #5f6368;
                font-size: 13px;
                line-height: 1.5;
            }

            label {
                display: flex;
                margin-bottom: 5px;
                font-weight: bold;
                align-items: center;
            }

            input[type="number"] {
                width: calc(100% - 16px);
                font-size: 14px;
                border-radius: 5px;
                border: 1px solid var(--border-color);
                margin-right: 15px;
                padding: 8px;
            }

            input[type="text"],
            input[type="search"],
            textarea {
                width: 100%;
                min-width: 400px;
                padding: 8px;
                border: 1px solid var(--border-color);
                border-radius: 5px;
                font-size: 14px;
                box-sizing: border-box;
            }

            textarea {
                resize: vertical;
                height: 160px;
            }

            .switch {
                position: relative;
                display: inline-block;
                width: 54px;
                height: 24px;
            }

            .switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .switch-slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                transition: 0.4s;
                border-radius: 34px;
            }

            .switch-slider:before {
                position: absolute;
                content: "";
                height: 16px;
                width: 16px;
                border-radius: 50%;
                left: 4px;
                bottom: 4px;
                background-color: var(--text-active-color);
                transition: 0.4s;
            }

            input:checked+.switch-slider {
                background-color: var(--primary-color);
            }

            input:checked+.switch-slider:before {
                transform: translateX(30px);
            }

            .remove-button {
                position: absolute;
                opacity: 0.9;
                top: -10px;
                right: 0;
                background: var(--warning-color);
                color: var(--text-active-color);
                border: none;
                padding: 5px 10px;
                cursor: pointer;
                border-radius: 5px;
                font-size: 14px;
            }

            .remove-button:hover {
                opacity: 1;
            }

            .radio-button-group,
            .checkbox-group {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 15px;
            }

            .priority-setting {
                margin: -5px 0 15px;
                padding: 12px;
                border: 1px solid var(--border-color);
                border-radius: 8px;
                background: rgba(127, 127, 127, 0.06);
            }

            .priority-setting[hidden] {
                display: none;
            }

            .priority-setting>label {
                margin: 0 0 8px;
                font-size: 14px;
            }

            .priority-sorter {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }

            .priority-item {
                display: inline-flex;
                align-items: center;
                gap: 7px;
                min-height: 34px;
                padding: 0 11px;
                border: 1px solid color-mix(in srgb, var(--primary-color) 45%, var(--border-color));
                border-radius: 17px;
                background: #fff;
                cursor: grab;
                user-select: none;
                font-size: 13px;
                white-space: nowrap;
            }

            .priority-item::before {
                content: "⋮⋮";
                color: var(--primary-color);
                letter-spacing: -3px;
            }

            .priority-item:active {
                cursor: grabbing;
            }

            .priority-item.dragging {
                opacity: 0.35;
                outline: 2px solid var(--primary-color);
            }

            .priority-setting .parser-hint {
                margin-top: 8px;
            }

            .radio-button,
            .checkbox-group .chekbox-label {
                padding: 8px 12px;
                background-color: #e0e0e0;
                cursor: pointer;
                border-radius: 5px;
                font-size: 14px;
                font-weight: normal;
                min-width: 132px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                gap: 12px;
                height: 20px;
                margin: 0;
            }

            .parser .radio-button,
            .parser .checkbox-group .chekbox-label {
                min-width: 122.5px;
            }

            .preferred-codec-group {
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
            }

            .preferred-codec-group .radio-button {
                min-width: 0;
                box-sizing: border-box;
                width: 100%;
                height: auto;
                min-height: 36px;
            }

            .ytdlp-codec-group {
                grid-template-columns: repeat(auto-fit, minmax(132px, 1fr));
            }

            @media (max-width: 520px) {
                .preferred-codec-group {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }
            }

            .radio-button.active,
            .checkbox-group input:checked+.chekbox-label {
                background-color: var(--primary-color);
                color: var(--text-active-color);
            }

            .radio-button:hover {
                background-color: var(--primary-color);
                color: var(--text-active-color);
            }

            .checkbox-group input[type="checkbox"] {
                display: none;
            }

            #language {
                padding: 8px;
                border-radius: 5px;
                cursor: pointer;
                width: 100%;
                border: 1px solid var(--border-color);
            }

            .parser {
                border: 1px solid var(--border-color);
                border-radius: 5px;
                padding: 10px 20px;
            }

            .parser textarea {
                margin-bottom: 10px;
                resize: none;
            }

            a {
                color: var(--text-color);
                text-decoration: none;
                font-weight: bold;
                transition: color 0.3s ease, border-bottom 0.3s ease;
                border-bottom: 2px solid transparent;
            }

            a:hover {
                color: var(--primary-color);
                border-bottom-color: var(--primary-color);
            }

            #tab-container {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
                position: relative;
                border: 1px solid var(--border-color);
                border-radius: 5px;
                margin-bottom: 10px;
            }

            :disabled {
                opacity: 0.6;
            }

            div.disabled,
            button:disabled {
                pointer-events: none !important;
                cursor: not-allowed !important;
            }

            .parser textarea:disabled {
                height: 30px;
                overflow-y: hidden;
                line-height: 20px;
            }

            textarea:disabled::-webkit-scrollbar {
                display: none;
            }

            ::-webkit-scrollbar {
                width: 20px !important;
                height: 20px !important;
            }

            ::-webkit-scrollbar-thumb {
                background: var(--border-color) !important;
                border-radius: 5px !important;
            }

            ::-webkit-scrollbar-thumb:hover {
                background: var(--primary-color) !important;
            }

            ::-webkit-scrollbar-track {
                background: rgb(245, 245, 245) !important;
                border-radius: 5px !important;
            }

            select:focus,
            input:focus,
            textarea:focus {
                border-color: var(--primary-color);
                outline: none;
            }

            #footer {
                font-size: 14px;
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            #footer svg {
                width: 20px;
                height: 20px;
                margin-bottom: -3px;
            }

            #footer a,
            #footer a:hover {
                margin-left: 3px;
                margin-right: 3px;
                font-weight: normal;
                border-bottom: none !important;
                text-decoration: none !important;
            }
        </style>
    </head>

    <body>
        <div id="sidebar-container">
            <div id="sidebar">
                <button id="global-button" class="tab-button active" data-tab="global">
                    <svg t="1732015880724" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4317" width="32" height="32">
                        <path
                            d="M386.35 112.05h-228.7c-25.2 0-45.7 20.5-45.7 45.7v228.5c0 25.2 20.4 45.7 45.6 45.8h228.6c25.2 0 45.7-20.4 45.8-45.6V157.65c0.1-25.2-20.4-45.6-45.6-45.6z"
                            p-id="4318"></path>
                        <path
                            d="M157.55 80.05h229c42.8 0 77.5 34.7 77.5 77.5v229c0 42.8-34.7 77.5-77.5 77.5h-229c-42.8 0-77.5-34.7-77.5-77.5v-229c0-42.8 34.7-77.5 77.5-77.5z m228.9 320.5c7.8 0 14.1-6.3 14.1-14.1v-229c0-7.8-6.3-14.1-14.1-14.1h-229c-7.8 0-14.1 6.3-14.1 14.1v229c0 7.8 6.3 14.1 14.1 14.1h229z"
                            p-id="4319"></path>
                        <path
                            d="M387.55 590.25h-231.1c-25.5 0-46.2 20.7-46.2 46.2v231.1c0 25.5 20.7 46.2 46.2 46.2h231.1c25.5 0 46.2-20.7 46.2-46.2v-231.1c0-25.5-20.7-46.2-46.2-46.2z"
                            p-id="4320"></path>
                        <path
                            d="M157.55 560.05h229c42.8 0 77.5 34.7 77.5 77.5v229c0 42.8-34.7 77.5-77.5 77.5h-229c-42.8 0-77.5-34.7-77.5-77.5v-229c0-42.8 34.7-77.5 77.5-77.5z m228.9 320.5c7.8 0 14.1-6.3 14.1-14.1v-229c0-7.8-6.3-14.1-14.1-14.1h-229c-7.8 0-14.1 6.3-14.1 14.1v229c0 7.8 6.3 14.1 14.1 14.1h229zM637.55 80.05h229c42.8 0 77.5 34.7 77.5 77.5v229c0 42.8-34.7 77.5-77.5 77.5h-229c-42.8 0-77.5-34.7-77.5-77.5v-229c0-42.8 34.7-77.5 77.5-77.5z m228.9 320.5c7.8 0 14.1-6.3 14.1-14.1v-229c0-7.8-6.3-14.1-14.1-14.1h-229c-7.8 0-14.1 6.3-14.1 14.1v229c0 7.8 6.3 14.1 14.1 14.1h229z"
                            p-id="4321"></path>
                        <path
                            d="M866.306 592.006h-228.6c-25.2 0-45.7 20.5-45.7 45.7v228.5c0 25.2 20.5 45.7 45.7 45.7h228.5c25.2 0 45.7-20.4 45.8-45.6v-228.6c0-25.2-20.5-45.7-45.7-45.7z"
                            p-id="4322"></path>
                        <path
                            d="M637.506 560.006h229c42.8 0 77.5 34.7 77.5 77.5v229c0 42.8-34.7 77.5-77.5 77.5h-229c-42.8 0-77.5-34.7-77.5-77.5v-229c0-42.8 34.7-77.5 77.5-77.5z m229 320.6c7.8 0 14.1-6.3 14.1-14.1v-229c0-7.8-6.3-14.1-14.1-14.1h-229c-7.8 0-14.1 6.3-14.1 14.1v229c0 7.8 6.3 14.1 14.1 14.1h229z"
                            p-id="4323"></path>
                    </svg>
                    <span data-translate="global">全局配置</span>
                </button>
                <button id="cookies-button" class="tab-button" data-tab="cookies">
                    <span class="sidebar-icon" aria-hidden="true">🍪</span>
                    <span data-translate="cookieManager">Cookie 认证</span>
                </button>
            </div>
            <button id="add-tab-button">+</button>
        </div>

        <div id="content-container">
            <div id="content">
                <div id="global" class="tab active">
                    <div class="input-group">
                        <label data-translate="version">版本</label>
                        <input type="text" id="version" readonly></input>
                    </div>
                    <div class="input-group">
                        <label data-translate="language">语言</label>
                        <select id="language">
                            <option value="zh" selected>中文</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label data-translate="buttonCoord">按钮坐标</label>
                        <label>
                            <input type="number" id="buttonXCoord" min="0" placeholder="0">
                            <input type="number" id="buttonYCoord" min="0" placeholder="0">
                            <button id="reset-button-coord-button" class="reset-button" data-translate="reset">重置</button>
                        </label>
                    </div>
                    <div class="input-group">
                        <label data-translate="buttonScale">按钮比例</label>
                        <input type="number" id="buttonScale" min="0.01" max="10" step="0.01" placeholder="1.00">
                    </div>
                    <div class="input-group">
                        <label data-translate="buttonVisibilityDuration">按钮可见时长（毫秒，-1：一直可见）</label>
                        <input type="number" id="buttonVisibilityDuration" min="-1" placeholder="3000">
                    </div>
                    <div class="input-group">
                        <label data-translate="networkProxy">网络代理</label>
                        <input type="text" id="networkProxy" placeholder="http://127.0.0.1:7890"></input>
                    </div>
                    <label data-translate="parser">解析器</label>
                    <div class="input-group parser" id="bilibili">
                        <label><a href="https://github.com/SocialSisterYi/bilibili-API-collect"
                                target="_blank">BILIBILI</a></label>
                        <textarea name="regex" disabled></textarea>
                        <textarea name="regex" style="display: none;"></textarea>
                        <label data-translate="preferredQuality">首选画质</label>
                        <div class="radio-button-group" name="preferredQuality">
                            <div class="radio-button active" value="auto" data-translate="autoBest">自动最佳</div>
                            <div class="radio-button" value="mpv" data-translate="mpvQuality">全部载入 MPV</div>
                            <div class="radio-button" value="126" data-translate="dolbyVision">杜比视界</div>
                            <div class="radio-button" value="125" data-translate="hdr">HDR 真彩</div>
                            <div class="radio-button" value="127">8K</div>
                            <div class="radio-button" value="120">4K</div>
                            <div class="radio-button" value="116">1080P60</div>
                            <div class="radio-button" value="112">1080P+</div>
                            <div class="radio-button" value="80">1080P</div>
                            <div class="radio-button" value="74">720P60</div>
                            <div class="radio-button" value="64">720P</div>
                        </div>
                        <div class="priority-setting" data-priority-option="preferredQuality">
                            <label data-translate="qualityPriorityTitle">自动/全部载入画质优先级</label>
                            <div class="priority-sorter" name="qualityPriority">
                                <div class="priority-item" draggable="true" value="126">杜比视界</div>
                                <div class="priority-item" draggable="true" value="125">HDR 真彩</div>
                                <div class="priority-item" draggable="true" value="127">8K 超高清</div>
                                <div class="priority-item" draggable="true" value="120">4K 超清</div>
                                <div class="priority-item" draggable="true" value="116">1080P 60帧</div>
                                <div class="priority-item" draggable="true" value="112">1080P 高码率</div>
                                <div class="priority-item" draggable="true" value="80">1080P 高清</div>
                                <div class="priority-item" draggable="true" value="74">720P 60帧</div>
                                <div class="priority-item" draggable="true" value="64">720P 高清</div>
                                <div class="priority-item" draggable="true" value="32">480P 清晰</div>
                                <div class="priority-item" draggable="true" value="16">360P 流畅</div>
                            </div>
                            <div class="parser-hint" data-translate="priorityDragHint">从左到右优先；拖动可调整顺序。</div>
                        </div>
                        <label data-translate="preferredAudio">音频策略</label>
                        <div class="radio-button-group" name="preferredAudio">
                            <div class="radio-button active" value="auto" data-translate="autoAudio">自动最佳</div>
                            <div class="radio-button" value="mpv" data-translate="mpvAudio">全部载入 MPV</div>
                            <div class="radio-button" value="dolby" data-translate="dolbyAtmos">杜比全景声</div>
                            <div class="radio-button" value="hires" data-translate="hiResLossless">Hi-Res 无损</div>
                            <div class="radio-button" value="30280">192K AAC</div>
                            <div class="radio-button" value="30232">132K AAC</div>
                            <div class="radio-button" value="30216">64K AAC</div>
                        </div>
                        <div class="priority-setting" data-priority-option="preferredAudio">
                            <label data-translate="audioPriorityTitle">自动/全部载入音频优先级</label>
                            <div class="priority-sorter" name="audioPriority">
                                <div class="priority-item" draggable="true" value="dolby">杜比全景声</div>
                                <div class="priority-item" draggable="true" value="hires">Hi-Res 无损</div>
                                <div class="priority-item" draggable="true" value="30280">192K AAC</div>
                                <div class="priority-item" draggable="true" value="30232">132K AAC</div>
                                <div class="priority-item" draggable="true" value="30216">64K AAC</div>
                                <div class="priority-item" draggable="true" value="other" data-translate="otherAudio">其他音频</div>
                            </div>
                            <div class="parser-hint" data-translate="priorityDragHint">从左到右优先；拖动可调整顺序。</div>
                        </div>
                        <label data-translate="preferredSubtitle">首选字幕</label>
                        <div class="radio-button-group" name="preferredSubtitle">
                            <div class="radio-button active" value="auto" data-translate="autoSubtitle">自动语言</div>
                            <div class="radio-button" value="zh-Hans">简体</div>
                            <div class="radio-button" value="zh-Hant">繁体</div>
                            <div class="radio-button" value="en-US">English</div>
                            <div class="radio-button" value="mpv" data-translate="mpvSubtitle">全部载入 MPV</div>
                            <div class="radio-button" value="off" data-translate="off">关闭</div>
                        </div>
                        <label data-translate="preferredCodec">首选编码</label>
                        <div class="radio-button-group preferred-codec-group" name="preferredCodec">
                            <div class="radio-button active" value="auto" data-translate="autoCodec">自动最佳</div>
                            <div class="radio-button" value="12">HEVC</div>
                            <div class="radio-button" value="13">AV1</div>
                            <div class="radio-button" value="7">AVC</div>
                        </div>
                        <label data-translate="preferredPlaylist">播放列表策略</label>
                        <div class="radio-button-group preferred-codec-group bilibili-playlist-group" name="preferredPlaylist">
                            <div class="radio-button active" value="current" data-translate="currentVideo">仅当前视频</div>
                            <div class="radio-button" value="collection" data-translate="collectionOnly">仅合集</div>
                            <div class="radio-button" value="parts" data-translate="partsOnly">仅分P</div>
                            <div class="radio-button" value="playlist" data-translate="wholePlaylist">完整播放列表</div>
                        </div>
                        <div class="playlist-limit-setting" data-playlist-mode="collection" hidden>
                            <label data-translate="collectionLimit">合集最大获取数量</label>
                            <input type="number" name="collectionLimit" min="1" max="500" step="1" value="50"></input>
                            <div class="parser-hint" data-translate="collectionLimitHint">以当前视频为中心截取 1–500 个合集视频；一侧不足时由另一侧补足，每个 BV 只作为一个播放项。</div>
                        </div>
                        <div class="playlist-limit-setting" data-playlist-mode="parts" hidden>
                            <label data-translate="partLimit">分P最大获取数量</label>
                            <input type="number" name="partLimit" min="1" max="500" step="1" value="50"></input>
                            <div class="parser-hint" data-translate="partLimitHint">以当前分P为中心截取 1–500 个分P；一侧不足时由另一侧补足。</div>
                        </div>
                        <div class="playlist-limit-setting" data-playlist-mode="playlist" hidden>
                            <label data-translate="finalPlaylistLimit">完整列表最大播放项数</label>
                            <input type="number" name="playlistLimit" min="1" max="500" step="1" value="50"></input>
                            <div class="parser-hint" data-translate="finalPlaylistLimitHint">合集和分P展开后，以当前项为中心截取 1–500 个最终播放项；一侧不足时由另一侧补足。</div>
                        </div>
                    </div>
                    <div class="input-group parser" id="bilibiliLive">
                        <label><a href="https://github.com/SocialSisterYi/bilibili-API-collect" target="_blank">BILIBILI
                                LIVE</a></label>
                        <textarea name="regex" disabled></textarea>
                        <textarea name="regex" style="display: none;"></textarea>
                        <label data-translate="preferredQuality">首选画质</label>
                        <div class="radio-button-group" name="preferredQuality">
                            <div class="radio-button active" value="auto" data-translate="autoHighest">自动最高</div>
                            <div class="radio-button" value="mpv" data-translate="mpvLiveQuality">全部画质载入 MPV（每档一个编码）</div>
                            <div class="radio-button" value="30000" data-translate="dolby">杜比</div>
                            <div class="radio-button" value="20000" data-translate="fourK">4K</div>
                            <div class="radio-button" value="15000" data-translate="twoK">2K</div>
                            <div class="radio-button" value="10000" data-translate="original">原画</div>
                            <div class="radio-button" value="400" data-translate="blueRay">蓝光</div>
                            <div class="radio-button" value="250" data-translate="superQuality">超清</div>
                            <div class="radio-button" value="150" data-translate="hd">高清</div>
                            <div class="radio-button" value="80" data-translate="smooth">流畅</div>
                        </div>
                        <label data-translate="preferredAudio">音频策略</label>
                        <div class="radio-button-group" name="preferredAudio">
                            <div class="radio-button active" value="auto" data-translate="liveMuxedAudio">跟随直播音画流</div>
                            <div class="radio-button" value="mpv" data-translate="liveMpvAudio">可用独立音轨全部载入 MPV</div>
                        </div>
                        <div class="parser-hint" data-translate="liveAudioHint">仅当直播接口返回真正的独立音频流时载入；普通直播音频已封装在各画质流中。</div>
                        <label data-translate="preferredLine">首选线路</label>
                        <div class="radio-button-group" name="preferredLine">
                            <div class="radio-button active" value="0" data-translate="mainLine">主线</div>
                            <div class="radio-button" value="1" data-translate="backupLine1">备线1</div>
                            <div class="radio-button" value="2" data-translate="backupLine2">备线2</div>
                            <div class="radio-button" value="3" data-translate="backupLine3">备线3</div>
                        </div>
                    </div>
                    <div class="input-group parser" id="youtube">
                        <label><a href="https://github.com/yt-dlp/yt-dlp" target="_blank">YouTube</a></label>
                        <textarea name="regex" disabled></textarea>
                        <textarea name="regex" style="display: none;"></textarea>
                        <label data-translate="preferredQuality">首选画质</label>
                        <div class="radio-button-group" name="preferredQuality">
                            <div class="radio-button active" value="auto" data-translate="autoBestYtdlp">自动最佳</div>
                            <div class="radio-button" value="mpv" data-translate="mpvYoutubeQuality">全部画质载入 MPV</div>
                            <div class="radio-button" value="hdr" data-translate="youtubeHdr">HDR</div>
                            <div class="radio-button" value="4320">8K</div>
                            <div class="radio-button" value="2160">4K</div>
                            <div class="radio-button" value="1440">1440P</div>
                            <div class="radio-button" value="1080">1080P</div>
                            <div class="radio-button" value="720">720P</div>
                            <div class="radio-button" value="480">480P</div>
                            <div class="radio-button" value="360">360P</div>
                            <div class="radio-button" value="240">240P</div>
                            <div class="radio-button" value="144">144P</div>
                        </div>
                        <div class="priority-setting" data-priority-option="preferredQuality">
                            <label data-translate="qualityPriorityTitle">自动/全部载入画质优先级</label>
                            <div class="priority-sorter" name="qualityPriority">
                                <div class="priority-item" draggable="true" value="4320hdr">8K HDR</div>
                                <div class="priority-item" draggable="true" value="4320">8K SDR</div>
                                <div class="priority-item" draggable="true" value="2160hdr">4K HDR</div>
                                <div class="priority-item" draggable="true" value="2160">4K SDR</div>
                                <div class="priority-item" draggable="true" value="1440hdr">1440P HDR</div>
                                <div class="priority-item" draggable="true" value="1440">1440P SDR</div>
                                <div class="priority-item" draggable="true" value="1080hdr">1080P HDR</div>
                                <div class="priority-item" draggable="true" value="1080">1080P SDR</div>
                                <div class="priority-item" draggable="true" value="720hdr">720P HDR</div>
                                <div class="priority-item" draggable="true" value="720">720P SDR</div>
                                <div class="priority-item" draggable="true" value="480">480P</div>
                                <div class="priority-item" draggable="true" value="360">360P</div>
                                <div class="priority-item" draggable="true" value="240">240P</div>
                                <div class="priority-item" draggable="true" value="144">144P</div>
                            </div>
                            <div class="parser-hint" data-translate="priorityDragHint">从左到右优先；拖动可调整顺序。</div>
                        </div>
                        <label data-translate="preferredAudio">音频策略</label>
                        <div class="radio-button-group" name="preferredAudio">
                            <div class="radio-button active" value="auto" data-translate="autoAudio">自动最佳</div>
                            <div class="radio-button" value="mpv" data-translate="mpvAudio">全部载入 MPV</div>
                            <div class="radio-button" value="original" data-translate="originalAudio">原始音轨（无 DRC）</div>
                            <div class="radio-button" value="drc" data-translate="drcAudio">DRC 音轨</div>
                            <div class="radio-button" value="opus">Opus</div>
                            <div class="radio-button" value="aac">AAC / M4A</div>
                        </div>
                        <div class="priority-setting" data-priority-option="preferredAudio">
                            <label data-translate="audioPriorityTitle">自动/全部载入音频优先级</label>
                            <div class="priority-sorter" name="audioPriority">
                                <div class="priority-item" draggable="true" value="multichannel" data-translate="youtubeMultichannel">多声道 / 空间音频</div>
                                <div class="priority-item" draggable="true" value="originalOpus">原始 Opus</div>
                                <div class="priority-item" draggable="true" value="originalAac">原始 AAC / M4A</div>
                                <div class="priority-item" draggable="true" value="drcOpus">DRC Opus</div>
                                <div class="priority-item" draggable="true" value="drcAac">DRC AAC / M4A</div>
                                <div class="priority-item" draggable="true" value="other" data-translate="otherAudio">其他音频</div>
                            </div>
                            <div class="parser-hint" data-translate="priorityDragHint">从左到右优先；拖动可调整顺序。</div>
                        </div>
                        <label data-translate="preferredSubtitle">首选字幕</label>
                        <div class="radio-button-group" name="preferredSubtitle">
                            <div class="radio-button active" value="auto" data-translate="youtubeAutoSubtitle">人工优先 / 自动兜底</div>
                            <div class="radio-button" value="zh-Hans">简体</div>
                            <div class="radio-button" value="zh-Hant">繁体</div>
                            <div class="radio-button" value="en">English</div>
                            <div class="radio-button" value="mpv" data-translate="mpvSubtitle">全部载入 MPV</div>
                            <div class="radio-button" value="off" data-translate="off">关闭</div>
                        </div>
                        <label data-translate="preferredCodec">首选编码</label>
                        <div class="radio-button-group preferred-codec-group ytdlp-codec-group" name="preferredCodec">
                            <div class="radio-button active" value="auto" data-translate="autoCodec">自动最佳</div>
                            <div class="radio-button" value="av1">AV1</div>
                            <div class="radio-button" value="vp9">VP9 / VP9.2</div>
                            <div class="radio-button" value="avc">AVC</div>
                        </div>
                        <label data-translate="preferredPlaylist">播放列表策略</label>
                        <div class="radio-button-group" name="preferredPlaylist">
                            <div class="radio-button active" value="current" data-translate="currentVideo">仅当前视频</div>
                            <div class="radio-button" value="playlist" data-translate="wholePlaylist">完整播放列表</div>
                        </div>
                        <label data-translate="playlistLimit">播放列表获取数量</label>
                        <input type="number" name="playlistLimit" min="1" max="500" step="1" value="50"></input>
                        <div class="parser-hint" data-translate="playlistLimitHint">以当前项为中心截取 1–500 个条目；一侧不足时由另一侧补足。</div>
                    </div>
                    <div class="input-group parser" id="ytdlp">
                        <label><a href="https://github.com/yt-dlp/yt-dlp" target="_blank">yt-dlp</a>&nbsp;<span data-translate="genericParser">(Generic)</span></label>
                        <textarea name="regex" disabled></textarea>
                        <textarea name="regex"></textarea>
                        <div class="parser-hint" data-translate="genericYtdlpHint">通用模式只使用跨站点元数据；实际格式、音轨和字幕由目标站点决定。</div>
                        <label data-translate="genericFormatStrategy">格式策略</label>
                        <div class="radio-button-group" name="preferredQuality">
                            <div class="radio-button active" value="auto" data-translate="ytdlpDefaultFormat">yt-dlp / 站点默认</div>
                            <div class="radio-button" value="mpv" data-translate="mpvYtdlpFormats">所有可用格式载入 MPV</div>
                            <div class="radio-button" value="separate" data-translate="separateStreams">最佳分离音视频</div>
                            <div class="radio-button" value="combined" data-translate="combinedStream">合并流兼容优先</div>
                            <div class="radio-button" value="2160">≤ 2160P</div>
                            <div class="radio-button" value="1440">≤ 1440P</div>
                            <div class="radio-button" value="1080">≤ 1080P</div>
                            <div class="radio-button" value="720">≤ 720P</div>
                            <div class="radio-button" value="480">≤ 480P</div>
                            <div class="radio-button" value="360">≤ 360P</div>
                        </div>
                        <label data-translate="preferredAudio">音频策略</label>
                        <div class="radio-button-group" name="preferredAudio">
                            <div class="radio-button active" value="auto" data-translate="ytdlpDefaultAudio">跟随 yt-dlp 默认</div>
                            <div class="radio-button" value="mpv" data-translate="mpvGenericAudio">所有可用音轨载入 MPV</div>
                            <div class="radio-button" value="multichannel" data-translate="multichannelAudio">多声道优先</div>
                            <div class="radio-button" value="stereo" data-translate="stereoAudio">立体声兼容优先</div>
                        </div>
                        <label data-translate="preferredSubtitle">首选字幕</label>
                        <div class="radio-button-group" name="preferredSubtitle">
                            <div class="radio-button active" value="auto" data-translate="genericAutoSubtitle">界面语言优先</div>
                            <div class="radio-button" value="zh-Hans">简体</div>
                            <div class="radio-button" value="zh-Hant">繁体</div>
                            <div class="radio-button" value="en">English</div>
                            <div class="radio-button" value="mpv" data-translate="mpvSubtitle">全部载入 MPV</div>
                            <div class="radio-button" value="off" data-translate="off">关闭</div>
                        </div>
                        <label data-translate="preferredPlaylist">播放列表策略</label>
                        <div class="radio-button-group" name="preferredPlaylist">
                            <div class="radio-button active" value="current" data-translate="currentVideo">仅当前视频</div>
                            <div class="radio-button" value="playlist" data-translate="wholePlaylist">完整播放列表</div>
                        </div>
                        <label data-translate="playlistLimit">播放列表获取数量</label>
                        <input type="number" name="playlistLimit" min="1" max="500" step="1" value="50"></input>
                        <div class="parser-hint" data-translate="playlistLimitHint">以当前项为中心截取 1–500 个条目；一侧不足时由另一侧补足。</div>
                    </div>
                    <div class="input-group parser" id="video">
                        <label><a href="https://github.com/LibertyPrime6/external-player-mpvbridge" target="_blank">VIDEO</a></label>
                        <textarea name="regex" disabled></textarea>
                        <textarea name="regex"></textarea>
                    </div>
                    <div class="input-group parser" id="url">
                        <label><a href="https://github.com/LibertyPrime6/external-player-mpvbridge" target="_blank">URL</a></label>
                        <textarea name="regex" disabled></textarea>
                        <textarea name="regex"></textarea>
                    </div>
                    <div class="input-group parser" id="html">
                        <label><a href="https://github.com/LibertyPrime6/external-player-mpvbridge" target="_blank">HTML</a></label>
                        <textarea name="regex" disabled></textarea>
                        <textarea name="regex"></textarea>
                    </div>
                    <div class="input-group parser" id="script">
                        <label><a href="https://github.com/LibertyPrime6/external-player-mpvbridge" target="_blank">SCRIPT</a></label>
                        <textarea name="regex" disabled></textarea>
                        <textarea name="regex"></textarea>
                    </div>
                    <div class="input-group parser" id="request">
                        <label><a href="https://github.com/LibertyPrime6/external-player-mpvbridge"
                                target="_blank">REQUEST</a></label>
                        <textarea name="regex" disabled></textarea>
                        <textarea name="regex"></textarea>
                    </div>
                </div>
                <div id="cookies" class="tab">
                    <h2 data-translate="cookieManager">Cookie 认证</h2>
                    <div class="parser-hint" data-translate="cookieManagerHint">每次播放直接更新实际执行到的认证状态；B站当前视频与直播按网页登录、自动 Cookie、已保存 Cookie、匿名依次选择，其他播放列表和 YouTube 从自动 Cookie 开始。</div>
                    <div id="auth-browser"></div>
                    <div class="auth-card" data-auth-site="bilibili">
                        <h3>Bilibili</h3>
                        <div class="auth-grid">
                            <label data-translate="pageRequest">网页请求</label>
                            <span class="auth-state" data-auth-method="page">未检查</span>
                            <label data-translate="automaticCookie">自动 Cookie</label>
                            <span class="auth-state" data-auth-method="automatic">未检查</span>
                            <label data-translate="savedCookieFile">已保存 Cookie 文件</label>
                            <span class="auth-state" data-auth-method="file">未检查</span>
                            <label data-translate="lastAuthUsed">上次使用</label>
                            <span data-auth-last-used>匿名</span>
                        </div>
                        <div class="auth-file-meta" data-auth-file-meta></div>
                        <input type="file" accept=".txt,text/plain" data-auth-file-input hidden>
                        <div class="auth-actions">
                            <button type="button" data-auth-import data-translate="importCookieFile">导入 cookies.txt</button>
                            <button type="button" class="reset-button" data-auth-delete data-translate="deleteCookieFile">删除</button>
                        </div>
                    </div>
                    <div class="auth-card" data-auth-site="youtube">
                        <h3>YouTube</h3>
                        <div class="auth-grid">
                            <label data-translate="automaticCookie">自动 Cookie</label>
                            <span class="auth-state" data-auth-method="automatic">未检查</span>
                            <label data-translate="savedCookieFile">已保存 Cookie 文件</label>
                            <span class="auth-state" data-auth-method="file">未检查</span>
                            <label data-translate="lastAuthUsed">上次使用</label>
                            <span data-auth-last-used>匿名</span>
                        </div>
                        <div class="auth-file-meta" data-auth-file-meta></div>
                        <input type="file" accept=".txt,text/plain" data-auth-file-input hidden>
                        <div class="auth-actions">
                            <button type="button" data-auth-import data-translate="importCookieFile">导入 cookies.txt</button>
                            <button type="button" class="reset-button" data-auth-delete data-translate="deleteCookieFile">删除</button>
                        </div>
                    </div>
                    <button type="button" id="refresh-auth-button" data-translate="refreshAuthentication">刷新认证状态</button>
                    <div id="auth-message"></div>
                </div>
            </div>

            <div style="margin: 0 auto;">
                <button id="save-button" data-translate="save">保存</button>
                <button id="reset-button" class="reset-button" data-translate="reset">重置</button>
            </div>

            <div id="footer">
                <span>
                    <a href="https://github.com/LibertyPrime6" target="_blank">
                        &copy 2026 LibertyPrime6
                    </a>
                    <svg t="1731923678389" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5894" width="32" height="32">
                        <path
                            d="M20.48 503.72608c0 214.4256 137.4208 396.73856 328.94976 463.6672 25.8048 6.5536 21.87264-11.8784 21.87264-24.33024v-85.07392c-148.93056 17.44896-154.86976-81.1008-164.94592-97.52576-20.23424-34.52928-67.91168-43.33568-53.69856-59.76064 33.91488-17.44896 68.48512 4.42368 108.46208 63.61088 28.95872 42.88512 85.44256 35.6352 114.15552 28.4672a138.8544 138.8544 0 0 1 38.0928-66.7648c-154.25536-27.60704-218.60352-121.77408-218.60352-233.79968 0-54.31296 17.94048-104.2432 53.0432-144.54784-22.36416-66.43712 2.08896-123.24864 5.3248-131.6864 63.81568-5.7344 130.00704 45.6704 135.168 49.68448 36.2496-9.78944 77.57824-14.9504 123.82208-14.9504 46.4896 0 88.064 5.3248 124.5184 15.23712 12.288-9.4208 73.80992-53.53472 133.12-48.128 3.15392 8.43776 27.0336 63.93856 6.02112 129.4336 35.59424 40.38656 53.69856 90.76736 53.69856 145.24416 0 112.18944-64.7168 206.4384-219.42272 233.71776a140.0832 140.0832 0 0 1 41.7792 99.9424v123.4944c0.86016 9.87136 0 19.6608 16.50688 19.6608 194.31424-65.49504 334.2336-249.15968 334.2336-465.5104C1002.57792 232.48896 782.66368 12.77952 511.5904 12.77952 240.18944 12.65664 20.48 232.40704 20.48 503.72608z"
                            fill="#000000" opacity=".65" p-id="5895"></path>
                    </svg>
                    <a href="https://github.com/LibertyPrime6/external-player-mpvbridge" target="_blank">
                        External Player for MPVBridge
                    </a>
                    &middot;
                    <a href="https://github.com/LuckyPuppy514/external-player" target="_blank">
                        Based on External Player by LuckyPuppy514
                    </a>
                </span>
            </div>
        </div>
    </body>
    <script${settingScriptNonce}>
        const translations = {
            en: {
                global: 'Global Config',
                version: 'Version',
                language: 'Language',
                buttonCoord: 'Button Coord',
                buttonScale: 'Button Scale',
                buttonVisibilityDuration: 'Button Visibility Duration (ms, -1: Keep Visible)',
                networkProxy: 'Network Proxy',
                reset: 'Reset',
                save: 'Save',
                delete: 'Delete',
                name: 'Name',
                system: 'System',
                icon: 'Icon',
                iconSize: 'Icon Size',
                playEvent: 'Play Event',
                enable: 'Enable',
                parser: 'Parser',
                preferredQuality: 'Preferred Quality',
                preferredAudio: 'Audio Strategy',
                qualityPriorityTitle: 'Auto / Load-All Quality Priority',
                audioPriorityTitle: 'Auto / Load-All Audio Priority',
                priorityDragHint: 'Higher priority is on the left; drag items to reorder.',
                youtubeMultichannel: 'Multichannel / Spatial Audio',
                otherAudio: 'Other Audio',
                preferredSubtitle: 'Preferred Subtitle',
                preferredCodec: 'Preferred Codec',
                preferredPlaylist: 'Playlist Strategy',
                cookieManager: 'Cookie Authentication',
                cookieManagerHint: 'Each playback updates the authentication methods it actually checks. Bilibili current video and live try browser session, Automatic Cookie, Saved Cookie, then Anonymous; Bilibili playlists and YouTube start with Automatic Cookie.',
                pageRequest: 'Page Request',
                automaticCookie: 'Automatic Cookie',
                savedCookieFile: 'Saved Cookie File',
                lastAuthUsed: 'Last Used',
                importCookieFile: 'Import cookies.txt',
                deleteCookieFile: 'Delete',
                refreshAuthentication: 'Refresh Authentication',
                playlistLimit: 'Playlist Item Limit',
                playlistLimitHint: 'Take 1–500 items centered on the current item; if one side runs out, fill the remainder from the other side.',
                collectionLimit: 'Collection Video Limit',
                collectionLimitHint: 'Take 1–500 collection videos centered on the current video; fill from the other side at an edge, and keep each BV as one item.',
                partLimit: 'Multi-part Limit',
                partLimitHint: 'Take 1–500 parts centered on the current part; fill from the other side at an edge.',
                finalPlaylistLimit: 'Final Playlist Item Limit',
                finalPlaylistLimitHint: 'Expand collection videos and parts, then take 1–500 final items centered on the current item and fill from the other side at an edge.',
                autoCodec: 'Auto Best (per Quality)',
                dolbyAtmos: 'Dolby Atmos',
                hiResLossless: 'Hi-Res Lossless',
                preferredLine: 'Preferred Line',
                original: 'Original',
                blueRay: 'Blu-ray',
                superQuality: 'Super Quality',
                hd: 'HD',
                smooth: 'Smooth',
                mainLine: 'Main',
                backupLine1: 'Backup 1',
                backupLine2: 'Backup 2',
                backupLine3: 'Backup 3',
                unlimited: 'Unlimited',
                autoHighest: 'Auto Highest',
                dolby: 'Dolby',
                fourK: '4K',
                twoK: '2K',
                autoBest: 'Auto (Dolby Vision / HDR First)',
                mpvQuality: 'Load All in MPV (one codec per quality)',
                autoBestYtdlp: 'Auto Best (HDR / Resolution / FPS)',
                mpvYoutubeQuality: 'Load All Qualities in MPV (Best Codec Each)',
                mpvLiveQuality: 'Load All Live Qualities in MPV (Best Codec Each)',
                mpvYtdlpFormats: 'Load All Formats in MPV',
                genericYtdlpHint: 'Generic mode uses only cross-site metadata. Actual formats, audio tracks, and subtitles depend on the target site.',
                genericParser: '(Generic)',
                genericFormatStrategy: 'Format Strategy',
                ytdlpDefaultFormat: 'yt-dlp / Site Default',
                separateStreams: 'Best Separate Video + Audio',
                combinedStream: 'Prefer Compatible Combined Stream',
                ytdlpDefaultAudio: 'Follow yt-dlp Default',
                mpvGenericAudio: 'Load All Available Audio Tracks in MPV',
                multichannelAudio: 'Prefer Multichannel',
                stereoAudio: 'Prefer Stereo Compatibility',
                genericAutoSubtitle: 'Interface Language First',
                youtubeHdr: 'HDR (Highest Available)',
                dolbyVision: 'Dolby Vision',
                hdr: 'HDR Vivid',
                autoAudio: 'Auto Best',
                mpvAudio: 'Load All in MPV',
                liveMuxedAudio: 'Follow Muxed Live Stream',
                liveMpvAudio: 'Load Available Separate Audio in MPV',
                liveAudioHint: 'Separate tracks are loaded only when the live API really returns audio-only streams; normal live audio is already muxed into every quality stream.',
                originalAudio: 'Original Audio (No DRC)',
                drcAudio: 'DRC Audio',
                autoSubtitle: 'Auto Language',
                youtubeAutoSubtitle: 'Manual First / Auto Fallback',
                mpvSubtitle: 'Load All in MPV',
                currentVideo: 'Current Video Only',
                collectionOnly: 'Collection Only',
                partsOnly: 'Parts Only',
                wholePlaylist: 'Whole Playlist',
                off: 'OFF',
                presetEvent: 'Preset Event',
                playAuto: 'Play Automatically',
                pauseAuto: 'Pause Automatically',
                closeAuto: 'Close Automatically',
                syncTime: 'Synchronize Time',
            },
            zh: {
                global: '全局配置',
                version: '版本',
                language: '语言',
                buttonCoord: '按钮坐标',
                buttonScale: '按钮比例',
                buttonVisibilityDuration: '按钮可见时长（毫秒，-1：一直可见）',
                networkProxy: '网络代理',
                reset: '重置',
                save: '保存',
                delete: '删除',
                name: '名称',
                system: '系统',
                icon: '图标',
                iconSize: '图标大小',
                playEvent: '播放事件',
                enable: '启用',
                parser: '解析器',
                preferredQuality: '首选画质',
                preferredAudio: '音频策略',
                qualityPriorityTitle: '自动/全部载入画质优先级',
                audioPriorityTitle: '自动/全部载入音频优先级',
                priorityDragHint: '从左到右优先；拖动可调整顺序。',
                youtubeMultichannel: '多声道 / 空间音频',
                otherAudio: '其他音频',
                preferredSubtitle: '首选字幕',
                preferredCodec: '首选编码',
                preferredPlaylist: '播放列表策略',
                cookieManager: 'Cookie 认证',
                cookieManagerHint: '每次播放直接更新实际执行到的认证状态；B站当前视频与直播按网页登录、自动 Cookie、已保存 Cookie、匿名依次选择，其他播放列表和 YouTube 从自动 Cookie 开始。',
                pageRequest: '网页请求',
                automaticCookie: '自动 Cookie',
                savedCookieFile: '已保存 Cookie 文件',
                lastAuthUsed: '上次使用',
                importCookieFile: '导入 cookies.txt',
                deleteCookieFile: '删除',
                refreshAuthentication: '刷新认证状态',
                playlistLimit: '播放列表获取数量',
                playlistLimitHint: '以当前项为中心截取 1–500 个条目；一侧不足时由另一侧补足。',
                collectionLimit: '合集最大获取数量',
                collectionLimitHint: '以当前视频为中心截取 1–500 个合集视频；一侧不足时由另一侧补足，每个 BV 只作为一个播放项。',
                partLimit: '分P最大获取数量',
                partLimitHint: '以当前分P为中心截取 1–500 个分P；一侧不足时由另一侧补足。',
                finalPlaylistLimit: '完整列表最大播放项数',
                finalPlaylistLimitHint: '合集和分P展开后，以当前项为中心截取 1–500 个最终播放项；一侧不足时由另一侧补足。',
                autoCodec: '自动最佳（按画质）',
                dolbyAtmos: '杜比全景声',
                hiResLossless: 'Hi-Res 无损',
                preferredLine: '首选线路',
                original: '原画',
                blueRay: '蓝光',
                superQuality: '超清',
                hd: '高清',
                smooth: '流畅',
                mainLine: '主线',
                backupLine1: '备线1',
                backupLine2: '备线2',
                backupLine3: '备线3',
                unlimited: '无限制',
                autoHighest: '自动最高',
                dolby: '杜比',
                fourK: '4K',
                twoK: '2K',
                autoBest: '自动最佳（杜比视界/HDR优先）',
                mpvQuality: '全部载入 MPV（每档一个编码）',
                autoBestYtdlp: '自动最佳（HDR/分辨率/帧率）',
                mpvYoutubeQuality: '全部画质载入 MPV（每档最佳编码）',
                mpvLiveQuality: '全部画质载入 MPV（每档一个最佳编码）',
                mpvYtdlpFormats: '全部格式载入 MPV',
                genericYtdlpHint: '通用模式只使用跨站点元数据；实际格式、音轨和字幕由目标站点决定。',
                genericParser: '（通用）',
                genericFormatStrategy: '格式策略',
                ytdlpDefaultFormat: 'yt-dlp / 站点默认',
                separateStreams: '最佳分离音视频',
                combinedStream: '合并流兼容优先',
                ytdlpDefaultAudio: '跟随 yt-dlp 默认',
                mpvGenericAudio: '所有可用音轨载入 MPV',
                multichannelAudio: '多声道优先',
                stereoAudio: '立体声兼容优先',
                genericAutoSubtitle: '界面语言优先',
                youtubeHdr: 'HDR（最高可用）',
                dolbyVision: '杜比视界',
                hdr: 'HDR 真彩',
                autoAudio: '自动最佳',
                mpvAudio: '全部载入 MPV',
                liveMuxedAudio: '跟随直播音画流',
                liveMpvAudio: '可用独立音轨全部载入 MPV',
                liveAudioHint: '仅当直播接口真正返回独立音频流时载入；普通直播音频已封装在各画质流中。',
                originalAudio: '原始音轨（无 DRC）',
                drcAudio: 'DRC 音轨',
                autoSubtitle: '自动语言',
                youtubeAutoSubtitle: '人工优先 / 自动兜底',
                mpvSubtitle: '全部载入 MPV',
                currentVideo: '仅当前视频',
                collectionOnly: '仅合集',
                partsOnly: '仅分P',
                wholePlaylist: '完整播放列表',
                off: '关闭',
                presetEvent: '预设事件',
                playAuto: '自动播放',
                pauseAuto: '自动暂停',
                closeAuto: '自动关闭',
                syncTime: '同步时间',
            }
        };

        const SYSTEM_SVG = {
            windows: '<svg t="1732017849573" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5376" width="32" height="32"><path d="M523.8 191.4v288.9h382V128.1zM523.8 833.6l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zM120.1 770.6L443 823.2V543.8H120.1z" p-id="5377"></path></svg>',
            linux: '<svg t="1732017810402" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4326" width="32" height="32"><path d="M834.198588 918.588235c-30.659765 15.661176-71.559529 50.115765-86.618353 64.572236-11.324235 10.782118-58.066824 16.203294-84.449882 2.710588-30.659765-15.661176-14.516706-40.417882-61.861647-41.923765-23.672471-0.602353-46.802824-0.602353-69.933177-0.602353-20.419765 0.602353-40.839529 1.626353-61.861647 2.108235-70.957176 1.626353-77.944471 47.405176-123.723294 45.778824-31.201882-1.084235-70.415059-25.840941-138.24-39.755294-47.344941-9.758118-93.003294-12.348235-102.761412-33.370353-9.637647-21.022118 11.866353-44.634353 13.432471-65.054118 1.626353-27.467294-20.419765-64.572235-4.276706-78.607059 13.974588-12.348235 43.550118-3.252706 62.885647-13.914352 20.419765-11.806118 29.033412-21.022118 29.033412-46.260706 7.529412 25.720471-0.542118 46.682353-17.227294 56.922353-10.24 6.445176-29.033412 9.697882-44.694588 8.131764-12.348235-1.144471-19.877647 0.481882-23.130353 5.360941-4.818824 5.903059-3.252706 16.685176 2.710588 30.659765 5.903059 13.974588 12.890353 23.130353 11.806118 40.297412-0.542118 17.227294-19.877647 37.707294-16.624942 52.224 1.084235 5.421176 6.445176 10.24 19.877647 13.974588 21.504 5.903059 60.777412 11.806118 98.966589 21.022118 42.526118 10.721882 86.618353 30.057412 114.085647 26.322823 81.739294-11.324235 34.936471-98.966588 22.046117-119.868235-69.391059-108.724706-115.109647-179.681882-151.67247-151.732706-9.155765 7.529412-9.697882-18.311529-9.155765-28.551529 1.626353-35.538824 19.395765-48.368941 30.117647-75.836236 20.419765-52.224 36.020706-111.856941 67.222588-142.516705 23.311059-30.177882 59.873882-79.088941 66.921412-104.869647-5.963294-55.958588-7.589647-115.109647-8.613647-166.671059-1.084235-55.416471 7.529412-103.905882 69.933177-137.697883C453.391059 33.310118 473.268706 30.117647 494.290824 30.117647c37.104941-0.602353 78.486588 10.24 104.869647 29.575529 41.984 31.201882 68.306824 97.340235 65.114353 144.624942-2.168471 37.104941 4.276706 75.294118 16.143058 115.109647 13.974588 46.802824 36.080941 79.570824 71.55953 117.217882 42.526118 45.176471 75.836235 133.903059 85.534117 190.343529 8.613647 52.826353-3.252706 85.594353-14.516705 87.220706-17.227294 2.590118-27.949176 56.922353-81.739295 54.814118-34.394353-1.626353-37.647059-22.046118-47.344941-39.815529-15.600941-27.407059-31.201882-18.793412-37.104941 10.24-3.252706 14.516706-1.144471 36.080941 3.734588 52.103529 9.697882 33.912471 6.445176 65.656471 0.542118 104.929882-11.324235 74.209882 52.163765 88.184471 94.689882 52.645647 41.923765-34.876235 51.079529-40.297412 103.785412-58.608941 80.112941-27.467294 53.248-51.621647 10.179765-66.138353-38.731294-12.950588-40.297412-78.064941-26.383059-90.413176 3.252706 69.933176 39.815529 80.173176 54.874353 89.810823 66.138353 41.020235-24.756706 74.932706-64.030118 94.810353z m-90.352941-259.734588c14.516706-48.489412 8.071529-67.764706-1.566118-113.543529-7.529412-34.394353-39.273412-81.257412-64.030117-95.713883 6.445176 5.360941 18.311529 20.961882 30.659764 44.574118 21.504 40.417882 43.008 100.050824 29.033412 149.564235-5.360941 19.275294-18.251294 21.985882-26.864941 22.528-37.647059 4.336941-15.600941-45.176471-31.201882-112.338823-17.769412-75.354353-36.020706-80.715294-40.297412-86.618353-22.166588-97.822118-46.320941-88.124235-53.368471-124.687059-5.903059-32.828235 28.551529-59.693176-18.251294-68.848941-14.516706-2.710588-34.936471-17.227294-43.008-18.31153-8.071529-1.024-12.408471-54.332235 17.709177-55.958588 29.575529-2.168471 34.996706 33.370353 29.575529 47.405177-8.553412 13.914353 0.542118 19.335529 15.119059 14.45647 11.806118-3.734588 4.276706-34.936471 6.987294-39.213176-7.529412-45.176471-26.383059-51.621647-45.718588-55.416471-74.270118 5.903059-40.899765 87.702588-48.429177 80.173177-10.782118-11.324235-41.923765-1.084235-41.923764-8.131765 0.542118-41.923765-13.492706-66.138353-32.828236-66.680471-21.504-0.542118-30.117647 29.575529-31.201882 46.742589-1.626353 16.143059 9.155765 50.115765 17.227294 47.405176 5.360941-1.626353 14.516706-12.408471 4.818824-11.806118-4.818824 0-12.348235-11.866353-13.432471-25.840941-0.542118-14.034824 4.879059-28.009412 23.130353-27.467294 20.961882 0.542118 20.961882 42.465882 18.793412 44.092235-6.927059 4.818824-15.600941 14.034824-16.685177 15.600942-6.927059 11.324235-20.359529 14.456471-25.780706 19.395764-9.155765 9.637647-11.264 20.419765-4.276705 24.154353 24.696471 13.974588 16.624941 30.057412 51.079529 31.262118 22.588235 1.084235 39.213176-3.252706 54.874353-8.07153 11.806118-3.734588 50.055529-11.806118 58.066823-25.840941 3.734588-5.903059 8.071529-5.903059 10.721883-4.276706 5.360941 2.650353 6.445176 12.890353-6.987294 16.143059-18.793412 5.421176-37.647059 15.661176-54.814118 22.106353-16.685176 6.927059-22.046118 9.637647-37.647059 12.288-35.478588 6.445176-61.801412-12.890353-38.189176 10.24 8.071529 7.529412 15.600941 12.348235 36.020706 11.866353 45.176471-1.626353 95.232-56.018824 100.050823-31.804235 1.024 5.360941-14.034824 11.806118-25.840941 17.769412-41.923765 20.419765-71.499294 61.319529-98.424471 47.284705-24.214588-12.890353-48.368941-72.643765-47.887058-45.658353 0.542118 41.381647-54.332235 77.944471-29.033412 125.289412-16.685176 4.216471-53.790118 83.365647-59.151059 124.205177-3.252706 23.672471 2.168471 52.705882-3.794824 68.848941-8.071529 23.672471-44.634353-22.588235-32.768-79.028706 2.108235-9.637647 0-11.866353-2.710588-6.927059-14.516706 26.322824-6.445176 63.427765 5.360941 89.208471 4.879059 11.324235 17.227294 16.143059 26.383059 25.840941 18.793412 21.443765 93.003294 76.378353 105.953883 89.810823a33.008941 33.008941 0 0 1-22.588236 55.898353c17.769412 33.370353 34.936471 36.623059 34.454588 90.895059 20.419765-10.721882 12.408471-34.394353 3.734589-49.392941-5.963294-10.842353-13.432471-15.661176-11.866353-18.311529 1.084235-1.626353 11.866353-10.842353 17.769412-3.734589 18.251294 20.419765 52.705882 24.154353 89.268705 19.33553 37.104941-4.336941 76.920471-17.227294 95.171765-46.802824 8.613647-13.974588 14.516706-18.793412 18.31153-16.143059 4.276706 2.108235 5.963294 11.806118 5.360941 27.949177-0.542118 17.227294-7.529412 34.996706-12.348236 49.513412-4.879059 16.685176-6.445176 27.949176 9.697883 28.551529 4.276706-30.177882 12.890353-59.753412 15.058823-89.871059 2.710588-34.394353-22.046118-97.822118 4.879059-129.626353 6.987294-8.613647 15.540706-9.637647 27.407059-9.637647 1.566118-43.068235 67.764706-39.755294 89.810823-22.046117 0-9.758118-20.961882-18.853647-29.575529-22.648471zM304.971294 503.988706c-3.794824 6.927059-13.432471 12.288-5.963294 13.43247 2.710588 0.542118 10.24-6.023529 13.492706-13.43247 2.650353-9.155765 5.360941-14.034824 1.084235-15.661177-4.879059-1.566118-3.794824 8.071529-8.613647 15.661177z m123.120941-291.538824c-6.445176-1.626353-5.360941 8.011294-2.108235 6.987294 2.168471 0 4.879059 3.252706 3.734588 8.07153-1.084235 6.445176-0.542118 10.842353 4.336941 10.842353 0.542118 0 1.566118 0 1.566118-1.626353 2.228706-13.552941-4.276706-23.190588-7.529412-24.274824z m14.576941 49.453177c-5.360941 0.542118-4.336941-11.866353 12.890353-10.782118-10.782118 1.084235-6.987294 10.782118-12.890353 10.782118z m44.092236-9.155765c15.600941-6.927059 20.961882 3.794824 15.600941 5.963294-5.421176 1.566118-5.963294-8.673882-15.600941-5.963294z m65.054117-43.550118c-6.987294 0.602353-4.818824 3.734588-1.566117 4.818824 4.276706 1.204706 8.613647 8.673882 9.697882 16.685176 0 1.084235 5.360941-1.084235 5.360941-2.710588 0.481882-12.830118-10.782118-19.275294-13.492706-18.793412z m31.201883-116.133647c-4.276706-4.336941-8.613647-8.131765-12.890353-8.131764-10.782118 1.084235-5.421176 12.348235-6.987294 17.769411-2.168471 5.903059-10.179765 10.782118-4.818824 15.058824 4.879059 3.734588 8.071529-5.903059 18.31153-9.637647 2.650353-1.144471 15.058824 0.481882 17.709176-5.421177 0.481882-2.710588-6.445176-5.903059-11.324235-9.637647z m59.693176 237.628236c-10.179765-6.384941-12.348235-17.167059-16.082823-13.432471-11.324235 12.348235 13.974588 38.189176 24.69647 40.417882 6.445176 1.084235 11.324235-7.589647 9.697883-15.119058-2.168471-10.179765-9.697882-6.445176-18.31153-11.866353z" p-id="4327"></path></svg>',
            mac: '<svg t="1731999754869" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7764" width="32" height="32"><path d="M849.124134 704.896288c-1.040702 3.157923-17.300015 59.872622-57.250912 118.190843-34.577516 50.305733-70.331835 101.018741-126.801964 101.909018-55.532781 0.976234-73.303516-33.134655-136.707568-33.134655-63.323211 0-83.23061 32.244378-135.712915 34.110889-54.254671 2.220574-96.003518-54.951543-130.712017-105.011682-70.934562-102.549607-125.552507-290.600541-52.30118-416.625816 36.040844-63.055105 100.821243-103.135962 171.364903-104.230899 53.160757-1.004887 103.739712 36.012192 136.028093 36.012192 33.171494 0 94.357018-44.791136 158.90615-38.089503 27.02654 1.151219 102.622262 11.298324 151.328567 81.891102-3.832282 2.607384-90.452081 53.724599-89.487104 157.76107C739.079832 663.275355 847.952448 704.467523 849.124134 704.896288M633.69669 230.749408c29.107945-35.506678 48.235584-84.314291 43.202964-132.785236-41.560558 1.630127-92.196819 27.600615-122.291231 62.896492-26.609031 30.794353-50.062186 80.362282-43.521213 128.270409C557.264926 291.935955 604.745311 264.949324 633.69669 230.749408" p-id="7765"></path></svg>'
        };

        var policy;
        try {
            policy = window.trustedTypes.createPolicy('default', {
                createHTML: (string, sink) => string,
                createScript: (input) => input
            })
        } catch (error) {
            policy = {
                createHTML: (string, sink) => string,
                createScript: (input) => input
            }
        }

        var defaultConfig;
        var tabCount = 0;
        var projectName;
        var currentAuthSnapshot;
        var currentLanguage = 'zh';

        function translatePage(language) {
            currentLanguage = language;
            const trans = translations[language];
            document.querySelectorAll('[data-translate]').forEach(el => {
                el.textContent = trans[el.getAttribute('data-translate')] || el.textContent;
            });
            renderAuthSnapshot(currentAuthSnapshot);
        }

        function formatAuthTime(value) {
            return value ? new Date(value).toLocaleString() : '-';
        }

        function getAuthStateText(method, state) {
            const zh = currentLanguage === 'zh';
            if (state === 'available') return zh ? '可用' : 'Available';
            if (method === 'page' && state === 'loggedOut') return zh ? '未登录' : 'Logged out';
            if (state === 'invalid') return zh ? '失效' : 'Invalid';
            if (state === 'unverified') return zh ? '验证未通过' : 'Not verified';
            if (state === 'unavailable') return zh ? '未获取' : 'Not found';
            if (state === 'disabled') return zh ? '已停用' : 'Disabled';
            return zh ? '未检查' : 'Unchecked';
        }

        function getAuthSourceText(source) {
            const zh = currentLanguage === 'zh';
            const labels = zh ? {
                page: '网页请求', automatic: '自动 Cookie', file: 'Cookie 文件', anonymous: '匿名'
            } : {
                page: 'Page request', automatic: 'Automatic Cookie', file: 'Cookie file', anonymous: 'Anonymous'
            };
            return labels[source] || labels.anonymous;
        }

        function renderAuthSnapshot(auth) {
            if (!auth) return;
            currentAuthSnapshot = auth;
            const zh = currentLanguage === 'zh';
            const browser = document.getElementById('auth-browser');
            if (browser) {
                browser.textContent = (zh ? '检测到的浏览器：' : 'Detected browser: ') +
                    (auth.browser?.name || 'Unknown');
            }
            document.querySelectorAll('[data-auth-site]').forEach(card => {
                const site = card.getAttribute('data-auth-site');
                const siteStatus = auth.sites?.[site] || {};
                card.querySelectorAll('[data-auth-method]').forEach(element => {
                    const method = element.getAttribute('data-auth-method');
                    const methodStatus = siteStatus[method] || { state: 'unchecked' };
                    element.className = 'auth-state ' + methodStatus.state;
                    element.textContent = getAuthStateText(method, methodStatus.state);
                    element.title = methodStatus.detail ||
                        ((zh ? '上次检查：' : 'Last checked: ') + formatAuthTime(methodStatus.checkedAt));
                });
                const lastUsed = card.querySelector('[data-auth-last-used]');
                if (lastUsed) lastUsed.textContent = getAuthSourceText(siteStatus.lastUsed);
                const file = auth.files?.[site];
                const meta = card.querySelector('[data-auth-file-meta]');
                if (meta) {
                    meta.textContent = file ?
                        (zh ? '文件：' + file.fileName + '；Cookie：' + file.cookieCount + '；验证：' +
                            formatAuthTime(file.validatedAt) : 'File: ' + file.fileName + '; Cookies: ' +
                            file.cookieCount + '; validated: ' + formatAuthTime(file.validatedAt)) :
                        (zh ? '尚未保存 Cookie 文件' : 'No saved Cookie file');
                }
            });
        }

        function showAuthMessage(message, failed = false) {
            const element = document.getElementById('auth-message');
            element.textContent = message || '';
            element.style.color = failed ? '#9b2c2c' : '#0b6b2a';
        }

        function initializeAuthControls() {
            document.getElementById('cookies-button').onclick = () => activateTab('cookies');
            document.getElementById('refresh-auth-button').onclick = () => {
                showAuthMessage(currentLanguage === 'zh' ? '正在检查认证状态……' : 'Checking authentication...');
                parent.postMessage({ name: projectName, method: 'refreshAuthentication' }, '*');
            };
            document.querySelectorAll('[data-auth-site]').forEach(card => {
                const site = card.getAttribute('data-auth-site');
                const input = card.querySelector('[data-auth-file-input]');
                card.querySelector('[data-auth-import]').onclick = () => input.click();
                input.onchange = async () => {
                    const file = input.files?.[0];
                    input.value = '';
                    if (!file) return;
                    if (file.size > 2 * 1024 * 1024) {
                        showAuthMessage(currentLanguage === 'zh' ? 'Cookie 文件不能超过 2 MB' :
                            'Cookie file must not exceed 2 MB', true);
                        return;
                    }
                    showAuthMessage(currentLanguage === 'zh' ?
                        '正在进行登录验证和 yt-dlp 预检，通过后才会保存……' :
                        'Running login validation and yt-dlp preflight before saving...');
                    parent.postMessage({
                        name: projectName,
                        method: 'importCookieFile',
                        site,
                        fileName: file.name,
                        text: await file.text()
                    }, '*');
                };
                card.querySelector('[data-auth-delete]').onclick = () => {
                    const confirmed = window.confirm(currentLanguage === 'zh' ?
                        '确定删除该站点已保存的 Cookie？' : 'Delete the saved Cookie for this site?');
                    if (confirmed) {
                        parent.postMessage({ name: projectName, method: 'deleteCookieFile', site }, '*');
                    }
                };
            });
        }

        function createTab(tabId, tabName = \`Player \${tabCount}\`, config = {}) {
            const tabButton = document.createElement('button');
            tabButton.className = 'tab-button';
            tabButton.textContent = tabName;
            tabButton.dataset.tab = tabId;
            // Cookie 认证是固定全局项；播放器标签始终排在它后面。
            sidebar.appendChild(tabButton);

            const tab = document.createElement('div');
            tab.id = tabId;
            tab.name = tabName;
            tab.className = 'tab';
            tab.setAttribute('readonly', config.readonly === true)
            const disabled = config.readonly === true ? 'disabled' : '';
            config.presetEvent = config.presetEvent || {
                pauseAuto: true,
                syncTime: false,
            };
            tab.innerHTML = policy.createHTML(\`
                <div class="header">
                    <button class="remove-button" data-translate="delete" \${disabled}>删除</button>
                </div>
                <div class="input-group">
                    <label data-translate="name">名称</label>
                    <input type="text" value="\${config.name || tabName}" name="name" placeholder="\${tabName}" required \${disabled}>
                </div>
                <div class="input-group">
                    <label data-translate="system">系统</label>
                    <div class="radio-button-group" name="system">
                        <div class="radio-button active \${disabled}" value="windows">\${SYSTEM_SVG.windows} Windows</div>
                        <div class="radio-button \${disabled}" value="linux">\${SYSTEM_SVG.linux} Linux</div>
                        <div class="radio-button \${disabled}" value="mac">\${SYSTEM_SVG.mac} Mac</div>
                    </div>
                </div>
                <div class="input-group">
                    <label data-translate="iconSize">图标大小</label>
                    <input type="number" value="\${config.iconSize || 50}" name="iconSize" min="1" required>
                </div>
                <div class="input-group">
                    <label data-translate="icon">图标</label>
                    <input type="search" value="\${config.icon || ''}" name="icon" required>
                </div>
                <div class="input-group">
                    <label data-translate="presetEvent">预设事件</label>
                    <div class="checkbox-group">
                        <input type="checkbox" id="\${tabId}-play-auto" name="playAuto" \${config.presetEvent.playAuto ? 'checked' : ''}/>
                        <label for="\${tabId}-play-auto" data-translate="playAuto" class="chekbox-label">自动播放</label>
                        <input type="checkbox" id="\${tabId}-pause-auto" name="pauseAuto"  \${config.presetEvent.pauseAuto ? 'checked' : ''}/>
                        <label for="\${tabId}-pause-auto" data-translate="pauseAuto" class="chekbox-label">自动暂停</label>
                        <input type="checkbox" id="\${tabId}-close-auto" name="closeAuto"  \${config.presetEvent.closeAuto ? 'checked' : ''}/>
                        <label for="\${tabId}-close-auto" data-translate="closeAuto" class="chekbox-label">自动关闭</label>
                        <input type="checkbox" id="\${tabId}-sync-time" name="syncTime"  \${config.presetEvent.syncTime ? 'checked' : ''}/>
                        <label for="\${tabId}-sync-time" data-translate="syncTime" class="chekbox-label">同步时间</label>
                    </div>
                </div>
                <div class="input-group">
                    <label data-translate="playEvent">播放事件</label>
                    <textarea class="tab-textarea" wrap="off" \${disabled} name="playEvent">\${config.playEvent || ''}</textarea>
                </div>
                <div class="input-group">
                    <label data-translate="enable">启用</label>
                    <label class="switch">
                        <input type="checkbox" class="tab-switch" \${config.enable || config.enable === undefined ? 'checked' : ''} name="enable"><span class="switch-slider"></span>
                    </label>
                </div>
            \`);
            content.appendChild(tab);

            tab.querySelector('.remove-button').onclick = () => {
                const previousElement = tabButton.previousElementSibling;
                sidebar.removeChild(tabButton);
                content.removeChild(tab);
                activateTab(previousElement.getAttribute('data-tab'));
            };

            const nameInput = tab.querySelector('[name="name"]');
            nameInput.oninput = () => {
                tabButton.innerHTML = policy.createHTML(SYSTEM_SVG[tab.querySelector('[name=system] .active').getAttribute('value')] + (
                    nameInput.value || tabName));
            };

            config.system = config.system || 'windows';
            tab.querySelectorAll('[name=system]').forEach(radioButtonGroup => {
                const radioButtons = radioButtonGroup.querySelectorAll('.radio-button');
                radioButtons.forEach(radioButton => {
                    radioButton.onclick = () => {
                        radioButtons.forEach(btn => btn.classList.remove('active'));
                        radioButton.classList.add('active');
                        tabButton.innerHTML = policy.createHTML(SYSTEM_SVG[radioButton.getAttribute('value')] + (nameInput
                            .value || tabName));
                    };
                    if (radioButton.getAttribute('value') === config.system) {
                        radioButton.classList.add('active');
                        tabButton.innerHTML = policy.createHTML(SYSTEM_SVG[radioButton.getAttribute('value')] + (nameInput
                            .value || tabName));
                    } else {
                        radioButton.classList.remove('active');
                    }
                });
            })

            tabButton.onclick = () => activateTab(tabId);

            activateTab(tabId);
        }

        function activateTab(tabId) {
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            document.querySelector(\`[data-tab="\${tabId}"]\`).classList.add('active');
            document.querySelector('#content').scrollTop = 0;
        }

        function updatePlaylistLimitVisibility(parser) {
            if (!parser) {
                return;
            }
            const mode = parser.querySelector('[name="preferredPlaylist"] .radio-button.active')?.getAttribute('value');
            parser.querySelectorAll('.playlist-limit-setting').forEach(setting => {
                setting.hidden = setting.getAttribute('data-playlist-mode') !== mode;
            });
        }

        function updatePriorityVisibility(parser) {
            if (!parser) {
                return;
            }
            parser.querySelectorAll('.priority-setting').forEach(setting => {
                const optionName = setting.getAttribute('data-priority-option');
                const mode = parser.querySelector('[name="' + optionName + '"] .radio-button.active')
                    ?.getAttribute('value');
                setting.hidden = !['auto', 'mpv'].includes(mode);
            });
        }

        function applyPriorityValue(sorter, value) {
            if (!sorter) {
                return;
            }
            const items = Array.from(sorter.querySelectorAll('.priority-item'));
            const byValue = new Map(items.map(item => [item.getAttribute('value'), item]));
            const order = String(value || '').split(',').map(item => item.trim()).filter(Boolean);
            [...order, ...items.map(item => item.getAttribute('value'))].forEach(itemValue => {
                const item = byValue.get(itemValue);
                if (item) {
                    sorter.appendChild(item);
                    byValue.delete(itemValue);
                }
            });
        }

        function initializePrioritySorter(sorter) {
            let draggedItem;
            sorter.querySelectorAll('.priority-item').forEach(item => {
                item.addEventListener('dragstart', event => {
                    draggedItem = item;
                    item.classList.add('dragging');
                    event.dataTransfer.effectAllowed = 'move';
                    event.dataTransfer.setData('text/plain', item.getAttribute('value') || '');
                });
                item.addEventListener('dragend', () => {
                    item.classList.remove('dragging');
                    draggedItem = undefined;
                });
            });
            sorter.addEventListener('dragover', event => {
                event.preventDefault();
                const target = event.target.closest('.priority-item');
                if (!draggedItem || !target || target === draggedItem || target.parentElement !== sorter) {
                    return;
                }
                const rect = target.getBoundingClientRect();
                const sameRow = event.clientY >= rect.top && event.clientY <= rect.bottom;
                const insertAfter = sameRow ? event.clientX > rect.left + rect.width / 2 :
                    event.clientY > rect.top + rect.height / 2;
                sorter.insertBefore(draggedItem, insertAfter ? target.nextSibling : target);
            });
            sorter.addEventListener('drop', event => event.preventDefault());
        }

        function saveConfig() {
            const ytdlp = document.querySelector('#ytdlp');
            const ytdlpRegex = ytdlp.querySelector('[name="regex"]:not([disabled])').value;

            const bilibili = document.querySelector('#bilibili');
            const bilibiliRegex = bilibili.querySelector('[name="regex"]:not([disabled])').value;

            const config = {
                global: {
                    parser: {}
                },
                players: []
            };

            for (const id in defaultConfig.global.parser) {
                const parser = document.getElementById(id);
                if (!parser) {
                    continue;
                }
                const regex = parser.querySelector('[name="regex"]:not([disabled])').value;
                config.global.parser[id] = {};
                config.global.parser[id].regex = regex ? regex.split('\\n') : [];
                for (const name in defaultConfig.global.parser[id]) {
                    if (name === 'regex') {
                        continue;
                    }
                    const field = parser.querySelector(\`[name="\${name}"]\`);
                    const activeOption = field?.querySelector('.active');
                    let value = field?.classList.contains('priority-sorter') ?
                        Array.from(field.querySelectorAll('.priority-item'))
                            .map(item => item.getAttribute('value')).join(',') :
                        field?.matches('input[type="checkbox"]') ? field.checked : activeOption ?
                            activeOption.getAttribute('value') : field?.value ?? defaultConfig.global.parser[id][name];
                    if (['playlistLimit', 'collectionLimit', 'partLimit'].includes(name)) {
                        value = String(Math.min(500, Math.max(1, Math.floor(Number(value)) || 50)));
                        field.value = value;
                    }
                    config.global.parser[id][name] = value;
                }
            }

            for (const key in defaultConfig.global) {
                if (key === 'parser') {
                    continue;
                }
                config.global[key] = document.getElementById(key)?.value || defaultConfig.global[key];
            }

            document.querySelectorAll('.tab').forEach(tab => {
                if (!['global', 'cookies'].includes(tab.id)) {
                    config.players.push({
                        readonly: tab.getAttribute('readonly') === "true",
                        name: tab.querySelector('[name="name"]').value || tab.name || 'Player',
                        system: tab.querySelector('[name="system"] .active').getAttribute('value') ||
                            'windows',
                        icon: tab.querySelector('[name="icon"]').value || '',
                        iconSize: tab.querySelector('[name="iconSize"]').value || 50,
                        playEvent: tab.querySelector('[name="playEvent"]').value || '',
                        presetEvent: {
                            playAuto: tab.querySelector('[name="playAuto"]').checked,
                            pauseAuto: tab.querySelector('[name="pauseAuto"]').checked,
                            closeAuto: tab.querySelector('[name="closeAuto"]').checked,
                            syncTime: tab.querySelector('[name="syncTime"]').checked,
                        },
                        enable: tab.querySelector('[name="enable"]').checked,
                    });
                }
            });

            parent.postMessage({
                name: projectName,
                method: 'saveConfig',
                config: config
            }, '*');
        };

        function resetButtonCoord() {
            document.getElementById('buttonXCoord').value = defaultConfig.global.buttonXCoord;
            document.getElementById('buttonYCoord').value = defaultConfig.global.buttonYCoord;
        }

        function loadConfig(config) {
            // 全局配置
            for (const key in config.global) {
                if (key === 'parser' || !document.getElementById(key)) {
                    continue;
                }
                document.getElementById(key).value = config.global[key];
            }

            document.getElementById('language').value = config.global.language;
            language.dispatchEvent(new Event("change"));

            document.querySelectorAll('.parser').forEach(parser => {
                parser.querySelectorAll('.radio-button-group').forEach(radioButtonGroup => {
                    const radioButtons = radioButtonGroup.querySelectorAll('.radio-button');
                    radioButtons.forEach(radioButton => {
                        if (radioButton.getAttribute('value') === config.global.parser[parser.id][
                            radioButtonGroup.getAttribute('name')
                        ]) {
                            radioButton.classList.add('active');
                        } else {
                            radioButton.classList.remove('active');
                        }
                    });
                })
                parser.querySelectorAll('input[name]').forEach(input => {
                    const value = config.global.parser[parser.id][input.getAttribute('name')];
                    if (value !== undefined) {
                        if (input.type === 'checkbox') {
                            input.checked = value !== false && value !== 'false' && value !== 'off';
                        } else {
                            input.value = value;
                        }
                    }
                });
                parser.querySelectorAll('textarea').forEach(textarea => {
                    if (textarea.disabled) {
                        const regex = defaultConfig.global.parser[parser.id][textarea.getAttribute(
                            'name')] || [];
                        if (regex.length > 0) {
                            textarea.value = regex.join('\\n');
                            textarea.style.height = regex.length * 20 + 20 + 'px';
                        } else {
                            textarea.style.display = 'none';
                        }
                    } else {
                        const regex = config.global.parser[parser.id][textarea.getAttribute('name')] || [];
                        textarea.value = regex.join('\\n');
                    }
                })
                parser.querySelectorAll('.priority-sorter').forEach(sorter => {
                    applyPriorityValue(sorter,
                        config.global.parser[parser.id][sorter.getAttribute('name')]);
                });
                updatePlaylistLimitVisibility(parser);
                updatePriorityVisibility(parser);
            })

            // 播放器配置
            removeAllTab();
            config.players.forEach(player => createTab(\`player\${tabCount++}\`, player.name, player));

            // 默认选中全局配置
            activateTab('global');
        }

        function removeAllTab() {
            document.querySelectorAll('.tab-button').forEach(tabButton => {
                if (['global-button', 'cookies-button'].includes(tabButton.id)) {
                    return;
                }
                sidebar.removeChild(tabButton);
            })
            document.querySelectorAll('.tab').forEach(tab => {
                if (['global', 'cookies'].includes(tab.id)) {
                    return;
                }
                content.removeChild(tab);
            })
        }

        function resetConfig() {
            let config = JSON.parse(JSON.stringify(defaultConfig));
            for (const key in config.global.parser) {
                config.global.parser[key].regex = [];
            }
            loadConfig(config);
        }

        function init() {
            if (window.self === window.top) {
                return;
            }

            window.addEventListener('message', function (event) {
                const data = event.data;
                if (event.source !== parent || !data || !data.name ||
                    (projectName && data.name !== projectName)) {
                    return;
                }
                if (data.method === 'loadConfig') {
                    projectName = data.name;
                    defaultConfig = data.defaultConfig;
                    loadConfig(data.config);
                    currentAuthSnapshot = data.auth;
                    translatePage(data.config.global.language);
                    renderAuthSnapshot(data.auth);
                    document.getElementById('sidebar-container').style.display = 'flex';
                    document.getElementById('content-container').style.display = 'flex';
                    return;
                }
                if (data.method === 'authSnapshot') {
                    renderAuthSnapshot(data.auth);
                    return;
                }
                if (data.method === 'authOperationResult') {
                    renderAuthSnapshot(data.auth);
                    showAuthMessage(data.message || (data.ok ?
                        (currentLanguage === 'zh' ? '操作成功' : 'Operation completed') :
                        (currentLanguage === 'zh' ? '操作失败' : 'Operation failed')), !data.ok);
                }
            });

            document.getElementById('language').addEventListener('change', (e) => {
                translatePage(e.target.value);
            });
            document.getElementById('add-tab-button').onclick = () => createTab(\`tab\${tabCount++}\`);
            document.getElementById('global-button').onclick = () => activateTab('global');
            document.getElementById('save-button').onclick = () => saveConfig();
            document.getElementById('reset-button').onclick = () => resetConfig();
            document.getElementById('reset-button-coord-button').onclick = () => resetButtonCoord();
            initializeAuthControls();
            document.querySelectorAll('.priority-sorter').forEach(initializePrioritySorter);

            document.querySelectorAll('#global .radio-button-group').forEach(radioButtonGroup => {
                const radioButtons = radioButtonGroup.querySelectorAll('.radio-button');
                radioButtons.forEach(radioButton => {
                    radioButton.onclick = () => {
                        radioButtons.forEach(btn => btn.classList.remove('active'));
                        radioButton.classList.add('active');
                        updatePlaylistLimitVisibility(radioButtonGroup.closest('.parser'));
                        updatePriorityVisibility(radioButtonGroup.closest('.parser'));
                    };
                });
            })
        }

        init();
    </script>

    </html>
    `;
    if (SETTING_URL) {
        const response = await fetch(SETTING_URL);
        settingIframeHtml = await response.text();
    }
    settingIframe.onload = function () {
        // doc.write() 会触发 iframe 的新一轮 load；先移除回调，避免重复清空设置页。
        settingIframe.onload = null;
        const doc = settingIframe.contentDocument || settingIframe.contentWindow.document;
        doc.open();
        doc.write(policy.createHTML(settingIframeHtml));
        doc.close();
    };
    document.body.appendChild(settingIframe);

    try {
        showLoading();
        await sleep(REFRESH_INTERVAL);
    } finally {
        hideLoading();
    }
}

function saveConfig(config) {
    // 保存配置
    currentConfig = config;
    GM_setValue('config', currentConfig);
    showToast(translation.saveSuccessfully);

    // 移除旧元素
    if (style) {
        document.head.removeChild(style);
        style = undefined;
    }
    if (buttonDiv) {
        document.body.removeChild(buttonDiv);
        buttonDiv = undefined;
    }

    // 重新初始化
    isReloading = true;
    init(currentUrl);
}

function startFlashing(element) {
    let visibility = element.style.visibility;
    let transition = element.style.transition;
    let boxShadow = element.style.boxShadow;

    element.style.visibility = 'visible';
    element.style.transition = 'box-shadow 0.5s ease';
    let isGlowing = false;
    const interval = setInterval(() => {
        isGlowing = !isGlowing;
        element.style.boxShadow = isGlowing ? `0 0 10px 10px ${COLOR.PRIMARY}` : 'none';
    }, 500);

    setTimeout(() => {
        clearInterval(interval);
        element.style.visibility = visibility;
        element.transition = transition;
        element.boxShadow = boxShadow;
    }, 5000);
}

function showButtonDiv() {
    buttonDiv.style.display = 'flex';
    if (!isReloading) {
        for (const player of currentConfig.players) {
            if (player.presetEvent.playAuto === true) {
                setTimeout(() => {
                    currentParser.play(player);
                }, REFRESH_INTERVAL);
            }
        }
    }
    isReloading = false;
}

// ======================================== 开始执行 =======================================

function appendAll() {
    appendCss();
    appendToastDiv();
    appendLoadingDiv();
    appendButtonDiv();
}

function initTop() {
    if (currentParser) {
        appendAll();
        showButtonDiv();
    }

    // 监听子页面事件
    window.addEventListener('message', function (event) {
        const data = event.data;
        if (!data) {
            return;
        }
        if (!data.name || data.name !== PROJECT_NAME) {
            return;
        }
        if (data.method === 'init') {
            iframe = event.source;
            // 子页面覆盖父页面解析器
            currentParser = new PARSER.IFRAME();
            isReloading = data.isReloading;
            appendAll();
            showButtonDiv();
            return;
        }
        if (data.method === 'currentMedia') {
            currentMedia = data.currentMedia;
            return;
        }
    });

    // 快捷键
    document.addEventListener('keydown', (event) => {
        // 打开设置：Ctrl + Alt + E
        if (event.ctrlKey && event.altKey && (event.key === 'e' || event.key === 'E')) {
            event.preventDefault();
            startFlashing(settingButton);
            settingButton.click();
        }
    });

    // 保存配置和处理 Cookie 管理页请求。
    window.addEventListener('message', async function (event) {
        const data = event.data;
        if (event.source !== settingIframe?.contentWindow || !data || data.name !== PROJECT_NAME) {
            return;
        }
        if (data.method === 'saveConfig') {
            saveConfig(data.config);
            if (iframe) {
                iframe.postMessage({
                    name: PROJECT_NAME,
                    method: 'reload'
                }, '*');
            }
            return;
        }
        if (!['refreshAuthentication', 'importCookieFile', 'deleteCookieFile'].includes(data.method)) {
            return;
        }
        try {
            let auth;
            let message = '';
            if (data.method === 'refreshAuthentication') {
                auth = await refreshAllAuthentication();
                message = currentConfig.global.language === 'zh' ? '认证状态已刷新' :
                    'Authentication status refreshed';
            } else if (data.method === 'importCookieFile') {
                auth = await importCookieFile(data.site, data.fileName, data.text);
                message = currentConfig.global.language === 'zh' ?
                    '脚本登录验证与 yt-dlp 预检均成功，Cookie 已保存' :
                    'Login validation and yt-dlp preflight passed; Cookie saved';
            } else {
                auth = deleteStoredCookieFile(data.site);
                message = currentConfig.global.language === 'zh' ? '已删除保存的 Cookie' :
                    'Saved Cookie deleted';
            }
            event.source?.postMessage({
                name: PROJECT_NAME,
                method: 'authOperationResult',
                ok: true,
                message,
                auth
            }, '*');
        } catch (error) {
            event.source?.postMessage({
                name: PROJECT_NAME,
                method: 'authOperationResult',
                ok: false,
                message: error.message,
                auth: getAuthSnapshot()
            }, '*');
        }
    });
}

function initIframe() {
    if (currentParser) {
        // 通知顶层窗口初始化按钮
        setTimeout(() => {
            parent.postMessage({
                name: PROJECT_NAME,
                method: 'init',
                isReloading: isReloading
            }, '*');
            isReloading = false;
        }, REFRESH_INTERVAL);

        // 监听父页面事件
        window.addEventListener("message", async function (event) {
            const data = event.data;
            if (!data) {
                return;
            }
            if (!data.name || data.name !== PROJECT_NAME) {
                return;
            }
            if (data.method === 'execute') {
                await currentParser.execute();
                parent.postMessage({
                    name: PROJECT_NAME,
                    method: 'currentMedia',
                    currentMedia: currentMedia
                }, '*');
                return;
            }
            if (data.method === 'pause') {
                currentParser.pause();
                return;
            }
            if (data.method === 'reload') {
                isReloading = true;
                init(currentUrl);
            }
        });
    }
}

async function init(url) {
    currentConfig = loadConfig();
    translation = translations[currentConfig.global.language];
    const dedicatedParsers = {
        bilibili: defaultConfig.global.parser.bilibili,
        bilibiliLive: defaultConfig.global.parser.bilibiliLive,
        youtube: defaultConfig.global.parser.youtube
    };
    currentParser = matchParser(dedicatedParsers, url) ||
        matchParser(currentConfig.global.parser, url) ||
        matchParser(defaultConfig.global.parser, url);
    if (self === top) {
        initTop();
    } else {
        initIframe();
    }
    currentUrl = url;
}

setInterval(() => {
    const url = location.href;
    if (currentUrl !== url) {
        console.log(`current url update: ${currentUrl ? currentUrl + ' => ' : ''}${url}`);
        if (currentUrl && currentUrl.indexOf('?') > -1 &&
            url.replace(/\/\?/, '?').startsWith(currentUrl.replace(/\/\?/, '?'))) {
            currentUrl = url;
            return;
        }
        init(url);
    }
}, REFRESH_INTERVAL);
