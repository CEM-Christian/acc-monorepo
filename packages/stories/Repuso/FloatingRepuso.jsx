// // https://widgets.thereviewsplace.com/2.0/rw-widget-badge1.js
// import React from 'react';
// import PropTypes from 'prop-types';
//
// let t, e, i = !1, s = !1;
// const o = "undefined" != typeof window ? window : {}, n = o.document || {head: {}}, r = {
//         t: 0,
//         i: "",
//         jmp: t => t(),
//         raf: t => requestAnimationFrame(t),
//         ael: (t, e, i, s) => t.addEventListener(e, i, s),
//         rel: (t, e, i, s) => t.removeEventListener(e, i, s),
//         ce: (t, e) => new CustomEvent(t, e)
//     }, l = (() => {
//         try {
//             return new CSSStyleSheet, "function" == typeof (new CSSStyleSheet).replace
//         } catch (t) {
//         }
//         return !1
//     })(), a = (t, e, i) => {
//         i && i.map((([i, s, o]) => {
//             const n = c(t, i), l = h(e, o), a = d(i);
//             r.ael(n, s, l, a), (e.o = e.o || []).push((() => r.rel(n, s, l, a)))
//         }))
//     }, h = (t, e) => i => {
//         try {
//             t.l[e](i)
//         } catch (t) {
//             Z(t)
//         }
//     }, c = (t, e) => 4 & e ? n : t, d = t => 0 != (2 & t), p = new WeakMap, u = t => "sc-" + t.p, f = {},
//     m = t => "object" == (t = typeof t) || "function" === t, x = (t, e, ...i) => {
//         let s = null, o = null, n = !1, r = !1, l = [];
//         const a = e => {
//             for (let i = 0; i < e.length; i++) s = e[i], Array.isArray(s) ? a(s) : null != s && "boolean" != typeof s && ((n = "function" != typeof t && !m(s)) && (s += ""), n && r ? l[l.length - 1].u += s : l.push(n ? g(null, s) : s), r = n)
//         };
//         if (a(i), e) {
//             e.key && (o = e.key);
//             {
//                 const t = e.className || e.class;
//                 t && (e.class = "object" != typeof t ? t : Object.keys(t).filter((e => t[e])).join(" "))
//             }
//         }
//         if ("function" == typeof t) return t(null === e ? {} : e, l, b);
//         const h = g(t, null);
//         return h.g = e, l.length > 0 && (h.v = l), h.k = o, h
//     }, g = (t, e) => ({t: 0, C: t, u: e, $: null, v: null, g: null, k: null}), w = {},
//     b = {forEach: (t, e) => t.map(v).forEach(e), map: (t, e) => t.map(v).map(e).map(y)},
//     v = t => ({vattrs: t.g, vchildren: t.v, vkey: t.k, vname: t.M, vtag: t.C, vtext: t.u}), y = t => {
//         if ("function" == typeof t.vtag) {
//             const e = Object.assign({}, t.vattrs);
//             return t.vkey && (e.key = t.vkey), t.vname && (e.name = t.vname), x(t.vtag, e, ...t.vchildren || [])
//         }
//         const e = g(t.vtag, t.vtext);
//         return e.g = t.vattrs, e.v = t.vchildren, e.k = t.vkey, e.M = t.vname, e
//     }, k = (t, e, i, s, n, l) => {
//         if (i !== s) {
//             let a = Y(t, e), h = e.toLowerCase();
//             if ("class" === e) {
//                 const e = t.classList, o = C(i), n = C(s);
//                 e.remove(...o.filter((t => t && !n.includes(t)))), e.add(...n.filter((t => t && !o.includes(t))))
//             } else if ("style" === e) {
//                 for (const e in i) s && null != s[e] || (e.includes("-") ? t.style.removeProperty(e) : t.style[e] = "");
//                 for (const e in s) i && s[e] === i[e] || (e.includes("-") ? t.style.setProperty(e, s[e]) : t.style[e] = s[e])
//             } else if ("key" === e) ; else if ("ref" === e) s && s(t); else if (t.__lookupSetter__(e) || "o" !== e[0] || "n" !== e[1]) {
//                 const o = m(s);
//                 if ((a || o && null !== s) && !n) try {
//                     if (t.tagName.includes("-")) t[e] = s; else {
//                         let o = null == s ? "" : s;
//                         "list" === e ? a = !1 : null != i && t[e] == o || (t[e] = o)
//                     }
//                 } catch (t) {
//                 }
//                 null == s || !1 === s ? !1 === s && "" !== t.getAttribute(e) || t.removeAttribute(e) : (!a || 4 & l || n) && !o && t.setAttribute(e, s = !0 === s ? "" : s)
//             } else e = "-" === e[2] ? e.slice(3) : Y(o, h) ? h.slice(2) : h[2] + e.slice(3), i && r.rel(t, e, i, !1), s && r.ael(t, e, s, !1)
//         }
//     }, z = /\s/, C = t => t ? t.split(z) : [], $ = (t, e, i, s) => {
//         const o = 11 === e.$.nodeType && e.$.host ? e.$.host : e.$, n = t && t.g || f, r = e.g || f;
//         for (s in n) s in r || k(o, s, n[s], void 0, i, e.t);
//         for (s in r) k(o, s, n[s], r[s], i, e.t)
//     }, M = (e, s, o) => {
//         let r, l, a = s.v[o], h = 0;
//         if (null !== a.u) r = a.$ = n.createTextNode(a.u); else {
//             if (i || (i = "svg" === a.C), r = a.$ = n.createElementNS(i ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a.C), i && "foreignObject" === a.C && (i = !1), $(null, a, i), null != t && r["s-si"] !== t && r.classList.add(r["s-si"] = t), a.v) for (h = 0; h < a.v.length; ++h) l = M(e, a, h), l && r.appendChild(l);
//             "svg" === a.C ? i = !1 : "foreignObject" === r.tagName && (i = !0)
//         }
//         return r
//     }, j = (t, i, s, o, n, r) => {
//         let l, a = t;
//         for (a.shadowRoot && a.tagName === e && (a = a.shadowRoot); n <= r; ++n) o[n] && (l = M(null, s, n), l && (o[n].$ = l, a.insertBefore(l, i)))
//     }, E = (t, e, i, s, o) => {
//         for (; e <= i; ++e) (s = t[e]) && (o = s.$, I(s), o.remove())
//     }, S = (t, e) => t.C === e.C && t.k === e.k, L = (t, e) => {
//         const s = e.$ = t.$, o = t.v, n = e.v, r = e.C, l = e.u;
//         null === l ? (i = "svg" === r || "foreignObject" !== r && i, $(t, e, i), null !== o && null !== n ? ((t, e, i, s) => {
//             let o, n, r = 0, l = 0, a = 0, h = 0, c = e.length - 1, d = e[0], p = e[c], u = s.length - 1, f = s[0],
//                 m = s[u];
//             for (; r <= c && l <= u;) if (null == d) d = e[++r]; else if (null == p) p = e[--c]; else if (null == f) f = s[++l]; else if (null == m) m = s[--u]; else if (S(d, f)) L(d, f), d = e[++r], f = s[++l]; else if (S(p, m)) L(p, m), p = e[--c], m = s[--u]; else if (S(d, m)) L(d, m), t.insertBefore(d.$, p.$.nextSibling), d = e[++r], m = s[--u]; else if (S(p, f)) L(p, f), t.insertBefore(p.$, d.$), p = e[--c], f = s[++l]; else {
//                 for (a = -1, h = r; h <= c; ++h) if (e[h] && null !== e[h].k && e[h].k === f.k) {
//                     a = h;
//                     break
//                 }
//                 a >= 0 ? (n = e[a], n.C !== f.C ? o = M(e && e[l], i, a) : (L(n, f), e[a] = void 0, o = n.$), f = s[++l]) : (o = M(e && e[l], i, l), f = s[++l]), o && d.$.parentNode.insertBefore(o, d.$)
//             }
//             r > c ? j(t, null == s[u + 1] ? null : s[u + 1].$, i, s, l, u) : l > u && E(e, r, c)
//         })(s, o, e, n) : null !== n ? (null !== t.u && (s.textContent = ""), j(s, null, e, n, 0, n.length - 1)) : null !== o && E(o, 0, o.length - 1), i && "svg" === r && (i = !1)) : t.u !== l && (s.data = l)
//     }, I = t => {
//         t.g && t.g.ref && t.g.ref(null), t.v && t.v.map(I)
//     }, P = (t, e, i) => {
//         const s = t;
//         return {emit: t => O(s, e, {bubbles: !!(4 & i), composed: !!(2 & i), cancelable: !!(1 & i), detail: t})}
//     }, O = (t, e, i) => {
//         const s = r.ce(e, i);
//         return t.dispatchEvent(s), s
//     }, _ = (t, e) => {
//         e && !t.j && e["s-p"] && e["s-p"].push(new Promise((e => t.j = e)))
//     }, R = (t, e) => {
//         if (t.t |= 16, !(4 & t.t)) return _(t, t.S), lt((() => D(t, e)));
//         t.t |= 512
//     }, D = (t, e) => {
//         const i = t.l;
//         let s;
//         return e && (s = X(i, "componentWillLoad")), T(s, (() => F(t, i, e)))
//     }, F = async (t, e, i) => {
//         const s = t.l, o = s["s-rc"];
//         i && (t => {
//             const e = t.L, i = t.l, s = e.t, o = ((t, e) => {
//                 let i = u(e), s = tt.get(i);
//                 if (t = 11 === t.nodeType ? t : n, s) if ("string" == typeof s) {
//                     let e, o = p.get(t = t.head || t);
//                     o || p.set(t, o = new Set), o.has(i) || (e = n.createElement("style"), e.innerHTML = s, t.insertBefore(e, t.querySelector("link")), o && o.add(i))
//                 } else t.adoptedStyleSheets.includes(s) || (t.adoptedStyleSheets = [...t.adoptedStyleSheets, s]);
//                 return i
//             })(i.shadowRoot ? i.shadowRoot : i.getRootNode(), e);
//             10 & s && (i["s-sc"] = o, i.classList.add(o + "-h"))
//         })(t);
//         B(t, e), o && (o.map((t => t())), s["s-rc"] = void 0);
//         {
//             const e = s["s-p"], i = () => A(t);
//             0 === e.length ? i() : (Promise.all(e).then(i), t.t |= 4, e.length = 0)
//         }
//     }, B = (i, s) => {
//         try {
//             s = s.render(), i.t &= -17, i.t |= 2, ((i, s) => {
//                 const o = i.l, n = i.I || g(null, null), r = (t => t && t.C === w)(s) ? s : x(null, null, s);
//                 e = o.tagName, r.C = null, r.t |= 4, i.I = r, r.$ = n.$ = o.shadowRoot || o, t = o["s-sc"], L(n, r)
//             })(i, s)
//         } catch (t) {
//             Z(t, i.l)
//         }
//         return null
//     }, A = t => {
//         const e = t.l, i = e, s = t.S;
//         64 & t.t || (t.t |= 64, W(e), X(i, "componentDidLoad"), t.P(e), s || H()), t.j && (t.j(), t.j = void 0), 512 & t.t && rt((() => R(t, !1))), t.t &= -517
//     }, H = () => {
//         W(n.documentElement), rt((() => O(o, "appload", {detail: {namespace: "rw-widgets"}})))
//     }, X = (t, e, i) => {
//         if (t && t[e]) try {
//             return t[e](i)
//         } catch (t) {
//             Z(t)
//         }
//     }, T = (t, e) => t && t.then ? t.then(e) : e(), W = t => t.classList.add("hydrated"), K = (t, e) => {
//         if (e.O) {
//             t.watchers && (e._ = t.watchers);
//             const i = Object.entries(e.O), s = t.prototype;
//             i.map((([t, [i]]) => {
//                 (31 & i || 32 & i) && Object.defineProperty(s, t, {
//                     get() {
//                         return ((t, e) => G(this).R.get(e))(0, t)
//                     }, set(i) {
//                         ((t, e, i, s) => {
//                             const o = G(t), n = t, r = o.R.get(e), l = o.t, a = n;
//                             if ((i = ((t, e) => null == t || m(t) ? t : 4 & e ? "false" !== t && ("" === t || !!t) : 2 & e ? parseFloat(t) : 1 & e ? t + "" : t)(i, s.O[e][0])) !== r) {
//                                 if (o.R.set(e, i), s._ && 128 & l) {
//                                     const t = s._[e];
//                                     t && t.map((t => {
//                                         try {
//                                             a[t](i, r, e)
//                                         } catch (t) {
//                                             Z(t, n)
//                                         }
//                                     }))
//                                 }
//                                 2 == (18 & l) && R(o, !1)
//                             }
//                         })(this, t, i, e)
//                     }, configurable: !0, enumerable: !0
//                 })
//             }));
//             {
//                 const e = new Map;
//                 s.attributeChangedCallback = function (t, i, s) {
//                     r.jmp((() => {
//                         const i = e.get(t);
//                         this[i] = (null !== s || "boolean" != typeof this[i]) && s
//                     }))
//                 }, t.observedAttributes = i.filter((([t, e]) => 15 & e[0])).map((([t, i]) => {
//                     const s = i[1] || t;
//                     return e.set(s, t), s
//                 }))
//             }
//         }
//         return t
//     }, V = (t, e) => {
//         const i = {t: e[0], p: e[1]};
//         i.O = e[2], i.D = e[3], i._ = t._;
//         const s = t.prototype.connectedCallback, o = t.prototype.disconnectedCallback;
//         return Object.assign(t.prototype, {
//             __registerHost() {
//                 Q(this, i)
//             }, connectedCallback() {
//                 (t => {
//                     if (0 == (1 & r.t)) {
//                         const e = G(t), i = e.L, s = () => {
//                         };
//                         if (1 & e.t) a(t, e, i.D); else {
//                             e.t |= 1;
//                             {
//                                 let i = t;
//                                 for (; i = i.parentNode || i.host;) if (i["s-p"]) {
//                                     _(e, e.S = i);
//                                     break
//                                 }
//                             }
//                             (async (t, e, i, s, o) => {
//                                 if (0 == (32 & e.t) && (o = t.constructor, e.t |= 160, o.style)) {
//                                     let t = o.style;
//                                     const e = u(i);
//                                     if (!tt.has(e)) {
//                                         const s = () => {
//                                         };
//                                         ((t, e, i) => {
//                                             let s = tt.get(t);
//                                             l && i ? (s = s || new CSSStyleSheet, s.replace(e)) : s = e, tt.set(t, s)
//                                         })(e, t, !!(1 & i.t)), s()
//                                     }
//                                 }
//                                 const n = e.S, r = () => R(e, !0);
//                                 n && n["s-rc"] ? n["s-rc"].push(r) : r()
//                             })(t, e, i)
//                         }
//                         s()
//                     }
//                 })(this), s && s.call(this)
//             }, disconnectedCallback() {
//                 (() => {
//                     if (0 == (1 & r.t)) {
//                         const t = G(this);
//                         t.o && (t.o.map((t => t())), t.o = void 0)
//                     }
//                 })(), o && o.call(this)
//             }
//         }), t.is = i.p, K(t, i)
//     }, q = t => {
//         t.attachShadow({mode: "open"})
//     }, N = t => r.i = t, U = t => Object.assign(r, t), J = new WeakMap, G = t => J.get(t), Q = (t, e) => {
//         const i = {t: 0, l: t, L: e, R: new Map};
//         return i.F = new Promise((t => i.P = t)), t["s-p"] = [], t["s-rc"] = [], a(t, i, e.D), J.set(t, i)
//     }, Y = (t, e) => e in t, Z = (t, e) => (0, console.error)(t, e), tt = new Map, et = [], it = [], st = (t, e) => i => {
//         t.push(i), s || (s = !0, e && 4 & r.t ? rt(nt) : r.raf(nt))
//     }, ot = t => {
//         for (let e = 0; e < t.length; e++) try {
//             t[e](performance.now())
//         } catch (t) {
//             Z(t)
//         }
//         t.length = 0
//     }, nt = () => {
//         ot(et), ot(it), (s = et.length > 0) && r.raf(nt)
//     }, rt = t => Promise.resolve(void 0).then(t), lt = st(it, !0);
//
// function at(t) {
//     return "https://widgets.thereviewsplace.com/2.0/" + t
// }
//
// function ht(t) {
//     return "https://repuso.com/?utm_source=widget&utm_medium=" + t + "&utm_campaign=powered"
// }
//
// function ct(t, e, i, s, o, n) {
//     return new Promise(((r, l) => {
//         if (null === t.querySelector(`link[href="${i}"]`)) {
//             const a = document.createElement("link");
//             a.onload = r, a.onerror = () => l(a.remove()), a.setAttribute("rel", e), a.setAttribute("href", i), null != s && a.setAttribute("as", s), null != o && a.setAttribute("type", o), null != n && a.setAttribute("crossorigin", n), t.appendChild(a)
//         } else r(null)
//     }))
// }
//
// function dt(t) {
//     t.target.onerror = null, t.target.src = at("images/no-img.png")
// }
//
// function pt(t, e, i = 1e3) {
//     t.classList.add(e), window.setTimeout((() => t.classList.remove(e)), i)
// }
//
// function ut(t) {
//     const e = {y: 31536e3, m: 2592e3, d: 86400, h: 3600, min: 60, sec: 1}, i = Date.now() / 1e3 - t;
//     for (let t in e) {
//         const s = Math.floor(i / e[t]);
//         if (s >= 1) return s + t
//     }
// }
//
// const ft = class extends HTMLElement {
//         constructor() {
//             super(), this.__registerHost(), this.imgLoad = P(this, "imgLoad", 7), this.imgError = P(this, "imgError", 7), this.index = 0, this.preload = !1, this.image = "none", this.load = () => {
//                 const t = new Image;
//                 t.onload = () => {
//                     this.image = "url(" + this.src + ")", this.imgLoad.emit({w: t.width, h: t.height})
//                 }, t.onerror = () => this.imgError.emit(), t.src = this.src
//             }, this.onIntersection = t => {
//                 t[0].isIntersecting && (this.io && this.io.disconnect(), this.loadImage())
//             }
//         }
//
//         componentDidLoad() {
//             this.preload && 0 === this.index && "none" === this.image ? this.loadImage() : "IntersectionObserver" in window ? (this.io = new IntersectionObserver(this.onIntersection, {rootMargin: "100px"}), this.io.observe(this.host)) : this.loadImage()
//         }
//
//         loadImage() {
//             0 === this.index ? this.load() : window.setTimeout(this.load, 1400 * Math.min(3, this.index))
//         }
//
//         render() {
//             return x(w, {style: {"background-image": this.image}}, "none" === this.image && "image" === this.type ? x("div", {class: "spin"}, x("div", {class: "bounce1"}), x("div", {class: "bounce2"}), x("div", null)) : null)
//         }
//
//         get host() {
//             return this
//         }
//
//         static get style() {
//             return "rw-ll-image{display:flex;align-items:center;justify-content:center}.spin{display:flex;justify-content:space-between;width:45px}.spin>div{background-color:currentColor;width:10px;height:10px;border-radius:100%;display:inline-block;-webkit-animation:bounce 1.4s infinite ease-in-out both;animation:bounce 1.4s infinite ease-in-out both}.spin>.bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spin>.bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes bounce{0%,80%,100%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1.0)}}@keyframes bounce{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1.0);transform:scale(1.0)}}"
//         }
//     }, mt = t => "object" == (t = typeof t) || "function" === t, xt = (t, e, ...i) => {
//         let s = null, o = null, n = !1, r = !1, l = [];
//         const a = e => {
//             for (let i = 0; i < e.length; i++) s = e[i], Array.isArray(s) ? a(s) : null != s && "boolean" != typeof s && ((n = "function" != typeof t && !mt(s)) && (s += ""), n && r ? l[l.length - 1].u += s : l.push(n ? gt(null, s) : s), r = n)
//         };
//         if (a(i), e) {
//             e.key && (o = e.key);
//             {
//                 const t = e.className || e.class;
//                 t && (e.class = "object" != typeof t ? t : Object.keys(t).filter((e => t[e])).join(" "))
//             }
//         }
//         if ("function" == typeof t) return t(null === e ? {} : e, l, wt);
//         const h = gt(t, null);
//         return h.g = e, l.length > 0 && (h.v = l), h.k = o, h
//     }, gt = (t, e) => ({t: 0, C: t, u: e, $: null, v: null, g: null, k: null}),
//     wt = {forEach: (t, e) => t.map(bt).forEach(e), map: (t, e) => t.map(bt).map(e).map(vt)},
//     bt = t => ({vattrs: t.g, vchildren: t.v, vkey: t.k, vname: t.M, vtag: t.C, vtext: t.u}), vt = t => {
//         if ("function" == typeof t.vtag) {
//             const e = Object.assign({}, t.vattrs);
//             return t.vkey && (e.key = t.vkey), t.vname && (e.name = t.vname), xt(t.vtag, e, ...t.vchildren || [])
//         }
//         const e = gt(t.vtag, t.vtext);
//         return e.g = t.vattrs, e.v = t.vchildren, e.k = t.vkey, e.M = t.vname, e
//     }, yt = t => xt("div", {class: t.class}, xt("a", {
//         onClick: t => t.stopPropagation(),
//         style: {"font-size": "inherit", color: "inherit", "text-decoration": "none"},
//         href: t.href,
//         target: "_blank"
//     }, t.prefix, xt("span", {style: {"font-family": "Courgette, cursive", "font-size": "1.2em"}}, "Repuso"))), kt = t => {
//         if (!t.value || 0 === t.value) return null;
//         let e = t.value;
//         const i = [];
//         for (; e > 0;) e >= 1 ? i.push(xt(zt, {type: "icon-star"})) : e > 0 && i.push(xt(zt, {type: "icon-star-half"})), e--;
//         for (let e = Math.ceil(t.value) + 1; e <= 5; e++) i.push(xt(zt, {type: "icon-star-outline"}));
//         return xt("div", {class: t.classname, style: {color: t.color, "line-height": "0"}}, i)
//     }, zt = t => xt("svg", {class: "icon " + t.type}, xt("use", {href: "#" + t.type})), Ct = t => xt("svg", {
//         "aria-hidden": "true",
//         style: {position: "absolute", width: "0", height: "0", overflow: "hidden"}
//     }, xt("defs", null, t.defs.map((t => t())))), $t = () => xt("symbol", {
//         id: "icon-chevron-left",
//         viewBox: "0 0 21 28"
//     }, xt("path", {d: "M18.297 4.703l-8.297 8.297 8.297 8.297c0.391 0.391 0.391 1.016 0 1.406l-2.594 2.594c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.594c-0.391-0.391-0.391-1.016 0-1.406l11.594-11.594c0.391-0.391 1.016-0.391 1.406 0l2.594 2.594c0.391 0.391 0.391 1.016 0 1.406z"})),
//     Mt = () => xt("symbol", {
//         id: "icon-chevron-right",
//         viewBox: "0 0 19 28"
//     }, xt("path", {d: "M17.297 13.703l-11.594 11.594c-0.391 0.391-1.016 0.391-1.406 0l-2.594-2.594c-0.391-0.391-0.391-1.016 0-1.406l8.297-8.297-8.297-8.297c-0.391-0.391-0.391-1.016 0-1.406l2.594-2.594c0.391-0.391 1.016-0.391 1.406 0l11.594 11.594c0.391 0.391 0.391 1.016 0 1.406z"})),
//     jt = () => xt("symbol", {
//         id: "icon-minus",
//         viewBox: "0 0 22 28"
//     }, xt("path", {d: "M22 11.5v3c0 0.828-0.672 1.5-1.5 1.5h-19c-0.828 0-1.5-0.672-1.5-1.5v-3c0-0.828 0.672-1.5 1.5-1.5h19c0.828 0 1.5 0.672 1.5 1.5z"})),
//     Et = () => xt("symbol", {
//         id: "icon-cross",
//         viewBox: "0 0 32 32"
//     }, xt("path", {d: "M22.957 23.758c-0.75 0.75-1.966 0.75-2.715 0l-4.242-4.848-4.242 4.846c-0.75 0.75-1.966 0.75-2.715 0-0.75-0.75-0.75-1.966 0-2.715l4.413-5.040-4.414-5.043c-0.75-0.75-0.75-1.965 0-2.715s1.965-0.75 2.715 0l4.243 4.85 4.242-4.85c0.75-0.75 1.965-0.75 2.715 0s0.75 1.966 0 2.715l-4.413 5.043 4.413 5.040c0.75 0.75 0.75 1.966 0 2.717z"})),
//     St = () => xt("symbol", {
//         id: "icon-share-square-o",
//         viewBox: "0 0 26 28"
//     }, xt("path", {d: "M22 15.453v4.047c0 2.484-2.016 4.5-4.5 4.5h-13c-2.484 0-4.5-2.016-4.5-4.5v-13c0-2.484 2.016-4.5 4.5-4.5h3.984c0.266 0 0.5 0.219 0.5 0.5 0 0.25-0.172 0.453-0.406 0.5-0.781 0.266-1.484 0.578-2.078 0.938-0.078 0.031-0.156 0.063-0.25 0.063h-1.75c-1.375 0-2.5 1.125-2.5 2.5v13c0 1.375 1.125 2.5 2.5 2.5h13c1.375 0 2.5-1.125 2.5-2.5v-3.344c0-0.187 0.109-0.359 0.281-0.453 0.313-0.141 0.594-0.344 0.844-0.578 0.141-0.141 0.359-0.203 0.547-0.125s0.328 0.25 0.328 0.453zM25.703 7.703l-6 6c-0.187 0.203-0.438 0.297-0.703 0.297-0.125 0-0.266-0.031-0.391-0.078-0.359-0.156-0.609-0.516-0.609-0.922v-3h-2.5c-3.437 0-5.625 0.656-6.844 2.047-1.266 1.453-1.641 3.797-1.156 7.391 0.031 0.219-0.109 0.438-0.313 0.531-0.063 0.016-0.125 0.031-0.187 0.031-0.156 0-0.313-0.078-0.406-0.203-0.109-0.156-2.594-3.672-2.594-6.797 0-4.188 1.313-9 11.5-9h2.5v-3c0-0.406 0.25-0.766 0.609-0.922 0.125-0.047 0.266-0.078 0.391-0.078 0.266 0 0.516 0.109 0.703 0.297l6 6c0.391 0.391 0.391 1.016 0 1.406z"})),
//     Lt = () => xt("symbol", {
//         id: "icon-star-outline",
//         viewBox: "0 0 24 24"
//     }, xt("path", {d: "M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984 4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"})),
//     It = () => xt("symbol", {
//         id: "icon-star-half",
//         viewBox: "0 0 24 24"
//     }, xt("path", {d: "M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031v9.328zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"})),
//     Pt = () => xt("symbol", {
//         id: "icon-star",
//         viewBox: "0 0 24 24"
//     }, xt("path", {d: "M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"})),
//     Ot = () => xt("symbol", {
//         id: "icon-resize-plus",
//         viewBox: "0 0 512 512"
//     }, xt("path", {d: "M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"})),
//     _t = () => xt("symbol", {
//         id: "icon-resize-minus",
//         viewBox: "0 0 512 512"
//     }, xt("path", {d: "M304 192v32c0 6.6-5.4 12-12 12H124c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"})),
//     Rt = () => xt("symbol", {
//         id: "plyr-play",
//         viewBox: "0 0 18 18"
//     }, xt("path", {d: "M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"})),
//
//     Dt = class extends HTMLElement {
//         constructor() {
//             super(), this.__registerHost(), this.itemSizeReceived = P(this, "itemSizeReceived", 7), this.arrows = "hover", this.dots = "always", this.zoom = "hover", this.autoplay = 0, this.loadDelay = !0, this.preload = !1, this.index = 0, this.maxed = !1, this.videoControls = !1, this.resumePlayback = 0, this.playerReady = !1, this.touchPos = null
//         }
//
//         handleKeyDown(t) {
//             return "ArrowLeft" === t.key ? this.showPrev() : "ArrowRight" === t.key ? this.showNext() : void 0
//         }
//
//         onSrcChange() {
//             this.source = "string" == typeof this.src ? JSON.parse(this.src) : this.src || []
//         }
//
//         componentWillLoad() {
//             this.onSrcChange()
//         }
//
//         componentDidLoad() {
//             this.host.addEventListener("touchstart", (t => {
//                 this.touchPos = {x: t.touches[0].clientX, y: t.touches[0].clientY}
//             }), {passive: !0}), this.host.addEventListener("touchmove", (t => {
//                 if (!this.touchPos) return;
//                 const e = this.touchPos.x - t.touches[0].clientX, i = this.touchPos.y - t.touches[0].clientY;
//                 Math.abs(e) > Math.abs(i) && (e > 0 ? this.showNext() : this.showPrev()), this.touchPos = null
//             }), {passive: !0})
//         }
//
//         connectedCallback() {
//             this.autoplay > 0 && this.source.length > 1 && window.setTimeout((() => {
//                 this.timer = window.setInterval((() => this.showNext()), this.autoplay)
//             }), 1e3 * Math.random())
//         }
//
//         disconnectedCallback() {
//             window.clearInterval(this.timer)
//         }
//
//         showNext() {
//             this.index = this.index === this.source.length - 1 ? 0 : this.index + 1
//         }
//
//         showPrev() {
//             this.index = 0 === this.index ? this.source.length - 1 : this.index - 1
//         }
//
//         playerInit() {
//             Dt.player_init || (Dt.player_init = function (t, e, i) {
//                 return new Promise(((s, o) => {
//                     if (null === t.querySelector(`script[src="${e}"]`)) {
//                         const n = document.createElement("script");
//                         n.onload = s, n.onerror = () => o(n.remove()), n.setAttribute("src", e), n.setAttribute("type", i), t.appendChild(n)
//                     } else s(null)
//                 }))
//             }(document.head, at("rw-component-player.js"), "module")), Dt.player_init.then((() => this.playerReady = !0)).catch((() => console.warn("Failed to load video player")))
//         }
//
//         onIndexChange() {
//             this.playerReady = !1, this.itemSizeReceived.emit(this.source[this.index].size)
//         }
//
//         onMaxedChange() {
//             var t, e;
//             (null === (e = null === (t = this.playerRef) || void 0 === t ? void 0 : t.plyr) || void 0 === e ? void 0 : e.playing) ? this.itemSizeReceived.emit(this.playerRef.size) : this.itemSizeReceived.emit(this.source[this.index].size)
//         }
//
//         saveItemSize(t, e) {
//             this.source.forEach((i => {
//                 i.id === t && (i.size = e, this.source[this.index].id === t && this.itemSizeReceived.emit(e))
//             }))
//         }
//
//         onAction(t) {
//             t.stopImmediatePropagation(), window.clearInterval(this.timer)
//         }
//
//         removeItem(t) {
//             this.source = this.source.filter((e => e.id !== t)), this.itemSizeReceived.emit(this.source[this.index].size)
//         }
//
//         render() {
//             if (0 === this.source.length) return x(w, {style: {display: "none"}});
//             let t = null, e = null, i = null;
//             if (this.source.length > 0 && "hover" === this.zoom && (t = x("span", {
//                 class: "resize hover" + (this.maxed ? " maxed" : ""),
//                 onClick: t => {
//                     var e;
//                     this.onAction(t), null === (e = this.zoomAction) || void 0 === e || e.call(this)
//                 }
//             }, x(zt, this.maxed ? {type: "icon-resize-minus"} : {type: "icon-resize-plus"}))), this.source.length > 1) {
//                 const t = "video" === this.source[this.index].type ? " onvideo" : "";
//                 "always" !== this.arrows && "hover" !== this.arrows || (e = [x("div", {
//                     class: "arrows a-prev " + this.arrows + t,
//                     onClick: t => {
//                         this.onAction(t), this.showPrev()
//                     }
//                 }, x("span", {class: "arrow-icon"}, x(zt, {type: "icon-chevron-left"}))), x("div", {
//                     class: "arrows a-next " + this.arrows + t,
//                     onClick: t => {
//                         this.onAction(t), this.showNext()
//                     }
//                 }, x("span", {class: "arrow-icon"}, x(zt, {type: "icon-chevron-right"})))]), "always" !== this.dots && "hover" !== this.dots || (i = x("div", {class: "dots " + this.dots}, this.source.map(((t, e) => x("span", {
//                     class: e === this.index ? "dot-selected" : "dot",
//                     onClick: t => {
//                         this.onAction(t), this.index = e
//                     }
//                 })))))
//             }
//             return x(w, {
//                 tabindex: "-1",
//                 dir: "ltr",
//                 onClick: t => this.onAction(t)
//             }, this.source.map(((t, e) => x("rw-ll-image", {
//                 key: t.id,
//                 class: "media-item",
//                 src: t.url,
//                 type: t.type,
//                 index: this.loadDelay ? e : 0,
//                 style: {opacity: e === this.index ? "1" : "0"},
//                 onImgError: () => {
//                     "image" === t.type && this.removeItem(t.id), "video" === t.type && this.saveItemSize(t.id, {
//                         w: 320,
//                         h: 200
//                     })
//                 },
//                 onImgLoad: e => this.saveItemSize(t.id, e.detail),
//                 preload: this.preload
//             }, "video" === t.type && e === this.index ? this.playerReady || this.resumePlayback ? x("rw-player", {
//                 ref: t => {
//                     this.playerRef !== t && (this.playerRef = t)
//                 },
//                 source: t.src,
//                 poster: t.url,
//                 controls: this.videoControls,
//                 autoplay: !0,
//                 resumePlayback: this.resumePlayback
//             }) : x("div", {
//                 class: "starter", onClick: t => {
//                     this.onAction(t), this.playerInit()
//                 }
//             }, x(zt, {type: "plyr-play"})) : null))), t, e, i, x(Ct, {defs: [$t, Mt, Ot, _t, Rt]}))
//         }
//
//         get host() {
//             return this
//         }
//
//         static get watchers() {
//             return {src: ["onSrcChange"], index: ["onIndexChange"], maxed: ["onMaxedChange"]}
//         }
//
//         static get style() {
//             return ".icon{display:inline-block;width:1em;height:1em;stroke-width:0;stroke:currentColor;fill:currentColor}.icon-chevron-left{width:0.75em}.icon-chevron-right{width:0.6785714285714285em}rw-media{cursor:default;position:relative;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;overflow:hidden;outline:none}@media (hover: hover){rw-media:hover>.hover{visibility:visible}}rw-media:focus>.hover{visibility:visible}.media-item{border-radius:inherit;position:absolute;top:0px;left:0px;width:100%;height:100%;background-position:center center;background-size:cover;background-clip:content-box;background-repeat:no-repeat;transition:opacity 0.6s ease-in}.resize{z-index:2;position:absolute;padding:4px;top:0px;right:0px;color:whitesmoke;filter:drop-shadow(0px 0px 2px gray);line-height:0;font-size:22px;cursor:pointer;visibility:hidden}.resize:hover{color:white}.arrows{z-index:1;position:absolute;top:0px;bottom:0px;display:flex;cursor:pointer;color:whitesmoke;filter:drop-shadow(0px 0px 2px gray);visibility:hidden}.arrows.onvideo{top:50px;bottom:50px}.arrows:hover{color:white}.arrows.always{visibility:visible}.a-prev{left:0px;padding:0px 10px}.a-next{right:0px;padding:0px 10px}.arrow-icon{align-self:center;font-size:16px;line-height:0}.dots{display:flex;align-items:center;z-index:1;position:absolute;left:50%;transform:translate(-50%, 0);bottom:8%;visibility:hidden}.dots.always{visibility:visible}.dot{width:6px;height:6px;display:inline-block;border-radius:100%;background:lightgray;opacity:0.8;border:1px solid white;margin:0 4px;cursor:pointer}.dot-selected{width:8px;height:8px;display:inline-block;border-radius:100%;background:white;margin:0 4px;cursor:pointer}.starter{display:flex;justify-content:center;align-items:center;padding:15px;font-size:36px;color:white;filter:drop-shadow(0px 0px 2px gray);cursor:pointer;opacity:0.9;z-index:1}.starter:hover{opacity:1}"
//         }
//     }, Ft = class extends HTMLElement {
//         constructor() {
//             super(), this.__registerHost(), q(this), this.popupClosed = P(this, "popupClosed", 7)
//         }
//
//         handleKeyDown(t) {
//             "Escape" === t.key && this.close()
//         }
//
//         handleClick() {
//             this.close()
//         }
//
//         close() {
//             this.popupClosed.emit(), this.host.remove()
//         }
//
//         render() {
//             return x("div", {
//                 class: "container",
//                 onClick: t => t.stopPropagation()
//             }, x("iframe", {src: this.source}), x("div", {
//                 class: "close",
//                 onClick: () => this.close()
//             }, x(zt, {type: "icon-cross"})), x(Ct, {defs: [Et]}))
//         }
//
//         get host() {
//             return this
//         }
//
//         static get style() {
//             return ".icon{display:inline-block;width:1em;height:1em;stroke-width:0;stroke:currentColor;fill:currentColor}:host{all:initial;display:flex;justify-content:center;align-items:center;z-index:2147483002;position:fixed;top:0px;left:0px;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.8)}.container{position:relative;width:80%;height:80%;max-width:800px;max-height:85vh;border-radius:5px;color:#565656;background-color:#ffffff}.container iframe{border:none;border-radius:5px;width:100%;height:100%}.close{position:absolute;top:16px;right:16px;cursor:pointer;font-size:28px}"
//         }
//     }, Bt = class extends HTMLElement {
//         constructor() {
//             super(), this.__registerHost(), q(this), this.popupClosed = P(this, "popupClosed", 7), this.index = 0, this.resumePlayback = 0, this.maxed = !1
//         }
//
//         connectedCallback() {
//             window.onorientationchange = () => window.setTimeout((() => {
//                 this.maxed && this.size && (this.size = Object.assign({}, this.size))
//             }), 1e3)
//         }
//
//         disconnectedCallback() {
//             window.onorientationchange = null
//         }
//
//         getWH() {
//             if (this.size) {
//                 let t = this.size.w, e = this.size.h;
//                 const i = t / e, s = .85 * window.innerWidth, o = .85 * window.innerHeight;
//                 return e > o && (t = o * i, e = o), t > s && (t = s, e = s / i), {
//                     width: Math.trunc(t) + "px",
//                     height: Math.trunc(e) + "px"
//                 }
//             }
//             return null
//         }
//
//         onItemSizeReceived(t) {
//             this.size = this.maxed ? t.detail : null
//         }
//
//         handleKeyDown(t) {
//             "Escape" === t.key && this.close()
//         }
//
//         handleClick() {
//             this.close()
//         }
//
//         close() {
//             this.popupClosed.emit(), this.host.remove()
//         }
//
//         resize() {
//             this.maxed || (this.main.style.setProperty("width", this.main.offsetWidth + "px"), this.main.style.setProperty("height", this.main.offsetHeight + "px")), this.maxed = !this.maxed
//         }
//
//         render() {
//             let t = null;
//             this.maxed || (t = [x("div", {class: "header"}, this.item.from_image ? x("div", {class: "avatar"}, x("img", {
//                 src: this.item.from_image,
//                 onError: dt
//             })) : null, x("div", {class: "info"}, x("div", {class: "name"}, this.item.from_name), this.settings.disable_external_links ? null : x("div", {class: "channel-link"}, "repuso" !== this.item.type || this.settings.branded ? x("a", {
//                 href: this.item.post_url || this.item.from_url || null,
//                 target: "_blank"
//             }, this.item.label, "Â ", x("span", null, x(zt, {type: "icon-share-square-o"}))) : null)), x("div", {
//                 class: "close",
//                 onClick: () => this.close()
//             }, x(zt, {type: "icon-cross"}))), x("div", {
//                 class: "text",
//                 dir: "auto",
//                 innerHTML: this.item.text
//             }), x("div", {class: "stat"}, x(kt, {
//                 value: this.item.rating_value,
//                 classname: "star"
//             }), x("div", {class: "spacer"}), x("div", {class: "date"}, ut(this.item.ts), "Â Â "), "repuso" !== this.item.type || this.settings.branded ? x("div", {class: "source"}, x("img", {src: at("images/28x28/logo-" + this.item.type + ".png")})) : null)]);
//             let e = null;
//             return this.item.media_arr && this.item.media_arr.length > 0 && (e = x("rw-media", {
//                 class: this.maxed ? "media maxed" : "media",
//                 maxed: this.maxed,
//                 index: this.index,
//                 autoplay: this.settings.media_autoplay,
//                 loadDelay: !1,
//                 src: this.item.media_arr,
//                 videoControls: !0,
//                 zoomAction: () => this.resize(),
//                 resumePlayback: this.resumePlayback
//             })), x("div", {
//                 class: "container",
//                 dir: "ltr",
//                 onClick: t => t.stopPropagation(),
//                 style: this.settings.popup_font ? {"font-family": this.settings.popup_font} : null
//             }, x("div", {
//                 class: this.maxed ? "main maxed" : "main",
//                 ref: t => this.main = t,
//                 style: this.getWH()
//             }, t, e), this.settings.branded ? x(yt, {
//                 class: "branding",
//                 prefix: "Powered by ",
//                 href: this.settings.branding_link_modal
//             }) : null, x(Ct, {defs: [Pt, It, Lt, St, Et]}))
//         }
//
//         get host() {
//             return this
//         }
//
//         static get style() {
//             return ".icon{display:inline-block;width:1em;height:1em;stroke-width:0;stroke:currentColor;fill:currentColor}.icon-share-square-o{width:0.9319285714285714em}:host{all:initial;display:flex;justify-content:center;align-items:center;z-index:2147483002;position:fixed;top:0px;left:0px;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.8);font-size:14px;font-family:Verdana, Helvetica, Arial, sans-serif}.container{display:flex;flex-direction:column;margin:30px}.main{min-width:33vw;max-width:600px;max-height:85vh;padding:30px;display:flex;flex-direction:column;border-radius:5px;color:#565656;background-color:#ffffff;transition:width 0.5s, height 0.5s}.main.maxed{min-width:auto;max-width:85vw;padding:4px}.branding{align-self:flex-end;margin-top:4px;font-size:12px;color:#ffffff}.header{display:flex;align-items:flex-start;min-height:35px}.avatar{margin-right:10px}.avatar img{min-height:35px;min-width:35px;max-width:35px;border-radius:5px}.info{display:flex;flex-direction:column;align-items:flex-start;flex-grow:1;margin-right:10px}.name{font-weight:bold}.channel-link a,.channel-link a:hover{display:flex;color:#b8b8b8;text-decoration:none;font-size:13px}.channel-link span{display:flex;align-items:flex-end;font-size:14px}.close{display:flex;cursor:pointer;font-size:28px}.text{overflow-y:auto;word-break:break-word;line-height:24px;min-height:48px;margin-top:10px;margin-bottom:10px}.stat{display:flex;align-items:center;min-height:28px}.spacer{flex-grow:1}.source img{max-width:28px;max-height:28px;min-width:28px;min-height:28px}.star{font-size:22px;color:gold}.media{min-height:150px;height:30vh;margin-top:10px;border:1px solid #f2f2f2;border-radius:5px}.media.maxed{min-height:auto;height:100%;margin:0;border:0px}"
//         }
//     }, At = class extends HTMLElement {
//         constructor() {
//             super(), this.__registerHost(), q(this), this.items = [], this.dataIndex = 0, this.expand = !1
//         }
//
//         componentWillLoad() {
//             const t = {
//                 disable_custom_posts: this.dataDisableCustomPosts || null,
//                 tags: this.dataContentTags || null,
//                 website_id: this.dataWebsiteId || null
//             };
//             "undefined" != typeof rw_schema_params && Object.entries(rw_schema_params).forEach((([e, i]) => t["schema[" + e + "]"] = i));
//             let e = function (t) {
//                 return Object.keys(t).filter((e => t[e])).map((e => encodeURIComponent(e) + "=" + encodeURIComponent("" + t[e]))).join("&")
//             }(t);
//             return fetch(function (t, e) {
//                 const i = e.filter(Boolean).join("&");
//                 return "https://api.thereviewsplace.com/v1/widgets/posts/" + t + (i ? "?" + i : "")
//             }(this.dataRwBadge, [e])).then((t => function (t) {
//                 if (t.ok) return t.json().catch((() => {
//                     throw Error("Widget [ID] not found")
//                 }));
//                 throw Error(t.status + " " + t.statusText)
//             }(t))).catch((t => console.warn(t.message))).then((t => function (t) {
//                 return t && t.badge && 0 !== t.badge.length ? !0 === t.settings.hide_on_mobile && window.screen.width <= 468 ? new Promise((() => {
//                 })) : Promise.resolve(t) : new Promise((() => {
//                 }))
//             }(t))).then((t => function (t) {
//                 return Array.isArray(t.items) && t.items.forEach((e => {
//                     t.settings.remove_line_breaks && (e.text = function (t) {
//                         const e = document.createElement("div");
//                         return e.innerHTML = t, e.textContent || e.innerText || ""
//                     }(e.text)), Array.isArray(e.media_arr) && (e.media_arr = e.media_arr.slice(0, t.settings.slider_enabled_popup ? 12 : 1), e.media_arr_small = e.media_arr.slice(0, t.settings.slider_enabled_small ? 3 : 1))
//                 })), Promise.resolve(t)
//             }(t))).then((t => this.data = t)).then((() => this.data.settings.branding_link = ht("badge1"))).then((() => this.data.settings.branding_link_modal = ht("badge1-modal")))
//         }
//
//         componentDidLoad() {
//             if (this.data.settings.branded && function (t, e, i, s) {
//                 let o = i || "0,400";
//                 "Roboto" === e && (o = o.replace(/400/g, "300")), function (t, e, i, s) {
//                     let o = "https://fonts.googleapis.com/css2?family=" + e.split(" ").join("+") + ":ital,wght@" + i + "&display=swap";
//                     return s && (o += "&text=" + s), ct(t, "stylesheet", o)
//                 }(t, e, o, s).then((() => function (t, e) {
//                     if ("fonts" in document) {
//                         const i = e.split(";").map((t => t.replace("0,", "normal ").replace("1,", "italic "))).map((e => e + " 1em " + t));
//                         return Promise.all(i.map((t => document.fonts.load(t))))
//                     }
//                 }(e, o)))
//             }(this.host, "Courgette", "0,400", "Repuso"), this.switch2badges(), this.data.settings.custom_css) {
//                 const t = document.createElement("style");
//                 t.textContent = this.data.settings.custom_css, t.setAttribute("data-name", "custom-css"), this.host.shadowRoot.appendChild(t)
//             }
//             this.host.classList.add(this.data.settings.position), "fixed" !== this.data.settings.position && this.host.style.setProperty("bottom", this.data.settings.position_bottom + "px"), this.data.settings.autoplay && this.play(), function (t) {
//                 t && null === document.querySelector("#rw-schema") && document.head.insertAdjacentHTML("beforeend", t)
//             }(this.data.schema)
//         }
//
//         switch2badges() {
//             this.expand = !1, this.host.classList.remove("rw-list"), this.host.classList.add("rw-badge")
//         }
//
//         switch2reviews() {
//             this.data.settings.reviews.enabled && (this.stop(), "expand" === this.data.settings.reviews.mode ? (this.expand = !0, this.host.classList.remove("rw-badge"), this.host.classList.add("rw-list")) : this.data.settings.reviews.new_window ? window.open(this.data.settings.reviews.url, "_blank") : top.location.href = this.data.settings.reviews.url)
//         }
//
//         setIndex(t) {
//             this.dataIndex = t, this.onIndexChange(t)
//         }
//
//         onIndexChange(t) {
//             t < 0 ? (this.dataIndex = 0, pt(this.items[this.dataIndex], "wobble-left")) : t >= this.items.length && (this.dataIndex = this.items.length - 1, pt(this.items[this.dataIndex], "wobble-right"))
//         }
//
//         play() {
//             this.timer = window.setInterval((() => {
//                 this.dataIndex === this.items.length - 1 ? this.stop() : this.setIndex(this.dataIndex + 1)
//             }), this.data.settings.autoplay)
//         }
//
//         stop() {
//             window.clearInterval(this.timer)
//         }
//
//         actionReviews() {
//             "url" === this.data.settings.action_button.mode ? this.data.settings.action_button.new_window ? window.open(this.data.settings.action_button.url, "_blank") : top.location.href = this.data.settings.action_button.url : "collect" === this.data.settings.action_button.mode && this.popupCollect("https://" + this.data.settings.vanity_url + ".repuso.com/collect")
//         }
//
//         actionPost(t) {
//             t.content.url && (t.content.newwindow ? window.open(t.content.url, "_blank") : top.location.href = t.content.url)
//         }
//
//         popupReview(t) {
//             const e = document.createElement("rw-popup-review");
//             e.item = t, e.settings = this.data.settings, document.body.appendChild(e)
//         }
//
//         popupCollect(t) {
//             const e = document.createElement("rw-popup-collect");
//             e.setAttribute("source", t), document.body.appendChild(e)
//         }
//
//         render() {
//             return this.expand ? this.renderReviews() : this.renderBadges()
//         }
//
//         renderBadges() {
//             const t = this.data.settings.branded ? x(yt, {
//                 class: "branding right",
//                 prefix: "by ",
//                 href: this.data.settings.branding_link
//             }) : null;
//             return [x("div", {class: "container", dir: "ltr"}, x("div", {
//                 class: "holder-overflow",
//                 style: {
//                     "background-color": this.data.settings.background_color || "#FFFFFF",
//                     "border-color": this.data.settings.border_color || "#E0E0E0"
//                 }
//             }, x("div", {
//                 class: "holder",
//                 style: {transform: "translateX(" + -100 * this.dataIndex + "%)"}
//             }, this.data.badge.map(((t, e) => x("div", {
//                 class: "item",
//                 ref: t => this.items[e] = t,
//                 onClick: () => this.switch2reviews(),
//                 style: {cursor: this.data.settings.reviews.enabled ? "pointer" : "default"}
//             }, x("div", {class: "top"}, x("img", {
//                 class: "logo",
//                 src: t.logo
//             }), x("div", {class: "data"}, x(kt, {
//                 value: t.rating_average,
//                 color: t.color,
//                 classname: "star"
//             }), x("p", {class: "info"}, x("span", null, (Math.round(100 * t.rating_average) / 100).toFixed(1)), " ", this.data.settings.text1, ", ", t.count, " ", this.data.settings.text2))), x("div", {
//                 class: "footer",
//                 style: {"background-color": t.color}
//             }, t.label)))))), this.data.badge.length > 1 ? x("div", null, x("div", {
//                 class: "prev", onClick: () => {
//                     this.stop(), this.setIndex(this.dataIndex - 1)
//                 }
//             }, x(zt, {type: "icon-chevron-left"})), x("div", {
//                 class: "next", onClick: () => {
//                     this.stop(), this.setIndex(this.dataIndex + 1)
//                 }
//             }, x(zt, {type: "icon-chevron-right"}))) : null, x(Ct, {defs: [Pt, It, Lt, $t, Mt]})), t]
//         }
//
//         renderReviews() {
//             return x("div", {
//                 class: "container-reviews",
//                 dir: "ltr",
//                 style: {
//                     color: this.data.settings.font_color || "#818181",
//                     "background-color": this.data.settings.background_color || "#FFFFFF",
//                     "border-color": this.data.settings.border_color || "#E0E0E0"
//                 }
//             }, x("div", {
//                 class: "border",
//                 style: {"background-color": this.data.settings.button_color}
//             }), x("div", {class: "control"}, x("div", null, this.data.settings.title), x("div", {
//                 class: "minus",
//                 onClick: () => this.switch2badges()
//             }, x(zt, {type: "icon-minus"}))), x("div", {class: "reviews"}, this.data.items.map((t => t.content ? x("div", {
//                 class: "post",
//                 style: {cursor: t.content.url ? "pointer" : "default"},
//                 onClick: () => this.actionPost(t)
//             }, x("img", {
//                 class: "post-left",
//                 src: at("images/lauwer-left.png")
//             }), x("div", {class: "post-middle"}, x("div", {class: "post-title"}, t.content.title), t.content.banner_text ? x("div", {class: "post-banner-text"}, t.content.banner_text) : x("img", {
//                 class: "post-banner",
//                 src: t.media
//             }), x("div", {class: "post-body"}, t.content.body)), x("img", {
//                 class: "post-right",
//                 src: at("images/lauwer-right.png")
//             })) : x("div", {class: "review"}, t.from_image ? x("div", {class: "review-left"}, x("img", {
//                 onClick: () => this.popupReview(t),
//                 src: t.from_image,
//                 onError: dt
//             })) : null, x("div", {class: "review-right"}, x("div", {
//                 class: "review-header",
//                 onClick: () => this.popupReview(t)
//             }, x("div", {class: "review-name"}, t.from_name), "repuso" !== t.type || this.data.settings.branded ? x("div", {class: "review-channel"}, x("img", {src: at("images/15x15/logo-" + t.type + ".png")})) : null, x("div", {class: "review-date"}, ut(t.ts))), x("div", {
//                 class: "review-text",
//                 dir: "auto",
//                 innerHTML: t.text
//             }), x(kt, {
//                 value: t.rating_value,
//                 classname: "review-star"
//             })))))), this.data.settings.action_button.enabled ? x("div", {
//                 class: "action-button",
//                 onClick: () => this.actionReviews(),
//                 style: {"background-color": this.data.settings.button_color}
//             }, this.data.settings.action_button.text) : null, this.data.settings.branded ? x(yt, {
//                 class: "branding center",
//                 prefix: "Powered by ",
//                 href: this.data.settings.branding_link
//             }) : null, x(Ct, {defs: [Pt, It, Lt, jt]}))
//         }
//
//         get host() {
//             return this
//         }
//
//         static get style() {
//             return ".icon{display:inline-block;width:1em;height:1em;stroke-width:0;stroke:currentColor;fill:currentColor}.icon-chevron-left{width:0.75em}.icon-chevron-right{width:0.6785714285714285em}.icon-minus{width:0.7857142857142857em}:host{all:initial;display:none;overflow:hidden;font-family:Verdana, Helvetica, Arial, sans-serif;font-size:14px}:host(.fixed){z-index:auto;position:relative;display:inline-block}:host(.left){z-index:2147483001;position:fixed;display:block;left:20px}:host(.right){z-index:2147483001;position:fixed;display:block;right:20px}:host(.rw-badge){width:256px;height:auto}:host(.rw-list){width:320px;height:480px}@media (max-width: 420px){:host(.rw-badge){width:auto;left:0px;right:0px}:host(.rw-list){width:auto;height:100%;left:0px;right:0px;bottom:0px !important}}.container{position:relative;box-sizing:border-box;margin:0px 11px}.holder-overflow{border-width:1px;border-style:solid;width:100%;overflow:hidden}.holder{white-space:nowrap;transition:transform .3s ease-in-out}.item{display:inline-block;vertical-align:top;width:100%;}.top{height:72px;display:flex;align-items:center;justify-content:space-evenly;padding:0 6px}.logo{min-width:50px;max-width:50px}.data{display:flex;flex-direction:column;overflow:hidden}.info{font-size:0.8em;font-weight:300;padding-left:3px;margin:0px;line-height:24px;color:gray;overflow:hidden;text-overflow:ellipsis}.info span{font-size:1.5em;color:#000000}.footer{height:18px;line-height:18px;text-align:center;color:#ffffff;font-size:12px;vertical-align:bottom}.star{font-size:28px;margin:0 1px}.prev,.next{display:flex;align-items:center;justify-content:center;position:absolute;top:50%;cursor:pointer;color:#565656;background-color:#eeeeee;border-radius:3px;width:15px;height:15px;font-size:14px;padding:0px 2px}.prev{left:0px;transform:translate(-50%, -50%)}.next{right:0px;transform:translate(50%, -50%)}.wobble-left{animation-name:wobbleleft;animation-duration:1s;animation-timing-function:ease-in-out}.wobble-right{animation-name:wobbleright;animation-duration:1s;animation-timing-function:ease-in-out}@keyframes wobbleleft{16.65%{transform:translateX(8px)}33.33%{transform:translateX(-6px)}49.95%{transform:translateX(4px)}66.66%{transform:translateX(-2px)}83.25%{transform:translateX(1px)}}@keyframes wobbleright{16.65%{transform:translateX(-8px)}33.33%{transform:translateX(6px)}49.95%{transform:translateX(-4px)}66.66%{transform:translateX(2px)}83.25%{transform:translateX(-1px)}}.container-reviews{display:flex;flex-direction:column;height:100%;border-width:1px;border-style:solid;border-top:0px;box-sizing:border-box;border-top-left-radius:8px;border-top-right-radius:8px}.border{min-height:5px;border-top-left-radius:10px;border-top-right-radius:10px}.control{display:flex;justify-content:space-between;min-height:20px;padding:10px 13px;border-bottom:1px solid #f2f2f2;color:#565656;font-weight:bold}.minus{display:flex;justify-content:flex-end;font-size:20px;width:20px;height:20px;cursor:pointer}.reviews{flex-grow:1;overflow-y:auto}.review{display:flex;border-bottom:1px solid #f0f0f0;padding:18px 10px;font-size:0.9em;line-height:20px}.review:last-child{border-bottom:none}.review-left{margin-right:7px}.review-left img{min-width:35px;max-width:35px;border-radius:5px;cursor:pointer}.review-right{display:flex;flex-grow:1;flex-direction:column}.review-header{display:flex;cursor:pointer;padding-left:3px}.review-name{flex-grow:1;font-weight:bold}.review-channel{display:flex;align-items:center;margin:0 2px}.review-channel img{max-width:15px;max-height:15px}.review-text{word-break:break-word;margin-top:1px;margin-bottom:5px;padding-left:3px}.review-star{font-size:20px;color:gold}.post{display:flex;align-items:center;padding:20px;border-bottom:1px solid #f0f0f0;margin-bottom:10px;line-height:20px;overflow:hidden}.post-left,.post-right{width:43px;height:100px}.post-middle{display:flex;flex-direction:column;align-items:center;flex-grow:1;text-align:center}.post-title{font-weight:bold;font-size:12px}.post-banner-text{font-size:25px;font-weight:700;line-height:28px;padding-top:10px;padding-bottom:10px}.post-banner{max-height:65px;margin:5px 0px}.post-body{font-style:italic}.action-button{color:#ffffff;border-radius:5px;padding:10px;margin:5px 10px 5px 10px;text-align:center;font-weight:bold;cursor:pointer;font-size:14px}.action-button:hover{opacity:.9}.branding{min-height:22px;font-size:12px;color:#b2b2b2}.center{align-self:center}.right{text-align:right;margin-right:11px}"
//         }
//     };
// !function () {
//     ct(document.head, "preconnect", "https://fonts.googleapis.com"), ct(document.head, "preconnect", "https://fonts.gstatic.com", null, null, "");
//     const t = import.meta.url.split("/").pop().split(".").shift(), e = "div[data-rw-" + t.split("-").pop() + "]";
//     document.querySelectorAll(e).forEach((e => {
//         if (!e.querySelector(t)) {
//             const i = document.createElement(t);
//             for (let t of e.getAttributeNames()) i.setAttribute(t, e.getAttribute(t));
//             i.removeAttribute("id"), i.removeAttribute("style"), e.appendChild(i)
//         }
//     }))
// }();
// const Ht = V(ft, [0, "rw-ll-image", {src: [1], type: [1], index: [2], preload: [4], image: [32]}]),
//     Xt = V(Dt, [0, "rw-media", {
//         arrows: [1],
//         dots: [1],
//         zoom: [1],
//         autoplay: [2],
//         loadDelay: [4, "load-delay"],
//         preload: [4],
//         zoomAction: [16],
//         index: [1026],
//         maxed: [4],
//         videoControls: [4, "video-controls"],
//         resumePlayback: [2, "resume-playback"],
//         src: [1],
//         playerRef: [1032, "player-ref"],
//         source: [32],
//         playerReady: [32]
//     }, [[0, "keydown", "handleKeyDown"]]]),
//     Tt = V(Ft, [1, "rw-popup-collect", {source: [1]}, [[4, "keydown", "handleKeyDown"], [0, "click", "handleClick"]]]),
//     Wt = V(Bt, [1, "rw-popup-review", {
//         item: [8],
//         settings: [8],
//         index: [2],
//         resumePlayback: [2, "resume-playback"],
//         maxed: [1028],
//         size: [1040]
//     }, [[0, "itemSizeReceived", "onItemSizeReceived"], [4, "keydown", "handleKeyDown"], [0, "click", "handleClick"]]]),
//     Kt = V(At, [1, "rw-widget-badge1", {
//         dataRwBadge: [1, "data-rw-badge1"],
//         dataDisableCustomPosts: [1, "data-disable-custom-posts"],
//         dataContentTags: [1, "data-content-tags"],
//         dataWebsiteId: [1, "data-website-id"],
//         dataIndex: [32],
//         expand: [32]
//     }]), Vt = t => {
//         "undefined" != typeof customElements && [Ht, Xt, Tt, Wt, Kt].forEach((e => {
//             customElements.get(e.is) || customElements.define(e.is, e, t)
//         }))
//     };
// export {
//     Ht as RwLlImage,
//     Xt as RwMedia,
//     Tt as RwPopupCollect,
//     Wt as RwPopupReview,
//     Kt as RwWidgetBadge1,
//     Vt as defineCustomElements,
//     N as setAssetPath,
//     U as setPlatformOptions
// };
// Vt();
//
//
//
// export const FloatingRepuso = ({ repusoReference }) => (
//     <>
//         <rw-widget-badge1 data-rw-badge1={repusoReference}></rw-widget-badge1>
//     </>
// );
