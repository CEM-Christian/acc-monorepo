// https://widgets.thereviewsplace.com/2.0/rw-widget-grid.js
import React from 'react';
import PropTypes from 'prop-types';

let t, i, e = !1, s = !1;
const n = "undefined" != typeof window ? window : {}, o = n.document || {head: {}}, l = {
        t: 0,
        i: "",
        jmp: t => t(),
        raf: t => requestAnimationFrame(t),
        ael: (t, i, e, s) => t.addEventListener(i, e, s),
        rel: (t, i, e, s) => t.removeEventListener(i, e, s),
        ce: (t, i) => new CustomEvent(t, i)
    }, r = (() => {
        try {
            return new CSSStyleSheet, "function" == typeof (new CSSStyleSheet).replace
        } catch (t) {
        }
        return !1
    })(), a = (t, i, e) => {
        e && e.map((([e, s, n]) => {
            const o = h(t, e), r = c(i, n), a = d(e);
            l.ael(o, s, r, a), (i.o = i.o || []).push((() => l.rel(o, s, r, a)))
        }))
    }, c = (t, i) => e => {
        try {
            t.l[i](e)
        } catch (t) {
            Z(t)
        }
    }, h = (t, i) => 4 & i ? o : t, d = t => 0 != (2 & t), p = new WeakMap, u = t => "sc-" + t.p, f = {},
    m = t => "object" == (t = typeof t) || "function" === t, x = (t, i, ...e) => {
        let s = null, n = null, o = !1, l = !1, r = [];
        const a = i => {
            for (let e = 0; e < i.length; e++) s = i[e], Array.isArray(s) ? a(s) : null != s && "boolean" != typeof s && ((o = "function" != typeof t && !m(s)) && (s += ""), o && l ? r[r.length - 1].u += s : r.push(o ? g(null, s) : s), l = o)
        };
        if (a(e), i) {
            i.key && (n = i.key);
            {
                const t = i.className || i.class;
                t && (i.class = "object" != typeof t ? t : Object.keys(t).filter((i => t[i])).join(" "))
            }
        }
        if ("function" == typeof t) return t(null === i ? {} : i, r, v);
        const c = g(t, null);
        return c.g = i, r.length > 0 && (c.v = r), c.k = n, c
    }, g = (t, i) => ({t: 0, C: t, u: i, $: null, v: null, g: null, k: null}), w = {},
    v = {forEach: (t, i) => t.map(y).forEach(i), map: (t, i) => t.map(y).map(i).map(b)},
    y = t => ({vattrs: t.g, vchildren: t.v, vkey: t.k, vname: t.M, vtag: t.C, vtext: t.u}), b = t => {
        if ("function" == typeof t.vtag) {
            const i = Object.assign({}, t.vattrs);
            return t.vkey && (i.key = t.vkey), t.vname && (i.name = t.vname), x(t.vtag, i, ...t.vchildren || [])
        }
        const i = g(t.vtag, t.vtext);
        return i.g = t.vattrs, i.v = t.vchildren, i.k = t.vkey, i.M = t.vname, i
    }, k = (t, i, e, s, o, r) => {
        if (e !== s) {
            let a = Y(t, i), c = i.toLowerCase();
            if ("class" === i) {
                const i = t.classList, n = C(e), o = C(s);
                i.remove(...n.filter((t => t && !o.includes(t)))), i.add(...o.filter((t => t && !n.includes(t))))
            } else if ("style" === i) {
                for (const i in e) s && null != s[i] || (i.includes("-") ? t.style.removeProperty(i) : t.style[i] = "");
                for (const i in s) e && s[i] === e[i] || (i.includes("-") ? t.style.setProperty(i, s[i]) : t.style[i] = s[i])
            } else if ("key" === i) ; else if ("ref" === i) s && s(t); else if (t.__lookupSetter__(i) || "o" !== i[0] || "n" !== i[1]) {
                const n = m(s);
                if ((a || n && null !== s) && !o) try {
                    if (t.tagName.includes("-")) t[i] = s; else {
                        let n = null == s ? "" : s;
                        "list" === i ? a = !1 : null != e && t[i] == n || (t[i] = n)
                    }
                } catch (t) {
                }
                null == s || !1 === s ? !1 === s && "" !== t.getAttribute(i) || t.removeAttribute(i) : (!a || 4 & r || o) && !n && t.setAttribute(i, s = !0 === s ? "" : s)
            } else i = "-" === i[2] ? i.slice(3) : Y(n, c) ? c.slice(2) : c[2] + i.slice(3), e && l.rel(t, i, e, !1), s && l.ael(t, i, s, !1)
        }
    }, z = /\s/, C = t => t ? t.split(z) : [], $ = (t, i, e, s) => {
        const n = 11 === i.$.nodeType && i.$.host ? i.$.host : i.$, o = t && t.g || f, l = i.g || f;
        for (s in o) s in l || k(n, s, o[s], void 0, e, i.t);
        for (s in l) k(n, s, o[s], l[s], e, i.t)
    }, M = (i, s, n) => {
        let l, r, a = s.v[n], c = 0;
        if (null !== a.u) l = a.$ = o.createTextNode(a.u); else {
            if (e || (e = "svg" === a.C), l = a.$ = o.createElementNS(e ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", a.C), e && "foreignObject" === a.C && (e = !1), $(null, a, e), null != t && l["s-si"] !== t && l.classList.add(l["s-si"] = t), a.v) for (c = 0; c < a.v.length; ++c) r = M(i, a, c), r && l.appendChild(r);
            "svg" === a.C ? e = !1 : "foreignObject" === l.tagName && (e = !0)
        }
        return l
    }, j = (t, e, s, n, o, l) => {
        let r, a = t;
        for (a.shadowRoot && a.tagName === i && (a = a.shadowRoot); o <= l; ++o) n[o] && (r = M(null, s, o), r && (n[o].$ = r, a.insertBefore(r, e)))
    }, S = (t, i, e, s, n) => {
        for (; i <= e; ++i) (s = t[i]) && (n = s.$, P(s), n.remove())
    }, E = (t, i) => t.C === i.C && t.k === i.k, L = (t, i) => {
        const s = i.$ = t.$, n = t.v, o = i.v, l = i.C, r = i.u;
        null === r ? (e = "svg" === l || "foreignObject" !== l && e, $(t, i, e), null !== n && null !== o ? ((t, i, e, s) => {
            let n, o, l = 0, r = 0, a = 0, c = 0, h = i.length - 1, d = i[0], p = i[h], u = s.length - 1, f = s[0],
                m = s[u];
            for (; l <= h && r <= u;) if (null == d) d = i[++l]; else if (null == p) p = i[--h]; else if (null == f) f = s[++r]; else if (null == m) m = s[--u]; else if (E(d, f)) L(d, f), d = i[++l], f = s[++r]; else if (E(p, m)) L(p, m), p = i[--h], m = s[--u]; else if (E(d, m)) L(d, m), t.insertBefore(d.$, p.$.nextSibling), d = i[++l], m = s[--u]; else if (E(p, f)) L(p, f), t.insertBefore(p.$, d.$), p = i[--h], f = s[++r]; else {
                for (a = -1, c = l; c <= h; ++c) if (i[c] && null !== i[c].k && i[c].k === f.k) {
                    a = c;
                    break
                }
                a >= 0 ? (o = i[a], o.C !== f.C ? n = M(i && i[r], e, a) : (L(o, f), i[a] = void 0, n = o.$), f = s[++r]) : (n = M(i && i[r], e, r), f = s[++r]), n && d.$.parentNode.insertBefore(n, d.$)
            }
            l > h ? j(t, null == s[u + 1] ? null : s[u + 1].$, e, s, r, u) : r > u && S(i, l, h)
        })(s, n, i, o) : null !== o ? (null !== t.u && (s.textContent = ""), j(s, null, i, o, 0, o.length - 1)) : null !== n && S(n, 0, n.length - 1), e && "svg" === l && (e = !1)) : t.u !== r && (s.data = r)
    }, P = t => {
        t.g && t.g.ref && t.g.ref(null), t.v && t.v.map(P)
    }, O = (t, i, e) => {
        const s = t;
        return {emit: t => I(s, i, {bubbles: !!(4 & e), composed: !!(2 & e), cancelable: !!(1 & e), detail: t})}
    }, I = (t, i, e) => {
        const s = l.ce(i, e);
        return t.dispatchEvent(s), s
    }, _ = (t, i) => {
        i && !t.j && i["s-p"] && i["s-p"].push(new Promise((i => t.j = i)))
    }, F = (t, i) => {
        if (t.t |= 16, !(4 & t.t)) return _(t, t.S), rt((() => D(t, i)));
        t.t |= 512
    }, D = (t, i) => {
        const e = t.l;
        let s;
        return i && (s = q(e, "componentWillLoad")), W(s, (() => R(t, e, i)))
    }, R = async (t, i, e) => {
        const s = t.l, n = s["s-rc"];
        e && (t => {
            const i = t.L, e = t.l, s = i.t, n = ((t, i) => {
                let e = u(i), s = tt.get(e);
                if (t = 11 === t.nodeType ? t : o, s) if ("string" == typeof s) {
                    let i, n = p.get(t = t.head || t);
                    n || p.set(t, n = new Set), n.has(e) || (i = o.createElement("style"), i.innerHTML = s, t.insertBefore(i, t.querySelector("link")), n && n.add(e))
                } else t.adoptedStyleSheets.includes(s) || (t.adoptedStyleSheets = [...t.adoptedStyleSheets, s]);
                return e
            })(e.shadowRoot ? e.shadowRoot : e.getRootNode(), i);
            10 & s && (e["s-sc"] = n, e.classList.add(n + "-h"))
        })(t);
        A(t, i), n && (n.map((t => t())), s["s-rc"] = void 0);
        {
            const i = s["s-p"], e = () => B(t);
            0 === i.length ? e() : (Promise.all(i).then(e), t.t |= 4, i.length = 0)
        }
    }, A = (e, s) => {
        try {
            s = s.render(), e.t &= -17, e.t |= 2, ((e, s) => {
                const n = e.l, o = e.P || g(null, null), l = (t => t && t.C === w)(s) ? s : x(null, null, s);
                i = n.tagName, l.C = null, l.t |= 4, e.P = l, l.$ = o.$ = n.shadowRoot || n, t = n["s-sc"], L(o, l)
            })(e, s)
        } catch (t) {
            Z(t, e.l)
        }
        return null
    }, B = t => {
        const i = t.l, e = i, s = t.S;
        64 & t.t || (t.t |= 64, T(i), q(e, "componentDidLoad"), t.O(i), s || H()), t.j && (t.j(), t.j = void 0), 512 & t.t && lt((() => F(t, !1))), t.t &= -517
    }, H = () => {
        T(o.documentElement), lt((() => I(n, "appload", {detail: {namespace: "rw-widgets"}})))
    }, q = (t, i, e) => {
        if (t && t[i]) try {
            return t[i](e)
        } catch (t) {
            Z(t)
        }
    }, W = (t, i) => t && t.then ? t.then(i) : i(), T = t => t.classList.add("hydrated"), V = (t, i) => {
        if (i.I) {
            t.watchers && (i._ = t.watchers);
            const e = Object.entries(i.I), s = t.prototype;
            e.map((([t, [e]]) => {
                (31 & e || 32 & e) && Object.defineProperty(s, t, {
                    get() {
                        return ((t, i) => Q(this).F.get(i))(0, t)
                    }, set(e) {
                        ((t, i, e, s) => {
                            const n = Q(t), o = t, l = n.F.get(i), r = n.t, a = o;
                            if ((e = ((t, i) => null == t || m(t) ? t : 4 & i ? "false" !== t && ("" === t || !!t) : 2 & i ? parseFloat(t) : 1 & i ? t + "" : t)(e, s.I[i][0])) !== l) {
                                if (n.F.set(i, e), s._ && 128 & r) {
                                    const t = s._[i];
                                    t && t.map((t => {
                                        try {
                                            a[t](e, l, i)
                                        } catch (t) {
                                            Z(t, o)
                                        }
                                    }))
                                }
                                2 == (18 & r) && F(n, !1)
                            }
                        })(this, t, e, i)
                    }, configurable: !0, enumerable: !0
                })
            }));
            {
                const i = new Map;
                s.attributeChangedCallback = function (t, e, s) {
                    l.jmp((() => {
                        const e = i.get(t);
                        this[e] = (null !== s || "boolean" != typeof this[e]) && s
                    }))
                }, t.observedAttributes = e.filter((([t, i]) => 15 & i[0])).map((([t, e]) => {
                    const s = e[1] || t;
                    return i.set(s, t), s
                }))
            }
        }
        return t
    }, K = (t, i) => {
        const e = {t: i[0], p: i[1]};
        e.I = i[2], e.D = i[3], e._ = t._;
        const s = t.prototype.connectedCallback, n = t.prototype.disconnectedCallback;
        return Object.assign(t.prototype, {
            __registerHost() {
                X(this, e)
            }, connectedCallback() {
                (t => {
                    if (0 == (1 & l.t)) {
                        const i = Q(t), e = i.L, s = () => {
                        };
                        if (1 & i.t) a(t, i, e.D); else {
                            i.t |= 1;
                            {
                                let e = t;
                                for (; e = e.parentNode || e.host;) if (e["s-p"]) {
                                    _(i, i.S = e);
                                    break
                                }
                            }
                            (async (t, i, e, s, n) => {
                                if (0 == (32 & i.t) && (n = t.constructor, i.t |= 160, n.style)) {
                                    let t = n.style;
                                    const i = u(e);
                                    if (!tt.has(i)) {
                                        const s = () => {
                                        };
                                        ((t, i, e) => {
                                            let s = tt.get(t);
                                            r && e ? (s = s || new CSSStyleSheet, s.replace(i)) : s = i, tt.set(t, s)
                                        })(i, t, !!(1 & e.t)), s()
                                    }
                                }
                                const o = i.S, l = () => F(i, !0);
                                o && o["s-rc"] ? o["s-rc"].push(l) : l()
                            })(t, i, e)
                        }
                        s()
                    }
                })(this), s && s.call(this)
            }, disconnectedCallback() {
                (() => {
                    if (0 == (1 & l.t)) {
                        const t = Q(this);
                        t.o && (t.o.map((t => t())), t.o = void 0)
                    }
                })(), n && n.call(this)
            }
        }), t.is = e.p, V(t, e)
    }, U = t => {
        t.attachShadow({mode: "open"})
    }, N = t => l.i = t, G = t => Object.assign(l, t), J = new WeakMap, Q = t => J.get(t), X = (t, i) => {
        const e = {t: 0, l: t, L: i, F: new Map};
        return e.R = new Promise((t => e.O = t)), t["s-p"] = [], t["s-rc"] = [], a(t, e, i.D), J.set(t, e)
    }, Y = (t, i) => i in t, Z = (t, i) => (0, console.error)(t, i), tt = new Map, it = [], et = [], st = (t, i) => e => {
        t.push(e), s || (s = !0, i && 4 & l.t ? lt(ot) : l.raf(ot))
    }, nt = t => {
        for (let i = 0; i < t.length; i++) try {
            t[i](performance.now())
        } catch (t) {
            Z(t)
        }
        t.length = 0
    }, ot = () => {
        nt(it), nt(et), (s = it.length > 0) && l.raf(ot)
    }, lt = t => Promise.resolve(void 0).then(t), rt = st(et, !0);

function at(t) {
    return "https://widgets.thereviewsplace.com/2.0/" + t
}

function ct(t, i) {
    const e = i.filter(Boolean).join("&");
    return "https://api.thereviewsplace.com/v1/widgets/posts/" + t + (e ? "?" + e : "")
}

function ht(t) {
    return "https://repuso.com/?utm_source=widget&utm_medium=" + t + "&utm_campaign=powered"
}

function dt(t, i, e, s) {
    let n = e || "0,400";
    return "Roboto" === i && (n = n.replace(/400/g, "300")), function (t, i, e, s) {
        let n = "https://fonts.googleapis.com/css2?family=" + i.split(" ").join("+") + ":ital,wght@" + e + "&display=swap";
        return s && (n += "&text=" + s), pt(t, "stylesheet", n)
    }(t, i, n, s).then((() => function (t, i) {
        if ("fonts" in document) {
            const e = i.split(";").map((t => t.replace("0,", "normal ").replace("1,", "italic "))).map((i => i + " 1em " + t));
            return Promise.all(e.map((t => document.fonts.load(t))))
        }
    }(i, n)))
}

function pt(t, i, e, s, n, o) {
    return new Promise(((l, r) => {
        if (null === t.querySelector(`link[href="${e}"]`)) {
            const a = document.createElement("link");
            a.onload = l, a.onerror = () => r(a.remove()), a.setAttribute("rel", i), a.setAttribute("href", e), null != s && a.setAttribute("as", s), null != n && a.setAttribute("type", n), null != o && a.setAttribute("crossorigin", o), t.appendChild(a)
        } else l(null)
    }))
}

function ut(t) {
    t.target.onerror = null, t.target.src = at("images/no-img.png")
}

function ft(t) {
    if (t.ok) return t.json().catch((() => {
        throw Error("Widget [ID] not found")
    }));
    throw Error(t.status + " " + t.statusText)
}

function mt(t) {
    return Array.isArray(t.items) && t.items.forEach((i => {
        t.settings.remove_line_breaks && (i.text = function (t) {
            const i = document.createElement("div");
            return i.innerHTML = t, i.textContent || i.innerText || ""
        }(i.text)), Array.isArray(i.media_arr) && (i.media_arr = i.media_arr.slice(0, t.settings.slider_enabled_popup ? 12 : 1), i.media_arr_small = i.media_arr.slice(0, t.settings.slider_enabled_small ? 3 : 1))
    })), Promise.resolve(t)
}

function xt(t) {
    const i = {y: 31536e3, m: 2592e3, d: 86400, h: 3600, min: 60, sec: 1}, e = Date.now() / 1e3 - t;
    for (let t in i) {
        const s = Math.floor(e / i[t]);
        if (s >= 1) return s + t
    }
}

const gt = class extends HTMLElement {
        constructor() {
            super(), this.__registerHost(), this.imgLoad = O(this, "imgLoad", 7), this.imgError = O(this, "imgError", 7), this.index = 0, this.preload = !1, this.image = "none", this.load = () => {
                const t = new Image;
                t.onload = () => {
                    this.image = "url(" + this.src + ")", this.imgLoad.emit({w: t.width, h: t.height})
                }, t.onerror = () => this.imgError.emit(), t.src = this.src
            }, this.onIntersection = t => {
                t[0].isIntersecting && (this.io && this.io.disconnect(), this.loadImage())
            }
        }

        componentDidLoad() {
            this.preload && 0 === this.index && "none" === this.image ? this.loadImage() : "IntersectionObserver" in window ? (this.io = new IntersectionObserver(this.onIntersection, {rootMargin: "100px"}), this.io.observe(this.host)) : this.loadImage()
        }

        loadImage() {
            0 === this.index ? this.load() : window.setTimeout(this.load, 1400 * Math.min(3, this.index))
        }

        render() {
            return x(w, {style: {"background-image": this.image}}, "none" === this.image && "image" === this.type ? x("div", {class: "spin"}, x("div", {class: "bounce1"}), x("div", {class: "bounce2"}), x("div", null)) : null)
        }

        get host() {
            return this
        }

        static get style() {
            return "rw-ll-image{display:flex;align-items:center;justify-content:center}.spin{display:flex;justify-content:space-between;width:45px}.spin>div{background-color:currentColor;width:10px;height:10px;border-radius:100%;display:inline-block;-webkit-animation:bounce 1.4s infinite ease-in-out both;animation:bounce 1.4s infinite ease-in-out both}.spin>.bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spin>.bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes bounce{0%,80%,100%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1.0)}}@keyframes bounce{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1.0);transform:scale(1.0)}}"
        }
    }, wt = t => "object" == (t = typeof t) || "function" === t, vt = (t, i, ...e) => {
        let s = null, n = null, o = !1, l = !1, r = [];
        const a = i => {
            for (let e = 0; e < i.length; e++) s = i[e], Array.isArray(s) ? a(s) : null != s && "boolean" != typeof s && ((o = "function" != typeof t && !wt(s)) && (s += ""), o && l ? r[r.length - 1].u += s : r.push(o ? yt(null, s) : s), l = o)
        };
        if (a(e), i) {
            i.key && (n = i.key);
            {
                const t = i.className || i.class;
                t && (i.class = "object" != typeof t ? t : Object.keys(t).filter((i => t[i])).join(" "))
            }
        }
        if ("function" == typeof t) return t(null === i ? {} : i, r, bt);
        const c = yt(t, null);
        return c.g = i, r.length > 0 && (c.v = r), c.k = n, c
    }, yt = (t, i) => ({t: 0, C: t, u: i, $: null, v: null, g: null, k: null}),
    bt = {forEach: (t, i) => t.map(kt).forEach(i), map: (t, i) => t.map(kt).map(i).map(zt)},
    kt = t => ({vattrs: t.g, vchildren: t.v, vkey: t.k, vname: t.M, vtag: t.C, vtext: t.u}), zt = t => {
        if ("function" == typeof t.vtag) {
            const i = Object.assign({}, t.vattrs);
            return t.vkey && (i.key = t.vkey), t.vname && (i.name = t.vname), vt(t.vtag, i, ...t.vchildren || [])
        }
        const i = yt(t.vtag, t.vtext);
        return i.g = t.vattrs, i.v = t.vchildren, i.k = t.vkey, i.M = t.vname, i
    }, Ct = t => vt("div", {class: t.class}, vt("a", {
        onClick: t => t.stopPropagation(),
        style: {"font-size": "inherit", color: "inherit", "text-decoration": "none"},
        href: t.href,
        target: "_blank"
    }, t.prefix, vt("span", {style: {"font-family": "Courgette, cursive", "font-size": "1.2em"}}, "Repuso"))), $t = t => {
        if (!t.value || 0 === t.value) return null;
        let i = t.value;
        const e = [];
        for (; i > 0;) i >= 1 ? e.push(vt(jt, {type: "icon-star"})) : i > 0 && e.push(vt(jt, {type: "icon-star-half"})), i--;
        for (let i = Math.ceil(t.value) + 1; i <= 5; i++) e.push(vt(jt, {type: "icon-star-outline"}));
        return vt("div", {class: t.classname, style: {color: t.color, "line-height": "0"}}, e)
    }, Mt = t => vt("div", {
        class: t.class,
        style: {height: t.size, width: t.size, "font-size": t.size, color: t.color}
    }, vt(jt, {type: "icon-quote"})), jt = t => vt("svg", {class: "icon " + t.type}, vt("use", {href: "#" + t.type})),
    St = t => vt("svg", {
        "aria-hidden": "true",
        style: {position: "absolute", width: "0", height: "0", overflow: "hidden"}
    }, vt("defs", null, t.defs.map((t => t())))), Et = () => vt("symbol", {
        id: "icon-chevron-left",
        viewBox: "0 0 21 28"
    }, vt("path", {d: "M18.297 4.703l-8.297 8.297 8.297 8.297c0.391 0.391 0.391 1.016 0 1.406l-2.594 2.594c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.594c-0.391-0.391-0.391-1.016 0-1.406l11.594-11.594c0.391-0.391 1.016-0.391 1.406 0l2.594 2.594c0.391 0.391 0.391 1.016 0 1.406z"})),
    Lt = () => vt("symbol", {
        id: "icon-chevron-right",
        viewBox: "0 0 19 28"
    }, vt("path", {d: "M17.297 13.703l-11.594 11.594c-0.391 0.391-1.016 0.391-1.406 0l-2.594-2.594c-0.391-0.391-0.391-1.016 0-1.406l8.297-8.297-8.297-8.297c-0.391-0.391-0.391-1.016 0-1.406l2.594-2.594c0.391-0.391 1.016-0.391 1.406 0l11.594 11.594c0.391 0.391 0.391 1.016 0 1.406z"})),
    Pt = () => vt("symbol", {
        id: "icon-cross",
        viewBox: "0 0 32 32"
    }, vt("path", {d: "M22.957 23.758c-0.75 0.75-1.966 0.75-2.715 0l-4.242-4.848-4.242 4.846c-0.75 0.75-1.966 0.75-2.715 0-0.75-0.75-0.75-1.966 0-2.715l4.413-5.040-4.414-5.043c-0.75-0.75-0.75-1.965 0-2.715s1.965-0.75 2.715 0l4.243 4.85 4.242-4.85c0.75-0.75 1.965-0.75 2.715 0s0.75 1.966 0 2.715l-4.413 5.043 4.413 5.040c0.75 0.75 0.75 1.966 0 2.717z"})),
    Ot = () => vt("symbol", {
        id: "icon-share-square-o",
        viewBox: "0 0 26 28"
    }, vt("path", {d: "M22 15.453v4.047c0 2.484-2.016 4.5-4.5 4.5h-13c-2.484 0-4.5-2.016-4.5-4.5v-13c0-2.484 2.016-4.5 4.5-4.5h3.984c0.266 0 0.5 0.219 0.5 0.5 0 0.25-0.172 0.453-0.406 0.5-0.781 0.266-1.484 0.578-2.078 0.938-0.078 0.031-0.156 0.063-0.25 0.063h-1.75c-1.375 0-2.5 1.125-2.5 2.5v13c0 1.375 1.125 2.5 2.5 2.5h13c1.375 0 2.5-1.125 2.5-2.5v-3.344c0-0.187 0.109-0.359 0.281-0.453 0.313-0.141 0.594-0.344 0.844-0.578 0.141-0.141 0.359-0.203 0.547-0.125s0.328 0.25 0.328 0.453zM25.703 7.703l-6 6c-0.187 0.203-0.438 0.297-0.703 0.297-0.125 0-0.266-0.031-0.391-0.078-0.359-0.156-0.609-0.516-0.609-0.922v-3h-2.5c-3.437 0-5.625 0.656-6.844 2.047-1.266 1.453-1.641 3.797-1.156 7.391 0.031 0.219-0.109 0.438-0.313 0.531-0.063 0.016-0.125 0.031-0.187 0.031-0.156 0-0.313-0.078-0.406-0.203-0.109-0.156-2.594-3.672-2.594-6.797 0-4.188 1.313-9 11.5-9h2.5v-3c0-0.406 0.25-0.766 0.609-0.922 0.125-0.047 0.266-0.078 0.391-0.078 0.266 0 0.516 0.109 0.703 0.297l6 6c0.391 0.391 0.391 1.016 0 1.406z"})),
    It = () => vt("symbol", {
        id: "icon-quote",
        viewBox: "0 0 20 20"
    }, vt("path", {d: "M5.315 3.401c-1.61 0-2.916 1.343-2.916 3s1.306 3 2.916 3c2.915 0 0.972 5.799-2.916 5.799v1.4c6.939 0.001 9.658-13.199 2.916-13.199zM13.715 3.401c-1.609 0-2.915 1.343-2.915 3s1.306 3 2.915 3c2.916 0 0.973 5.799-2.915 5.799v1.4c6.938 0.001 9.657-13.199 2.915-13.199z"})),
    _t = () => vt("symbol", {
        id: "icon-star-outline",
        viewBox: "0 0 24 24"
    }, vt("path", {d: "M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984 4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"})),
    Ft = () => vt("symbol", {
        id: "icon-star-half",
        viewBox: "0 0 24 24"
    }, vt("path", {d: "M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031v9.328zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"})),
    Dt = () => vt("symbol", {
        id: "icon-star",
        viewBox: "0 0 24 24"
    }, vt("path", {d: "M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"})),
    Rt = () => vt("symbol", {
        id: "icon-resize-plus",
        viewBox: "0 0 512 512"
    }, vt("path", {d: "M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"})),
    At = () => vt("symbol", {
        id: "icon-resize-minus",
        viewBox: "0 0 512 512"
    }, vt("path", {d: "M304 192v32c0 6.6-5.4 12-12 12H124c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"})),
    Bt = () => vt("symbol", {
        id: "plyr-play",
        viewBox: "0 0 18 18"
    }, vt("path", {d: "M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"})),
    
    Ht = class extends HTMLElement {
        constructor() {
            super(), this.__registerHost(), this.itemSizeReceived = O(this, "itemSizeReceived", 7), this.arrows = "hover", this.dots = "always", this.zoom = "hover", this.autoplay = 0, this.loadDelay = !0, this.preload = !1, this.index = 0, this.maxed = !1, this.videoControls = !1, this.resumePlayback = 0, this.playerReady = !1, this.touchPos = null
        }

        handleKeyDown(t) {
            return "ArrowLeft" === t.key ? this.showPrev() : "ArrowRight" === t.key ? this.showNext() : void 0
        }

        onSrcChange() {
            this.source = "string" == typeof this.src ? JSON.parse(this.src) : this.src || []
        }

        componentWillLoad() {
            this.onSrcChange()
        }

        componentDidLoad() {
            this.host.addEventListener("touchstart", (t => {
                this.touchPos = {x: t.touches[0].clientX, y: t.touches[0].clientY}
            }), {passive: !0}), this.host.addEventListener("touchmove", (t => {
                if (!this.touchPos) return;
                const i = this.touchPos.x - t.touches[0].clientX, e = this.touchPos.y - t.touches[0].clientY;
                Math.abs(i) > Math.abs(e) && (i > 0 ? this.showNext() : this.showPrev()), this.touchPos = null
            }), {passive: !0})
        }

        connectedCallback() {
            this.autoplay > 0 && this.source.length > 1 && window.setTimeout((() => {
                this.timer = window.setInterval((() => this.showNext()), this.autoplay)
            }), 1e3 * Math.random())
        }

        disconnectedCallback() {
            window.clearInterval(this.timer)
        }

        showNext() {
            this.index = this.index === this.source.length - 1 ? 0 : this.index + 1
        }

        showPrev() {
            this.index = 0 === this.index ? this.source.length - 1 : this.index - 1
        }

        playerInit() {
            Ht.player_init || (Ht.player_init = function (t, i, e) {
                return new Promise(((s, n) => {
                    if (null === t.querySelector(`script[src="${i}"]`)) {
                        const o = document.createElement("script");
                        o.onload = s, o.onerror = () => n(o.remove()), o.setAttribute("src", i), o.setAttribute("type", e), t.appendChild(o)
                    } else s(null)
                }))
            }(document.head, at("rw-component-player.js"), "module")), Ht.player_init.then((() => this.playerReady = !0)).catch((() => console.warn("Failed to load video player")))
        }

        onIndexChange() {
            this.playerReady = !1, this.itemSizeReceived.emit(this.source[this.index].size)
        }

        onMaxedChange() {
            var t, i;
            (null === (i = null === (t = this.playerRef) || void 0 === t ? void 0 : t.plyr) || void 0 === i ? void 0 : i.playing) ? this.itemSizeReceived.emit(this.playerRef.size) : this.itemSizeReceived.emit(this.source[this.index].size)
        }

        saveItemSize(t, i) {
            this.source.forEach((e => {
                e.id === t && (e.size = i, this.source[this.index].id === t && this.itemSizeReceived.emit(i))
            }))
        }

        onAction(t) {
            t.stopImmediatePropagation(), window.clearInterval(this.timer)
        }

        removeItem(t) {
            this.source = this.source.filter((i => i.id !== t)), this.itemSizeReceived.emit(this.source[this.index].size)
        }

        render() {
            if (0 === this.source.length) return x(w, {style: {display: "none"}});
            let t = null, i = null, e = null;
            if (this.source.length > 0 && "hover" === this.zoom && (t = x("span", {
                class: "resize hover" + (this.maxed ? " maxed" : ""),
                onClick: t => {
                    var i;
                    this.onAction(t), null === (i = this.zoomAction) || void 0 === i || i.call(this)
                }
            }, x(jt, this.maxed ? {type: "icon-resize-minus"} : {type: "icon-resize-plus"}))), this.source.length > 1) {
                const t = "video" === this.source[this.index].type ? " onvideo" : "";
                "always" !== this.arrows && "hover" !== this.arrows || (i = [x("div", {
                    class: "arrows a-prev " + this.arrows + t,
                    onClick: t => {
                        this.onAction(t), this.showPrev()
                    }
                }, x("span", {class: "arrow-icon"}, x(jt, {type: "icon-chevron-left"}))), x("div", {
                    class: "arrows a-next " + this.arrows + t,
                    onClick: t => {
                        this.onAction(t), this.showNext()
                    }
                }, x("span", {class: "arrow-icon"}, x(jt, {type: "icon-chevron-right"})))]), "always" !== this.dots && "hover" !== this.dots || (e = x("div", {class: "dots " + this.dots}, this.source.map(((t, i) => x("span", {
                    class: i === this.index ? "dot-selected" : "dot",
                    onClick: t => {
                        this.onAction(t), this.index = i
                    }
                })))))
            }
            return x(w, {
                tabindex: "-1",
                dir: "ltr",
                onClick: t => this.onAction(t)
            }, this.source.map(((t, i) => x("rw-ll-image", {
                key: t.id,
                class: "media-item",
                src: t.url,
                type: t.type,
                index: this.loadDelay ? i : 0,
                style: {opacity: i === this.index ? "1" : "0"},
                onImgError: () => {
                    "image" === t.type && this.removeItem(t.id), "video" === t.type && this.saveItemSize(t.id, {
                        w: 320,
                        h: 200
                    })
                },
                onImgLoad: i => this.saveItemSize(t.id, i.detail),
                preload: this.preload
            }, "video" === t.type && i === this.index ? this.playerReady || this.resumePlayback ? x("rw-player", {
                ref: t => {
                    this.playerRef !== t && (this.playerRef = t)
                },
                source: t.src,
                poster: t.url,
                controls: this.videoControls,
                autoplay: !0,
                resumePlayback: this.resumePlayback
            }) : x("div", {
                class: "starter", onClick: t => {
                    this.onAction(t), this.playerInit()
                }
            }, x(jt, {type: "plyr-play"})) : null))), t, i, e, x(St, {defs: [Et, Lt, Rt, At, Bt]}))
        }

        get host() {
            return this
        }

        static get watchers() {
            return {src: ["onSrcChange"], index: ["onIndexChange"], maxed: ["onMaxedChange"]}
        }

        static get style() {
            return ".icon{display:inline-block;width:1em;height:1em;stroke-width:0;stroke:currentColor;fill:currentColor}.icon-chevron-left{width:0.75em}.icon-chevron-right{width:0.6785714285714285em}rw-media{cursor:default;position:relative;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;overflow:hidden;outline:none}@media (hover: hover){rw-media:hover>.hover{visibility:visible}}rw-media:focus>.hover{visibility:visible}.media-item{border-radius:inherit;position:absolute;top:0px;left:0px;width:100%;height:100%;background-position:center center;background-size:cover;background-clip:content-box;background-repeat:no-repeat;transition:opacity 0.6s ease-in}.resize{z-index:2;position:absolute;padding:4px;top:0px;right:0px;color:whitesmoke;filter:drop-shadow(0px 0px 2px gray);line-height:0;font-size:22px;cursor:pointer;visibility:hidden}.resize:hover{color:white}.arrows{z-index:1;position:absolute;top:0px;bottom:0px;display:flex;cursor:pointer;color:whitesmoke;filter:drop-shadow(0px 0px 2px gray);visibility:hidden}.arrows.onvideo{top:50px;bottom:50px}.arrows:hover{color:white}.arrows.always{visibility:visible}.a-prev{left:0px;padding:0px 10px}.a-next{right:0px;padding:0px 10px}.arrow-icon{align-self:center;font-size:16px;line-height:0}.dots{display:flex;align-items:center;z-index:1;position:absolute;left:50%;transform:translate(-50%, 0);bottom:8%;visibility:hidden}.dots.always{visibility:visible}.dot{width:6px;height:6px;display:inline-block;border-radius:100%;background:lightgray;opacity:0.8;border:1px solid white;margin:0 4px;cursor:pointer}.dot-selected{width:8px;height:8px;display:inline-block;border-radius:100%;background:white;margin:0 4px;cursor:pointer}.starter{display:flex;justify-content:center;align-items:center;padding:15px;font-size:36px;color:white;filter:drop-shadow(0px 0px 2px gray);cursor:pointer;opacity:0.9;z-index:1}.starter:hover{opacity:1}"
        }
    }, qt = class extends HTMLElement {
        constructor() {
            super(), this.__registerHost(), U(this), this.popupClosed = O(this, "popupClosed", 7), this.index = 0, this.resumePlayback = 0, this.maxed = !1
        }

        connectedCallback() {
            window.onorientationchange = () => window.setTimeout((() => {
                this.maxed && this.size && (this.size = Object.assign({}, this.size))
            }), 1e3)
        }

        disconnectedCallback() {
            window.onorientationchange = null
        }

        getWH() {
            if (this.size) {
                let t = this.size.w, i = this.size.h;
                const e = t / i, s = .85 * window.innerWidth, n = .85 * window.innerHeight;
                return i > n && (t = n * e, i = n), t > s && (t = s, i = s / e), {
                    width: Math.trunc(t) + "px",
                    height: Math.trunc(i) + "px"
                }
            }
            return null
        }

        onItemSizeReceived(t) {
            this.size = this.maxed ? t.detail : null
        }

        handleKeyDown(t) {
            "Escape" === t.key && this.close()
        }

        handleClick() {
            this.close()
        }

        close() {
            this.popupClosed.emit(), this.host.remove()
        }

        resize() {
            this.maxed || (this.main.style.setProperty("width", this.main.offsetWidth + "px"), this.main.style.setProperty("height", this.main.offsetHeight + "px")), this.maxed = !this.maxed
        }

        render() {
            let t = null;
            this.maxed || (t = [x("div", {class: "header"}, this.item.from_image ? x("div", {class: "avatar"}, x("img", {
                src: this.item.from_image,
                onError: ut
            })) : null, x("div", {class: "info"}, x("div", {class: "name"}, this.item.from_name), this.settings.disable_external_links ? null : x("div", {class: "channel-link"}, "repuso" !== this.item.type || this.settings.branded ? x("a", {
                href: this.item.post_url || this.item.from_url || null,
                target: "_blank"
            }, this.item.label, "Â ", x("span", null, x(jt, {type: "icon-share-square-o"}))) : null)), x("div", {
                class: "close",
                onClick: () => this.close()
            }, x(jt, {type: "icon-cross"}))), x("div", {
                class: "text",
                dir: "auto",
                innerHTML: this.item.text
            }), x("div", {class: "stat"}, x($t, {
                value: this.item.rating_value,
                classname: "star"
            }), x("div", {class: "spacer"}), x("div", {class: "date"}, xt(this.item.ts), "Â Â "), "repuso" !== this.item.type || this.settings.branded ? x("div", {class: "source"}, x("img", {src: at("images/28x28/logo-" + this.item.type + ".png")})) : null)]);
            let i = null;
            return this.item.media_arr && this.item.media_arr.length > 0 && (i = x("rw-media", {
                class: this.maxed ? "media maxed" : "media",
                maxed: this.maxed,
                index: this.index,
                autoplay: this.settings.media_autoplay,
                loadDelay: !1,
                src: this.item.media_arr,
                videoControls: !0,
                zoomAction: () => this.resize(),
                resumePlayback: this.resumePlayback
            })), x("div", {
                class: "container",
                dir: "ltr",
                onClick: t => t.stopPropagation(),
                style: this.settings.popup_font ? {"font-family": this.settings.popup_font} : null
            }, x("div", {
                class: this.maxed ? "main maxed" : "main",
                ref: t => this.main = t,
                style: this.getWH()
            }, t, i), this.settings.branded ? x(Ct, {
                class: "branding",
                prefix: "Powered by ",
                href: this.settings.branding_link_modal
            }) : null, x(St, {defs: [Dt, Ft, _t, Ot, Pt]}))
        }

        get host() {
            return this
        }

        static get style() {
            return ".icon{display:inline-block;width:1em;height:1em;stroke-width:0;stroke:currentColor;fill:currentColor}.icon-share-square-o{width:0.9319285714285714em}:host{all:initial;display:flex;justify-content:center;align-items:center;z-index:2147483002;position:fixed;top:0px;left:0px;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.8);font-size:14px;font-family:Verdana, Helvetica, Arial, sans-serif}.container{display:flex;flex-direction:column;margin:30px}.main{min-width:33vw;max-width:600px;max-height:85vh;padding:30px;display:flex;flex-direction:column;border-radius:5px;color:#565656;background-color:#ffffff;transition:width 0.5s, height 0.5s}.main.maxed{min-width:auto;max-width:85vw;padding:4px}.branding{align-self:flex-end;margin-top:4px;font-size:12px;color:#ffffff}.header{display:flex;align-items:flex-start;min-height:35px}.avatar{margin-right:10px}.avatar img{min-height:35px;min-width:35px;max-width:35px;border-radius:5px}.info{display:flex;flex-direction:column;align-items:flex-start;flex-grow:1;margin-right:10px}.name{font-weight:bold}.channel-link a,.channel-link a:hover{display:flex;color:#b8b8b8;text-decoration:none;font-size:13px}.channel-link span{display:flex;align-items:flex-end;font-size:14px}.close{display:flex;cursor:pointer;font-size:28px}.text{overflow-y:auto;word-break:break-word;line-height:24px;min-height:48px;margin-top:10px;margin-bottom:10px}.stat{display:flex;align-items:center;min-height:28px}.spacer{flex-grow:1}.source img{max-width:28px;max-height:28px;min-width:28px;min-height:28px}.star{font-size:22px;color:gold}.media{min-height:150px;height:30vh;margin-top:10px;border:1px solid #f2f2f2;border-radius:5px}.media.maxed{min-height:auto;height:100%;margin:0;border:0px}"
        }
    }, Wt = class extends HTMLElement {
        constructor() {
            super(), this.__registerHost(), U(this), this.media = [], this.reviews = []
        }

        componentWillLoad() {
            const t = {
                disable_custom_posts: this.dataDisableCustomPosts || null,
                tags: this.dataContentTags || null,
                website_id: this.dataWebsiteId || null
            };
            return "undefined" != typeof rw_schema_params && Object.entries(rw_schema_params).forEach((([i, e]) => t["schema[" + i + "]"] = e)), this.qs = function (t) {
                return Object.keys(t).filter((i => t[i])).map((i => encodeURIComponent(i) + "=" + encodeURIComponent("" + t[i]))).join("&")
            }(t), fetch(ct(this.dataRwGrid, [this.qs])).then((t => ft(t))).catch((t => console.warn(t.message))).then((t => function (t) {
                return t && t.items && 0 !== t.items.length ? !0 === t.settings.hide_on_mobile && window.screen.width <= 468 ? new Promise((() => {
                })) : Promise.resolve(t) : new Promise((() => {
                }))
            }(t))).then((t => mt(t))).then((t => this.data = t)).then((() => this.data.settings.text_lines = Math.floor((this.data.settings.card_height - 30 - 35 - 18 - 5 - 4) / 26))).then((() => this.data.settings.text_lines < 1 ? this.data.settings.text_lines = 1 : null)).then((() => this.data.settings.branding_link = ht("grid"))).then((() => this.data.settings.branding_link_modal = ht("grid-modal")))
        }

        componentDidLoad() {
            const t = function (t, i) {
                switch (i || "Default") {
                    case"Default":
                        return Promise.resolve();
                    case"Inherit":
                        return Promise.resolve(t.style.setProperty("font-family", "inherit"));
                    default:
                        return dt(t, i, "0,400;0,700;1,400").then((() => t.style.setProperty("font-family", i))).catch((() => console.warn("Unable to load font. Fallback to default")))
                }
            }(this.host, this.data.settings.font);
            if (this.data.settings.branded && dt(this.host, "Courgette", "0,400", "Repuso"), this.data.settings.custom_css) {
                const t = document.createElement("style");
                t.textContent = this.data.settings.custom_css, t.setAttribute("data-name", "custom-css"), this.host.shadowRoot.appendChild(t)
            }
            t.then((() => {
                this.host.style.setProperty("display", "inline-block"), this.showMore(this.data.settings.rows), this.data.settings.popup_font = window.getComputedStyle(this.host).getPropertyValue("font-family")
            })), function (t) {
                t && null === document.querySelector("#rw-schema") && document.head.insertAdjacentHTML("beforeend", t)
            }(this.data.schema)
        }

        async showMore(t) {
            const i = this.calculateColumnCount();
            let e = this.reviews.length + t * i;
            e % i && (e = Math.floor(e / i) * i);
            const s = this.data.items.slice(this.reviews.length, e);
            this.reviews = [...this.reviews, ...s];
            const n = this.data.items.length - this.reviews.length, o = 3 * this.data.settings.more_rows;
            if (this.data.more && n - o < 0) {
                const t = this.data.items.filter((t => t.ts_order)).pop(), i = t ? t.ts_order : 0,
                    e = await this.prefetch(i, Math.abs(n - o));
                this.data.more = e.more, this.data.items.push(...e.items || [])
            }
            this.reviews.length >= this.data.items.length && !this.data.more && (this.data.settings.enable_more_button = !1, (() => {
                {
                    const t = Q(this);
                    t.l.isConnected && 2 == (18 & t.t) && F(t, !1)
                }
            })())
        }

        prefetch(t, i) {
            return fetch(ct(this.dataRwGrid, [this.qs, "before_ts=" + t, "limit_posts=" + i])).then((t => ft(t))).then((t => mt(t)))
        }

        calculateColumnCount() {
            const t = this.host.offsetWidth / 250;
            return t >= 3 ? 3 : t >= 2 ? 2 : 1
        }

        popupReview(t, i, e = !1) {
            var s, n, o, l, r, a, c;
            const h = document.createElement("rw-popup-review");
            h.item = t, h.settings = this.data.settings, h.maxed = e, h.index = null === (s = this.media[i]) || void 0 === s ? void 0 : s.index, (null === (l = null === (o = null === (n = this.media[i]) || void 0 === n ? void 0 : n.playerRef) || void 0 === o ? void 0 : o.plyr) || void 0 === l ? void 0 : l.playing) && (h.resumePlayback = null === (c = null === (a = null === (r = this.media[i]) || void 0 === r ? void 0 : r.playerRef) || void 0 === a ? void 0 : a.plyr) || void 0 === c ? void 0 : c.currentTime), e && (h.size = {
                w: this.media[i].offsetWidth,
                h: this.media[i].offsetHeight
            }), document.body.appendChild(h)
        }

        actionPost(t) {
            t.content.url && (t.content.newwindow ? window.open(t.content.url, "_blank") : top.location.href = t.content.url)
        }

        render() {
            const t = {
                height: (this.data.settings.card_height || 170) + "px",
                color: this.data.settings.font_color || "#000000",
                "background-color": this.data.settings.no_background_color ? "transparent" : this.data.settings.background_color || "#FFFFFF",
                margin: 0 === this.data.settings.margin ? "-1px 0px 0px -1px" : this.data.settings.margin / 2 + "px"
            };
            return this.data.settings.show_border && Object.assign(t, {
                border: "1px solid " + (this.data.settings.border_color || "#CCCCCC"),
                "border-radius": (this.data.settings.border_radius || 0) + "px"
            }), x("div", {
                class: "container",
                dir: "ltr"
            }, x("div", {class: "grid"}, this.reviews.map(((i, e) => x("div", {
                class: "column",
                key: i.id
            }, i.content ? x("div", {
                class: "post",
                style: Object.assign({}, t, i.content.url ? {cursor: "pointer"} : {cursor: "default"}),
                onClick: () => this.actionPost(i)
            }, x("img", {
                class: "post-left",
                src: at("images/lauwer-left.png")
            }), x("div", {class: "post-middle"}, x("div", {class: "post-title"}, i.content.title), i.content.banner_text ? x("div", {class: "post-banner-text"}, i.content.banner_text) : x("img", {
                class: "post-banner",
                src: i.media
            }), x("div", {class: "post-body"}, i.content.body)), x("img", {
                class: "post-right",
                src: at("images/lauwer-right.png")
            })) : x("div", {
                class: "item",
                style: t
            }, i.media_arr_small && i.media_arr_small.length > 0 ? x("rw-media", {
                class: "media",
                ref: t => this.media[e] = t,
                zoomAction: () => this.popupReview(i, e, !0),
                autoplay: this.data.settings.media_autoplay,
                src: i.media_arr_small
            }) : x(Mt, {
                class: "quote-left",
                size: (this.data.settings.icon_size || 34) + "px",
                color: this.data.settings.button_color || "#E67E21"
            }), x("div", {class: "data"}, x("div", {dir: "auto"}, x("div", {
                class: "text",
                style: {"-webkit-line-clamp": this.data.settings.text_lines},
                innerHTML: i.text
            }), x("div", {class: "rating"}, x($t, {value: i.rating_value, classname: "star"}))), x("div", {
                class: "footer",
                onClick: () => this.popupReview(i, e)
            }, x("div", {class: "info"}, x("div", {class: "name"}, i.from_name), x("div", {class: "link"}, x("div", {class: "view-post"}, "Â ", this.data.settings.view_post_text), "repuso" !== i.type || this.data.settings.branded ? x("div", {class: "channel"}, x("img", {src: at("images/15x15/logo-" + i.type + ".png")})) : null)), i.from_image ? x("div", {class: "avatar"}, x("img", {
                src: i.from_image,
                onError: ut
            })) : null)))))), x("div", {class: "column-ghost"}), x("div", {class: "column-ghost"})), this.data.settings.enable_more_button ? x("a", {
                role: "button",
                href: "javascript:void(0)",
                class: "more-button",
                onClick: () => this.showMore(this.data.settings.more_rows),
                style: {
                    "background-color": this.data.settings.button_color || "#E67E21",
                    color: this.data.settings.button_text_color || "#FFFFFF",
                    "margin-bottom": this.data.settings.branded ? "0px" : "20px"
                }
            }, this.data.settings.button_text) : null, this.data.settings.branded ? x(Ct, {
                class: "branding",
                prefix: "Powered by ",
                href: this.data.settings.branding_link
            }) : null, x(St, {defs: [Dt, Ft, _t, It]}))
        }

        get host() {
            return this
        }

        static get style() {
            return ".icon{display:inline-block;width:1em;height:1em;stroke-width:0;stroke:currentColor;fill:currentColor}:host{all:initial;display:none;font-family:Verdana, Helvetica, Arial, sans-serif;width:100%}.container{display:flex;flex-direction:column;overflow-anchor:none}.grid{display:flex;flex-wrap:wrap}.column{flex:1 1 33.3%;min-width:250px;animation:fadein 0.6s}.column-ghost{flex:1 1 33.3%;min-width:250px;height:0px}@keyframes fadein{0%{opacity:0}100%{opacity:1}}.item{display:flex;overflow:hidden;padding:15px;box-sizing:border-box}.quote-left{transform:rotate(180deg);margin-right:5px}.media{margin-right:8px;min-width:120px;max-width:120px;border:1px solid #f2f2f2;border-radius:8px}.data{flex-grow:1;position:relative;overflow:hidden}.text{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;font-size:14px;line-height:26px;padding-left:3px}.footer{position:absolute;right:0px;bottom:0px;display:flex;justify-content:flex-end;cursor:pointer;max-width:100%;overflow:hidden}.rating{margin-top:5px}.star{font-size:18px;margin:0px -2px 0px 1px;color:gold}.info{display:flex;flex-direction:column;justify-content:space-around;align-items:flex-end;overflow:hidden}.name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:14px;font-weight:bold;max-width:100%}.link{display:flex;align-items:center}.view-post{opacity:0.6;font-size:12px;white-space:nowrap}.channel{display:flex}.channel img{width:15px;height:15px;min-width:15px;min-height:15px;margin-left:5px}.avatar{display:flex;align-items:flex-end}.avatar img{max-width:35px;min-width:35px;min-height:35px;margin-left:10px;border-radius:5px}.post{display:flex;align-items:center;justify-content:center;padding:15px;box-sizing:border-box;overflow:hidden}.post-left,.post-right{min-width:43px;height:100px}.post-left{margin-left:10px}.post-right{margin-right:10px}.post-middle{display:flex;flex-direction:column;align-items:center;min-width:140px;text-align:center}.post-title{font-weight:bold;font-size:12px}.post-banner-text{font-size:24px;font-weight:bold;padding-top:10px;padding-bottom:10px}.post-banner{max-height:65px;margin:5px 0px}.post-body{font-style:italic}.more-button{align-self:center;margin:20px;padding:12px 30px;border-radius:5px;text-align:center;font-weight:bold;cursor:pointer;font-size:14px;user-select:none;-moz-user-select:none;-webkit-user-select:none;text-decoration:none;-webkit-touch-callout:none}.more-button:hover{opacity:.9}.branding{margin-top:2px;font-size:12px;align-self:center;color:#b2b2b2}"
        }
    };
!function () {
    pt(document.head, "preconnect", "https://fonts.googleapis.com"), pt(document.head, "preconnect", "https://fonts.gstatic.com", null, null, "");
    const t = import.meta.url.split("/").pop().split(".").shift(), i = "div[data-rw-" + t.split("-").pop() + "]";
    document.querySelectorAll(i).forEach((i => {
        if (!i.querySelector(t)) {
            const e = document.createElement(t);
            for (let t of i.getAttributeNames()) e.setAttribute(t, i.getAttribute(t));
            e.removeAttribute("id"), e.removeAttribute("style"), i.appendChild(e)
        }
    }))
}();

const Tt = K(gt, [0, "rw-ll-image", {src: [1], type: [1], index: [2], preload: [4], image: [32]}]),
    Vt = K(Ht, [0, "rw-media", {
        arrows: [1],
        dots: [1],
        zoom: [1],
        autoplay: [2],
        loadDelay: [4, "load-delay"],
        preload: [4],
        zoomAction: [16],
        index: [1026],
        maxed: [4],
        videoControls: [4, "video-controls"],
        resumePlayback: [2, "resume-playback"],
        src: [1],
        playerRef: [1032, "player-ref"],
        source: [32],
        playerReady: [32]
    }, [[0, "keydown", "handleKeyDown"]]]), Kt = K(qt, [1, "rw-popup-review", {
        item: [8],
        settings: [8],
        index: [2],
        resumePlayback: [2, "resume-playback"],
        maxed: [1028],
        size: [1040]
    }, [[0, "itemSizeReceived", "onItemSizeReceived"], [4, "keydown", "handleKeyDown"], [0, "click", "handleClick"]]]),
    Ut = K(Wt, [1, "rw-widget-grid", {
        dataRwGrid: [1, "data-rw-grid"],
        dataDisableCustomPosts: [1, "data-disable-custom-posts"],
        dataContentTags: [1, "data-content-tags"],
        dataWebsiteId: [1, "data-website-id"],
        reviews: [32]
    }]), Nt = t => {
        "undefined" != typeof customElements && [Tt, Vt, Kt, Ut].forEach((i => {
            customElements.get(i.is) || customElements.define(i.is, i, t)
        }))
    };

export {
    Tt as RwLlImage,
    Vt as RwMedia,
    Kt as RwPopupReview,
    Ut as RwWidgetGrid,
    Nt as defineCustomElements,
    N as setAssetPath,
    G as setPlatformOptions
};
Nt();

export const GridRepuso = ({ repusoReference }) => (
    <>
        <rw-widget-grid data-rw-grid={repusoReference}></rw-widget-grid>
    </>
);
