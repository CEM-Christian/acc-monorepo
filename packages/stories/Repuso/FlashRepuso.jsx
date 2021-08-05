// // https://widgets.thereviewsplace.com/2.0/rw-widget-flash.js
// import React from 'react';
// import PropTypes from 'prop-types';
//
// let t, i, e = !1, s = !1;
// const n = "undefined" != typeof window ? window : {}, o = n.document || {head: {}}, l = {
//         t: 0,
//         i: "",
//         jmp: t => t(),
//         raf: t => requestAnimationFrame(t),
//         ael: (t, i, e, s) => t.addEventListener(i, e, s),
//         rel: (t, i, e, s) => t.removeEventListener(i, e, s),
//         ce: (t, i) => new CustomEvent(t, i)
//     }, r = (() => {
//         try {
//             return new CSSStyleSheet, "function" == typeof (new CSSStyleSheet).replace
//         } catch (t) {
//         }
//         return !1
//     })(), a = (t, i, e) => {
//         e && e.map((([e, s, n]) => {
//             const o = c(t, e), r = h(i, n), a = d(e);
//             l.ael(o, s, r, a), (i.o = i.o || []).push((() => l.rel(o, s, r, a)))
//         }))
//     }, h = (t, i) => e => {
//         try {
//             t.l[i](e)
//         } catch (t) {
//             Z(t)
//         }
//     }, c = (t, i) => 4 & i ? o : t, d = t => 0 != (2 & t), p = new WeakMap, u = t => "sc-" + t.p, f = {},
//     m = t => "object" == (t = typeof t) || "function" === t, x = (t, i, ...e) => {
//         let s = null, n = null, o = !1, l = !1, r = [];
//         const a = i => {
//             for (let e = 0; e < i.length; e++) s = i[e], Array.isArray(s) ? a(s) : null != s && "boolean" != typeof s && ((o = "function" != typeof t && !m(s)) && (s += ""), o && l ? r[r.length - 1].u += s : r.push(o ? w(null, s) : s), l = o)
//         };
//         if (a(e), i) {
//             i.key && (n = i.key);
//             {
//                 const t = i.className || i.class;
//                 t && (i.class = "object" != typeof t ? t : Object.keys(t).filter((i => t[i])).join(" "))
//             }
//         }
//         if ("function" == typeof t) return t(null === i ? {} : i, r, v);
//         const h = w(t, null);
//         return h.g = i, r.length > 0 && (h.v = r), h.k = n, h
//     }, w = (t, i) => ({t: 0, C: t, u: i, M: null, v: null, g: null, k: null}), g = {},
//     v = {forEach: (t, i) => t.map(y).forEach(i), map: (t, i) => t.map(y).map(i).map(b)},
//     y = t => ({vattrs: t.g, vchildren: t.v, vkey: t.k, vname: t.$, vtag: t.C, vtext: t.u}), b = t => {
//         if ("function" == typeof t.vtag) {
//             const i = Object.assign({}, t.vattrs);
//             return t.vkey && (i.key = t.vkey), t.vname && (i.name = t.vname), x(t.vtag, i, ...t.vchildren || [])
//         }
//         const i = w(t.vtag, t.vtext);
//         return i.g = t.vattrs, i.v = t.vchildren, i.k = t.vkey, i.$ = t.vname, i
//     }, k = (t, i, e, s, o, r) => {
//         if (e !== s) {
//             let a = Y(t, i), h = i.toLowerCase();
//             if ("class" === i) {
//                 const i = t.classList, n = C(e), o = C(s);
//                 i.remove(...n.filter((t => t && !o.includes(t)))), i.add(...o.filter((t => t && !n.includes(t))))
//             } else if ("style" === i) {
//                 for (const i in e) s && null != s[i] || (i.includes("-") ? t.style.removeProperty(i) : t.style[i] = "");
//                 for (const i in s) e && s[i] === e[i] || (i.includes("-") ? t.style.setProperty(i, s[i]) : t.style[i] = s[i])
//             } else if ("key" === i) ; else if ("ref" === i) s && s(t); else if (t.__lookupSetter__(i) || "o" !== i[0] || "n" !== i[1]) {
//                 const n = m(s);
//                 if ((a || n && null !== s) && !o) try {
//                     if (t.tagName.includes("-")) t[i] = s; else {
//                         let n = null == s ? "" : s;
//                         "list" === i ? a = !1 : null != e && t[i] == n || (t[i] = n)
//                     }
//                 } catch (t) {
//                 }
//                 null == s || !1 === s ? !1 === s && "" !== t.getAttribute(i) || t.removeAttribute(i) : (!a || 4 & r || o) && !n && t.setAttribute(i, s = !0 === s ? "" : s)
//             } else i = "-" === i[2] ? i.slice(3) : Y(n, h) ? h.slice(2) : h[2] + i.slice(3), e && l.rel(t, i, e, !1), s && l.ael(t, i, s, !1)
//         }
//     }, z = /\s/, C = t => t ? t.split(z) : [], M = (t, i, e, s) => {
//         const n = 11 === i.M.nodeType && i.M.host ? i.M.host : i.M, o = t && t.g || f, l = i.g || f;
//         for (s in o) s in l || k(n, s, o[s], void 0, e, i.t);
//         for (s in l) k(n, s, o[s], l[s], e, i.t)
//     }, $ = (i, s, n) => {
//         let l, r, a = s.v[n], h = 0;
//         if (null !== a.u) l = a.M = o.createTextNode(a.u); else {
//             if (e || (e = "svg" === a.C), l = a.M = o.createElementNS(e ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a.C), e && "foreignObject" === a.C && (e = !1), M(null, a, e), null != t && l["s-si"] !== t && l.classList.add(l["s-si"] = t), a.v) for (h = 0; h < a.v.length; ++h) r = $(i, a, h), r && l.appendChild(r);
//             "svg" === a.C ? e = !1 : "foreignObject" === l.tagName && (e = !0)
//         }
//         return l
//     }, S = (t, e, s, n, o, l) => {
//         let r, a = t;
//         for (a.shadowRoot && a.tagName === i && (a = a.shadowRoot); o <= l; ++o) n[o] && (r = $(null, s, o), r && (n[o].M = r, a.insertBefore(r, e)))
//     }, j = (t, i, e, s, n) => {
//         for (; i <= e; ++i) (s = t[i]) && (n = s.M, P(s), n.remove())
//     }, L = (t, i) => t.C === i.C && t.k === i.k, I = (t, i) => {
//         const s = i.M = t.M, n = t.v, o = i.v, l = i.C, r = i.u;
//         null === r ? (e = "svg" === l || "foreignObject" !== l && e, M(t, i, e), null !== n && null !== o ? ((t, i, e, s) => {
//             let n, o, l = 0, r = 0, a = 0, h = 0, c = i.length - 1, d = i[0], p = i[c], u = s.length - 1, f = s[0],
//                 m = s[u];
//             for (; l <= c && r <= u;) if (null == d) d = i[++l]; else if (null == p) p = i[--c]; else if (null == f) f = s[++r]; else if (null == m) m = s[--u]; else if (L(d, f)) I(d, f), d = i[++l], f = s[++r]; else if (L(p, m)) I(p, m), p = i[--c], m = s[--u]; else if (L(d, m)) I(d, m), t.insertBefore(d.M, p.M.nextSibling), d = i[++l], m = s[--u]; else if (L(p, f)) I(p, f), t.insertBefore(p.M, d.M), p = i[--c], f = s[++r]; else {
//                 for (a = -1, h = l; h <= c; ++h) if (i[h] && null !== i[h].k && i[h].k === f.k) {
//                     a = h;
//                     break
//                 }
//                 a >= 0 ? (o = i[a], o.C !== f.C ? n = $(i && i[r], e, a) : (I(o, f), i[a] = void 0, n = o.M), f = s[++r]) : (n = $(i && i[r], e, r), f = s[++r]), n && d.M.parentNode.insertBefore(n, d.M)
//             }
//             l > c ? S(t, null == s[u + 1] ? null : s[u + 1].M, e, s, r, u) : r > u && j(i, l, c)
//         })(s, n, i, o) : null !== o ? (null !== t.u && (s.textContent = ""), S(s, null, i, o, 0, o.length - 1)) : null !== n && j(n, 0, n.length - 1), e && "svg" === l && (e = !1)) : t.u !== r && (s.data = r)
//     }, P = t => {
//         t.g && t.g.ref && t.g.ref(null), t.v && t.v.map(P)
//     }, E = (t, i, e) => {
//         const s = t;
//         return {emit: t => O(s, i, {bubbles: !!(4 & e), composed: !!(2 & e), cancelable: !!(1 & e), detail: t})}
//     }, O = (t, i, e) => {
//         const s = l.ce(i, e);
//         return t.dispatchEvent(s), s
//     }, D = (t, i) => {
//         i && !t.S && i["s-p"] && i["s-p"].push(new Promise((i => t.S = i)))
//     }, R = (t, i) => {
//         if (t.t |= 16, !(4 & t.t)) return D(t, t.j), rt((() => _(t, i)));
//         t.t |= 512
//     }, _ = (t, i) => {
//         const e = t.l;
//         let s;
//         return i && (s = W(e, "componentWillLoad")), T(s, (() => A(t, e, i)))
//     }, A = async (t, i, e) => {
//         const s = t.l, n = s["s-rc"];
//         e && (t => {
//             const i = t.L, e = t.l, s = i.t, n = ((t, i) => {
//                 let e = u(i), s = tt.get(e);
//                 if (t = 11 === t.nodeType ? t : o, s) if ("string" == typeof s) {
//                     let i, n = p.get(t = t.head || t);
//                     n || p.set(t, n = new Set), n.has(e) || (i = o.createElement("style"), i.innerHTML = s, t.insertBefore(i, t.querySelector("link")), n && n.add(e))
//                 } else t.adoptedStyleSheets.includes(s) || (t.adoptedStyleSheets = [...t.adoptedStyleSheets, s]);
//                 return e
//             })(e.shadowRoot ? e.shadowRoot : e.getRootNode(), i);
//             10 & s && (e["s-sc"] = n, e.classList.add(n + "-h"))
//         })(t);
//         B(t, i), n && (n.map((t => t())), s["s-rc"] = void 0);
//         {
//             const i = s["s-p"], e = () => F(t);
//             0 === i.length ? e() : (Promise.all(i).then(e), t.t |= 4, i.length = 0)
//         }
//     }, B = (e, s) => {
//         try {
//             s = s.render(), e.t &= -17, e.t |= 2, ((e, s) => {
//                 const n = e.l, o = e.I || w(null, null), l = (t => t && t.C === g)(s) ? s : x(null, null, s);
//                 i = n.tagName, l.C = null, l.t |= 4, e.I = l, l.M = o.M = n.shadowRoot || n, t = n["s-sc"], I(o, l)
//             })(e, s)
//         } catch (t) {
//             Z(t, e.l)
//         }
//         return null
//     }, F = t => {
//         const i = t.l, e = i, s = t.j;
//         64 & t.t ? W(e, "componentDidUpdate") : (t.t |= 64, U(i), W(e, "componentDidLoad"), t.P(i), s || H()), t.S && (t.S(), t.S = void 0), 512 & t.t && lt((() => R(t, !1))), t.t &= -517
//     }, H = () => {
//         U(o.documentElement), lt((() => O(n, "appload", {detail: {namespace: "rw-widgets"}})))
//     }, W = (t, i, e) => {
//         if (t && t[i]) try {
//             return t[i](e)
//         } catch (t) {
//             Z(t)
//         }
//     }, T = (t, i) => t && t.then ? t.then(i) : i(), U = t => t.classList.add("hydrated"), V = (t, i) => {
//         if (i.O) {
//             t.watchers && (i.D = t.watchers);
//             const e = Object.entries(i.O), s = t.prototype;
//             e.map((([t, [e]]) => {
//                 (31 & e || 32 & e) && Object.defineProperty(s, t, {
//                     get() {
//                         return ((t, i) => Q(this).R.get(i))(0, t)
//                     }, set(e) {
//                         ((t, i, e, s) => {
//                             const n = Q(t), o = t, l = n.R.get(i), r = n.t, a = o;
//                             if ((e = ((t, i) => null == t || m(t) ? t : 4 & i ? "false" !== t && ("" === t || !!t) : 2 & i ? parseFloat(t) : 1 & i ? t + "" : t)(e, s.O[i][0])) !== l) {
//                                 if (n.R.set(i, e), s.D && 128 & r) {
//                                     const t = s.D[i];
//                                     t && t.map((t => {
//                                         try {
//                                             a[t](e, l, i)
//                                         } catch (t) {
//                                             Z(t, o)
//                                         }
//                                     }))
//                                 }
//                                 2 == (18 & r) && R(n, !1)
//                             }
//                         })(this, t, e, i)
//                     }, configurable: !0, enumerable: !0
//                 })
//             }));
//             {
//                 const i = new Map;
//                 s.attributeChangedCallback = function (t, e, s) {
//                     l.jmp((() => {
//                         const e = i.get(t);
//                         this[e] = (null !== s || "boolean" != typeof this[e]) && s
//                     }))
//                 }, t.observedAttributes = e.filter((([t, i]) => 15 & i[0])).map((([t, e]) => {
//                     const s = e[1] || t;
//                     return i.set(s, t), s
//                 }))
//             }
//         }
//         return t
//     }, q = (t, i) => {
//         const e = {t: i[0], p: i[1]};
//         e.O = i[2], e._ = i[3], e.D = t.D;
//         const s = t.prototype.connectedCallback, n = t.prototype.disconnectedCallback;
//         return Object.assign(t.prototype, {
//             __registerHost() {
//                 X(this, e)
//             }, connectedCallback() {
//                 (t => {
//                     if (0 == (1 & l.t)) {
//                         const i = Q(t), e = i.L, s = () => {
//                         };
//                         if (1 & i.t) a(t, i, e._); else {
//                             i.t |= 1;
//                             {
//                                 let e = t;
//                                 for (; e = e.parentNode || e.host;) if (e["s-p"]) {
//                                     D(i, i.j = e);
//                                     break
//                                 }
//                             }
//                             (async (t, i, e, s, n) => {
//                                 if (0 == (32 & i.t) && (n = t.constructor, i.t |= 160, n.style)) {
//                                     let t = n.style;
//                                     const i = u(e);
//                                     if (!tt.has(i)) {
//                                         const s = () => {
//                                         };
//                                         ((t, i, e) => {
//                                             let s = tt.get(t);
//                                             r && e ? (s = s || new CSSStyleSheet, s.replace(i)) : s = i, tt.set(t, s)
//                                         })(i, t, !!(1 & e.t)), s()
//                                     }
//                                 }
//                                 const o = i.j, l = () => R(i, !0);
//                                 o && o["s-rc"] ? o["s-rc"].push(l) : l()
//                             })(t, i, e)
//                         }
//                         s()
//                     }
//                 })(this), s && s.call(this)
//             }, disconnectedCallback() {
//                 (() => {
//                     if (0 == (1 & l.t)) {
//                         const t = Q(this);
//                         t.o && (t.o.map((t => t())), t.o = void 0)
//                     }
//                 })(), n && n.call(this)
//             }
//         }), t.is = e.p, V(t, e)
//     }, K = t => {
//         t.attachShadow({mode: "open"})
//     }, N = t => l.i = t, J = t => Object.assign(l, t), G = new WeakMap, Q = t => G.get(t), X = (t, i) => {
//         const e = {t: 0, l: t, L: i, R: new Map};
//         return e.A = new Promise((t => e.P = t)), t["s-p"] = [], t["s-rc"] = [], a(t, e, i._), G.set(t, e)
//     }, Y = (t, i) => i in t, Z = (t, i) => (0, console.error)(t, i), tt = new Map, it = [], et = [], st = (t, i) => e => {
//         t.push(e), s || (s = !0, i && 4 & l.t ? lt(ot) : l.raf(ot))
//     }, nt = t => {
//         for (let i = 0; i < t.length; i++) try {
//             t[i](performance.now())
//         } catch (t) {
//             Z(t)
//         }
//         t.length = 0
//     }, ot = () => {
//         nt(it), nt(et), (s = it.length > 0) && l.raf(ot)
//     }, lt = t => Promise.resolve(void 0).then(t), rt = st(et, !0);
//
// function at(t) {
//     return "https://widgets.thereviewsplace.com/2.0/" + t
// }
//
// function ht(t) {
//     return "https://repuso.com/?utm_source=widget&utm_medium=" + t + "&utm_campaign=powered"
// }
//
// function ct(t, i, e, s) {
//     let n = e || "0,400";
//     return "Roboto" === i && (n = n.replace(/400/g, "300")), function (t, i, e, s) {
//         let n = "https://fonts.googleapis.com/css2?family=" + i.split(" ").join("+") + ":ital,wght@" + e + "&display=swap";
//         return s && (n += "&text=" + s), dt(t, "stylesheet", n)
//     }(t, i, n, s).then((() => function (t, i) {
//         if ("fonts" in document) {
//             const e = i.split(";").map((t => t.replace("0,", "normal ").replace("1,", "italic "))).map((i => i + " 1em " + t));
//             return Promise.all(e.map((t => document.fonts.load(t))))
//         }
//     }(i, n)))
// }
//
// function dt(t, i, e, s, n, o) {
//     return new Promise(((l, r) => {
//         if (null === t.querySelector(`link[href="${e}"]`)) {
//             const a = document.createElement("link");
//             a.onload = l, a.onerror = () => r(a.remove()), a.setAttribute("rel", i), a.setAttribute("href", e), null != s && a.setAttribute("as", s), null != n && a.setAttribute("type", n), null != o && a.setAttribute("crossorigin", o), t.appendChild(a)
//         } else l(null)
//     }))
// }
//
// function pt(t) {
//     t.target.onerror = null, t.target.src = at("images/no-img.png")
// }
//
// function ut(t) {
//     const i = {y: 31536e3, m: 2592e3, d: 86400, h: 3600, min: 60, sec: 1}, e = Date.now() / 1e3 - t;
//     for (let t in i) {
//         const s = Math.floor(e / i[t]);
//         if (s >= 1) return s + t
//     }
// }
//
// const ft = class extends HTMLElement {
//         constructor() {
//             super(), this.__registerHost(), this.imgLoad = E(this, "imgLoad", 7), this.imgError = E(this, "imgError", 7), this.index = 0, this.preload = !1, this.image = "none", this.load = () => {
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
//             return x(g, {style: {"background-image": this.image}}, "none" === this.image && "image" === this.type ? x("div", {class: "spin"}, x("div", {class: "bounce1"}), x("div", {class: "bounce2"}), x("div", null)) : null)
//         }
//
//         get host() {
//             return this
//         }
//
//         static get style() {
//             return "rw-ll-image{display:flex;align-items:center;justify-content:center}.spin{display:flex;justify-content:space-between;width:45px}.spin>div{background-color:currentColor;width:10px;height:10px;border-radius:100%;display:inline-block;-webkit-animation:bounce 1.4s infinite ease-in-out both;animation:bounce 1.4s infinite ease-in-out both}.spin>.bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spin>.bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes bounce{0%,80%,100%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1.0)}}@keyframes bounce{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1.0);transform:scale(1.0)}}"
//         }
//     }, mt = t => "object" == (t = typeof t) || "function" === t, xt = (t, i, ...e) => {
//         let s = null, n = null, o = !1, l = !1, r = [];
//         const a = i => {
//             for (let e = 0; e < i.length; e++) s = i[e], Array.isArray(s) ? a(s) : null != s && "boolean" != typeof s && ((o = "function" != typeof t && !mt(s)) && (s += ""), o && l ? r[r.length - 1].u += s : r.push(o ? wt(null, s) : s), l = o)
//         };
//         if (a(e), i) {
//             i.key && (n = i.key);
//             {
//                 const t = i.className || i.class;
//                 t && (i.class = "object" != typeof t ? t : Object.keys(t).filter((i => t[i])).join(" "))
//             }
//         }
//         if ("function" == typeof t) return t(null === i ? {} : i, r, gt);
//         const h = wt(t, null);
//         return h.g = i, r.length > 0 && (h.v = r), h.k = n, h
//     }, wt = (t, i) => ({t: 0, C: t, u: i, M: null, v: null, g: null, k: null}),
//     gt = {forEach: (t, i) => t.map(vt).forEach(i), map: (t, i) => t.map(vt).map(i).map(yt)},
//     vt = t => ({vattrs: t.g, vchildren: t.v, vkey: t.k, vname: t.$, vtag: t.C, vtext: t.u}), yt = t => {
//         if ("function" == typeof t.vtag) {
//             const i = Object.assign({}, t.vattrs);
//             return t.vkey && (i.key = t.vkey), t.vname && (i.name = t.vname), xt(t.vtag, i, ...t.vchildren || [])
//         }
//         const i = wt(t.vtag, t.vtext);
//         return i.g = t.vattrs, i.v = t.vchildren, i.k = t.vkey, i.$ = t.vname, i
//     }, bt = t => xt("div", {class: t.class}, xt("a", {
//         onClick: t => t.stopPropagation(),
//         style: {"font-size": "inherit", color: "inherit", "text-decoration": "none"},
//         href: t.href,
//         target: "_blank"
//     }, t.prefix, xt("span", {style: {"font-family": "Courgette, cursive", "font-size": "1.2em"}}, "Repuso"))), kt = t => {
//         if (!t.value || 0 === t.value) return null;
//         let i = t.value;
//         const e = [];
//         for (; i > 0;) i >= 1 ? e.push(xt(zt, {type: "icon-star"})) : i > 0 && e.push(xt(zt, {type: "icon-star-half"})), i--;
//         for (let i = Math.ceil(t.value) + 1; i <= 5; i++) e.push(xt(zt, {type: "icon-star-outline"}));
//         return xt("div", {class: t.classname, style: {color: t.color, "line-height": "0"}}, e)
//     }, zt = t => xt("svg", {class: "icon " + t.type}, xt("use", {href: "#" + t.type})), Ct = t => xt("svg", {
//         "aria-hidden": "true",
//         style: {position: "absolute", width: "0", height: "0", overflow: "hidden"}
//     }, xt("defs", null, t.defs.map((t => t())))), Mt = () => xt("symbol", {
//         id: "icon-chevron-left",
//         viewBox: "0 0 21 28"
//     }, xt("path", {d: "M18.297 4.703l-8.297 8.297 8.297 8.297c0.391 0.391 0.391 1.016 0 1.406l-2.594 2.594c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.594c-0.391-0.391-0.391-1.016 0-1.406l11.594-11.594c0.391-0.391 1.016-0.391 1.406 0l2.594 2.594c0.391 0.391 0.391 1.016 0 1.406z"})),
//     $t = () => xt("symbol", {
//         id: "icon-chevron-right",
//         viewBox: "0 0 19 28"
//     }, xt("path", {d: "M17.297 13.703l-11.594 11.594c-0.391 0.391-1.016 0.391-1.406 0l-2.594-2.594c-0.391-0.391-0.391-1.016 0-1.406l8.297-8.297-8.297-8.297c-0.391-0.391-0.391-1.016 0-1.406l2.594-2.594c0.391-0.391 1.016-0.391 1.406 0l11.594 11.594c0.391 0.391 0.391 1.016 0 1.406z"})),
//     St = () => xt("symbol", {
//         id: "icon-minus",
//         viewBox: "0 0 22 28"
//     }, xt("path", {d: "M22 11.5v3c0 0.828-0.672 1.5-1.5 1.5h-19c-0.828 0-1.5-0.672-1.5-1.5v-3c0-0.828 0.672-1.5 1.5-1.5h19c0.828 0 1.5 0.672 1.5 1.5z"})),
//     jt = () => xt("symbol", {
//         id: "icon-plus",
//         viewBox: "0 0 22 28"
//     }, xt("path", {d: "M22 11.5v3c0 0.828-0.672 1.5-1.5 1.5h-6.5v6.5c0 0.828-0.672 1.5-1.5 1.5h-3c-0.828 0-1.5-0.672-1.5-1.5v-6.5h-6.5c-0.828 0-1.5-0.672-1.5-1.5v-3c0-0.828 0.672-1.5 1.5-1.5h6.5v-6.5c0-0.828 0.672-1.5 1.5-1.5h3c0.828 0 1.5 0.672 1.5 1.5v6.5h6.5c0.828 0 1.5 0.672 1.5 1.5z"})),
//     Lt = () => xt("symbol", {
//         id: "icon-cross",
//         viewBox: "0 0 32 32"
//     }, xt("path", {d: "M22.957 23.758c-0.75 0.75-1.966 0.75-2.715 0l-4.242-4.848-4.242 4.846c-0.75 0.75-1.966 0.75-2.715 0-0.75-0.75-0.75-1.966 0-2.715l4.413-5.040-4.414-5.043c-0.75-0.75-0.75-1.965 0-2.715s1.965-0.75 2.715 0l4.243 4.85 4.242-4.85c0.75-0.75 1.965-0.75 2.715 0s0.75 1.966 0 2.715l-4.413 5.043 4.413 5.040c0.75 0.75 0.75 1.966 0 2.717z"})),
//     It = () => xt("symbol", {
//         id: "icon-share-square-o",
//         viewBox: "0 0 26 28"
//     }, xt("path", {d: "M22 15.453v4.047c0 2.484-2.016 4.5-4.5 4.5h-13c-2.484 0-4.5-2.016-4.5-4.5v-13c0-2.484 2.016-4.5 4.5-4.5h3.984c0.266 0 0.5 0.219 0.5 0.5 0 0.25-0.172 0.453-0.406 0.5-0.781 0.266-1.484 0.578-2.078 0.938-0.078 0.031-0.156 0.063-0.25 0.063h-1.75c-1.375 0-2.5 1.125-2.5 2.5v13c0 1.375 1.125 2.5 2.5 2.5h13c1.375 0 2.5-1.125 2.5-2.5v-3.344c0-0.187 0.109-0.359 0.281-0.453 0.313-0.141 0.594-0.344 0.844-0.578 0.141-0.141 0.359-0.203 0.547-0.125s0.328 0.25 0.328 0.453zM25.703 7.703l-6 6c-0.187 0.203-0.438 0.297-0.703 0.297-0.125 0-0.266-0.031-0.391-0.078-0.359-0.156-0.609-0.516-0.609-0.922v-3h-2.5c-3.437 0-5.625 0.656-6.844 2.047-1.266 1.453-1.641 3.797-1.156 7.391 0.031 0.219-0.109 0.438-0.313 0.531-0.063 0.016-0.125 0.031-0.187 0.031-0.156 0-0.313-0.078-0.406-0.203-0.109-0.156-2.594-3.672-2.594-6.797 0-4.188 1.313-9 11.5-9h2.5v-3c0-0.406 0.25-0.766 0.609-0.922 0.125-0.047 0.266-0.078 0.391-0.078 0.266 0 0.516 0.109 0.703 0.297l6 6c0.391 0.391 0.391 1.016 0 1.406z"})),
//     Pt = () => xt("symbol", {
//         id: "icon-star-outline",
//         viewBox: "0 0 24 24"
//     }, xt("path", {d: "M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984 4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"})),
//     Et = () => xt("symbol", {
//         id: "icon-star-half",
//         viewBox: "0 0 24 24"
//     }, xt("path", {d: "M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031v9.328zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"})),
//     Ot = () => xt("symbol", {
//         id: "icon-star",
//         viewBox: "0 0 24 24"
//     }, xt("path", {d: "M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"})),
//     Dt = () => xt("symbol", {
//         id: "icon-resize-plus",
//         viewBox: "0 0 512 512"
//     }, xt("path", {d: "M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"})),
//     Rt = () => xt("symbol", {
//         id: "icon-resize-minus",
//         viewBox: "0 0 512 512"
//     }, xt("path", {d: "M304 192v32c0 6.6-5.4 12-12 12H124c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"})),
//     _t = () => xt("symbol", {
//         id: "plyr-play",
//         viewBox: "0 0 18 18"
//     }, xt("path", {d: "M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"})),
//     At = class extends HTMLElement {
//         constructor() {
//             super(), this.__registerHost(), this.itemSizeReceived = E(this, "itemSizeReceived", 7), this.arrows = "hover", this.dots = "always", this.zoom = "hover", this.autoplay = 0, this.loadDelay = !0, this.preload = !1, this.index = 0, this.maxed = !1, this.videoControls = !1, this.resumePlayback = 0, this.playerReady = !1, this.touchPos = null
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
//                 const i = this.touchPos.x - t.touches[0].clientX, e = this.touchPos.y - t.touches[0].clientY;
//                 Math.abs(i) > Math.abs(e) && (i > 0 ? this.showNext() : this.showPrev()), this.touchPos = null
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
//             At.player_init || (At.player_init = function (t, i, e) {
//                 return new Promise(((s, n) => {
//                     if (null === t.querySelector(`script[src="${i}"]`)) {
//                         const o = document.createElement("script");
//                         o.onload = s, o.onerror = () => n(o.remove()), o.setAttribute("src", i), o.setAttribute("type", e), t.appendChild(o)
//                     } else s(null)
//                 }))
//             }(document.head, at("rw-component-player.js"), "module")), At.player_init.then((() => this.playerReady = !0)).catch((() => console.warn("Failed to load video player")))
//         }
//
//         onIndexChange() {
//             this.playerReady = !1, this.itemSizeReceived.emit(this.source[this.index].size)
//         }
//
//         onMaxedChange() {
//             var t, i;
//             (null === (i = null === (t = this.playerRef) || void 0 === t ? void 0 : t.plyr) || void 0 === i ? void 0 : i.playing) ? this.itemSizeReceived.emit(this.playerRef.size) : this.itemSizeReceived.emit(this.source[this.index].size)
//         }
//
//         saveItemSize(t, i) {
//             this.source.forEach((e => {
//                 e.id === t && (e.size = i, this.source[this.index].id === t && this.itemSizeReceived.emit(i))
//             }))
//         }
//
//         onAction(t) {
//             t.stopImmediatePropagation(), window.clearInterval(this.timer)
//         }
//
//         removeItem(t) {
//             this.source = this.source.filter((i => i.id !== t)), this.itemSizeReceived.emit(this.source[this.index].size)
//         }
//
//         render() {
//             if (0 === this.source.length) return x(g, {style: {display: "none"}});
//             let t = null, i = null, e = null;
//             if (this.source.length > 0 && "hover" === this.zoom && (t = x("span", {
//                 class: "resize hover" + (this.maxed ? " maxed" : ""),
//                 onClick: t => {
//                     var i;
//                     this.onAction(t), null === (i = this.zoomAction) || void 0 === i || i.call(this)
//                 }
//             }, x(zt, this.maxed ? {type: "icon-resize-minus"} : {type: "icon-resize-plus"}))), this.source.length > 1) {
//                 const t = "video" === this.source[this.index].type ? " onvideo" : "";
//                 "always" !== this.arrows && "hover" !== this.arrows || (i = [x("div", {
//                     class: "arrows a-prev " + this.arrows + t,
//                     onClick: t => {
//                         this.onAction(t), this.showPrev()
//                     }
//                 }, x("span", {class: "arrow-icon"}, x(zt, {type: "icon-chevron-left"}))), x("div", {
//                     class: "arrows a-next " + this.arrows + t,
//                     onClick: t => {
//                         this.onAction(t), this.showNext()
//                     }
//                 }, x("span", {class: "arrow-icon"}, x(zt, {type: "icon-chevron-right"})))]), "always" !== this.dots && "hover" !== this.dots || (e = x("div", {class: "dots " + this.dots}, this.source.map(((t, i) => x("span", {
//                     class: i === this.index ? "dot-selected" : "dot",
//                     onClick: t => {
//                         this.onAction(t), this.index = i
//                     }
//                 })))))
//             }
//             return x(g, {
//                 tabindex: "-1",
//                 dir: "ltr",
//                 onClick: t => this.onAction(t)
//             }, this.source.map(((t, i) => x("rw-ll-image", {
//                 key: t.id,
//                 class: "media-item",
//                 src: t.url,
//                 type: t.type,
//                 index: this.loadDelay ? i : 0,
//                 style: {opacity: i === this.index ? "1" : "0"},
//                 onImgError: () => {
//                     "image" === t.type && this.removeItem(t.id), "video" === t.type && this.saveItemSize(t.id, {
//                         w: 320,
//                         h: 200
//                     })
//                 },
//                 onImgLoad: i => this.saveItemSize(t.id, i.detail),
//                 preload: this.preload
//             }, "video" === t.type && i === this.index ? this.playerReady || this.resumePlayback ? x("rw-player", {
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
//             }, x(zt, {type: "plyr-play"})) : null))), t, i, e, x(Ct, {defs: [Mt, $t, Dt, Rt, _t]}))
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
//     }, Bt = class extends HTMLElement {
//         constructor() {
//             super(), this.__registerHost(), K(this), this.popupClosed = E(this, "popupClosed", 7), this.index = 0, this.resumePlayback = 0, this.maxed = !1
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
//                 let t = this.size.w, i = this.size.h;
//                 const e = t / i, s = .85 * window.innerWidth, n = .85 * window.innerHeight;
//                 return i > n && (t = n * e, i = n), t > s && (t = s, i = s / e), {
//                     width: Math.trunc(t) + "px",
//                     height: Math.trunc(i) + "px"
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
//                 onError: pt
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
//             let i = null;
//             return this.item.media_arr && this.item.media_arr.length > 0 && (i = x("rw-media", {
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
//             }, t, i), this.settings.branded ? x(bt, {
//                 class: "branding",
//                 prefix: "Powered by ",
//                 href: this.settings.branding_link_modal
//             }) : null, x(Ct, {defs: [Ot, Et, Pt, It, Lt]}))
//         }
//
//         get host() {
//             return this
//         }
//
//         static get style() {
//             return ".icon{display:inline-block;width:1em;height:1em;stroke-width:0;stroke:currentColor;fill:currentColor}.icon-share-square-o{width:0.9319285714285714em}:host{all:initial;display:flex;justify-content:center;align-items:center;z-index:2147483002;position:fixed;top:0px;left:0px;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.8);font-size:14px;font-family:Verdana, Helvetica, Arial, sans-serif}.container{display:flex;flex-direction:column;margin:30px}.main{min-width:33vw;max-width:600px;max-height:85vh;padding:30px;display:flex;flex-direction:column;border-radius:5px;color:#565656;background-color:#ffffff;transition:width 0.5s, height 0.5s}.main.maxed{min-width:auto;max-width:85vw;padding:4px}.branding{align-self:flex-end;margin-top:4px;font-size:12px;color:#ffffff}.header{display:flex;align-items:flex-start;min-height:35px}.avatar{margin-right:10px}.avatar img{min-height:35px;min-width:35px;max-width:35px;border-radius:5px}.info{display:flex;flex-direction:column;align-items:flex-start;flex-grow:1;margin-right:10px}.name{font-weight:bold}.channel-link a,.channel-link a:hover{display:flex;color:#b8b8b8;text-decoration:none;font-size:13px}.channel-link span{display:flex;align-items:flex-end;font-size:14px}.close{display:flex;cursor:pointer;font-size:28px}.text{overflow-y:auto;word-break:break-word;line-height:24px;min-height:48px;margin-top:10px;margin-bottom:10px}.stat{display:flex;align-items:center;min-height:28px}.spacer{flex-grow:1}.source img{max-width:28px;max-height:28px;min-width:28px;min-height:28px}.star{font-size:22px;color:gold}.media{min-height:150px;height:30vh;margin-top:10px;border:1px solid #f2f2f2;border-radius:5px}.media.maxed{min-height:auto;height:100%;margin:0;border:0px}"
//         }
//     }, Ft = class extends HTMLElement {
//         constructor() {
//             super(), this.__registerHost(), K(this), this.dataIndex = 0, this.paused = !0, this.touchEvent = !1, this.touchNum = 0
//         }
//
//         componentWillLoad() {
//             const t = {
//                 disable_custom_posts: "true",
//                 tags: this.dataContentTags || null,
//                 website_id: this.dataWebsiteId || null
//             };
//             "undefined" != typeof rw_schema_params && Object.entries(rw_schema_params).forEach((([i, e]) => t["schema[" + i + "]"] = e));
//             let i = function (t) {
//                 return Object.keys(t).filter((i => t[i])).map((i => encodeURIComponent(i) + "=" + encodeURIComponent("" + t[i]))).join("&")
//             }(t);
//             return fetch(function (t, i) {
//                 const e = i.filter(Boolean).join("&");
//                 return "https://api.thereviewsplace.com/v1/widgets/posts/" + t + (e ? "?" + e : "")
//             }(this.dataRwFlash, [i])).then((t => function (t) {
//                 if (t.ok) return t.json().catch((() => {
//                     throw Error("Widget [ID] not found")
//                 }));
//                 throw Error(t.status + " " + t.statusText)
//             }(t))).catch((t => console.warn(t.message))).then((t => function (t) {
//                 return t && t.items && 0 !== t.items.length ? !0 === t.settings.hide_on_mobile && window.screen.width <= 468 ? new Promise((() => {
//                 })) : Promise.resolve(t) : new Promise((() => {
//                 }))
//             }(t))).then((t => function (t) {
//                 return Array.isArray(t.items) && t.items.forEach((i => {
//                     t.settings.remove_line_breaks && (i.text = function (t) {
//                         const i = document.createElement("div");
//                         return i.innerHTML = t, i.textContent || i.innerText || ""
//                     }(i.text)), Array.isArray(i.media_arr) && (i.media_arr = i.media_arr.slice(0, t.settings.slider_enabled_popup ? 12 : 1), i.media_arr_small = i.media_arr.slice(0, t.settings.slider_enabled_small ? 3 : 1))
//                 })), Promise.resolve(t)
//             }(t))).then((t => this.data = t)).then((() => this.data.settings.randomize ? this.data.items.sort((() => Math.random() - .5)) : null)).then((() => {
//                 screen.width <= 468 && (this.data.settings.width = this.data.settings.width_mobile, this.data.settings.height = this.data.settings.height_mobile, this.data.settings.text_size = this.data.settings.text_size_mobile)
//             })).then((() => this.data.settings.branding_link = ht("flash"))).then((() => this.data.settings.branding_link_modal = ht("flash-modal")))
//         }
//
//         componentDidLoad() {
//             const t = function (t, i) {
//                 switch (i || "Default") {
//                     case"Default":
//                         return Promise.resolve();
//                     case"Inherit":
//                         return Promise.resolve(t.style.setProperty("font-family", "inherit"));
//                     default:
//                         return ct(t, i, "0,400;0,700;1,400").then((() => t.style.setProperty("font-family", i))).catch((() => console.warn("Unable to load font. Fallback to default")))
//                 }
//             }(this.host, this.data.settings.font);
//             if (this.data.settings.branded && ct(this.host, "Courgette", "0,400", "Repuso"), this.data.settings.custom_css) {
//                 const t = document.createElement("style");
//                 t.textContent = this.data.settings.custom_css, t.setAttribute("data-name", "custom-css"), this.host.shadowRoot.appendChild(t)
//             }
//             const i = window.getComputedStyle(this.text), e = parseFloat(i.getPropertyValue("line-height"));
//             this.data.settings.webkit_line_clamp = Math.floor(this.data.settings.height / e), (() => {
//                 {
//                     const t = Q(this);
//                     t.l.isConnected && 2 == (18 & t.t) && R(t, !1)
//                 }
//             })(), t.then((() => {
//                 this.host.style.setProperty("z-index", "2147483001"), this.host.style.setProperty("position", "fixed"), this.host.style.setProperty("left", "left" === this.data.settings.position ? this.data.settings.position_side + "px" : "auto"), this.host.style.setProperty("right", "right" === this.data.settings.position ? this.data.settings.position_side + "px" : "auto"), this.host.style.setProperty("bottom", this.data.settings.position_bottom + "px"), this.host.style.setProperty("display", "block"), this.data.settings.autoplay > 0 && this.play(), this.data.settings.popup_font = window.getComputedStyle(this.host).getPropertyValue("font-family")
//             })), document.addEventListener("touchstart", (() => {
//                 this.hideControls(), this.touchEvent = !0, this.touchNum = 0
//             }), {passive: !0}), this.host.addEventListener("touchstart", (t => {
//                 this.showControls(), this.touchEvent = !0, this.touchNum += 1, t.stopPropagation()
//             }), {passive: !0}), function (t) {
//                 t && null === document.querySelector("#rw-schema") && document.head.insertAdjacentHTML("beforeend", t)
//             }(this.data.schema)
//         }
//
//         componentDidUpdate() {
//             var t, i;
//             const e = this.getNextIndex();
//             this.wait = this.preload(null === (i = null === (t = this.data.items[e].media_arr_small) || void 0 === t ? void 0 : t[0]) || void 0 === i ? void 0 : i.url)
//         }
//
//         play() {
//             this.paused = !1;
//             const t = async () => {
//                 this.paused || (await this.wait, this.next(), this.timer = window.setTimeout(t, 1e3 * this.data.settings.autoplay))
//             };
//             this.timer = window.setTimeout(t, 1e3 * this.data.settings.autoplay)
//         }
//
//         stop() {
//             this.paused = !0, window.clearTimeout(this.timer)
//         }
//
//         next() {
//             const t = this.getNextIndex();
//             if (0 === t && !this.data.settings.loop) return this.stop();
//             this.container.classList.remove("fade-in"), this.dataIndex = t, window.requestAnimationFrame((() => window.requestAnimationFrame((() => this.container.classList.add("fade-in")))))
//         }
//
//         getNextIndex() {
//             return this.dataIndex < this.data.items.length - 1 ? this.dataIndex + 1 : 0
//         }
//
//         preload(t) {
//             return new Promise((i => {
//                 if (!t) return i(null);
//                 const e = new Image;
//                 e.onload = i, e.onerror = i, e.src = t
//             }))
//         }
//
//         popupReview(t, i = !1) {
//             var e, s, n, o;
//             this.popup = document.createElement("rw-popup-review"), this.popup.item = t, this.popup.settings = this.data.settings, this.popup.maxed = i;
//             const l = this.host.shadowRoot.querySelector("rw-media");
//             this.popup.index = null == l ? void 0 : l.index, (null === (s = null === (e = null == l ? void 0 : l.playerRef) || void 0 === e ? void 0 : e.plyr) || void 0 === s ? void 0 : s.playing) && (this.popup.resumePlayback = null === (o = null === (n = null == l ? void 0 : l.playerRef) || void 0 === n ? void 0 : n.plyr) || void 0 === o ? void 0 : o.currentTime), i && (this.popup.size = {
//                 w: l.offsetWidth,
//                 h: l.offsetHeight
//             }), document.body.appendChild(this.popup), this.stop(), this.host.style.setProperty("display", "none"), this.popup.addEventListener("popupClosed", (() => {
//                 this.popup = null, this.host.style.setProperty("display", "block"), this.handleMouseout()
//             }))
//         }
//
//         touchHandler(t) {
//             (!this.touchEvent || this.touchNum > 1) && (this.touchNum = 0, t()), this.touchEvent = !1
//         }
//
//         handleMouseover() {
//             this.popup || (this.stop(), this.showControls())
//         }
//
//         handleMouseout() {
//             this.popup || (this.data.settings.autoplay > 0 && this.play(), this.hideControls())
//         }
//
//         showControls() {
//             this.open.style.setProperty("display", "block"), this.close.style.setProperty("display", "block")
//         }
//
//         hideControls() {
//             this.open.style.setProperty("display", "none"), this.close.style.setProperty("display", "none")
//         }
//
//         render() {
//             const t = this.data.items[this.dataIndex];
//             return x("div", {
//                 class: "container fade-in",
//                 dir: "ltr",
//                 ref: t => this.container = t,
//                 style: {
//                     width: this.data.settings.width + "px",
//                     "font-size": this.data.settings.text_size + "px",
//                     "background-color": this.data.settings.background_color || "#FFFFFF",
//                     color: this.data.settings.text_color || "#000000"
//                 }
//             }, x("div", {
//                 class: "item",
//                 onClick: () => this.touchHandler((() => this.popupReview(t)))
//             }, t.from_image ? x("div", {class: "avatar"}, x("img", {
//                 key: t.id,
//                 src: t.from_image,
//                 onError: pt
//             })) : x("div", null), x("div", {class: "right"}, x("div", {
//                 class: "text",
//                 dir: "auto",
//                 ref: t => this.text = t,
//                 style: {
//                     "max-height": this.data.settings.height + "px",
//                     "-webkit-line-clamp": this.data.settings.webkit_line_clamp
//                 },
//                 innerHTML: t.text
//             }), this.data.settings.show_from_name ? x("div", {class: "name"}, t.from_name) : null, this.data.settings.show_media_small && t.media_arr_small && t.media_arr_small.length > 0 ? x("rw-media", {
//                 class: "media",
//                 key: t.id,
//                 zoomAction: () => this.popupReview(t, !0),
//                 src: t.media_arr_small
//             }) : null, x("div", {class: "footer"}, x(kt, {
//                 value: t.rating_value,
//                 classname: "star"
//             }), x("div", {class: "spacer"}), this.data.settings.branded ? x(bt, {
//                 class: "branding",
//                 prefix: "by ",
//                 href: this.data.settings.branding_link
//             }) : null, this.data.settings.show_date ? x("div", {class: "date"}, ut(t.ts), "Â ") : null, "repuso" !== t.type || this.data.settings.branded ? x("div", {class: "channel"}, x("img", {src: at("images/15x15/logo-" + t.type + ".png")})) : null))), x("div", {
//                 class: "open",
//                 ref: t => this.open = t,
//                 onClick: () => this.touchHandler((() => this.popupReview(t)))
//             }, x(zt, {type: "icon-plus"})), x("div", {
//                 class: "close",
//                 ref: t => this.close = t,
//                 onClick: () => this.touchHandler((() => {
//                     this.stop(), this.host.remove()
//                 }))
//             }, x(zt, {type: "icon-minus"})), x(Ct, {defs: [Ot, Et, Pt, St, jt]}))
//         }
//
//         get host() {
//             return this
//         }
//
//         static get style() {
//             return ".icon{display:inline-block;width:1em;height:1em;stroke-width:0;stroke:currentColor;fill:currentColor}.icon-minus{width:0.7857142857142857em}.icon-plus{width:0.7857142857142857em}:host{all:initial;display:none;overflow:hidden;font-family:Verdana, Helvetica, Arial, sans-serif}.container{box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.2);border-radius:10px;margin:10px;opacity:0}.container:hover .text{opacity:0.5}.fade-in{animation:fadein 1.5s;opacity:1}@keyframes fadein{0%{opacity:0}100%{opacity:1}}.item{display:flex;padding:10px;cursor:pointer}.avatar{margin-right:6px}.avatar img{min-width:40px;max-width:40px;border-radius:50%}.right{display:flex;flex-direction:column;flex-grow:1}.text{word-break:break-word;margin-bottom:6px;padding-left:2px;line-height:1.5;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.name{margin-bottom:6px;font-size:0.8em;font-weight:bold;padding-left:2px}.media{margin-bottom:6px;height:120px;border:1px solid #f2f2f2;border-radius:8px}.footer{display:flex;align-items:center}.star{font-size:18px;color:gold}.spacer{flex-grow:1}.date{font-size:0.8em;opacity:0.6}.channel{display:flex;align-items:center}.channel img{max-width:16px;max-height:16px}.open,.close{display:none;color:#565656;position:absolute;top:16px;right:18px;font-size:20px;width:20px;height:20px;padding:2px;cursor:pointer}.close{right:46px}.branding{margin-right:4px;font-size:12px;color:#b2b2b2}"
//         }
//     };
// !function () {
//     dt(document.head, "preconnect", "https://fonts.googleapis.com"), dt(document.head, "preconnect", "https://fonts.gstatic.com", null, null, "");
//     const t = import.meta.url.split("/").pop().split(".").shift(), i = "div[data-rw-" + t.split("-").pop() + "]";
//     document.querySelectorAll(i).forEach((i => {
//         if (!i.querySelector(t)) {
//             const e = document.createElement(t);
//             for (let t of i.getAttributeNames()) e.setAttribute(t, i.getAttribute(t));
//             e.removeAttribute("id"), e.removeAttribute("style"), i.appendChild(e)
//         }
//     }))
// }();
// const Ht = q(ft, [0, "rw-ll-image", {src: [1], type: [1], index: [2], preload: [4], image: [32]}]),
//     Wt = q(At, [0, "rw-media", {
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
//     }, [[0, "keydown", "handleKeyDown"]]]), Tt = q(Bt, [1, "rw-popup-review", {
//         item: [8],
//         settings: [8],
//         index: [2],
//         resumePlayback: [2, "resume-playback"],
//         maxed: [1028],
//         size: [1040]
//     }, [[0, "itemSizeReceived", "onItemSizeReceived"], [4, "keydown", "handleKeyDown"], [0, "click", "handleClick"]]]),
//     Ut = q(Ft, [1, "rw-widget-flash", {
//         dataRwFlash: [1, "data-rw-flash"],
//         dataContentTags: [1, "data-content-tags"],
//         dataWebsiteId: [1, "data-website-id"],
//         dataIndex: [32]
//     }, [[1, "mouseover", "handleMouseover"], [1, "mouseout", "handleMouseout"]]]), Vt = t => {
//         "undefined" != typeof customElements && [Ht, Wt, Tt, Ut].forEach((i => {
//             customElements.get(i.is) || customElements.define(i.is, i, t)
//         }))
//     };
// export {
//     Ht as RwLlImage,
//     Wt as RwMedia,
//     Tt as RwPopupReview,
//     Ut as RwWidgetFlash,
//     Vt as defineCustomElements,
//     N as setAssetPath,
//     J as setPlatformOptions
// };
// Vt();
//
// export const FlashRepuso = ({ repusoReference }) => (
//     <>
//         <rw-widget-flash data-rw-flash={repusoReference}></rw-widget-flash>
//     </>
// );
